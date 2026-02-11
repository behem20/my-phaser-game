import {
    handleMagicHit,
    handleLightHit,
    handleTouchEnemy,
    handleCoinCollect,
    handleItemCollect,
    handleTornadoHit,
    handleSatelliteHit,
    handleHealthPackCollect,
    handleHailHit,
    handleChestCollect,
    handleMagnetCollect
} from "../src/handlers/collisionHandlers.js";

import { handleFireHit } from "../projectiles/Fire.js";
import { playerSkills } from "./upgradesManager.js";
import { addDamage } from "./damageStats.js";

export function setupCollisions(scene) {
    const enemiesGroup = scene.enemies.getGroup();
    const player = scene.player.gameObject;
    const coinsGroup = scene.coins.getGroup();
    const itemsGroup = scene.items.getGroup();
    const chestGroup = scene.chests.getGroup();
    const magnetsGroup = scene.magnets.getGroup();
    const healthPacksGroup = scene.healthPack.getGroup()
    // Магия
    scene.magicCollider = scene.physics.add.overlap(scene.magicShots, enemiesGroup, (magic, enemy) => {
        handleMagicHit(scene, magic, enemy);

    }, null, scene);

    // scene.physics.add.overlap(scene.lightShots, player, () => {});

    // Огонь
    scene.physics.add.overlap(scene.fireShots, enemiesGroup, (fire, enemy) => {
        handleFireHit(scene, fire, enemy, scene.hud);
    }, null, scene);

    // свет
    scene.physics.add.overlap(scene.lightShots, enemiesGroup, (light, enemy) => {
        handleLightHit(scene, light, enemy);
    }, null, scene);

    //tornado
    scene.physics.add.overlap(scene.tornadoGroup, enemiesGroup, (tornadoObj, enemy) => {
        handleTornadoHit(scene, tornadoObj, enemy);
    });

    // satellite
    scene.physics.add.overlap(
        scene.satellites.getGroup(),
        enemiesGroup,
        (sat, enemy) => {
            handleSatelliteHit(scene, sat, enemy);
        }
    );
  
    // hail
    scene.physics.add.collider(
        scene.hailShots,
        enemiesGroup,
        (hail, enemy) => {
            handleHailHit(scene, hail, enemy);

        }
    );


    // Враг касается врага


    // Враг касается игрока
    scene.physics.add.overlap(player, enemiesGroup, (player, enemy) => {
        handleTouchEnemy(scene, player, enemy);
    }, null, scene);

    // Игрок собирает монету
    scene.physics.add.overlap(player, coinsGroup, (player, coin) => {
        handleCoinCollect(scene, player, coin);
    }, null, scene);
    // Игрок собирает сундук
    scene.physics.add.overlap(player, chestGroup, (player, chest) => {
        handleChestCollect(scene, player, chest);
    }, null, scene);
    // Игрок собирает магнит
    scene.physics.add.overlap(player, magnetsGroup, (player, magnet) => {
        handleMagnetCollect(scene, player, magnet);
    }, null, scene);

    // Игрок собирает аптеку
    scene.physics.add.overlap(player, healthPacksGroup, (player, hp) => {
        handleHealthPackCollect(scene, player, hp);
    }, null, scene);

    // Игрок собирает айтем
    scene.physics.add.overlap(player, itemsGroup, (player, item) => {
        handleItemCollect(scene, player, item);
    }, null, scene);
    // enemy touch enemy
    scene.physics.add.collider(enemiesGroup, enemiesGroup);
}