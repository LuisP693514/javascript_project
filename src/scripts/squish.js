const Enemy = require("./enemy");

class Squishy extends Enemy{
    constructor(x, y, radius, health, bc, options = {}){
        super(x,y,radius,health,bc,options);

        this.speed = 9;
    }
}

module.exports = Squishy;