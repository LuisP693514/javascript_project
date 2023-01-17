class HUD {

    images = {}

    constructor(ctx, player, options = {}) {
        this.ctx = ctx;
        this.player = player;
        this.boss = options.boss || {};

    }

    updateImages() {
    }
    draw(options = {}) {
        
    }
    drawBossHp(currentHp, maxHp) {
        this.ctx.fillStyle = "rgba(255,0,0,0.25)";
        this.ctx.fillRect(40, 10, currentHp / maxHp * 1200, 22);
        this.ctx.font = "32px 'monospace'";
        this.ctx.fillStyle = "rgba(255,222,69,0.25)";
        this.ctx.fillText(`Pumpkin Twins`, 40, 58);
    }
}

module.exports = HUD;