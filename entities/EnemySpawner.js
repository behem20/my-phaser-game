import levels from "../levelsConfigs.js";
import { IncreaseEnemyHPperTime } from "../utils/EnemyIncreaseHP.js";


class EnemyContainer extends Phaser.GameObjects.Container {
    constructor(scene, x, y, textureKey, animationKey) {
        super(scene, x, y);

        // Сам враг
        this.sprite = scene.physics.add.sprite(0, 0, textureKey);

        if (animationKey) {
            this.sprite.play(animationKey);
        }

        // Добавляем в контейнер

        this.add(this.sprite);
       

        // Включаем физику для всего контейнера
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.body.setSize(this.sprite.width, this.sprite.height);
        this.body.setOffset(-this.sprite.width / 2, -this.sprite.height / 2);
        this.body.setCollideWorldBounds(true);



    }
    deactivateEnemy() {
        this.setActive(false);
        this.setVisible(false);
        this.body.enable = false;

        if (this.sprite) this.sprite.setVisible(false);
        if (this.shadow) this.shadow.setVisible(false); // скрываем тень
    }

    activate(x, y, textureKey, animationKey) {
        this.body.enable = true;
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);

        if (this.sprite) {
            this.sprite.setTexture(textureKey);
            if (animationKey) this.sprite.play(animationKey);
            this.sprite.setVisible(true);
            this.sprite.clearTint();
            this.sprite.setAlpha(1);
        }

        if (this.shadow) {
            this.shadow.setVisible(true);        // включаем тень
            this.shadow.setPosition(x, y + 10); // корректируем позицию
            this.shadow.setAlpha(0.3);
            this.shadow.setScale(this.sprite.width / this.shadow.width * 0.8);
            this.shadow.setDepth(this.sprite.depth - 1);
        }
    }
}


export function resetEnemy(enemy, x, y, scene, textureKey = 'enemy', animationKey = 'enemy_normal_1') {

    enemy.activate(x, y, textureKey, animationKey)

    const scale = 0.85
    const w = enemy.sprite.width * scale;
    const h = enemy.sprite.height * scale;


    enemy.body.setSize(w, h);
    enemy.body.setOffset(-w / 2, - h / 2);





    // scene.tweens.add({
    //     targets: enemy,
    //     scaleX: 1.02,
    //     scaleY: 0.98,
    //     yoyo: true,
    //     duration: 120,
    //     repeat: -1
    // });
    // console.log('RESET enemy', enemy.sprite.texture.key, enemy.sprite.visible);
}

export default class EnemySpawner {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;


        this.group = scene.physics.add.group({
            classType: EnemyContainer,
            maxSize: 1050,
            runChildUpdate: false
        });


        this.enemyConfigs = {
            normal: levels[scene.registry.get('currentLevel')].enemiesConfigs.normalType,
            fast: levels[scene.registry.get('currentLevel')].enemiesConfigs.fastType,
            tank: levels[scene.registry.get('currentLevel')].enemiesConfigs.tankType,
            boss: levels[scene.registry.get('currentLevel')].enemiesConfigs.bossType,
        };
    }

    spawn(scene, type = 'normal') {


        // this.scene.tweens.killTweensOf(enemy);

        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
        const distance = Phaser.Math.Between(400, 800);
        const x = this.player.x + Math.cos(angle) * distance;
        const y = this.player.y + Math.sin(angle) * distance;

        // берем конфиг врага
        const cfg = this.enemyConfigs[type] || this.enemyConfigs.normal;

        const enemy = this.group.get()

        if (!enemy) return;
        enemy.shadow = scene.add.image(x, y + 10, 'shadow');
        // передаем текстуру прямо сюда
        resetEnemy(enemy, x, y, this.scene, cfg.texture, cfg.animation);

        // задаем параметры
        enemy.speedType = cfg.speed;
        enemy.hp = IncreaseEnemyHPperTime(scene, cfg.hp);
        enemy.maxHP = IncreaseEnemyHPperTime(scene, cfg.hp);


    }

    update() {



        // движение врагов
        this.group.getChildren().forEach(enemy => {


            if (!enemy.active) return;

            const angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, this.player.x, this.player.y);
            const speed = enemy.speedType || 50;


            this.scene.physics.velocityFromRotation(angle, speed, enemy.body.velocity);

            if (enemy.shadow) {
                enemy.shadow.setPosition(enemy.x, enemy.y + enemy.sprite.width * 0.35);

            }


        });

        // // hp бар
        // this.group.children.iterate(enemy => {
        //     if (!enemy.active) return;

        //     const { x, y, hp, maxHP } = enemy;
        //     const width = 40;
        //     const height = 6;
        //     const offsetY = 30;

        //     enemy.hpBar.clear();
        //     enemy.hpBar.fillStyle(0x000000, 1);
        //     enemy.hpBar.fillRect(x - width / 2, y - offsetY, width, height);
        //     enemy.hpBar.fillStyle(0xff0000, 1);
        //     enemy.hpBar.fillRect(x - width / 2, y - offsetY, width * (hp / maxHP), height);
        // });
    }

    getEnemies() {
        return this.group.getChildren();
    }

    getGroup() {
        return this.group;
    }

    getClosest() {
        return this.scene.physics.closest(this.player.gameObject, this.getEnemies());
    }
}


