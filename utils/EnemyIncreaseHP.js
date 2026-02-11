

export function IncreaseEnemyHPperTime(scene, hp) {
    // const level = scene.registry.get('currentLevel');
    const result = hp + scene.hud.elapsedTime * scene.level.currentLevel.enemiesConfigs.enemiesProcentHPIncreasePer10sec * 0.01
    
    return result


}