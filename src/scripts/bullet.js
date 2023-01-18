class Bullet {
    constructor(x, y, options = {}) {
        this.x = options.x || x;
        this.y = options.y || y;
        this.damage = options.damage;
        this.speed = options.speed;
        
        this.velocity = options.velocity || 0;
        this.strokeColor = options.strokeColor || "white";
        this.color = options.color || "black";
        this.radius = options.radius || 5;
        this.vector = options.vector || [0, -1];
    }

    isCollidingWith(sprite = {}) {
        if (this.x  <= sprite.width + sprite.x &&
            this.x  >= sprite.x &&
            this.y  <= sprite.y + sprite.height &&
            this.y  >= sprite.y) {
            return true;
        }

        return false;
    }

    draw(ctx) {
        ctx.strokeStyle = this.strokeColor
        ctx.fillStyle = this.color
        this.speed += this.velocity;
        this.x += (this.vector[0] * this.speed);
        this.y += (this.vector[1] * this.speed); 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }

}

module.exports = Bullet;