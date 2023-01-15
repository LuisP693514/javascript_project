const Enemy = require("./enemy");

class Squishy extends Enemy{

    baseHealth = 3;

    constructor(x, y, radius, health, bc, options = {}){
        super(x,y,radius,health,bc,options);

        this.speed = 9;
        this.health = baseHealth;
    }
}

module.exports = Squishy;