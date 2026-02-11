import { applyDamageWithCooldown } from "../utils/applyDamageWithCooldown.js";
import { getAllClosestEnemiesInRadius } from "../utils/getAllClosestEnemiesInRadius copy.js";

export function shootFireAura(scene, player, enemiesGroup, fireAuraGroup, radius,) {

    const enemies = getAllClosestEnemiesInRadius(player.gameObject, enemiesGroup.getChildren(), radius);



    enemies.forEach(enemy => {
        if (!enemy.active) return;

        if (!scene.audio.isPlaying('fireAuraSfx')) {
            scene.audio.play('fireAuraSfx')
        }


        applyDamageWithCooldown(scene, 'fireAura', enemy, 10, 300, fireAuraGroup)
        // damageEnemy(scene, enemy, playerSkills.fireAura.damage, getHUD())
        // addDamage("fireAura", playerSkills.fireAura.damage);

        const fx = scene.add.sprite(enemy.x, enemy.y, 'fireAuraAnims').setDepth(5);
        fx.setScale(Phaser.Math.FloatBetween(0.3, 2))
        fx.play('fireAuraAnim');

        // через 300 мс уничтожаем эффект
        scene.time.delayedCall(300, () => {
            fx.destroy();
        });
    })

}