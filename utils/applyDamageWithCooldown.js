import { damageEnemy } from "./damageEnemy.js";
import { addDamage } from "./damageStats.js";
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
        addDamage(sourceKey, playerSkills[sourceKey].damage);
    }
}