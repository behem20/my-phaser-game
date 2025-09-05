
export default class ChestSpawner {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;

        this.group = scene.physics.add.group();
    }
    spawnChest(minDistance = 1000, maxDistance = 2000, scene) {
        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
        const distance = Phaser.Math.Between(minDistance, maxDistance);
        const x = this.player.x + Math.cos(angle) * distance;
        const y = this.player.y + Math.sin(angle) * distance;

        const chest = this.group.create(x, y, 'chest');
        chest.setDepth(-1)

        chest.trail = scene.add.particles(0, 0, 'flares', {
            frame: 'yellow',
            lifespan: 3800,
            speed: { min: 50, max: 100 },
            angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
            gravityY: 0,             // без гравитации
            scale: { start: 0.5, end: 0 }, // уменьшаются
            alpha: { start: 1, end: 0 },   // исчезают
            frequency: 100,   
            tint: [0xffffff, 0xff11ff],
            blendMode: 'ADD',
            follow: chest,
        });
        
        this.scene.time.delayedCall(100000, () => {
            if (chest.active) { // значит ещё не уничтожена
                chest.trail.destroy()
                chest.destroy();
            }
        });
    }

    getGroup() {
        return this.group
    }

}