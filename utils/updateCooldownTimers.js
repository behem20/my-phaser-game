import { shootArmageddon } from "../projectiles/Armageddon.js";
import { shootFire } from "../projectiles/Fire.js";
import { shootHail } from "../projectiles/Hail.js";
import { shootLight } from "../projectiles/Light.js";
import { shootLightning } from "../projectiles/Lightning.js";
import { shootMagic } from "../projectiles/Magic.js";
import { shootTornado } from "../projectiles/Tornado.js";

export function updateCooldownTimers(scene, allSkills) {
    if (!scene.shootMagicTimer) { 0 }
    else {
        scene.shootMagicTimer.remove(false);
        if (scene.shootFakeMagicTimer) scene.shootFakeMagicTimer.destroy()//fake destroy
        scene.shootMagicTimer = scene.time.addEvent({
            delay: allSkills.magic.finalDelay(scene),
            callback: () => shootMagic(
                scene,
                scene.player,
                scene.enemies.getGroup(),
                scene.magicShots,
                allSkills.magic.count,
                allSkills.magic.targetCount,
                allSkills.magic.iconID,
                allSkills.magic.level
            ),
            loop: true
        });
    }

    if (!scene.shootFireTimer) { 0 }
    else {
        scene.shootFireTimer.remove(false);
        scene.shootFireTimer = scene.time.addEvent({
            delay: allSkills.fire.finalDelay(scene),
            callback: () => shootFire(
                scene,
                scene.player,
                scene.enemies.getGroup(),
                scene.fireShots,
                allSkills.fire.count,
                allSkills.fire.iconID,
                allSkills.fire.level
            ),
            loop: true
        });
    }

    if (!scene.shootLightTimer) { 0 }
    else {
        scene.shootLightTimer.remove(false);
        scene.shootLightTimer = scene.time.addEvent({
            delay: allSkills.light.finalDelay(scene),
            callback: () => shootLight(
                scene,
                scene.player,
                scene.lightShots,
                allSkills.light.count,
                scene.enemies,
                allSkills.light.iconID,
                allSkills.light.level
            ),
            loop: true
        });
    }

    if (!scene.shootLightningTimer) { 0 }
    else {
        scene.shootLightningTimer.remove(false);
        scene.shootLightningTimer = scene.time.addEvent({
            delay: allSkills.lightning.finalDelay(scene),
            callback: () => shootLightning(
                scene,
                scene.player,
                scene.enemies.getGroup(),
                scene.lightningShots,
                allSkills.lightning.count,
                allSkills.lightning.iconID

            ),
            loop: true
        });
    }

    if (!scene.shootTornadoTimer) { 0 }
    else {
        scene.shootTornadoTimer.remove(false);
        scene.shootTornadoTimer = scene.time.addEvent({
            delay: allSkills.tornado.finalDelay(scene),
            callback: () => shootTornado(
                scene,
                scene.player,
                scene.tornadoGroup,
                allSkills.tornado.count,
                allSkills.tornado.iconID,
                allSkills.tornado.level
            ),
            loop: true
        });
    }

    if (!scene.shootHailTimer) { 0 }
    else {
        scene.shootHailTimer.remove(false);
        scene.shootHailTimer = scene.time.addEvent({
            delay: allSkills.hail.finalDelay(scene),
            callback: () => shootHail(
                scene,
                scene.player,
                scene.enemies.getGroup(),
                allSkills.hail.count,
                allSkills.hail.delayInterval,
                allSkills.hail.iconID,
            ),
            loop: true
        });
    }

    if (!scene.shootArmageddonTimer) { 0 }
    else {
        scene.shootArmageddonTimer.remove(false);
        scene.shootArmageddonTimer = scene.time.addEvent({
            delay: allSkills.armageddon.finalDelay(scene),
            callback: () => shootArmageddon(
                scene,
                scene.enemies.getGroup(),
                allSkills.armageddon.iconID
            ),
            loop: true
        });
    }

}
