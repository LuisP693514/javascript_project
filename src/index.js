const Player = require("./scripts/player.js");
const Enemy = require("./scripts/enemy.js");
const BulletController = require("./scripts/bulletController.js");
const EnemyController = require("./scripts/enemyController.js");

// Grabbing the canvas elements
const field = document.getElementById("contents");
const bg = document.getElementById("backGround");
const hud = document.getElementById("HUD");

// Grabbing the context for each canvas
const fieldCtx = field.getContext("2d");
const bgCtx = bg.getContext("2d");
const hudCtx = hud.getContext("2d");

// Used to scale the canvas to correct resolution for higher quality display
const dpr = window.devicePixelRatio;
const rect = field.getBoundingClientRect();

// Scale the canvas to User's resolution x3 layers

// Background
bgCtx.width = rect.width * dpr;
bgCtx.height = rect.height * dpr;
// Gamespace
field.width = rect.width * dpr;
field.height = rect.height * dpr;
// HUD
hudCtx.width = rect.width * dpr;
hudCtx.height = rect.height * dpr;

// Scale all the pixels with user's machine x3 layers

// Background
bgCtx.scale(dpr, dpr);
bg.style.width = `${rect.width}px`;
bg.style.height = `${rect.height}px`;

// Gamespace
fieldCtx.scale(dpr, dpr);
field.style.width = `${rect.width}px`;
field.style.height = `${rect.height}px`;

// HUD
hudCtx.scale(dpr, dpr);
hud.style.width = `${rect.width}px`;
hud.style.height = `${rect.height}px`;

//Creating new instances for the game
const plBC = new BulletController(field); // field layer is where the game takes place
const enemyController = new EnemyController(field);
const player = new Player(rect.width / 2,
    rect.height / 2, plBC,
    {
        strokeColor: "green",
        canvas: field
    })

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
const enBc = new BulletController()
let enemy = new Enemy(100, 100, enBc)
// The gameplay loop starts here
function play() {
    defaultStyle();
    fieldCtx.clearRect(0, 0, field.width, field.height)
    plBC.draw(fieldCtx);
    // enemies.forEach(enemy => {
    //     if(enemy.health > 0){
    //         enemy.draw()
    //     }
    // });
    enBc.draw(fieldCtx)
    if (enemy.health > 0) {
        plBC.collidesWith(enemy);
        enemy.draw(fieldCtx);
    } else {
        enemy = {}
    }

    if (player.health > 0) {
        enBc.collidesWith(player);
        player.draw(fieldCtx);
    } else {
        gameOver();
    }
}

//

// Customize styles for gameplay layer
function defaultStyle() {
    fieldCtx.shadowColor = "blue";
    fieldCtx.shadowBlur = 30;
}
const gameLoop = setInterval(play, 1000 / 60);

function gameOver() {
    clearInterval(gameLoop)
    setTimeout(gameLoop, 3000)
}

