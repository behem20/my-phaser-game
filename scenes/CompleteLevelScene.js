
import { setLanguage, t } from "../LanguageManager.js";
import UIManager from "../ui/UIManager.js";
import saveManager from "../utils/SaveManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

export default class CompleteLevelScene extends Phaser.Scene {
    constructor() {
        super('CompleteLevelScene')
    }
    preload() {

    }
    create(data) {
        this.ui = new UIManager(this);
        this.scale.on('resize', this.ui.resize, this.ui);

        const ch = this.cameras.main.height
        const cw = this.cameras.main.width
        if (window.game.ysdk?.features?.GameplayAPI) window.game.ysdk.features.GameplayAPI.stop();
        data.scene.playerMoveSfx.stop()


        const completedList = this.registry.get('completedLevelsList')
        completedList[this.registry.get('currentLevel')] = 1
        this.registry.set('completedLevelsList', completedList)


        const { coins = 0 } = data;
        const { score = 0 } = data;
        const level = this.registry.get('currentLevel') + 1
        const finalScore = Math.trunc(score * level + coins * 0.2 * level)
        this.registry.set('scoreCount', this.registry.get('scoreCount') + finalScore)

        const goldAmount = Math.trunc(coins);

        const gemAmount = Math.trunc(coins * Phaser.Math.FloatBetween(0.44, 0.55));


        this.onTapSfx = this.sound.add('onTapSound', { volume: 0.1 });
        this.onHoverSfx = this.sound.add('hoverSound', { volume: 0.1 });


        this.ui.createRectangle(
            { xPercent: 0, yPercent: 0, widthPercent: 1, heightPercent: 1 },
            0x000000, 0.9)
            .setOrigin(0)
            .setScrollFactor(0);

        this.ui.createText(
            t('messages.levelCompleted'),
            { xPercent: 0.5, yPercent: 0.19, fontPercent: 0.06 },
            {
                fontSize: "48px",
                fill: "#15ff00ff"
            }).setOrigin(0.5);

        this.ui.createText(
            `${t('game.score')} ${finalScore}`,
            { xPercent: 0.5, yPercent: 0.25, fontPercent: 0.035 }, {
            fontSize: "28px",
            fill: "#f57f10ff"
        }).setOrigin(0.5);

        //   console.log((goldTextBg.x + goldTextBg.width / 2) / cw);
        // console.log((goldTextBg.y + goldTextBg.height * 0.8) / ch);//54 415

        const goldTextBg = this.ui.createRectangle({ xPercent: 0.38, yPercent: 0.36, widthPercent: 0.093, heightPercent: 0.22 }, 0xffbb00, 0.05).setOrigin(0).setStrokeStyle(2, 0xeecc00);


        const goldText = this.ui.createText(
            goldAmount,
            { xPercent: 0.426, yPercent: 0.536, fontPercent: 0.028, },
            {
                fontSize: "24px",
                fill: "rgba(238, 194, 0, 1)"
            }).setOrigin(0.5);


        const goldIcon = this.ui.createImage(
            'gold',
            { xPercent: 0.426, yPercent: 0.415 }
        ).setScale(0.35).setOrigin(0.5)

        const gemsTextBg = this.ui.createRectangle({ xPercent: 0.5, yPercent: 0.36, widthPercent: 0.093, heightPercent: 0.22 }, 0x00bbff, 0.05).setOrigin(0).setStrokeStyle(2, 0x337799);
        const gemsText = this.ui.createText(
            gemAmount,
            { xPercent: 0.545, yPercent: 0.536, fontPercent: 0.028, },
            {
                fontSize: "24px",
                fill: "rgba(92, 192, 209, 1)"
            }).setOrigin(0.5);

        const gemsIcon = this.ui.createImage(
            'gem',
            { xPercent: 0.545, yPercent: 0.415 },
        ).setScale(0.35).setOrigin(0.5)

        const menuBtn = this.ui.createText(
            t('ui.continue'),

            { xPercent: 0.5, yPercent: 0.7, fontPercent: 0.05 }, {
            fontSize: "46px",
            fill: "rgba(255, 38, 0, 1)",
            backgroundColor: "#333",
            padding: { x: 10, y: 5 }
        }).setInteractive().setOrigin(0.5);

        menuBtn.on("pointerdown", () => {
            this.registry.set('goldCount', this.registry.get('goldCount') + goldAmount)
            this.registry.set('gemCount', this.registry.get('gemCount') + gemAmount)
            saveManager.save(this)
            this.onTapSfx.play();

            this.scene.stop();                  // Закрыть GameOver
            this.scene.stop("GameScene");      // Закрыть игру
            this.scene.start("MenuScene");     // Перейти в меню
        });
        menuBtn.on("pointerover", () => {
            this.onHoverSfx.play()
            menuBtn.setScale(1.1)
        });
        menuBtn.on("pointerout", () => {
            menuBtn.setScale(1)
        });

        // const infoBtn = this.add.text(this.cameras.main.centerX, 640, t('ui.info'), {
        //     fontSize: "24px",
        //     fill: "rgba(255, 38, 0, 1)",
        //     backgroundColor: "#333",
        //     padding: { x: 10, y: 5 }
        // }).setInteractive().setOrigin(0.5);

        // infoBtn.on("pointerdown", () => {
        //     this.onTapSfx.play();
        //     // this.scene.stop();                  // Закрыть GameOver
        //     // this.scene.stop("GameScene");      // Сбросить GameScene
        //     // this.scene.start("GameScene");     // Запустить заново
        // });
        // infoBtn.on("pointerover", () => {
        //     this.onHoverSfx.play()
        //     infoBtn.setScale(1.1)
        // });
        // infoBtn.on("pointerout", () => {

        //     infoBtn.setScale(1)
        // });

        let toggle = false;
        this.time.addEvent({
            delay: 500,
            callback: () => {
                toggle = !toggle;
                menuBtn.setStyle({
                    backgroundColor: toggle ? '#3333332d' : 'rgba(51, 51, 17, 0.14)',
                });
                // infoBtn.setStyle({
                //     backgroundColor: toggle ? '#33333325' : 'rgba(51, 51, 17, 0.12)',
                // });

            },
            callbackScope: this,
            loop: true
        });


        // playerSkills.resetSkills()

        // this.registry.set('currentLevel', this.registry.get('currentLevel') + 1)
    }
    update() {

    }






}