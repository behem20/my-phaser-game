import { damageEnemy } from "./damageEnemy.js";
import { addDamage } from "./damageStats.js";
import { getHitPoint } from "./getHitPoint.js";
import { getHUD } from "./hudManager.js";
import { playerSkills } from "./upgradesManager.js";


export function applyDamageWithCooldown(scene, sourceKey, target, damage, cooldown = 500, source) {


    const now = scene.time.now;

    if (!target.lastDamageBySource) {
        target.lastDamageBySource = {};
    }

    // формируем ключ на основе типа и конкретного снаряда
    const key = sourceKey + "_" + source.uniqueId;


    if (!target.lastDamageBySource[key] || now - target.lastDamageBySource[key] >= cooldown) {
        target.lastDamageBySource[key] = now;

       


        // урон берём из source (или из playerSkills[source.sourceKey], если тебе так удобнее)
        damageEnemy(scene, target, playerSkills[sourceKey].damage, getHUD(), sourceKey);
        addDamage(sourceKey, playerSkills[sourceKey].damage);
    }
}