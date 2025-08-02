
export default class ArmorsScrollsSpawner {
    constructor(scene, player, enemy) {
        this.scene = scene;
        this.player = player;

        this.group = scene.physics.add.group();
    }
    spawnStaffGrade_1(enemyX, enemyY) {
        if (Math.random() < 0.005) {
            console.log('spawned staff 1');

            const item = this.group.create(enemyX, enemyY, 'staff');
            item.key = 'staff',
                item.itemType = 'staff',
                item.uid = Date.now() + Math.floor(Math.random() * 1000000),
                item.isActive = false,
                item.name = 'Staff of Monah',
                item.level = 1,
                item.damage = 12
            item.setCollideWorldBounds(true);
            item.setBounce(1);
            item.body.allowGravity = false;
        }

    }
    spawnStaffGrade_2(enemyX, enemyY) {
        if (Math.random() < 0.0005 && this.scene.registry.get('currentLevel') > 1) {
            console.log('spawned staff 2');
            const item = this.group.create(enemyX, enemyY, 'staff_2');
            item.key = 'staff_2',
                item.itemType = 'staff',
                item.uid = Date.now() + Math.floor(Math.random() * 1000000),
                item.isActive = false,
                item.name = 'Staff of Flames',
                item.level = 2,
                item.damage = 25
            item.setCollideWorldBounds(true);
            item.setBounce(1);
            item.body.allowGravity = false;
        }
    }
    spawnStaffGrade_3(enemyX, enemyY) {
        if (Math.random() < 0.00005 && this.scene.registry.get('currentLevel') > 2) {
            console.log('spawned staff 3');
            const item = this.group.create(enemyX, enemyY, 'staff_3');
            item.key = 'staff_3',
                item.itemType = 'staff',
                item.uid = Date.now() + Math.floor(Math.random() * 1000000),
                item.isActive = false,
                item.name = 'Staff of Art',
                item.level = 3,
                item.damage = 50
            item.setCollideWorldBounds(true);
            item.setBounce(1);
            item.body.allowGravity = false;
        }
    }
    spawnStaffGrade_4(enemyX, enemyY) {
        if (Math.random() < 0.000005 && this.scene.registry.get('currentLevel') > 3) {
            console.log('spawned staff 4');
            const item = this.group.create(enemyX, enemyY, 'staff_4');
            item.key = 'staff_4',
                item.itemType = 'staff',
                item.uid = Date.now() + Math.floor(Math.random() * 1000000),
                item.isActive = false,
                item.name = 'Staff of Den',
                item.level = 4,
                item.damage = 100
            item.setCollideWorldBounds(true);
            item.setBounce(1);
            item.body.allowGravity = false;
        }
    }
    spawnHatfGrade_1(enemyX, enemyY) {
        if (Math.random() < 0.01) {
            console.log('spawned hat 1');
            const item = this.group.create(enemyX, enemyY, 'hat');
            item.key = 'hat',
                item.itemType = 'hat',
                item.uid = Date.now() + Math.floor(Math.random() * 1000000),
                item.isActive = false,
                item.name = 'Hat of Monah',
                item.level = 1,
                item.damage = 8
            item.setCollideWorldBounds(true);
            item.setBounce(1);
            item.body.allowGravity = false;
        }
    }
    spawnHatfGrade_2(enemyX, enemyY) {
        if (Math.random() < 0.001 && this.scene.registry.get('currentLevel') > 1) {
            console.log('spawned hat 2');
            const item = this.group.create(enemyX, enemyY, 'hat_2');
            item.key = 'hat_2',
                item.itemType = 'hat',
                item.uid = Date.now() + Math.floor(Math.random() * 1000000),
                item.isActive = false,
                item.name = 'Hat of Flame',
                item.level = 2,
                item.damage = 18
            item.setCollideWorldBounds(true);
            item.setBounce(1);
            item.body.allowGravity = false;
        }
    }
    spawnHatGrade_3(enemyX, enemyY) {
        if (Math.random() < 0.0001 && this.scene.registry.get('currentLevel') > 2) {
            console.log('spawned hat 3');
            const item = this.group.create(enemyX, enemyY, 'hat_3');
            item.key = 'hat_3',
                item.itemType = 'hat',
                item.uid = Date.now() + Math.floor(Math.random() * 1000000),
                item.isActive = false,
                item.name = 'Hat of Art',
                item.level = 3,
                item.damage = 37
            item.setCollideWorldBounds(true);
            item.setBounce(1);
            item.body.allowGravity = false;
        }
    }
    spawnHatGrade_4(enemyX, enemyY) {
        if (Math.random() < 0.00001 && this.scene.registry.get('currentLevel') > 3) {
            console.log('spawned hat 4');


            const item = this.group.create(enemyX, enemyY, 'hat_4');
            console.log(item);

            item.key = 'hat_4',
                item.itemType = 'hat',
                item.uid = Date.now() + Math.floor(Math.random() * 1000000),
                item.isActive = false,
                item.name = 'Hat of Den',
                item.level = 4,
                item.damage = 50
            item.setCollideWorldBounds(true);
            item.setBounce(1);
            item.body.allowGravity = false;
        }
    }
    ArmorsScrollsSpawn(enemyX, enemyY) {

        const curentRandomNumber = Phaser.Math.Between(1, 8)
        switch (curentRandomNumber) {
            case 1:
                this.spawnHatfGrade_1(enemyX, enemyY)
                break;
            case 2:
                this.spawnHatfGrade_2(enemyX, enemyY)
                break;
            case 3:
                this.spawnHatGrade_3(enemyX, enemyY)
                break;
            case 4:
                this.spawnHatGrade_4(enemyX, enemyY)
                break;
            case 5:
                this.spawnStaffGrade_1(enemyX, enemyY)
                break;
            case 6:
                this.spawnStaffGrade_2(enemyX, enemyY)
                break;
            case 7:
                this.spawnStaffGrade_3(enemyX, enemyY)
                break;
            case 8:
                this.spawnStaffGrade_4(enemyX, enemyY)
                break;

        }

    }
    getGroup() {
        return this.group
    }

}