// class EnemyContainer extends Phaser.GameObjects.Container {
//     constructor(scene, x, y) {
//         super(scene, x, y);

//         this.scene = scene;

//         // Спрайт врага
//         this.sprite = scene.physics.add.sprite(0, 0, 'enemy');
//         this.add(this.sprite);

//         // Shadow под врагом
//         this.shadow = scene.add.image(0, 10, 'shadow');
//         this.shadow.setAlpha(0.3);
//         this.shadow.setOrigin(0.5);
//         this.add(this.shadow);

//         // Добавляем контейнер в сцену и включаем физику
//         scene.add.existing(this);
//         scene.physics.add.existing(this);

//         this.body.setCollideWorldBounds(true);
//         this.setSize(this.sprite.width, this.sprite.height);
//     }

//     reset(x, y, cfg) {
//         this.setPosition(x, y);

//         // Восстанавливаем спрайт
//         this.sprite.setTexture(cfg.texture);
//         if (cfg.animation) this.sprite.play(cfg.animation);

//         // Восстанавливаем shadow
//         this.shadow.setVisible(true);
//         this.shadow.setPosition(0, 10);

//         // Физика
//         this.body.enable = true;
//         this.setActive(true);
//         this.setVisible(true);

//         // HP
//         this.hp = IncreaseEnemyHPperTime(this.scene, cfg.hp);
//         this.maxHP = this.hp;

//         // Tween анимации
//         this.scene.tweens.killTweensOf(this);
//         this.scene.tweens.add({
//             targets: this,
//             scaleX: 1.02,
//             scaleY: 0.98,
//             yoyo: true,
//             duration: 120,
//             repeat: -1
//         });
//     }

//     deactivate() {
//         this.setActive(false);
//         this.setVisible(false);
//         this.body.enable = false;
//         this.shadow.setVisible(false);
//         this.scene.tweens.killTweensOf(this);
//     }
// }

// export default class EnemySpawner {
//     constructor(scene, player) {
//         this.scene = scene;
//         this.player = player;

//         this.group = scene.physics.add.group({
//             classType: EnemyContainer,
//             maxSize: 1050,
//             runChildUpdate: false
//         });

//         const level = levels[scene.registry.get('currentLevel')];
//         this.enemyConfigs = {
//             normal: level.enemiesConfigs.normalType,
//             fast: level.enemiesConfigs.fastType,
//             tank: level.enemiesConfigs.tankType,
//             boss: level.enemiesConfigs.bossType,
//         };
//     }

//     spawn(type = 'normal') {
//         const enemy = this.group.get(); // берём из пула
//         if (!enemy) return; // если пул пустой

//         const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
//         const distance = Phaser.Math.Between(400, 800);
//         const x = this.player.x + Math.cos(angle) * distance;
//         const y = this.player.y + Math.sin(angle) * distance;

//         const cfg = this.enemyConfigs[type] || this.enemyConfigs.normal;

//         enemy.reset(x, y, cfg);
//         enemy.speedType = cfg.speed;
//     }

//     update() {
//         this.group.getChildren().forEach(enemy => {
//             if (!enemy.active) return;

//             const angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, this.player.x, this.player.y);
//             const speed = enemy.speedType || 50;
//             this.scene.physics.velocityFromRotation(angle, speed, enemy.body.velocity);

//             enemy.shadow.setPosition(enemy.x, enemy.y + enemy.sprite.height * 0.35);
//         });
//     }

//     deactivateAll() {
//         this.group.getChildren().forEach(enemy => {
//             enemy.deactivate();
//         });
//     }
// }