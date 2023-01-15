class Bullet {
    constructor(x, y, speed, dmg, options = {}) {
        this.x = x;
        this.y = y;
        this.damage = dmg;
        this.speed = speed;

        this.strokeColor = options.strokeColor || "white";
        this.color = options.color || "black";
        this.radius = options.radius || 5;
        this.vector = options.vector || [0, -1];
    }

    isCollidingWith(sprite = {}) {
        if (this.x + this.radius <= sprite.width + sprite.x &&
            this.x + (Math.floor(this.radius / 2)) >= sprite.x &&
            this.y + this.radius <= sprite.y + sprite.height &&
            this.y + (Math.floor(this.radius / 2)) >= sprite.y) {
            return true;
        }

        return false;
    }

    draw(ctx) {
        ctx.strokeStyle = this.strokeColor
        ctx.fillStyle = this.color
        this.x += (this.vector[0] * this.speed)
        this.y += (this.vector[1] * this.speed); // somehow implement vectors
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }

}

module.exports = Bullet;