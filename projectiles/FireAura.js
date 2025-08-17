import { damageEnemy } from "../utils/damageEnemy.js";
import { addDamage } from "../utils/damageStats.js";
import { getAllClosestEnemiesInRadius } from "../utils/getAllClosestEnemiesInRadius copy.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

export function shootFireAura(scene, player, enemiesGroup, fireAuraGroup, radius) {
   
    const enemies = getAllClosestEnemiesInRadius(player.gameObject, enemiesGroup.getChildren(), radius);

    // scene.lightShootSfx.play();

    enemies.forEach(enemy => {
        // scene.magicShootSfx.play();
        if (!enemy.active) return;
        if (!scene.fireAuraSfx.isPlaying) {
            scene.fireAuraSfx.play();
        }
        damageEnemy(scene, enemy, playerSkills.fireAura.damage, getHUD())
        addDamage("fireAura", playerSkills.fireAura.damage);

        const fx = scene.add.sprite(enemy.x, enemy.y, 'fireAuraAnims').setDepth(10);
        fx.play('fireAuraAnim');

        // через 300 мс уничтожаем эффект
        scene.time.delayedCall(300, () => {
            fx.destroy();
        });
    })

}