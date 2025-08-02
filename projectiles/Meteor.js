import { damageEnemy } from "../utils/damageEnemy.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

// Каст метеора
export function shootMeteor(scene, player, enemiesGroup, count) {
    const meteorRadius = 120;
    const damage = playerSkills.meteor.damage;

    for (let i = 0; i < count; i++) {
        // случайная точка в пределах мира или относительно камеры
        const x = Phaser.Math.Between(player.x - 400, player.x + 400);
        const y = Phaser.Math.Between(player.y - 400, player.y + 400);

        // визуальный эффект (можно заменить на спрайт, если хочешь)

        const meteorSprite = scene.add.sprite(x, y, "meteor");
        meteorSprite.setOrigin(0.5);
        meteorSprite.setDepth(10);

        // Урон по врагам
        enemiesGroup.getChildren().forEach(enemy => {
            if (!enemy.active) return;

            const distance = Phaser.Math.Distance.Between(x, y, enemy.x, enemy.y);
            if (distance <= meteorRadius) {
                console.log('hit');

                damageEnemy(scene, enemy, damage, getHUD());

                // эффект попадания (можно убрать)
                scene.tweens.add({
                    targets: enemy,
                    alpha: 0.3,
                    yoyo: true,
                    repeat: 2,
                    duration: 100,
                });
            }
        });

        // Удалить визуал через 500мс
        scene.time.delayedCall(500, () => {
            meteorSprite.destroy();
        });

        // звук, если хочешь
    }
}