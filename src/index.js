const Game = require("./scripts/game.js");
const View = require("./scripts/view.js");
const Player = require("./scripts/player.js");
const Enemy = require("./scripts/enemy.js");

document.addEventListener("DOMContentLoaded", () => {

    const canvasEl = document.getElementById("canvas")

    canvasEl.width = 1000;
    canvasEl.height = 720;

    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,400,400);
    

    console.log("hellow world")

});