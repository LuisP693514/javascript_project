class Player {

    iFrames = 100; // 20 frames of invincibility after taking damage
    dodgeFrames = 15; // more frames = more POWER!!!
    dodgeCd = 2000; // CD on dodge mechanic

    constructor(x, y, bc, options = {}) {
        // Must have
        this.y = y;
        this.x = x;
        this.bulletController = bc;

        // Defaults
        this.muted = options.muted;
        this.canvas = options.canvas;
        this.strokeColor = options.strokeColor || "white";
        this.shootSound = new Audio("./sounds/shoot.wav")
        this.shootSound.volume = 0.002;
        this.dodgeTimes = 1;
        this.height = 20;
        this.width = 20;
        this.bulletVelocity = 0.3;
        this.timeTillNextDamage = 0;
        this.collideAble = true;

        // Upgradeable: 
        this.speed = 8;
        this.health = 5;
        this.bulletDmg = 1;
        this.bulletDelay = 4;
        this.bulletSpeed = 20;

        // Inputs from player
        addEventListener("keydown", this.keyDown)
        addEventListener("keyup", this.keyUp)
        addEventListener("mousedown", this.mouseDown)
        addEventListener("mouseup", this.mouseUp)
        addEventListener("mousemove", this.mouseMove)

    }

    // Upgrade the player to make them stronger
    upgrade(options = {}) {
        this.speed += options.speed || 0;
        this.health += options.health || 0;
        this.bulletDmg += options.bulletDmg || 0;
        this.bulletDelay += options.bulletDelay || 0;
        this.bulletSpeed += options.bulletSpeed || 0;
    }

    // Dodge Mechanic
    dodge() {
        if (this.canDodge() && !this.dodgeOnCD && this.dodgePressed) {
            this._dodge();
            this.collideAble = false;
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
            this.collideAble = true;
        }, 1000 / 60 * this.dodgeFrames);
        setTimeout(() => {
            this.dodgeOnCD = false;
            this.dodgeTimes++;
            this.dodgePressed = false;
        }, this.dodgeCd);
    }

    // Shoot mechanic
    shoot() {
        if (this.shootPressed) {
            // Create a bullet if mouse is clicked
            const bulletX = this.x + Math.floor(this.width / 2)
            const bulletY = this.y + Math.floor(this.height / 2)
            const bulletDmg = this.bulletDmg;
            const bulletSpeed = this.bulletSpeed;
            const delay = this.bulletDelay;
            let vector = [this.mouseXV, this.mouseYV];
            this.bulletController.shoot(
                bulletX,
                bulletY,
                {
                    speed: bulletSpeed,
                    damage: bulletDmg,
                    delay: delay,
                    vector: vector,
                    color: this.color || "#00AAD3",
                    shootSoundEff: this.shootSound,
                    bulletVelocity: this.bulletVelocity

                });
        }
    }
    // Draw the player onto the 2d plane
    draw(ctx) {
        if (this.damagedState ^ this.blink) {
            this._draw(ctx);
        }
        this.move();
        this.shoot();
        this.dodge();
        if (this.timeTillNextDamage > 0) {
            this.timeTillNextDamage--;
            this._blink();
        } else {
            this.damagedState = false;
            this.blink = true;
        }
    }

    _blink() {
        this.blink = this.blink ? false : true;
    }
    _draw(ctx) {
        ctx.shadowColor = "green";
        ctx.shadowBlur = 30;
        ctx.strokeStyle = this.strokeColor;
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    takeDamage(num) {
        if (this.timeTillNextDamage < 1) {
            this.collideAble = false;
            setTimeout(() => {
                this.collideAble = true;
            }, 1000/60 * this.iFrames);
            this.health -= num;
            this.damageState = true;
            this.timeTillNextDamage = this.iFrames;
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
        // if (k.button === 2) {
        //     this.dodgePressed = true;
        // }
    }
    mouseUp = (k) => {
        if (k.button === 0) this.shootPressed = false;
        if (k.button === 2) {
            this.dodgePressed = true;
        }
    }
    keyDown = (k) => {
        // console.log(k.code)
        k.preventDefault();
        if (k.code === "KeyW") this.upPressed = true;
        if (k.code === "KeyD") this.rightPressed = true;
        if (k.code === "KeyA") this.leftPressed = true;
        if (k.code === "KeyS") this.downPressed = true;
        if (k.code === "ShiftLeft") {
            this.oldSpeed = this.speed;
            this.speed = this.speed / 2;
        };
        if (k.code === "KeyJ") this.shootPressed = true;
    }
    keyUp = (k) => {
        if (k.code === "KeyW") this.upPressed = false;
        if (k.code === "KeyD") this.rightPressed = false;
        if (k.code === "KeyA") this.leftPressed = false;
        if (k.code === "KeyS") this.downPressed = false;
        if (k.code === "ShiftLeft") this.speed = this.oldSpeed;
        if (k.code === "Space") this.dodgePressed = true;
        if (k.code === "KeyJ") this.shootPressed = false;
    }
    _updateMouse() {
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