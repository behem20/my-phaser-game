
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";
import { setLanguage, t } from "../LanguageManager.js";
import { playerItems } from "../utils/itemsManager.js";

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
        // this.cameras.main.setBackgroundColor("#000000");
        this.bgOverlay = this.add.graphics()
            .fillStyle(0x000000, 0.5) // 0.5 = прозрачность
            .fillRect(0, 0, this.scale.width, this.scale.height)
            .setScrollFactor(0) // фиксируем к экрану
            .setDepth(-10);     // позади всего

        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        const cardWidth = 200;
        const cardHeight = 250;
        const spacing = 240;
        this.ActiveCard = null;

        const stepSound = this.gameScene.sound.get("playerMoveSound");//steps sound off
        if (stepSound) { stepSound.stop(); }

        this.onTapSfx = this.sound.add('onTapSound', { volume: 0.1 });

        this.onHoverSfx = this.sound.add('hoverSound', { volume: 0.1 });

        this.items = playerItems.getRandomItems()


        const chestInnerBG = this.add.rectangle(10, 45, 780, 730, 0x000000, 1)
            .setOrigin(0)
            .setScrollFactor(0);
        chestInnerBG.setStrokeStyle(4, 0x5C270B)
        const chestBG = this.add.rectangle(20, 55, 760, 710, 0x000000, 1)
            .setOrigin(0)
            .setScrollFactor(0);
        chestBG.setStrokeStyle(2, 0x5C270B)

        const cards = []
        this.items.forEach((item, index) => {
            const x = centerX + (index - 1) * spacing;
            const y = centerY - 110;
            
            // Карточка (фон)
            const card = this.add.rectangle(x, y, cardWidth, cardHeight,)


                .setStrokeStyle(2, RARITY_COLORS_0x[item.rank])
                .setInteractive();

            this.add.image(x, y, item.icon).setScale(1.5);
            // this.add.text(x, y - 100, t(item.name), {
            //     fontSize: "20px",
            //     color: "#fff"
            // }).setOrigin(0.5);

            card.on("pointerdown", () => {
                cards.forEach(item => item.setScale(1))
                card.setScale(1.2)
                this.onTapSfx.play();
                this.chooseText.destroy()
                if (this.ActiveCardName) { this.ActiveCardName.destroy() }
                if (this.ActiveCardRank) { this.ActiveCardRank.destroy() }
                if (this.ActiveCardDescription) { this.ActiveCardDescription.destroy() }
                this.ActiveCard = item
                this.ActiveCardName = this.add.text(centerX, centerY + 75, t(`items.${this.ActiveCard.name}`), {
                    fontSize: "42px",
                    color: "#ffffffff"
                }).setOrigin(0.5)

                this.getText.setColor('#ffffffff')

                this.ActiveCardRank = this.add.text(centerX, centerY + 105, `${t(`itemsRank.${this.ActiveCard.rank}`)} ${t('items.item')}`, {
                    fontSize: "24px",
                    color: RARITY_COLORS[this.ActiveCard.rank]
                }).setOrigin(0.5)
                this.ActiveCardRank.setBlendMode(Phaser.BlendModes.ADD);


                this.ActiveCardDescription = this.add.container(centerX, centerY + 175);

                for (let i = 0; i < 3; i++) {
                    const txt = this.add.text(0, 0, t(this.ActiveCard.description), {
                        fontSize: "24px",
                        color: "#2af318ff"
                    }).setOrigin(0.5);

                    this.ActiveCardDescription.add(txt);
                }



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


        this.sceneTitle = this.add.text(centerX, centerY - 295, t(`game.chestTitle`), {
            fontSize: "42px",
            color: "#f0cd6dff"
        }).setOrigin(0.5)

        this.chooseText = this.add.text(centerX, centerY + 150, t(`game.chooseChest`), {
            fontSize: "24px",
            color: "#f0cd6dff"
        }).setOrigin(0.5).setInteractive()
        this.getTextButton = this.add.rectangle(centerX, centerY + 300, 400, 45, 0xffffff, 0.05).setInteractive().setDepth(2);
        this.getTextButton.on('pointerdown', () => {
            this.onTapSfx.play();

            this.onSelect(this.ActiveCard); //pravki
            this.scene.stop();
            this.scene.resume("GameScene");
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
        this.getText = this.add.text(centerX, centerY + 300, t(`ui.get`), {
            fontSize: "16px",
            color: "#948a83ff"
        }).setOrigin(0.5).setInteractive().setDepth(this.getTextButton.depth - 1)

    }
}

