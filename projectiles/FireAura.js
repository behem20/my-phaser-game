import { damageEnemy } from "../utils/damageEnemy.js";
import { getAllClosestEnemiesInRadius } from "../utils/getAllClosestEnemiesInRadius copy.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

export function shootFireAura(scene, player, enemiesGroup, fireAuraGroup, level) {

    const enemies = getAllClosestEnemiesInRadius(player.gameObject, enemiesGroup.getChildren(), 200);

    // scene.lightShootSfx.play();

    enemies.forEach(enemy => {
        // scene.magicShootSfx.play();
        if (!enemy.active) return;
        if (!scene.fireAuraSfx.isPlaying) {
            scene.fireAuraSfx.play();
        }
        damageEnemy(scene, enemy, playerSkills.fireAura.damage, getHUD())
        
        const fx = scene.add.sprite(enemy.x, enemy.y, 'fireAuraAnims').setDepth(10);
        fx.play('fireAuraAnim');

        // через 300 мс уничтожаем эффект
        scene.time.delayedCall(300, () => {
            fx.destroy();
        });
    })

}