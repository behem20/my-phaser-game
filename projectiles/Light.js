
export function shootLight(scene, player, lightGroup, count, enemies) {


    if (enemies.group.getLength() === 0) {
        return
    } else {
        for (let i = 0; i < count; i++) {
            const light = lightGroup.create(player.x, player.y, "light");

            if (!light) return;

            const lightParticles = scene.add.particles(0, 0, 'flares', {
                frame: 'blue',
                // speed: 30,
                scale: { start: 0.5, end: 0.35 },
                alpha: { start: 0.6, end: 0.6 },
                lifespan: 50,
                angle: 0,
                frequency: 3, // частота появления
                tint: [0xffffff, 0x00ffff],
                follow: light, // следят за игроком
                blendMode: 'ADD'
            }).setDepth(1);
            scene.lightShootSfx.play();
            light.body.allowGravity = false;

            const angle = Phaser.Math.FloatBetween(0, Math.PI * 2); // случайное направление
            const speed = 1100;

            scene.physics.velocityFromRotation(angle, speed, light.body.velocity);
            player.attackTextureOnce();

            scene.time.delayedCall(1000, () => {
                if (light.active) {
                    lightParticles.destroy()
                    light.destroy()
                }
            });
        }
    }



}