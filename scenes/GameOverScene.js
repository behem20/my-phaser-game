import levels from "../levelsConfigs.js";
import { playerSkills } from "../utils/upgradesManager.js";

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super("GameOverScene");
    }

    create(data) {
        const { score = 0 } = data;



        // Полупрозрачный фон
        this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0x000000, 0.6)
            .setOrigin(0)
            .setScrollFactor(0);

        this.add.text(this.cameras.main.centerX, 180, "GAME OVER", {
            fontSize: "48px",
            fill: "#fff"
        }).setOrigin(0.5);

        this.add.text(this.cameras.main.centerX, 240, `Score: ${score}`, {
            fontSize: "28px",
            fill: "#fff"
        }).setOrigin(0.5);

        const restartBtn = this.add.text(this.cameras.main.centerX, 320, "Restart", {
            fontSize: "24px",
            fill: "#0f0",
            backgroundColor: "#333",
            padding: { x: 10, y: 5 }
        }).setInteractive().setOrigin(0.5);

        restartBtn.on("pointerdown", () => {
            this.scene.stop();                  // Закрыть GameOver
            this.scene.stop("GameScene");      // Сбросить GameScene
            playerSkills.resetSkills()
            levels[this.registry.get('currentLevel')].levelConfigs.upgradeLevel = 1;
            this.scene.start("GameScene");     // Запустить заново
        });

        const menuBtn = this.add.text(this.cameras.main.centerX, 370, "To Menu", {
            fontSize: "24px",
            fill: "#0f0",
            backgroundColor: "#333",
            padding: { x: 10, y: 5 }
        }).setInteractive().setOrigin(0.5);

        menuBtn.on("pointerdown", () => {
            playerSkills.resetSkills()
            levels[this.registry.get('currentLevel')].levelConfigs.upgradeLevel = 1;
            this.scene.stop();                  // Закрыть GameOver
            this.scene.stop("GameScene");      // Закрыть игру
            this.scene.start("MenuScene");     // Перейти в меню
        });
    }
}