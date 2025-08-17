import {
    handleMagicHit,
    handleLightHit,
    handleTouchEnemy,
    handleCoinCollect,
    handleItemCollect,
    handleTornadoHit,
    handleSatelliteHit,
    handleMeteorHit,
    handleHealthPackCollect
} from "../src/handlers/collisionHandlers.js";

import { handleFireHit } from "../projectiles/Fire.js";
import { playerSkills } from "./upgradesManager.js";
import { addDamage } from "./damageStats.js";

export function setupCollisions(scene) {
    const enemiesGroup = scene.enemies.getGroup();
    const player = scene.player.gameObject;
    const coinsGroup = scene.coins.getGroup();
    const itemsGroup = scene.items.getGroup();
    const healthPacksGroup = scene.healthPack.getGroup()
    // Магия
    scene.physics.add.overlap(scene.magicShots, enemiesGroup, (magic, enemy) => {
        handleMagicHit(scene, magic, enemy);

    }, null, scene);

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
        const now = scene.time.now;
        if (!tornadoObj.nextDamageTime || now > tornadoObj.nextDamageTime) {
            handleTornadoHit(scene, tornadoObj, enemy);

            tornadoObj.nextDamageTime = now + playerSkills.tornado.damageDelay;
        }
    });
    //tonado
    scene.physics.add.overlap(scene.tornadoGroup, enemiesGroup, (tornadoObj, enemy) => {
        const now = scene.time.now;

        // Если у торнадо ещё нет словаря таймеров — создаём
        if (!tornadoObj.damageTimers) {
            tornadoObj.damageTimers = new Map();
        }

        const nextHitTime = tornadoObj.damageTimers.get(enemy) || 0;

        if (now > nextHitTime) {
            handleTornadoHit(scene, tornadoObj, enemy);

            // Запоминаем время следующего удара именно для этого врага
            tornadoObj.damageTimers.set(enemy, now + playerSkills.tornado.damageDelay);
        }
    });


    // satellite
    scene.physics.add.overlap(
        scene.satellites.getGroup(),
        enemiesGroup,
        (sat, enemy) => {
            const now = scene.time.now;
            if (!enemy.nextSatelliteHitTime || now > enemy.nextSatelliteHitTime) {
                handleSatelliteHit(scene, sat, enemy);

                enemy.nextSatelliteHitTime = now + playerSkills.satellite.delayDamage;
            }
        }
    );
    // meteor
    scene.physics.add.collider(
        scene.meteorShots,
        enemiesGroup,
        (meteor, enemy) => {
            handleMeteorHit(scene, meteor, enemy);

        }
    );
    // hail
    scene.physics.add.collider(
        scene.hailShots,
        enemiesGroup,
        (hail, enemy) => {
            handleMeteorHit(scene, hail, enemy);

        }
    );


    // Враг касается игрока
    scene.physics.add.overlap(player, enemiesGroup, (player, enemy) => {
        handleTouchEnemy(scene, player, enemy);
    }, null, scene);

    // Игрок собирает монету
    scene.physics.add.overlap(player, coinsGroup, (player, coin) => {
        handleCoinCollect(scene, player, coin);
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
    // scene.physics.add.collider(enemiesGroup, enemiesGroup);
}