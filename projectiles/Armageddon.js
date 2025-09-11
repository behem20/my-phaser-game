import { applyDamageWithCooldown } from "../utils/applyDamageWithCooldown.js";
import { damageEnemy } from "../utils/damageEnemy.js";
import { addDamage } from "../utils/damageStats.js";
import { flashIcon } from "../utils/flashIcon.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

// Армагеддон — уничтожает всех врагов
export function shootArmageddon(scene, enemiesGroup, iconID) {

    const damage = playerSkills.armageddon.damage; // или используем playerSkills.armageddon.damage, если хочешь масштабируемость
    flashIcon(scene,iconID)
    enemiesGroup.getChildren().forEach(enemy => {
        if (!enemy.active) return;

        const distance = Phaser.Math.Distance.Between(scene.player.x, scene.player.y, enemy.x, enemy.y);
        if (distance <= 550) {

            applyDamageWithCooldown(scene, 'armageddon', enemy, 10, 10)
            // damageEnemy(scene, enemy, damage, getHUD());
            addDamage("Armageddon", damage);
        }
        // Визуальный эффект (вспышка, тряска, звук)
        // scene.tweens.add({
        //     targets: enemy,
        //     alpha: 0,
        //     duration: 300,
        //     ease: 'Cubic.easeOut',
        // });
    });

    // Камера трясётся от силы скилла
    scene.cameras.main.shake(400, 0.01);

    // Звук армагеддона

    // Дополнительный визуальный эффект на экране
    const flash = scene.add.rectangle(scene.cameras.main.centerX, scene.cameras.main.centerY, scene.scale.width, scene.scale.height, 0xff0000, 0.3);
    flash.setDepth(1000);
    scene.time.delayedCall(300, () => flash.destroy());
}