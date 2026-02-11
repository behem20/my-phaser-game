
export class Satellites {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;

        this.group = scene.physics.add.group({
            classType: Phaser.Physics.Arcade.Sprite,
            maxSize: 25,
            runChildUpdate: false
        });

        this.radius = 120;//200             // расстояние от героя
        this.speed = 0.045;            // скорость вращения (радианы на тик)//0.045
        this.count = 0;               // количество активных спутников
        this.rotationOffset = 0;      // текущий угол смещения
    }

    /** Создаём или обновляем количество спутников */
    setCount(newCount) {
        this.count = newCount ;

        // Если не хватает спутников — добавляем
        const current = this.group.countActive(true);
        if (current < this.count) {
            const toAdd = this.count - current;
            for (let i = 0; i < toAdd; i++) {
                const sat = this.group.get(this.player.x, this.player.y, 'satellite').setAlpha(0.1);

                sat.trail = this.scene.add.particles(0, 0, 'flares', {
                    frame: 'white',
                    // speed: 130,
                    scale: { start: 0.35, end: 0 },
                    // scale: 0.1,
                    // alpha: { start: 0.6, end: 0.2 },
                    lifespan: 270,
                    // angle: 0,
                    frequency: 60, // частота появления
                    tint: [0x888888, 0x8888ff],
                    // tint: [0xff0000, 0x8888ff],
                    follow: sat, // следят за игроком
                    blendMode: 'ADD'
                });



                if (!sat) continue;
                sat.setSize(60, 60)
                sat.setActive(true).setVisible(true);
                sat.body.setAllowGravity(false);
                sat.setDepth(106);
                sat.uniqueId = Phaser.Utils.String.UUID()
                sat.body.setCircle(30);
                sat.setAlpha(1)
                const colors = [0xff00ff, 0xffff00, 0x0000ff, 0xff0000];
                //  const colors = [0x00aaff, 0xffaaff, 0x0000ff, 0xffffff];
                // sat.setTint(...colors)
                // sat.setTint(0xff0000)
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
            sat.rotation += 0.2
        });
    }

    getGroup() {
        return this.group;
    }
}