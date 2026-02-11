import CoinSpawner from "../../entities/CoinSpawner.js"
import EnemySpawner from "../../entities/EnemySpawner.js"
import Player from "../../entities/Player.js"
import { setupPause, togglePause } from "../../utils/pauseManager.js"
import { setupCollisions } from "../../utils/setupCollisions.js"
import { setupTimers } from "../../utils/setupTimers.js"
import HUD from "../../ui/HUD.js"
import { clearSkillsTimers, createPlayerSkillsFromRegistry, playerSkills } from "../../utils/upgradesManager.js"
import { setHUD } from "../../utils/hudManager.js"
import WaveManager from "../../utils/WaveManager.js"
import ArmorsScrollsSpawner from "../../entities/ArmorsScrollsSpawner.js"
import PlayerHPMark from "../../utils/PlayerHPBar.js"
import { Satellites } from "../../projectiles/Satellite.js"
import { clearDamageStats, damageStats, printStats } from "../../utils/damageStats.js"
import { loadAllAnimations } from "../../utils/animationRegistry.js"
import { setLanguage, t } from "../../LanguageManager.js";
import LightMask from "../../utils/lightMask.js"
import HealthPack from "../../utils/healthPack.js"
import { shootMagic } from "../../projectiles/Magic.js"
import { playLevelStartEffect } from "../../utils/playLevelStartEffect.js"
import ChestSpawner from "../../entities/chestSpawner.js"
import { playerItems } from "../../utils/itemsManager.js"
import SkillsUI from "../../ui/skillsUI.js"
import Tooltip from "../../ui/Tooltip.js"
import SkillRegistry from "../../SkillsRegistry.js"
import SplashSpawner from "../../entities/SplashesSpawner.js"
import UIManager from "../../ui/UIManager.js"
import MagnetSpawner from "../../entities/MagnetSpawner.js"
import { createClouds } from "../../projectiles/Lightning.js"
import { createDamageTextPool, updateDamageTextPool } from "../../utils/DAMAGE_TEXT.js"
import { ChestArrowManager } from "../../utils/chestArrowManager.js"
import inputsController from "../../utils/inputs/inputsController.js"
import initGroups from "../../js/initiales/initGroups.js"
import FXManager from "./FX/Vignette.js"
import Level from "./Level/Level.js"
import AudioManager from "./AudioManger.js"
import ParticlesManager from "./FX/ParticlesManager.js"
import DamageToggleUI from "./UI/damageTextButton.js"
import PauseButton from "./UI/PauseButton.js"
import levelUp from "../../utils/inputs/levelUp.js"

