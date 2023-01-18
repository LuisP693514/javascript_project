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
const plBC = new BulletController(field); // field layer is where the game takes place
const enemyController = new EnemyController(field);
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
let wave = 1;
let countDownCountedDown;
let newWaveJustStarted = true;
let timer;
let guns = [];

enemyController.createEnemies(wave)

// The gameplay loop starts here
function play() {
    defaultStyle();
    let currentTotalEnemyHealth = 0;
    let totalEnemyMaxHealth = 0;
    if (newWaveJustStarted) {
        newWaveJustStarted = false;
        timer = setTimeout(() => {
            countDownCountedDown = true;
        }, 10000)
    }
    fieldCtx.clearRect(0, 0, field.width, field.height)
    hudCtx.clearRect(0, 0, hud.width, hud.height)
    plBC.draw(fieldCtx);
    enemyController.enemies.forEach(enemy => {
        if (enemy.health > 0) {
            plBC.collidesWith(enemy)
            enemy.draw(fieldCtx)
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
        gun.collidesWith(player);
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
        bossSpawned = false;
    }
    if (enemyController.enemies.length < 1|| countDownCountedDown) {
        clearTimeout(timer)
        countDownCountedDown = false;
        enemyController.enemies.push("hi")
        setTimeout(() => {
            if (enemyController.enemies.length < 1) guns.splice(0)
            enemyController.enemies.splice(0)
            wave += 1;
            newWaveJustStarted = true;
            enemyController.createEnemies(wave)
        }, 2000)
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
    setTimeout(() => {
        player = new Player(rect.width / 2,
            rect.height / 2, plBC,
            {
                strokeColor: "green",
                canvas: field
            })
        gameLoop = setInterval(play, 1000 / 60);
    }, 3000)
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
        clearInterval(titleLoop)
        gameLoop = setInterval(play, 1000 / 60)
    };

}

titleLoop = setInterval(titleScreen, 1000 / 60)


titleScreen();
