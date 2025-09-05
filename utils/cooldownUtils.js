

export function getModifiedCooldown(scene,baseCooldown) {
    // console.log(baseCooldown);
    
    
    const result = baseCooldown * (1 - scene.playerInitCfgs.cooldownReductionBonus);
    // console.log('result: ',result);
    return Math.trunc(Math.max(50,result))
}