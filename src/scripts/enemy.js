const Bullet = require("./bullet.js");
const bulletsPattern = require("./bPatterns/bulletsPattern1.js")

class Enemy {

    spots = [
        [1230, 50],
        [50, 50],
        [50, 670],
        [1230, 670]
    ]
    images = [
        new Image(),
        new Image(),
        new Image(),
        new Image(),
    ]

    constructor(x, y, bc, options = {}) {
        this.x = x;
        this.y = y;
        this.bulletController = bc;

        this.health = options.health || 10;
        this.worth = options.worth || 100;
        this.radius = options.radius || 20;
        this.color = options.color || "red";
        this.vector = options.vector || [0, 0];
        this.muted = options.muted
        
        this.originalSpeed = options.speed || 4;
        this.speed = this.originalSpeed;
        this.height = this.radius * 2;
        this.width = this.radius * 2;
        this.deathSound = new Audio("./sounds/enemyDeath.wav")
        this.deathSound.volume = 0.07;
        this.loopLoc = 0;
        this.frame = 0;
        this.bullets = []
        this.collideAble = true;
        this.updateImages()
    }

    shoot() {
        this._addBullets()
        this.bulletController.shoot(null, null, {
            bullets: this.bullets.splice(0),
            delay: 4,
        })

    }
    _addBullets(){
        for (let i = 0; i < Object.keys(bulletsPattern).length; i++) {
            const params = bulletsPattern[i];
            this.bullets.push(new Bullet(this.x, this.y, params));
        }
    }
    updateImages() {
        this.images.forEach((image, imageIdx) => {
            image.width = this.radius * 2;
            image.height = this.radius * 2;
            image.src = `./images/sprites/holloweenSprites/AnimatedObjects/Pumpkin2_${imageIdx + 1}.png`
        });
        
    }
    draw(ctx) {
        if (this.frame >= this.images.length) this.frame = 0;
        this.shoot()
        this.movementLoop();
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 30;
        ctx.drawImage(
            this.images[this.frame],
            this.x - this.radius,
            this.y - this.radius,
            this.radius * 3,
            this.radius * 3
        )
        this.frame ++;
        // ctx.fillStyle = this.color;
        // ctx.beginPath();
        // ctx.arc(this.x + this.radius, this.y + this.radius, this.radius, 0, 2 * Math.PI, true)
        // ctx.closePath();
        // ctx.fill();
    }
    movementLoop() {
        switch (this.loopLoc) {
            case 0:
                this._moveTo(1);
                break;
            case 1:
                this._moveTo(2);
                break;
            case 2:
                this._moveTo(3);
                break;
            case 3:
                this._moveTo(0);
                break;
            default:
                this.loopLoc = 0;
                break;
        }
    }

    _moveTo(num) {
        let xDif = this.spots[num][0] - this.x;
        let yDif = this.spots[num][1] - this.y;
        let divisor = Math.max(Math.abs(xDif), Math.abs(yDif));
        divisor = divisor < 1 ? 1 : divisor;
        let xVector = xDif / divisor;
        let yVector = yDif / divisor;
        this.vector = [xVector, yVector]
        if (Math.max(Math.abs(xDif), Math.abs(yDif)) < 20) this.speed = 2;
        this.speed = this.speed < 1 ? 1 : this.speed;
        this.x += this.vector[0] * this.speed;
        this.y += this.vector[1] * this.speed;
        if (this.x < this.spots[num][0] + 2 &&
            this.x > this.spots[num][0] - 2 &&
            this.y < this.spots[num][1] + 2 &&
            this.y > this.spots[num][1] - 2 &&
            !this.timeOutCalled) {
            this.speed = 0
            this.timeOutCalled = true;
            setTimeout(() => {
                this.loopLoc += 1
                this.speed = this.originalSpeed;
                this.timeOutCalled = false;
            }, 40);
        }
    }

    takeDamage(num) {
        this.health -= num;
        if (this.health <= 0) {
            this.deathSound.currentTime = 0;
            this.deathSound.play();
        }
    }
}

module.exports = Enemy;