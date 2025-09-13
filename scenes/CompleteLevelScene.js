
import { setLanguage, t } from "../LanguageManager.js";
import saveManager from "../utils/SaveManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

export default class CompleteLevelScene extends Phaser.Scene {
    constructor() {
        super('CompleteLevelScene')
    }
    preload() {

    }
    create(data) {
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

        // Полупрозрачный фон
        this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0x000000, 0.9)
            .setOrigin(0)
            .setScrollFactor(0);

        this.add.text(this.cameras.main.centerX, 180, t('messages.levelCompleted'), {
            fontSize: "48px",
            fill: "#fff"
        }).setOrigin(0.5);

        this.add.text(this.cameras.main.centerX, 240, `${t('game.score')} ${finalScore}`, {
            fontSize: "28px",
            fill: "#ff9a03ff"
        }).setOrigin(0.5);


        const goldTextBg = this.add.rectangle(this.cameras.main.centerX - 180, this.cameras.main.centerY - 120, 150, 210, 0xffbb00, 0.05).setOrigin(0).setStrokeStyle(2, 0xeecc00);
        const goldText = this.add.text(goldTextBg.x + goldTextBg.width / 2,
            goldTextBg.y + goldTextBg.height * 0.8, goldAmount, {
            fontSize: "24px",
            fill: "rgba(238, 194, 0, 1)"
        }).setOrigin(0.5);
        const goldIcon = this.add.image(goldTextBg.x + goldTextBg.width / 2,
            goldTextBg.y + goldTextBg.height / 4, 'gold').setScale(0.35).setOrigin(0.5)

        const gemsTextBg = this.add.rectangle(this.cameras.main.centerX, this.cameras.main.centerY - 120, 150, 210, 0x00bbff, 0.05).setOrigin(0).setStrokeStyle(2, 0x337799);
        const gemsText = this.add.text(gemsTextBg.x + gemsTextBg.width / 2, gemsTextBg.y + gemsTextBg.height * 0.8, gemAmount, {
            fontSize: "24px",
            fill: "rgba(92, 192, 209, 1)"
        }).setOrigin(0.5);
        const gemsIcon = this.add.image(gemsTextBg.x + gemsTextBg.width / 2, gemsTextBg.y + gemsTextBg.height / 4, 'gem').setScale(0.35).setOrigin(0.5)



        const menuBtn = this.add.text(this.cameras.main.centerX, 570, t('ui.continue'), {
            fontSize: "24px",
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

        const infoBtn = this.add.text(this.cameras.main.centerX, 640, t('ui.info'), {
            fontSize: "24px",
            fill: "rgba(255, 38, 0, 1)",
            backgroundColor: "#333",
            padding: { x: 10, y: 5 }
        }).setInteractive().setOrigin(0.5);

        infoBtn.on("pointerdown", () => {
            this.onTapSfx.play();
            // this.scene.stop();                  // Закрыть GameOver
            // this.scene.stop("GameScene");      // Сбросить GameScene
            // this.scene.start("GameScene");     // Запустить заново
        });
        infoBtn.on("pointerover", () => {
            this.onHoverSfx.play()
            infoBtn.setScale(1.1)
        });
        infoBtn.on("pointerout", () => {

            infoBtn.setScale(1)
        });

        let toggle = false;
        this.time.addEvent({
            delay: 500,
            callback: () => {
                toggle = !toggle;
                menuBtn.setStyle({
                    backgroundColor: toggle ? '#3333332d' : 'rgba(51, 51, 17, 0.14)',
                });
                infoBtn.setStyle({
                    backgroundColor: toggle ? '#33333325' : 'rgba(51, 51, 17, 0.12)',
                });

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