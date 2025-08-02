import levels from "../levelsConfigs.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

export default class UpgradeForExpScene extends Phaser.Scene {
    constructor() {
        super("UpgradeForExpScene");
    }

    init(data) {
        this.gameScene = data.scene
        this.onSelect = data.onSelect; // callback
        this.upgrades = data.upgrades; // массив из 3-х апгрейдов
    }

    create() {
        const hud = getHUD()
        this.cameras.main.setBackgroundColor("#000000");

        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        const cardWidth = 200;
        const cardHeight = 250;
        const spacing = 240;

        this.onTapSfx = this.sound.add('onTapSound', { volume: 0.1 });

        this.onHoverSfx = this.sound.add('hoverSound', { volume: 0.1 });

        this.upgrades = playerSkills.getRandomUpgrades(this)



        this.upgrades.forEach((upgrade, index) => {
            const x = centerX + (index - 1) * spacing;
            const y = centerY;

            // Карточка (фон)
            const card = this.add.rectangle(x, y, cardWidth, cardHeight, 0x222222)
                .setStrokeStyle(2, 0xff6600)
                .setInteractive();

            if (upgrade.level >= levels[this.registry.get('currentLevel')].levelConfigs.MaxUpgradeLevelSkills) {
                card.fillColor = 0x32222
                // Название
                this.add.text(x, y - 100, upgrade.name, {
                    fontSize: "20px",
                    color: "#fff"
                }).setOrigin(0.5);

                // Картинка
                this.add.image(x, y - 40, upgrade.icon).setScale(1.5);
                // Уровень
                this.add.text(x, y + 30, `Level: MAX`, {
                    fontSize: "16px",
                    color: "#ccc"
                }).setOrigin(0.5);
                // Описание
                this.add.text(x, y + 60, upgrade.description, {
                    fontSize: "14px",
                    color: "#aaa",
                    wordWrap: { width: cardWidth - 20 }
                }).setOrigin(0.5);
            } else {
                // Название
                this.add.text(x, y - 100, upgrade.name, {
                    fontSize: "20px",
                    color: "#fff"
                }).setOrigin(0.5);
                //Уровень
                this.add.text(x, y + 30, `Level: ${upgrade.level}`, {
                    fontSize: "16px",
                    color: "#ccc"
                }).setOrigin(0.5);
                // Картинка
                this.add.image(x, y - 40, upgrade.icon).setScale(1.5);

                // Описание
                this.add.text(x, y + 60, upgrade.description, {
                    fontSize: "14px",
                    color: "#aaa",
                    wordWrap: { width: cardWidth - 20 }
                }).setOrigin(0.5);

                // Клик
                card.on("pointerdown", () => {
                    console.log(upgrade.name);
                    this.onTapSfx.play();
                    this.onSelect(upgrade);
                    this.scene.stop();
                    this.scene.resume("GameScene");

                });
                card.on('pointerover', () => {

                    card.setStrokeStyle(2, 0xff0000);
                    this.onHoverSfx.play();
                })
                card.on('pointerout', () => {

                    card.setStrokeStyle(2, 0xff6600);
                    this.onHoverSfx.play();
                })
            }

        });
        this.backText = this.add.text(centerX, centerY + 230, `back`, {
            fontSize: "16px",
            color: "#f60"
        }).setOrigin(0.5).setInteractive()
        this.backText.on('pointerdown', () => {

            this.onTapSfx.play();

            hud.clearExp()
            this.scene.stop();
            this.scene.resume("GameScene");
        })
        this.backText.on('pointerover', () => {

            this.onHoverSfx.play();
            this.backText.setColor('#ff0000');
        })
        this.backText.on('pointerout', () => {

            this.onHoverSfx.play();
            this.backText.setColor('#ff6600');
            this.backText.setDepth(3)
        })
    }
}

