import { setLanguage, t } from "../LanguageManager.js";
import SkillRegistry, { setLevelsToSkillRegistrySpells } from "../SkillsRegistry.js";
import FireAura from "../utils/fireAuraConfigs.js";
import saveManager from "../utils/SaveManager.js";
import SaveManager from "../utils/SaveManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    preload() {
        this.load.json('lang_ru', 'game/assets/lang/ru.json');

        //magics pcts
        this.load.image("pictureMagic", "game/assets/images/lvlUpPictures/pictureMagic.png")
        this.load.image("pictureTornado", "game/assets/images/lvlUpPictures/pictureTornado.png")
        this.load.image("pictureLight", "game/assets/images/lvlUpPictures/pictureLight.png")
        this.load.image("pictureLightning", "game/assets/images/lvlUpPictures/pictureLightning.png")
        this.load.image("pictureFire", "game/assets/images/lvlUpPictures/pictureFire.png")
        this.load.image("pictureFireAura", "game/assets/images/lvlUpPictures/pictureFireAura.png")
        this.load.image("pictureSatellite", "game/assets/images/lvlUpPictures/pictureSatellite.png")
        this.load.image("pictureMeteor", "game/assets/images/lvlUpPictures/pictureMeteor.png")
        this.load.image("pictureHail", "game/assets/images/lvlUpPictures/pictureHail.png")
        this.load.image("pictureArmageddon", "game/assets/images/lvlUpPictures/pictureArmageddon.png")
        this.load.image("pictureMagnet", "game/assets/images/lvlUpPictures/pictureMagnet.png")
        this.load.image("pictureIntellect", "game/assets/images/lvlUpPictures/pictureIntellect.png")
        this.load.image("pictureRobe", "game/assets/images/lvlUpPictures/pictureRobe.png")

        //magics icons
        this.load.image("iconMagic", "game/assets/images/skillsIcons/iconMagic.png")
        this.load.image("iconTornado", "game/assets/images/skillsIcons/iconTornado.png")
        this.load.image("iconLight", "game/assets/images/skillsIcons/iconLight.png")
        this.load.image("iconLightning", "game/assets/images/skillsIcons/iconLightning.png")
        this.load.image("iconFire", "game/assets/images/skillsIcons/iconFire.png")
        this.load.image("iconFireAura", "game/assets/images/skillsIcons/iconFireAura.png")
        this.load.image("iconSatellite", "game/assets/images/skillsIcons/iconSatellite.png")
        this.load.image("iconMeteor", "game/assets/images/skillsIcons/iconMeteor.png")
        this.load.image("iconHail", "game/assets/images/skillsIcons/iconHail.png")
        this.load.image("iconArmageddon", "game/assets/images/skillsIcons/iconArmageddon.png")
        this.load.image("iconMagnet", "game/assets/images/skillsIcons/iconMagnet.png")
        this.load.image("iconIntellect", "game/assets/images/skillsIcons/iconIntellect.png")
        this.load.image("iconRobe", "game/assets/images/skillsIcons/iconRobe.png")

        this.load.image('bgPhotoMenu', './game/assets/images/menu/worldWhite.png')
        this.load.image('level_1', './game/assets/images/menu/level_1.png')
        this.load.image('level_2', './game/assets/images/menu/level_2.png')
        this.load.image('level_3', './game/assets/images/menu/level_3.png')
        this.load.image('level_4', './game/assets/images/menu/level_4.png')
        this.load.image('level_5', './game/assets/images/menu/level_5.png')
        this.load.image('level_6', './game/assets/images/menu/level_6.png')
        this.load.image('level_infinity', './game/assets/images/menu/level_infinity.png')

        this.load.image('complete', './game/assets/images/menu/complete.png')
        this.load.image('magics', './game/assets/images/menu/magics.png')
        
        this.load.image('hero', './game/assets/images/menu/heroMenu.png')

        this.load.image('damageIcon', './game/assets/images/ui_icons/damage.png')
        this.load.image('cooldownIcon', './game/assets/images/ui_icons/cooldown.png')
        this.load.image('arrowsIcon', './game/assets/images/ui_icons/arrows.png')
        this.load.image('arrowIcon', './game/assets/images/ui_icons/arrow.png')
        this.load.image('gold', './game/assets/images/coins/gold.png')
        this.load.image('gem', './game/assets/images/coins/gem.png')
        this.load.image('fire', './game/assets/images/menu/fire.png')

        this.load.image('settings', './game/assets/images/menu/settings.png')
        this.load.image('scoreIcon', './game/assets/images/menu/scoreIcon.png')
        this.load.image('soundOn', './game/assets/images/menu/soundOn.png')
        this.load.image('soundOff', './game/assets/images/menu/soundOff.png')

        this.load.atlas(
            'flares', // имя (можно любое, но обычно flares)
            'flares.png', // картинка
            'flaresInfo.json' // описание спрайтов
        );
        this.load.atlas(
            'red-flares', // имя (можно любое, но обычно flares)
            'game/assets/images/redFlares.png', // картинка
            'flaresInfo.json' // описание спрайтов
        );
        this.load.audio('onTapSound', 'game/assets/sounds/onTapSound.mp3');
        this.load.audio('rejectSound', 'game/assets/sounds/reject.mp3')
        this.load.audio('hoverSound', 'game/assets/sounds/hoverSomethingSound.mp3');
        this.load.audio('successSound', 'game/assets/sounds/success.mp3');

    }

    create() {
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


        const menuBG = this.add.image(0, 0, 'bgPhotoMenu').setOrigin(0).setInteractive()

        if (!this.registry.has('currentLevel')) this.registry.set('currentLevel', 0);
        let level = this.registry.get('currentLevel');

        const titleText = this.add.text(80, 200, t('game.title'), {
            fontSize: "64px",
            fill: "#000000ff"
        });
        this.tweens.add({
            targets: titleText,
            alpha: 0,           // до какой прозрачности уходит
            duration: 2500,      // время затухания (мс)
            yoyo: true,         // вернуться обратно (от 0 → 1)
            repeat: -1          // бесконечный повтор
        });
        const goldTextBg_01 = this.add.rectangle(0, 10, 160, 40, 0x000000,).setOrigin(0)
        const goldTextBg = this.add.rectangle(0, 10, 160, 40, 0xffff00, 0.14).setOrigin(0).setStrokeStyle(2, 0xeeee00);
        const goldText = this.add.text(155, 20, this.registry.get('goldCount'), {
            fontSize: "24px",
            fill: "rgba(238, 234, 0, 1)"
        }).setOrigin(1, 0);
        const goldIcon = this.add.image(10, 10, 'gold').setScale(0.15).setOrigin(0)

        const gemsTextBg_01 = this.add.rectangle(0, 60, 160, 40, 0x000000,).setOrigin(0)
        const gemsTextBg = this.add.rectangle(0, 60, 160, 40, 0x337799, 0.2).setOrigin(0).setStrokeStyle(2, 0x337799);
        const gemsText = this.add.text(155, 70, this.registry.get('gemCount'), {
            fontSize: "24px",
            fill: "rgba(92, 192, 209, 1)"
        }).setOrigin(1, 0);
        const gemsIcon = this.add.image(0, 49, 'gem').setScale(0.25).setOrigin(0)


        const completedList = this.registry.get('completedLevelsList')
        completedList.forEach((el, index) => {
            if (el) {
                const complete = this.add.image(100 + 100 * index, 140, 'complete').setDepth(2).setScale(1)
            }
        })
        const switchLevelButtonGroupData = [
            {
                x: 100, y: 140, scene: 'GameScene', key: 'level_1', level: 0, isChosen: false,
            },
            {
                x: 200, y: 140, scene: 'GameScene', key: 'level_2', level: 1, isChosen: false,
            },
            {
                x: 300, y: 140, scene: 'GameScene', key: 'level_3', level: 2, isChosen: false,
            },
            {
                x: 400, y: 140, scene: 'GameScene', key: 'level_4', level: 3, isChosen: false,
            },
            {
                x: 500, y: 140, scene: 'GameScene', key: 'level_5', level: 4, isChosen: false,
            },
            {
                x: 600, y: 140, scene: 'GameScene', key: 'level_6', level: 5, isChosen: false,
            },
            {
                x: 700, y: 140, scene: 'GameScene', key: 'level_infinity', level: 6, isChosen: false,
            },
        ]
        this.switchLevelButtonGroup = this.add.group();
        switchLevelButtonGroupData.forEach(data => {
            const button = this.add.sprite(data.x, data.y, data.key).setInteractive()
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
                    lifespan: 500,
                    speed: { min: 50, max: 100 },
                    // angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
                    gravityY: 0,             // без гравитации
                    scale: { start: 0.5, end: 0 }, // уменьшаются
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
                this.onHoverSfx.play();
                button.setScale(1.3)
            });
            button.on('pointerout', () => {

                button.setScale(1)
            });
            this.switchLevelButtonGroup.add(button)
        })


        //start button
        let toggleStartText = false;
        const startBtn = this.add.text(130, 400, t('ui.start'), {
            fontSize: '48px',
            fill: '#fff',
            backgroundColor: "#333",
            padding: { x: 20, y: 10 }
        }).setInteractive();

        this.time.addEvent({
            delay: 1000,
            callback: () => {
                toggleStartText = !toggleStartText;
                startBtn.setStyle({
                    color: toggleStartText ? '#fff' : 'rgba(135, 153, 135, 1)',
                })
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
                // playerSkills.resetMagicSkill()
                // playerSkills
                this.scene.pause()
                // this.scene.launch('GameScene')
                this.scene.start('GameScene')
            }
        });

        const scoreText = this.add.text(780, 290, this.registry.get('scoreCount'), {
            fontSize: '28px',
            fill: '#040500ff',
            backgroundColor: "#84867459",
            padding: { left: 5, right: 50, top: 5, bottom: 5 }
        }).setOrigin(1, 0.5)
        const scoreIcon = this.add.image(scoreText.x - 20, scoreText.y, 'scoreIcon')
        menuBG.on('pointerdown', () => {
            this.switchLevelButtonGroup.getChildren().forEach(btn => { if (btn.trail) btn.trail.destroy();; btn.isChosen = false })
        })

        // //shop
        // const shopButton = this.add.sprite(40, 400, "shop").setInteractive()
        // shopButton.on('pointerdown', () => {
        //     this.onTapSfx.play();

        // })
        // shopButton.on('pointerover', () => { this.onHoverSfx.play(); shopButton.setScale(1.1) });
        // shopButton.on('pointerout', () => shopButton.setScale(1));

        //magics
        const magicsButton = this.add.sprite(100, 700, "magics").setInteractive().setDepth(1)
        magicsButton.on('pointerdown', () => {
            this.onTapSfx.play();
            this.scene.start('MetaUpgradesScene', { scene: this });
        })
        magicsButton.on('pointerover', () => { this.onHoverSfx.play(); magicsButton.setScale(1.1) });
        magicsButton.on('pointerout', () => magicsButton.setScale(1));

        //settings
        const settingsButton = this.add.sprite(770, 30, "settings").setInteractive()
        settingsButton.on('pointerdown', () => {
            this.onTapSfx.play();
            const bgFill = this.add.rectangle(0, 0, 800, 800, 0x000000, 0.95)
                .setOrigin(0)
                .setInteractive()
                .setDepth(2);


            const backBtn = this.add.text(680, 20, t('ui.back'), {
                fontSize: '24px',
                color: '#fff',
                backgroundColor: '#333'
            })
                .setInteractive({ useHandCursor: true })
                .setOrigin(0)
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
            const toggleSoundButton = this.add.sprite(400, 400, this.sound.mute ? 'soundOn' : 'soundOff')
                .setInteractive()
                .setScale(2)
                .setDepth(2)
            toggleSoundButton.on('pointerdown', () => {
                this.onTapSfx.play();
                toggleSoundButton.setTexture(!this.sound.mute ? 'soundOn' : 'soundOff')

                this.sound.mute = !this.sound.mute;


            })
        });

        settingsButton.on('pointerover', () => { this.onHoverSfx.play(); settingsButton.setScale(1.1) });
        settingsButton.on('pointerout', () => settingsButton.setScale(1));

        //hero
        const heroButton = this.add.sprite(650, 540, 'hero').setInteractive()
        //hero in menu open inventory
        heroButton.on('pointerdown', () => {
            this.onTapSfx.play();
        })
        heroButton.on('pointerover', () => { this.onHoverSfx.play(); heroButton.setScale(1.005) });
        heroButton.on('pointerout', () => heroButton.setScale(1));

        const fire = this.add.image(570, 620, 'fire')

        fire.trail = this.add.particles(0, 0, 'red-flares', {
            frame: 'red',
            lifespan: 2800,
            speed: { min: 50, max: 100 },
            angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
            gravityY: 0,             // без гравитации
            scale: { start: 0.3, end: 0 }, // уменьшаются
            alpha: { start: 0.3, end: 0 },   // исчезают
            frequency: 100,
            // tint: [0xffff00, 0x00ff00],
            //  tint: [0x0000ff, 0x00ff00],   
            // tint:0xff0000, 
            // blendMode: 'ADD',
            follow: fire,
        });
        fire.trail_2 = this.add.particles(0, 0, 'flares', {
            frame: 'white',
            lifespan: 1800,
            speed: { min: 50, max: 100 },
            angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
            gravityY: 0,             // без гравитации
            scale: { start: 0.4, end: 0 }, // уменьшаются
            alpha: { start: 1, end: 0 },   // исчезают
            frequency: 100,
            tint: [0xffaa33, 0xff7633],
            //  tint: [0x0000ff, 0x00ff00],   
            // tint:0xff0000, 
            blendMode: 'ADD',
            follow: fire,
        });
        magicsButton.trail_1 = this.add.particles(55, 690, 'flares', {
            frame: 'blue',
            lifespan: 120,
            speed: { min: 120, max: 220 },
            // angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
            angle: { min: 0, max: 360 }, // летят вверх, +-10°
            gravityY: 0,             // без гравитации
            scale: { start: 0.4, end: 0.7 }, // уменьшаются
            alpha: { start: 0.5, end: 0 },   // исчезают
            frequency: 100,
            quantity: 2,
            // tint: [0xffaa33, 0xff7633],
            tint: [0x0000ff, 0x00ff00],
            // tint:0xff0000, 
            blendMode: 'ADD',
            // blendMode: 'SCREEN'
            // follow: magicsButton,
        }).setDepth(0);
        magicsButton.trail_2 = this.add.particles(70, 740, 'flares', {
            frame: 'red',
            lifespan: 120,
            speed: { min: 120, max: 220 },
            // angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
            angle: { min: 0, max: 360 }, // летят вверх, +-10°
            gravityY: 0,             // без гравитации
            scale: { start: 0.4, end: 0.7 }, // уменьшаются
            alpha: { start: 0.5, end: 0 },   // исчезают
            frequency: 100,
            quantity: 2,
            tint: [0xffaa33, 0xff7633],
            // tint: [0x0000ff, 0x00ff00],
            // tint:0xff0000, 
            blendMode: 'ADD',
            // blendMode: 'SCREEN'
            // follow: magicsButton,
        }).setDepth(0);
    }
}