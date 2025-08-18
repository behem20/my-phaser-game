import { getModifiedCooldown } from "../utils/cooldownUtils.js";
import { playerSkills } from "../utils/upgradesManager.js";

export function shootTornado(scene, player, tornadoGroup, count) {
    for (let i = 0; i < count; i++) {
        const tornado = tornadoGroup.get(player.x, player.y, "tornadoAnims");

        if (scene.time.now - scene.lastTornadoSoundTime > 1050) {
            scene.lastTornadoSoundTime = scene.time.now;
            scene.tornadoStartSoundSfx.play()
        }
        tornado.play('tornadoAnims')

        if (!tornado) return;
        resetTornado(tornado, player.x + Phaser.Math.Between(-410, 400), player.y + Phaser.Math.Between(-410, 420), scene)
        // scene.lightShootSfx.play();
        tornado.setActive(true).setVisible(true);
        tornado.body.setAllowGravity(false);
        tornado.body.setCollideWorldBounds(true);
        tornado.body.setBounce(1); // пусть отскакивает от границ
        tornado.body.setCircle(tornado.width / 2);
        tornado.particles = scene.add.particles(0, 0, 'flares', {
            frame: 'blue',
            lifespan: 200,
            speed: 300,
            angle: { min: 0, max: 360 },
            scale: { start: 0.7, end: 0 },
            alpha: { start: 0.8, end: 0 },

            tint: [0xff0000, 0x993300],
            blendMode: 'SCREEN',
            follow: tornado
        });

        scene.physics.velocityFromRotation(
            Phaser.Math.FloatBetween(0, Math.PI * 2), // случайный угол
            120,                                      // скорость
            tornado.body.velocity
        );
        const directionTimer = scene.time.addEvent({
            delay: 400,
            loop: true,
            callback: () => {
                if (!tornado.active) {
                    directionTimer.remove();
                    return;
                }
                const newAngle = Phaser.Math.FloatBetween(0, Math.PI * 2);
                scene.physics.velocityFromRotation(newAngle, 120, tornado.body.velocity);
            }
        });
        scene.time.delayedCall(getModifiedCooldown(playerSkills.tornado.duration), () => {
            if (tornado.active) {
                tornado.disableBody(true, true);
                tornado.particles.destroy()
            }
            directionTimer.remove();
        });
    }

}
function resetTornado(tornado, x, y, scene) {
    tornado.enableBody(true, x, y, true, true);
    tornado.setActive(true).setVisible(true);
    tornado.body.setAllowGravity(false);
    tornado.body.setCollideWorldBounds(true);
    tornado.body.setBounce(1);
    tornado.body.setCircle(tornado.width / 2);
    tornado.setScale(1)


    // Задать стартовую скорость
    const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
    scene.physics.velocityFromRotation(angle, 120, tornado.body.velocity);
}