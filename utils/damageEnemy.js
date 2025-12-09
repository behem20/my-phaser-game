
import { showDamageText } from "./DAMAGE_TEXT.js";
import { getPlayerDamage } from "./damageCalculator.js";
import { playDamageEffect } from "./damageEffect.js";
import { playEnemyDeathEffect } from "./EnemyDeathEffect.js";
import { getHitPoint } from "./getHitPoint.js";

export function damageEnemy(scene, enemy, damage = 1, hud, source) {

    if (!enemy.active) return;
    // scene.cameras.main.shake(200,0.002)
    // scene.enemyHitSfx.play()

    const hitXY = getHitPoint(scene.player.sprite, enemy)
    scene.satelliteParticlesOnHit.explode(4, hitXY.x, hitXY.y)

    if (scene.time.now - scene.lastShootSoundTime > 100) {
        scene.lastShootSoundTime = scene.time.now;
        scene.enemyHitSfx.play()
        // scene.enemySplatSfx.play()
    }
    const hitDamage = getPlayerDamage(scene, damage)

    enemy.hp -= hitDamage;
    playDamageEffect(enemy, source); //old version
    if (scene.hideDamageText) {
        showDamageText(enemy, scene, Math.floor(hitDamage)) // new version damage text show optimized
    }

    if (enemy.hp <= 0) {
        playEnemyDeathEffect(scene, enemy, hitXY)
        hud.addExp(scene.levels[scene.registry.get('currentLevel')].levelConfigs.addExpAmountPerKillAmount)
        hud.addScore(); // или передай hud сюда
    }
}