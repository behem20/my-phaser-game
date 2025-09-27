
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";
import { setLanguage, t } from "../LanguageManager.js";
import { playerItems } from "../utils/itemsManager.js";
import UIManager from "../ui/UIManager.js";

export default class InChestScene extends Phaser.Scene {
    constructor() {
        super("InChestScene");
    }

    init(data) {
        this.gameScene = data.scene
        this.onSelect = data.onSelect; // callback
        this.items = data.items; // массив из 3-х апгрейдов


    }

    create() {
        this.ui = new UIManager(this);
        this.scale.on('resize', this.ui.resize, this.ui);
        const RARITY_COLORS_0x = {
            common: '0xb0b0b0',     // серый
            uncommon: '0x2ecc71',   // зелёный
            rare: '0x3498db',       // синий
            epic: '0xe22121',       // фиолетовый
            legendary: '0xf1c40f'   // золотой
        };
        const RARITY_COLORS = {
            common: '#b0b0b0',     // серый
            uncommon: '#2ecc71',   // зелёный
            rare: '#3498db',       // синий
            epic: '#e22121ff',       // фиолетовый
            legendary: '#f1c40f'   // золотой
        };

        const hud = getHUD()
        this.isSpellSelected = 0;
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
        const cw = this.cameras.main.width
        const ch = this.cameras.main.height
        const cardWidth = 200;
        const cardHeight = 250;
        const spacing = 0.15;
        this.ActiveCard = null;

        const stepSound = this.gameScene.sound.get("playerMoveSound");//steps sound off
        if (stepSound) { stepSound.stop(); }

        this.onTapSfx = this.sound.add('onTapSound', { volume: 0.1 });

        this.onHoverSfx = this.sound.add('hoverSound', { volume: 0.1 });

        this.items = playerItems.getRandomItems()

        //10 45 20 55
        //centerX, centerY-centerY/100*90, 780, 730
        //centerX, centerY - centerY / 100 * 88, 760, 710
        // console.log(780 / 800);

        const chestInnerBG = this.ui.createRectangle(
            { xPercent: 0.5, yPercent: 0.5, widthPercent: 0.9125, heightPercent: 0.875 }, 0x000000, 1)
            // .setOrigin(0.5, 0)
            .setDepth(-1)
            .setScrollFactor(0);
        chestInnerBG.setStrokeStyle(4, 0x5C270B)
        const chestBG = this.ui.createRectangle(
            {
                xPercent: 0.5, yPercent: 0.5, widthPercent: 0.9, heightPercent: 0.85
            }, 0x000000, 1)
            // .setOrigin(0.5,0.5)
            .setDepth(0)
            .setScrollFactor(0);
        chestBG.setStrokeStyle(2, 0x5C270B)


        //  const cardWidth = 200;
        // const cardHeight = 250;
        // console.log(200 / cw);
        // console.log(250 / ch); //10  26

        //720 362.5 
        //960 362.5
        //1200 362.5
        const cards = []
        this.items.forEach((item, index) => {
            const x = 0.5 + (index - 1) * spacing;
            const y = 0.4;

            // console.log(x, y);

            // Карточка (фон)
            const card = this.ui.createRectangle(
                { xPercent: x, yPercent: y, widthPercent: 0.12, heightPercent: 0.34 },
                0x000000, 1
            )


                .setStrokeStyle(2, RARITY_COLORS_0x[item.rank])
                .setInteractive();

            this.ui.createImage(
                item.icon,
                { xPercent: x, yPercent: y }, 0.3
            )
            // this.add.text(x, y - 100, t(item.name), {
            //     fontSize: "20px",
            //     color: "#fff"
            // }).setOrigin(0.5);

            card.on("pointerdown", () => {
                this.isSpellSelected = 1;
                cards.forEach(item => item.setScale(1))
                card.setScale(1.2)
                this.onTapSfx.play();
                this.chooseText.destroy()
                if (this.ActiveCardName) { this.ActiveCardName.destroy() }
                if (this.ActiveCardRank) { this.ActiveCardRank.destroy() }
                if (this.ActiveCardDescription) { this.ActiveCardDescription.destroy() }
                this.ActiveCard = item

                this.ActiveCardName = this.ui.createText(
                    t(`items.${this.ActiveCard.name}`),
                    { xPercent: 0.5, yPercent: 0.65, fontPercent: 0.036, },
                    {
                        fontSize: "42px",
                        color: "#ffffffff"
                    }).setOrigin(0.5)

                this.getText.setColor('#ffffffff')

                this.ActiveCardRank = this.ui.createText(
                    `${t(`itemsRank.${this.ActiveCard.rank}`)} ${t('items.item')}`,

                    { xPercent: 0.5, yPercent: 0.7, fontPercent: 0.036, },
                    {
                        fontSize: "24px",
                        color: RARITY_COLORS[this.ActiveCard.rank]
                    }).setOrigin(0.5)
                this.ActiveCardRank.setBlendMode(Phaser.BlendModes.ADD);





                this.ActiveCardDescription = this.ui.createText(
                    t(this.ActiveCard.description),
                    { xPercent: 0.5, yPercent: 0.75 }, {
                    fontSize: "24px",
                    color: "#2af318ff"
                }).setOrigin(0.5);
                // console.log(this.ActiveCardDescription);

                




            });
            card.on('pointerover', () => {
                // card.setStrokeStyle(2, 0xaaaaaa)
                if (this.ActiveCard == item) { }
                else {
                    card.setScale(1.05)
                }
                this.onHoverSfx.play();
            })
            card.on('pointerout', () => {
                if (this.ActiveCard !== item)
                    card.setScale(1)
                // card.setStrokeStyle(2, 0x555555);

                this.onHoverSfx.play();
            })
            cards.push(card)


        });


        this.sceneTitle = this.ui.createText(
            t(`game.chestTitle`),
            { xPercent: 0.5, yPercent: 0.15, fontPercent: 0.06 },
            {
                fontSize: "42px",
                color: "#f0cd6dff"
            }).setOrigin(0.5)

        this.chooseText = this.ui.createText(
            t(`game.chooseChest`),

            { xPercent: 0.5, yPercent: 0.65, fontPercent: 0.04 },
            {
                fontSize: "24px",
                color: "#f0cd6dff"
            }).setOrigin(0.5).setInteractive()
        this.getTextButton = this.ui.createRectangle(
            { xPercent: 0.5, yPercent: 0.85, widthPercent: 0.3, heightPercent: 0.06 },
            0xffffff, 0.05)
            .setInteractive().setDepth(2);
        this.getTextButton.on('pointerdown', () => {
            this.onTapSfx.play();
            if (this.ActiveCard) {
                this.onSelect(this.ActiveCard); //pravki
                this.scene.stop();
                this.scene.resume("GameScene");
            } else return

        })
        this.getTextButton.on('pointerover', () => {

            if (this.ActiveCard) {
                this.onHoverSfx.play();
                this.getText.setColor('#eeddddff');
                this.getText.setScale(1.1)
                this.getTextButton.setStrokeStyle(3, 0xeed755)
            }
        })
        this.getTextButton.on('pointerout', () => {

            if (this.ActiveCard) {
                this.onHoverSfx.play();
                this.getText.setColor('#948a83ff');
                this.getText.setScale(1)
                this.getTextButton.setStrokeStyle()
            }

        })
        this.getText = this.ui.createText(
            t(`ui.get`),
            { xPercent: 0.5, yPercent: 0.85, fontPercent: 0.04 },
            {
                fontSize: "16px",
                color: "#948a83ff"
            }).setOrigin(0.5).setInteractive().setDepth(this.getTextButton.depth - 1)

    }
}

