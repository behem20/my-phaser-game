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
import PlayerHPMark from "../utils/PlayerHPBar.js"
import FireAura from "../utils/fireAuraConfigs.js"
import { Satellites } from "../projectiles/Satellite.js"
import { printStats } from "../utils/damageStats.js"
import { loadAllAnimations } from "../utils/animationRegistry.js"
import { setLanguage, t } from "../LanguageManager.js";
import LightMask from "../utils/lightMask.js"
import HealthPack from "../utils/healthPack.js"
import { playLevelUpEffect } from "../utils/playLevelUpEffect.js"
import { shootMagic } from "../projectiles/Magic.js"
import { playLevelStartEffect } from "../utils/playLevelStartEffect.js"

export default class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene")
    }
    preload() {
        this.load.image("hp_line", "game/assets/images/all/hp_line.png")

        this.load.image("shadow", "game/assets/images/shadow.png")

        this.load.image("magic", "game/assets/images/spells/magic.png")
        this.load.image("light", "game/assets/images/spells/light.png")
        this.load.image("lightning1", "game/assets/images/lightning/lightning1.png")
        this.load.image("lightning2", "game/assets/images/lightning/lightning2.png")
        this.load.image("lightning3", "game/assets/images/lightning/lightning3.png")
        this.load.image("lightning4", "game/assets/images/lightning/lightning4.png")
        this.load.image("lightning5", "game/assets/images/lightning/lightning5.png")
        this.load.image("satellite", "game/assets/images/spells/satellite.png")

        //particles 
        this.load.atlas(
            'flares', // имя (можно любое, но обычно flares)
            'https://labs.phaser.io/assets/particles/flares.png', // картинка
            'https://labs.phaser.io/assets/particles/flares.json' // описание спрайтов
        );
        this.load.atlas(
            'inv-flares', // имя (можно любое, но обычно flares)
            'game/assets/images/inv-flares.png', // картинка
            'https://labs.phaser.io/assets/particles/flares.json' // описание спрайтов
        );

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
        this.load.audio('hailShootSound', 'game/assets/sounds/hailShootSound.wav')
        this.load.audio('thunderLevelUpSound', 'game/assets/sounds/thunderLevelUp.wav') //thunder levelup fix
        this.load.audio('coinCollectSound', 'game/assets/sounds/coinsCollectSound.wav')
        this.load.audio('playerMoveSound', 'game/assets/sounds/playerMoveSound.wav')
        this.load.audio('playerCollectHP', 'game/assets/sounds/collectHP.wav')
        this.load.audio('levelUpSound', 'game/assets/sounds/levelUpSound.wav')
        this.load.audio('gameBGSound', 'game/assets/sounds/gameBGSound.wav')
        this.load.audio('levelStartSound', 'game/assets/sounds/onLevelStartSound.wav')

        //player walk anims
        this.load.spritesheet('player_idle', 'game/assets/images/playerSheets/player_idle.png', {
            frameWidth: 42, // ширина одного кадра
            frameHeight: 42 // высота одного кадра
        });
        this.load.spritesheet('player_walk_right', 'game/assets/images/playerSheets/player_walk_right.png', {
            frameWidth: 42, // ширина одного кадра
            frameHeight: 42 // высота одного кадра
        });
        this.load.spritesheet('player_walk_left', 'game/assets/images/playerSheets/player_walk_left.png', {
            frameWidth: 42, // ширина одного кадра
            frameHeight: 42 // высота одного кадра
        });
        this.load.spritesheet('player_walk_up', 'game/assets/images/playerSheets/player_walk_up.png', {
            frameWidth: 42, // ширина одного кадра
            frameHeight: 42 // высота одного кадра
        });
        this.load.spritesheet('player_walk_down', 'game/assets/images/playerSheets/player_walk_down.png', {
            frameWidth: 42, // ширина одного кадра
            frameHeight: 42 // высота одного кадра
        });
        //fire Aura anim
        this.load.spritesheet('fireAuraAnims', 'game/assets/images/spellsSheets/fireAuraAnim.png', {
            frameWidth: 24, // ширина одного кадра
            frameHeight: 24 // высота одного кадра
        });

        this.load.spritesheet('fireAnims', 'game/assets/images//spellsSheets/firebals.png', {
            frameWidth: 26, // ширина одного кадра
            frameHeight: 60 // высота одного кадра
        });
        //fire explosion
        this.load.spritesheet('fireExplosionAnims', 'game/assets/images/spellsSheets/fireExplosion.png', {
            frameWidth: 64, // ширина одного кадра
            frameHeight: 64 // высота одного кадра
        });
        //tornado
        this.load.spritesheet('tornadoAnims', 'game/assets/images/spellsSheets/sheet_tornado.png', {
            frameWidth: 45, // ширина одного кадра
            frameHeight: 45 // высота одного кадра
        });
        //hail start
        this.load.spritesheet('hailStartAnims', 'game/assets/images/hail/hailStart_sheet.png', {
            frameWidth: 32, // ширина одного кадра
            frameHeight: 32 // высота одного кадра
        });
        //hail active
        this.load.spritesheet('hailActiveAnims', 'game/assets/images/hail/hailActive_sheet.png', {
            frameWidth: 32, // ширина одного кадра
            frameHeight: 32 // высота одного кадра
        });
        //hail ending
        this.load.spritesheet('hailEndingAnims', 'game/assets/images/hail/hailEnding_sheet.png', {
            frameWidth: 32, // ширина одного кадра
            frameHeight: 32 // высота одного кадра
        });

        //enemy normal
        this.load.spritesheet('sheet_enemy_normal_1', 'game/assets/images/enemiesSheets/sheet_enemy_normal_1.png', {
            frameWidth: 48, // ширина одного кадра
            frameHeight: 48 // высота одного кадра
        });
        //enemy fast
        this.load.spritesheet('sheet_enemy_fast_1', 'game/assets/images/enemiesSheets/sheet_enemy_fast_1.png', {
            frameWidth: 24, // ширина одного кадра
            frameHeight: 24 // высота одного кадра
        });//enemy tank
        this.load.spritesheet('sheet_enemy_tank_1', 'game/assets/images/enemiesSheets/sheet_enemy_tank_1.png', {
            frameWidth: 64, // ширина одного кадра
            frameHeight: 64 // высота одного кадра
        });
        //enemy boss
        this.load.spritesheet('sheet_enemy_boss_1', 'game/assets/images/enemiesSheets/sheet_enemy_boss_1.png', {
            frameWidth: 240, // ширина одного кадра
            frameHeight: 240 // высота одного кадра
        });
        //coins
        this.load.spritesheet('coins_sheet', 'game/assets/images/coins/coin_sheet_1.png', {
            frameWidth: 16, // ширина одного кадра
            frameHeight: 16 // высота одного кадра
        });


        this.load.image('background_0', 'game/assets/images/BG/Grass.png');
        this.load.image('background_1', 'game/assets/images/BG/GrassWithFruits.png');
        this.load.image('background_2', 'game/assets/images/BG/GrassWithFruits1.png');
        this.load.image('background_4', 'game/assets/images/BG/Grass_4.png');
        this.load.image('background_5', 'game/assets/images/BG/TempBG_1.png');
        this.load.image('background_6', 'game/assets/images/BG/TempBG_2.png');

        this.load.image("vignette", "game/assets/images/lowHPVignette/Lucid_Origin_dark_red_vignette_overlay_with_soft_glowing_edges_2.jpg");

        this.load.image('coin', 'game/assets/images/coins/coin.png')
        this.load.image('healthPack', 'game/assets/images/flask_2.png')
        this.load.image('levelUp', 'game/assets/images/levelUpEffect/levelUp.png')
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
        loadAllAnimations(this)

        const level = this.registry.get('currentLevel')
        const background = levels[level].levelConfigs.backGround
        // const background = 'TempBG_2';


        //vignette
        this.vignette = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "vignette");
        this.vignette.setScrollFactor(0); // чтобы не двигалась с камерой
        this.vignette.setDepth(9999); // поверх всего
        this.vignette.setOrigin(0.5);
        this.vignette.setAlpha(0); // изначально невидима
        this.vignette.setScale(
            this.cameras.main.width / this.vignette.width,
            this.cameras.main.height / this.vignette.height
        );



        this.background = this.add.tileSprite(0, 0, 10000, 10000, background).setOrigin(0, 0).setDepth(-5);
        this.physics.world.setBoundsCollision(false, false, false, false);
        this.player = new Player(this, 5000, 5000);
        this.lightMask = new LightMask(this, 700); // радиус 150 // fog
        this.hpMark = new PlayerHPMark(this, this.player.sprite);
        this.enemies = new EnemySpawner(this, this.player)
        this.coins = new CoinSpawner(this, this.player, this.enemies);
        this.healthPack = new HealthPack(this, this.player);
        this.items = new ArmorsScrollsSpawner(this, this.player, this.enemies)
        this.fireAura = new FireAura(this, this.player)
        this.satellites = new Satellites(this, this.player)

        //sounds
        this.magicShootSfx = this.sound.add('magicShootSound', { volume: 1.5 });
        this.lightShootSfx = this.sound.add('lightShootSound', { volume: 0.03 });
        this.fireShootSfx = this.sound.add('fireShootSound', { volume: 0.4 });
        this.hailShootSfx = this.sound.add('hailShootSound', { volume: 0.1 });
        this.enemyHitSfx = this.sound.add('enemyHitSound', { volume: Phaser.Math.FloatBetween(0.01, 0.03) });
        this.lastShootSoundTime = 0
        this.lightningShootSfx = this.sound.add('lightningShootSound', { volume: Phaser.Math.FloatBetween(0.1, 0.5) });
        this.thunderLevelUpSfx = this.sound.add('thunderLevelUpSound', { volume: 0.35 })
        this.fireAuraSfx = this.sound.add('fireAuraHitSound', { volume: 0.2 });
        this.onTapSfx = this.sound.add('onTapSound', { volume: 0.1 });
        this.levelUpSfx = this.sound.add('levelUpSound', { volume: 0.3 });
        this.levelStartSfx = this.sound.add('levelStartSound', { volume: 1 });
        this.gameBGSoundSfx = this.sound.add('gameBGSound', { volume: 1, loop: true });
        this.fireShootCollisionSfx = this.sound.add('fireShootCollisionSound', { volume: 0.05 })

        // this.satelliteCollisionSoundSfx = this.sound.add('satelliteCollisionSound', { volume: 0.1 })
        this.satelliteStartSoundSfx = this.sound.add('satelliteStartSound', { volume: 1, loop: true })
        this.satelliteHitSoundsSfx = this.sound.add('satelliteCollisionSound', { volume: 0.5, });

        this.lastTornadoSoundTime = 0;
        this.tornadoStartSoundSfx = this.sound.add('tornadoStartSound', { volume: 0.05 });
        this.coinCollectSoundSfx = this.sound.add('coinCollectSound', {
            volume: Phaser.Math.FloatBetween(0.04, 0.1),
            rate: Phaser.Math.FloatBetween(0.9, 1.1)
        })
        this.HPCollectSoundSfx = this.sound.add('playerCollectHP', {
            volume: Phaser.Math.FloatBetween(0.9, 1),
            rate: Phaser.Math.FloatBetween(0.9, 1.1)
        })
        this.playerMoveSfx = this.sound.add('playerMoveSound', { volume: 1 })

        //expscene key
        this.tabKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.restoreHPKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        this.input.keyboard.on("keydown-T", () => {
            printStats();
        });

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
        // next level
        this.input.keyboard.on('keydown-N', () => {
            const lvl = this.registry.get('currentLevel');
            this.registry.set('currentLevel', lvl + 1);
            this.scene.start('GameScene');
        });
        //spawn coins on start close to player
        for (let i = 0; i < 25; i++) {
            this.coins.spawnRandomly(50, 500, this)
        }
        // this.scene.pause();
        // //level up choose upgrades
        // this.scene.launch("UpgradeForExpScene", {
        //     scene: this,
        //     upgrades: playerSkills.allSkills,// allSkills// генерируешь 3 апгрейда
        //     onSelect: (upgrade) => {
        //         // playLevelUpEffect(this, this.player)
        //         upgrade.applyUpgrade(this); // логика применения
        //         this.scene.resume();
        //     }
        // });

        const music = this.sound.get("bgMusic");//bg music from menu scene off
        music.stop()
        this.gameBGSoundSfx.play()  // game bg wind sound on

        playLevelStartEffect(this, this.player)

        // fake magic on lelve start
        this.shootFakeMagicTimer = this.time.addEvent({
            delay: 850,
            callback: () => shootMagic(
                this,
                this.player,
                this.enemies.getGroup(),
                this.magicShots,
                1,
                1,
            ),
            loop: true
        });


    }


    update() {
        //движение игрока
        this.player.update()

        this.lightMask.update(this.player);

        //хп игрока бар
        this.hpMark.update();
        // Движение врагов к игроку
        this.enemies.update()

        //satelittes
        this.satellites.update();

        //Движение fireAura 
        this.fireAura.update()

        //exp scene qqqq
        if (Phaser.Input.Keyboard.JustDown(this.tabKey)) {
            this.scene.pause();
            this.scene.launch("UpgradeForExpScene", {
                scene: this,
                upgrades: playerSkills.allSkills,// allSkills// генерируешь 3 апгрейда
                onSelect: (upgrade) => {
                    upgrade.applyUpgrade(this); // логика применения

                    playLevelUpEffect(this, this.player)

                }
            });
            levels[this.registry.get('currentLevel')].levelConfigs.levelUpPointsCount++;
            levels[this.registry.get('currentLevel')].levelConfigs.coefficientToUpgradeLevel++;

        }

        //pause 
        if (Phaser.Input.Keyboard.JustDown(this.pauseKey)) {
            togglePause(this);
        }
        //hp restirebtn
        if (Phaser.Input.Keyboard.JustDown(this.restoreHPKey)) {
            this.hud.addLives(10);
        }
        //inventory
        if (Phaser.Input.Keyboard.JustDown(this.inventoryKey)) {
            this.scene.launch('InventoryScene');
        }
        if (Phaser.Input.Keyboard.JustDown(this.inventoryOffKey)) {
            this.scene.stop('InventoryScene');

        }
        //upgrades for exp

        if (this.hud.exp >= levels[this.registry.get('currentLevel')].levelConfigs.expToUpgrade * levels[this.registry.get('currentLevel')].levelConfigs.coefficientToUpgradeLevel) {
            this.hud.clearExp();
            this.scene.pause();
            this.scene.launch("UpgradeForExpScene", {
                scene: this,
                upgrades: playerSkills.allSkills,// allSkills// генерируешь 3 апгрейда
                onSelect: (upgrade) => {
                    playLevelUpEffect(this, this.player)
                    upgrade.applyUpgrade(this); // логика применения

                }
            });
            levels[this.registry.get('currentLevel')].levelConfigs.levelUpPointsCount++;
            levels[this.registry.get('currentLevel')].levelConfigs.coefficientToUpgradeLevel++;
        }
        //debug x,y
        this.hud.updateDebug(this.player.x, this.player.y)
    }
}