import { applyDamageWithCooldown } from "../utils/applyDamageWithCooldown.js";
import { damageEnemy } from "../utils/damageEnemy.js";
import { addDamage } from "../utils/damageStats.js";
import { flashIcon } from "../utils/flashIcon.js";
import { flashScreen } from "../utils/FlashScreen.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

// Каст града (hail) с интервалом
export function shootHail(scene, player, enemiesGroup, count = 5, interval = 50, iconID) {
    const hailRadius = 135;
    const damage = playerSkills.hail?.damage || 20;

    // flashScreen(scene, 0x15ccff, 0.2, count * interval)


    flashIcon(scene, iconID)
    for (let i = 0; i < count + 10; i++) {
        scene.time.delayedCall(i * (interval * 0.5), () => {
            // flashScreen(scene, 0x555cff, Phaser.Math.FloatBetween(0.01,0.1),  interval)
            scene.hailShootSfx.play()
            // const x = Phaser.Math.Between(player.x - 280 - interval*0.5, player.x + 280+interval*0.5);
            // const y = Phaser.Math.Between(player.y - 280 - interval*0.5, player.y + 280 + interval*0.5);

            // const MIN_DIST = 200 * 0.6 + i*20
            // const MAX_DIST = 200 * 0.8 + i * 20
            // const MIN_DIST = (scene.LightMaskRadius * 0.7 - i * 40) / 2
            // const MAX_DIST = (scene.LightMaskRadius - i * 40) / 2
            const MIN_DIST = 20
            const MAX_DIST = 150
            // console.log(MIN_DIST, MAX_DIST);

            let x, y;
            // do {
            //     x = player.x + Phaser.Math.Between(-MAX_DIST, MAX_DIST);
            //     y = player.y + Phaser.Math.Between(-MAX_DIST, MAX_DIST);
            // } while (Phaser.Math.Distance.Between(player.x, player.y, x, y) < MIN_DIST);

            do {
                x = scene.mouseX + Phaser.Math.Between(-MAX_DIST, MAX_DIST);
                y = scene.mouseY + Phaser.Math.Between(-MAX_DIST, MAX_DIST);
            } while (Phaser.Math.Distance.Between(player.x, player.y, x, y) < MIN_DIST);

            const hailSprite = scene.add.sprite(x, y, "hailStartAnims");
            // const explosion = scene.add.circle(x, y, 45, 0xff0000, 1) //0x0066ff
            //     .setDepth(10)
            //     .setBlendMode('ADD');
            // scene.time.delayedCall(400, () => explosion.destroy());
            hailSprite.trail = scene.add.particles(hailSprite.x, hailSprite.y, 'flares', {
                frame: 'blue',
                lifespan: 360,
                // speed: 360,
                speed: { min: 120, max: 220 },
                angle: { start: 0, end: 360, steps: 30 },
                scale: { start: 0.2, end: 0.7 },
                alpha: { start: 0.65, end: 0 },
                frequency: -1, // частота появления
                quantity: 16,
                tint: [0xff6633, 0xff3322, 0xdd5522],
                // tint: [0xff6633, 0xff3322, 0xddee22],
                // tint: [0xff66FF, 0x2200FF],
                blendMode: 'SCREEN',
                on: false // эмиттер не будет работать постоянно
                // blendMode: 'ADD',
            }).setDepth(-1);
            hailSprite.trail.explode();
            hailSprite.trail.once('complete', () => {
                hailSprite.trail.destroy();
            });

            hailSprite.setOrigin(0.5);
            hailSprite.setDepth(3);
            hailSprite.setAlpha(0.8);
            hailSprite.setScale(Phaser.Math.FloatBetween(1.5, 2.3))
            // при необходимости

            hailSprite.play('hailStartAnim')
            // scene.enemyHitSfx.play()

            hailSprite.once('animationcomplete-hailStartAnim', () => {
                hailSprite.play('hailActiveAnim');
                // Урон по врагам
                enemiesGroup.getChildren().forEach(enemy => {
                    if (!enemy.active) return;
                    const distance = Phaser.Math.Distance.Between(x, y, enemy.x, enemy.y);
                    if (distance <= hailRadius) {
                        applyDamageWithCooldown(scene, 'hail', enemy, 10, 10)
                        // damageEnemy(scene, enemy, damage, getHUD());
                        addDamage("hail", damage);
                    }
                });
                hailSprite.once('animationcomplete-hailActiveAnim', () => {
                    hailSprite.trail.destroy()
                    console.log('destroy');
                    
                    hailSprite.destroy();
                    // explosion.destroy()
                });
            })

        });
    }
}