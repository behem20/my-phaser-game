import { damageEnemy } from "../utils/damageEnemy.js";
import { addDamage } from "../utils/damageStats.js";
import { flashScreen } from "../utils/FlashScreen.js";
import { getClosestEnemiesInRadius } from "../utils/getClosestEnemiesInRadius.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

export function shootLightning(scene, player, enemiesGroup, lightningGroup, targetCount = 1) {



    const lightningKeys = ['lightning1', 'lightning2', 'lightning3', 'lightning4', 'lightning5'];


    const enemies = getClosestEnemiesInRadius(player.gameObject, enemiesGroup.getChildren(), targetCount);

    if (enemies.length === 0) return;
    flashScreen(scene,0x99ccff,0.08)
    scene.lightningShootSfx.play();


    enemies.forEach(enemy => {
        // scene.magicShootSfx.setRate(Phaser.Math.FloatBetween(0.9, 1.1));

        // scene.magicShootSfx.play();
        const randomKey = Phaser.Utils.Array.GetRandom(lightningKeys);
        const lightning = lightningGroup.create(enemy.x, enemy.y, randomKey).setOrigin(0.5, 1);
        lightning.body.allowGravity = false;

        if (!enemy.active) return;
        damageEnemy(scene, enemy, playerSkills.lightning.damage, getHUD())
        addDamage("lightning", playerSkills.lightning.damage);
        scene.tweens.add({
            targets: lightning,
            alpha: 0.5,
            yoyo: true,        // вернуться обратно к alpha=1
            repeat: 1,         // сколько раз повторить (1 = один цикл туда-обратно)
            duration: 50,      // скорость мигания
            onComplete: () => {
                lightning.destroy(); // удаляем после анимации
            }
        });

    })

    player.attackTextureOnce();
}