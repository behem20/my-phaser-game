
import { showDamageText } from "./DAMAGE_TEXT.js";
import { getPlayerDamage } from "./damageCalculator.js";
import { playDamageEffect } from "./damageEffect.js";
import { playEnemyDeathEffect } from "./EnemyDeathEffect.js";
import { getHitPoint } from "./getHitPoint.js";

export function damageEnemy(scene, enemy, damage = 1, hud, source) {

    if (!enemy.active) return;


    const hitXY = getHitPoint(scene.player.sprite, enemy)

    if (scene.time.now - scene.lastShootSoundTime > 100) {
        scene.lastShootSoundTime = scene.time.now;
        scene.audio.play('enemyHitSfx')
    }
    const hitDamage = getPlayerDamage(scene, damage)

    enemy.hp -= hitDamage;
    enemy.hpBar.update(enemy.hp, enemy.maxHP)
    enemy.hpBar.show()

    // playDamageEffect(enemy, source); //old version
    if (scene.damageToggleUI.hideDamageText) {
        showDamageText(enemy, scene, Math.floor(hitDamage)) // new version damage text show optimized
    }

    if (enemy.hp <= 0) {
        playEnemyDeathEffect(scene, enemy, hitXY)
        hud.addExp(scene.level.currentLevel.levelConfigs.addExpAmountPerKillAmount)
        hud.addScore(); // или передай hud сюда
    }
}