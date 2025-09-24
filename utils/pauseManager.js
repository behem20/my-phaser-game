
import { getHUD } from "./hudManager.js";
import { playerSkills } from "./upgradesManager.js";
import { setLanguage, t } from "../LanguageManager.js";

export function setupPause(scene) {
    scene.pauseKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    scene.isPaused = false;
    scene.pauseOverlay = null;
}

export function togglePause(scene) {

    const ch = scene.cameras.main.height
    const cw = scene.cameras.main.width

    scene.isPaused = !scene.isPaused;

    if (scene.isPaused) {
        if (ysdk?.features?.GameplayAPI) ysdk.features.GameplayAPI.stop();
        scene.anims.pauseAll();

        scene.physics.world.pause();
        if (scene.shootMagicTimer) {
            scene.shootMagicTimer.paused = true;
        }
        if (scene.shootFakeMagicTimer) {
            scene.shootFakeMagicTimer.paused = true;
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
        if (scene.spawnHealthPacksTimer) {
            scene.spawnHealthPacksTimer.paused = true;
        }

        scene.waveManager.stopAll()
        scene.spawnCoinsTimer.paused = true;
        scene.hud.pause();
        // scene.sound.volume = 0.01;

        scene.pauseOverlay = scene.ui.createRectangle(
            { xPercent: 0, yPercent: 0, widthPercent: 1, heightPercent: 1 },
            0x000000,
            0.5
        ).setOrigin(0).setScrollFactor(0);

        scene.pauseText = scene.ui.createText(
            t('messages.pause'),
            { xPercent: 0.5, yPercent: 0.45, fontPercent: 0.05 },
            { fontSize: '48px', fill: '#fff' }
        ).setOrigin(0.5).setScrollFactor(0);

       

        scene.resumeButton = scene.ui.createText(
            t('ui.continue'),
            { xPercent: 0.5, yPercent: 0.52, fontPercent: 0.05 },
            {
                fontSize: '32px',
                fill: '#0f0',
                backgroundColor: '#222',
                padding: { x: 10, y: 5 }
            }
        ).setOrigin(0.5).setScrollFactor(0).setInteractive().setDepth(33);
        scene.resumeButton.on('pointerover', () => {
            scene.resumeButton.setScale(1.1)
            scene.onHoverSfx.play()
        })
        scene.resumeButton.on('pointerout', () => {
            scene.resumeButton.setScale(1)
        })
        scene.resumeButton.on('pointerdown', () => { scene.onTapSfx.play(); togglePause(scene) });

        scene.toMenuButton = scene.ui.createText(
            t('ui.menu'),
            { xPercent: 0.5, yPercent: 0.6, fontPercent: 0.05 },

            {
                fontSize: '32px',
                fill: '#0f0',
                backgroundColor: '#222',
                padding: { x: 10, y: 5 }
            }
        ).setOrigin(0.5).setScrollFactor(0).setInteractive();
        scene.toMenuButton.on('pointerover', () => {
            scene.toMenuButton.setScale(1.1)
            scene.onHoverSfx.play()

        })
        scene.toMenuButton.on('pointerout', () => {
            scene.toMenuButton.setScale(1)
        })
        scene.toMenuButton.on('pointerdown', () => {
            scene.onTapSfx.play();
            // scene.levels[scene.registry.get('currentLevel')].levelConfigs.coefficientToUpgradeLevel = 1
            // playerSkills.resetSkills()
            // resetLevels()

            const centerX = scene.cameras.main.width / 2;
            const centerY = scene.cameras.main.height / 2;
            scene.confirmBox = scene.ui.createRectangle(
                { xPercent: 0.5, yPercent: 0.5, widthPercent: 0.3, heightPercent: 0.45},
                 0x000000)
                 .setScrollFactor(0).setOrigin(0.5, 0.5).setDepth(100).setInteractive()

            scene.questionText = scene.ui.createText(
                t('ui.exit?'),
                { xPercent: 0.5, yPercent: 0.375, fontPercent: 0.05 },

                { fontSize: '48px', fill: '#fff' }).setScrollFactor(0).setDepth(101).setOrigin(0.5, 0.5)
            scene.confirmYes = scene.ui.createText(t(
                'ui.yes'),
                { xPercent: 0.575, yPercent: 0.65, fontPercent: 0.05 },
                { fontSize: '48px', fill: '#fff' }).setOrigin(0.5).setScrollFactor(0).setInteractive().setDepth(101)
            scene.confirmYes.on('pointerdown', () => {
                scene.hud.minusLives(10)
                scene.scene.launch("GameOverScene", { scene: scene, coins: scene.hud.onFinishCoins(), score: scene.hud.score })

            })
            scene.confirmYes.on('pointerover', () => {
                scene.onHoverSfx.play()

                scene.confirmYes.setScale(1.1)
            })
            scene.confirmYes.on('pointerout', () => {

                scene.confirmYes.setScale(1)
            })


            scene.confirmNot = scene.ui.createText(
                 t('ui.not'),
                 { xPercent: 0.425, yPercent: 0.65, fontPercent: 0.05 },
                
                 { fontSize: '48px', fill: '#fff' }).setOrigin(0.5).setScrollFactor(0).setInteractive().setDepth(101)

            scene.confirmNot.on('pointerdown', () => {
                scene.confirmBox.destroy()
                scene.questionText.destroy()
                scene.confirmYes.destroy()
                scene.confirmNot.destroy()
            })
            scene.confirmNot.on('pointerover', () => {
                scene.onHoverSfx.play()
                scene.confirmNot.setScale(1.1)
            })
            scene.confirmNot.on('pointerout', () => {

                scene.confirmNot.setScale(1)
            })

            // scene.scene.start("MenuScene");
        });

        //settings
        scene.settingsButton = scene.ui.createText(
            t('ui.options'),
            { xPercent: 0.5, yPercent: 0.68, fontPercent: 0.05 },
            {
                fontSize: '32px',
                fill: '#0f0',
                backgroundColor: '#222',
                padding: { x: 10, y: 5 }
            }
        ).setInteractive().setScrollFactor(0).setOrigin(0.5)
        scene.settingsButton.on('pointerover', () => {
            scene.settingsButton.setScale(1.1)
            scene.onHoverSfx.play()

        })
        scene.settingsButton.on('pointerout', () => {
            scene.settingsButton.setScale(1)
        })
        scene.settingsButton.on('pointerdown', () => {
            const centerX = scene.cameras.main.width / 2;
            const centerY = scene.cameras.main.height / 2;
            scene.onTapSfx.play();
            const bgFill = scene.ui.createRectangle({ xPercent: 0, yPercent: 0, widthPercent: 1, heightPercent: 1 }, 0x550000, 1)
                .setOrigin(0)
                .setInteractive()
                .setDepth(1301)
                .setScrollFactor(0)
            // const closeButton = scene.add.rectangle(640, 120, 60, 60, 0x000000, 0.9)
            //     .setOrigin(0)
            //     .setInteractive()
            //     .setDepth(1002)
            //     .setScrollFactor(0)
            // closeButton.on('pointerdown', () => {
            //     scene.onTapSfx.play();
            //     bgFill.destroy() // закрываем сцену по клику на фон
            //     closeButton.destroy()
            //     toggleSoundButton.destroy()
            // });
            const backBtn = scene.ui.createText(
                t('ui.back'),
                {
                    xPercent: 0.5,
                    yPercent: 0.3,
                    fontPercent: 0.04
                }, {
                fontSize: '24px',
                padding: { x: 10, y: 5 },
                color: '#fff',
                backgroundColor: '#333'
            })
                .setInteractive({ useHandCursor: true })
                .setOrigin(0.5)
                .setScrollFactor(0)
                .setDepth(1302)
                .on('pointerdown', () => {
                    scene.onTapSfx.play();
                    bgFill.destroy() // закрываем сцену по клику на фон
                    backBtn.destroy()
                    toggleSoundButton.destroy()
                })
                .on('pointerover', () => {
                    scene.onHoverSfx.play()
                })
            const toggleSoundButton = scene.ui.createImage(scene.sound.mute ? 'soundOn' : 'soundOff',
                {
                    xPercent: 0.5,
                    yPercent: 0.5,
                }, 0.3)
                .setInteractive()
                .setOrigin(0.5)
                // .setScale(4)
                .setDepth(1302)
                .setScrollFactor(0)
            toggleSoundButton.on('pointerdown', () => {
                scene.onTapSfx.play();
                toggleSoundButton.setTexture(!scene.sound.mute ? 'soundOn' : 'soundOff')

                scene.sound.mute = !scene.sound.mute;


            })
        });

    } else {
        if (ysdk?.features?.GameplayAPI) ysdk.features.GameplayAPI.start();
        scene.anims.resumeAll();
        scene.physics.world.resume();
        if (scene.shootMagicTimer) {
            scene.shootMagicTimer.paused = false;
        }
        if (scene.shootFakeMagicTimer) {
            scene.shootFakeMagicTimer.paused = false;
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
        if (scene.spawnHealthPacksTimer) {
            scene.spawnHealthPacksTimer.paused = false;
        }

        scene.waveManager.start();
        scene.spawnCoinsTimer.paused = false;
        scene.hud.resume();
        scene.sound.volume = 1;

        scene.pauseOverlay.destroy();
        scene.pauseText.destroy();
        scene.resumeButton.destroy();
        scene.toMenuButton.destroy();
        scene.settingsButton.destroy()
    }
}