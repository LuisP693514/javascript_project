const MovingObj = require("./movingObj.js")


console.log("I'm in the player file")

class Player extends MovingObj {
    constructor(options){
        super(options);
        this.lives = options.lives;
        this.color = options.color;
        this.radius = 20;
    }

    

}

module.exports = Player;