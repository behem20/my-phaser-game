import levels from "../levelsConfigs.js";

export default class InventoryScene extends Phaser.Scene {
    constructor() {
        super("InventoryScene");
    }

    preload() {

        this.load.image('bgInventory', './game/assets/images/inventory/inventoryBG.png');
        this.load.image('scroll', './game/assets/images/inventory/scroll.png');
        this.load.image('trash', './game/assets/images/inventory/trash.png');

        this.load.image('staff', './game/assets/images/inventory/staff.png');
        this.load.image('staff_2', 'game/assets/images/inventory/staff_2.png')
        this.load.image('staff_3', 'game/assets/images/inventory/staff_3.png')
        this.load.image('staff_4', 'game/assets/images/inventory/staff_4.png')
        this.load.image('hat', './game/assets/images/inventory/hat.png');
        this.load.image('hat_2', 'game/assets/images/inventory/hat_2.png')
        this.load.image('hat_3', 'game/assets/images/inventory/hat_3.png')
        this.load.image('hat_4', 'game/assets/images/inventory/hat_4.png')
    }

    create() {

        this.onTapSfx = this.sound.add('onTapSound', { volume: 0.1 });
        this.input.mouse.disableContextMenu(); // чтобы браузерное меню не мешало
        this.infoMenuContainer = null;
        this.infoLevelandNameContainer = null


        // полупрозрачный фон для закрытия
        const bgFill = this.add.rectangle(0, 0, 800, 800, 0x000000, 0.3)
            .setOrigin(0)
            .setInteractive()
            .setDepth(0);
        const closeButton = this.add.rectangle(640, 120, 40, 40, 0x000000, 0.9)
            .setOrigin(0)
            .setInteractive()
            .setDepth(2);

        closeButton.on('pointerdown', () => {
            this.onTapSfx.play();
            this.scene.stop(); // закрываем сцену по клику на фон
        });


        // фон инвентаря
        const inventoryBG = this.add.image(100, 100, 'bgInventory').setOrigin(0).setDepth(1).setInteractive();
        inventoryBG.on('pointerdown', () => {

            this.hideItemMenu();
        });
        // золото
        this.add.text(405, 135, `${this.registry.get('coinsCount')}`, {
            fontSize: '24px',
            color: '#111'
        }).setOrigin(0).setDepth(1);



        // hero stats damage

        // получаем инвентарь
        /** @type {{uid:number,type:string}[]} */
        const items = this.registry.get('inventory') || [];

        // координаты в сетке инвентаря
        const getPosition = (index) => {
            if (index <= 3) return { x: 370 + index * 65, y: 170 };
            if (index > 3 && index <= 7) return { x: 110 + index * 65, y: 230 };
            if (index > 7 && index <= 11) return { x: -150 + index * 65, y: 300 };
            return null;
        };

        // создаём спрайты айтемов
        items.forEach((item, index) => {
            const pos = getPosition(index);
            if (!pos) return;

            const sprite = this.add.image(pos.x, pos.y, item.key)
                .setDepth(1)
                .setOrigin(0)
                .setInteractive();
            sprite.itemType = item.itemType
            sprite.uid = item.uid; // уникальный идентификатор
            sprite.name = item.name,
                sprite.level = item.level,
                sprite.damage = item.damage,
                this.input.setDraggable(sprite);
            sprite.on('pointerdown', (pointer) => {
                if (pointer.rightButtonDown()) {
                    this.showItemMenu(sprite, pointer.x, pointer.y);
                }
            });

        });
        //зона инвентаря 
        // зона сброса

        const InventorySprite = this.add.image(0, 0, 'trash').setDepth(1).setOrigin(0);
        const InventoryZone = this.add.zone(355, 165, 325, 200)
            .setRectangleDropZone(325, 200)
            .setInteractive()
            .setDepth(1)
            .setOrigin(0)
        InventoryZone.on('pointerover', () => {

            InventorySprite.setTint(0xff4444)
        })
        InventoryZone.on('pointerout', () => {

            InventorySprite.clearTint()
        });
        InventoryZone.on('pointerdown', () => {
            this.hideItemMenu();
        })

        // мусорка спрайт
        const trashSprite = this.add.image(700, 600, 'trash').setDepth(1);

        // зона сброса
        const trashZone = this.add.zone(trashSprite.x, trashSprite.y, trashSprite.width, trashSprite.height)
            .setRectangleDropZone(trashSprite.width, trashSprite.height)
            .setInteractive();

        // подсветка мусорки
        trashZone.on('pointerover', () => trashSprite.setTint(0xff4444));
        trashZone.on('pointerout', () => trashSprite.clearTint());

        // события drag & drop
        this.input.on('dragstart', (pointer, gameObject) => {
            this.onTapSfx.play();
            gameObject.setTint(0x99ff99);
        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('dragend', (pointer, gameObject, dropped) => {
            gameObject.clearTint();
            if (!dropped) {
                // возвращаем на место
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        });
        //dropped in trash zone
        this.input.on('drop', (pointer, gameObject, dropZone) => {
            if (dropZone === trashZone) {
                gameObject.destroy();
                let inv = this.registry.get('inventory') || [];
                inv = inv.filter(it => it.uid !== gameObject.uid);
                this.registry.set('inventory', inv);
                this.scene.stop()
                this.scene.start()
            }
        });

        //staff zone 
        const staffZone = this.add.zone(286, 157, 50, 50)
            .setRectangleDropZone(50, 50)
            .setInteractive();
        // подсветка staff
        staffZone.on('pointerover', () => 1);
        staffZone.on('pointerout', () => 1);
        //hat zone 
        const hatZone = this.add.zone(157, 156, 50, 50)
            .setRectangleDropZone(50, 50)
            .setInteractive();
        // подсветка staff
        hatZone.on('pointerover', () => 1);
        hatZone.on('pointerout', () => 1);


        //dropped in staff zone
        this.input.on('drop', (pointer, gameObject, dropZone) => {

            //staff to active staff zone
            if (dropZone === staffZone && gameObject.itemType === 'staff' && !this.registry.get('activeStaff').isActive) {
                this.registry.set('activeStaff', {
                    uid: gameObject.uid,
                    itemType: gameObject.itemType,
                    key: gameObject.texture.key,
                    isActive: true,
                    name: gameObject.name,
                    level: gameObject.level,
                    damage: gameObject.damage,
                })
                gameObject.isActive = true;
                let inv = this.registry.get('inventory') || [];
                inv = inv.filter(it => it.uid !== gameObject.uid);
                this.registry.set('inventory', inv);

                console.log('staff: ', gameObject.damage);
                console.log('active hat: ', this.registry.get('activeHat').damage);
                this.registry.set('PlayerCharacteristic', {
                    damage: playerInitCfgs.damage + (gameObject.damage + this.registry.get('activeHat').damage),
                    atkSpeed: 100
                })
                console.log('charactrcs: ', this.registry.get('PlayerCharacteristic'))

                this.scene.stop()
                this.scene.start()
            }//hat to active hat zone
            else if (dropZone === hatZone && gameObject.itemType === 'hat' && !this.registry.get('activeHat').isActive) {
                this.registry.set('activeHat', {
                    uid: gameObject.uid,
                    itemType: gameObject.itemType,
                    key: gameObject.texture.key,
                    isActive: true,
                    name: gameObject.name,
                    level: gameObject.level,
                    damage: gameObject.damage,
                })
                gameObject.isActive = true;
                let inv = this.registry.get('inventory') || [];
                inv = inv.filter(it => it.uid !== gameObject.uid);
                this.registry.set('inventory', inv);

                console.log('hat: ', gameObject.damage);
                console.log('active staff: ', this.registry.get('activeStaff').damage);

                this.registry.set('PlayerCharacteristic', {
                    damage: playerInitCfgs.damage + (gameObject.damage + this.registry.get('activeStaff').damage),
                    atkSpeed: 100,
                })

                this.scene.stop()
                this.scene.start()
            }// hat to trash from active
            else if (dropZone === trashZone && gameObject.itemType === 'hat' && gameObject.isActive === true) {
                console.log('hat in the trash from active');

                this.registry.set('activeHat', {
                    uid: 0,
                    itemType: '',
                    key: '',
                    isActive: false,
                    name: '',
                    level: null,
                    damage: null,
                })
                gameObject.destroy();
                let inv = this.registry.get('inventory') || [];
                inv = inv.filter(it => it.uid !== gameObject.uid);
                this.registry.set('inventory', inv);
                this.registry.set('PlayerCharacteristic', {
                    damage: playerInitCfgs.damage + this.registry.get('activeStaff').damage,
                    atkSpeed: 100
                })
            }
            // staff to trash from active
            else if (dropZone === trashZone && gameObject.itemType === 'staff' && gameObject.isActive === true) {
                console.log('staff in the trash from active');

                this.registry.set('activeStaff', {
                    uid: 0,
                    itemType: '',
                    key: '',
                    isActive: false,
                    name: '',
                    level: null,
                    damage: null,
                })
                gameObject.destroy();
                let inv = this.registry.get('inventory') || [];
                inv = inv.filter(it => it.uid !== gameObject.uid);
                this.registry.set('inventory', inv);
                this.registry.set('PlayerCharacteristic', {
                    damage: playerInitCfgs.damage + this.registry.get('activeHat').damage,
                    atkSpeed: 100
                })
            }
            //hat to inventory from active slot
            else if (dropZone === InventoryZone && gameObject.itemType === 'hat' && gameObject.isActive === true) {
                console.log('hat in the inventory from active');
                console.log(this.registry.get('activeHat'));

                this.registry.set('activeHat', {
                    uid: 0,
                    itemType: '',
                    key: '',
                    isActive: false,
                    name: '',
                    level: null,
                    damage: null,
                })
                gameObject.destroy();
                let inv = this.registry.get('inventory') || [];
                inv.push({
                    uid: gameObject.uid,
                    itemType: gameObject.itemType,
                    key: gameObject.key,
                    isActive: gameObject.isActive,
                    name: gameObject.name,
                    level: gameObject.level,
                    damage: gameObject.damage,
                })
                this.registry.set('inventory', inv);
                this.registry.set('PlayerCharacteristic', {
                    damage: playerInitCfgs.damage+ this.registry.get('activeStaff').damage,
                    atkSpeed: 100
                })
                this.scene.stop()
                this.scene.start()
            }
            //hat to inventory from active slot
            else if (dropZone === InventoryZone && gameObject.itemType === 'staff' && gameObject.isActive === true) {
                console.log('staff in the inventory from active');
                console.log(this.registry.get('activeStaff'));

                this.registry.set('activeStaff', {
                    uid: 0,
                    itemType: '',
                    key: '',
                    isActive: false,
                    name: '',
                    level: null,
                    damage: null,
                })
                gameObject.destroy();
                let inv = this.registry.get('inventory') || [];
                inv.push({
                    uid: gameObject.uid,
                    itemType: gameObject.itemType,
                    key: gameObject.key,
                    isActive: gameObject.isActive,
                    name: gameObject.name,
                    level: gameObject.level,
                    damage: gameObject.damage,
                })
                this.registry.set('inventory', inv);
                this.registry.set('PlayerCharacteristic', {
                    damage: playerInitCfgs.damage + this.registry.get('activeHat').damage,
                    atkSpeed: 100
                })
                this.scene.stop()
                this.scene.start()
            }



            //active hat to trash
            else if (dropZone === trashZone && gameObject.itemType === 'staff' && gameObject.isActive === true) {
                console.log('hat     in the trash from active');

                this.registry.set('activeStaff', {
                    uid: 0,
                    itemType: '',
                    key: '',
                    isActive: false,
                    name: '',
                    level: null,
                    damage: null,
                })
                gameObject.destroy();
                let inv = this.registry.get('inventory') || [];
                inv = inv.filter(it => it.uid !== gameObject.uid);
                this.registry.set('inventory', inv);
            }


            // to trash from inv
            else if (dropZone === trashZone) {
                gameObject.destroy();
                let inv = this.registry.get('inventory') || [];
                inv = inv.filter(it => it.uid !== gameObject.uid);
                this.registry.set('inventory', inv);
                console.log(1);

            }
            //swap items
            else if (dropZone === InventoryZone) {
                gameObject.destroy();
                let inv = this.registry.get('inventory') || [];
                inv = inv.filter(it => it.uid !== gameObject.uid);
                this.registry.set('inventory', inv);
                console.log(1);

            }
            else {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
                console.log('dropped right here');
                console.log(gameObject);


            }
        });
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
        const bgInfo = this.add.rectangle(0, 0, 150, 100, 0x000000, 0.7)
            .setOrigin(0)
            .setStrokeStyle(2, 0xffffff);

        // текст
        const level = this.add.text(10, 30, `Level: ${itemData.level}`, { fontSize: '14px', fill: '#fff' });
        const dmg = this.add.text(10, 50, `Damage: ${itemData.damage}`, { fontSize: '14px', fill: '#fff' });
        const titleAndLevel = this.add.text(10, 10, `(+${itemData.level}) ${itemData.name}`, { fontSize: '14px', fill: '#fff' });
        container.add([bgInfo, titleAndLevel, dmg]);
        this.infoMenuContainer = container;
    }

    hideItemMenu() {
        if (this.infoMenuContainer) {
            this.infoMenuContainer.destroy(true);
            this.infoMenuContainer = null;
        }
    }

    update() {

        const damageText = this.add.text(350, 400, `Damage:${this.registry.get('PlayerCharacteristic').damage}`, {
            fontSize: '18px',
            color: '#111'
        }).setOrigin(0).setDepth(1);
        // hero stats atkSpeed
        const atkSpeedText = this.add.text(350, 420, `Atk/speed:${this.registry.get('PlayerCharacteristic').atkSpeed}`, {
            fontSize: '18px',
            color: '#111'
        }).setOrigin(0).setDepth(1);

        const items = this.registry.has('inventory') ? this.registry.get('inventory') : []

        // координаты в сетке инвентаря
        const getPosition = (index) => {
            if (index <= 3) return { x: 370 + index * 65, y: 170 };
            if (index > 3 && index <= 7) return { x: 110 + index * 65, y: 230 };
            if (index > 7 && index <= 11) return { x: -150 + index * 65, y: 300 };
            return null;
        };

        // создаём спрайты айтемов
        items.forEach((item, index) => {
            const pos = getPosition(index);
            if (!pos) return;

            const sprite = this.add.image(pos.x, pos.y, item.key)
                .setDepth(1)
                .setOrigin(0)
                .setInteractive();
            sprite.itemType = item.itemType
            sprite.uid = item.uid;
            sprite.key = item.key;
            sprite.isActive = false;
            sprite.name = item.name,
                sprite.level = item.level,
                sprite.damage = item.damage,
                this.input.setDraggable(sprite);


            sprite.on('pointerover', (pointer) => {
                this.showItemMenu(sprite, sprite.x, sprite.y)
            })
            sprite.on('pointerout', (pointer) => {
                this.hideItemMenu()
            })
        });


        const activeHat = this.registry.get('activeHat') || { uid: 0, itemType: '', key: '', isActive: false };
        if (activeHat.key) {
            const activeHatSprite = this.add.image(137, 136, activeHat.key)
                .setDepth(1)
                .setOrigin(0)
                .setInteractive();
            activeHatSprite.uid = activeHat.uid;
            activeHatSprite.itemType = activeHat.itemType;
            activeHatSprite.key = activeHat.key;
            activeHatSprite.isActive = activeHat.isActive;
            activeHatSprite.name = activeHat.name,
                activeHatSprite.level = activeHat.level,
                activeHatSprite.damage = activeHat.damage,
                this.input.setDraggable(activeHatSprite);
            activeHatSprite.on('pointerdown', (pointer) => {
                if (pointer.rightButtonDown()) {
                    this.showItemMenu(activeHatSprite, pointer.x, pointer.y);
                }
            });
            activeHatSprite.on('pointerdown', (pointer) => {
                if (pointer.leftButtonDown()) {
                    this.hideItemMenu()
                }
            });
        }


        const activeStaff = this.registry.get('activeStaff') || { uid: 0, itemType: '', key: '', isActive: false };
        if (activeStaff.key) {
            const activeStaffSprite = this.add.image(266, 136, activeStaff.key)
                .setDepth(1)
                .setOrigin(0)
                .setInteractive();
            activeStaffSprite.uid = activeStaff.uid;
            activeStaffSprite.itemType = activeStaff.itemType;
            activeStaffSprite.key = activeStaff.key;
            activeStaffSprite.isActive = activeStaff.isActive;
            activeStaffSprite.name = activeStaff.name,
                activeStaffSprite.level = activeStaff.level,
                activeStaffSprite.damage = activeStaff.damage,

                this.input.setDraggable(activeStaffSprite);
            activeStaffSprite.on('pointerdown', (pointer) => {
                if (pointer.rightButtonDown()) {
                    this.showItemMenu(activeStaffSprite, pointer.x, pointer.y);
                }
            });
            activeStaffSprite.on('pointerdown', (pointer) => {
                if (pointer.leftButtonDown()) {
                    this.hideItemMenu()
                }
            });
        }

    }

}