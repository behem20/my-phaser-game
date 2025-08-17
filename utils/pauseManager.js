import levels from "../levelsConfigs.js";
import { getHUD } from "./hudManager.js";
import { playerSkills } from "./upgradesManager.js";
import { setLanguage, t } from "../LanguageManager.js";

export function setupPause(scene) {
    scene.pauseKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    scene.isPaused = false;
    scene.pauseOverlay = null;
}

export function togglePause(scene) {
    scene.isPaused = !scene.isPaused;

    if (scene.isPaused) {
        scene.anims.pauseAll();

        scene.physics.world.pause();
        if (scene.shootMagicTimer) {
            scene.shootMagicTimer.paused = true;
        }
        if (scene.shootFireTimer) {
            scene.shootFireTimer.paused = true;
        }
        if (scene.shootLightTimer) {
            scene.shootLightTimer.paused = true;
        }
        if (scene.shootLightningTimer) {
            scene.shootLightningTimer.paused = true;
        }
        if (scene.shootFireAuraTimer) {
            scene.shootFireAuraTimer.paused = true;
        }
        if (scene.shootTornadoTimer) {
            scene.shootTornadoTimer.paused = true;
        }
        if (scene.shootMeteorTimer) {
            scene.shootMeteorTimer.paused = true;
        }
        if (scene.shootHailTimer) {
            scene.shootHailTimer.paused = true;
        }
        if (scene.shootArmageddonTimer) {
            scene.shootArmageddonTimer.paused = true;
        }


        scene.waveManager.stopAll()
        scene.spawnCoinsTimer.paused = true;
        scene.hud.pause();
        scene.sound.volume = 0.01;

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
            t('messages.pause'),
            { fontSize: '48px', fill: '#fff' }
        ).setOrigin(0.5).setScrollFactor(0);

        scene.resumeButton = scene.add.text(
            scene.cameras.main.centerX,
            scene.cameras.main.centerY + 20,
            t('ui.continue'),
            {
                fontSize: '32px',
                fill: '#0f0',
                backgroundColor: '#222',
                padding: { x: 10, y: 5 }
            }
        ).setOrigin(0.5).setScrollFactor(0).setInteractive();

        scene.resumeButton.on('pointerdown', () => { scene.onTapSfx.play(); togglePause(scene) });

        scene.toMenuButton = scene.add.text(
            scene.cameras.main.centerX,
            scene.cameras.main.centerY + 80,
            t('ui.menu'),
            {
                fontSize: '32px',
                fill: '#0f0',
                backgroundColor: '#222',
                padding: { x: 10, y: 5 }
            }
        ).setOrigin(0.5).setScrollFactor(0).setInteractive();

        scene.toMenuButton.on('pointerdown', () => {
            scene.onTapSfx.play();
            levels[scene.registry.get('currentLevel')].levelConfigs.coefficientToUpgradeLevel = 1
            playerSkills.resetSkills()
            scene.scene.start("MenuScene");
        });

        //settings
        const settingsButton = scene.add.sprite(770, 33, "settings").setInteractive().setScrollFactor(0)

        settingsButton.on('pointerdown', () => {
            scene.onTapSfx.play();
            const bgFill = scene.add.rectangle(0, 0, 800, 800, 0x550000, 1)
                .setOrigin(0)
                .setInteractive()
                .setDepth(1001)
                .setScrollFactor(0)
            const closeButton = scene.add.rectangle(640, 120, 60, 60, 0x000000, 0.9)
                .setOrigin(0)
                .setInteractive()
                .setDepth(1002)
                .setScrollFactor(0)
            closeButton.on('pointerdown', () => {
                scene.onTapSfx.play();
                bgFill.destroy() // закрываем сцену по клику на фон
                closeButton.destroy()
                toggleSoundButton.destroy()
            });
            const toggleSoundButton = scene.add.sprite(400, 400, scene.sound.mute ? 'soundOn' : 'soundOff')
                .setInteractive()
                .setScale(4)
                .setDepth(1002)
                .setScrollFactor(0)
            toggleSoundButton.on('pointerdown', () => {
                scene.onTapSfx.play();
                toggleSoundButton.setTexture(!scene.sound.mute ? 'soundOn' : 'soundOff')

                scene.sound.mute = !scene.sound.mute;
                console.log('1');

            })
        });

    } else {
        scene.anims.resumeAll();
        scene.physics.world.resume();
        if (scene.shootMagicTimer) {
            scene.shootMagicTimer.paused = false;
        }
        if (scene.shootFireTimer) {
            scene.shootFireTimer.paused = false;
        }
        if (scene.shootLightTimer) {
            scene.shootLightTimer.paused = false;
        }
        if (scene.shootLightningTimer) {
            scene.shootLightningTimer.paused = false;
        }
        if (scene.shootFireAuraTimer) {
            scene.shootFireAuraTimer.paused = false;
        }
        if (scene.shootTornadoTimer) {
            scene.shootTornadoTimer.paused = false;
        }
        if (scene.shootMeteorTimer) {
            scene.shootMeteorTimer.paused = false;
        }
        if (scene.shootHailTimer) {
            scene.shootHailTimer.paused = false;
        }
        if (scene.shootArmageddonTimer) {
            scene.shootArmageddonTimer.paused = false;
        }

        scene.waveManager.start();
        scene.spawnCoinsTimer.paused = false;
        scene.hud.resume();
        scene.sound.volume = 1;

        scene.pauseOverlay.destroy();
        scene.pauseText.destroy();
        scene.resumeButton.destroy();
        scene.toMenuButton.destroy();
    }
}