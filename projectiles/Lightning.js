
import { applyDamageWithCooldown } from "../utils/applyDamageWithCooldown.js";
import { damageEnemy } from "../utils/damageEnemy.js";
import { addDamage } from "../utils/damageStats.js";
import { flashIcon } from "../utils/flashIcon.js";
import { flashScreen } from "../utils/FlashScreen.js";
import { getClosestEnemies } from "../utils/getClosestEnemies.js";
import { getClosestEnemiesInRadius } from "../utils/getClosestEnemiesInRadius.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

export function shootLightning(scene, player, enemiesGroup, lightningGroup, targetCount = 1,iconID) {
    const lightningKeys = ['lightning1', 'lightning2', 'lightning3', 'lightning4', 'lightning5'];
    const finalCount = targetCount+10 + scene.playerInitCfgs.lightningCountBonus
    const enemies = getClosestEnemiesInRadius(scene,player.gameObject, enemiesGroup.getChildren(), finalCount);
// const enemies = getClosestEnemies(scene,player.gameObject, enemiesGroup.getChildren(), finalCount);

    if (enemies.length === 0) return;
    flashIcon(scene, iconID)
    flashScreen(scene, 0x99ccff, 0.1)
    scene.lightningShootSfx.play();

    enemies.forEach(enemy => {
        // scene.magicShootSfx.setRate(Phaser.Math.FloatBetween(0.9, 1.1));

        // scene.magicShootSfx.play();
        const randomKey = Phaser.Utils.Array.GetRandom(lightningKeys);
        const lightning = lightningGroup.create(enemy.x, enemy.y, randomKey).setOrigin(0.5, 1);
        lightning.body.allowGravity = false;

        if (!enemy.active) return;
        applyDamageWithCooldown(scene, 'lightning', enemy, 10, 10)
       
        scene.tweens.add({
            targets: lightning,
            alpha: 0,
            yoyo: true,        // вернуться обратно к alpha=1
            repeat: 1,         // сколько раз повторить (1 = один цикл туда-обратно)
            duration: 70,      // скорость мигания
            onComplete: () => {
                lightning.destroy(); // удаляем после анимации
            }
        });

    })

    player.attackTextureOnce();
}