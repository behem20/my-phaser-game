import levels from "../levelsConfigs.js";
import GlowManager from "../utils/glowManager.js";

export default class ShopScene extends Phaser.Scene {
    constructor() {
        super("ShopScene");
    }

    preload() {
        this.load.image('shopBG', './game/assets/images/shop/shopBG.png');
        this.load.image('scroll', './game/assets/images/shop/scroll.png');
        this.load.image('scroll_2', './game/assets/images/shop/scroll_2.png');
        this.load.image('scroll_3', './game/assets/images/shop/scroll_3.png');
        this.load.image('scroll_4', './game/assets/images/shop/scroll_4.png');


        this.load.image('staff', './game/assets/images/inventory/staff.png');
        this.load.image('staff_2', 'game/assets/images/inventory/staff_2.png')
        this.load.image('staff_3', 'game/assets/images/inventory/staff_3.png')
        this.load.image('staff_4', 'game/assets/images/inventory/staff_4.png')

        this.load.image('hat', './game/assets/images/inventory/hat.png');
        this.load.image('hat_2', 'game/assets/images/inventory/hat_2.png')
        this.load.image('hat_3', 'game/assets/images/inventory/hat_3.png')
        this.load.image('hat_4', 'game/assets/images/inventory/hat_4.png')

        this.load.image('shopBuyButton', './game/assets/images/shop/shopBuyButton.png')
    }

