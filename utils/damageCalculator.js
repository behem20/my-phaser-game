


export function getPlayerDamage(scene, spellDamage) {

    const levelIndex = scene.registry.get('currentLevel');
    const baseDamage = scene.levels[levelIndex].playerConfigs.dmg;
    const bonusDamage = scene.playerInitCfgs.damageBonus;

    const aHat = scene.registry.get('activeHat') || {};
    const aStaff = scene.registry.get('activeStaff') || {};
    let bonusHatAndStaff = 0;

    if (aHat.itemType === 'hat') bonus += aHat.damage;
    if (aStaff.itemType === 'staff') bonus += aStaff.damage;


    const damageBeforeSpread = ((baseDamage * bonusDamage) + bonusHatAndStaff) * spellDamage


    function getRandomDamage(damageBeforeSpread, spread = 2) {
        const min = damageBeforeSpread - spread;
        const max = damageBeforeSpread + spread;
        return Phaser.Math.Between(min, max);
    }
    const result = getRandomDamage(damageBeforeSpread, damageBeforeSpread / 100 * 7);
    // const result = damageBeforeSpread

    // console.log('baseDamage: ', baseDamage);
    // console.log('spellDamage: ', spellDamage);
    // console.log('bonusDamage: ', bonusDamage);
    // console.log('res: ', result);

    return result
}

export function getPlayerDamageBeforeSpread(scene, spellDamage) {

    const levelIndex = scene.registry.get('currentLevel');
    const baseDamage = scene.levels[levelIndex].playerConfigs.dmg;
    const bonusDamage = scene.playerInitCfgs.damageBonus;


    const damageBeforeSpread = ((baseDamage * bonusDamage)) * spellDamage
    

    // console.log('baseDamage: ', baseDamage);
    // console.log('spellDamage: ', spellDamage);
    // console.log('bonusDamage: ', bonusDamage);
    // console.log('res: ', result);

    return damageBeforeSpread
}