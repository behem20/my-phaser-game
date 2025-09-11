import { applyDamageWithCooldown } from "../utils/applyDamageWithCooldown.js";
import { damageEnemy } from "../utils/damageEnemy.js";
import { addDamage } from "../utils/damageStats.js";
import { flashIcon } from "../utils/flashIcon.js";
import { getClosestEnemies } from "../utils/getClosestEnemies.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

export function shootFire(scene, player, enemiesGroup, fireGroup, targetCount = 1, iconID, spellLevel) {

    const level = spellLevel - 1
    const enemies = getClosestEnemies(scene, player.gameObject, enemiesGroup.getChildren(), targetCount);
    if (enemies.length === 0) return;
    flashIcon(scene, iconID)
    enemies.forEach(enemy => {
        scene.fireShootSfx.play();
        let fire = '';

        if (level > 6) {
            fire = fireGroup.create(player.x, player.y, "fireAnims_2");
        } else {
            fire = fireGroup.create(player.x, player.y, "fireAnims");
        }


        const randomScale = Phaser.Math.FloatBetween(0.7, 1.3);
        const randomBigScale = Phaser.Math.FloatBetween(1.3, 1.6);
        fire.setScale(randomScale);
        if (level < 4) {

            fire.trail = scene.add.particles(0, 0, 'flares', {
                frame: 'yellow',
                lifespan: 35 * level,
                speed: 20,
                scale: { start: 0.2, end: 0 },
                alpha: { start: 1, end: 0 },
                tint: [0xffffff, 0xff11ff],
                blendMode: 'ADD',
                follow: fire,
            });
        } else if (level < 7) {
            fire.trail = scene.add.particles(0, 0, 'red-flares', {
                frame: 'yellow',
                lifespan: 30 * level,
                speed: 20,
                scale: { start: 0.2, end: 0 },
                alpha: { start: 1, end: 0 },
                tint: [0xffffff, 0xff11ff],
                blendMode: 'ADD',
                follow: fire,
            });

        } else {
            fire.trail = scene.add.particles(0, 0, 'red-flares', {
                frame: 'red',
                lifespan: 50 * level,
                speed: 20,

                scale: { start: 0.2, end: 0 },
                alpha: { start: 1, end: 0 },
                tint: [, 0xff11ff, 0xffffff],
                // blendMode: 'ADD',
                follow: fire,
            });
            // fire.trail = scene.add.particles(0, 0, 'flares', {
            //     frame: 'white',
            //     lifespan: 50 * level,
            //     speed: 335,
            //     angle: { min: 0, max: 360 },
            //     scale: { start: 0.2, end: 0 },
            //     alpha: { start: 1, end: 0 },
            //     tint: [0x11ff00, 0x1111ff],
            //     blendMode: 'ADD',
            //     follow: fire,
            // });

        }

        if (level > 6) {
            fire.play('fireAnim_2')
            fire.setScale(randomBigScale)
        } else {
            fire.play('fireAnim')
        }
        // fire.play('fireAnim')
        fire.body.allowGravity = false;


        const angle = Phaser.Math.Angle.Between(player.x, player.y, enemy.x, enemy.y);
        const speed = 350;
        // fire.setAngle(90  + Phaser.Math.DegToRad(-90));
        fire.setOrigin(0.5, 0.5)
        fire.setRotation(angle - 1.496);

        // fire.setTint(0xff4507); 
        scene.physics.velocityFromRotation(angle, speed, fire.body.velocity);
        scene.time.delayedCall(2000, () => {
            if (fire.active) {
                fire.destroy()
                fire.trail.destroy()
            }
        });
    })
    player.attackTextureOnce();

}

export function handleFireHit(scene, fire, enemy, hud) {
    if (!enemy.active) return;
    scene.fireShootCollisionSfx.play();

    const fireExpl = scene.add.sprite(fire.x, fire.y, 'fireExplosionAnims')
    const randomScale = Phaser.Math.FloatBetween(1.1, 2.1);
    fireExpl.setScale(randomScale)
    fireExpl.play('fireExplosionAnim')
    fireExpl.on("animationcomplete", () => {
        fireExpl.destroy();
    });

    fire.trail.stop()
    scene.time.delayedCall(300, () => {
        fire.trail.destroy();
    });
    const explosionRadius = 150;

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
            applyDamageWithCooldown(scene, 'fire', enemy, 10, 10)
            addDamage("fire", playerSkills.fire.finalDamage(scene));
        }
    });



    fire.destroy();
    fire.trail.destroy()
}