class Player {

    iFrames = 20; // 20 frames of invincibility after taking damage
    dodgeFrames = 10; // more frames = more POWER!!!
    dodgeCd = 2000; // CD on dodge mechanic
    
    constructor(x, y, bc, options = {}) {
        this.y = y;
        this.x = x;
        this.bulletController = bc;
        
        this.canvas = options.canvas
        this.strokeColor = options.strokeColor || "white";
        this.speed = 8;
        this.width = 50;
        this.height = 50;
        this.health = 5;
        this.dodgeTimes = 1;

        this.upgrades = options.upgrades || {};
        
        addEventListener("keydown", this.keyDown)
        addEventListener("keyup", this.keyUp)
        addEventListener("mousedown", this.mouseDown)
        addEventListener("mouseup", this.mouseUp)
        addEventListener("mousemove", this.mouseMove) // Stops mouse click from highlighting text
        
    }
     // Dodge Mechanic
    dodge() {
        if (this.canDodge() && !this.dodgeOnCD) {
            if (this.dodgePressed) {
                this._dodge();
            }
        }
    }
    canDodge() {
        return this.dodgeTimes > 0;
    }
    _dodge() {
        this.dodgeTimes--;
        this.speed *= 2;
        this.dodgeOnCD = true;
        setTimeout(() => {
            this.speed /= 2;
        }, 1000 / 60 * this.dodgeFrames);
        setTimeout(() => {
            this.dodgeOnCD = false;
            this.dodgeTimes++;
        }, this.dodgeCd);
    }

    // Shoot mechanic
    shoot() {
        if (this.shootPressed) {
            // Create a bullet if mouse is clicked
            const bulletX = this.x + Math.floor(this.width / 2)
            const bulletY = this.y + Math.floor(this.height / 2)
            const bulletDmg = 1;
            const bulletSpeed = 16;
            const delay = 7;
            let vector = [this.mouseXV, this.mouseYV];
            console.log("shoot!" + vector)
            this.bulletController.shoot(bulletX, bulletY, bulletSpeed, bulletDmg, delay, { vector: vector, color: this.upgrades.color || "#00AAD3" });
        }
    }

    // Draw the player onto the 2d plane
    draw(ctx) {
        this.move();
        ctx.shadowColor = "green";
        ctx.shadowBlur = 30;
        ctx.strokeStyle = this.strokeColor;
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.shoot();
        this.dodge();
        if (this.timeTillNextDamage > 0) {
            this.timeTillNextDamage--;
        }
    }

    // Move the player but not off-screen
    move() {
        this._updateMouse();
        if (this.upPressed) {
            const oldY = this.y;
            this.y -= this.speed;
            if (this.y <= 0) this.y = oldY;
            this.face = "up";
        }
        if (this.downPressed) {
            const oldY = this.y;
            this.y += this.speed;
            if (this.y + this.height >= 720) this.y = oldY;
            this.face = "down";
        }
        if (this.leftPressed) {
            const oldX = this.x;
            this.x -= this.speed;
            if (this.x <= 0) this.x = oldX;
            this.face = "left";
        }
        if (this.rightPressed) {
            const oldX = this.x;
            this.x += this.speed;
            if (this.x + this.width >= 1280) this.x = oldX;
            this.face = "right";
        }
    }
    mouseMove = (e) => {
        e.preventDefault()
        this.mouseXloc = e.clientX
        this.mouseYloc = e.clientY
        this._updateMouse()
    }
    mouseDown = (k) => {
        // Preventing default to stop highlighting text
        k.preventDefault();
        if (k.button === 0) {
            this.mouseXloc = k.clientX
            this.mouseYloc = k.clientY
            this.shootPressed = true;
            this._updateMouse()
        }
        if (k.button === 2) {
            this.dodgePressed = true;
        }
    }
    mouseUp = (k) => {
        if (k.button === 0) this.shootPressed = false;
        if (k.button === 2) {
            this.dodgePressed = false;
        }
    }
    keyDown = (k) => {
        // console.log(k.code)
        k.preventDefault();
        console.log(k)
        if (k.code === "KeyW") this.upPressed = true;
        if (k.code === "KeyD") this.rightPressed = true;
        if (k.code === "KeyA") this.leftPressed = true;
        if (k.code === "KeyS") this.downPressed = true;
        if (k.code === "ShiftLeft") {
            this.oldSpeed = this.speed;
            this.speed = this.speed / 2;
        };
        if (k.code === "Space") this.spacePressed = true;
        if (k.code === "KeyJ") this.shootPressed = true;
    }
    keyUp = (k) => {
        if (k.code === "KeyW") this.upPressed = false;
        if (k.code === "KeyD") this.rightPressed = false;
        if (k.code === "KeyA") this.leftPressed = false;
        if (k.code === "KeyS") this.downPressed = false;
        if (k.code === "ShiftLeft") this.speed = this.oldSpeed;
        if (k.code === "Space") this.spacePressed = false;
        if (k.code === "KeyJ") this.shootPressed = false;
    }
    takeDamage(num) {
        if (this.timeTillNextDamage < 1) {
            this.health -= num;
            this.timeTillNextDamage = this.iFrames;
        }
    }
    _updateMouse(){
        const rect = this.canvas.getBoundingClientRect();
        this.mouseX = this.mouseXloc - rect.left - this.x - this.width / 2;
        this.mouseY = this.mouseYloc - rect.top - this.y - this.height / 2;
        let divisor = Math.max(Math.abs(this.mouseX), Math.abs(this.mouseY))
        divisor = (divisor > 0 && divisor < 1) ? 1 : divisor;
        divisor = (divisor < 0 && divisor > -1) ? -1 : divisor;
        this.mouseXV = this.mouseX / Math.abs(divisor);
        this.mouseYV = this.mouseY / Math.abs(divisor);
    }
}

module.exports = Player;