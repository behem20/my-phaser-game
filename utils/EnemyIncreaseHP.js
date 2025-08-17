import levels from "../levelsConfigs.js"

export function IncreaseEnemyHPperTime(scene, hp) {
    // const level = scene.registry.get('currentLevel');
    const result = hp + scene.hud.elapsedTime * levels[0].enemiesConfigs.enemiesProcentHPIncreasePer10sec * 0.01

    return result


}