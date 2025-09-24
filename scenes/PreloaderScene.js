// PreloaderScene.js
export default class PreloaderScene extends Phaser.Scene {
    constructor() {
        super('PreloaderScene');
    }

    preload() {
        // Добавим текст "Загрузка..." посередине
        const { width, height } = this.scale;
        // console.log(width,height);
        
        this.loadingText = this.add.text(width / 2, height / 2, 'Загрузка...', {
            fontSize: '24px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        // Пример полоски загрузки
        let progressBox = this.add.graphics();
        let progressBar = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width / 2 - 160, height / 2 + 30, 320, 30);

        // Слушаем прогресс загрузки
        this.load.on('progress', (value) => {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(width / 2 - 150, height / 2 + 35, 300 * value, 20);
        });

        this.load.on('complete', () => {
            progressBar.destroy();
            progressBox.destroy();
        });

        // Загружаем ассеты (пример, укажи свои!)
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
        //game scene
        this.load.image("hp_line", "game/assets/images/all/hp_line.png")
        this.load.image("pausePicture", "game/assets/images/pausePicture.png")

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
            'inv-flares', // имя (можно любое, но обычно flares)
            'game/assets/images/inv-flares.png', // картинка
            'flaresInfo.json' // описание спрайтов
        );


        //items pcts
        this.load.image("broom", "game/assets/images/chestItemsPictures/broom.png")
        this.load.image("lightningRod", "game/assets/images/chestItemsPictures/lightningRod.png")
        this.load.image("harp", "game/assets/images/chestItemsPictures/harp.png")
        this.load.image("hourglass", "game/assets/images/chestItemsPictures/hourglass.png")
        this.load.image("torch", "game/assets/images/chestItemsPictures/torch.png")
        this.load.image("ring", "game/assets/images/chestItemsPictures/ring.png")
        this.load.image("bagOfGold", "game/assets/images/chestItemsPictures/bagOfGold.png")
        this.load.image("stoneOfMalick", "game/assets/images/chestItemsPictures/stoneOfMalick.png")
        this.load.image("stars", "game/assets/images/chestItemsPictures/stars.png")


        this.load.audio('magicShootSound', 'game/assets/sounds/magicShootSound.mp3');
        this.load.audio('lightShootSound', 'game/assets/sounds/lightShootSound.mp3');
        this.load.audio('fireShootSound', 'game/assets/sounds/fireShootSound.mp3');
        this.load.audio('enemyHitSound', 'game/assets/sounds/enemyHitSound.mp3');
        this.load.audio('enemySplatSound', 'game/assets/sounds/enemySplatSound.mp3');

        this.load.audio('splashesSound', 'game/assets/sounds/splashesSound.mp3');

        this.load.audio('lightningShootSound', 'game/assets/sounds/lightningShootSound.mp3');
        this.load.audio('fireAuraHitSound', 'game/assets/sounds/fireAuraHit_1.mp3');
        this.load.audio('fireShootCollisionSound', 'game/assets/sounds/fireShootCollisionSound.mp3')
        this.load.audio('satelliteStartSound', 'game/assets/sounds/satelliteSound.mp3')
        this.load.audio('satelliteCollisionSound', 'game/assets/sounds/satelliteCollisionSound.mp3')
        this.load.audio('tornadoStartSound', 'game/assets/sounds/tornadoStartSound.mp3')
        this.load.audio('hailShootSound', 'game/assets/sounds/hailShootSound.mp3')
        this.load.audio('thunderLevelUpSound', 'game/assets/sounds/thunderLevelUp.mp3') //thunder levelup fix
        this.load.audio('coinCollectSound', 'game/assets/sounds/coinsCollectSound.mp3')
        this.load.audio('playerMoveSound', 'game/assets/sounds/playerMoveSound.mp3')
        this.load.audio('playerCollectHP', 'game/assets/sounds/collectHP.mp3')
        this.load.audio('levelUpSound', 'game/assets/sounds/levelUpSound.mp3')
        this.load.audio('gameBGSound', 'game/assets/sounds/gameBGSound.mp3')
        this.load.audio('levelStartSound', 'game/assets/sounds/onLevelStartSound.mp3')
        this.load.audio('openChestSound', 'game/assets/sounds/openChestSound.mp3')


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
        this.load.spritesheet('fireAnims_2', 'game/assets/images//spellsSheets/firebals_2.png', {
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
        //tornado_2
        this.load.spritesheet('tornadoAnims_2', 'game/assets/images/spellsSheets/sheet_tornado_2.png', {
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
        //enemy normal mid
        this.load.spritesheet('sheet_enemy_midNormal_1', 'game/assets/images/enemiesSheets/sheet_enemy_midNormal_1.png', {
            frameWidth: 48, // ширина одного кадра
            frameHeight: 48 // высота одного кадра
        });
        //enemy fast mid
        this.load.spritesheet('sheet_enemy_midFast_1', 'game/assets/images/enemiesSheets/sheet_enemy_midFast_1.png', {
            frameWidth: 24, // ширина одного кадра
            frameHeight: 24 // высота одного кадра
        });//enemy tank mid
        this.load.spritesheet('sheet_enemy_midTank_1', 'game/assets/images/enemiesSheets/sheet_enemy_midTank_1.png', {
            frameWidth: 64, // ширина одного кадра
            frameHeight: 64 // высота одного кадра
        });
        //enemy boss mid
        this.load.spritesheet('sheet_enemy_midBoss_1', 'game/assets/images/enemiesSheets/sheet_enemy_midBoss_1.png', {
            frameWidth: 240, // ширина одного кадра
            frameHeight: 240 // высота одного кадра
        });
        //coins
        this.load.spritesheet('coins_bot_sheet', 'game/assets/images/coins/coin_sheet_bot.png', {
            frameWidth: 16, // ширина одного кадра
            frameHeight: 16 // высота одного кадра
        });
        this.load.spritesheet('coins_mid_sheet', 'game/assets/images/coins/coin_sheet_mid.png', {
            frameWidth: 16, // ширина одного кадра
            frameHeight: 16 // высота одного кадра
        });
        this.load.spritesheet('coins_top_sheet', 'game/assets/images/coins/coin_sheet_top.png', {
            frameWidth: 16, // ширина одного кадра
            frameHeight: 16 // высота одного кадра
        });



        this.load.image('background_1', 'game/assets/images/BG/1.png');
        this.load.image('background_2', 'game/assets/images/BG/2.png');
        this.load.image('background_3', 'game/assets/images/BG/3.png');
        this.load.image('background_4', 'game/assets/images/BG/4.png');
        this.load.image('background_5', 'game/assets/images/BG/5.png');
        this.load.image('background_6', 'game/assets/images/BG/6.png');

        this.load.image('background_7', 'game/assets/images/BG/7.png');

        this.load.image("vignette", "game/assets/images/lowHPVignette/Lucid_Origin_dark_red_vignette_overlay_with_soft_glowing_edges_2.jpg");

        this.load.image('coin', 'game/assets/images/coins/coin.png')

        this.load.image('chest', 'game/assets/images/chest_2.png')
        this.load.image('healthPack', 'game/assets/images/flask_2.png')
        this.load.image('levelUp', 'game/assets/images/levelUpEffect/levelUp.png')
        this.load.image(`splashRed`, `game/assets/images/enemiesSheets/afterEnemy/splashRed.png`);

    }

    create() {
        // После загрузки — переход в меню
        this.scene.start('MenuScene');
    }
}