// GlowManager.js
export default class GlowManager {
    /**
     * @param {Phaser.Scene} scene
     * @param {Phaser.GameObjects.GameObject[]} items - массив интерактивных предметов
     * @param {Phaser.GameObjects.GameObject} bgFill - фон, по которому кликаем чтобы убрать glow
     */
    constructor(scene, items, bgFill) {
        this.scene = scene;
        this.items = items;
        this.bgFill = bgFill;


        this.glow = scene.add.sprite(0, 0, items[0]?.texture?.key || '')
            .setAlpha(0.5)
            .setBlendMode(Phaser.BlendModes.ADD)
            .setScale(1)
            .setVisible(false);

        this.activeItem = null;
        this.costText = this.scene.add.text(400, 130, `cost: ${0}`).setDepth(12)
        this.shopBuyButton = this.scene.add.image(400, 300, 'shopBuyButton')
            .setDepth(2)
            .setOrigin(0)
            .setInteractive()
            .setVisible(false)

        this.shopBuyButton.on('pointerdown', () => {
            if (this.scene.registry.get('inventory').length > 11) {
                console.log('no place in inventory');
                return
            }
            else if (this.scene.registry.get('coinsCount') < this.activeItem.cost) {
                console.log('not enough money');
                return
            } else {
                console.log(`you bought item ${this.activeItem.name}`);


                const newItem = {
                    key: this.activeItem.key,
                    itemType: this.activeItem.itemType,
                    damage: this.activeItem.damage,
                    isActive: this.activeItem.isActive,
                    level: this.activeItem.level,
                    name: this.activeItem.name,
                    uid: Date.now() + Math.floor(Math.random() * 1000000),

                }
                this.scene.registry.set('coinsCount', this.scene.registry.get('coinsCount',) - this.activeItem.cost)
                const inv = this.scene.registry.get('inventory').push(newItem)
                console.log(this.scene.registry.get('inventory'));


            }



        });

        this.setup();
    }

    setup() {
        // фон выключает glow
        this.bgFill.setInteractive();
        this.bgFill.on('pointerdown', () => {
            this.clearGlow();
            this.clearShopBuyButton()
        });

        // каждому айтему добавляем клик
        this.items.forEach(item => {
            item.setInteractive();
            item.on('pointerdown', () => {
                this.setGlow(item);
                this.setCost(item)
                this.setShopBuyButton()
            });
        });

    }

    /** Подсветить выбранный айтем */
    setGlow(item) {
        this.glow.setTexture(item.texture.key);
        this.glow.setPosition(item.x, item.y);
        // this.glow.setScale(item.scaleX * 1.1, item.scaleY * 1.1);
        this.glow.setDepth(item.depth + 1);
        this.glow.setVisible(true);
        this.glow.setOrigin(0)
        this.activeItem = item;
    }
    setCost(item) {
        this.costText.setText(`cost: ${item.cost}`)
    }
    clearCost() {
        this.costText.setText(`cost: ${0}`)
    }
    setShopBuyButton() {
        this.shopBuyButton.setVisible(true)
    }
    clearShopBuyButton() {
        this.shopBuyButton.setVisible(false)
    }

    /** Убрать подсветку */
    clearGlow() {
        this.glow.setVisible(false);
        this.activeItem = null;
        this.clearCost()
    }

    /** Проверить, какой предмет сейчас активен */
    getActiveItem() {
        return this.activeItem;
    }
}