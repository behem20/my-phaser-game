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
import { MagnetSkill } from "../entities/Magnet.js"
import MagnetSpawner from "../entities/MagnetSpawner.js"
import { createClouds } from "../projectiles/Lightning.js"
import { createDamageTextPool, updateDamageTextPool } from "../utils/DAMAGE_TEXT.js"
import { ChestArrowManager } from "../utils/chestArrowManager.js"



export default class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene")
    }
    preload() {

    }
    create() {

        this.enemiesRefocusTime = 500
        this.events.on('shutdown', () => {
            console.log('shutdown');

            if (this.sparkCloudsTrail) {
                this.sparkCloudsTrail.destroy()
                this.sparkCloudsTrail = null
            }
            if (this.contactLightningTrail) {
                this.contactLightningTrail.destroy()
                this.contactLightningTrail = null
            }
        });
        this.ui = new UIManager(this);
        this.scale.on('resize', this.ui.resize, this.ui);
        // this.visionTexture.setSize(gameSize.width + 100, gameSize.height + 100);
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

        this.fpsText = this.add.text(this.cameras.main.width / 2, 40, '', {
            font: '24px ',
            fill: '#00ff00ff',
            stroke: '#1af307ff',
            strokeThickness: 1
        }).setScrollFactor(0).setDepth(1000);// FPS

        this.profileText = this.add.text(this.cameras.main.width * 0.45, this.cameras.main.height * 0.05).setScrollFactor(0).setDepth(100)
        this.ParticlesText = this.add.text(330, -160, '', {//330,60
            font: '26px Arial',
            fill: '#00ffff',

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
        this.thunderClouds = []
        this.thunderCloudsActive = false
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

        // this.magnet = new MagnetSkill(this, this.player, this.coins.getGroup(), {
        //     radius: 400,
        //     speed: 300,
        //     duration: 1000
        // });
        this.chests = new ChestSpawner(this, this.player)
        this.healthPack = new HealthPack(this, this.player);
        this.items = new ArmorsScrollsSpawner(this, this.player, this.enemies)
        this.fireAura = new FireAura(this, this.player)
        this.satellites = new Satellites(this, this.player)
        this.tooltip = new Tooltip(this);
        this.magnets = new MagnetSpawner(this, this.player)
        this.splashes = new SplashSpawner(this);



        //sounds
        this.magicShootSfx = this.sound.add('magicShootSound', { volume: 1.5 });
        this.lightShootSfx = this.sound.add('lightShootSound', { volume: 0.03 });
        this.fireShootSfx = this.sound.add('fireShootSound', { volume: 0.4 });
        this.hailShootSfx = this.sound.add('hailShootSound', { volume: 0.1 });
        this.enemyHitSfx = this.sound.add('enemyHitSound', {
            volume: Phaser.Math.FloatBetween(0.1, 0.2),
            rate: Phaser.Math.FloatBetween(0.7, 1.1)
        });

        this.enemySplatSfx = this.sound.add('enemySplatSound', { volume: Phaser.Math.Between(1, 2), rate: Phaser.Math.FloatBetween(0.7, 1.1) });
        this.enemySplashesSfx = this.sound.add('splashesSound', { volume: Phaser.Math.Between(1, 3) });

        this.lastShootSoundTime = 0
        this.lightningShootSfx = this.sound.add('lightningShootSound', { volume: Phaser.Math.FloatBetween(0.1, 0.3) });
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
            volume: Phaser.Math.FloatBetween(0.1, 0.2),
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
            console.log('perf: ', performance.memory.usedJSHeapSize / 1000000);
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
        this.input.keyboard.on('keydown-M', () => {
            console.log(this.physics.world.bodies.entries);
           
            this.coins.activateMagnet(3500, 500);
        });
        this.input.keyboard.on('keydown-C', () => {
            for (let index = 0; index < 100; index++) {
                this.coins.spawnRandomly(100, 700);
            }
        });
        this.input.keyboard.on('keydown-E', () => {

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


        createDamageTextPool(this, 2000)//damage text pool
        this.magicShots = this.physics.add.group({
            maxSize: 500,
            runChildUpdate: true
        });
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
        this.waveManager = new WaveManager(this, level)

        this.events.on('spawnEnemy', (type) => {
            this.enemies.spawn(this, type);
        });

        this.waveManager.start();



        //spawn coins on start close to player
        for (let i = 0; i < 40; i++) {//175

            this.coins.spawnRandomly(100, 1400, this)
        }
        const particleAngles = [
            { min: 0, max: 36 },
            { min: 36, max: 72 },
            { min: 72, max: 108 },
            { min: 108, max: 144 },
            { min: 144, max: 180 },
            { min: 180, max: 216 },
            { min: 216, max: 252 },
            { min: 252, max: 288 },
            { min: 288, max: 324 },
            { min: 324, max: 360 },
        ]
        this.satelliteParticlesOnHit = this.add.particles(0, 0, 'enemy-particle', {
            // frame: 'white',
            speed: { min: 120, max: 260 },
            scale: { start: Phaser.Math.FloatBetween(3, 4.5), end: 0 },
            // scale: 1,
            alpha: { start: 1, end: 0.5 },
            lifespan: 570,
            angle: particleAngles[() => { return Phaser.Math.Between(0, 9) }],
            frequency: -1,
            quentity: 1,
            // tint: [0x888888, 0x8888ff],
            // tint: [0x888888, 0xff0000],
            // follow: sat, // следят за игроком
            // blendMode: 'ADD'
        }).setDepth(1);
        this.blinkParticles = this.add.particles(0, 0, 'flares', {
            frame: 'white',
            speed: { min: 120, max: 260 },
            scale: { start: 0.5, end: 0 },
            // scale: 1,
            alpha: { start: 1, end: 0.5 },
            lifespan: 570,
            angle: { min: 0, max: 360 },
            frequency: -1,
            quentity: 1,
            gravityY: -2300,
            tint: [0x2288ff, 0x8888ff],
            // tint: [0x888888, 0xff0000],
            // follow: sat, // следят за игроком
            // blendMode: 'ADD'
        }).setDepth(0);


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
        this.chestArrowManager = new ChestArrowManager(this, this.chests.getGroup(), 'chest');
        // fake magic on lelve start
        this.shootFakeMagicTimer = this.time.addEvent({
            delay: SkillRegistry.magic.getCurrentStats().delay ,
            callback: () => shootMagic(
                this,
                this.player,
                this.enemies.getGroup(),
                this.magicShots,
                3,
                3,
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

        this.tpKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.updateTimeText = this.add.text(100, 100, '').setScrollFactor(0).setDepth(100)
        //profile 
        this.prof = {};

        this.profile = (tag, fn) => {
            const t0 = performance.now();
            fn();
            const t1 = performance.now();
            this.prof[tag] = (t1 - t0);
        };
        this.updateTimerCamulate = 0
        console.log(this.game.renderer.drawCount);


        //zoom
        this.currentZoom = 1;
        this.minZoom = 0.3;
        this.maxZoom = 3;

        this.keyZoomIn = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        this.keyZoomOut = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
        //zoom
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

    update(time, delta) {
        const t0 = performance.now()


        if (Phaser.Input.Keyboard.JustDown(this.tpKey)) {
            this.blinkParticles.explode(16, this.mouseX, this.mouseY)
            this.time.delayedCall(150, () => {
                this.player.sprite.x = this.mouseX
                this.player.sprite.y = this.mouseY
            })
            // this.blinkParticles.explode(16, this.player.sprite.x, this.player.sprite.y)
        }
        this.fireShots.getChildren().forEach((bomb) => {
            bomb.rotation += 0.08

        })

        if (Phaser.Input.Keyboard.JustDown(this.keyZoomIn)) {
            this.currentZoom += 0.1;
            this.currentZoom = Phaser.Math.Clamp(this.currentZoom, this.minZoom, this.maxZoom);
            this.cameras.main.setZoom(this.currentZoom);
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyZoomOut)) {
            this.currentZoom -= 0.1;
            this.currentZoom = Phaser.Math.Clamp(this.currentZoom, this.minZoom, this.maxZoom);
            this.cameras.main.setZoom(this.currentZoom);
        }


        // this.fpsText.setText(`fps: ${Math.floor(this.game.loop.actualFps)} `);
        this.fpsText.setText(`${t('ui.fps')}: ${Math.floor(this.game.loop.actualFps)} ,
        //  all ${this.children.list.length},
        //   active ${this.children.list.filter(obj => obj.active).length},
      //bodies ${this.physics.world.bodies.entries.length},
      // 'active bodies:', ${this.physics.world.bodies.entries.filter(b => b.gameObject && b.gameObject.active).length}},
      // 'tweens:', ${this.tweens.tweens.length},,
      // timers ${this.time._active.length},
      // buffer: ${Object.keys(this.textures.list).length}`);//getExtension("WEBGL_lose_context") //getParameter(this.game.renderer.gl.MAX_TEXTURE_SIZE)

        this.profileText.setText(this.prof.lightMask?.toFixed(1))

        // this.fpsText.setText(`
        //     фпс: ${Math.floor(this.game.loop.actualFps)} 
        // ,obj: ${this.children.list.length}
        // ,display:  ${this.add.displayList.length}
        // ,updt list: ${this.sys.updateList.list.length}
        // `);

        // console.log('objects:', this.children.list.length);
        // console.log('display:', this.add.displayList.length);
        // console.log('update list:', this.sys.updateList.list.length);

        // if (this.time.now % 2000 < 16) {
        //     console.log('=== OBJECT COUNTS ===');

        //     // console.log('children:', this.children?.list?.length ?? 'N/A');
        //     // console.log('display:', this.sys?.displayList?.list?.length ?? 'N/A');
        //     // console.log('update:', this.sys?.updateList?.length ?? 'N/A');
        //     // console.log('physics bodies:', this.physics?.world?.bodies?.size ?? 'N/A');
        //     console.log('tweens:', this.tweens?.tweens?.length ?? 'N/A');
        //     const allTweens = this.tweens?.tweens ?? [];
        //     console.log('=== ACTIVE TWEENS ===', allTweens.length);

        //     // allTweens.forEach((tween, i) => {
        //     //     console.log(i, tween.targets, tween.totalDuration, tween.isPlaying());
        //     // });
        //     console.log('timers:', this.time?.events?.length ?? 'N/A');
        //     console.log('fps:', Math.floor(this.game.loop.actualFps) ?? 'N/A');

        // }
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

        // //fog
        // this.lightMask.update(this.player);

        //fog
        this.profile('lightMask', () => {
            // this.lightMask.update(this.player);
        })


        // //magnet
        // this.magnet.update();
        //хп игрока бар
        this.hpMark.update();

        //chest arrow
        this.chestArrowManager.update(time, delta)

        // Движение врагов к игроку
        if (time > this.enemiesRefocusTime) {
            this.enemies.update()
            this.enemiesRefocusTime += 20
        }

        //damage text 
        updateDamageTextPool(this, delta)


        //satelittes
        this.satellites.update();

        //Движение fireAura 
        this.fireAura.update()

        //thunder
        if (playerSkills.lightning.level > 1) {

            if (!this.thunderCloudsActive) {
                this.thunderCloudsActive = true
                createClouds(this)
            }
        }
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

        //magic destroy after 2000ms
        this.magicShots.children.each(magic => {
            if (!magic.active) return;
            magic.life -= delta;
            if (magic.life <= 0) {
                magic.disableBody(true, true);
                if (magic.trail) {
                    magic.trail.stop()
                    magic.trail.destroy();
                    magic.trail = null;
                }
            }

        });
        //chest scene rrrr
        if (Phaser.Input.Keyboard.JustDown(this.chestKey)) {
            this.scene.pause();
            this.scene.launch("InChestScene", {
                scene: this,
                items: playerItems.allItems,
                onSelect: (item) => {
                    item.applyItem(this.playerInitCfgs, this)
                }
            });

        }

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

        // Замер рендера


        this.updateTime = performance.now() - t0;

        this.updateTimerCamulate += delta
        if (this.updateTimerCamulate > 100) {
            this.updateTimeText.setText(`update: 
            ${(this.updateTime.toFixed(1))},
            
        `)
            this.updateTimerCamulate = 0
        }



    }
}