const Game = require("./scripts/game.js");
const View = require("./scripts/view.js");
const Player = require("./scripts/player.js");
const Enemy = require("./scripts/enemy.js");

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas1")

    canvasEl.width = 1280;
    canvasEl.height = 720;

    const bgz1 = new Image(canvasEl.width, canvasEl.height);

    bgz1.src = "../images/Clouds/Clouds5/3.png"
    
    const canvasXSize = canvasEl.width;
    const canvasYSize = canvasEl.height;
    const speed = 1; // lower is faster
    const scale = 1.05;
    const y = -4.5; // vertical offset

    // Main program
    const dx = 3;
    let imgW;
    let imgH;
    let x = 0;
    let clearX;
    let clearY;
    let ctx;

    bgz1.onload = () => {
        imgW = bgz1.width * scale;
        imgH = bgz1.height * scale;

        if (imgW > canvasXSize) {
            // Image larger than canvas
            x = canvasXSize - imgW;
        }

        // Check if image dimension is larger than canvas
        clearX = Math.max(imgW, canvasXSize);
        clearY = Math.max(imgH, canvasYSize);

        // Get canvas context
        ctx = document.getElementById("canvas1").getContext("2d");

        // Set refresh rate
        return setInterval(draw, speed);
    };

    function draw() {
    ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

        // If image is <= canvas size
        if (imgW <= canvasXSize) {
            // Reset, start from beginning
            if (x > canvasXSize) {
            x = -imgW + x;
            }

            // Draw additional image1
            if (x > 0) {
            ctx.drawImage(bgz1, -imgW + x, y, imgW, imgH);
            }

            // Draw additional image2
            if (x - imgW > 0) {
            ctx.drawImage(bgz1, -imgW * 2 + x, y, imgW, imgH);
            }
        } else {
            // Image is > canvas size
            // Reset, start from beginning
            if (x > canvasXSize) {
            x = canvasXSize - imgW;
            }

            // Draw additional image
            if (x > canvasXSize - imgW) {
            ctx.drawImage(bgz1, x - imgW + 1, y, imgW, imgH);
            }
        }

        // Draw image
        ctx.drawImage(bgz1, x, y, imgW, imgH);

        // Amount to move
        x += dx;
    }

    // const ctx = canvasEl.getContext("2d");
    // ctx.fillStyle = "black";
    // ctx.fillRect(0,0,1280,720);
    
    console.log("hello world")

});


