import { damageEnemy } from "./damageEnemy.js";
import { playEnemyDeathEffect } from "./EnemyDeathEffect.js";
import { getHUD } from "./hudManager.js";
import { playerSkills } from "./upgradesManager.js";

export function applyDamageWithCooldown(scene, sourceKey, target, damage, cooldown = 500) {
    const now = scene.time.now;

    if (!target.lastDamageBySource) {
        target.lastDamageBySource = {};
    }

    if (!target.lastDamageBySource[sourceKey] || now - target.lastDamageBySource[sourceKey] >= cooldown) {
        target.lastDamageBySource[sourceKey] = now;
        damageEnemy(scene, target, playerSkills[sourceKey].damage, getHUD())

        // console.log(`${target.name || 'Target'} получил урон от ${sourceKey}: ${damage}, осталось HP: ${target.hp}`);

        if (target.hp <= 0) {
            scene.coins.spawnForKill(target.x, target.y, scene)
            // scene.items.ArmorsScrollsSpawn(enemy.x, enemy.y)

            playEnemyDeathEffect(scene, target)

            // if (enemy.hpBar) enemy.hpBar.destroy();
            getHUD().addExp()
            getHUD().addScore(); // или передай hud сюда
        }
    }
}