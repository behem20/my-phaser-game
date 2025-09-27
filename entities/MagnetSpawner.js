
export default class MagnetSpawner {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;

        this.group = scene.physics.add.group();
    }
    spawnMagnet(minDistance = 200, maxDistance = 400, scene) {
        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
        const distance = Phaser.Math.Between(minDistance, maxDistance);
        const x = this.player.x + Math.cos(angle) * distance;
        const y = this.player.y + Math.sin(angle) * distance;

        const magnet = this.group.create(x, y, 'magnet');
        magnet.setDepth(-1)

        magnet.trail = scene.add.particles(0, 0, 'flares', {
            frame: 'yellow',
            lifespan: 1800,
            speed: { min: 50, max: 100 },
            angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
            gravityY: 0,             // без гравитации
            scale: { start: 0.5, end: 0 }, // уменьшаются
            alpha: { start: 1, end: 0 },   // исчезают
            frequency: 200,   
            tint: [0xffffff, 0xff11ff],
            blendMode: 'ADD',
            follow: magnet,
        });
        
        this.scene.time.delayedCall(100000, () => {
            if (magnet.active) { // значит ещё не уничтожена
                magnet.trail.destroy()
                magnet.destroy();
            }
        });
    }

    getGroup() {
        return this.group
    }

}