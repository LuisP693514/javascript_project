const Player = require("./scripts/player.js");
const Enemy = require("./scripts/enemy.js");
const BulletController = require("./scripts/bulletController.js");
const EnemyController = require("./scripts/enemyController.js");
const HUD = require("./scripts/hud.js");

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

const hudInterface = new HUD(hudCtx, player);
// Waves keep the game going!
let wave = 0;
// Create waves
// function generateWave(){
//     wave++;
//     let rows = wave * 2;
//     for (let i = 0; i < rows; i++) {
//        enemies.push(new Enemy(50 + i* 50, ))

//     }
// }
const enemies = []
const enemiesGuns = [];
const enBc = new BulletController()
const enBc2 = new BulletController()
let enemy = new Enemy(50, 50, enBc)
let enemy2 = new Enemy(1230, 670, enBc2)
enemy2.loopLoc = 2;
enemies.push(enemy, enemy2)
enemiesGuns.push(enBc, enBc2)

// The gameplay loop starts here
function play() {
    defaultStyle();
    let currentTotalEnemyHealth = 0;
    let totalEnemyMaxHealth = 0;
    fieldCtx.clearRect(0, 0, field.width, field.height)
    hudCtx.clearRect(0, 0, hud.width, hud.height)
    plBC.draw(fieldCtx);
    enemies.forEach(enemy => {
        if (enemy.health > 0) {
            plBC.collidesWith(enemy)
            enemy.draw(fieldCtx)
            currentTotalEnemyHealth += enemy.health
            totalEnemyMaxHealth += enemy.maxHp
        } else {
            enemies.splice(enemies.indexOf(enemy), 1);
        }
    });
    enemiesGuns.forEach(gun => {
        gun.collidesWith(player)
        gun.draw(fieldCtx)
    })

    if (player.health > 0) {
        player.draw(fieldCtx);
    } else {
        player = null;
        gameOver();
    }
    hudInterface.draw();
    hudInterface.drawBossHp(currentTotalEnemyHealth, totalEnemyMaxHealth)
}

//

// Customize styles for gameplay layer
function defaultStyle() {
    fieldCtx.shadowColor = "blue";
    fieldCtx.shadowBlur = 30;
}

let gameLoop = setInterval(play, 1000 / 60);

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
    clearInterval(gameLoop)
    setTimeout(() => {
        player = new Player(rect.width / 2,
            rect.height / 2, plBC,
            {
                strokeColor: "green",
                canvas: field
            })
        gameLoop = setInterval(play, 1000 / 60)
    }, 3000)
}

