import { getClosestEnemies } from "../utils/getClosestEnemies.js";

export function shootMagic(scene, player, enemiesGroup, magicGroup, targetCount = 1) {
    const enemies = getClosestEnemies(player.gameObject, enemiesGroup.getChildren(), targetCount);


    if (enemies.length === 0) return;

    enemies.forEach(enemy => {
        // scene.magicShootSfx.setRate(Phaser.Math.FloatBetween(0.9, 1.1));

        scene.magicShootSfx.play();
        const magic = magicGroup.create(player.x, player.y, "magic");

        //start particles
        magic.trail = scene.add.particles(0, 0, 'flares', {
            frame: 'yellow', // можно поменять на 'white', 'yellow', и т.д.
            lifespan: 400,
            speed: { min: 10, max: 80 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.35, end: 0.1 },
            alpha: { start: 1, end: 1 },
            frequency: 10,
            rotate: 150,
            tint:[0x0000ff, 0xff00ff],
            blendMode: 'ADD',
            follow: magic
        });

        // magic.trail = scene.add.particles(0, 0, 'flares', {
        //     frame: 'yellow',
        //     lifespan: 200,
        //     speed: 20,
        //     scale: { start: 0.35, end: 0 },
        //     alpha: { start: 1, end: 0 },
        //     tint: [0xff9999, 0xff1100],
        //     blendMode: 'ADD',
        //     follow: magic
        // });
        // magic.trail = scene.add.particles(0, 0, 'flares', {
        //     frame: 'yellow',
        //     lifespan: 600,
        //     speed: 15,
        //     scale: { start: 0.45, end: 0 },
        //     alpha: { start: 0.8, end: 0 },
        //     tint: [0x66ff33, 0x99cc00],
        //     blendMode: 'ADD',
        //     follow: magic
        // });

        // magic.trail = scene.add.particles(0, 0, 'flares', {
        //     frame: 'white',
        //     lifespan: 300,
        //     speed: 50,
        //     scale: { start: 0.1, end: 0 },
        //     alpha: { start: 1, end: 0 },
        //     tint: [0xffff00, 0xffffff],
        //     blendMode: 'SCREEN',
        //     follow: magic
        // });
        // magic.trail = scene.add.particles(0, 0, 'flares', {
        //     frame: 'white',
        //     lifespan: 600,
        //     speed: 10,
        //     scale: { start: 0.6, end: 0 },
        //     alpha: { start: 1, end: 0 },
        //     tint: [0xffffcc, 0xffffff],
        //     blendMode: 'ADD',
        //     follow: magic
        // });
        magic.body.allowGravity = false;
        const angle = Phaser.Math.Angle.Between(player.x, player.y, enemy.x, enemy.y);
        const speed = 500;
        scene.physics.velocityFromRotation(angle, speed, magic.body.velocity);


        scene.time.delayedCall(2000, () => {
            if (magic.active) { // остановить эмиттер

                magic.destroy()
            }
        });
    })


    player.attackTextureOnce();
}