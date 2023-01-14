const Bullet = require("./bullet");

class BulletController {
    bullets = [];
    timeTillNextShot = 0;

    constructor(canvas) {
        this.canvas = canvas;
    };

    shoot(x, y, speed, dmg, delay) {
        if (this.timeTillNextShot <= 0) {
            this.bullets.push(new Bullet(x, y, speed, dmg));
            this.timeTillNextShot = delay;
        }
        this.timeTillNextShot--;
    }

    draw(ctx) {
        this.bullets.forEach(bullet => {
            if (this.isBulletOffScreen(bullet)) {
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
            }
            bullet.draw(ctx)
        });
    }

    isBulletOffScreen(b) {
        return b.y <= -b.radius * 2;
    }
}

module.exports = BulletController;