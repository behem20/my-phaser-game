import { flashIcon } from "../utils/flashIcon.js";

export function shootLight(scene, player, lightGroup, count, enemies, iconID, spellLevel) {
    const level = spellLevel - 1


    if (enemies.group.getLength() === 0) {
        return
    } else {
        flashIcon(scene, iconID)
        for (let i = 0; i < count; i++) {
            const light = lightGroup.create(player.x, player.y, "light");

            if (!light) return;
            let lightParticles = '';
            if (level < 4) {
                 lightParticles = scene.add.particles(0, 0, 'flares', {
                    frame: 'white',
                    // speed: 30,
                    scale: { start: 0.5, end: 0.35 },
                    alpha: { start: 0.6, end: 0.6 },
                    lifespan: 10+10*level,
                    angle: 0,
                    frequency: 3, // частота появления
                    tint: [0xffffff, 0xffff33],
                    follow: light, // следят за игроком
                    blendMode: 'ADD'
                }).setDepth(1);
            } else if (level < 7) {
                 lightParticles = scene.add.particles(0, 0, 'flares', {
                    frame: 'blue',
                    // speed: 30,
                    scale: { start: 0.5, end: 0.35 },
                    alpha: { start: 0.6, end: 0.6 },
                    lifespan: 10*level,
                    angle: 0,
                    frequency: 3, // частота появления
                    tint: [0xffffff, 0x00ffff],
                    follow: light, // следят за игроком
                    blendMode: 'ADD'
                }).setDepth(1);
            } else {
                 lightParticles = scene.add.particles(0, 0, 'flares', {
                    frame: 'blue',
                    // speed: 30,
                    scale: { start: 0.5, end: 0.35 },
                    alpha: { start: 0.6, end: 0.6 },
                    lifespan: 10*level,
                    angle: 0,
                    frequency: 3, // частота появления
                    tint: [0xffffff, 0x0000ff],
                    follow: light, // следят за игроком
                    blendMode: 'ADD'
                }).setDepth(1);
            }

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