export default class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene")
    }
    preload() {

    }
    create() {
        console.log(this.game.config.resolution);
        console.log(this.game.renderer.resolution);
        this.anims.resumeAll()
        this.ui = new UIManager(this);
        this.audio = new AudioManager(this);
        this.damageToggleUI = new DamageToggleUI(this);
        this.pauseButton = new PauseButton(this)

        this.events.on('shutdown', () => {
            if (this.sparkCloudsTrail) {
                this.sparkCloudsTrail.destroy()
                this.sparkCloudsTrail = null
            }
            if (this.contactLightningTrail) {
                this.contactLightningTrail.destroy()
                this.contactLightningTrail = null
            }
        });

        this.scale.on('resize', this.ui.resize, this.ui);



        this.debugText = this.ui.createText('mamm', { xPercent: 0.15, yPercent: 0.96, fontPercent: 0.03 },).setScrollFactor(0).setDepth(1000);
        this.fpsText = this.ui.createText('mamm', { xPercent: 0.15, yPercent: 0.98, fontPercent: 0.02 },).setScrollFactor(0).setDepth(1000)
        this.logicTime = this.ui.createText('', { xPercent: 0.15, yPercent: 0.93, fontPercent: 0.02 },).setScrollFactor(0).setDepth(1001)
        this.physicTime = this.ui.createText('phy', { xPercent: 0.15, yPercent: 0.91, fontPercent: 0.02 },).setScrollFactor(0).setDepth(1002)
        loadAllAnimations(this)


        this.thunderClouds = []
        this.thunderCloudsActive = false

        this.FXManager = new FXManager(this)
        this.level = new Level(this)




        this.physics.world.setBoundsCollision(false, false, false, false);
        this.physics.world.setBounds(-Infinity, -Infinity, Infinity, Infinity);
        this.cameras.main.setBounds(-Infinity, -Infinity, Infinity, Infinity);

        this.player = new Player(this, 0, 0);
        this.lightMask = new LightMask(this, 700); // радиус 150 // fog
        this.hpMark = new PlayerHPMark(this, this.player.sprite);
        this.enemies = new EnemySpawner(this, this.player)
        this.coins = new CoinSpawner(this, this.player, this.enemies);

        this.chests = new ChestSpawner(this, this.player)
        this.healthPack = new HealthPack(this, this.player);
        this.items = new ArmorsScrollsSpawner(this, this.player, this.enemies)
        this.satellites = new Satellites(this, this.player)
        this.tooltip = new Tooltip(this);
        this.magnets = new MagnetSpawner(this, this.player)
        this.splashes = new SplashSpawner(this);

        this.inputsController = new inputsController(this)

        this.hud = new HUD(this, this.level.currentLevel.levelConfigs.levelDuration, (scene, coins) => {
            this.audio.stop('satelliteStartSoundSfx')
            this.audio.stop('gameBGSoundSfx')
            this.audio.stop('playerMoveSfx')
            this.scene.pause();
            this.scene.launch("CompleteLevelScene", { scene: this.scene.scene, coins: coins, score: this.hud.score });
        });
        setHUD(this.hud)
        setupTimers(this);
        setupPause(this)
        createDamageTextPool(this, 200)//damage text pool
        initGroups(this)
        setupCollisions(this);


        // this.registry.set('enemySpawned', 0)
        this.waveManager = new WaveManager(this, this.level.currentLevel)

        this.events.on('spawnEnemy', (type) => {
            this.enemies.spawn(this, type);
        });

        this.waveManager.start();

        //spawn coins on start close to player
        for (let i = 0; i < 40; i++) {//175
            this.coins.spawnRandomly(100, 1400, this)
        }
        this.particles = new ParticlesManager(this)

        this.audio.play('gameBGSoundSfx')  // game bg wind sound on


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
            delay: SkillRegistry.magic.getCurrentStats().delay * 100,
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

        this.events.once(Phaser.Scenes.Events.SHUTDOWN, this.onShutdown, this);

        // //mouse 
        this.input.on('pointermove', pointer => {
            this.mouseX = pointer.worldX;
            this.mouseY = pointer.worldY;
        });

        this.ui.resize()

        this.openChestButton = this.ui.createText('chest', { xPercent: 0.75, yPercent: 0.9, fontPercent: 0.05 },
            { color: '#08aadb', backgroundColor: '#000000' }).setScrollFactor(0).setDepth(100).setInteractive().setOrigin(0.5)
            .on('pointerdown', () => {
                this.events.emit('openChest-request')
            })

        this.levelUpButton = this.ui.createText('skill', { xPercent: 0.25, yPercent: 0.9, fontPercent: 0.05 },
            { color: '#08aadb', backgroundColor: '#000000' }).setScrollFactor(0).setDepth(100).setInteractive().setOrigin(0.5)
            .on('pointerdown', () => {
                this.events.emit('levelUp-request')
            })

        this.acc = 0
    }
    onShutdown() {
        if (this.waveManager) this.waveManager.reset(); // только свои таймеры
        this.events.off('spawnEnemy');                 // только свои события
    }

    update(time, delta) {
        this.inputsController.update()
        this.fireShots.getChildren().forEach((bomb) => {
            bomb.rotation += 0.08
        })
        // this.debugText.setText(`
        //      all: ${this.children.list.length},
        //       active ${this.children.list.filter(obj => obj.active).length},
        //     //  bodies ${this.physics.world.bodies.entries.length},
        //     // 'active bodies:', ${this.physics.world.bodies.entries.filter(b => b.gameObject && b.gameObject.active).length}},
        //     // 'tweens:', ${this.tweens.tweens.length},
        //     //  timers ${this.time._active.length},`);


        this.debugText.setText(`dCalls: ${this.game.renderer.drawCount}`)
        // this.debugText.setText(`all: ${this.children.list.length}`)
        if (this.acc >= 200) {
            this.fpsText.setText(`fps: ${Math.floor(this.game.loop.actualFps)}`)
            this.acc = 0
        }
        this.acc += delta

        this.player.update()
        this.level.update()

        // this.lightMask.update(this.player);//fog
        // this.magnet.update();
        this.hpMark.update(); //хп игрока бар
        this.chestArrowManager.update(time, delta)
        this.enemies.update()
        updateDamageTextPool(this, delta)//damage text 
        this.satellites.update();

        if (playerSkills.lightning.level > 1) {
            if (!this.thunderCloudsActive) {
                this.thunderCloudsActive = true
                createClouds(this)
            }
        }//thunder

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
        });//magic destroy after 2000ms

        if (this.level.currentLevel.levelConfigs.levelUpPointsCount < 69 &&
            this.hud.exp >=
            this.level.currentLevel.levelConfigs.expToUpgrade *
            this.level.currentLevel.levelConfigs.coefficientToUpgradeLevel) {
            this.events.emit('levelUp-request')



        }//upgrades for exp

        // this.hud.updateDebug(this.player.x, this.player.y) //debug x,y


    }
}