import { damageEnemy } from "../utils/damageEnemy.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

// Армагеддон — уничтожает всех врагов
export function shootArmageddon(scene, enemiesGroup) {
    const damage = playerSkills.armageddon.damage; // или используем playerSkills.armageddon.damage, если хочешь масштабируемость

    enemiesGroup.getChildren().forEach(enemy => {
        if (!enemy.active) return;

        // Наносим огромный урон (или просто убиваем)
        damageEnemy(scene, enemy, damage, getHUD());

        // Визуальный эффект (вспышка, тряска, звук)
        scene.tweens.add({
            targets: enemy,
            alpha: 0,
            duration: 300,
            ease: 'Cubic.easeOut',
        });
    });

    // Камера трясётся от силы скилла
    scene.cameras.main.shake(400, 0.01);

    // Звук армагеддона

    // Дополнительный визуальный эффект на экране
    const flash = scene.add.rectangle(scene.cameras.main.centerX, scene.cameras.main.centerY, scene.scale.width, scene.scale.height, 0xff0000, 0.3);
    flash.setDepth(1000);
    scene.time.delayedCall(300, () => flash.destroy());
}