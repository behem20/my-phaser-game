
import { getModifiedCooldown } from "../utils/cooldownUtils.js";
import { flashIcon } from "../utils/flashIcon.js";
import { playerSkills } from "../utils/upgradesManager.js";

export function shootTornado(scene, player, tornadoGroup, count, iconID, spellLevel) {
    const level = spellLevel - 1;


    for (let i = 0; i < count; i++) {

        flashIcon(scene, iconID)
        let tornadoAnim = ''
        function getTornadoAnim() {
            if (Math.random() > 0.5) {
                tornadoAnim = "tornadoAnims"
            }
            else {
                tornadoAnim = "tornadoAnims_2"
            }
        }
        getTornadoAnim()
        tornadoAnim = 'tornadoAnims_2'
        const tornado = tornadoGroup.get(player.x, player.y, tornadoAnim);

        if (scene.time.now - scene.lastTornadoSoundTime > 1050) {
            scene.lastTornadoSoundTime = scene.time.now;
            scene.tornadoStartSoundSfx.play()
        }
        tornado.play(tornadoAnim)

        if (!tornado) return;
        if (scene.LightMaskRadius) {
            tornado.MIN_DIST = scene.LightMaskRadius * 0.6
            tornado.MAX_DIST = scene.LightMaskRadius * 0.8
        } else {
            tornado.MIN_DIST = 300
            tornado.MAX_DIST = 400
        }
        // resetTornado(tornado, player.x + Phaser.Math.Between(-330, 300), player.y + Phaser.Math.Between(-330, 330), scene)

        resetTornado(tornado, player, tornado.MIN_DIST, tornado.MAX_DIST, scene)
        // scene.lightShootSfx.play();
        tornado.setActive(true).setVisible(true);
        tornado.body.setAllowGravity(false);
        tornado.body.setCollideWorldBounds(true);
        tornado.body.setBounce(1); // пусть отскакивает от границ
        // tornado.body.setCircle(tornado.width );
        tornado.body.setCircle(tornado.width, tornado.width / 2 - tornado.width, tornado.height / 2 - tornado.width);
        if (level < 3) {
            tornado.particles = scene.add.particles(0, 0, 'flares', {
                frame: 'blue',
                lifespan: 30 * level,
                speed: 300,
                angle: { min: 0, max: 360 },
                scale: { start: 0.1, end: 0.7 },
                alpha: { start: 0.8, end: 0 },
                tint: [0x0000ff, 0x119955],
                // tint: [0x00ff00, 0x993300], // on max level
                blendMode: 'ADD',
                follow: tornado
            });
        } else if (level < 7) {
            {
                tornado.particles = scene.add.particles(0, 0, 'flares', {
                    frame: 'blue',
                    lifespan: 30 * level,
                    speed: 300,
                    angle: { min: 0, max: 360 },
                    scale: { start: 0.1, end: 0.7 },
                    alpha: { start: 0.8, end: 0 },
                    tint: [0x6600ff, 0xee9955],
                    // tint: [0x00ff00, 0x993300], // on max level
                    blendMode: 'ADD',
                    follow: tornado
                });
            }

        } else {
            tornado.particles = scene.add.particles(0, 0, 'flares', {
                frame: 'blue',
                lifespan: 20 * level,
                speed: 350,
                angle: { min: 0, max: 360 },
                scale: { start: 0.3, end: 0.8 },
                alpha: { start: 1, end: 0 },
                tint: [0xff00ff, 0xff0000],
                // tint: [0x00ff00, 0x993300], // on max level
                blendMode: 'ADD',
                follow: tornado
            });
        }


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
        scene.time.delayedCall(playerSkills.tornado.duration * scene.playerInitCfgs.magicsDurationBonus, () => {
            if (tornado.active) {
                tornado.disableBody(true, true);
                tornado.particles.destroy()
            }
            directionTimer.remove();
        });
    }

}
function resetTornado(tornado, player, MIN_DIST, MAX_DIST, scene) {
    let x, y;
    do {
        x = player.x + Phaser.Math.Between(-MAX_DIST, MAX_DIST);
        y = player.y + Phaser.Math.Between(-MAX_DIST, MAX_DIST);
    } while (Phaser.Math.Distance.Between(player.x, player.y, x, y) < MIN_DIST);

    tornado.enableBody(true, x, y, true, true);
    tornado.setActive(true).setVisible(true);
    tornado.body.setAllowGravity(false);
    tornado.body.setCollideWorldBounds(true);
    tornado.body.setBounce(1);
    // tornado.body.setCircle(tornado.width / 2);
    tornado.setScale(1)


    // Задать стартовую скорость
    const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
    scene.physics.velocityFromRotation(angle, 120, tornado.body.velocity);
}