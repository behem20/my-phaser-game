import { damageEnemy } from "../utils/damageEnemy.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

// Каст града (hail) с интервалом
export function shootHail(scene, player, enemiesGroup, count = 5, interval = 100) {
    const hailRadius = 45;
    const damage = playerSkills.hail?.damage || 20;

    for (let i = 0; i < count; i++) {
        scene.time.delayedCall(i * interval, () => {
            const x = Phaser.Math.Between(player.x - 400, player.x + 400);
            const y = Phaser.Math.Between(player.y - 400, player.y + 400);

            const hailSprite = scene.add.sprite(x, y, "hail");
            hailSprite.setOrigin(0.5);
            hailSprite.setDepth(10);
            hailSprite.setAlpha(0.8);
            hailSprite.setScale(1.3); // при необходимости

            // Урон по врагам
            enemiesGroup.getChildren().forEach(enemy => {
                if (!enemy.active) return;

                const distance = Phaser.Math.Distance.Between(x, y, enemy.x, enemy.y);
                if (distance <= hailRadius) {
                    console.log('hit hail');

                    damageEnemy(scene, enemy, damage, getHUD());

                    scene.tweens.add({
                        targets: enemy,
                        alpha: 0.3,
                        yoyo: true,
                        repeat: 2,
                        duration: 100,
                    });
                }
            });

            // Удаление визуала
            scene.time.delayedCall(500, () => {
                hailSprite.destroy();
            });

            // (опционально) звук
            scene.hailSfx?.play?.();
        });
    }
}