const Enemy = require("./enemy");

class Squishy extends Enemy{

    baseHealth = 3;

    constructor(x, y,bc, options = {}){
        super(x,y,bc,options);

        this.speed = 9;
        this.health = baseHealth;
        this.worth = 200;
        
    }
}

module.exports = Squishy;