class Player {
    constructor(x, y, bc, options) {
        this.y = y;
        this.x = x;
        this.bulletController = bc;

        this.strokeColor = "white" || options.strokeColor;
        this.speed = 8;
        this.width = 50;
        this.height = 50;

        addEventListener("keydown", this.keyDown)
        addEventListener("keyup", this.keyUp)
        addEventListener("mousedown", this.mouseDown)
        addEventListener("mouseup", this.mouseUp)
        addEventListener("mousemove", (m) => m.preventDefault())
    }

    shoot(){
        if (this.mouse0Pressed){
            // Create a bullet if mouse is clicked
            const bulletX = this.x + Math.floor(this.width / 2)
            const bulletY = this.y + Math.floor(this.height / 2)
            const bulletDmg = 1;
            const bulletSpeed = 16;
            const delay = 5;
            this.bulletController.shoot(bulletX, bulletY, bulletSpeed, bulletDmg, delay);
        }
    }

    draw(ctx) {

        // Draw the player onto the 2d plane

        this.move();
        ctx.strokeStyle = this.strokeColor;
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.shoot();
    }

    move(){

        // Move the player but not off-screen

        if (this.upPressed) {
            const oldY = this.y;
            this.y -= this.speed;
            if (this.y <= 0) this.y = oldY;
        }
        if (this.downPressed) {
            const oldY = this.y;
            this.y += this.speed;
            if (this.y + this.height >= 720) this.y = oldY;
        }
        if (this.leftPressed) {
            const oldX = this.x;
            this.x -= this.speed;
            if (this.x <= 0) this.x = oldX;
        }
        if (this.rightPressed) {
            const oldX = this.x;
            this.x += this.speed;
            if (this.x + this.width >= 1280) this.x = oldX;
        }
    }

    mouseDown = (k) => {

        // Preventing default to stop highlighting text
        k.preventDefault();
        if (k.button === 0) this.mouse0Pressed = true;
        if (k.button === 2) this.mouse2Pressed = true;
    }

    mouseUp = (k) => {
        if (k.button === 0) this.mouse0Pressed = false;
        if (k.button === 2) this.mouse2Pressed = false;
    }
    keyDown = (k) => {
        // console.log(k.code)
        k.preventDefault();
        if (k.code === "KeyW") this.upPressed = true;
        if (k.code === "KeyD") this.rightPressed = true;
        if (k.code === "KeyA") this.leftPressed = true;
        if (k.code === "KeyS") this.downPressed = true;
        if (k.code === "ShiftLeft") this.speed = Math.floor(this.speed / 2);
        if (k.code === "Space") this.spacePressed = true;

    }
    keyUp = (k) => {
        if (k.code === "KeyW") this.upPressed = false;
        if (k.code === "KeyD") this.rightPressed = false;
        if (k.code === "KeyA") this.leftPressed = false;
        if (k.code === "KeyS") this.downPressed = false;
        if (k.code === "ShiftLeft") this.speed *= 2;
        if (k.code === "Space") this.spacePressed = false;
    }

}

module.exports = Player;