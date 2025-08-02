import CoinSpawner from "../entities/CoinSpawner.js"
import EnemySpawner from "../entities/EnemySpawner.js"
import Player from "../entities/Player.js"
import levels from "../levelsConfigs.js"
import { setupPause, togglePause } from "../utils/pauseManager.js"
import { setupCollisions } from "../utils/setupCollisions.js"
import { setupTimers } from "../utils/setupTimers.js"
import HUD from "../ui/HUD.js"
import { playerSkills } from "../utils/upgradesManager.js"
import { setHUD } from "../utils/hudManager.js"
import WaveManager from "../utils/WaveManager.js"
import ArmorsScrollsSpawner from "../entities/ArmorsScrollsSpawner.js"
import { createPlayerAnimations } from "../utils/PlayerAnimations.js"
import PlayerHPMark from "../utils/PlayerHPBar.js"
import FireAura from "../utils/fireAuraConfigs.js"
import { Satellites } from "../projectiles/Satellite.js"


export default class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene")
    }
    preload() {
        this.load.image("player", "game/assets/images/playerMain.png")
        this.load.image("hp_line", "game/assets/images/hp_line.png")



        // this.load.image("enemy_normal_1.png", "game/assets/images/enemy_normal_1.png")
        this.load.image("enemy", "game/assets/images/enemy.png")
        this.load.image("enemyDrag", "game/assets/images/enemyDrag.png")
        this.load.image("enemyFast", "game/assets/images/enemyFast.png")
        this.load.image("enemyFastDrag", "game/assets/images/enemyFastDrag.png")
        this.load.image("enemyTank", "game/assets/images/enemyTank.png")
        this.load.image("enemyTankDrag", "game/assets/images/enemyTankDrag.png")
        this.load.image("enemyBoss_1", "game/assets/images/enemyBoss_1.png")

        this.load.image("enemy_3", "game/assets/images/enemy_3.png")
        this.load.image("enemyDrag_3", "game/assets/images/enemyDrag_3.png")
        this.load.image("shadow", "game/assets/images/shadow.png")

        this.load.image("magic", "game/assets/images/magic.png")
        this.load.image("light", "game/assets/images/light.png")
        this.load.image("lightning1", "game/assets/images/lightning1.png")
        this.load.image("lightning2", "game/assets/images/lightning2.png")
        this.load.image("lightning3", "game/assets/images/lightning3.png")
        this.load.image("lightning4", "game/assets/images/lightning4.png")
        this.load.image("lightning5", "game/assets/images/lightning5.png")
        this.load.image("fire", "game/assets/images/fire.png")
        this.load.image("satellite", "game/assets/images/satellite.png")

        this.load.image("fireAura", "game/assets/images/fireAura.png")
        this.load.image("tornado_1", "game/assets/images/tornado_1.png")
        this.load.image("tornado", "game/assets/images/tornado.png")
        this.load.image("meteor", "game/assets/images/meteor.png")
        this.load.image("hail", "game/assets/images/hail.png")

        //particles 
        this.load.atlas(
            'flares', // имя (можно любое, но обычно flares)
            'https://labs.phaser.io/assets/particles/flares.png', // картинка
            'https://labs.phaser.io/assets/particles/flares.json' // описание спрайтов
        );

        this.load.image("pictureMagic", "game/assets/images/pictureMagic.png")
        this.load.image("pictureTornado", "game/assets/images/pictureTornado.png")
        this.load.image("pictureLight", "game/assets/images/pictureLight.png")
        this.load.image("pictureLightning", "game/assets/images/pictureLightning.png")
        this.load.image("pictureFire", "game/assets/images/pictureFire.png")
        this.load.image("pictureFireAura", "game/assets/images/pictureFireAura.png")
        this.load.image("pictureSatellite", "game/assets/images/pictureSatellite.png")
        this.load.image("pictureMeteor", "game/assets/images/pictureMeteor.png")
        this.load.image("pictureHail", "game/assets/images/pictureHail.png")
        this.load.image("pictureArmageddon", "game/assets/images/pictureArmageddon.png")

        this.load.image("pictureIntellect", "game/assets/images/pictureIntellect.png")
        this.load.image("pictureRobe", "game/assets/images/pictureRobe.png")


        this.load.audio('magicShootSound', 'game/assets/sounds/magicShootSound.wav');
        this.load.audio('lightShootSound', 'game/assets/sounds/lightShootSound.wav');
        this.load.audio('fireShootSound', 'game/assets/sounds/fireShootSound.wav');
        this.load.audio('enemyHitSound', 'game/assets/sounds/enemyHitSound.wav');
        this.load.audio('lightningShootSound', 'game/assets/sounds/lightningShootSound.wav');
        this.load.audio('fireAuraHitSound', 'game/assets/sounds/fireAuraHit_1.wav');
        this.load.audio('fireShootCollisionSound', 'game/assets/sounds/fireShootCollisionSound.wav')
        this.load.audio('satelliteStartSound', 'game/assets/sounds/satelliteSound.wav')
        this.load.audio('satelliteCollisionSound', 'game/assets/sounds/satelliteCollisionSound.wav')
        this.load.audio('tornadoStartSound', 'game/assets/sounds/tornadoStartSound.wav')
        this.load.audio('coinCollectSound', 'game/assets/sounds/coinsCollectSound.wav')



        //player walk anims
        this.load.spritesheet('player_idle', 'game/assets/images/player_idle.png', {
            frameWidth: 42, // ширина одного кадра
            frameHeight: 42 // высота одного кадра
        });
        this.load.spritesheet('player_walk_right', 'game/assets/images/player_walk_right.png', {
            frameWidth: 42, // ширина одного кадра
            frameHeight: 42 // высота одного кадра
        });
        this.load.spritesheet('player_walk_left', 'game/assets/images/player_walk_left.png', {
            frameWidth: 42, // ширина одного кадра
            frameHeight: 42 // высота одного кадра
        });
        this.load.spritesheet('player_walk_up', 'game/assets/images/player_walk_up.png', {
            frameWidth: 42, // ширина одного кадра
            frameHeight: 42 // высота одного кадра
        });
        this.load.spritesheet('player_walk_down', 'game/assets/images/player_walk_down.png', {
            frameWidth: 42, // ширина одного кадра
            frameHeight: 42 // высота одного кадра
        });
        //fire Aura anim
        this.load.spritesheet('fireAuraAnims', 'game/assets/images/fireAuraAnim.png', {
            frameWidth: 24, // ширина одного кадра
            frameHeight: 24 // высота одного кадра
        });

        this.load.spritesheet('fireAnims', 'game/assets/images/firebals.png', {
            frameWidth: 26, // ширина одного кадра
            frameHeight: 60 // высота одного кадра
        });
        //fire explosion
        this.load.spritesheet('fireExplosionAnims', 'game/assets/images/fireExplosion.png', {
            frameWidth: 64, // ширина одного кадра
            frameHeight: 64 // высота одного кадра
        });//tornado
        this.load.spritesheet('tornadoAnims', 'game/assets/images/sheet_tornado.png', {
            frameWidth: 45, // ширина одного кадра
            frameHeight: 45 // высота одного кадра
        });

        //enemy normal
        this.load.spritesheet('sheet_enemy_normal_1', 'game/assets/images/sheet_enemy_normal_1.png', {
            frameWidth: 48, // ширина одного кадра
            frameHeight: 48 // высота одного кадра
        });
        //enemy fast
        this.load.spritesheet('sheet_enemy_fast_1', 'game/assets/images/sheet_enemy_fast_1_1.png', {
            frameWidth: 24, // ширина одного кадра
            frameHeight: 24 // высота одного кадра
        });//enemy tank
        this.load.spritesheet('sheet_enemy_tank_1', 'game/assets/images/sheet_enemy_tank_1.png', {
            frameWidth: 64, // ширина одного кадра
            frameHeight: 64 // высота одного кадра
        });
        //enemy boss
        this.load.spritesheet('sheet_enemy_boss_1', 'game/assets/images/sheet_enemy_boss_1.png', {
            frameWidth: 240, // ширина одного кадра
            frameHeight: 240 // высота одного кадра
        });
        //coins
        this.load.spritesheet('coins_sheet', 'game/assets/images/coin_sheet.png', {
            frameWidth: 16, // ширина одного кадра
            frameHeight: 16 // высота одного кадра
        });





        this.load.image('TempBG_1', 'game/assets/images/TempBG_1.png');

        this.load.image('background_0', 'game/assets/images/Grass.png');
        this.load.image('background_1', 'game/assets/images/GrassWithFruits.png');
        this.load.image('background_2', 'game/assets/images/GrassWithFruits1.png');
        this.load.image('background_4', 'game/assets/images/Grass_4.png');
        this.load.image('coin', 'game/assets/images/coin.png')
        this.load.image('playerAttack', 'game/assets/images/playerAttack.png')
        this.load.image('staff', './game/assets/images/inventory/staff.png');
        this.load.image('staff_2', 'game/assets/images/inventory/staff_2.png')
        this.load.image('staff_3', 'game/assets/images/inventory/staff_3.png')
        this.load.image('staff_4', 'game/assets/images/inventory/staff_4.png')
        this.load.image('hat', './game/assets/images/inventory/hat.png');
        this.load.image('hat_2', 'game/assets/images/inventory/hat_2.png')
        this.load.image('hat_3', 'game/assets/images/inventory/hat_3.png')
        this.load.image('hat_4', 'game/assets/images/inventory/hat_4.png')



    }
    create() {
        const level = this.registry.get('currentLevel')
        // const background = levels[level].levelConfigs.backGround
        const background = 'TempBG_1';


        //animastions player
        createPlayerAnimations(this);

        this.background = this.add.tileSprite(0, 0, 10000, 10000, background).setOrigin(0, 0).setDepth(-5);
        this.physics.world.setBoundsCollision(false, false, false, false);
        this.player = new Player(this, 5000, 5000);
        this.hpMark = new PlayerHPMark(this, this.player.sprite);
        this.enemies = new EnemySpawner(this, this.player)
        this.coins = new CoinSpawner(this, this.player, this.enemies);
        this.items = new ArmorsScrollsSpawner(this, this.player, this.enemies)
        this.fireAura = new FireAura(this, this.player)
        this.satellites = new Satellites(this, this.player)



        //sounds
        this.magicShootSfx = this.sound.add('magicShootSound', { volume: 1.5 });
        this.lightShootSfx = this.sound.add('lightShootSound', { volume: 0.03 });
        this.fireShootSfx = this.sound.add('fireShootSound', { volume: 0.4 });
        this.enemyHitSfx = this.sound.add('enemyHitSound', { volume: 0.02 });
        this.lightningShootSfx = this.sound.add('lightningShootSound', { volume: 0.1 });
        this.fireAuraSfx = this.sound.add('fireAuraHitSound', { volume: 0.2 });
        this.onTapSfx = this.sound.add('onTapSound', { volume: 0.1 });
        this.fireShootCollisionSfx = this.sound.add('fireShootCollisionSound', { volume: 0.05 })

        // this.satelliteCollisionSoundSfx = this.sound.add('satelliteCollisionSound', { volume: 0.1 })
        this.satelliteStartSoundSfx = this.sound.add('satelliteStartSound', { volume: 1, loop: true })
        this.satelliteHitSoundsSfx = this.sound.add('satelliteCollisionSound', { volume: 0.5, }),
            this.lastShootSoundTime = 0
        this.lastTornadoSoundTime = 0;
        this.tornadoStartSoundSfx = this.sound.add('tornadoStartSound', { volume: 0.05 });
        this.coinCollectSoundSfx = this.sound.add('coinCollectSound', {
            volume: Phaser.Math.FloatBetween(0.3, 0.6),
            rate: Phaser.Math.FloatBetween(0.9, 1.1)
        })






        //inventory key
        this.inventoryKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        //inventory keyOFF
        this.inventoryOffKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);

        const levelDuration = levels[level].levelConfigs.levelDuration;
        this.hud = new HUD(this, levelDuration, (score) => {
            this.scene.pause();
            this.scene.launch("CompleteLevelScene", { score });

        });
        setHUD(this.hud)
        setupTimers(this);
        setupPause(this)
        // this.hud.updateAll();

        this.magicShots = this.physics.add.group()
        this.lightShots = this.physics.add.group()
        this.lightningShots = this.physics.add.group()
        this.fireShots = this.physics.add.group()
        this.fireAuraShots = this.physics.add.group()
        this.meteorShots = this.physics.add.group()
        this.hailShots = this.physics.add.group()

        this.tornadoGroup = this.physics.add.group({
            classType: Phaser.Physics.Arcade.Sprite,
            maxSize: 100,
            runChildUpdate: false
        });



        setupCollisions(this);
        this.magicTimers = {};

        // this.enemies.spawn()
        this.registry.set('enemySpawned', 0)
        this.waveManager = new WaveManager(this, level)


        this.events.on('spawnEnemy', (type) => {
            this.enemies.spawn(this, type);
        });

        this.waveManager.start();
        this.input.keyboard.on('keydown-N', () => {
            const lvl = this.registry.get('currentLevel');
            this.registry.set('currentLevel', lvl + 1);
            this.scene.start('GameScene');
        });

        //level up choose upgrades
        this.scene.launch("UpgradeForExpScene", {
            scene: this,
            upgrades: playerSkills.allSkills,// allSkills// генерируешь 3 апгрейда
            onSelect: (upgrade) => {

                upgrade.applyUpgrade(this); // логика применения
            }
        });


    }

    update() {
        //движение игрока
        this.player.update()
        //хп игрока бар
        this.hpMark.update();
        // Движение врагов к игроку
        this.enemies.update()

        //satelittes
        this.satellites.update();

        //Движение fireAura 
        this.fireAura.update()

        //pause 
        if (Phaser.Input.Keyboard.JustDown(this.pauseKey)) {
            togglePause(this);
        }
        //inventory
        if (Phaser.Input.Keyboard.JustDown(this.inventoryKey)) {
            this.scene.launch('InventoryScene');
        }
        if (Phaser.Input.Keyboard.JustDown(this.inventoryOffKey)) {
            this.scene.stop('InventoryScene');

        }
        //upgrades for exp

        if (this.hud.exp >= levels[this.registry.get('currentLevel')].levelConfigs.expToUpgrade * levels[this.registry.get('currentLevel')].levelConfigs.upgradeLevel) {
            this.hud.clearExp();
            this.scene.pause();
            this.scene.launch("UpgradeForExpScene", {
                scene: this,
                upgrades: playerSkills.allSkills,// allSkills// генерируешь 3 апгрейда
                onSelect: (upgrade) => {

                    upgrade.applyUpgrade(this); // логика применения
                }
            });
            levels[this.registry.get('currentLevel')].levelConfigs.upgradeLevel++;
        }
        //debug x,y
        // this.hud.updateDebug(this.player.x, this.player.y)
    }
}