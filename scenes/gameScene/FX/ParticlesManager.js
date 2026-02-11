

export default class ParticlesManager {
    constructor(scene) {
        this.scene = scene
        this.list = {
            teleportTo : this.scene.add.particles(0, 0, 'flares', {
                frame: 'white',
                speed: { min: 120, max: 260 },
                scale: { start: 0.5, end: 0 },
                // scale: 1,
                alpha: { start: 1, end: 0.5 },
                lifespan: 570,
                angle: { min: 0, max: 360 },
                frequency: -1,
                quentity: 1,
                tint: [0xffff11, 0x8888ff],
                blendMode: 'ADD'
            }).setDepth(0),
        }


    }


}