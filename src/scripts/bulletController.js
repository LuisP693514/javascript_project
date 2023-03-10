const Bullet = require("./bullet");

class BulletController {
    bullets = [];
    timeTillNextShot = 0;

    constructor(options = {}) {

    };

    shoot(x,y,options = {}) {
        if (this.timeTillNextShot <= 0) {
            const bullets = options.bullets || [new Bullet(x,y,options)]
            this.bullets.push(...bullets);
            this.timeTillNextShot = options.delay;
            if (options.shootSoundEff) {
                const sound = options.shootSoundEff
                options.muted ? sound.volume = 0 : sound.volume = 0.002;
                sound.currentTime = 0;
                sound.play()
            };
        }
        this.timeTillNextShot--;
    }

    draw(ctx) {
        this.bullets.forEach(bullet => {
            if (this.isBulletOffScreen(bullet)) {
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
            }
            bullet.draw(ctx);
        });
    }

    isBulletOffScreen(b) {
        return (b.y <= -b.radius * 2 ||
            b.x <= -b.radius * 2 ||
            b.y >= 720 + b.radius * 2 ||
            b.x >= 1280 + b.radius * 2);
    }

    collidesWith(sprite, options = {}) {
        this.bullets.forEach(bullet => {
            if (bullet.isCollidingWith(sprite) && sprite.collideAble) {
                sprite.takeDamage(bullet.damage, options);
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
                return true;
            } else {
                return false
            }
        });
    }
}

module.exports = BulletController;