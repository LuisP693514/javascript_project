const BulletController = require("./bulletController");

class Enemy {
    constructor(x, y, radius, health, bc, options = {}) {
        this.x = x;
        this.y = y;
        this.radius = radius,
        this.health = health;

        this.color = options.color || "red";
        this.bulletController = bc;
    }

    draw(ctx){
        ctx.shadowColor = "red";
        ctx.shadowBlur = 30;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        ctx.closePath();
        ctx.fill();
    }

    takeDamage(num){
        this.health -= num;
    }
}

module.exports = Enemy;