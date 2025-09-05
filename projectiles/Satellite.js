
export class Satellites {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;

        this.group = scene.physics.add.group({
            classType: Phaser.Physics.Arcade.Sprite,
            maxSize: 20,
            runChildUpdate: false
        });

        this.radius = 200;             // расстояние от героя
        this.speed = 0.01;            // скорость вращения (радианы на тик)
        this.count = 0;               // количество активных спутников
        this.rotationOffset = 0;      // текущий угол смещения
    }

    /** Создаём или обновляем количество спутников */
    setCount(newCount) {
        this.count = newCount;

        // Если не хватает спутников — добавляем
        const current = this.group.countActive(true);
        if (current < this.count) {
            const toAdd = this.count - current;
            for (let i = 0; i < toAdd; i++) {
                const sat = this.group.get(this.player.x, this.player.y, 'satellite').setAlpha(0.1);
                

                if (this.count < 2) {
                    sat.trail = this.scene.add.particles(0, 0, 'flares', {
                        frame: 'red',
                        lifespan: 200,
                        speed: 300,
                        angle: { min: 0, max: 360 },
                        scale: { start: 0.7, end: 0 },
                        alpha: { start: 0.8, end: 0 },
                        tint: [0xff2211,],
                        blendMode: 'SCREEN',
                        follow: sat
                    });

                } else if (this.count < 3) {

                    sat.trail = this.scene.add.particles(0, 0, 'flares', {
                        frame: 'red',
                        lifespan: 200,
                        speed: 300,
                        angle: { min: 0, max: 360 },
                        scale: { start: 0.7, end: 0 },
                        alpha: { start: 0.8, end: 0 },
                        tint: [0xffff11,],
                        blendMode: 'SCREEN',
                        follow: sat
                    });
                } else if (this.count < 4) {
                    sat.trail = this.scene.add.particles(0, 0, 'flares', {
                        frame: 'white',
                        lifespan: 200,
                        speed: 300,
                        angle: { min: 0, max: 360 },
                        scale: { start: 0.7, end: 0 },
                        alpha: { start: 0.8, end: 0 },
                        tint: [0xffff11,],
                        blendMode: 'SCREEN',
                        follow: sat
                    });

                } else if (this.count < 5) {
                    sat.trail = this.scene.add.particles(0, 0, 'flares', {
                        frame: 'white',
                        lifespan: 200,
                        speed: 300,
                        angle: { min: 0, max: 360 },
                        scale: { start: 0.7, end: 0 },
                        alpha: { start: 0.8, end: 0.2 },
                        // rotate: 150,
                        tint: [ 0x00ff00],
                        blendMode: 'SCREEN',
                        follow: sat
                    });

                } else if (this.count < 6) {
                    sat.trail = this.scene.add.particles(0, 0, 'flares', {
                        frame: 'white',
                        lifespan: 200,
                        speed: 300,
                        angle: { min: 0, max: 360 },
                        scale: { start: 0.7, end: 0 },
                        alpha: { start: 0.8, end: 0 },
                        tint: [0x1177ff],
                        // tint: [0x00ff00, 0x993300], // on max level
                        blendMode: 'SCREEN',
                        follow: sat
                    });
                } else if (this.count < 7) {

                    sat.trail = this.scene.add.particles(0, 0, 'flares', {
                        frame: 'white',
                        lifespan: 200,
                        speed: 300,
                         angle: { min: 0, max: 360 },
                        scale: { start: 0.7, end: 0 },
                        alpha: { start: 0.8, end: 0 },
                        tint: [0x1111ff],
                        blendMode: 'SCREEN',
                        follow: sat
                    });
                } else {

                    sat.trail = this.scene.add.particles(0, 0, 'flares', {
                        frame: 'yellow',
                        lifespan: 200,
                        speed: 300,
                        angle: { min: 0, max: 360 },
                        scale: { start: 0.7, end: 0 },
                        alpha: { start: 0.8, end: 0 },

                        tint: [ 0xff00ff],
                        blendMode: 'SCREEN',
                        follow: sat
                    });
                }



                if (!sat) continue;
                sat.setSize(60, 60)
                sat.setActive(true).setVisible(true);
                sat.body.setAllowGravity(false);
                sat.setDepth(5);
            }
        }

        // Если спутников больше чем нужно — отключаем лишние
        if (current > this.count) {
            const extra = current - this.count;
            let disabled = 0;
            this.group.getChildren().forEach(sat => {
                if (disabled >= extra) return;
                if (sat.active) {
                    sat.disableBody(true, true);
                    disabled++;
                }
            });
        }
    }

    update() {
        if (this.count <= 0) return;

        this.rotationOffset += this.speed;

        this.group.getChildren().forEach((sat, i) => {
            if (!sat.active) return;
            const baseAngle = (2 * Math.PI / this.count) * i;
            const angle = baseAngle + this.rotationOffset;
            const x = this.scene.cameras.main.midPoint.x + Math.cos(angle) * this.radius;
            const y = this.scene.cameras.main.midPoint.y + Math.sin(angle) * this.radius;
            sat.setPosition(x, y);
        });
    }

    getGroup() {
        return this.group;
    }
}