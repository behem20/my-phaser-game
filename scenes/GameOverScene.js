import { t } from "../LanguageManager.js";
import UIManager from "../ui/UIManager.js";
import saveManager from "../utils/SaveManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super("GameOverScene");
    }

    create(data) {
        this.ui = new UIManager(this);
        this.scale.on('resize', this.ui.resize, this.ui);

        const ch = this.cameras.main.height
        const cw = this.cameras.main.width

        if (window.game.ysdk?.features?.GameplayAPI) window.game.ysdk.features.GameplayAPI.stop();

        const { coins = 0 } = data;
        const { score = 0 } = data;

        const level = this.registry.get('currentLevel') + 1
        const finalScore = Math.trunc(score * level + coins * 10.2 * level)

        this.registry.set('scoreCount', this.registry.get('scoreCount') + finalScore)

        const goldAmount = Math.trunc(coins);
        const gemAmount = Math.trunc(coins * Phaser.Math.FloatBetween(0.44, 0.55));

        this.onHoverSfx = this.sound.add('hoverSound', { volume: 0.1 });
        data.scene.playerMoveSfx.stop()
        data.scene.gameBGSoundSfx.stop()
        data.scene.satelliteStartSoundSfx.stop()

        // Полупрозрачный фон
        this.ui.createRectangle
            ({ xPercent: 0, yPercent: 0, widthPercent: 1, heightPercent: 1 },
                0x000000, 0.7)
            .setOrigin(0)
            .setScrollFactor(0);

        this.ui.createText(
            t('messages.gameOver'),
            { xPercent: 0.5, yPercent: 0.19, fontPercent: 0.06 },
            {
                fontSize: "48px",
                fill: "#f80101ff"
            }).setOrigin(0.5);



        this.ui.createText(
            `${t('game.score')} ${finalScore}`,
            { xPercent: 0.5, yPercent: 0.3, fontPercent: 0.035 }, {
            fontSize: "28px",
            fill: "#f57f10ff"
        }).setOrigin(0.5);

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
            t('ui.exit'),
            { xPercent: 0.5, yPercent: 0.7, fontPercent: 0.05 },
            {
                fontSize: "46px",
                backgroundColor: "#302d2d23",
                fill: "rgba(231, 40, 40, 1)",

                padding: { x: 10, y: 5 }
            }).setInteractive().setOrigin(0.5);

        menuBtn.on("pointerdown", () => {
            data.scene.onTapSfx.play()
            this.registry.set('goldCount', this.registry.get('goldCount') + goldAmount)
            this.registry.set('gemCount', this.registry.get('gemCount') + gemAmount)
            saveManager.save(this)
            // playerSkills.resetSkills()
            // resetLevels(levels)
            data.scene.levels[this.registry.get('currentLevel')].levelConfigs.coefficientToUpgradeLevel = 1;
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
    }
}