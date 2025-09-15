
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
        // this.body.setCircle(cfg.radius, enemy.width/2 - cfg.radius, enemy.height/2 - cfg.radius);
        this.body.setCollideWorldBounds(true);



    }
    deactivateEnemy() {
        this.setActive(false);
        this.setVisible(false);
        this.body.enable = false;

        if (this.sprite) this.sprite.setVisible(false);
        // if (this.shadow) this.shadow.setVisible(false); // скрываем тень
        if (this.shadow) this.shadow.destroy(); // скрываем тень
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
            this.shadow.setTexture('shadow');
            this.shadow.setVisible(true);        // включаем тень
            this.shadow.setPosition(x, y + 10); // корректируем позицию
            this.shadow.setAlpha(0.3);
            this.shadow.setScale(this.sprite.width / this.shadow.width * 0.8);
            this.shadow.setDepth(this.sprite.depth - 1);


        }
    }
}



export function resetEnemy(enemy, x, y, scene, textureKey = 'enemy', animationKey = 'enemy_normal_1', textureRadius = 20) {

    enemy.hpBar = null;
    enemy.shadow = scene.add.image(x, y + 10, 'shadow');
    enemy.activate(x, y, textureKey, animationKey)

    const scale = 0.80

    const w = enemy.sprite.width * scale;
    const h = enemy.sprite.height * scale;

    enemy.body.setSize(w, h);
    enemy.body.setOffset(-w / 2, - h / 2);

    enemy.body.setCircle(textureRadius * scale,);
    enemy.setAlpha(1)


    enemy.shadow.setAlpha(0.3)

    enemy.isBoss = animationKey == 'enemy_boss_1'



    enemy.isSpecial = false;
    enemy.isSpecial = Math.random() > 0.9 ? true : false; //is special ??
}

export default class EnemySpawner {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;


        this.group = scene.physics.add.group({
            classType: EnemyContainer,
            maxSize: 500,
            runChildUpdate: false
        });


        this.enemyConfigs = {

            normal: scene.levels[scene.registry.get('currentLevel')].enemiesConfigs.normalType,
            fast: scene.levels[scene.registry.get('currentLevel')].enemiesConfigs.fastType,
            tank: scene.levels[scene.registry.get('currentLevel')].enemiesConfigs.tankType,
            boss: scene.levels[scene.registry.get('currentLevel')].enemiesConfigs.bossType,
            midNormal: scene.levels[scene.registry.get('currentLevel')].enemiesConfigs.midNormalType,
            midFast: scene.levels[scene.registry.get('currentLevel')].enemiesConfigs.midFastType,
            midTank: scene.levels[scene.registry.get('currentLevel')].enemiesConfigs.midTankType,
            midBoss: scene.levels[scene.registry.get('currentLevel')].enemiesConfigs.midBossType,
        };
    }

    spawn(scene, type = 'normal') {


        // this.scene.tweens.killTweensOf(enemy);

        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
        const distance = Phaser.Math.Between(550, 600);//550 600
        const x = this.player.x + Math.cos(angle) * distance;
        const y = this.player.y + Math.sin(angle) * distance;

        // берем конфиг врага
        const cfg = this.enemyConfigs[type] || this.enemyConfigs.normal;

        const enemy = this.group.get()

        if (!enemy) return;
        // enemy.shadow = scene.add.image(x, y + 10, 'shadow');
        // передаем текстуру прямо сюда

        resetEnemy(enemy, x, y, this.scene, cfg.texture, cfg.animation, cfg.radius);


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

