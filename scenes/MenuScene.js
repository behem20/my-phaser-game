import { setLanguage, t } from "../LanguageManager.js";
import SkillRegistry, { setLevelsToSkillRegistrySpells } from "../SkillsRegistry.js";
import UIManager from "../ui/UIManager.js";
import FireAura from "../utils/fireAuraConfigs.js";
import saveManager from "../utils/SaveManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    preload() {

    }

    create() {

        this.ui = new UIManager(this);


        this.scale.on('resize', this.ui.resize, this.ui);
        this.scale.on('enterfullscreen', () => { this.ui.resize(); console.log('enterFS') });
        this.scale.on('leavefullscreen', () => { this.ui.resize(); console.log('leaveFS') });



        this.debugText = this.ui.createText('mamm', { xPercent: 0.15, yPercent: 0.96, fontPercent: 0.03 }, { fill: "rgb(21, 255, 0)" }).setScrollFactor(0).setDepth(1000);
        this.fpsText = this.ui.createText('mamm', { xPercent: 0.15, yPercent: 0.98, fontPercent: 0.03 }, { fill: "rgb(21, 255, 0)" }).setScrollFactor(0).setDepth(1000)


        const centerX = this.cameras.main.width / 2
        const centerY = this.cameras.main.height / 2
        const cw = this.cameras.main.width
        const ch = this.cameras.main.height
        setLanguage(this, 'ru');

        this.input.mouse.disableContextMenu();
        // saveManager.save(this)
        const saveData = saveManager.load();

        if (saveData) {
            this.registry.set('goldCount', saveData.coins);
            this.registry.set('gemCount', saveData.diamonds);
            this.registry.set('completedLevelsList', saveData.completedLevels);
            this.registry.set('skillsLevelsObj', saveData.skillsLevels);
            this.registry.set('scoreCount', saveData.score)
            // this.registry.set('metaUpgrades', saveData.metaUpgrades);
        } else {
            this.registry.set('goldCount', 130)
            this.registry.set('gemCount', 20)
            this.registry.set('completedLevelsList', [0, 0, 0, 0, 0, 0])
            this.registry.set('skillsLevelsObj', {
                magicLevel: 1,
                fireLevel: 1,
                lightLevel: 1,
                lightningLevel: 1,
                tornadoLevel: 1,
                fireAuraLevel: 1,
                satelliteLevel: 1,
                hailLevel: 1,
                armageddonLevel: 1,
            }),
                this.registry.set('scoreCount', 0)
        }
        setLevelsToSkillRegistrySpells(this.registry.get('skillsLevelsObj'))


        // Кнопка сохранить
        this.input.keyboard.on('keydown-S', () => saveManager.save(this));
        // Кнопка загрузить
        this.input.keyboard.on('keydown-L', () => saveManager.load());
        const menuMusic = this.sound.get("bgMusic");//bg music from menu scene off

        if (menuMusic && !menuMusic.isPlaying) {
            menuMusic.play()
        }
        const gameSceneBgMusic = this.sound.get('gameBGSound')
        if (gameSceneBgMusic && gameSceneBgMusic.isPlaying) {
            gameSceneBgMusic.stop(); // выключаем
        }
        const gameScenePlayerStepsSound = this.sound.get('playerMoveSound')
        if (gameScenePlayerStepsSound && gameScenePlayerStepsSound.isPlaying) {
            gameScenePlayerStepsSound.stop(); // выключаем
        }

        this.onTapSfx = this.sound.add('onTapSound', { volume: 0.1 });
        this.onHoverSfx = this.sound.add('hoverSound', { volume: 0.1 });
        this.rejectSoundSfx = this.sound.add('rejectSound', { volume: 1 });
        this.successSfx = this.sound.add('successSound', { volume: 0.3 });


        // if (!this.registry.has('goldCount')) this.registry.set('goldCount', 55000)
        // if (!this.registry.has('gemCount')) this.registry.set('gemCount', 20)


        // const menuBG = this.ui.createImage(
        //     'bgPhotoMenu',
        //     { xPercent: 0, yPercent: 0 }).setOrigin(0).setInteractive()
        const menuBG = this.ui.createRectangle(
            { xPercent: 0, yPercent: 0, widthPercent: 1, heightPercent: 1 }, 0xaaaaaa).setOrigin(0)

        if (!this.registry.has('currentLevel')) this.registry.set('currentLevel', 0);
        let level = this.registry.get('currentLevel');

        const titleText = this.ui.createText(
            t('game.title'),
            { xPercent: 0.5, yPercent: 0.15, fontPercent: 0.05 }, {
            fontSize: "64px",
            fill: "#000000ff"
        }).setOrigin(0.5, 0.5);
        // const fx = titleText.postFX.addShine(3, .5, 1);
        this.tweens.add({
            targets: titleText,
            alpha: 0,           // до какой прозрачности уходит
            duration: 2500,      // время затухания (мс)
            yoyo: true,         // вернуться обратно (от 0 → 1)
            repeat: -1          // бесконечный повтор
        });

        const goldTextBg_01 = this.ui.createRectangle(
            { xPercent: 0, yPercent: 0.01, widthPercent: 0.3, heightPercent: 0.05 },
            0x000000, 0.9).setOrigin(0)

        const goldTextBg = this.ui.createRectangle(
            { xPercent: 0, yPercent: 0.01, widthPercent: 0.3, heightPercent: 0.05 },
            0xffff00, 0.14).setOrigin(0).setStrokeStyle(2, 0xeeee00);

        const goldText = this.ui.createText(
            this.registry.get('goldCount'),
            { xPercent: 0.285, yPercent: 0.025, fontPercent: 0.03 },
            {
                fontSize: "24px",
                fill: "rgba(238, 234, 0, 1)"
            }).setOrigin(1, 0).setInteractive().on('pointerdown', () => {
                console.log(1);
                this.scale.startFullscreen();

            })
        const goldIcon = this.ui.createImage(
            'gold',
            { xPercent: 0.045, yPercent: 0.035 },
            0.1
        )

        const gemsTextBg_01 = this.ui.createRectangle(
            { xPercent: 0, yPercent: 0.07, widthPercent: 0.3, heightPercent: 0.05 },
            0x000000, 0.9).setOrigin(0)

        const gemsTextBg = this.ui.createRectangle(
            { xPercent: 0, yPercent: 0.07, widthPercent: 0.3, heightPercent: 0.05 },
            0x337799, 0.14).setOrigin(0).setStrokeStyle(2, 0x337799);

        const gemsText = this.ui.createText(
            this.registry.get('gemCount'),
            { xPercent: 0.285, yPercent: 0.085, fontPercent: 0.03 },
            {
                fontSize: "24px",
                fill: "rgba(92, 192, 209, 1)"
            }).setOrigin(1, 0);
        const gemsIcon = this.ui.createImage(
            'gem',
            { xPercent: 0.045, yPercent: 0.095 },
            0.15
        )

        // const gemsTextBg_01 = this.add.rectangle(0, 60, 160, 40, 0x000000,).setOrigin(0)
        // const gemsTextBg = this.add.rectangle(0, 60, 160, 40, 0x337799, 0.2).setOrigin(0).setStrokeStyle(2, 0x337799);
        // const gemsText = this.add.text(155, 70, this.registry.get('gemCount'), {
        //     fontSize: "24px",
        //     fill: "rgba(92, 192, 209, 1)"
        // }).setOrigin(1, 0);
        // const gemsIcon = this.add.image(0, 49, 'gem').setScale(0.25).setOrigin(0)



        const switchLevelButtonGroupData = [
            {
                x: 0.1, y: 0.3, scene: 'GameScene', key: 'level_1', level: 0, isChosen: false,
            },
            {
                x: 0.24, y: 0.3, scene: 'GameScene', key: 'level_2', level: 1, isChosen: false,
            },
            {
                x: 0.38, y: 0.3, scene: 'GameScene', key: 'level_3', level: 2, isChosen: false,
            },
            {
                x: 0.52, y: 0.3, scene: 'GameScene', key: 'level_4', level: 3, isChosen: false,
            },
            {
                x: 0.66, y: 0.3, scene: 'GameScene', key: 'level_5', level: 4, isChosen: false,
            },
            {
                x: 0.8, y: 0.3, scene: 'GameScene', key: 'level_6', level: 5, isChosen: false,
            },
            {
                x: 0.93, y: 0.3, scene: 'GameScene', key: 'level_infinity', level: 6, isChosen: false,
            },
        ]
        const completedList = this.registry.get('completedLevelsList')
        completedList.forEach((el, index) => {
            if (el) {
                const complete = this.ui.createImage(
                    'complete',
                    { xPercent: switchLevelButtonGroupData[index].x, yPercent: switchLevelButtonGroupData[index].y },
                    0.1
                ).setDepth(2)
            }// on down scale to tiny fix
        })
        this.switchLevelButtonGroup = this.add.group();
        switchLevelButtonGroupData.forEach(data => {
            const button = this.ui.createImage(
                data.key,
                { xPercent: data.x, yPercent: data.y }, 0.12).setInteractive()
            button.isChosen = 0;

            button.on('pointerdown', () => {
                this.registry.set('currentLevel', data.level)
                // levelText.setText(`${t('game.level')} ${this.registry.get('currentLevel') + 1}`)

                this.switchLevelButtonGroup.getChildren().forEach(btn => {
                    if (btn.trail) btn.trail.destroy();
                    btn.isChosen = false
                })
                // button.setTint(0xff3344)
                button.trail = this.add.particles(0, 0, 'flares', {
                    frame: 'yellow',
                    lifespan: 2500,
                    speed: { min: 50, max: 100 },
                    angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
                    gravityY: 0,             // без гравитации
                    scale: { start: 1, end: 0 }, // уменьшаются
                    alpha: { start: 1, end: 0.3 },   // исчезают
                    frequency: 100,
                    // tint: [0xffffff, 0xff11ff],
                    tint: [0xff3344, 0xffff33],
                    blendMode: 'ADD',
                    follow: button,
                }).setDepth(2);

                button.isChosen = true;
                this.registry.set('currentLevel', data.level)


            })
            button.on('pointerover', () => {
                // this.onHoverSfx.play();
                // button.setScale(1.3)
            });
            button.on('pointerout', () => {

                // button.setScale(1)
            });
            this.switchLevelButtonGroup.add(button)
        })


        //start button
        let toggleStartText = false;
        const startBtn = this.ui.createText(
            t('ui.start'),
            { xPercent: 0.5, yPercent: 0.5, fontPercent: 0.06 }
            , {
                fontSize: '48px',
                fill: '#fff',
                backgroundColor: "#333",
                padding: { x: 20, y: 10 }
            })
            .setOrigin(0.5, 0.5)
            .setInteractive();
        // const fx = startBtn.postFX.addShine(3, .5, 1);

        this.time.addEvent({
            delay: 1000,
            callback: () => {
                toggleStartText = !toggleStartText;
                // upgrdesText.setStyle({

                //     color: toggleStartText ? 'rgba(255, 0, 0, 1)' : '#fff',
                // })
                // startBtn.setStyle({
                //     color: toggleStartText ? '#fff' : 'rgba(135, 153, 135, 1)',
                // })
            },
            callbackScope: this,
            loop: true
        });

        startBtn.on('pointerover', () => { this.onHoverSfx.play(); startBtn.setScale(1.03) })
        startBtn.on('pointerout', () => { startBtn.setScale(1) })
        startBtn.on("pointerdown", () => {
            if (!this.switchLevelButtonGroup.getChildren().some(btn => btn.isChosen)) {
                this.switchLevelButtonGroup.getChildren().forEach(btn => btn.setScale(1.2))
                this.time.delayedCall(150, () => {

                    this.switchLevelButtonGroup.getChildren().forEach(btn => btn.setScale(1))
                })
                this.rejectSoundSfx.play();
                return
            } else {
                this.onTapSfx.play();
                this.scene.pause()
                this.sound.get("bgMusic").stop();//bg music from menu scene off
                this.scene.start('GameScene')
                this.scale.startFullscreen();

            }
        });

        const scoreText = this.ui.createText(
            this.registry.get('scoreCount'),
            { xPercent: 1, yPercent: 0.4, fontPercent: 0.03 }, {
            fontSize: '28px',
            fill: '#040500ff',
            backgroundColor: "#84867459",
            padding: { left: 5, right: 50, top: 5, bottom: 5 }
        }).setOrigin(1, 0.5)
        const scoreIcon = this.ui.createImage(
            'scoreIcon',
            {
                xPercent: 0.985, yPercent: 0.4
            }, 0.03
        )



        //magics
        const magicsButton = this.ui.createImage(
            "magics",
            {
                xPercent: 0.16, yPercent: 0.9
            }, 0.3,)
            .setInteractive()
            .setDepth(1)
        // .setOrigin(0)
        // const fx13 = magicsButton.postFX.addShine(2, .35, 10    );
        magicsButton.on('pointerdown', () => {
            this.onTapSfx.play();
            this.scene.start('MetaUpgradesScene', { scene: this });
        })
        magicsButton.basicScale = magicsButton.scale


        magicsButton.on('pointerover', () => {
            this.onHoverSfx.play();
            magicsButton.basicScale = magicsButton.scale
            magicsButton.setScale(magicsButton.scale = magicsButton.scale * 1.05)
        });
        magicsButton.on('pointerout', () => magicsButton.setScale(magicsButton.basicScale));

        //settings
        const settingsButton = this.ui.createImage(
            "settings",
            { xPercent: 0.94, yPercent: 0.05 }, 0.2
        ).setInteractive()
        settingsButton.on('pointerdown', () => {
            this.onTapSfx.play();
            const bgFill = this.ui.createRectangle(
                { xPercent: 0, yPercent: 0, widthPercent: 1, heightPercent: 1 }, 0x550000, 1)
                .setOrigin(0)
                .setInteractive()
                .setDepth(2);


            const backBtn = this.ui.createText(
                t('ui.back'),
                { xPercent: 0.5, yPercent: 0.30, fontPercent: 0.05 },
                { fontSize: '24px', color: '#fff', backgroundColor: '#333' })
                .setInteractive({ useHandCursor: true })
                .setOrigin(0.5)
                .setDepth(2)
                .on('pointerdown', () => {
                    this.onTapSfx.play();
                    bgFill.destroy() // закрываем сцену по клику на фон
                    backBtn.destroy()
                    toggleSoundButton.destroy()
                })
                .on('pointerover', () => {
                    this.onHoverSfx.play()
                })


            const soundButtonHeight = this.textures.get("soundOn").source[0].height
            const pixelTo10percent = ch / 10
            const scaleTo10percent = pixelTo10percent / soundButtonHeight
            const scaleToUI = scaleTo10percent / 10

            const toggleSoundButton = this.ui.createImage(this.sound.mute ? 'soundOn' : 'soundOff',
                { xPercent: 0.5, yPercent: 0.5 },
                scaleToUI
            )
                .setInteractive()
                // .setScale(scaleTo10percent)
                .setDepth(2)
                .setOrigin(0.5)
            toggleSoundButton.on('pointerdown', () => {
                this.onTapSfx.play();
                toggleSoundButton.setTexture(!this.sound.mute ? 'soundOn' : 'soundOff')

                this.sound.mute = !this.sound.mute;


            })
        });

        settingsButton.on('pointerover', () => {
            this.onHoverSfx.play();
            settingsButton.basicScale = settingsButton.scale
            settingsButton.setScale(settingsButton.scale *= 1.1)
        });
        settingsButton.on('pointerout', () => settingsButton.setScale(settingsButton.basicScale));

        //hero

        const heroButton = this.ui.createImage(
            'hero',
            { xPercent: 0.63, yPercent: 0.9 }, 0.5).setInteractive().setOrigin(0.2, 0.7)

        heroButton.on('pointerdown', () => {
            this.onTapSfx.play();
        })
        heroButton.on('pointerover', () => {
            this.onHoverSfx.play();
            heroButton.basicScale = heroButton.scale
            heroButton.setScale(heroButton.scale *= 1.005)
        });
        heroButton.on('pointerout', () => heroButton.setScale(heroButton.basicScale));


        // const fire = this.ui.createImage(
        //     'fire',
        //     {
        //         xPercent: 0.89, yPercent: 0.865
        //     }, 0.01)

        const fire = this.add.image(heroButton.x, heroButton.y, 'fire')
        this.time.addEvent({
            delay: 1000,          // миллисекунды между вызовами
            callback: () => {

                fire.setPosition(heroButton.x, heroButton.y)
            },
            loop: true           // обязательно, чтобы событие повторялось
        });
        // fire.trail = this.add.particles(0, 0, 'red-flares', {
        //     frame: 'red',
        //     lifespan: 2800,
        //     speed: { min: 50, max: 100 },
        //     angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
        //     gravityY: 0,             // без гравитации
        //     scale: { start: 0.35, end: 0 }, // уменьшаются
        //     alpha: { start: 0.3, end: 0 },   // исчезают
        //     frequency: 100,
        //     // tint: [0xffff00, 0x00ff00],
        //     //  tint: [0x0000ff, 0x00ff00],   
        //     // tint:0xff0000, 
        //     // blendMode: 'ADD',
        //     follow: fire,
        //     // followOffset: { x: cw, y:  }
        // });
        // fire.trail_2 = this.add.particles(0, 0, 'flares', {
        //     frame: 'white',
        //     lifespan: 1800,
        //     speed: { min: 50, max: 100 },
        //     angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
        //     gravityY: 0,             // без гравитации
        //     scale: { start: 0.4, end: 0 }, // уменьшаются
        //     alpha: { start: 1, end: 0 },   // исчезают
        //     frequency: 100,
        //     tint: [0xffaa33, 0xff7633],
        //     //  tint: [0x0000ff, 0x00ff00],   
        //     // tint:0xff0000, 
        //     blendMode: 'ADD',
        //     follow: fire,
        // });

        // magicsButton.trail_1 = this.add.particles(55, 690, 'flares', {
        //     frame: 'blue',
        //     lifespan: 1120,
        //     speed: { min: 0, max: 220 },
        //     // angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
        //     angle: { min: 0, max: 360 }, // летят вверх, +-10°
        //     gravityY: 0,             // без гравитации
        //     scale: { start: 0.4, end: 0.7 }, // уменьшаются
        //     alpha: { start: 0.5, end: 0 },   // исчезают
        //     frequency: 100,
        //     quantity: 2,
        //     // tint: [0xffaa33, 0xff7633],
        //     tint: [0x0000ff, 0x00ff00],
        //     // tint:0xff0000, 
        //     blendMode: 'ADD',
        //     // blendMode: 'SCREEN'
        //     // follow: magicsButton,
        // }).setDepth(0);
        // magicsButton.trail_2 = this.add.particles(70, 740, 'flares', {
        //     frame: 'red',
        //     lifespan: 1220,
        //     speed: { min: 120, max: 220 },
        //     // angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
        //     angle: { min: 180, max: 360 }, // летят вверх, +-10°
        //     gravityY: 0,             // без гравитации
        //     scale: { start: 0.4, end: 0.7 }, // уменьшаются
        //     alpha: { start: 0.5, end: 0 },   // исчезают
        //     frequency: 100,
        //     quantity: 2,
        //     tint: [0xffaa33, 0xff7633],
        //     // tint: [0x0000ff, 0x00ff00],
        //     // tint:0xff0000, 
        //     blendMode: 'ADD',
        //     // blendMode: 'SCREEN'
        //     // follow: magicsButton,
        // }).setDepth(0);



        const upgrdesText = this.ui.createText(
            t('ui.UPGRADES'),
            { xPercent: 0.17, yPercent: 0.82, fontPercent: 0.025 },
            {
                font: '26px Arial',
                fill: '#cf241eff',
                padding: { x: 20, y: 10 },
                // backgroundColor: "#706b6bff",
            }).setOrigin(0.5, 0.5)

        // const fx2 = magicsButton.postFX.addGlow(0xffff25, 0, 0, false, 0.1, 4);
        // this.tweens.add({
        //     targets: fx2,
        //     outerStrength: 2,
        //     yoyo: true,
        //     loop: -1,
        //     ease: 'sine.inout'
        // });
        // const fx1 = upgrdesText.postFX.addGlow(0xff0000, 0, 0, false, 0.1, 4);
        // this.tweens.add({
        //     targets: fx1,
        //     outerStrength: 2,
        //     yoyo: true,
        //     loop: -1,
        //     ease: 'sine.inout'
        // });

        // this.ui.resize()
        // this.ui.resizeCam()


        console.log(
            this.scale.width,
            this.scale.height,
            this.game.canvas.width,
            this.game.canvas.height,
            this.cameras.main.width,
            this.cameras.main.height
        );

        const width = window.innerWidth;
        const height = window.innerHeight;

        // камера
        const cam = this.cameras.main;
        cam.setViewport(0, 0, width, height);
        // cam.setSize(width * .9, height);
        console.log(cam);

        console.log(game);


        this.acc = 0
    }
    update(time, delta) {
        // this.debugText.setText(`all: ${this.children.list.length}`)

        if (this.acc >= 200) {
            this.fpsText.setText(`fps: ${Math.floor(this.game.loop.actualFps)}`)
            this.acc = 0
        }
        this.acc += delta
        // this.fpsText.setText(`fps: ${Math.floor(this.game.loop.actualFps)}`)
    }
}