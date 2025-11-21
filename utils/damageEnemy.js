
import { showDamageText } from "./DAMAGE_TEXT.js";
import { getPlayerDamage } from "./damageCalculator.js";
import { playDamageEffect } from "./damageEffect.js";
import { playEnemyDeathEffect } from "./EnemyDeathEffect.js";

export function damageEnemy(scene, enemy, damage = 1, hud,) {

    if (!enemy.active) return;
    // scene.enemyHitSfx.play()

    if (scene.time.now - scene.lastShootSoundTime > 100) {
        scene.lastShootSoundTime = scene.time.now;
        scene.enemyHitSfx.play()
    }
    const hitDamage = getPlayerDamage(scene, damage)

    enemy.hp -= hitDamage;
    // playDamageEffect(enemy, scene, hitDamage); //old version
    if (scene.hideDamageText) {
        showDamageText(enemy, scene, Math.floor(damage)) // new version damage text show optimized
    }
    
    if (enemy.hp <= 0) {
        playEnemyDeathEffect(scene, enemy)
        hud.addExp(scene.levels[scene.registry.get('currentLevel')].levelConfigs.addExpAmountPerKillAmount)
        hud.addScore(); // или передай hud сюда
    }
}