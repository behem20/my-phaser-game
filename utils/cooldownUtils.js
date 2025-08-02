import playerInitCfgs from "../PlayerConfigs.js";

export function getModifiedCooldown(baseCooldown) {
    // console.log(baseCooldown);
    const result = baseCooldown * (1 - playerInitCfgs.cooldownReductionBonus);
    // console.log('result: ',result);

    return Math.max(50,result)
}