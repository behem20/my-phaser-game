
import ArmorsScrollsSpawn from "../entities/ArmorsScrollsSpawner.js";

import { getPlayerDamage } from "./damageCalculator.js";
import { playDamageEffect } from "./damageEffect.js";
import { addDamage } from "./damageStats.js";
import { playEnemyDeathEffect } from "./EnemyDeathEffect.js";

export function damageEnemy(scene, enemy, damage = 1, hud,) {

    if (!enemy.active) return;
    // scene.enemyHitSfx.play()

    if (scene.time.now - scene.lastShootSoundTime > 100) {
        scene.lastShootSoundTime = scene.time.now;
        scene.enemyHitSfx.play()
    }
    const hitDamage = getPlayerDamage(scene, damage)
    // console.log(hitDamage);

    enemy.hp -= hitDamage;
    
    playDamageEffect(enemy, scene, hitDamage);
    if (enemy.hp <= 0) {
        
        // scene.items.ArmorsScrollsSpawn(enemy.x, enemy.y)

        playEnemyDeathEffect(scene, enemy)

        // if (enemy.hpBar) enemy.hpBar.destroy();
        hud.addExp(scene.levels[scene.registry.get('currentLevel')].levelConfigs.addExpAmountPerKillAmount)
        hud.addScore(); // или передай hud сюда
    }
}