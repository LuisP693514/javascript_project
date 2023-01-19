const BulletController = require("./bulletController");
const Enemy = require("./enemy");
const Ghost = require("./ghost");
const Seeker = require("./seeker");
const Squishy = require("./squish");

class EnemyController {
    enemies = [];

    constructor(canvas, options = {}) {
        this.canvas = canvas;
    }

    draw(ctx) {
        this.enemies.forEach(enemy => {
            if (enemy.health > 0) enemy.draw(ctx);
        });
    }

    createEnemies(wave) {
        switch (wave) {
            case 1:
                this._generateWave1();
                break;
            case 2:
                this._generateWave2();
                break;
            case 3:
                this._generateWave3();
                break;
            case 4:
                this._generateWave4();
                break;
            case 5:
                this._generateWave5();
                break;
            case 6:
                this._generateWave6();
                break;
            case 7:
                this._generateWave7();
                break;
            case 8:
                this._generateWave8();
                break;
            case 9:
                this._generateWave9();
                break;
            case 10:
                this._generateWave10();
                break;
            default:
                this._generateInfinite();
                break;
        }
    }
    _generateWave1 = () => {
        this.enemies.push(
            new Squishy(1220, 20, new BulletController(),
                {
                    speed: 5,
                    health: 2,
                    spotX1: 20,
                    spotY1: 20,
                    spotX2: 20,
                    spotY2: 660,
                    hpMultiplier: 0.5,
                    bulletDelay: 60

                }
            ),
            new Squishy(20, 660, new BulletController(),
                {
                    speed: 5,
                    health: 2,
                    spotX1: 1220,
                    spotY1: 660,
                    spotX2: 1220,
                    spotY2: 20,
                    hpMultiplier: 0.5,
                    bulletDelay: 60

                }
            )
        )
    }
    _generateWave2 = () => {
        this.enemies.push(
            new Seeker(20, 660, new BulletController(),
                {
                    speed: 7,
                    health: 2,
                    spotX1: 1220,
                    spotY1: 20,
                    spotX2: 20,
                    spotY2: 660,
                    hpMultiplier: 1.5,
                    bulletDelay: 55

                }
            ),
            new Seeker(20, 20, new BulletController(),
                {
                    speed: 7,
                    health: 2,
                    spotX1: 1220,
                    spotY1: 660,
                    spotX2: 20,
                    spotY2: 20,
                    hpMultiplier: 1.5,
                    bulletDelay: 55

                }
            )
        )
    }
    _generateWave3 = () => {
        this.enemies.push(
            new Seeker(-100, 660, new BulletController(),
                {
                    speed: 7,
                    health: 3,
                    spotX1: 640,
                    spotY1: 660,
                    spotX2: 20,
                    spotY2: 360,
                    hpMultiplier: 1.8,
                    bulletDelay: 50

                }
            ),
            new Seeker(-100, 20, new BulletController(),
                {
                    speed: 7,
                    health: 3,
                    spotX1: 640,
                    spotY1: 20,
                    spotX2: 1220,
                    spotY2: 360,
                    hpMultiplier: 1.8,
                    bulletDelay: 50

                }
            ),
            new Squishy(-100, 20, new BulletController(),
                {
                    speed: 5,
                    health: 3,
                    spotX1: 960,
                    spotY1: 20,
                    spotX2: 960,
                    spotY2: 660,
                    hpMultiplier: 1.8,
                    bulletDelay: 50

                }
            ),
            new Squishy(-100, 660, new BulletController(),
                {
                    speed: 5,
                    health: 3,
                    spotX1: 320,
                    spotY1: 660,
                    spotX2: 320,
                    spotY2: 20,
                    hpMultiplier: 1.8,
                    bulletDelay: 50

                }
            )
        )
    }
    _generateWave4 = () => {
        this.enemies.push(
            new Ghost(-128, -72, new BulletController,
                {
                    speed: 2,
                    health: 10,
                    spotX1: 128,
                    spotY1: 72,
                    spotX2: 1152,
                    spotY2: 648,
                    hpMultiplier: 2,
                    bulletDelay: 20
                }
            ),
            new Ghost(1408, -72, new BulletController,
                {
                    speed: 2,
                    health: 10,
                    spotX1: 1152,
                    spotY1: 72,
                    spotX2: 128,
                    spotY2: 648,
                    hpMultiplier: 2,
                    bulletDelay: 20
                }
            ),
            new Ghost(1408, 792, new BulletController,
                {
                    speed: 2,
                    health: 10,
                    spotX1: 1152,
                    spotY1: 648,
                    spotX2: 128,
                    spotY2: 72,
                    hpMultiplier: 2,
                    bulletDelay: 20
                }
            ),
            new Ghost(-128, 792, new BulletController,
                {
                    speed: 2,
                    health: 10,
                    spotX1: 128,
                    spotY1: 648,
                    spotX2: 1152,
                    spotY2: 72,
                    hpMultiplier: 2,
                    bulletDelay: 20
                }
            )
        )
    }
    _generateWave5 = () => {
        this.enemies.push(
            new Enemy(-128, -72,new BulletController, {
                loopLoc: 1
            }),
            new Enemy(1408, 792, new BulletController, {
                loopLoc: 3
            })
        )
     }
    _generateWave6 = () => { }
    _generateWave7 = () => { }
    _generateWave8 = () => { }
    _generateWave9 = () => { }
    _generateWave10 = () => { }
    _generateInfinite = () => { }
}

module.exports = EnemyController;