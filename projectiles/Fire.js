import { applyDamageWithCooldown } from "../utils/applyDamageWithCooldown.js";
import { damageEnemy } from "../utils/damageEnemy.js";
import { addDamage } from "../utils/damageStats.js";
import { flashIcon } from "../utils/flashIcon.js";
import { getClosestEnemies } from "../utils/getClosestEnemies.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

export function shootFire(scene, player, enemiesGroup, fireGroup, targetCount = 1, iconID, spellLevel) {

    flashIcon(scene, iconID)
    for (let i = 0; i <= targetCount; i++) {

        let fire = scene.fireShots.get(player.x, player.y, 'bomb')

        fire.body.allowGravity = false;


        const angle = Phaser.Math.Angle.Random();
        const speed = Phaser.Math.Between(320, 370);

        fire.setOrigin(0.5, 0)
        fire.setScale(Phaser.Math.FloatBetween(1, 2))

        scene.physics.velocityFromRotation(angle, speed, fire.body.velocity);

        // fire.trail = scene.add.particles(0, 0, 'flares', {
        //     frame: 'yellow',
        //     lifespan: 35,
        //     speed: 20,
        //     scale: { start: 0.2, end: 0 },
        //     alpha: { start: 1, end: 0 },
        //     tint: [0xffffff, 0xff11ff],
        //     blendMode: 'ADD',
        //     follow: fire,
        // });

        scene.time.delayedCall(2000, () => {
            if (fire.active) {
                fire.destroy()
                if (fire.trail) {
                    fire.trail.destroy()
                }

            }
        });
    }
}

export function handleFireHit(scene, fire, enemy, hud) {
    if (!enemy.active) return;
    //задать взырыв бомбы после какогото времени тут ане на оверлап или задать чтобы после проникновений 

    scene.time.delayedCall(Phaser.Math.Between(100, 200), () => { // apply hit after goes inside by time

        scene.audio.play('fireShootCollisionSfx')
        const fireExpl = scene.add.sprite(fire.x, fire.y, 'fireExplosionAnims')
        const randomScale = Phaser.Math.FloatBetween(1.1, 2.1);
        fireExpl.setScale(randomScale)
        fireExpl.setDepth(107)
        fireExpl.play('fireExplosionAnim')
        fireExpl.on("animationcomplete", () => {
            fireExpl.destroy();
        });


        // const explosionRadius = Phaser.Math.FloatBetween(150 + 150 * playerSkills.fire.level * 0.05, 150 + 150 * playerSkills.fire.level * 0.05 * 1.25);

        const explosionRadius = Phaser.Math.FloatBetween(fire.width*2, fire.width*2 * 1.5);



        // Визуал взрыва
        const explosion = scene.add.circle(fire.x, fire.y, explosionRadius, 0xffffff, 0.3)
            .setDepth(10)
        // .setBlendMode('ADD');
        scene.time.delayedCall(200, () => explosion.destroy());

        // Уничтожаем врагов в радиусе
        scene.enemies.getGroup().getChildren().forEach(otherEnemy => {
            if (!otherEnemy.active) return;
            const distance = Phaser.Math.Distance.Between(fire.x, fire.y, otherEnemy.x, otherEnemy.y);


            if (distance <= explosionRadius) {
                // applyDamageWithCooldown(scene, 'fire', enemy, 10, 1)
                damageEnemy(scene, otherEnemy, playerSkills.fire.finalDamage(scene), getHUD())
                addDamage('fire', playerSkills.fire.finalDamage(scene));
            }
        });
        if (fire.trail) {
            fire.trail.destroy()
        }
        fire.destroy();
    })
    fire.body.checkCollision.none = true;//goes inside crowd


}
