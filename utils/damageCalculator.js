


export function getPlayerDamage(scene, spellDamage) {

    const baseDamage = scene.level.currentLevel.playerConfigs.dmg;
    const bonusDamage = scene.player.playerInitCfgs.damageBonus;
    const damageBeforeSpread = ((baseDamage * bonusDamage) ) * spellDamage

    function getRandomDamage(damageBeforeSpread, spread = 2) {
        const min = damageBeforeSpread - spread;
        const max = damageBeforeSpread + spread;
        return Phaser.Math.Between(min, max);
    }
    const result = getRandomDamage(damageBeforeSpread, damageBeforeSpread / 100 * 7);
    return result
}

export function getPlayerDamageBeforeSpread(scene, spellDamage) {
   
    const baseDamage = scene.level.currentLevel.playerConfigs.dmg;
    const bonusDamage = scene.player.playerInitCfgs.damageBonus;
    const damageBeforeSpread = ((baseDamage * bonusDamage)) * spellDamage
    return damageBeforeSpread
}