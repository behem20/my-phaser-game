import { applyDamageWithCooldown } from "../utils/applyDamageWithCooldown.js";
import { damageEnemy } from "../utils/damageEnemy.js";
import { addDamage } from "../utils/damageStats.js";
import { flashIcon } from "../utils/flashIcon.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

// Армагеддон — уничтожает всех врагов
export function shootArmageddon(scene, enemiesGroup, iconID) {

    const damage = playerSkills.armageddon.damage; // или используем playerSkills.armageddon.damage, если хочешь масштабируемость
    flashIcon(scene, iconID)


    // Звук армагеддона

    // Дополнительный визуальный эффект на экране
    // const flash = scene.add.rectangle(scene.cameras.main.centerX, scene.cameras.main.centerY, scene.scale.width, scene.scale.height, 0xff0000, 0.3);
    // flash.setDepth(1000)
    // scene.time.delayedCall(300, () => flash.destroy());

    // Эффект появления и исчезновения

    const flash = scene.ui.createRectangle(
        { xPercent: 0.5, yPercent: 0.5, widthPercent: 1.05, heightPercent: 1.05 },
        0x000000,
        1
    )
        .setScrollFactor(0)
        .setDepth(999);

    // ⚡ Текст "АРМАГЕДДОН"
    const text = scene.ui.createText(
        'АРМАГЕДДОН',
        { xPercent: 0.5, yPercent: 0.3, fontPercent: 0.10 },

        {
            fontFamily: 'Impact, Arial Black, sans-serif',
            fontSize: 100,
            color: '#520808ff',
            stroke: '#ffffff',
            strokeThickness: 2,
            align: 'center',
            shadow: {
                offsetX: 5,
                offsetY: 5,
                color: '#000000',
                blur: 16,
                fill: true
            }
        }
    )
        .setOrigin(0.5)
        .setScrollFactor(0)
        .setDepth(1000)
        .setAlpha(0.1)
        .setScale(0.7);
    text.setShadow(10, 6, '#550000', 25, true, true);

    // ⚡ Плавная вспышка (экран ослепительно белеет и затем гаснет)
    scene.tweens.add({
        targets: flash,
        alpha: { from: 0, to: 1 },
        duration: 220,
        yoyo: true,
        ease: 'Sine.InOut',
        onYoyo: () => scene.cameras.main.shake(300, 0.006),
        onComplete: () => {
            enemiesGroup.getChildren().forEach(enemy => {
                if (!enemy.active) return;

                const distance = Phaser.Math.Distance.Between(scene.player.x, scene.player.y, enemy.x, enemy.y);
                if (distance <= 1000) {

                    // applyDamageWithCooldown(scene, 'armageddon', enemy, 10, 10)
                    damageEnemy(scene, enemy, damage, getHUD());
                    addDamage("Armageddon", damage);
                }
                // Визуальный эффект (вспышка, тряска, звук)
                // scene.tweens.add({
                //     targets: enemy,
                //     alpha: 0,
                //     duration: 30,
                //     ease: 'Cubic.easeOut',
                // });
            });

            // Камера трясётся от силы скилла
            scene.cameras.main.shake(400, 0.01);
            flash.destroy()
        }
    });

    // 🔥 Анимация текста
    scene.tweens.add({
        targets: text,
        scale: { from: 0.7, to: 1.4 },
        alpha: { from: 0, to: 1 },
        duration: 300,
        ease: 'Back.Out',
        yoyo: true,
        // hold: 400,
        onStart: () => {
            // Одновременно с текстом можно добавить удар звука
            // scene.sound.play('armageddon', { volume: 0.8 });
        },
        onComplete: () => text.destroy()
    });
}