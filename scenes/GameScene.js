import CoinSpawner from "../entities/CoinSpawner.js"
import EnemySpawner from "../entities/EnemySpawner.js"
import Player from "../entities/Player.js"
import { setupPause, togglePause } from "../utils/pauseManager.js"
import { setupCollisions } from "../utils/setupCollisions.js"
import { setupTimers } from "../utils/setupTimers.js"
import HUD from "../ui/HUD.js"
import { clearSkillsTimers, createPlayerSkillsFromRegistry, playerSkills } from "../utils/upgradesManager.js"
import { setHUD } from "../utils/hudManager.js"
import WaveManager from "../utils/WaveManager.js"
import ArmorsScrollsSpawner from "../entities/ArmorsScrollsSpawner.js"
import PlayerHPMark from "../utils/PlayerHPBar.js"
import FireAura from "../utils/fireAuraConfigs.js"
import { Satellites } from "../projectiles/Satellite.js"
import { clearDamageStats, damageStats, printStats } from "../utils/damageStats.js"
import { loadAllAnimations } from "../utils/animationRegistry.js"
import { setLanguage, t } from "../LanguageManager.js";
import LightMask from "../utils/lightMask.js"
import HealthPack from "../utils/healthPack.js"
import { playLevelUpEffect } from "../utils/playLevelUpEffect.js"
import { shootMagic } from "../projectiles/Magic.js"
import { playLevelStartEffect } from "../utils/playLevelStartEffect.js"
import ChestSpawner from "../entities/chestSpawner.js"
import { playerItems } from "../utils/itemsManager.js"
import SkillsUI from "../ui/skillsUI.js"
import Tooltip from "../ui/Tooltip.js"
import SkillRegistry from "../SkillsRegistry.js"
import originalLevels from "../levelsConfigs.js"
import originalPlayerInitCfgs from "../PlayerConfigs.js"
import SplashSpawner from "../entities/SplashesSpawner.js"
import UIManager from "../ui/UIManager.js"



