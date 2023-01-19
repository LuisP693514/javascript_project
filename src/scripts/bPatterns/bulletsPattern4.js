let bulletsPattern = {
    // Left
    0: {
        x: 0,
        y: 0,
        damage: 1,
        speed: 4,
        velocity: 0.02,
        acceleration: 0.02,
        vector: [0, 1],
        theta: 0,
        radius: 3,
        color: "#4133FF"
    },
    // Right
    1: {
        x: this.width,
        y: this.height,
        speed: 4,
        damage: 1,
        velocity: 0.02,
        acceleration: 0.02,
        vector: [0, -1],
        theta: 0,
        radius: 3,
        color: "#4133FF"
    },
    2: {
        x: 0,
        y: 0,
        damage: 1,
        speed: 4,
        velocity: 0.02,
        acceleration: 0.02,
        vector: [-1, 0],
        theta: 0,
        radius: 3,
        color: "#4133FF"
    },
    // Right
    3: {
        x: this.width,
        y: this.height,
        speed: 4,
        damage: 1,
        velocity: 0.02,
        acceleration: 0.02,
        vector: [1, 0],
        theta: 0,
        radius: 3,
        color: "#4133FF"
    },

}

module.exports = bulletsPattern;