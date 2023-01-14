class Bullet {
    constructor(x, y, speed, dmg, options) {
        this.x = x;
        this.y = y;
        this.damage = dmg;
        this.speed = speed;

        this.strokeColor = "white" || options.strokeColor;
        this.color = "black" || options.color;
        this.radius = 4 || options.radius;
    }

    isCollidingWith(sprite) {
        if (this.x + this.radius <= sprite.width + sprite.x &&
            this.x + (Math.floor(this.raidus / 2)) >= sprite.x &&
            this.y + this.radius <= sprite.y + sprite.height &&
            this.y + (Math.floor(this.raidus / 2)) >= sprite.y) {
            return true;
        }

        return false;
    }

    draw(ctx) {
        ctx.strokeStyle = this.strokeColor
        ctx.fillStyle = this.color
        this.y -= this.speed;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }

}

module.exports = Bullet;