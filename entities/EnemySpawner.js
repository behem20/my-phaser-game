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
}
export function resetEnemy(enemy, x, y, scene, textureKey = 'enemy', animationKey) {

    const scale = 0.85
    const w = enemy.sprite.width * scale;
    const h = enemy.sprite.height * scale;


    enemy.body.setSize(w, h);
    enemy.body.setOffset(-w / 2, - h / 2);

    enemy.shadow.setAlpha(0.3);
    enemy.shadow.setOrigin(0.5);
    enemy.shadow.setDepth(enemy.sprite.depth - 1); // всегда под врагом
    enemy.shadow.setScale(w / enemy.shadow.width * 0.8)


    if (animationKey) {
        enemy.sprite.play(animationKey);
    }
    scene.tweens.add({
        targets: enemy,
        scaleX: 1.02,
        scaleY: 0.98,
        yoyo: true,
        duration: 120,
        repeat: -1
    });

    // перерисовать HP бар
    // if (enemy.hpBar) {
    //     enemy.hpBar.destroy();
    // }
    // enemy.hpBar = enemy.scene.add.graphics();
    // enemy.hpBar.setDepth(10);
}

export default class EnemySpawner {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;


        this.group = scene.physics.add.group({
            classType: EnemyContainer,
            maxSize: 350,
            runChildUpdate: false
        });
        scene.anims.create({
            key: 'enemy_normal_1',
            frames: this.scene.anims.generateFrameNumbers('sheet_enemy_normal_1', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        });
        scene.anims.create({
            key: 'enemy_fast_1',
            frames: this.scene.anims.generateFrameNumbers('sheet_enemy_fast_1', { start: 0, end: 3 }),
            frameRate: 12,
            repeat: -1
        });
        scene.anims.create({
            key: 'enemy_tank_1',
            frames: this.scene.anims.generateFrameNumbers('sheet_enemy_tank_1', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        });
        scene.anims.create({
            key: 'enemy_boss_1',
            frames: this.scene.anims.generateFrameNumbers('sheet_enemy_boss_1', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
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

        const enemy = new EnemyContainer(scene, x, y, cfg.texture, cfg.animation);
        this.group.add(enemy)

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