    create() {

        this.input.mouse.disableContextMenu(); // чтобы браузерное меню не мешало
        this.infoMenuContainer = null;
        this.infoLevelandNameContainer = null


        const closeButton = this.add.rectangle(640, 120, 40, 40, 0x000000, 0.9)
            .setOrigin(0)
            .setInteractive()
            .setDepth(2);

        closeButton.on('pointerdown', () => {
            console.log(1);
            this.scene.stop(); // закрываем сцену по клику на фон
        });
        //ПОДСветка
        let glowActive = false;
        // фон инвентаря
        const shopBG = this.add.image(100, 100, 'shopBG').setOrigin(0).setDepth(1).setInteractive();
        shopBG.on('pointerdown', () => {
            this.hideItemMenu();
        });
        // ВЫКЛЮЧИТЬ ПОДСВЕТКУ
        shopBG.on('pointerdown', () => {
            if (glowActive) {
                glowActive = false;
                glow.setVisible(false);
            }
        });
        
        

        const staff = this.add.image(145, 150, 'staff')
            .setDepth(1)
            .setOrigin(0)
            .setInteractive();
        staff.itemType = 'staff';
        staff.uid = Date.now() + Math.floor(Math.random() * 1000000);
        staff.key = 'staff';
        staff.isActive = false;
        staff.name = 'Staff of Monah';
        staff.level = 1;
        staff.damage = 8;
        staff.cost = 300;
        this.input.setDraggable(staff);
        staff.on('pointerover', (pointer) => {
            this.showItemMenu(staff, staff.x, staff.y)
        });
        staff.on('pointerout', (pointer) => {
            this.hideItemMenu()
        });



        const staff_2 = this.add.image(145, 250, 'staff_2')
            .setDepth(1)
            .setOrigin(0)
            .setInteractive();
        staff_2.itemType = 'staff';
        staff_2.uid = Date.now() + Math.floor(Math.random() * 1000000);
        staff_2.key = 'staff_2';
        staff_2.isActive = false;
        staff_2.name = 'Staff of Flame';
        staff_2.level = 2;
        staff_2.damage = 25;
        staff_2.cost = 4300;
        this.input.setDraggable(staff_2);
        staff_2.on('pointerover', (pointer) => {
            this.showItemMenu(staff_2, staff_2.x, staff_2.y)
        })
        staff_2.on('pointerout', (pointer) => {
            this.hideItemMenu()
        })



        const staff_3 = this.add.image(145, 350, 'staff_3')
            .setDepth(1)
            .setOrigin(0)
            .setInteractive();
        staff_3.itemType = 'staff';
        staff_3.uid = Date.now() + Math.floor(Math.random() * 1000000);
        staff_3.key = 'staff_3';
        staff_3.isActive = false;
        staff_3.name = 'Staff of Art';
        staff_3.level = 3;
        staff_3.damage = 50;
        staff_3.cost = 12000;
        this.input.setDraggable(staff_3);
        staff_3.on('pointerover', (pointer) => {
            this.showItemMenu(staff_3, staff_3.x, staff_3.y)
        })
        staff_3.on('pointerout', (pointer) => {
            this.hideItemMenu()
        })


        const staff_4 = this.add.image(145, 450, 'staff_4')
            .setDepth(1)
            .setOrigin(0)
            .setInteractive();
        staff_4.itemType = 'staff';
        staff_4.uid = 0;//Date.now() + Math.floor(Math.random() * 1000000);
        staff_4.key = 'staff_4';
        staff_4.isActive = false;
        staff_4.name = 'Staff of Den';
        staff_4.level = 4;
        staff_4.damage = 100;
        staff_4.cost = 48000;
        this.input.setDraggable(staff_4);
        staff_4.on('pointerover', (pointer) => {
            this.showItemMenu(staff_4, staff_4.x, staff_4.y)
        })
        staff_4.on('pointerout', (pointer) => {
            this.hideItemMenu()
        })

        const hat = this.add.image(215, 150, 'hat')
            .setDepth(1)
            .setOrigin(0)
            .setInteractive();
        hat.itemType = 'hat';
        hat.uid = Date.now() + Math.floor(Math.random() * 1000000);
        hat.key = 'hat';
        hat.isActive = false;
        hat.name = 'Hat of Monah';
        hat.level = 1;
        hat.damage = 8;
        hat.cost = 200;
        this.input.setDraggable(hat);
        hat.on('pointerover', (pointer) => {
            this.showItemMenu(hat, hat.x, hat.y)
        })
        hat.on('pointerout', (pointer) => {
            this.hideItemMenu()
        })



        const hat_2 = this.add.image(215, 250, 'hat_2')
            .setDepth(1)
            .setOrigin(0)
            .setInteractive();
        hat_2.itemType = 'hat';
        hat_2.uid = Date.now() + Math.floor(Math.random() * 1000000);
        hat_2.key = 'hat_2';
        hat_2.isActive = false;
        hat_2.name = 'Hat of Flame';
        hat_2.level = 2;
        hat_2.damage = 18;
        hat_2.cost = 2750;
        this.input.setDraggable(hat);
        hat_2.on('pointerover', (pointer) => {
            this.showItemMenu(hat_2, hat_2.x, hat_2.y)
        })
        hat_2.on('pointerout', (pointer) => {
            this.hideItemMenu()
        })


        const hat_3 = this.add.image(215, 350, 'hat_3')
            .setDepth(1)
            .setOrigin(0)
            .setInteractive();
        hat_3.itemType = 'hat';
        hat_3.uid = Date.now() + Math.floor(Math.random() * 1000000);
        hat_3.key = 'hat_3';
        hat_3.isActive = false;
        hat_3.name = 'Hat of Art';
        hat_3.level = 3;
        hat_3.damage = 37;
        hat_3.cost = 7000;
        this.input.setDraggable(hat);
        hat_3.on('pointerover', (pointer) => {
            this.showItemMenu(hat_3, hat_3.x, hat_3.y)
        })
        hat_3.on('pointerout', (pointer) => {
            this.hideItemMenu()
        })




        const hat_4 = this.add.image(215, 450, 'hat_4')
            .setDepth(1)
            .setOrigin(0)
            .setInteractive();
        hat_4.itemType = 'hat';
        hat_4.uid = Date.now() + Math.floor(Math.random() * 1000000);
        hat_4.key = 'hat_4';
        hat_4.isActive = false;
        hat_4.name = 'Hat of Den';
        hat_4.level = 4;
        hat_4.damage = 50;
        hat_4.cost = 28000;
        this.input.setDraggable(hat);
        hat_4.on('pointerover', (pointer) => {
            this.showItemMenu(hat_4, hat_4.x, hat_4.y)
        })
        hat_4.on('pointerout', (pointer) => {
            this.hideItemMenu()
        })

        const scroll = this.add.image(290, 150, 'scroll')
            .setDepth(1)
            .setOrigin(0)
            .setInteractive();
        scroll.itemType = 'scroll';
        scroll.uid = Date.now() + Math.floor(Math.random() * 1000000);
        scroll.key = 'scroll';
        scroll.isActive = false;
        scroll.name = 'Scroll of Monah';
        scroll.level = 1;
        scroll.damage = 0;
        scroll.cost = 500;
        this.input.setDraggable(scroll);
        scroll.on('pointerover', (pointer) => {
            this.showItemMenu(scroll, scroll.x, scroll.y)
        })
        scroll.on('pointerout', (pointer) => {
            this.hideItemMenu()
        })



        const scroll_2 = this.add.image(290, 250, 'scroll_2')
            .setDepth(1)
            .setOrigin(0)
            .setInteractive();
        scroll_2.itemType = 'sctoll';
        scroll_2.uid = Date.now() + Math.floor(Math.random() * 1000000);
        scroll_2.key = 'scroll_2';
        scroll_2.isActive = false;
        scroll_2.name = 'Scroll of Flame';
        scroll_2.level = 2;
        scroll_2.damage = 0;
        scroll_2.cost = 1000;
        this.input.setDraggable(scroll_2);
        scroll_2.on('pointerover', (pointer) => {
            this.showItemMenu(scroll_2, scroll_2.x, scroll_2.y)
        })
        scroll_2.on('pointerout', (pointer) => {
            this.hideItemMenu()
        })


        const scroll_3 = this.add.image(290, 350, 'scroll_3')
            .setDepth(1)
            .setOrigin(0)
            .setInteractive();
        scroll_3.itemType = 'scroll';
        scroll_3.uid = Date.now() + Math.floor(Math.random() * 1000000);
        scroll_3.key = 'scroll_3';
        scroll_3.isActive = false;
        scroll_3.name = 'Scroll of Art';
        scroll_3.level = 3;
        scroll_3.damage = 0;
        scroll_3.cost = 5000;
        this.input.setDraggable(scroll_3);
        scroll_3.on('pointerover', (pointer) => {
            this.showItemMenu(scroll_3, scroll_3.x, scroll_3.y)
        })
        scroll_3.on('pointerout', (pointer) => {
            this.hideItemMenu()
        })





        const scroll_4 = this.add.image(290, 450, 'scroll_4')
            .setDepth(1)
            .setOrigin(0)
            .setInteractive();
        scroll_4.itemType = 'scroll';
        scroll_4.uid = Date.now() + Math.floor(Math.random() * 1000000);
        scroll_4.key = 'scroll_4';
        scroll_4.isActive = false;
        scroll_4.name = 'Scroll of Den';
        scroll_4.level = 4;
        scroll_4.damage = 0;
        scroll_4.cost = 10000;
        this.input.setDraggable(hat);
        scroll_4.on('pointerover', (pointer) => {
            this.showItemMenu(scroll_4, scroll_4.x, scroll_4.y)
        })
        scroll_4.on('pointerout', (pointer) => {
            this.hideItemMenu()
        })
        //array of shop items 
        const items = [hat, hat_2, hat_3, hat_4, staff, staff_2, staff_3, staff_4, scroll, scroll_2, scroll_3, scroll_4]
        //manager 
        this.glowManager = new GlowManager(this, items, shopBG);
    }




    showItemMenu(itemData, x, y) {
        // если уже есть меню — убираем

        if (this.infoMenuContainer) {
            this.infoMenuContainer.destroy(true);
            this.infoMenuContainer = null;
        }
        // создаём контейнер
        const container = this.add.container(x + 50, y).setDepth(10);

        // фон
        const bg = this.add.rectangle(0, 0, 150, 100, 0x000000, 0.7)
            .setOrigin(0)
            .setStrokeStyle(2, 0xffffff);

        // текст
        const dmg = this.add.text(10, 50, `Damage: ${itemData.damage}`, { fontSize: '14px', fill: '#fff' });
        const titleAndLevel = this.add.text(10, 10, `(+${itemData.level}) ${itemData.name}`, { fontSize: '14px', fill: '#fff' });
        container.add([bg, titleAndLevel, dmg]);
        this.infoMenuContainer = container;
    }

    hideItemMenu() {
        if (this.infoMenuContainer) {
            this.infoMenuContainer.destroy(true);
            this.infoMenuContainer = null;
        }
    }

    update() {
    }
}

