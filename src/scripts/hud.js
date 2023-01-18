class HUD {

    images = {}

    constructor(canvas, player, options = {}) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d");
        this.player = player;
        this.boss = options.boss || {};

    }

    updateImages() {
    }
    
    draw(options = {}) {

    }
    drawBossHp(currentHp, maxHp) {
        this.ctx.textAlign = "left"
        this.ctx.fillStyle = "rgba(255,0,0,0.25)";
        this.ctx.fillRect(this._scaleWidth(40), this._scaleHeight(10), currentHp / maxHp * this._scaleWidth(1200), this._scaleHeight(22));
        this.ctx.font = "32px 'monospace'";
        this.ctx.fillStyle = "rgba(255,222,69,0.25)";
        this.ctx.fillText(`Pumpkin Twins`, this._scaleWidth(40), this._scaleHeight(58));
    }

    drawTitleScreen() {
        // Title
        this.ctx.fillStyle = "White"
        this.ctx.font = "50px 'monospace'"
        this.ctx.textAlign = "center"
        this.ctx.fillText("Al Hollow's Bullets",
            this._scaleWidth(640),
            this._scaleHeight(80))

        // Click anywhere to start
        this.ctx.font = "22px 'monospace'"
        this.ctx.textAlign = "center"
        this.ctx.fillText("Click anywhere to start",
            this._scaleWidth(640),
            this._scaleHeight(662.4)
        )

        // WASD
        const keyGrad = this.ctx.createLinearGradient(0, 0, 0, this._scaleHeight(30))
        const shiftX = this._scaleWidth(70);
        const shiftY = this._scaleHeight(30);
        keyGrad.addColorStop(0, "#00dd00");
        keyGrad.addColorStop(1, "#ffffff");

        this.ctx.strokeStyle = keyGrad

        //boxes
        this.ctx.strokeRect(this._scaleWidth(100) + shiftX, this._scaleHeight(300) + shiftY, this._scaleWidth(60), this._scaleHeight(60))
        this.ctx.strokeRect(this._scaleWidth(0) + shiftX, this._scaleHeight(390) + shiftY, this._scaleWidth(60), this._scaleHeight(60))
        this.ctx.strokeRect(this._scaleWidth(100) + shiftX, this._scaleHeight(390) + shiftY, this._scaleWidth(60), this._scaleHeight(60))
        this.ctx.strokeRect(this._scaleWidth(200) + shiftX, this._scaleHeight(390) + shiftY, this._scaleWidth(60), this._scaleHeight(60))

        //WASD
        this.ctx.font = "40px 'monospace'"
        this.ctx.textAlign = "left"
        this.ctx.strokeText("W", this._scaleWidth(111.5) + shiftX, this._scaleHeight(345) + shiftY)
        this.ctx.strokeText("A", this._scaleWidth(16) + shiftX, this._scaleHeight(433.5) + shiftY)
        this.ctx.strokeText("S", this._scaleWidth(118.9) + shiftX, this._scaleHeight(433.5) + shiftY)
        this.ctx.strokeText("D", this._scaleWidth(216) + shiftX, this._scaleHeight(433.5) + shiftY)

        // Movement controls
        this.ctx.font = "30px 'monospace'"
        this.ctx.textAlign = "center"
        this.ctx.fillText("Movement Controls", this._scaleWidth(131) + shiftX, this._scaleHeight(200) + shiftY)

        //Up left down right
        this.ctx.font = "26px 'monospace'"
        this.ctx.fillText("UP", this._scaleWidth(131) + shiftX, this._scaleHeight(280) + shiftY)
        this.ctx.fillText("LEFT", this._scaleWidth(28) + shiftX, this._scaleHeight(500) + shiftY)
        this.ctx.fillText("DOWN", this._scaleWidth(131) + shiftX, this._scaleHeight(500) + shiftY)
        this.ctx.fillText("RIGHT", this._scaleWidth(240) + shiftX, this._scaleHeight(500) + shiftY)

        //Shoot
        this.ctx.font = "30px 'monospace'"
        this.ctx.fillText("Shoot", this._scaleWidth(660), this._scaleHeight(310))

        // J
        this.ctx.font = "40px 'monospace'"
        this.ctx.strokeRect(this._scaleWidth(572), this._scaleHeight(345), this._scaleWidth(60), this._scaleHeight(60))
        this.ctx.strokeText("J", this._scaleWidth(601.5), this._scaleHeight(389))

        //Or
        this.ctx.font = "26px 'monospace'"
        this.ctx.fillText("Or", this._scaleWidth(666), this._scaleHeight(381))

        //Mouse drawing

        let point1X = this._scaleWidth(670)
        let point1Y = this._scaleHeight(330)
        let point2X = this._scaleWidth(780)
        let point2Y = this._scaleHeight(223)

        //Tail
        this.ctx.beginPath();
        this.ctx.moveTo(this._scaleWidth(660), this._scaleHeight(250))
        this.ctx.bezierCurveTo(point1X, point1Y, point2X, point2Y, this._scaleWidth(760), this._scaleHeight(330))
        this.ctx.stroke();


        // leftClick MOUSE

        point1X = this._scaleWidth(690)
        point1Y = this._scaleHeight(320)
        point2X = this._scaleWidth(700)
        point2Y = this._scaleHeight(350)

        this.ctx.beginPath();
        this.ctx.moveTo(this._scaleWidth(760), this._scaleHeight(330));
        this.ctx.bezierCurveTo(point1X, point1Y, point2X, point2Y, this._scaleWidth(695), this._scaleHeight(350))
        this.ctx.stroke();
        this.ctx.moveTo(this._scaleWidth(696), this._scaleHeight(350))
        this.ctx.bezierCurveTo(this._scaleWidth(680), 550, this._scaleWidth(800), this._scaleHeight(650), this._scaleWidth(830), this._scaleHeight(350))
        this.ctx.stroke()
        this.ctx.moveTo(this._scaleWidth(760), this._scaleHeight(330))
        this.ctx.bezierCurveTo(this._scaleWidth(825), point1Y, this._scaleWidth(830), point2Y, this._scaleWidth(830), this._scaleHeight(350))
        this.ctx.stroke();
        this.ctx.moveTo(this._scaleWidth(695), this._scaleHeight(400))
        this.ctx.bezierCurveTo(this._scaleWidth(732), this._scaleHeight(385), this._scaleWidth(800), this._scaleHeight(385), this._scaleWidth(824), this._scaleHeight(400))
        this.ctx.stroke()
        this.ctx.moveTo(this._scaleWidth(760), this._scaleHeight(330))
        this.ctx.lineTo(this._scaleWidth(755), this._scaleHeight(390))
        this.ctx.stroke()

        // Press Release
        this.ctx.font = "18px 'monospace'"
        this.ctx.fillText("Press", this._scaleWidth(726), this._scaleHeight(363))
        this.ctx.fillText("Release", this._scaleWidth(793), this._scaleHeight(363))

        //Dodge

        this.ctx.font = "30px 'monospace'"
        this.ctx.fillText("Dodge", this._scaleWidth(860), this._scaleHeight(310))

        //Or
        this.ctx.font = "26px 'monospace'"
        this.ctx.fillText("Or", this._scaleWidth(860), this._scaleHeight(381))

        //Spacebar
        this.ctx.strokeRect(this._scaleWidth(882), this._scaleHeight(345), this._scaleWidth(360), this._scaleHeight(60))

        //Release
        this.ctx.font = "22px 'monospace'"
        this.ctx.fillText("Release", this._scaleWidth(940), this._scaleHeight(380))

        //Important
        this.ctx.font = "24px 'monospace'"
        this.ctx.fillText("* The dodge mechanic triggers upon the release", this._scaleWidth(1010), this._scaleHeight(550))
        this.ctx.fillText("of either space bar or right-click", this._scaleWidth(1010), this._scaleHeight(580))

        // Event listener to continue from title screen to the game
        this.canvas.addEventListener("mousedown", this._mouseDown)
    }

    _mouseDown = (e) => {
        e.preventDefault()
        if (e.button === 0) {
            this.playerPressedPlay = true;
            this.canvas.removeEventListener("mousedown", this._mousemove)
        };

    }
    //Scale any x input with the canvas size (1280x720)
    _scaleWidth(num) {
        // return this.canvas.width * num / 1280
        return num
    }
    //Scale any y input with the canvas size (1280x720)
    _scaleHeight(num) {
        // return this.canvas.height * num / 720
        return num
    }
}

module.exports = HUD;