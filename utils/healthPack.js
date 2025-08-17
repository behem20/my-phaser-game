import playerInitCfgs from "../PlayerConfigs.js";

export default class HealthPack {
    constructor(scene, player, enemy) {
        this.scene = scene;
        this.player = player;
        this.group = scene.physics.add.group();
    }
    spawnRandomly(minDistance = 300, maxDistance = 3000, scene) {
        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
        const distance = Phaser.Math.Between(minDistance, maxDistance);
        const x = this.player.x + Math.cos(angle) * distance;
        const y = this.player.y + Math.sin(angle) * distance;

        const healthPack = this.group.create(x, y, "healthPack");
        healthPack.setScale(0.6)
        // coin.setOrigin(0.5, 0.5);
        const pickupRadius = healthPack.width * playerInitCfgs.coinsMagnetRadiusBonus;
        healthPack.setCircle(pickupRadius, -(pickupRadius - pickupRadius / 4), -(pickupRadius - pickupRadius / 4));
        healthPack.setDepth(-2)
        healthPack.setCollideWorldBounds(true);
        healthPack.setBounce(1);
    }
    getGroup() {
        return this.group;
    }

}