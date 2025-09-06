import SkillsUI from "../ui/skillsUI.js";
import { flashIcon } from "../utils/flashIcon.js";
import { getClosestEnemies } from "../utils/getClosestEnemies.js";

export function shootMagic(scene, player, enemiesGroup, magicGroup, count, targetCount = 1, iconID, level) {


    const enemies = getClosestEnemies(player.gameObject, enemiesGroup.getChildren(), targetCount);


    if (enemies.length === 0) return;

    if (scene.shootMagicTimer) {//flash icon
        // console.log(iconID);
        
        flashIcon(scene, iconID)
    }




    for (let i = 0; i < count; i++) {

        scene.time.delayedCall(i * 150, () => {
            enemies.forEach(enemy => {
                scene.magicShootSfx.setRate(Phaser.Math.FloatBetween(0.95, 1.05));
                scene.magicShootSfx.play();


                const offsetX = Phaser.Math.Between(-15, 15);
                const offsetY = Phaser.Math.Between(-15, 15);
                const magic = magicGroup.create(offsetX + player.x, offsetY + player.y, "magic");


                if (level <= 4) {
                    magic.trail = scene.add.particles(0, 0, 'flares', {
                        frame: 'yellow',
                        lifespan: 200,
                        speed: { min: 10, max: 80 },
                        angle: { min: 0, max: 360 },
                        scale: { start: 0.35, end: 0.1 },
                        alpha: { start: 1, end: 0 },
                        frequency: 10,
                        rotate: 150,
                        tint: [0x0000ff, 0xff00ff],
                        blendMode: 'ADD',
                        follow: magic
                    });

                } else if (level <= 7) {

                    magic.trail = scene.add.particles(0, 0, 'flares', {
                        frame: 'yellow',
                        lifespan: 200,
                        speed: { min: 10, max: 80 },
                        angle: { min: 0, max: 360 },
                        scale: { start: 0.35, end: 0.1 },
                        alpha: { start: 1, end: 0 },
                        frequency: 10,
                        rotate: 150,
                        tint: [0xff22ee, 0xff0000],
                        blendMode: 'ADD',
                        follow: magic
                    });
                } else {
                    magic.trail = scene.add.particles(0, 0, 'flares', {
                        frame: 'yellow',
                        lifespan: 200,
                        speed: { min: 10, max: 80 },
                        angle: { min: 0, max: 360 },
                        scale: { start: 0.45, end: 0.1 },
                        alpha: { start: 1, end: 0 },
                        frequency: 10,
                        rotate: 150,
                        tint: [0x0000ff, 0x00ff00],
                        blendMode: 'ADD',
                        follow: magic
                    });
                }




                magic.body.allowGravity = false;


                let angle = Phaser.Math.Angle.Between(player.x, player.y, enemy.x, enemy.y);
                angle += Phaser.Math.DegToRad(Phaser.Math.Between(-3, 3)); // ±5°

                const speed = Phaser.Math.Between(480, 520);
                scene.physics.velocityFromRotation(angle, speed, magic.body.velocity);

                const flash = scene.add.sprite(player.x, player.y, 'flares', 'red')
                    .setScale(0.5)
                    .setAlpha(0.8)
                    .setDepth(-2);
                scene.tweens.add({
                    targets: flash,
                    scale: 0.7,
                    alpha: 0,
                    duration: 100,
                    onComplete: () => flash.destroy()
                });

                scene.time.delayedCall(2000, () => {
                    if (magic.active) { // остановить эмиттер
                        magic.trail.destroy()
                        magic.destroy()
                    }
                });
            })
        });
    }


    player.attackTextureOnce();
}