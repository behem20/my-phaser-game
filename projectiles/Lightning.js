
import { applyDamageWithCooldown } from "../utils/applyDamageWithCooldown.js";
import { damageEnemy } from "../utils/damageEnemy.js";
import { addDamage } from "../utils/damageStats.js";
import { flashIcon } from "../utils/flashIcon.js";
import { flashScreen } from "../utils/FlashScreen.js";
import { getClosestEnemies } from "../utils/getClosestEnemies.js";
import { getClosestEnemiesInRadius } from "../utils/getClosestEnemiesInRadius.js";
import { getHUD } from "../utils/hudManager.js";
import { playerSkills } from "../utils/upgradesManager.js";

export function shootLightning(scene, player, enemiesGroup, lightningGroup, targetCount = 1, iconID) {
    const lightningKeys = ['lightning1'];
    const finalCount = targetCount + scene.playerInitCfgs.lightningCountBonus


    const enemies = getClosestEnemiesInRadius(scene, player.gameObject, enemiesGroup.getChildren(), finalCount, scene.LightMaskRadius ? scene.LightMaskRadius + 50:400);
    // const enemies = getClosestEnemies(scene,player.gameObject, enemiesGroup.getChildren(), finalCount);


    if (enemies.length === 0) return;
    flashIcon(scene, iconID)
    // flashScreen(scene, 0x99ccff, 0.1)
    scene.lightningShootSfx.play();

    enemies.forEach(enemy => {
        // scene.magicShootSfx.setRate(Phaser.Math.FloatBetween(0.9, 1.1));

        // scene.magicShootSfx.play();

        const randomKey = Phaser.Utils.Array.GetRandom(lightningKeys);

        const lightning = lightningGroup.create(enemy.x, enemy.y, randomKey).setOrigin(0.5, 1);

        shrinkSprite(scene, lightning)
        lightning.uniqueId = Phaser.Utils.String.UUID(); // уникальный id
        lightning.body.allowGravity = false;

        if (!enemy.active) return;
        flashRandomClouds(scene, enemy.x, scene.cameras.main.scrollY, enemy.x, enemy.y)
        applyDamageWithCooldown(scene, 'lightning', enemy, 10, 10, lightning)



        // scene.tweens.add({
        //     targets: lightning,
        //     alpha: 0,
        //     yoyo: true,        // вернуться обратно к alpha=1
        //     repeat: 1,         // сколько раз повторить (1 = один цикл туда-обратно)
        //     duration: 70,      // скорость мигания
        //     onComplete: () => {
        //         lightning.destroy(); // удаляем после анимации
        //     }
        // });
        // scene.time.delayedCall(150, () => lightning.destroy())



    })

    player.attackTextureOnce();
}

export function createCloudsParticles(scene, x) {
    scene.thunderCloudsTrail = scene.add.particles(x, 0, 'flares', {
        frame: 'white',
        lifespan: 520,
        // speed: 360,
        speed: { min: 120, max: 220 },
        angle: { start: 0, end: 180, steps: 8 },
        scale: { start: 0.5, end: 0.7 },
        alpha: { start: 0.9, end: 0 },
        frequency: 10, // частота появления
        quantity: 1,
        tint: 0x888888, // серый цвет (hex)
        // tint: [0xff6633, 0xff3322, 0xdd5522],
        // tint: [0xff6633, 0xff3322, 0xddee22],
        // tint: [0xff66FF, 0x2200FF],
        // tint: [0xffffFF, 0x2200FF],
        // tint: [0xff0000,]
        // blendMode: 'SCREEN'
        // blendMode: 'ADD',
    }).setScrollFactor(0)
    // const speeds = [{min: 50, max: 130 },{min: 80, max: 180 },{min: 120, max: 220 }]


    if (scene.thunderClouds) scene.thunderClouds.push(scene.thunderCloudsTrail)

}
export function createClouds(scene) {
    if (scene.thunderClouds) {
        scene.thunderClouds.forEach(el => el.destroy());
        scene.thunderClouds.length = 0
    }

    for (let x = 0; x < scene.scale.width + 100; x += Phaser.Math.Between(100, 150)) {
        createCloudsParticles(scene, x);
    }


}
export function flashRandomClouds(scene, skyX, skyY, enemyX, enemyY) {

    if (!scene.sparkCloudsTrail) {
        scene.sparkCloudsTrail = scene.add.particles(0, 0, 'flares', {
            frame: 'blue',
            lifespan: 220,
            speed: { min: 220, max: 420 },
            // speed: {min: 120, max: 220 },
            angle: { start: 0, end: 180, steps: 15 },
            // angle: { start: 0, end: 360, steps: 30 },
            scale: { start: 0.7, end: 0.2 },
            alpha: { start: 1, end: 0 },
            frequency: -1, // частота появления
            quantity: 1,
            // tint: [0xff6633, 0xff3322, 0xdd5522],
            tint: [0x886683, 0x888888, 0x885522],
            // tint: [0xff6633, 0xff3322, 0xddee22],
            // tint: [ 0xff0000],
            // blendMode: 'SCREEN'
            blendMode: 'ADD',
        }).setDepth(2)
    }

    // if (scene.sparkCloudsTrail && scene.sparkCloudsTrail.manager) {
    //     scene.sparkCloudsTrail.emitParticleAt(skyX, skyY + 10, 15);
    // }
    scene.sparkCloudsTrail.emitParticleAt(skyX, skyY + 10, 15,);

    if (!scene.contactLightningTrail) {
        scene.contactLightningTrail = scene.add.particles(0, 0, 'flares', {
            frame: 'white',
            lifespan: 220,
            speed: { min: 60, max: 220 },
            // speed: {min: 120, max: 220 },
            angle: { start: 0, end: 360, steps: 10 },
            // angle: { start: 0, end: 360, steps: 30 },
            scale: { start: 0.7, end: 0.2 },
            alpha: { start: 1, end: 0.5 },
            frequency: -1, // частота появления
            quantity: 1,
            tint: [0xff6633, 0xff3322, 0xdd5522],
            // tint: [0xff6633, 0xff3322, 0xddee22],
            // tint: [ 0xff0000],
            // blendMode: 'SCREEN'
            blendMode: 'ADD',
        }).setDepth(4)
    }
    // if (scene.contactLightningTrail && scene.contactLightningTrail.manager) {
    //     scene.contactLightningTrail.emitParticleAt(skyX, skyY + 10, 15);
    // }
    scene.contactLightningTrail.emitParticleAt(enemyX, enemyY, 10,);
}
function shrinkSprite(scene, sprite) {
    const randExtentionScaleX = Phaser.Math.FloatBetween(0.8, 1.15)
    const randShrinkScaleX = Phaser.Math.FloatBetween(0.2, 0.5)
    scene.tweens.add({
        targets: sprite,
        scaleX: sprite.scaleX * randExtentionScaleX, // сначала чуть шире
        duration: 40,
        yoyo: true,
        ease: 'Quad.easeOut',
        onComplete: () => {
            scene.tweens.add({
                targets: sprite,
                scaleX: sprite.scaleX * randShrinkScaleX, // теперь схлопываем
                duration: 100,
                ease: 'Linear',
                onComplete: () => { sprite.destroy() }
            });
        }
    });
}
