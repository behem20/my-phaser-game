import { t } from "../LanguageManager.js";
import saveManager from "../utils/SaveManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super("GameOverScene");
    }

    create(data) {

        const { coins = 0 } = data;
        console.log(coins);
        
        const goldAmount = Math.trunc(coins);
        const gemAmount =  Math.trunc(coins * Phaser.Math.FloatBetween(0.44, 0.55));

        this.onHoverSfx = this.sound.add('hoverSound', { volume: 0.1 });
        data.scene.playerMoveSfx.stop()
data.scene.gameBGSoundSfx.stop()
data.scene.satelliteStartSoundSfx.stop()

        // Полупрозрачный фон
        this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0x000000, 0.7)
            .setOrigin(0)
            .setScrollFactor(0);

        this.add.text(this.cameras.main.centerX, 180, t('messages.gameOver'), {
            fontSize: "48px",
            fill: "#f80101ff"
        }).setOrigin(0.5);

        this.add.text(this.cameras.main.centerX, 240, `${t('game.score')} ${coins}`, {
            fontSize: "28px",
            fill: "#f57f10ff"
        }).setOrigin(0.5);

        const goldTextBg = this.add.rectangle(this.cameras.main.centerX - 180, this.cameras.main.centerY - 130, 150, 210, 0xffbb00, 0.05).setOrigin(0).setStrokeStyle(2, 0xeecc00);
        const goldText = this.add.text(goldTextBg.x + goldTextBg.width / 2,
            goldTextBg.y + goldTextBg.height * 0.8, goldAmount, {
            fontSize: "24px",
            fill: "rgba(238, 194, 0, 1)"
        }).setOrigin(0.5);
        const goldIcon = this.add.image(goldTextBg.x + goldTextBg.width / 2,
            goldTextBg.y + goldTextBg.height / 4, 'gold').setScale(0.35).setOrigin(0.5)

        const gemsTextBg = this.add.rectangle(this.cameras.main.centerX, this.cameras.main.centerY - 130, 150, 210, 0x00bbff, 0.05).setOrigin(0).setStrokeStyle(2, 0x337799);
        const gemsText = this.add.text(gemsTextBg.x + gemsTextBg.width / 2, gemsTextBg.y + gemsTextBg.height * 0.8, gemAmount, {
            fontSize: "24px",
            fill: "rgba(92, 192, 209, 1)"
        }).setOrigin(0.5);
        const gemsIcon = this.add.image(gemsTextBg.x + gemsTextBg.width / 2, gemsTextBg.y + gemsTextBg.height / 4, 'gem').setScale(0.35).setOrigin(0.5)



        const menuBtn = this.add.text(this.cameras.main.centerX, 620, t('ui.exit'), {
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