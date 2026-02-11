
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";
import { setLanguage, t } from "../LanguageManager.js";
import SkillsUI from "../ui/skillsUI.js";
import UIManager from "../ui/UIManager.js";

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

        this.ui = new UIManager(this);
        this.scale.on('resize', this.ui.resize, this.ui);
        const cw = this.cameras.main.width
        const ch = this.cameras.main.height
        const hud = getHUD()
        // this.cameras.main.setBackgroundColor("#000000");
        this.bgOverlay = this.ui.createRectangle(
            { xPercent: 0, yPercent: 0, widthPercent: 1, heightPercent: 1 },
            0x000000, 0.9
        )
            // .fillStyle(0x000000, 0.9) // 0.5 = прозрачность
            // .fillRect(0, 0, this.scale.width, this.scale.height)
            .setOrigin(0)
            .setScrollFactor(0) // фиксируем к экрану
            .setDepth(-10);     // позади всего

        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        const cardWidth = cw * 0.12;
        const cardHeight = ch * 0.27;
        const spacing = 0.30;

        const stepSound = this.gameScene.sound.get("playerMoveSound");//steps sound off
        if (stepSound) { stepSound.stop(); }

        this.onTapSfx = this.sound.add('onTapSound', { volume: 0.1 });

        this.onHoverSfx = this.sound.add('hoverSound', { volume: 0.1 });

        this.upgrades = playerSkills.getRandomUpgrades(this)


        // console.log((centerY) / cw);

        this.upgrades.forEach((upgrade, index) => {
            const x = 0.5 + (index - 1) * spacing;
            const y = 0.5;

            // Карточка (фон)


            if (upgrade.level >= this.gameScene.level.currentLevel.levelConfigs.MaxUpgradeLevelSkills - 1) {
                const card = this.ui.createRectangle(
                    { xPercent: x, yPercent: y, widthPercent: 0.19, heightPercent: 0.41 },
                    0x32222, 1)
                    .setStrokeStyle(2, 0xff6600)
                    .setInteractive();

                card.fillColor = 0x320222
                card.setStrokeStyle(5, 0xff6600)
                // Название
                this.ui.createText(
                    t(upgrade.name),
                    { xPercent: x, yPercent: 0.35, fontPercent: 0.036, },
                    { fontSize: "20px", color: "#fbff00ff", wordWrap: { width: cardWidth - 20 } })
                    .setOrigin(0.5);


                // Картинка
                // this.add.image(x, y - 40, upgrade.icon).setScale(1.5);
                this.ui.createImage(
                    upgrade.icon,
                    { xPercent: x, yPercent: 0.45, },
                    0.1
                )
                // Уровень
                // this.add.text(x, y + 30, `${t('game.level')}: ${t('game.max')}`, {
                //     fontSize: "16px",
                //     color: "#ccc"
                // }).setOrigin(0.5);
                this.ui.createText(
                    `${t('game.level')}: ${t('game.max')}`,
                    { xPercent: x, yPercent: 0.55, fontPercent: 0.03, },
                    { fontSize: "16px", color: "#ff0095ff", }).setOrigin(0.5);

                // Описание
                // this.add.text(x, y + 60, t(upgrade.description), {
                //     fontSize: "14px",
                //     color: "#aaa",
                //     wordWrap: { width: cardWidth - 20 }
                // }).setOrigin(0.5);
                this.ui.createText(
                    t(upgrade.description),
                    { xPercent: x, yPercent: 0.6, fontPercent: 0.024, },
                    { fontSize: "14px", color: "#3cff00ff", })
                    .setOrigin(0.5);

                card.on("pointerdown", () => {


                    playerSkills.upgradePointsCount++;
                    this.onTapSfx.play();
                    this.onSelect(upgrade);


                    this.scene.stop();
                    this.scene.resume("GameScene");

                });
                card.on('pointerover', () => {

                    card.setStrokeStyle(5, 0xff0000);
                    this.onHoverSfx.play();
                })
                card.on('pointerout', () => {

                    card.setStrokeStyle(5, 0xff6600);

                    this.onHoverSfx.play();
                })
            } else {
                const card = this.ui.createRectangle(
                    { xPercent: x, yPercent: y, widthPercent: 0.27, heightPercent: 0.37 },
                    0x32222, 1)
                    .setStrokeStyle(2, 0xff6600)
                    .setInteractive();

                // Название
                this.ui.createText(
                    t(upgrade.name),
                    { xPercent: x, yPercent: 0.35, fontPercent: 0.02, },
                    { fontSize: "20px", color: "#ffffffff", wordWrap: { width: card.width - 20 }, align: 'center' })
                    .setOrigin(0.5);

                //Уровень
                this.ui.createText(
                    upgrade.level !== 1 ? `${t('game.level')} ${upgrade.level}` : t('messages.getNewSkill'),
                    { xPercent: x, yPercent: 0.55, fontPercent: 0.016, },
                    { fontSize: "16px", color: "#ccc", wordWrap: { width: card.width - 5, useAdvancedWrap: true } }).setOrigin(0.5);
                // Картинка
                this.ui.createImage(
                    upgrade.icon,
                    { xPercent: x, yPercent: 0.45, },
                    0.2
                )


                // Описание
                this.ui.createText(
                    t(upgrade.description),
                    { xPercent: x, yPercent: 0.75, fontPercent: 0.013, },
                    {
                        fontSize: "14px", color: "#aaa",

                        fixedWidth: card.width,
                        fixedHeight: card.height,
                        wordWrap: { width: card.width - 20, useAdvancedWrap: true },
                        align: 'center',
                        boundsAlignH: 'center',
                        boundsAlignV: 'middle',
                        padding: 10,
                        lineSpacing: 4
                    })
                    .setOrigin(0.5);

                // Клик
                card.on("pointerdown", () => {

                    playerSkills.upgradePointsCount++;
                    this.onTapSfx.play();
                    this.onSelect(upgrade);


                    this.gameScene.skillsUI.destroy();//
                    const nameOfNewSkill = upgrade.name.split(".")[1]
                    const addNewActiveSkill = this.registry.get('activeSkills')
                    if (!addNewActiveSkill.includes(nameOfNewSkill)) {    //skills icons in game
                        addNewActiveSkill.push(nameOfNewSkill)
                        this.registry.set('activeSkills', addNewActiveSkill);
                    }
                    this.gameScene.skillsUI = new SkillsUI(this.gameScene, this.registry.get('activeSkills'))//

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
        this.chooseSkillText = this.ui.createText(
            t(`messages.chooseSkill`),
            { xPercent: 0.5, yPercent: 0.261, fontPercent: 0.06 },
            {
                fontSize: "42px",
                color: "rgba(255, 116, 24, 1)"
            }).setOrigin(0.5)


        this.levelText = this.ui.createText(
            `${t(`game.level`)} ${this.gameScene.level.currentLevel.levelConfigs.levelUpPointsCount}`,
            { xPercent: 0.5, yPercent: 0.20, fontPercent: 0.04 },
            {
                fontSize: "24px",
                color: "rgba(255, 0, 0, 1)"
            }).setOrigin(0.5)
        this.backText = this.ui.createText(
            t(`ui.back`),
            { xPercent: 0.5, yPercent: 0.75, fontPercent: 0.03 },
            {
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

