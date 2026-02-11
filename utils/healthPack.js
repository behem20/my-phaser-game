

export default class HealthPack {
    constructor(scene, player, enemy) {
        this.scene = scene;
        this.player = player;
        this.group = scene.physics.add.group();
    }
    spawnRandomly(minDistance = 300, maxDistance = 500, scene) {
        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
        const distance = Phaser.Math.Between(minDistance, maxDistance);
        const x = this.player.x + Math.cos(angle) * distance;
        const y = this.player.y + Math.sin(angle) * distance;

        const healthPack = this.group.create(x, y, "healthPack");
        healthPack.setScale(1)
        // coin.setOrigin(0.5, 0.5);
        const pickupRadius = healthPack.width * this.scene.player.playerInitCfgs.coinsMagnetRadiusBonus;
        healthPack.setCircle(pickupRadius, -(pickupRadius - pickupRadius / 4), -(pickupRadius - pickupRadius / 4));
        healthPack.setDepth(-2)
        healthPack.setCollideWorldBounds(true);
        healthPack.setBounce(1);
        healthPack.trail = this.scene.add.particles(0, 0, 'flares', {
            frame: 'blue',
            x:healthPack.x,
            y:healthPack.y,
            lifespan: 1300,
            speed: { min: 50, max: 100 },
            angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
            gravityY: 0,             // без гравитации
            scale: { start: 0.5, end: 0 }, // уменьшаются
            alpha: { start: 1, end: 0 },   // исчезают
            frequency: 100,   
            tint: [0xffffff, 0xff11ff],
            blendMode: 'ADD',
            
        });
        this.scene.time.delayedCall(100000, () => {
            if (healthPack.active) { // значит ещё не уничтожена
                healthPack.trail.destroy()
                healthPack.destroy();
            }
        });
        
    }
    getGroup() {
        return this.group;
    }

}