import { flashIcon } from "../utils/flashIcon.js";
import { getClosestEnemies } from "../utils/getClosestEnemies.js";

export function shootLight(scene, player, lightGroup, count, enemiesGroup, iconID, spellLevel, pierceCount = 10) {
    const level = spellLevel - 1
    let degList = []
    const n = 12;
    if (count == 3) {
        degList = [-n, 0, n]
    } else if (count == 4) {
        degList = [-n * 1.5, -n / 2, n / 2, n * 1.5]
    } else if (count == 5) {
        degList = [-n * 2, -n, 0, n, n * 2]
    } else if (count == 6) {
        degList = [-n * 2.5, -n * 1.5, -n / 2, n / 2, n * 1.5, n * 2.5]
    } else if (count == 7) {
        degList = [-n * 4, -n * 3, -n * 2, -n, 0, n, n * 2, n * 3, n * 4]
    } else if (count == 8) {
        degList = [-n * 3.5, -n * 2.5, -n * 1.5, -n / 2, n / 2, n * 1.5, n * 2.5, -n * 3.5]
    } else if (count == 9) {
        degList = [-n * 4, -n * 3, -n * 2, -n, 0, n, n * 2, n * 3, -n * 4]
    }

    if (enemiesGroup.group.getLength() === 0) {
        return
    } else {
        flashIcon(scene, iconID)
        const enemies = getClosestEnemies(scene, player.gameObject, enemiesGroup.group.getChildren(), 1);

        if (enemies.length == 0) return
        const enemy = enemies[0]
        for (let i = 0; i < count; i++) {
            scene.time.delayedCall(i * 250, () => {


                scene.magicShootSfx.setRate(Phaser.Math.FloatBetween(0.95, 1.05));
                scene.magicShootSfx.play();

                const light = lightGroup.create(player.x, player.y, `light${level}`);

                if (!light) return;
                light.uniqueId = Phaser.Utils.String.UUID(); // уникальный id

                light.pierceCount = pierceCount
                let lightParticles = ''
                // if (level < 4) {
                //     light.lightParticles = scene.add.particles(0, 0, 'flares', {
                //         frame: 'white',
                //         // speed: 1000,
                //         scale: { start: 0.5, end: 0.35 },
                //         alpha: { start: 0.6, end: 0.6 },
                //         lifespan: 500,
                //         // angle: { min: 0, max: 360 },
                //         frequency: 100, // частота появления
                //         quentity: 3,
                //         tint: [0xffffff, 0xffff33],
                //         follow: light, // следят за игроком
                //         blendMode: 'ADD'
                //     }).setDepth(1);
                // } else if (level < 6) {
                //     light.lightParticles = scene.add.particles(0, 0, 'flares', {
                //         frame: 'blue',
                //         // speed: 30,
                //         scale: { start: 0.45, end: 0.45 },
                //         alpha: { start: 0.6, end: 0.6 },
                //         lifespan: 10 * level,
                //         angle: 0,
                //         frequency: 10, // частота появления
                //         tint: [0xffff33, 0x00ffff, 0x0000ff],
                //         follow: light, // следят за игроком
                //         blendMode: 'ADD'
                //     }).setDepth(1);
                // } else if (level < 7) {
                //     light.lightParticles = scene.add.particles(0, 0, 'flares', {
                //         frame: 'blue',
                //         // speed: 30,
                //         scale: { start: 0.5, end: 0.35 },
                //         alpha: { start: 0.6, end: 0.6 },
                //         lifespan: 10 * level,
                //         angle: 0,
                //         frequency: 10, // частота появления
                //         tint: [0xffffff, 0x00ffff],
                //         follow: light, // следят за игроком
                //         blendMode: 'ADD'
                //     }).setDepth(1);
                // } else {
                //     light.lightParticles = scene.add.particles(0, 0, 'flares', {
                //         frame: 'blue',
                //         // speed: 30,
                //         scale: { start: 0.5, end: 0.35 },
                //         alpha: { start: 0.6, end: 0.6 },
                //         lifespan: 10 * level,
                //         angle: 0,
                //         frequency: 10, // частота появления
                //         tint: [0xffffff, 0x0000ff],
                //         follow: light, // следят за игроком
                //         blendMode: 'ADD'
                //     }).setDepth(1);
                // }
                light.lightParticles = scene.add.particles(0, 0, 'flares', {
                    frame: 'white',
                    // speed: 1000,
                    scale: { start: 0.5, end: 0.35 },
                    alpha: { start: 0.6, end: 0.3 },
                    lifespan: 440,
                    // angle: { min: 0, max: 360 },
                    frequency: 50, // частота появления
                    quentity: 3,
                    tint: [0xffffff, 0xffff33],
                    follow: light, // следят за игроком
                    blendMode: 'ADD'
                }).setDepth(1);

                light.setOrigin(1, 0.5)
                light.body.setCircle(100)
                // light.setSize(50, 50)

                light.body.setOffset(100, 0);
                let angle = Phaser.Math.Angle.Between(player.x, player.y, enemy.x, enemy.y);


                light.rotation = angle
                
                const spread = 0.1

                angle += Phaser.Math.FloatBetween(-spread, spread)
                const speed = Phaser.Math.Between(480, 520);//480-520
                scene.physics.velocityFromRotation(angle, speed, light.body.velocity);

                scene.time.delayedCall(2500, () => {
                    if (light.active) {
                        light.lightParticles.destroy()
                        light.destroy()
                    }
                });

            });
        }
        // for (let i = 0; i < count; i++) {
        //     const light = lightGroup.create(player.x, player.y, "light");
        //     light.uniqueId = Phaser.Utils.String.UUID(); // уникальный id
        //     if (!light) return;
        //     light.setSize(70, 70)
        //     let lightParticles = '';
        //     if (level < 4) {
        //         lightParticles = scene.add.particles(0, 0, 'flares', {
        //             frame: 'white',
        //             // speed: 30,
        //             scale: { start: 0.5, end: 0.35 },
        //             alpha: { start: 0.6, end: 0.6 },
        //             lifespan: 10 + 10 * level,
        //             angle: 0,
        //             frequency: 10, // частота появления
        //             tint: [0xffffff, 0xffff33],
        //             follow: light, // следят за игроком
        //             blendMode: 'ADD'
        //         }).setDepth(1);
        //     } else if (level < 6) {
        //         lightParticles = scene.add.particles(0, 0, 'flares', {
        //             frame: 'blue',
        //             // speed: 30,
        //             scale: { start: 0.45, end: 0.45 },
        //             alpha: { start: 0.6, end: 0.6 },
        //             lifespan: 10 * level,
        //             angle: 0,
        //             frequency: 10, // частота появления
        //             tint: [0xffff33, 0x00ffff,0x0000ff],
        //             follow: light, // следят за игроком
        //             blendMode: 'ADD'
        //         }).setDepth(1);
        //     }else if (level < 7) {
        //         lightParticles = scene.add.particles(0, 0, 'flares', {
        //             frame: 'blue',
        //             // speed: 30,
        //             scale: { start: 0.5, end: 0.35 },
        //             alpha: { start: 0.6, end: 0.6 },
        //             lifespan: 10 * level,
        //             angle: 0,
        //             frequency: 10, // частота появления
        //             tint: [0xffffff, 0x00ffff],
        //             follow: light, // следят за игроком
        //             blendMode: 'ADD'
        //         }).setDepth(1);
        //     } else {
        //         lightParticles = scene.add.particles(0, 0, 'flares', {
        //             frame: 'blue',
        //             // speed: 30,
        //             scale: { start: 0.5, end: 0.35 },
        //             alpha: { start: 0.6, end: 0.6 },
        //             lifespan: 10 * level,
        //             angle: 0,
        //             frequency: 10, // частота появления
        //             tint: [0xffffff, 0x0000ff],
        //             follow: light, // следят за игроком
        //             blendMode: 'ADD'
        //         }).setDepth(1);
        //     }
        //     let angle = Phaser.Math.Angle.Between(player.x, player.y, enemies[0].x, enemies[0].y);
        //     // angle += Phaser.Math.DegToRad(Phaser.Math.Between(-count * 5, count * 5)); // ±5°

        //     angle += Phaser.Math.DegToRad(degList[i]); // ±5°

        //     scene.lightShootSfx.play();
        //     light.body.allowGravity = false;

        //     // const angle = Phaser.Math.FloatBetween(0, Math.PI * 2); // случайное направление
        //     const speed = 1000;
        //     light.rotation = angle
        //     scene.physics.velocityFromRotation(angle, speed, light.body.velocity);
        //     player.attackTextureOnce();

        //     scene.time.delayedCall(1000, () => {
        //         if (light.active) {
        //             lightParticles.destroy()
        //             light.destroy()
        //         }
        //     });
        // }
    }



}
// export function shootLight(scene, player, lightGroup, count, enemies, iconID, spellLevel) {
//     const level = spellLevel - 1


