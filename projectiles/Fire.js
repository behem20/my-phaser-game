import { damageEnemy } from "../utils/damageEnemy.js";
import { getClosestEnemies } from "../utils/getClosestEnemies.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

export function shootFire(scene, player, enemiesGroup, fireGroup, targetCount = 1, hud) {


    scene.anims.create({
        key: 'fireAnim',
        frames: scene.anims.generateFrameNumbers('fireAnims', { start: 0, end: 7 }),
        frameRate: 24,
        repeat: -1
    });

    scene.anims.create({
        key: 'fireExplosionAnim',
        frames: scene.anims.generateFrameNumbers('fireExplosionAnims', { start: 0, end: 10 }),
        frameRate: 24,
        repeat: 0
    });



    const enemies = getClosestEnemies(player.gameObject, enemiesGroup.getChildren(), targetCount);
    if (enemies.length === 0) return;

    enemies.forEach(enemy => {
        scene.fireShootSfx.play();
        const fire = fireGroup.create(player.x, player.y, "fireAnims");


        fire.trail = scene.add.particles(0, 0, 'flares', {
            frame: 'yellow',
            lifespan: 200,
            speed: 20,
            scale: { start: 0.2, end: 0 },
            alpha: { start: 1, end: 0 },
            tint: [0xffffff, 0xff11ff],
            blendMode: 'ADD',
            follow: fire,
        });

        fire.play('fireAnim')
        fire.body.allowGravity = false;


        const angle = Phaser.Math.Angle.Between(player.x, player.y, enemy.x, enemy.y);
        const speed = 350;
        // fire.setAngle(90  + Phaser.Math.DegToRad(-90));
        fire.setOrigin(0.5, 0.5)
        fire.setRotation(angle - 1.496);
        const randomScale = Phaser.Math.FloatBetween(0.7, 1.3);
        fire.setScale(randomScale);
        // fire.setTint(0xff4507); 
        scene.physics.velocityFromRotation(angle, speed, fire.body.velocity);
        scene.time.delayedCall(2000, () => {
            if (fire.active) {
                fire.destroy()
            }
        });
    })
    player.attackTextureOnce();
}

export function handleFireHit(scene, fire, enemy, hud) {
    if (!enemy.active) return;

    scene.fireShootCollisionSfx.play();

    const fireExpl = scene.add.sprite(fire.x, fire.y, 'fireExplosionAnims')
    const randomScale = Phaser.Math.FloatBetween(2, 2.5);
    fireExpl.setScale(randomScale)
    fireExpl.play('fireExplosionAnim')
    fireExpl.on("animationcomplete", () => {
        fireExpl.destroy();
    });

    fire.trail.stop()
    scene.time.delayedCall(300, () => {
        fire.trail.destroy();
    });
    const explosionRadius = 100;

    // Визуал взрыва
    // const explosion = scene.add.circle(fire.x, fire.y, explosionRadius, 0xffffff, 0.3)
    //     .setDepth(10)
    //     .setBlendMode('ADD');
    // scene.time.delayedCall(200, () => explosion.destroy());

    // Уничтожаем врагов в радиусе
    scene.enemies.getGroup().getChildren().forEach(otherEnemy => {
        if (!otherEnemy.active) return;
        const distance = Phaser.Math.Distance.Between(fire.x, fire.y, otherEnemy.x, otherEnemy.y);
        if (distance <= explosionRadius) {
            damageEnemy(scene, otherEnemy, playerSkills.fire.damage, getHUD())
        }
    });

    fire.destroy();
}