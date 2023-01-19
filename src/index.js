const Player = require("./scripts/player.js");
const Enemy = require("./scripts/enemy.js");
const BulletController = require("./scripts/bulletController.js");
const EnemyController = require("./scripts/enemyController.js");
const HUD = require("./scripts/hud.js");
const Squishy = require("./scripts/squish.js");

// Grabbing the canvas elements
const field = document.getElementById("contents");
const bg = document.getElementById("backGround");
const hud = document.getElementById("HUD");

// Grabbing the context for each canvas
const fieldCtx = field.getContext("2d");
const bgCtx = bg.getContext("2d");
const hudCtx = hud.getContext("2d");
const rect = field.getBoundingClientRect();

// Fix up the resolution of these canvas-es

fixResolution(field, fieldCtx);
fixResolution(bg, bgCtx);
fixResolution(hud, hudCtx);

//Creating new instances for the game
let plBC = new BulletController(field); // field layer is where the game takes place
let enemyController = new EnemyController(field);
let player = new Player(rect.width / 2,
    rect.height / 2, plBC,
    {
        strokeColor: "green",
        canvas: field
    })

const hudInterface = new HUD(hud, player);

// Variables to keep the game going
let gameLoop;
let bossSpawned;
let wave = 0;
let countDownCountedDown;
let newWaveJustStarted = true;
let timer;
let guns = [];
let timerIsSet = true;
let timeBetweenWaves = 20000; // milliseconds
let muted = false;

enemyController.createEnemies(wave)

// The gameplay loop starts here
function play() {
    defaultStyle();
    let currentTotalEnemyHealth = 0;
    let totalEnemyMaxHealth = 0;
    muted = player.muted
    if (newWaveJustStarted) {
        if (wave === 5) bossSpawned = true;
        newWaveJustStarted = false;
        timer = setTimeout(() => {
            countDownCountedDown = true;
        }, timeBetweenWaves)
    }

    // Clear the frame
    fieldCtx.clearRect(0, 0, field.width, field.height)
    hudCtx.clearRect(0, 0, hud.width, hud.height)

    // Start drawing the new frame
    plBC.draw(fieldCtx);
    enemyController.enemies.forEach(enemy => {
        if (enemy.health > 0) {
            plBC.collidesWith(enemy, {
                muted: muted
            })
            enemy.draw(fieldCtx, {
                muted: muted
            })
            currentTotalEnemyHealth += enemy.health
            totalEnemyMaxHealth += enemy.maxHp
            if (!guns.includes(enemy.bulletController)) {
                guns.push(enemy.bulletController)
            }
        } else {
            enemyController.enemies.splice(enemyController.enemies.indexOf(enemy), 1)
        }
    });
    guns.forEach(gun => {
        gun.collidesWith(player, {
            muted: muted
        }
        );
        gun.draw(fieldCtx);
    })

    if (player.health > 0) {
        player.draw(fieldCtx);
    } else {
        player = null;
        gameOver();
    }
    hudInterface.draw();
    if (currentTotalEnemyHealth > 0 && bossSpawned) {
        hudInterface.drawBossHp(currentTotalEnemyHealth, totalEnemyMaxHealth)
    }
    if (enemyController.enemies.length < 1 || countDownCountedDown) {
        clearTimeout(timer)
        countDownCountedDown = false;
        if (bossSpawned && enemyController.enemies.length < 1) {
            bossSpawned = false;
            gameOver()
        }
        if (timerIsSet && !bossSpawned) {
            timerIsSet = false;
            setTimeout(() => {
                wave += 1;
                newWaveJustStarted = true;
                timerIsSet = true;
                enemyController.createEnemies(wave);
                if (enemyController.enemies.length < 1) guns.splice(0);
            }, 2000)
        }
    }
}

// Customize styles for gameplay layer
function defaultStyle() {
    fieldCtx.shadowColor = "blue";
    fieldCtx.shadowBlur = 30;
}

// gameLoop = setInterval(play, 1000 / 60);

function fixResolution(canvas, ctx) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    ctx.imageSmoothingEnabled = true;
}


function gameOver() {
    clearInterval(gameLoop);
    player = null
    hudInterface.renderGameover();
}

let titleLoop;

function titleScreen() {
    hudCtx.clearRect(0, 0, hud.width, hud.height)
    const gradientBg = hudCtx.createLinearGradient(0, 0, 0, hud.height);
    gradientBg.addColorStop(0, "#23353D");
    gradientBg.addColorStop(1, "#0C337A");
    hudCtx.fillStyle = gradientBg;
    hudCtx.fillRect(0, 0, hud.width, hud.height)
    hudInterface.drawTitleScreen()
    if (hudInterface.playerPressedPlay) {
        hudInterface.playerPressedPlay = false;
        clearInterval(titleLoop)
        // If player is dead, start a new game
        if (player === null) {
            plBC = null;
            plBC = new BulletController(field)
            player = new Player(rect.width / 2,
                rect.height / 2, plBC,
                {
                    strokeColor: "green",
                    canvas: field,
                    muted: muted
                })
            hudInterface.player = player;
            wave = 0;
            bossSpawned = null;
            countDownCountedDown = null;
            guns = [];
            timer = null;
            newWaveJustStarted = true;
            timerIsSet = true;
            enemyController = null;
            enemyController = new EnemyController(field);
            enemyController.createEnemies(wave)

        }
        const escapeFunc = (e) => {
            e.preventDefault()
            if (e.code === "Escape") {
                clearInterval(gameLoop)
                titleLoop = setInterval(titleScreen, 1000 / 60)
                removeEventListener("keydown", escapeFunc)
            }
        }
        addEventListener("keydown", escapeFunc)
        gameLoop = setInterval(play, 1000 / 60)
    };

}

titleLoop = setInterval(titleScreen, 1000 / 60)


// Background image

const img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.
img.src = "./images/Clouds/Clouds3/3.png";
const canvasXSize = rect.width;
const canvasYSize = rect.height;
const speed = 10; // lower is faster
const scale = 2.5;
const y = -4.5; // vertical offset

// Main program
const dx = 0.75;
let imgW;
let imgH;
let x = 0;
let clearX;
let clearY;

img.onload = () => {
    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > canvasXSize) {
        // Image larger than canvas
        x = canvasXSize - imgW;
    }

    // Check if image dimension is larger than canvas
    clearX = Math.max(imgW, canvasXSize);
    clearY = Math.max(imgH, canvasYSize);

    // Get canvas context

    // Set refresh rate
    return setInterval(drawBackground, speed);
};

function drawBackground() {
    bgCtx.clearRect(0, 0, clearX, clearY); // clear the canvas

    // If image is <= canvas size
    if (imgW <= canvasXSize) {
        // Reset, start from beginning
        if (x > canvasXSize) {
            x = -imgW + x;
        }

        // Draw additional image1
        if (x > 0) {
            bgCtx.drawImage(img, -imgW + x, y, imgW, imgH);
        }

        // Draw additional image2
        if (x - imgW > 0) {
            bgCtx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
        }
    } else {
        // Image is > canvas size
        // Reset, start from beginning
        if (x > canvasXSize) {
            x = canvasXSize - imgW;
        }

        // Draw additional image
        if (x > canvasXSize - imgW) {
            bgCtx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
    }

    // Draw image
    bgCtx.drawImage(img, x, y, imgW, imgH);

    // Amount to move
    x += dx;
}