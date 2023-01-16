const Enemy = require("./enemy");

class Seeker extends Enemy {


    constructor(x, y, bc, player, options = {}) {
        super(x, y, bc, options);
        this.player = player;

        this.speed = options.speed || 10;
        this.health = options.health || 4;
    }

    getPlayerVector(){
        const px = this.player.x
    }
}

module.exports = Seeker;