//     if (enemies.group.getLength() === 0) {
//         return
//     } else {
//         flashIcon(scene, iconID)
//         for (let i = 0; i < count; i++) {
//             const light = lightGroup.create(player.x, player.y, "light");

//             if (!light) return;
//             let lightParticles = '';
//             if (level < 4) {
//                  lightParticles = scene.add.particles(0, 0, 'flares', {
//                     frame: 'white',
//                     // speed: 30,
//                     scale: { start: 0.5, end: 0.35 },
//                     alpha: { start: 0.6, end: 0.6 },
//                     lifespan: 10+10*level,
//                     angle: 0,
//                     frequency: 3, // частота появления
//                     tint: [0xffffff, 0xffff33],
//                     follow: light, // следят за игроком
//                     blendMode: 'ADD'
//                 }).setDepth(1);
//             } else if (level < 7) {
//                  lightParticles = scene.add.particles(0, 0, 'flares', {
//                     frame: 'blue',
//                     // speed: 30,
//                     scale: { start: 0.5, end: 0.35 },
//                     alpha: { start: 0.6, end: 0.6 },
//                     lifespan: 10*level,
//                     angle: 0,
//                     frequency: 3, // частота появления
//                     tint: [0xffffff, 0x00ffff],
//                     follow: light, // следят за игроком
//                     blendMode: 'ADD'
//                 }).setDepth(1);
//             } else {
//                  lightParticles = scene.add.particles(0, 0, 'flares', {
//                     frame: 'blue',
//                     // speed: 30,
//                     scale: { start: 0.5, end: 0.35 },
//                     alpha: { start: 0.6, end: 0.6 },
//                     lifespan: 10*level,
//                     angle: 0,
//                     frequency: 3, // частота появления
//                     tint: [0xffffff, 0x0000ff],
//                     follow: light, // следят за игроком
//                     blendMode: 'ADD'
//                 }).setDepth(1);
//             }

//             scene.lightShootSfx.play();
//             light.body.allowGravity = false;

//             const angle = Phaser.Math.FloatBetween(0, Math.PI * 2); // случайное направление
//             const speed = 1100;

//             scene.physics.velocityFromRotation(angle, speed, light.body.velocity);
//             player.attackTextureOnce();

//             scene.time.delayedCall(1000, () => {
//                 if (light.active) {
//                     lightParticles.destroy()
//                     light.destroy()
//                 }
//             });
//         }
//     }



// }
