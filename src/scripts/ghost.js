const bulletsPattern = require("./bPatterns/bulletsPattern4.js");
const Enemy = require("./enemy");
const Bullet = require("./bullet.js");


class Ghost extends Enemy {

    baseHealth = 20;
    images = [
        new Image()
    ]

    constructor(x, y, bc, options = {}) {
        super(x, y, bc, options);

        this.originalSpeed = options.speed || 7;
        this.healthMultiplier = options.hpMultiplier || 1;
        this.health = this.baseHealth * this.healthMultiplier;
        this.maxHp = this.health
        this.worth = 200;
        this.spotX1 = options.spotX1 || 600;
        this.spotY1 = options.spotY1 || 700;
        this.spotX2 = options.spotX2 || 600;
        this.spotY2 = options.spotY2 || 20;
        this.spots = [
            [this.spotX1, this.spotY1],
            [this.spotX2, this.spotY2]
        ]
        this.height = this.radius * 3

        this.updateImages();

    }

    updateImages() {
        this.images.forEach((image) => {
            image.width = this.radius * 2;
            image.height = this.radius * 3;
            image.src = `./images/sprites/holloweenSprites/Objects/Ghost2.png`;
        });
    }
    _addBullets() {
        for (let i = 0; i < Object.keys(bulletsPattern).length; i++) {
            const params = bulletsPattern[i];
            this.bullets.push(new Bullet(this.x + this.radius, this.y + this.radius, params));
        }
    }

    draw(ctx, options = {}) {
        if (this.frame >= this.images.length) this.frame = 0;
        this.shoot(options)
        this.movementLoop();
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 30;
        ctx.drawImage(
            this.images[this.frame],
            this.x,
            this.y,
            this.radius * 2,
            this.radius * 3
        )
        this.frame++;
    }

    movementLoop() {
        switch (this.loopLoc) {
            case 0:
                this._moveTo(1);
                break;
            case 1:
                this._moveTo(0);
                break;
            default:
                this.loopLoc = 0;
                break;
        }
    }



}

module.exports = Ghost;