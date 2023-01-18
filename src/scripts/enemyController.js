const BulletController = require("./bulletController");
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

    createEnemies(wave, options = {}) {
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
    _generateWave2 = () => { }
    _generateWave3 = () => { }
    _generateWave4 = () => { }
    _generateWave5 = () => { }
    _generateWave6 = () => { }
    _generateWave7 = () => { }
    _generateWave8 = () => { }
    _generateWave9 = () => { }
    _generateWave10 = () => { }
    _generateInfinite = () => { }
}

module.exports = EnemyController;