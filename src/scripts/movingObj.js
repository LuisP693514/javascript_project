console.log("Im in the moving obj file")

class MovingObj {
    constructor(options){
        this.pos = options.pos;
        this.vx = options.vx;
    }
}

module.exports = MovingObj;