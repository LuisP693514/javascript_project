const Player = require("./scripts/player.js");
const Enemy = require("./scripts/enemy.js");
const BulletController = require("./scripts/bulletController.js");

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

// Customize shadows for gameplay layer
fieldCtx.shadowColor = "green";
fieldCtx.shadowBlur = 30;

//Creating new instances for the game
const plBC = new BulletController(field); // field layer is where the game takes place
const player = new Player(rect.width / 2, rect.height / 2, plBC, { strokeColor: "green" })

function play() {
    fieldCtx.clearRect(0, 0, field.width, field.height)
    plBC.draw(fieldCtx);
    player.draw(fieldCtx);
}

setInterval(play, 1000 / 60);

