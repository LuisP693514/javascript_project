let bulletsPattern = {
    // Left
    0: {
        x: 0,
        y: 0,
        damage: 1,
        speed: 3,
        velocity: 0.02,
        acceleration: 0.02,
        vector: [0, 1],
        theta: 0,
        radius: 6,
        color: "yellow"
    },
    // Right
    1: {
        x: this.width,
        y: this.height,
        speed: 3,
        damage: 1,
        velocity: 0.02,
        acceleration: 0.02,
        vector: [0, -1],
        theta: 0,
        radius: 6,
        color: "yellow"
    },
    2: {
        x: 0,
        y: 0,
        damage: 1,
        speed: 3,
        velocity: 0.02,
        acceleration: 0.02,
        vector: [-1, 0],
        theta: 0,
        radius: 6,
        color: "yellow"
    },
    // Right
    3: {
        x: this.width,
        y: this.height,
        speed: 3,
        damage: 1,
        velocity: 0.02,
        acceleration: 0.02,
        vector: [1, 0],
        theta: 0,
        radius: 6,
        color: "yellow"
    },

}

module.exports = bulletsPattern;