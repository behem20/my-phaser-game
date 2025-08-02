
import { playerSkills } from "./upgradesManager.js";

export function setupTimers(scene) {

    // Монеты
    scene.spawnCoinsTimer = scene.time.addEvent({
        delay: 100,
        callback: () => scene.coins.spawnRandomly(100, 200),
        callbackScope: scene,
        loop: true
    });
    
    // время
    scene.gameTimer = scene.time.addEvent({
        delay: 1000,
        callback: () => {
            scene.hud.elapsedTime++;
            scene.hud.timeText.setText(+ scene.hud.elapsedTime)
            if (scene.hud.elapsedTime >= scene.hud.levelDuration) {
                playerSkills.resetSkills()
                scene.hud.onLevelComplete(scene.hud.score)
            }
        },
        loop: true
    })
}