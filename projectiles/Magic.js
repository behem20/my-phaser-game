import SkillsUI from "../ui/skillsUI.js";
import { flashIcon } from "../utils/flashIcon.js";
import { getAllClosestEnemiesInRadius } from "../utils/getAllClosestEnemiesInRadius copy.js";
import { getClosestEnemies } from "../utils/getClosestEnemies.js";
import { getClosestEnemiesInRadius } from "../utils/getClosestEnemiesInRadius.js";

export function shootMagic(scene, player, enemiesGroup, magicGroup, count, targetCount = 1, iconID, level) {

    let degList = []
    const n = 6;
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
    // console.log(1);

    const enemies = getClosestEnemiesInRadius(scene, player.gameObject, enemiesGroup.getChildren(), 1, 650);
    // const enemies = getAllClosestEnemiesInRadius( player.gameObject, enemiesGroup.getChildren(),600);

    if (enemies.length === 0) return;

    if (scene.shootMagicTimer) {//flash icon
        // console.log(iconID);
        flashIcon(scene, iconID)
    }

    for (let i = 0; i < count; i++) {

        const enemy = enemies[0]
        scene.audio.play('fireAuraSfx', { rate: Phaser.Math.FloatBetween(0.95, 1.05) })

        const magic = magicGroup.get(player.x, + player.y, "magic");
        if (!magic) return;

        magic.setActive(true);
        magic.setVisible(true);
        magic.enableBody(true, player.x, player.y, true, true);
        magic.life = 1500
        magic.body.setCollideWorldBounds(false);
        magic.body.onWorldBounds = false;
        magic.body.allowGravity = false;

        // if (level <= 4) {
        //     magic.trail = scene.add.particles(0, 0, 'flares', {
        //         frame: 'yellow',
        //         lifespan: 200,
        //         speed: { min: 10, max: 80 },
        //         angle: { min: 0, max: 360 },
        //         scale: { start: 0.35, end: 0.1 },
        //         alpha: { start: 1, end: 0 },
        //         frequency: 10,
        //         rotate: 150,
        //         tint: [0x0000ff, 0xff00ff],
        //         blendMode: 'ADD',
        //         follow: magic
        //     });

        // } else if (level <= 7) {

        //     magic.trail = scene.add.particles(0, 0, 'flares', {
        //         frame: 'yellow',
        //         lifespan: 200,
        //         speed: { min: 10, max: 80 },
        //         angle: { min: 0, max: 360 },
        //         scale: { start: 0.35, end: 0.1 },
        //         alpha: { start: 1, end: 0 },
        //         frequency: 10,
        //         rotate: 150,
        //         tint: [0xff22ee, 0xff0000],
        //         blendMode: 'ADD',
        //         follow: magic
        //     });
        // } else {
        //     magic.trail = scene.add.particles(0, 0, 'flares', {
        //         frame: 'yellow',
        //         lifespan: 200,
        //         speed: { min: 10, max: 80 },
        //         angle: { min: 0, max: 360 },
        //         scale: { start: 0.45, end: 0.1 },
        //         alpha: { start: 1, end: 0 },
        //         frequency: 10,
        //         rotate: 150,
        //         tint: [0xff0000, 0x00ff00],
        //         blendMode: 'ADD',
        //         follow: magic
        //     });
        // }



        // magic.body.checkCollision.none = false; // важно!
        // magic.trail = scene.add.particles(0, 0, 'flares', {
        //     frame: 'green',
        //     lifespan: 25,
        //     speed: { min: 1000, max: 1500 },
        //     angle: { min: 0, max: 360 },
        //     scale: { start: 0.35, end: 0.1 },
        //     alpha: { start: 1, end: 0 },
        //     frequency: 10,
        //     // rotate: 150,
        //     tint: [0x0000ff, 0xff00ff],
        //     // blendMode: 'ADD',
        //     follow: magic
        // });

        let angle = Phaser.Math.Angle.Between(player.x, player.y, enemy.x, enemy.y);
        angle += Phaser.Math.DegToRad(degList[i]); // ±5°

        scene.physics.velocityFromRotation(angle, 750, magic.body.velocity);//1500
        magic.rotation = angle


    }
}