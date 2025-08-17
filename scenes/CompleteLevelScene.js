
import { setLanguage, t } from "../LanguageManager.js";
export default class CompleteLevelScene extends Phaser.Scene {
    constructor() {
        super('CompleteLevelScene')
    }
    preload() {

    }
    create(data) {
        const { score = 0 } = data;

        this.onTapSfx = this.sound.add('onTapSound', { volume: 0.1 });
        // Полупрозрачный фон
        this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0x000000, 0.3)
            .setOrigin(0)
            .setScrollFactor(0);

        this.add.text(this.cameras.main.centerX, 180, t('messages.levelCompleted'), {
            fontSize: "48px",
            fill: "#fff"
        }).setOrigin(0.5);

        this.add.text(this.cameras.main.centerX, 240, `${t('game.score')} ${score}`, {
            fontSize: "28px",
            fill: "#fff"
        }).setOrigin(0.5);



        // const restartBtn = this.add.text(this.cameras.main.centerX, 320, "Restart", {
        //     fontSize: "24px",
        //     fill: "#0f0",
        //     backgroundColor: "#333",
        //     padding: { x: 10, y: 5 }
        // }).setInteractive().setOrigin(0.5);

        // restartBtn.on("pointerdown", () => {
        //     this.scene.stop();                  // Закрыть GameOver
        //     this.scene.stop("GameScene");      // Сбросить GameScene
        //     this.scene.start("GameScene");     // Запустить заново
        // });

        const menuBtn = this.add.text(this.cameras.main.centerX, 370, t('ui.continue'), {
            fontSize: "24px",
            fill: "#0f0",
            backgroundColor: "#333",
            padding: { x: 10, y: 5 }
        }).setInteractive().setOrigin(0.5);

        menuBtn.on("pointerdown", () => {
            this.onTapSfx.play();
            this.scene.stop();                  // Закрыть GameOver
            this.scene.stop("GameScene");      // Закрыть игру
            this.scene.start("MenuScene");     // Перейти в меню
        });

        const infoBtn = this.add.text(this.cameras.main.centerX, 440, t('ui.info'), {
            fontSize: "24px",
            fill: "#0f0",
            backgroundColor: "#333",
            padding: { x: 10, y: 5 }
        }).setInteractive().setOrigin(0.5);

        infoBtn.on("pointerdown", () => {
            this.onTapSfx.play();
            // this.scene.stop();                  // Закрыть GameOver
            // this.scene.stop("GameScene");      // Сбросить GameScene
            // this.scene.start("GameScene");     // Запустить заново
        });

        let toggle = false;
        this.time.addEvent({
            delay: 500,
            callback: () => {
                toggle = !toggle;
                menuBtn.setStyle({
                    backgroundColor: toggle ? '#333' : '#331',
                });
                infoBtn.setStyle({
                    backgroundColor: toggle ? '#333' : '#331',
                });

            },
            callbackScope: this,
            loop: true
        });

        this.registry.set('currentLevel', this.registry.get('currentLevel') + 1)
    }
    update() {

    }






}