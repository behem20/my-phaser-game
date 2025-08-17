import { setLanguage, t } from "../LanguageManager.js";

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    preload() {
        this.load.json('lang_ru', '../game/assets/lang/ru.json');



        this.load.image('bgPhotoMenu', './game/assets/images/menu/worldWhite.png')
        this.load.image('level_1', './game/assets/images/menu/level_1.png')
        this.load.image('level_2', './game/assets/images/menu/level_2.png')
        this.load.image('level_3', './game/assets/images/menu/level_3.png')
        this.load.image('level_4', './game/assets/images/menu/level_4.png')
        this.load.image('level_5', './game/assets/images/menu/level_5.png')
        this.load.image('level_6', './game/assets/images/menu/level_6.png')
        this.load.image('shop', './game/assets/images/menu/shop.png')
        this.load.image('magics', './game/assets/images/menu/magics.png')
        this.load.image('wood', './game/assets/images/menu/wood.png')
        this.load.image('hero', './game/assets/images/menu/heroMenu.png')

        this.load.image('settings', './game/assets/images/menu/settings.png')

        this.load.image('soundOn', './game/assets/images/menu/soundOn.png')
        this.load.image('soundOff', './game/assets/images/menu/soundOff.png')


        this.load.audio('onTapSound', 'game/assets/sounds/onTapSound.wav');
        this.load.audio('hoverSound', 'game/assets/sounds/hoverSomethingSound.wav');

    }

    create() {
        setLanguage(this, 'ru');
        this.input.mouse.disableContextMenu();
        this.onTapSfx = this.sound.add('onTapSound', { volume: 0.1 });
        this.onHoverSfx = this.sound.add('hoverSound', { volume: 0.1 });
        // if (!this.registry.has('activeHat')) this.registry.set('activeHat', { uid: 0, itemType: 'hat', key: 'hat', isActive: true })
        // if (!this.registry.has('activeStaff')) this.registry.set('activeStaff', { uid: 0, itemType: 'staff', key: 'staff_2', isActive: true })

        if (!this.registry.has('activeHat')) this.registry.set('activeHat', {
            uid: 0,
            itemType: '',
            key: '',
            isActive: false,
            name: '',
            level: null,
            damage: null
        })
        if (!this.registry.has('activeStaff')) this.registry.set('activeStaff', {
            uid: 0,
            itemType: '',
            key: '',
            isActive: false,
            name: '',
            level: null,
            damage: null
        })
        !this.registry.has('PlayerCharacteristic') ?
            this.registry.set(
                'PlayerCharacteristic', { damage: this.registry.get('activeHat').damage + this.registry.get('activeStaff').damage, atkSpeed: 100 })
            :
            this.registry.set(
                'PlayerCharacteristic', { damage: 10, atkSpeed: 100 })
        if (!this.registry.has('inventory')) {
            this.registry.set('inventory', [
                {
                    key: 'hat',
                    itemType: 'hat',
                    uid: Date.now() + Math.floor(Math.random() * 1000000),
                    isActive: false,
                    name: 'Hat of Monah',
                    level: 1,
                    damage: 8
                },
                // {
                //     key: 'hat_2',
                //     itemType: 'hat',
                //     uid: Date.now() + Math.floor(Math.random() * 1000000),
                //     isActive: false,
                //     name: 'Hat of Flame',
                //     level: 2,
                //     damage: 18
                // },
                // {
                //     key: 'scroll',
                //     itemType: 'scroll',
                //     uid: Date.now() + Math.floor(Math.random() * 1000000),
                //     isActive: false,
                //     name: 'Scroll of Mina',
                //     level: 0,
                //     damage: 0
                // },
                {
                    key: 'staff',
                    itemType: 'staff',
                    uid: Date.now() + Math.floor(Math.random() * 1000000),
                    isActive: false,
                    name: 'Staff of Monah',
                    level: 1,
                    damage: 12
                },
                {
                    key: 'staff_2',
                    itemType: 'staff',
                    uid: Date.now() + Math.floor(Math.random() * 1000000),
                    isActive: false,
                    name: 'Staff of Flames',
                    level: 2,
                    damage: 25
                },
                {
                    key: 'hat_3',
                    itemType: 'hat',
                    uid: Date.now() + Math.floor(Math.random() * 1000000),
                    isActive: false,
                    name: 'Hat of Art',
                    level: 3,
                    damage: 37
                },
                {
                    key: 'hat_4',
                    itemType: 'hat',
                    uid: Date.now() + Math.floor(Math.random() * 1000000),
                    isActive: false,
                    name: 'Hat of Den',
                    level: 4,
                    damage: 75
                },
                {
                    key: 'staff_3',
                    itemType: 'staff',
                    uid: Date.now() + Math.floor(Math.random() * 1000000),
                    isActive: false,
                    name: 'Staff of Art',
                    level: 3,
                    damage: 50
                },
                {
                    key: 'staff_4',
                    itemType: 'staff',
                    uid: Date.now() + Math.floor(Math.random() * 1000000),
                    isActive: false,
                    name: 'Staff of Den',
                    level: 4,
                    damage: 100
                },

            ])
        }
        if (!this.registry.has('inventory')) this.registry.set('inventory', [])


        if (!this.registry.has('coinsCount')) this.registry.set('coinsCount', 100)

        let toggle = false;

        this.add.image(0, 0, 'bgPhotoMenu').setOrigin(0)

        if (!this.registry.has('currentLevel')) this.registry.set('currentLevel', 0);
        let level = this.registry.get('currentLevel');

        const levelText = this.add.text(550, 205, `${t('game.level')} ${level}`, {
            fontSize: "24px",
            fill: "rgba(0, 0, 0, 1)"
        })
        const titleText = this.add.text(120, 200, "Magic Survival Clone", {
            fontSize: "32px",
            fill: "#fff"
        });


        const startBtn = this.add.text(180, 400, t('ui.start'), {
            fontSize: '48px',
            fill: '#0f0',
            backgroundColor: "#333",
            padding: { x: 20, y: 10 }
        }).setInteractive();


        startBtn.on('pointerover', () => { this.onHoverSfx.play(); startBtn.setTint(0x44ff44) })
        startBtn.on('pointerout', () => { startBtn.clearTint(0x333333) })

        startBtn.on("pointerdown", () => {
            this.onTapSfx.play();
            this.scene.start("GameScene");
        });
        this.time.addEvent({
            delay: 500,
            callback: () => {
                toggle = !toggle;
                startBtn.setStyle({
                    color: toggle ? '#f11' : '#f14',
                })
                // levelText.setColor(toggle? '#1aa':'#1ff'),
                titleText.setColor(toggle ? '#1aa' : '#5a1')
            },
            callbackScope: this,
            loop: true
        });
        const switchLevelButtonGroupData = [
            {
                x: 100, y: 100, scene: 'GameScene', key: 'level_1',
            },
            {
                x: 200, y: 100, scene: 'GameScene', key: 'level_2',
            },
            {
                x: 300, y: 100, scene: 'GameScene', key: 'level_3',
            },
            {
                x: 400, y: 100, scene: 'GameScene', key: 'level_4',
            },
            {
                x: 500, y: 100, scene: 'GameScene', key: 'level_5',
            },
            {
                x: 600, y: 100, scene: 'GameScene', key: 'level_6',
            },
        ]
        this.switchLevelButtonGroup = this.add.group();
        switchLevelButtonGroupData.forEach(data => {
            const button = this.add.sprite(data.x, data.y, data.key).setInteractive()
            button.on('pointerdown', () => {
                this.scene.start(data.scene);
            })
            button.on('pointerover', () => { this.onHoverSfx.play(); button.setTint(0x44ff44) });
            button.on('pointerout', () => button.clearTint());
            this.switchLevelButtonGroup.add(button)
        })
        //shop
        const shopButton = this.add.sprite(40, 400, "shop").setInteractive()
        shopButton.on('pointerdown', () => {
            this.onTapSfx.play();
            this.scene.launch('ShopScene');
        })
        shopButton.on('pointerover', () => { this.onHoverSfx.play(); shopButton.setTint(0x44ff44) }
        );
        shopButton.on('pointerout', () => shopButton.clearTint());
        //magics
        const magicsButton = this.add.sprite(40, 500, "magics").setInteractive()
        magicsButton.on('pointerdown', () => {
            this.onTapSfx.play();
            this.scene.start(data.scene);
        })
        magicsButton.on('pointerover', () => { this.onHoverSfx.play(); magicsButton.setTint(0x44ff44) });
        magicsButton.on('pointerout', () => magicsButton.clearTint());
        //settings
        const settingsButton = this.add.sprite(40, 320, "settings").setInteractive()
        settingsButton.on('pointerdown', () => {
            this.onTapSfx.play();
            const bgFill = this.add.rectangle(0, 0, 800, 800, 0x000000, 0.9)
                .setOrigin(0)
                .setInteractive()
                .setDepth(0);
            const closeButton = this.add.rectangle(640, 120, 60, 60, 0x000000, 0.9)
                .setOrigin(0)
                .setInteractive()
                .setDepth(2);
            closeButton.on('pointerdown', () => {
                this.onTapSfx.play();
                bgFill.destroy() // закрываем сцену по клику на фон
                closeButton.destroy()
                toggleSoundButton.destroy()
            });
            const toggleSoundButton = this.add.sprite(400, 400, this.sound.mute ? 'soundOn' : 'soundOff')
                .setInteractive()
                .setScale(4)
            toggleSoundButton.on('pointerdown', () => {
                this.onTapSfx.play();
                toggleSoundButton.setTexture(!this.sound.mute ? 'soundOn' : 'soundOff')

                this.sound.mute = !this.sound.mute;
                console.log('1');

            })
        });

        settingsButton.on('pointerover', () => { this.onHoverSfx.play(); settingsButton.setTint(0x44ff44) }
        );
        settingsButton.on('pointerout', () => settingsButton.clearTint());

        const heroButton = this.add.sprite(650, 540, 'hero').setInteractive()
        //hero in menu open inventory
        heroButton.on('pointerdown', () => {
            this.onTapSfx.play();
            this.scene.launch('InventoryScene');
        })
        heroButton.on('pointerover', () => { this.onHoverSfx.play(); heroButton.setTint(0x44ff44) });
        heroButton.on('pointerout', () => heroButton.clearTint());

        const woodButton = this.add.sprite(140, 670, 'wood').setInteractive()
        woodButton.on('pointerdown', () => {
            this.onTapSfx.play();
            this.scene.start(data.scene);
        })
        woodButton.on('pointerover', () => { this.onHoverSfx.play(); woodButton.setTint(0x44ff44) }
        );
        woodButton.on('pointerout', () => woodButton.clearTint());
    }
}