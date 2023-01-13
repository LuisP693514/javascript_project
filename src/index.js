const Game = require("./scripts/game.js");
const View = require("./scripts/view.js");
const Player = require("./scripts/player.js");
const Enemy = require("./scripts/enemy.js");

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas1")
    const canDiv = document.getElementById("canvasdiv")
    canvasEl.style = "display: block; position: absolute; left: 0; top: 0; z-index: 0;"

    canvasEl.width = 1280;
    canvasEl.height = 720;
    const canvasYSize = canvasEl.height;
    const canvasXSize = canvasEl.width;

    const bgz1 = new Image(canvasXSize, canvasYSize);
    const bgz2 = new Image(canvasXSize, canvasYSize);

    bgz1.src = "./images/Clouds/Clouds5/3.png"
    bgz2.src = "./images/Clouds/Clouds5/4.png"
    

    const speed = 5; // lower is faster
    const scale = 1.05;
    const y = -4.5; // vertical offset

    // Main program
    const dx = 1;
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

    bgz2.onload = () => {
        imgW = bgz2.width * scale;
        imgH = bgz2.height * scale;

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
                ctx.drawImage(bgz2, -imgW + x, y, imgW, imgH);
            }

            // Draw additional image2
            if (x - imgW > 0) {
                ctx.drawImage(bgz1, -imgW * 2 + x, y, imgW, imgH);
                ctx.drawImage(bgz2, -imgW * 2 + x, y, imgW, imgH);
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
                ctx.drawImage(bgz2, x - imgW + 1, y, imgW, imgH);
            }
        }

        // Draw image
        ctx.drawImage(bgz1, x, y, imgW, imgH);
        ctx.drawImage(bgz2, x, y, imgW, imgH)

        // Amount to move
        x += dx;
    }

    // const ctx = canvasEl.getContext("2d");
    // ctx.fillStyle = "black";
    // ctx.fillRect(0,0,1280,720);

    console.log("hello world")

    const pl = new Player({ radius: 12 })

    document.addEventListener("keydown", (e) => {
        console.log(e);

        if (e.code = 'Space' && e.target === document.body) e.preventDefault();

    });

    document.addEventListener("keyup", (e) => {
        console.log(e)
    });

    const gameCanvas = document.createElement("canvas");
    gameCanvas.width = canvasXSize;
    gameCanvas.height = canvasYSize;

    canDiv.appendChild(gameCanvas);
    gameCanvas.style = "display: block; position: absolute; left: 0; top: 0; z-index: 1;"

    const ctxGame = gameCanvas.getContext("2d");


    // Player movement 

    let px = 0;
    let py = 0;
    let pdxl = 0;
    let pdxr = 0
    let pdyu = 0;
    let pdyd = 0;

    document.addEventListener("keydown", (e) => {
        if (e.code === 'KeyD') pdxr = 5;
        if (e.code === 'KeyS') pdyd = 5;
        if (e.code === 'KeyA') pdxl = -5;
        if (e.code === 'KeyW') pdyu = -5;

    })

    document.addEventListener("keyup", (e)=>{
        if (e.code === 'KeyD') pdxr = 0;
        if (e.code === 'KeyS') pdyd = 0;
        if (e.code === 'KeyA') pdxl = 0;
        if (e.code === 'KeyW') pdyu = 0;
    })
    
    function update() {
        ctxGame.clearRect(0,0, gameCanvas.width, gameCanvas.height);

        px += pdxl;
        px += pdxr;
        py += pdyu;
        py += pdyd;
    
        ctxGame.beginPath();
        ctxGame.arc(px,py,20,0,Math.PI*2, true)
        ctxGame.fill();
        ctxGame.closePath();
    
        requestAnimationFrame(update)
    }
    update()


});



