const MovingObj = require("./movingObj.js")


console.log("I'm in the player file")

class Player extends MovingObj {
    constructor(options){
        super(options);
        this.lives = options.lives;
        this.sprite = options.sprite;
        this.radius = 12;
    }

    isDead (){
        console.log("Checking if player has died")
        return this.lives <= 0;
    }
}

module.exports = Player;