import { applyDamageWithCooldown } from "../utils/applyDamageWithCooldown.js";
import { damageEnemy } from "../utils/damageEnemy.js";
import { addDamage } from "../utils/damageStats.js";
import { flashIcon } from "../utils/flashIcon.js";
import { flashScreen } from "../utils/FlashScreen.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

// Каст града (hail) с интервалом
export function shootHail(scene, player, enemiesGroup, count = 5, interval = 50, iconID) {
    const hailRadius = 105;
    const damage = playerSkills.hail?.damage || 20;

    flashScreen(scene, 0x15ccff, 0.2, count * interval)
    flashIcon(scene, iconID)
    for (let i = 0; i < count; i++) {
        scene.time.delayedCall(i * interval, () => {
            flashScreen(scene, 0x555cff, Phaser.Math.FloatBetween(0.01,0.1),  interval)
            scene.hailShootSfx.play()
            const x = Phaser.Math.Between(player.x - 280, player.x + 280);
            const y = Phaser.Math.Between(player.y - 280, player.y + 280);

            const hailSprite = scene.add.sprite(x, y, "hailStartAnims");


            hailSprite.setOrigin(0.5);
            hailSprite.setDepth(3);
            hailSprite.setAlpha(0.8);
            hailSprite.setScale(Phaser.Math.FloatBetween(1.5, 2.8))
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
                    hailSprite.destroy();
                });
            })

        });
    }
}