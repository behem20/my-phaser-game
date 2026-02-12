
import { IncreaseEnemyHPperTime } from "../utils/EnemyIncreaseHP.js";
import { HPBar } from "./HpBar.js";

class EnemyContainer extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, textureKey, animationKey) {
        super(scene, x, y, textureKey);
        this.scene = scene

        if (animationKey) { this.play(animationKey) }

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setActive(false);
        this.setVisible(false);

        this.shadow = this.scene.add.image(x + 1500, y, 'shadow')
        this.shadow.setVisible(false)

        this.hpBar = new HPBar(this.scene, this)

    }
    deactivateEnemy() {
        // this.hpBar.graphics.clear()

        this.hpBar.graphics.setVisible(false)
        this.setActive(false);
        this.setVisible(false);
        this.body.enable = false;
        this.shadow.setVisible(false)

    }

    activate(x, y) {
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);
        this.body.enable = true;
        this.clearTint();
        this.setScale(1)
        this.setAlpha(1);
    }
}

export function resetEnemy(scene, enemy, cfg) {

    // console.log(enemyPercentWidth);

    enemy.setTexture(cfg.texture)
    enemy.play(cfg.animation);
    enemy.setOrigin(0.5)
    const scale = 0.8
    const w = enemy.width * scale;
    const h = enemy.height * scale;
    enemy.body.setSize(w, h);

    // enemy.setScale(2)
    enemy.body.setCircle(w / 2);

    enemy.speedType = cfg.speed;
    enemy.maxHP = IncreaseEnemyHPperTime(scene, cfg.hp);
    enemy.hp = IncreaseEnemyHPperTime(scene, cfg.hp);
    enemy.isBoss = cfg.animation == 'enemy_boss_1'
    enemy.isSpecial = Math.random() > 0.9 ? true : false; //is special ??
    enemy.inKnocked = false

    //enemy shadow
    enemy.shadowOffSet = Phaser.Math.FloatBetween(0.25, 0.3)
    // enemy.shadow.setScale(enemy.isBoss ? enemy.width / 30 : enemy.width / 35)

    enemy.shadow.setScale(enemy.isBoss ? enemy.width / 50 : enemy.width / 45)
    enemy.shadow.setAlpha(Phaser.Math.FloatBetween(0.4, 0.6))
    enemy.shadow.setDepth(enemy.depth - 1)
    enemy.shadow.setVisible(true)


}

export default class EnemySpawner {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;

        this.group = scene.physics.add.group({
            classType: EnemyContainer,
            maxSize: 450,
            runChildUpdate: false
        });

        this.enemyConfigs = {

            normal: scene.level.levels[scene.registry.get('currentLevel')].enemiesConfigs.normalType,
            fast: scene.level.levels[scene.registry.get('currentLevel')].enemiesConfigs.fastType,
            tank: scene.level.levels[scene.registry.get('currentLevel')].enemiesConfigs.tankType,
            boss: scene.level.levels[scene.registry.get('currentLevel')].enemiesConfigs.bossType,
            midNormal: scene.level.levels[scene.registry.get('currentLevel')].enemiesConfigs.midNormalType,
            midFast: scene.level.levels[scene.registry.get('currentLevel')].enemiesConfigs.midFastType,
            midTank: scene.level.levels[scene.registry.get('currentLevel')].enemiesConfigs.midTankType,
            midBoss: scene.level.levels[scene.registry.get('currentLevel')].enemiesConfigs.midBossType,
        };
        this.updateDirectionTime = 0
    }
    spawn(scene, type = 'normal') {
        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
        // const distance = Phaser.Math.Between(1000, 1500);//550 600 //1050 1200
        const distance = Phaser.Math.Between(400, 500);
        const x = this.player.x + Math.cos(angle) * distance;
        const y = this.player.y + Math.sin(angle) * distance;

        // берем конфиг врага
        const cfg = this.enemyConfigs[type] || this.enemyConfigs.normal;

        const enemy = this.group.get()
        if (!enemy) return;

        enemy.activate(x, y)
        resetEnemy(scene, enemy, cfg);
    }

    update(delta) {
        this.group.getChildren().forEach(enemy => {
            if (!enemy.active || enemy.isKnocked) return;
            enemy.shadow.setPosition(enemy.x, enemy.y + enemy.height * enemy.shadowOffSet)
        });

        if (this.updateDirectionTime >= 250) {
            this.group.getChildren().forEach(enemy => {
                if (!enemy.active || enemy.isKnocked) return;
                this.updateDirection(enemy)
            })
            this.updateDirectionTime = 0
        }
        this.updateDirectionTime += delta
        // this.group.getChildren().forEach(enemy => {
        //     if (!enemy.active) return;

        //     enemy.hpBar.update(enemy.hp, enemy.maxHP)
        // })

    }
    updateDirection(enemy) {
        const angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, this.player.x, this.player.y);
        const speed = enemy.speedType || 50;
        this.scene.physics.velocityFromRotation(angle, speed, enemy.body.velocity);
    }
    updatePosition(enemy) {

        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
        // const distance = Phaser.Math.Between(1000, 1500);//550 600 //1050 1200
        const distance = Phaser.Math.Between(600, 700);
        const x = this.player.x + Math.cos(angle) * distance;
        const y = this.player.y + Math.sin(angle) * distance;

        const distanceToPlayer = Phaser.Math.Distance.Between(this, this.player.x, this.player.y, enemy.x, enemy.y)
        if (distance > 1200) {
            enemy.x = Phaser.Math.Between(700)
        }
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

