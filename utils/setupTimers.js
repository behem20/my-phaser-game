
import { formatTime } from "./formatTime.js";
import { playerSkills } from "./upgradesManager.js";

export function setupTimers(scene) {

    // Монеты
    scene.spawnCoinsTimer = scene.time.addEvent({
        delay: 400,
        callback: () => scene.coins.spawnRandomly(500, 2000, scene),
        callbackScope: scene,
        loop: true
    });

    //healthpacks
    scene.spawnHealthPacksTimer = scene.time.addEvent({
        delay: 20000,
        callback: () => scene.healthPack.spawnRandomly(100, 500, scene),
        callbackScope: scene,
        loop: true
    });

    // время
    scene.gameTimer = scene.time.addEvent({
        delay: 1000,
        callback: () => {
            scene.hud.elapsedTime++;
            scene.hud.timeText.setText(formatTime(scene.hud.elapsedTime))
            if (scene.hud.elapsedTime >= scene.hud.levelDuration) {
                playerSkills.resetSkills()
                scene.hud.onLevelComplete(scene.hud.score)
            }
        },
        loop: true
    })
}