import levels from "../levelsConfigs.js";
import playerInitCfgs from "../PlayerConfigs.js";

export function getPlayerDamage(scene, spellDamage) {

    const levelIndex = scene.registry.get('currentLevel');
    const baseDamage = levels[levelIndex].playerConfigs.dmg;
    const bonusDamage = playerInitCfgs.damageBonus;

    const aHat = scene.registry.get('activeHat') || {};
    const aStaff = scene.registry.get('activeStaff') || {};
    let bonus = 0;

    if (aHat.itemType === 'hat') bonus += aHat.damage;
    if (aStaff.itemType === 'staff') bonus += aStaff.damage;


    const damageBeforeSpread = (baseDamage + bonus + bonusDamage) * spellDamage * 0.1


    function getRandomDamage(damageBeforeSpread, spread = 2) {
        const min = damageBeforeSpread - spread;
        const max = damageBeforeSpread + spread;
        return Phaser.Math.Between(min, max);
    }
    const result = getRandomDamage(damageBeforeSpread, damageBeforeSpread / 100 * 20);

// console.log('baseDamage: ', baseDamage);
// console.log('spellDamage: ', spellDamage);
// console.log('bonusDamage: ', bonusDamage);
// console.log('res: ', result);

    return result
}