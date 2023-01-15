class Enemy {

    
    constructor(x, y, radius, health, bc, options = {}) {
        this.x = x;
        this.y = y;
        this.radius = radius,
        this.health = health;
        this.worth = 100;
        
        this.color = options.color || "red";
        this.bulletController = bc;
        this.height = radius * 2;
        this.width = radius * 2;
        this.deathSound = new Audio("./sounds/enemyDeath.wav")
        this.deathSound.volume = 0.05;
    }
    draw(ctx){
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 30;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x + this.radius, this.y + this.radius, this.radius, 0, 2 * Math.PI, true)
        ctx.closePath();
        ctx.fill();
    }
    takeDamage(num){
        this.health -= num;
        console.log(this.health);
        if (this.health <= 0){
            this.deathSound.play();
        }
    }
}

module.exports = Enemy;