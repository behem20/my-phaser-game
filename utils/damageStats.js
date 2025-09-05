
import { playerSkills } from "./upgradesManager.js";

export const damageStats = {};

export function addDamage(spellName, amount) {
    if (!damageStats[spellName]) {
        damageStats[spellName] = 0;
    }
    damageStats[spellName] += amount;
}

export function printStats(gAura) {
    console.log('gAura:', gAura);

    console.log("=== Damage Stats ===");
    console.log(playerSkills.upgradePointsCount);

    Object.entries(damageStats).forEach(([spell, dmg]) => {
        console.log(`${spell}: ${dmg}`);
    });
}
export function clearDamageStats(obj) {
    for (const key in obj) {

        obj[key] = null;

    }
}