export default class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene")
    }
    preload() {

    }
    create() {
        this.ui = new UIManager(this);
        this.scale.on('resize', this.ui.resize, this.ui);
        const w = this.scale.width;
        const h = this.scale.height;
        this.anims.resumeAll();
        this.hideDamageText = true;
        this.hideDamageButton = this.ui.createText(t('game.damage?'),
            { xPercent: 0.92, yPercent: 0.02, fontPercent: 0.02 })
            .setScrollFactor(0).setDepth(1200).setInteractive()
        // console.log(this.hideDamageButton.style.fontSize);

        this.hideDamageButton.on('pointerdown', () => { this.hideDamageText = !this.hideDamageText; this.onTapSfx.play() })
        this.hideDamageButton.on('pointerover', () => {
            this.hideDamageButton.setFontSize(parseInt(this.hideDamageButton.style.fontSize) + 2);
            this.onHoverSfx.play()
        })
        this.hideDamageButton.on('pointerout', () => { this.hideDamageButton.setFontSize(parseInt(this.hideDamageButton.style.fontSize) - 2); })

        this.fpsText = this.add.text(this.cameras.main.width/2, 40, '', {
            font: '16px ',
            fill: '#ffffffff'
        }).setScrollFactor(0).setDepth(1000);// FPS
        this.ParticlesText = this.add.text(330, -160, '', {//330,60
            font: '26px Arial',
            fill: '#00ffff'
        }).setScrollFactor(0).setDepth(1000);
        loadAllAnimations(this)

        const level = this.registry.get('currentLevel')
        this.levels = []
        function resetLevels(scene) {
            scene.levels = JSON.parse(JSON.stringify(originalLevels));


        }
        function resetPlayerInitCfgs(scene) {
            scene.playerInitCfgs = JSON.parse(JSON.stringify(originalPlayerInitCfgs));
        }
        resetLevels(this)
        resetPlayerInitCfgs(this)



        const background = this.levels[level].levelConfigs.backGround

        // console.log(background);

        // const background = 'TempBG_2';
        const pauseButton = this.ui.createImage('pausePicture', { xPercent: 0.98, yPercent: 0.025 }, 0.04).setDepth(100).setInteractive().setOrigin(0.5).setScrollFactor(0)

        pauseButton.basicScale = pauseButton.scale
        pauseButton.on('pointerover', () => { pauseButton.setScale(pauseButton.scale * 1.1); this.onHoverSfx.play() })
        pauseButton.on('pointerout', () => { pauseButton.setScale(pauseButton.basicScale) })

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



        this.background = this.ui.createTileSprite(background,
            { xPercent: 0.5, yPercent: 0.5 }, 1, 1)
            .setOrigin(0.5).setDepth(-5).setScrollFactor(0);

        this.physics.world.setBoundsCollision(false, false, false, false);
        this.physics.world.setBounds(-Infinity, -Infinity, Infinity, Infinity);
        this.cameras.main.setBounds(-Infinity, -Infinity, Infinity, Infinity);
        // this.physics.world.setBounds(0, 0, w*2, h*2);
        // this.cameras.main.setBounds(0, 0, w*2, h*2);
        this.player = new Player(this, 0, 0);
        this.lightMask = new LightMask(this, 700); // радиус 150 // fog
        this.hpMark = new PlayerHPMark(this, this.player.sprite);
        this.enemies = new EnemySpawner(this, this.player)
        this.coins = new CoinSpawner(this, this.player, this.enemies);
        this.chests = new ChestSpawner(this, this.player)
        this.healthPack = new HealthPack(this, this.player);
        this.items = new ArmorsScrollsSpawner(this, this.player, this.enemies)
        this.fireAura = new FireAura(this, this.player)
        this.satellites = new Satellites(this, this.player)
        this.tooltip = new Tooltip(this);

        this.splashes = new SplashSpawner(this);



        //sounds
        this.magicShootSfx = this.sound.add('magicShootSound', { volume: 1.5 });
        this.lightShootSfx = this.sound.add('lightShootSound', { volume: 0.03 });
        this.fireShootSfx = this.sound.add('fireShootSound', { volume: 0.4 });
        this.hailShootSfx = this.sound.add('hailShootSound', { volume: 0.1 });
        this.enemyHitSfx = this.sound.add('enemyHitSound', { volume: Phaser.Math.FloatBetween(0.01, 0.03) });

        this.enemySplatSfx = this.sound.add('enemySplatSound', { volume: Phaser.Math.Between(1, 3) });
        this.enemySplashesSfx = this.sound.add('splashesSound', { volume: Phaser.Math.Between(1, 3) });

        this.lastShootSoundTime = 0
        this.lightningShootSfx = this.sound.add('lightningShootSound', { volume: Phaser.Math.FloatBetween(0.1, 0.5) });
        this.thunderLevelUpSfx = this.sound.add('thunderLevelUpSound', { volume: 0.35 })
        this.fireAuraSfx = this.sound.add('fireAuraHitSound', { volume: 0.2 });
        this.onTapSfx = this.sound.add('onTapSound', { volume: 0.1 });
        this.onHoverSfx = this.sound.add('hoverSound', { volume: 0.1 });
        this.openChestSfx = this.sound.add('openChestSound', { volume: 1 });
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
        //chest scene key
        this.chestKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.restoreHPKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        this.input.keyboard.on("keydown-T", () => {
            console.log('objects:', this.children.list.length);
            // console.log("graphics:", this.children.list.filter(obj => obj.type === "Graphics").length);
            // console.log("particles:", this.children.list.filter(obj => obj.type === "ParticleEmitter").length);
            // const particlesTTT = this.children.list.filter(obj => obj.type === "ParticleEmitter");
            // particlesTTT.forEach(prt => {
            //     console.log(prt.texture)
            // })

            // console.log("enemies:", this.enemies.group.getChildren().length);

            // const images = this.children.list.filter(obj => obj.type === 'Image');
            // console.log('Images count:', images.length);
            // // images.forEach(img => {
            // //     console.log(img.texture.key, img.x, img.y);
            // // });
            // const containers = this.children.list.filter(obj => obj.type === 'Container');
            // console.log('Containers count:', containers.length);
            // console.log(this.children.list.map(obj => obj.type));
            // console.log('Tweens total:', this.tweens.getTweens(true).length);
            printStats(this.player.gAura);
        });

        //inventory key
        this.inventoryKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        //inventory keyOFF
        this.inventoryOffKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);

        const levelDuration = this.levels[level].levelConfigs.levelDuration;

        this.hud = new HUD(this, levelDuration, (scene, coins) => {

            this.satelliteStartSoundSfx.stop()
            this.gameBGSoundSfx.stop()
            this.playerMoveSfx.stop()
            this.scene.pause();
            this.scene.launch("CompleteLevelScene", { scene: this.scene.scene, coins: coins, score: this.hud.score });
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
        // this.magicTimers = {};

        // this.enemies.spawn()
        this.registry.set('enemySpawned', 0)
        // if (this.enemies) {
        //     this.enemies.group.children.each(container => {
        //         if (container.sprite) {
        //             container.particles.destroy()
        //         }
        //         if (container.shadow) {//если перезапустить волну то враги из прошлой не унчитожилсь - пытаюсь стереть их
        //             container.shadow.destroy()
        //         }
        //         container.destroy({ children: true });
        //     })
        //     this.enemies.group.clear(true, true)
        // }
        this.waveManager = new WaveManager(this, level)

        this.events.on('spawnEnemy', (type) => {
            this.enemies.spawn(this, type);
        });

        this.waveManager.start();
        // next level
        // this.input.keyboard.on('keydown-N', () => {
        //     const lvl = this.registry.get('currentLevel');
        //     this.registry.set('currentLevel', lvl + 1);
        //     this.scene.start('GameScene');
        // });
        //spawn coins on start close to player

        for (let i = 0; i < 175; i++) {

            this.coins.spawnRandomly(100, 1400, this)
        }

        // this.scene.pause();
        // //    up choose upgrades
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


        playerItems.setAllItemsIsActiveStatus()
        clearDamageStats(damageStats)
        playLevelStartEffect(this, this.player)
        clearSkillsTimers(this)
        playerSkills.resetSkills()
        createPlayerSkillsFromRegistry(playerSkills)


        this.registry.set("skills", playerSkills.objectOfAllSkills);
        this.registry.set("activeSkills", []);

        this.skillsUI = new SkillsUI(this, this.registry.get('activeSkills'));
        // fake magic on lelve start
        this.shootFakeMagicTimer = this.time.addEvent({
            delay: SkillRegistry.magic.getCurrentStats().delay,
            callback: () => shootMagic(
                this,
                this.player,
                this.enemies.getGroup(),
                this.magicShots,
                1,
                1,
                '',
                1
            ),
            loop: true
        });

        pauseButton.on('pointerdown', () => { this.onTapSfx.play(); togglePause(this) })

        this.time.addEvent({
            delay: 20,        // 500 мс = 0.5 сек
            loop: true,
            callback: () => {
                this.updateParticlesText();
            }
        });
        this.events.once(Phaser.Scenes.Events.SHUTDOWN, this.onShutdown, this);

        //mouse 
        this.input.on('pointermove', pointer => {
            // pointer.worldX / worldY — координаты в игровом мире
            this.mouseX = pointer.worldX;
            this.mouseY = pointer.worldY;
        });

    }
    onShutdown() {
        if (this.waveManager) this.waveManager.reset(); // только свои таймеры
        this.events.off('spawnEnemy');                 // только свои события
    }
    updateParticlesText() {
        let totalParticles = 0;

        // const aliveParticles = this.tornadoGroup.children.entries.forEach(el => {

        //     if (el.particles) totalParticles += el.particles.alive.length;
        // });
        if (this.REDparticles) {
            totalParticles += this.REDparticles.alive.length
        }
        // REDparticles
        this.ParticlesText.setText(` particles: ${totalParticles}`);
        totalParticles = 0
    }

    update() {
        this.fpsText.setText(`${t('ui.fps')}: ${Math.floor(this.game.loop.actualFps)}`);

        // console.log(this.chests.getGroup().children.entries[0].trail.alive.length);

        this.vignette.setPosition(this.cameras.main.centerX, this.cameras.main.centerY)
        this.vignette.setScale(
            this.cameras.main.width / this.vignette.width,
            this.cameras.main.height / this.vignette.height
        );
        //движение игрока

        this.player.update()
        if (this.background) {
            this.background.tilePositionX = this.cameras.main.scrollX;
            this.background.tilePositionY = this.cameras.main.scrollY;
        }
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
            this.skillsUI.hideTooltip()
            this.scene.pause();

            this.scene.launch("UpgradeForExpScene", {
                scene: this,
                upgrades: playerSkills.allSkills,// allSkills// генерируешь 3 апгрейда
                onSelect: (upgrade) => {
                    upgrade.applyUpgrade(this); // логика применения

                    playLevelUpEffect(this, this.player)

                }
            });
            this.levels[this.registry.get('currentLevel')].levelConfigs.levelUpPointsCount++;
            this.levels[this.registry.get('currentLevel')].levelConfigs.coefficientToUpgradeLevel++;

        }
        //chest scene rrrr
        // if (Phaser.Input.Keyboard.JustDown(this.chestKey)) {
        //     this.scene.pause();
        //     this.scene.launch("InChestScene", {
        //         scene: this,
        //         items: playerItems.allItems,
        //         onSelect: (item) => {
        //             item.applyItem(this.playerInitCfgs, this)
        //         }
        //     });

        // }

        //pause 
        // if (Phaser.Input.Keyboard.JustDown(this.pauseKey)) {
        //     togglePause(this);
        // }
        //hp restirebtn
        // if (Phaser.Input.Keyboard.JustDown(this.restoreHPKey)) {
        //     this.hud.addLives(10);
        // }

        //upgrades for exp

        if (this.levels[this.registry.get('currentLevel')].levelConfigs.levelUpPointsCount < 69 &&
            this.hud.exp >=
            this.levels[this.registry.get('currentLevel')].levelConfigs.expToUpgrade * this.levels[this.registry.get('currentLevel')].levelConfigs.coefficientToUpgradeLevel) {

            this.hud.clearExp();

            this.skillsUI.hideTooltip()
            this.scene.pause();
            this.scene.launch("UpgradeForExpScene", {
                scene: this,
                upgrades: playerSkills.allSkills,// allSkills// генерируешь 3 апгрейда
                onSelect: (upgrade) => {
                    playLevelUpEffect(this, this.player)
                    upgrade.applyUpgrade(this); // логика применения

                }
            });
            this.levels[this.registry.get('currentLevel')].levelConfigs.levelUpPointsCount++;
            this.levels[this.registry.get('currentLevel')].levelConfigs.coefficientToUpgradeLevel++;
        }
        //debug x,y
        this.hud.updateDebug(this.player.x, this.player.y)
    }
}