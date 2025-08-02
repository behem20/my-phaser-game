import levels from "../levelsConfigs.js";
import { getHUD } from "./hudManager.js";
import { playerSkills } from "./upgradesManager.js";

export function setupPause(scene) {
    scene.pauseKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    scene.isPaused = false;
    scene.pauseOverlay = null;
}

export function togglePause(scene) {
    scene.isPaused = !scene.isPaused;

    if (scene.isPaused) {
        scene.physics.world.pause();
        scene.shootMagicTimer.paused = true;
        scene.shootFireTimer.paused = true;
        scene.shootLightTimer.paused = true;
        scene.enemiesDragTimer.paused = true;

        scene.waveManager.stopAll()
        scene.spawnCoinsTimer.paused = true;
        scene.hud.pause();

        scene.pauseOverlay = scene.add.rectangle(
            0, 0,
            scene.cameras.main.width,
            scene.cameras.main.height,
            0x000000,
            0.5
        ).setOrigin(0).setScrollFactor(0);

        scene.pauseText = scene.add.text(
            scene.cameras.main.centerX,
            scene.cameras.main.centerY - 50,
            'PAUSED',
            { fontSize: '48px', fill: '#fff' }
        ).setOrigin(0.5).setScrollFactor(0);

        scene.resumeButton = scene.add.text(
            scene.cameras.main.centerX,
            scene.cameras.main.centerY + 20,
            'Resume',
            {
                fontSize: '32px',
                fill: '#0f0',
                backgroundColor: '#222',
                padding: { x: 10, y: 5 }
            }
        ).setOrigin(0.5).setScrollFactor(0).setInteractive();

        scene.resumeButton.on('pointerdown', () => { scene.onTapSfx.play();togglePause(scene)});

        scene.toMenuButton = scene.add.text(
            scene.cameras.main.centerX,
            scene.cameras.main.centerY + 80,
            'Menu',
            {
                fontSize: '32px',
                fill: '#0f0',
                backgroundColor: '#222',
                padding: { x: 10, y: 5 }
            }
        ).setOrigin(0.5).setScrollFactor(0).setInteractive();

        scene.toMenuButton.on('pointerdown', () => {
            scene.onTapSfx.play();
            levels[scene.registry.get('currentLevel')].levelConfigs.upgradeLevel =1
            playerSkills.resetSkills()
            scene.scene.start("MenuScene");
        });

    } else {
        scene.physics.world.resume();
        scene.shootMagicTimer.paused = false;
        scene.shootFireTimer.paused = false;
        scene.shootLightTimer.paused = false;
        // scene.gameTimer.paused = false;
        scene.waveManager.start();
        scene.spawnCoinsTimer.paused = false;
        scene.hud.resume();

        scene.pauseOverlay.destroy();
        scene.pauseText.destroy();
        scene.resumeButton.destroy();
        scene.toMenuButton.destroy();
    }
}