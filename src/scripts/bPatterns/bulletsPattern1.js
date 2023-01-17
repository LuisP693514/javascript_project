let bulletsPattern = {
    // Left
    0: {
        x: 0,
        y: 0,
        damage: 1,
        speed: 32,
        velocity: -2,
        vector: [-1, 0],
        theta: 0,
        radius: 4,
        color: "red"
    },
    // Right
    1: {
        x: 0,
        y: 0,
        speed: 32,
        damage: 1,
        velocity: -2,
        vector: [1, 0],
        theta: 0,
        radius: 4,
        color: "red"
    },
    // Down
    2: {
        x: 0,
        y: 0,
        speed: 20,
        damage: 1,
        velocity: -1,
        vector: [0, 1],
        theta: 0,
        radius: 4,
        color: "red"
    },
    // Up
    3: {
        x: 0,
        y: 0,
        speed: 20,
        damage: 1,
        velocity: -1,
        vector: [0, -1],
        theta: 0,
        radius: 4,
        color: "red"
    },
    // Up Left
    4: {
        x: 0,
        y: 0,
        speed: 36,
        damage: 1,
        velocity: -2,
        vector: [Math.sqrt(1) * -1, Math.sqrt(1) *-1],
        theta: 0,
        radius: 4,
        color: "red",
    },
    // Down Right
    5: {
        x: 0,
        y: 0,
        speed: 36,
        damage: 1,
        velocity: -2,
        vector: [Math.sqrt(1), Math.sqrt(1)],
        theta: 0,
        radius: 4,
        color: "red",
    },
    // Up Right
    6: {
        x: 0,
        y: 0,
        speed: 36,
        damage: 1,
        velocity: -2,
        vector: [Math.sqrt(1),Math.sqrt(1) * -1],
        theta: 0,
        radius: 4,
        color: "red",
    },
    // Down Left
    7: {
        x: 0,
        y: 0,
        speed: 36,
        damage: 1,
        velocity: -2,
        vector: [Math.sqrt(1) * -1, Math.sqrt(1)],
        theta: 0,
        radius: 4,
        color: "red",
    },

}

module.exports = bulletsPattern;