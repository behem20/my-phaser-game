
import { formatTime } from "./formatTime.js";
import { playerSkills } from "./upgradesManager.js";

export function setupTimers(scene) {

    // Монеты
    scene.spawnCoinsTimer = scene.time.addEvent({
        delay: 1400,
        callback: () => scene.coins.spawnRandomly(500, 2000, scene),
        callbackScope: scene,
        loop: true
    });

    //healthpacks
    const spawnHealthPacksTimerDelay = Phaser.Math.Between(15000,35000)
    scene.spawnHealthPacksTimer = scene.time.addEvent({
        delay: spawnHealthPacksTimerDelay,
        callback: () => scene.healthPack.spawnRandomly(100, 500, scene),
        callbackScope: scene,
        loop: true
    });
     //chests
    scene.spawnChestsTimer = scene.time.addEvent({
        delay:30000,
        callback: () => scene.chests.spawnChest(350, 400, scene),
        callbackScope: scene,
        loop: true
    });

       //magnets
    scene.spawnMagnetsTimer = scene.time.addEvent({
        delay:60000,
        callback: () => scene.magnets.spawnMagnet(350, 400, scene),
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
                // playerSkills.resetSkills()
                // resetLevels()

                scene.hud.onLevelComplete(scene,scene.hud.onFinishCoins())

            }
        },
        loop: true
    })
}