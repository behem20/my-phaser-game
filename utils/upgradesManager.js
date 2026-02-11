import { t } from "../LanguageManager.js";

import { shootArmageddon } from "../projectiles/Armageddon.js";
import { shootFire } from "../projectiles/Fire.js";
import { shootFireAura } from "../projectiles/FireAura.js";
import { shootHail } from "../projectiles/Hail.js";
import { shootLight } from "../projectiles/Light.js";
import { shootLightning } from "../projectiles/Lightning.js";
import { shootMagic } from "../projectiles/Magic.js";
import { shootTornado } from "../projectiles/Tornado.js";
import SkillRegistry from "../SkillsRegistry.js";
import { getModifiedCooldown } from "./cooldownUtils.js";
import { getPlayerDamage, getPlayerDamageBeforeSpread } from "./damageCalculator.js";

export function clearSkillsTimers(scene) {
    if (scene.shootMagicTimer) { scene.shootMagicTimer = null }
    if (scene.shootFireTimer) { scene.shootFireTimer = null }
    if (scene.shootLightTimer) { scene.shootLightTimer = null }
    if (scene.shootLightningTimer) { scene.shootLightningTimer = null }
    if (scene.shootFireAuraTimer) { scene.shootFireAuraTimer = null }
    if (scene.shootTornadoTimer) { scene.shootTornadoTimer = null }
    if (scene.shootHailTimer) { scene.shootHailTimer = null }
    if (scene.shootArmageddonTimer) { scene.shootArmageddonTimer = null }

}
export function createPlayerSkillsFromRegistry(arr) {
    // arr.magic.damage = SkillRegistry.magic.damage;
    // arr.fire.damage = SkillRegistry.fire.damage;
    // arr.lightning.damage = SkillRegistry.lightning.damage;
    // arr.fireAura.damage = SkillRegistry.fireAura.damage;
    // arr.tornado.damage = SkillRegistry.tornado.damage;
    // arr.satellite.damage = SkillRegistry.satellite.damage;


    arr.magic.upgrades = [
        {
            damage: SkillRegistry.magic.damage,
            delay: SkillRegistry.magic.delay, targetCount: 1, count: 3, description: 'spellsUpgradeDescription.magic.1'
        },
        {
            damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 15,
            delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 5, targetCount: 1, count: 4, description: 'spellsUpgradeDescription.magic.2'
        },
        {
            damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 30,
            delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 10, targetCount: 2, count: 5, description: 'spellsUpgradeDescription.magic.3'
        },
        {
            damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 45,
            delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 15, targetCount: 3, count: 6, description: 'spellsUpgradeDescription.magic.4'
        },
        {
            damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 60,
            delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 20, targetCount: 4, count: 7, description: 'spellsUpgradeDescription.magic.5'
        },
        {
            damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 75,
            delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 25, targetCount: 4, count: 8, description: 'spellsUpgradeDescription.magic.6'
        },
        {
            damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 90,
            delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 30, targetCount: 5, count: 9, description: 'spellsUpgradeDescription.magic.7'
        },
        {
            damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 105,
            delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 35, targetCount: 3, count: 6, description: 'spellsUpgradeDescription.magic.7'
        },
    ];
    arr.fire.upgrades = [
        {
            damage: SkillRegistry.fire.damage,
            delay: SkillRegistry.fire.delay, count: 1, description: 'spellsUpgradeDescription.fire.1'
        },
        {
            damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 15,
            delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 5, count: 2, description: 'spellsUpgradeDescription.fire.2'
        },
        {
            damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 30,
            delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 10, count: 3, description: 'spellsUpgradeDescription.fire.3'
        },
        {
            damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 45,
            delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 15, count: 4, description: 'spellsUpgradeDescription.fire.4'
        },
        {
            damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 60,
            delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 20, count: 4, description: 'spellsUpgradeDescription.fire.5'
        },
        {
            damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 75,
            delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 25, count: 5, description: 'spellsUpgradeDescription.fire.6'
        },
        {
            damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 90,
            delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 30, count: 6, description: 'spellsUpgradeDescription.fire.7'
        },
    ];
    arr.light.upgrades = [
        {
            damage: SkillRegistry.light.damage,
            delay: SkillRegistry.light.delay, count: 1, description: 'spellsUpgradeDescription.light.1'
        },
        {
            damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 15,
            delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 5, count: 2, description: 'spellsUpgradeDescription.light.2'
        },
        {
            damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 30,
            delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 10, count: 3, description: 'spellsUpgradeDescription.light.3'
        },
        {
            damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 45,
            delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 15, count: 4, description: 'spellsUpgradeDescription.light.4'
        },
        {
            damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 60,
            delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 20, count: 4, description: 'spellsUpgradeDescription.light.5'
        },
        {
            damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 75,
            delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 25, count: 4, description: 'spellsUpgradeDescription.light.6'
        },
        {
            damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 95,
            delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 30, count: 4, description: 'spellsUpgradeDescription.light.7'
        },
        {
            damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 105,
            delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 35, targetCount: 3, count: 3, description: 'spellsUpgradeDescription.light.7'
        },
    ];
    arr.lightning.upgrades = [
        {
            damage: SkillRegistry.lightning.damage,
            delay: SkillRegistry.lightning.delay, count: 3, description: 'spellsUpgradeDescription.lightning.1'
        },
        {
            damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 15,
            delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 5, count: 4, description: 'spellsUpgradeDescription.lightning.2'
        },
        {
            damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 30,
            delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 10, count: 5, description: 'spellsUpgradeDescription.lightning.3'
        },
        {
            damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 45,
            delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 15, count: 6, description: 'spellsUpgradeDescription.lightning.4'
        },
        {
            damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 60,
            delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 20, count: 7, description: 'spellsUpgradeDescription.lightning.5'
        },
        {
            damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 75,
            delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 25, count: 8, description: 'spellsUpgradeDescription.lightning.6'
        },
        {
            damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 90,
            delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 30, count: 9, description: 'spellsUpgradeDescription.lightning.7'
        },
    ];
    arr.fireAura.upgrades = [
        {
            damage: SkillRegistry.fireAura.damage,
            delay: SkillRegistry.fireAura.delay, radius: 130, description: 'spellsUpgradeDescription.fireAura.1'
        },
        {
            damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 35,
            delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 5, radius: 220, description: 'spellsUpgradeDescription.fireAura.2'
        },
        {
            damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 70,
            delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 10, radius: 250, description: 'spellsUpgradeDescription.fireAura.3'
        },
        {
            damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 105,
            delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 15, radius: 280, description: 'spellsUpgradeDescription.fireAura.4'
        },
        {
            damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 140,
            delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 20, radius: 310, description: 'spellsUpgradeDescription.fireAura.5'
        },
        {
            damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 175,
            delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 25, radius: 340, description: 'spellsUpgradeDescription.fireAura.6'
        },
        {
            damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 210,
            delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 30, radius: 370, description: 'spellsUpgradeDescription.fireAura.7'
        },
    ];
    arr.tornado.upgrades = [
        {
            damage: SkillRegistry.tornado.damage,
            delay: SkillRegistry.tornado.delay, duration: 3000, count: 2, description: 'spellsUpgradeDescription.tornado.1'
        },
        {
            damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 15,
            delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 5, duration: 3000, count: 4, description: 'spellsUpgradeDescription.tornado.2'
        },
        {
            damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 30,
            delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 10, duration: 3000, count: 6, description: 'spellsUpgradeDescription.tornado.3'
        },
        {
            damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 45,
            delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 15, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.4'
        },
        {
            damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 60,
            delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 20, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.5'
        },
        {
            damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 75,
            delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 25, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.6'
        },
        {
            damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 95,
            delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 30, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.7'
        },
    ];
    arr.satellite.upgrades = [
        { damage: SkillRegistry.satellite.damage, count: 1, description: 'spellsUpgradeDescription.satellite.1' },
        { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 15, count: 2, description: 'spellsUpgradeDescription.satellite.2' },
        { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 30, count: 3, description: 'spellsUpgradeDescription.satellite.3' },
        { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 45, count: 4, description: 'spellsUpgradeDescription.satellite.4' },
        { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 60, count: 5, description: 'spellsUpgradeDescription.satellite.5' },
        { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 75, count: 6, description: 'spellsUpgradeDescription.satellite.6' },
        { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 90, count: 7, description: 'spellsUpgradeDescription.satellite.7' },
    ];
    arr.hail.upgrades = [
        {
            damage: SkillRegistry.hail.damage,
            delay: SkillRegistry.hail.delay, delayInterval: 20, count: 25, description: 'spellsUpgradeDescription.hail.1'
        },
        {
            damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 15,
            delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 5, delayInterval: 20, count: 25, description: 'spellsUpgradeDescription.hail.2'
        },
        {
            damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 30,
            delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 10, delayInterval: 20, count: 25, description: 'spellsUpgradeDescription.hail.3'
        },
        {
            damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 45,
            delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 15, delayInterval: 20, count: 25, description: 'spellsUpgradeDescription.hail.4'
        },
        {
            damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 60,
            delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 20, delayInterval: 20, count: 25, description: 'spellsUpgradeDescription.hail.5'
        },
        {
            damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 75,
            delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 25, delayInterval: 20, count: 25, description: 'spellsUpgradeDescription.hail.6'
        },
        {
            damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 90,
            delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 30, delayInterval: 20, count: 25, description: 'spellsUpgradeDescription.hail.7'
        },
    ];
    arr.armageddon.upgrades = [
        {
            damage: SkillRegistry.armageddon.damage,
            delay: SkillRegistry.armageddon.delay, description: 'spellsUpgradeDescription.armageddon.1'
        },
        {
            damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 15,
            delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 5, description: 'spellsUpgradeDescription.armageddon.2'
        },
        {
            damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 30,
            delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 10, description: 'spellsUpgradeDescription.armageddon.3'
        },
        {
            damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 45,
            delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 15, description: 'spellsUpgradeDescription.armageddon.4'
        },
        {
            damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 60,
            delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 20, description: 'spellsUpgradeDescription.armageddon.5'
        },
        {
            damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 75,
            delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 25, description: 'spellsUpgradeDescription.armageddon.6'
        },
        {
            damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 90,
            delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 30, description: 'spellsUpgradeDescription.armageddon.7'
        },
    ]
}
// const magicStats = SkillRegistry.magic.getCurrentStats();
export const playerSkills = {

    upgradePointsCount: 0,

    magic: {
        name: 'spellsNames.magic',
        description: 'spellsUpgradeDescription.magic.2',
        level: 2,
        icon: 'pictureMagic',
        iconUI: 'iconMagic',
        damage: SkillRegistry.magic.getCurrentStats().damage,
        baseDelay: SkillRegistry.magic.getCurrentStats().delay,
        targetCount: 1,
        count: 1,

        skillInfo: {

        },

        upgrades: [
            {
                damage: SkillRegistry.magic.damage,
                delay: SkillRegistry.magic.delay, targetCount: 1, count: 1, description: 'spellsUpgradeDescription.magic.1'
            },
            {
                damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 15,
                delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 5, targetCount: 1, count: 2, description: 'spellsUpgradeDescription.magic.2'
            },
            {
                damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 30,
                delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 10, targetCount: 2, count: 2, description: 'spellsUpgradeDescription.magic.3'
            },
            {
                damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 45,
                delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 15, targetCount: 2, count: 2, description: 'spellsUpgradeDescription.magic.4'
            },
            {
                damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 60,
                delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 20, targetCount: 3, count: 2, description: 'spellsUpgradeDescription.magic.5'
            },
            {
                damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 75,
                delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 25, targetCount: 3, count: 2, description: 'spellsUpgradeDescription.magic.6'
            },
            {
                damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 90,
                delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 30, targetCount: 3, count: 3, description: 'spellsUpgradeDescription.magic.7'
            },
            {
                damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 105,
                delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 35, targetCount: 4, count: 3, description: 'spellsUpgradeDescription.magic.7'
            },

        ],
        finalDelay(scene) {
            return getModifiedCooldown(scene, this.baseDelay);
        },

        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;

            this.damage = upgrade.damage;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.count = upgrade.count;
            this.targetCount = upgrade.targetCount;

            this.skillInfo = {
                level: this.level,
                name: this.name,
                damage: getPlayerDamageBeforeSpread(scene, upgrade.damage),
                cooldown: `${this.finalDelay(scene) / 1000}c`,
                targetCount: upgrade.targetCount,
                description: upgrade.description,
                count: upgrade.count
            }

            if (!scene.shootMagicTimer) {
                if (scene.shootFakeMagicTimer) scene.shootFakeMagicTimer.destroy()//fake destroy
                scene.shootMagicTimer = scene.time.addEvent({
                    delay: this.finalDelay(scene),
                    callback: () => shootMagic(
                        scene,
                        scene.player,
                        scene.enemies.getGroup(),
                        scene.magicShots,
                        this.count,
                        this.targetCount,
                        this.iconID,
                        // scene.skillsUI.iconsBgs[magic],
                        this.level
                    ),
                    loop: true
                });
            } else {
                scene.shootMagicTimer.delay = this.finalDelay(scene);
            }
            this.level++;
        },

    },
    fire: {
        name: 'spellsNames.fire',
        description: 'spellsDescription.fire',
        level: 1,
        icon: 'pictureFire',
        iconUI: 'iconFire',
        damage: SkillRegistry.fire.getCurrentStats().damage,
        baseDelay: SkillRegistry.fire.getCurrentStats().delay,
        count: 1,
        upgrades: [
            {
                damage: SkillRegistry.fire.damage,
                delay: SkillRegistry.fire.delay, count: 1, description: 'spellsUpgradeDescription.fire.1'
            },
            {
                damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 15,
                delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 5, count: 2, description: 'spellsUpgradeDescription.fire.2'
            },
            {
                damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 30,
                delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 10, count: 3, description: 'spellsUpgradeDescription.fire.3'
            },
            {
                damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 45,
                delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 15, count: 3, description: 'spellsUpgradeDescription.fire.4'
            },
            {
                damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 60,
                delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 20, count: 4, description: 'spellsUpgradeDescription.fire.5'
            },
            {
                damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 75,
                delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 25, count: 5, description: 'spellsUpgradeDescription.fire.6'
            },
            {
                damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 90,
                delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 30, count: 6, description: 'spellsUpgradeDescription.fire.7'
            },
        ],
        finalDelay(scene) {
            return getModifiedCooldown(scene, this.baseDelay);
        },
        finalDamage(scene) {
            return this.damage * scene.player.playerInitCfgs.fireDamageBonus;
        },
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;

            this.damage = upgrade.damage;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.count = upgrade.count;
            this.skillInfo = {
                level: this.level,
                name: this.name,
                damage: getPlayerDamageBeforeSpread(scene, this.damage),
                cooldown: `${this.finalDelay(scene) / 1000}c`,
                targetCount: this.targetCount,
                description: this.description,
                targetCount: this.count
            }
            // console.log(this.finalDelay);

            if (!scene.shootFireTimer) {
                scene.shootFireTimer = scene.time.addEvent({
                    delay: this.finalDelay(scene),
                    callback: () => shootFire(
                        scene,
                        scene.player,
                        scene.enemies.getGroup(),
                        scene.fireShots,
                        this.count,
                        this.iconID,
                        this.level
                    ),
                    loop: true
                });
            } else {
                scene.shootFireTimer.delay = this.finalDelay(scene);
            }
            this.level++;
        }
    },
    light: {
        name: 'spellsNames.light',
        description: 'spellsDescription.light',
        level: 1,
        icon: 'pictureLight',
        iconUI: 'iconLight',
        damage: SkillRegistry.light.getCurrentStats().damage,
        baseDelay: SkillRegistry.light.getCurrentStats().delay,
        count: 2,
        upgrades: [
            {
                damage: SkillRegistry.light.damage,
                delay: SkillRegistry.light.delay, count: 1, description: 'spellsUpgradeDescription.light.1'
            },
            {
                damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 15,
                delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 5, count: 2, description: 'spellsUpgradeDescription.light.2'
            },
            {
                damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 30,
                delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 10, count: 3, description: 'spellsUpgradeDescription.light.3'
            },
            {
                damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 45,
                delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 15, count: 4, description: 'spellsUpgradeDescription.light.4'
            },
            {
                damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 60,
                delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 20, count: 6, description: 'spellsUpgradeDescription.light.5'
            },
            {
                damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 75,
                delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 25, count: 7, description: 'spellsUpgradeDescription.light.6'
            },
            {
                damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 95,
                delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 30, count: 8, description: 'spellsUpgradeDescription.light.7'
            },
            {
                damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 105,
                delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 35, targetCount: 3, count: 3, description: 'spellsUpgradeDescription.light.7'
            },
        ],
        finalDelay(scene) {
            return getModifiedCooldown(scene, this.baseDelay);
        },
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;

            this.damage = upgrade.damage;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.count = upgrade.count;
            this.skillInfo = {
                level: this.level,
                name: this.name,
                damage: getPlayerDamageBeforeSpread(scene, this.damage),
                cooldown: `${this.finalDelay(scene) / 1000}c`,
                description: this.description,
                count: this.count
            }
            if (!scene.shootLightTimer) {
                scene.shootLightTimer = scene.time.addEvent({
                    delay: this.finalDelay(scene),
                    callback: () => shootLight(
                        scene,
                        scene.player,
                        scene.lightShots,
                        this.count,
                        scene.enemies,
                        this.iconID,
                        this.level
                    ),
                    loop: true
                });
            } else {
                scene.shootLightTimer.delay = this.finalDelay(scene);
            }
            this.level++;
        }
    },
    lightning: {
        name: 'spellsNames.lightning',
        description: 'spellsDescription.lightning',
        level: 1,
        icon: 'pictureLightning',
        iconUI: 'iconLightning',
        damage: 50,
        baseDelay: 1550,
        count: 2,
        upgrades: [
            {
                damage: SkillRegistry.lightning.damage,
                delay: SkillRegistry.lightning.delay, count: 2, description: 'spellsUpgradeDescription.lightning.1'
            },
            {
                damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 15,
                delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 5, count: 4, description: 'spellsUpgradeDescription.lightning.2'
            },
            {
                damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 30,
                delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 10, count: 5, description: 'spellsUpgradeDescription.lightning.3'
            },
            {
                damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 45,
                delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 15, count: 5, description: 'spellsUpgradeDescription.lightning.4'
            },
            {
                damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 60,
                delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 20, count: 5, description: 'spellsUpgradeDescription.lightning.5'
            },
            {
                damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 75,
                delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 25, count: 5, description: 'spellsUpgradeDescription.lightning.6'
            },
            {
                damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 90,
                delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 30, count: 5, description: 'spellsUpgradeDescription.lightning.7'
            },
        ],
        finalDelay(scene) {
            return getModifiedCooldown(scene, this.baseDelay);
        },

        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;

            this.damage = upgrade.damage;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.count = upgrade.count

            this.skillInfo = {
                level: this.level,
                name: this.name,
                damage: getPlayerDamageBeforeSpread(scene, this.damage),
                cooldown: `${this.finalDelay(scene) / 1000}c`,
                targetCount: this.count,
                description: this.description,

            }
            scene.audio.play('thunderLevelUpSfx')
            if (!scene.shootLightningTimer) {
                scene.shootLightningTimer = scene.time.addEvent({
                    delay: this.finalDelay(scene),
                    callback: () => shootLightning(
                        scene,
                        scene.player,
                        scene.enemies.getGroup(),
                        scene.lightningShots,
                        this.count,
                        this.iconID
                    ),
                    loop: true
                });
            } else {
                scene.shootLightningTimer.delay = this.finalDelay(scene);
            }
            this.level++;
        }
    },
    fireAura: {
        name: 'spellsNames.fireAura',
        description: 'spellsDescription.fireAura',
        level: 1,
        icon: 'pictureFireAura',
        iconUI: 'iconFireAura',
        damage: 15,
        baseDelay: 400,
        radius: 200,
        upgrades: [
            {
                damage: SkillRegistry.fireAura.damage,
                delay: SkillRegistry.fireAura.delay, radius: 130, description: 'spellsUpgradeDescription.fireAura.1'
            },
            {
                damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 15,
                delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 5, radius: 130, description: 'spellsUpgradeDescription.fireAura.2'
            },
            {
                damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 15,
                delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 10, radius: 160, description: 'spellsUpgradeDescription.fireAura.3'
            },
            {
                damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 15,
                delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 15, radius: 190, description: 'spellsUpgradeDescription.fireAura.4'
            },
            {
                damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 15,
                delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 20, radius: 220, description: 'spellsUpgradeDescription.fireAura.5'
            },
            {
                damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 15,
                delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 25, radius: 250, description: 'spellsUpgradeDescription.fireAura.6'
            },
            {
                damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 15,
                delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 30, radius: 280, description: 'spellsUpgradeDescription.fireAura.7'
            },
        ],
        finalDelay(scene) {
            return getModifiedCooldown(scene, this.baseDelay);
        },
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;
            this.skillInfo = {
                level: this.level,
                name: this.name,
                damage: getPlayerDamageBeforeSpread(scene, this.damage),
                inteval: `${this.finalDelay(scene) / 1000}c`,
                description: this.description,
                radius: this.radius
            }
            this.damage = upgrade.damage;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.radius = upgrade.radius;
            this.level++;

            if (!scene.shootFireAuraTimer) {
                scene.shootFireAuraTimer = scene.time.addEvent({
                    delay: this.finalDelay(scene),
                    callback: () => shootFireAura(
                        scene,
                        scene.player,
                        scene.enemies.getGroup(),
                        scene.fireAuraShots,
                        this.radius,
                        this.iconID
                    ),
                    loop: true
                });
            } else {
                scene.shootFireAuraTimer.delay = this.finalDelay(scene);
            }
        }
    },
    tornado: {
        name: 'spellsNames.tornado',
        description: 'spellsDescription.tornado',
        level: 1,
        icon: 'pictureTornado',
        iconUI: 'iconTornado',
        damage: SkillRegistry.tornado.getCurrentStats().damage,
        damageDelay: 250,
        baseDelay: SkillRegistry.tornado.getCurrentStats().delay,
        count: 1,
        duration: 2000,
        upgrades: [
            {
                damage: SkillRegistry.tornado.damage,
                delay: SkillRegistry.tornado.delay, duration: 3000, count: 2, description: 'spellsUpgradeDescription.tornado.1'
            },
            {
                damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 15,
                delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 5, duration: 3000, count: 4, description: 'spellsUpgradeDescription.tornado.2'
            },
            {
                damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 30,
                delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 10, duration: 3000, count: 6, description: 'spellsUpgradeDescription.tornado.3'
            },
            {
                damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 45,
                delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 15, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.4'
            },
            {
                damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 60,
                delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 20, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.5'
            },
            {
                damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 75,
                delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 25, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.6'
            },
            {
                damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 95,
                delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 30, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.7'
            },
        ],
        finalDelay(scene) {
            return getModifiedCooldown(scene, this.baseDelay);
        },
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;

            this.damage = upgrade.damage;
            this.duration = upgrade.duration;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.count = upgrade.count;
            this.skillInfo = {
                level: this.level,
                name: this.name,
                damage: getPlayerDamageBeforeSpread(scene, this.damage),
                cooldown: `${this.finalDelay(scene) / 1000}c`,
                description: this.description,
                count: this.count,
                duration: `${this.duration / 1000}c`
            }

            if (!scene.shootTornadoTimer) {
                scene.shootTornadoTimer = scene.time.addEvent({
                    delay: this.finalDelay(scene),
                    callback: () => shootTornado(
                        scene,
                        scene.player,
                        scene.tornadoGroup,
                        this.count,
                        this.iconID,
                        this.level
                    ),
                    loop: true
                });
            } else {
                scene.shootTornadoTimer.delay = this.finalDelay(scene);
            }
            this.level++;
        }
    },
    satellite: {
        name: 'spellsNames.satellite',
        description: 'spellsDescription.satellite',
        level: 1,
        icon: 'pictureSatellite',
        iconUI: 'iconSatellite',
        damage: SkillRegistry.satellite.getCurrentStats().damage,
        delayDamage: 100, // раз в 500 мс наносить урон
        count: 1,
        upgrades: [
            { damage: SkillRegistry.satellite.damage, count: 1, description: 'spellsUpgradeDescription.satellite.1' },
            { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 15, count: 2, description: 'spellsUpgradeDescription.satellite.2' },
            { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 30, count: 3, description: 'spellsUpgradeDescription.satellite.3' },
            { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 45, count: 4, description: 'spellsUpgradeDescription.satellite.4' },
            { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 60, count: 5, description: 'spellsUpgradeDescription.satellite.5' },
            { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 75, count: 6, description: 'spellsUpgradeDescription.satellite.6' },
            { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 90, count: 7, description: 'spellsUpgradeDescription.satellite.7' },
        ],
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;
            this.skillInfo = {
                level: this.level,
                name: this.name,
                damage: getPlayerDamageBeforeSpread(scene, upgrade.damage),
                description: this.description,
                count: this.count
            }
            this.level++;
            this.count = upgrade.count;
            this.damage = upgrade.damage
            this.description = upgrade.description

            scene.satellites.setCount(this.count);
            scene.audio.play('satelliteStartSoundSfx')

        }
    },
    hail: {
        name: 'spellsNames.hail',
        description: 'spellsDescription.hail',
        level: 1,
        icon: 'pictureHail',
        iconUI: 'iconHail',
        damage: SkillRegistry.hail.getCurrentStats().damage,
        delayDamage: 300, // раз в 500 мс наносить урон
        baseDelay: SkillRegistry.hail.getCurrentStats().delay,
        count: 10,
        delayInterval: 100,
        upgrades: [
            {
                damage: SkillRegistry.hail.damage,
                delay: SkillRegistry.hail.delay, delayInterval: 100, count: 10, description: 'spellsUpgradeDescription.hail.1'
            },
            {
                damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 15,
                delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 5, delayInterval: 100, count: 15, description: 'spellsUpgradeDescription.hail.2'
            },
            {
                damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 30,
                delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 10, delayInterval: 100, count: 15, description: 'spellsUpgradeDescription.hail.3'
            },
            {
                damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 45,
                delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 15, delayInterval: 100, count: 15, description: 'spellsUpgradeDescription.hail.4'
            },
            {
                damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 60,
                delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 20, delayInterval: 100, count: 15, description: 'spellsUpgradeDescription.hail.5'
            },
            {
                damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 75,
                delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 25, delayInterval: 100, count: 15, description: 'spellsUpgradeDescription.hail.6'
            },
            {
                damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 90,
                delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 30, delayInterval: 100, count: 15, description: 'spellsUpgradeDescription.hail.7'
            },
        ],
        finalDelay(scene) {
            return getModifiedCooldown(scene, this.baseDelay);
        },
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;

            this.damage = upgrade.damage;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.count = upgrade.count
            this.delayInterval = upgrade.delayInterval;
            this.skillInfo = {
                level: this.level,
                name: this.name,
                damage: getPlayerDamageBeforeSpread(scene, this.damage),
                cooldown: `${this.finalDelay(scene) / 1000}c`,
                description: this.description,
                count: this.count,
                interval: this.delayInterval
            }

            if (!scene.shootHailTimer) {
                scene.shootHailTimer = scene.time.addEvent({
                    delay: this.finalDelay(scene),
                    callback: () => shootHail(
                        scene,
                        scene.player,
                        scene.enemies.getGroup(),
                        this.count,
                        this.delayInterval,
                        this.iconID
                    ),
                    loop: true
                });
            } else {
                scene.shootHailTimer.delay = this.finalDelay(scene);
            }
            this.level++;
        }
    },
    armageddon: {
        name: 'spellsNames.armageddon',
        description: 'spellsDescription.armageddon',
        level: 1,
        icon: 'pictureArmageddon',
        iconUI: 'iconArmageddon',
        damage: SkillRegistry.armageddon.getCurrentStats().damage,
        baseDelay: SkillRegistry.armageddon.getCurrentStats().delay,
        upgrades: [
            {
                damage: SkillRegistry.armageddon.damage,
                delay: SkillRegistry.armageddon.delay, description: 'spellsUpgradeDescription.armageddon.1'
            },
            {
                damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 15,
                delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 5, description: 'spellsUpgradeDescription.armageddon.2'
            },
            {
                damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 30,
                delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 10, description: 'spellsUpgradeDescription.armageddon.3'
            },
            {
                damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 45,
                delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 15, description: 'spellsUpgradeDescription.armageddon.4'
            },
            {
                damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 60,
                delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 20, description: 'spellsUpgradeDescription.armageddon.5'
            },
            {
                damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 75,
                delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 25, description: 'spellsUpgradeDescription.armageddon.6'
            },
            {
                damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 90,
                delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 30, description: 'spellsUpgradeDescription.armageddon.7'
            },
        ],
        finalDelay(scene) {
            return getModifiedCooldown(scene, this.baseDelay);
        },
        delayInterval: 100,
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;

            this.damage = upgrade.damage;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.skillInfo = {
                level: this.level,
                name: this.name,
                damage: getPlayerDamageBeforeSpread(scene, this.damage),
                cooldown: `${this.finalDelay(scene) / 1000}c`,
                description: this.description,
            }

            if (!scene.shootArmageddonTimer) {
                scene.shootArmageddonTimer = scene.time.addEvent({
                    delay: this.finalDelay(scene),
                    callback: () => shootArmageddon(
                        scene,
                        scene.enemies.getGroup(),
                        this.iconID
                    ),
                    loop: true
                });
            } else {
                scene.shootArmageddonTimer.delay = this.finalDelay(scene);
            }

            this.level++;
        }
    },
    intellect: {
        name: 'spellsNames.intellect',
        description: 'spellsDescription.intellect',
        level: 1,
        icon: 'pictureIntellect',
        iconUI: 'iconIntellect',
        plusDamage: 0.25,
        plusDamageTotal: 0.25,
        upgrades: [
            { plusDamage: 0.25, plusDamageTotal: 0.25, description: 'spellsUpgradeDescription.intellect.1' },
            { plusDamage: 0.25, plusDamageTotal: 0.50, description: 'spellsUpgradeDescription.intellect.2' },
            { plusDamage: 0.25, plusDamageTotal: 0.75, description: 'spellsUpgradeDescription.intellect.3' },
            { plusDamage: 0.25, plusDamageTotal: 1.00, description: 'spellsUpgradeDescription.intellect.4' },
            { plusDamage: 0.25, plusDamageTotal: 1.25, description: 'spellsUpgradeDescription.intellect.5' },
            { plusDamage: 0.25, plusDamageTotal: 1.50, description: 'spellsUpgradeDescription.intellect.6' },
            { plusDamage: 0.25, plusDamageTotal: 1.75, description: 'spellsUpgradeDescription.intellect.7' },
        ],
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;
            this.plusDamage = upgrade.plusDamage;
            this.plusDamageTotal = upgrade.plusDamageTotal

            this.description = upgrade.description;
            this.skillInfo = {
                level: this.level,
                name: this.name,
                plusDamageTotal: `+${this.plusDamageTotal * 100}%`,
                description: this.description,

            }
            this.level++;
            scene.player.playerInitCfgs.damageBonus += this.plusDamage * scene.level.currentLevel.playerConfigs.dmg;
            if (scene.shootMagicTimer && playerSkills.magic) {
                playerSkills.magic.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.magic.damage)
            }

            if (scene.shootFireTimer && playerSkills.fire) {
                playerSkills.fire.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.fire.damage)

            }
            if (scene.shootLightTimer && playerSkills.light) {
                playerSkills.light.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.light.damage)

            }
            if (scene.shootLightningTimer && playerSkills.lightning) {
                playerSkills.lightning.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.lightning.damage)
            }
            if (scene.shootFireAuraTimer && playerSkills.fireAura) {
                playerSkills.fireAura.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.fireAura.damage)
            }
            if (scene.shootTornadoTimer && playerSkills.tornado) {
                playerSkills.tornado.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.tornado.damage)
            }
            if (scene.shootHailTimer && playerSkills.hail) {
                playerSkills.hail.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.hail.damage)
            }
            if (scene.shootArmageddonTimer && playerSkills.armageddon) {
                playerSkills.armageddon.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.armageddon.damage)
            }
        }
    },
    robe: {
        name: 'spellsNames.robe',
        description: 'spellsDescription.robe',
        level: 1,
        icon: 'pictureRobe',
        iconUI: 'iconRobe',
        cooldwonReduceTotal: 0.05,
        upgrades: [
            { cooldwonReduce: 0.05, cooldwonReduceTotal: 0.05, description: 'spellsUpgradeDescription.robe.1' },
            { cooldwonReduce: 0.05, cooldwonReduceTotal: 0.10, description: 'spellsUpgradeDescription.robe.2' },
            { cooldwonReduce: 0.05, cooldwonReduceTotal: 0.15, description: 'spellsUpgradeDescription.robe.3' },
            { cooldwonReduce: 0.05, cooldwonReduceTotal: 0.20, description: 'spellsUpgradeDescription.robe.4' },
            { cooldwonReduce: 0.05, cooldwonReduceTotal: 0.25, description: 'spellsUpgradeDescription.robe.5' },
            { cooldwonReduce: 0.05, cooldwonReduceTotal: 0.30, description: 'spellsUpgradeDescription.robe.6' },
            { cooldwonReduce: 0.1, cooldwonReduceTotal: 0.40, description: 'spellsUpgradeDescription.robe.7' },
        ],
        applyUpgrade(scene) {

            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;
            this.skillInfo = {
                level: this.level,
                name: this.name,
                cooldwonReduceTotal: `-${upgrade.cooldwonReduceTotal * 100}%`,
                description: this.description,
            }
            this.cooldwonReduceTotal = upgrade.cooldwonReduceTotal
            this.description = upgrade.description;
            this.level++;

            scene.player.playerInitCfgs.cooldownReductionBonus += upgrade.cooldwonReduce

            // Если таймер магии уже есть — обнови его delay
            if (scene.shootMagicTimer && playerSkills.magic) {
                scene.shootMagicTimer.delay = playerSkills.magic.finalDelay(scene);
                playerSkills.magic.skillInfo.cooldown = `${scene.shootMagicTimer.delay / 1000}c`
            }

            if (scene.shootFireTimer && playerSkills.fire) {
                scene.shootFireTimer.delay = playerSkills.fire.finalDelay(scene);
                playerSkills.fire.skillInfo.cooldown = `${scene.shootFireTimer.delay / 1000}c`
            }
            if (scene.shootLightTimer && playerSkills.light) {
                scene.shootLightTimer.delay = playerSkills.light.finalDelay(scene);
                playerSkills.light.skillInfo.cooldown = `${scene.shootLightTimer.delay / 1000}c`
            }
            if (scene.shootLightningTimer && playerSkills.lightning) {
                scene.shootLightningTimer.delay = playerSkills.lightning.finalDelay(scene);
                playerSkills.lightning.skillInfo.cooldown = `${scene.shootLightningTimer.delay / 1000}c`
            }
            if (scene.shootFireAuraTimer && playerSkills.fireAura) {
                scene.shootFireAuraTimer.delay = playerSkills.fireAura.finalDelay(scene);
            }
            if (scene.shootTornadoTimer && playerSkills.tornado) {
                scene.shootTornadoTimer.delay = playerSkills.tornado.finalDelay(scene);
                playerSkills.tornado.skillInfo.cooldown = `${scene.shootTornadoTimer.delay / 1000}c`
            }
            if (scene.shootHailTimer && playerSkills.hail) {
                scene.shootHailTimer.delay = playerSkills.hail.finalDelay(scene);
                playerSkills.hail.skillInfo.cooldown = `${scene.shootHailTimer.delay / 1000}c`
            }
            if (scene.shootArmageddonTimer && playerSkills.armageddon) {
                scene.shootArmageddonTimer.delay = playerSkills.armageddon.finalDelay(scene);
                playerSkills.armageddon.cooldown = `${scene.shootArmageddonTimer.delay / 1000}c`

            }

        }
    },
    magnetRadius: {
        name: 'spellsNames.magnetRadius',
        description: 'spellsDescription.magnetRadius',
        level: 1,
        icon: 'pictureMagnet',
        iconUI: 'iconMagnet',
        upgrades: [
            { radius: 1, description: 'spellsUpgradeDescription.magnetRadius.1' },
            { radius: 2, description: 'spellsUpgradeDescription.magnetRadius.2' },
            { radius: 3, description: 'spellsUpgradeDescription.magnetRadius.3' },
            { radius: 4, description: 'spellsUpgradeDescription.magnetRadius.4' },
            { radius: 5, description: 'spellsUpgradeDescription.magnetRadius.5' },
            { radius: 6, description: 'spellsUpgradeDescription.magnetRadius.6' },
            { radius: 7, description: 'spellsUpgradeDescription.magnetRadius.7' },
        ],
        applyUpgrade(scene) {

            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;
            this.skillInfo = {
                level: this.level,
                name: this.name,
                description: this.description,
                radius: 32 * upgrade.radius
            }
            this.level++;
            this.description = upgrade.description;

            scene.player.playerInitCfgs.coinsMagnetRadiusBonus = upgrade.radius;

        }
    },

    get allSkills() {
        if (this.upgradePointsCount > 3) {
            return [
                this.magic,
                this.fire,
                this.light,
                this.lightning,
                // this.armageddon,
                this.tornado,
                this.fireAura,
                this.satellite,
                // this.hail,
                // this.magnetRadius,
                this.intellect,
                this.robe,
            ]
        } else {
            return [
                this.magic,
                this.fire,
                this.light,
                this.lightning,
                // this.armageddon,
                this.tornado,
                this.fireAura,
                this.satellite,
                // this.hail,

            ]
        }
    },
    get arrayOfAllSkills() {
        return [
            this.magic,
            this.fire,
            this.light,
            this.lightning,
            this.armageddon,
            this.tornado,
            this.fireAura,
            this.satellite,
            this.hail,
            this.magnetRadius,
            this.intellect,
            this.robe,
        ]
    },
    get objectOfAllSkills() {

        return {
            robe: this.robe,
            intellect: this.intellect,
            magic: this.magic,
            armageddon: this.armageddon,
            tornado: this.tornado,
            fireAura: this.fireAura,
            satellite: this.satellite,
            hail: this.hail,
            fire: this.fire,
            light: this.light,
            lightning: this.lightning,
            magnetRadius: this.magnetRadius,
        }
    },
    get allSkillsForItems() {

        return {
            magic: this.magic,
            armageddon: this.armageddon,
            tornado: this.tornado,
            fireAura: this.fireAura,
            satellite: this.satellite,
            hail: this.hail,
            fire: this.fire,
            light: this.light,
            lightning: this.lightning,
        }
    },
    get allNotMaxLevelSkills() {
        return this.allSkills.filter(skill => skill.level <= 7)

    },

    resetSkills() {

        this.upgradePointsCount = 0;

        this.magic = {
            name: 'spellsNames.magic',
            description: 'spellsUpgradeDescription.magic.2',
            level: 2,
            icon: 'pictureMagic',
            iconUI: 'iconMagic',
            damage: SkillRegistry.magic.getCurrentStats().damage,
            baseDelay: SkillRegistry.magic.getCurrentStats().delay,
            targetCount: 1,
            count: 1,

            skillInfo: {

            },

            upgrades: [
                {
                    damage: SkillRegistry.magic.damage,
                    delay: SkillRegistry.magic.delay, targetCount: 1, count: 1, description: 'spellsUpgradeDescription.magic.1'
                },
                {
                    damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 15,
                    delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 5, targetCount: 1, count: 2, description: 'spellsUpgradeDescription.magic.2'
                },
                {
                    damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 30,
                    delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 10, targetCount: 2, count: 2, description: 'spellsUpgradeDescription.magic.3'
                },
                {
                    damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 45,
                    delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 15, targetCount: 2, count: 2, description: 'spellsUpgradeDescription.magic.4'
                },
                {
                    damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 60,
                    delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 20, targetCount: 3, count: 2, description: 'spellsUpgradeDescription.magic.5'
                },
                {
                    damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 75,
                    delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 25, targetCount: 3, count: 2, description: 'spellsUpgradeDescription.magic.6'
                },
                {
                    damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 90,
                    delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 30, targetCount: 3, count: 3, description: 'spellsUpgradeDescription.magic.7'
                },
                {
                    damage: SkillRegistry.magic.damage + SkillRegistry.magic.damage / 100 * 105,
                    delay: SkillRegistry.magic.delay - SkillRegistry.magic.delay / 100 * 35, targetCount: 3, count: 3, description: 'spellsUpgradeDescription.magic.7'
                },

            ],
            finalDelay(scene) {
                return getModifiedCooldown(scene, this.baseDelay);
            },

            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;

                this.damage = upgrade.damage;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.count = upgrade.count;
                this.targetCount = upgrade.targetCount;

                this.skillInfo = {
                    level: this.level,
                    name: this.name,
                    damage: getPlayerDamageBeforeSpread(scene, upgrade.damage),
                    cooldown: `${this.finalDelay(scene) / 1000}c`,
                    targetCount: upgrade.targetCount,
                    description: upgrade.description,
                    count: upgrade.count
                }

                if (!scene.shootMagicTimer) {
                    if (scene.shootFakeMagicTimer) scene.shootFakeMagicTimer.destroy()//fake destroy
                    scene.shootMagicTimer = scene.time.addEvent({
                        delay: this.finalDelay(scene),
                        callback: () => shootMagic(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            scene.magicShots,
                            this.count,
                            this.targetCount,
                            this.iconID,
                            // scene.skillsUI.iconsBgs[magic],
                            this.level
                        ),
                        loop: true
                    });
                } else {
                    scene.shootMagicTimer.delay = this.finalDelay(scene);
                }
                this.level++;
            },

        };
        this.fire = {
            name: 'spellsNames.fire',
            description: 'spellsDescription.fire',
            level: 1,
            icon: 'pictureFire',
            iconUI: 'iconFire',
            damage: SkillRegistry.fire.getCurrentStats().damage,
            baseDelay: SkillRegistry.fire.getCurrentStats().delay,
            count: 1,
            upgrades: [
                {
                    damage: SkillRegistry.fire.damage,
                    delay: SkillRegistry.fire.delay, count: 1, description: 'spellsUpgradeDescription.fire.1'
                },
                {
                    damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 15,
                    delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 5, count: 2, description: 'spellsUpgradeDescription.fire.2'
                },
                {
                    damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 30,
                    delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 10, count: 2, description: 'spellsUpgradeDescription.fire.3'
                },
                {
                    damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 45,
                    delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 15, count: 2, description: 'spellsUpgradeDescription.fire.4'
                },
                {
                    damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 60,
                    delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 20, count: 3, description: 'spellsUpgradeDescription.fire.5'
                },
                {
                    damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 75,
                    delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 25, count: 3, description: 'spellsUpgradeDescription.fire.6'
                },
                {
                    damage: SkillRegistry.fire.damage + SkillRegistry.fire.damage / 100 * 90,
                    delay: SkillRegistry.fire.delay - SkillRegistry.fire.delay / 100 * 30, count: 3, description: 'spellsUpgradeDescription.fire.7'
                },
            ],
            finalDelay(scene) {
                return getModifiedCooldown(scene, this.baseDelay);
            },
            finalDamage(scene) {
                return this.damage * scene.player.playerInitCfgs.fireDamageBonus;
            },
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;

                this.damage = upgrade.damage;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.count = upgrade.count;
                this.skillInfo = {
                    level: this.level,
                    name: this.name,
                    damage: getPlayerDamageBeforeSpread(scene, this.damage),
                    cooldown: `${this.finalDelay(scene) / 1000}c`,
                    targetCount: this.targetCount,
                    description: this.description,
                    targetCount: this.count
                }
                // console.log(this.finalDelay);

                if (!scene.shootFireTimer) {
                    scene.shootFireTimer = scene.time.addEvent({
                        delay: this.finalDelay(scene),
                        callback: () => shootFire(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            scene.fireShots,
                            this.count,
                            this.iconID,
                            this.level
                        ),
                        loop: true
                    });
                } else {
                    scene.shootFireTimer.delay = this.finalDelay(scene);
                }
                this.level++;
            }
        };
        this.light = {
            name: 'spellsNames.light',
            description: 'spellsDescription.light',
            level: 1,
            icon: 'pictureLight',
            iconUI: 'iconLight',
            damage: SkillRegistry.light.getCurrentStats().damage,
            baseDelay: SkillRegistry.light.getCurrentStats().delay,
            count: 1,
            upgrades: [
                {
                    damage: SkillRegistry.light.damage,
                    delay: SkillRegistry.light.delay, count: 1, description: 'spellsUpgradeDescription.light.1'
                },
                {
                    damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 15,
                    delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 5, count: 2, description: 'spellsUpgradeDescription.light.2'
                },
                {
                    damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 30,
                    delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 10, count: 3, description: 'spellsUpgradeDescription.light.3'
                },
                {
                    damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 45,
                    delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 15, count: 3, description: 'spellsUpgradeDescription.light.4'
                },
                {
                    damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 60,
                    delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 20, count: 3, description: 'spellsUpgradeDescription.light.5'
                },
                {
                    damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 75,
                    delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 25, count: 3, description: 'spellsUpgradeDescription.light.6'
                },
                {
                    damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 95,
                    delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 30, count: 4, description: 'spellsUpgradeDescription.light.7'
                },
                {
                    damage: SkillRegistry.light.damage + SkillRegistry.light.damage / 100 * 105,
                    delay: SkillRegistry.light.delay - SkillRegistry.light.delay / 100 * 35, targetCount: 3, count: 3, description: 'spellsUpgradeDescription.light.7'
                },
            ],
            finalDelay(scene) {
                return getModifiedCooldown(scene, this.baseDelay);
            },
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;

                this.damage = upgrade.damage;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.count = upgrade.count;
                this.skillInfo = {
                    level: this.level,
                    name: this.name,
                    damage: getPlayerDamageBeforeSpread(scene, this.damage),
                    cooldown: `${this.finalDelay(scene) / 1000}c`,
                    description: this.description,
                    count: this.count //fix to this.count
                }
                if (!scene.shootLightTimer) {
                    scene.shootLightTimer = scene.time.addEvent({
                        delay: this.finalDelay(scene),
                        callback: () => shootLight(
                            scene,
                            scene.player,
                            scene.lightShots,
                            this.count,
                            scene.enemies,
                            this.iconID,
                            this.level
                        ),
                        loop: true
                    });
                } else {
                    scene.shootLightTimer.delay = this.finalDelay(scene);
                }
                this.level++;
            }
        };
        this.lightning = {
            name: 'spellsNames.lightning',
            description: 'spellsDescription.lightning',
            level: 1,
            icon: 'pictureLightning',
            iconUI: 'iconLightning',
            damage: 50,
            baseDelay: 1550,
            count: 2,
            upgrades: [
                {
                    damage: SkillRegistry.lightning.damage,
                    delay: SkillRegistry.lightning.delay, count: 2, description: 'spellsUpgradeDescription.lightning.1'
                },
                {
                    damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 15,
                    delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 5, count: 4, description: 'spellsUpgradeDescription.lightning.2'
                },
                {
                    damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 30,
                    delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 10, count: 5, description: 'spellsUpgradeDescription.lightning.3'
                },
                {
                    damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 45,
                    delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 15, count: 5, description: 'spellsUpgradeDescription.lightning.4'
                },
                {
                    damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 60,
                    delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 20, count: 5, description: 'spellsUpgradeDescription.lightning.5'
                },
                {
                    damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 75,
                    delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 25, count: 5, description: 'spellsUpgradeDescription.lightning.6'
                },
                {
                    damage: SkillRegistry.lightning.damage + SkillRegistry.lightning.damage / 100 * 90,
                    delay: SkillRegistry.lightning.delay - SkillRegistry.lightning.delay / 100 * 30, count: 5, description: 'spellsUpgradeDescription.lightning.7'
                },
            ],
            finalDelay(scene) {
                return getModifiedCooldown(scene, this.baseDelay);
            },

            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;

                this.damage = upgrade.damage;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.count = upgrade.count

                this.skillInfo = {
                    level: this.level,
                    name: this.name,
                    damage: getPlayerDamageBeforeSpread(scene, this.damage),
                    cooldown: `${this.finalDelay(scene) / 1000}c`,
                    targetCount: this.count,
                    description: this.description,

                }
                scene.audio.play('thunderLevelUpSfx')
                if (!scene.shootLightningTimer) {
                    scene.shootLightningTimer = scene.time.addEvent({
                        delay: this.finalDelay(scene),
                        callback: () => shootLightning(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            scene.lightningShots,
                            this.count,
                            this.iconID
                        ),
                        loop: true
                    });
                } else {
                    scene.shootLightningTimer.delay = this.finalDelay(scene);
                }
                this.level++;
            }
        };
        this.fireAura = {
            name: 'spellsNames.fireAura',
            description: 'spellsDescription.fireAura',
            level: 1,
            icon: 'pictureFireAura',
            iconUI: 'iconFireAura',
            damage: 15,
            baseDelay: 400,
            radius: 200,
            upgrades: [
                {
                    damage: SkillRegistry.fireAura.damage,
                    delay: SkillRegistry.fireAura.delay, radius: 130, description: 'spellsUpgradeDescription.fireAura.1'
                },
                {
                    damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 15,
                    delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 5, radius: 130, description: 'spellsUpgradeDescription.fireAura.2'
                },
                {
                    damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 15,
                    delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 10, radius: 160, description: 'spellsUpgradeDescription.fireAura.3'
                },
                {
                    damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 15,
                    delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 15, radius: 190, description: 'spellsUpgradeDescription.fireAura.4'
                },
                {
                    damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 15,
                    delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 20, radius: 220, description: 'spellsUpgradeDescription.fireAura.5'
                },
                {
                    damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 15,
                    delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 25, radius: 250, description: 'spellsUpgradeDescription.fireAura.6'
                },
                {
                    damage: SkillRegistry.fireAura.damage + SkillRegistry.fireAura.damage / 100 * 15,
                    delay: SkillRegistry.fireAura.delay - SkillRegistry.fireAura.delay / 100 * 30, radius: 280, description: 'spellsUpgradeDescription.fireAura.7'
                },
            ],
            finalDelay(scene) {
                return getModifiedCooldown(scene, this.baseDelay);
            },
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;
                this.skillInfo = {
                    level: this.level,
                    name: this.name,
                    damage: getPlayerDamageBeforeSpread(scene, this.damage),
                    inteval: `${this.finalDelay(scene) / 1000}c`,
                    description: this.description,
                    radius: this.radius
                }
                this.damage = upgrade.damage;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.radius = upgrade.radius;
                this.level++;

                if (!scene.shootFireAuraTimer) {
                    scene.shootFireAuraTimer = scene.time.addEvent({
                        delay: this.finalDelay(scene),
                        callback: () => shootFireAura(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            scene.fireAuraShots,
                            this.radius,
                            this.iconID
                        ),
                        loop: true
                    });
                } else {
                    scene.shootFireAuraTimer.delay = this.finalDelay(scene);
                }
            }
        };
        this.tornado = {
            name: 'spellsNames.tornado',
            description: 'spellsDescription.tornado',
            level: 1,
            icon: 'pictureTornado',
            iconUI: 'iconTornado',
            damage: SkillRegistry.tornado.getCurrentStats().damage,
            damageDelay: 250,
            baseDelay: SkillRegistry.tornado.getCurrentStats().delay,
            count: 1,
            duration: 2000,
            upgrades: [
                {
                    damage: SkillRegistry.tornado.damage,
                    delay: SkillRegistry.tornado.delay, duration: 3000, count: 2, description: 'spellsUpgradeDescription.tornado.1'
                },
                {
                    damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 15,
                    delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 5, duration: 3000, count: 4, description: 'spellsUpgradeDescription.tornado.2'
                },
                {
                    damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 30,
                    delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 10, duration: 3000, count: 6, description: 'spellsUpgradeDescription.tornado.3'
                },
                {
                    damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 45,
                    delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 15, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.4'
                },
                {
                    damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 60,
                    delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 20, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.5'
                },
                {
                    damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 75,
                    delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 25, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.6'
                },
                {
                    damage: SkillRegistry.tornado.damage + SkillRegistry.tornado.damage / 100 * 95,
                    delay: SkillRegistry.tornado.delay - SkillRegistry.tornado.delay / 100 * 30, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.7'
                },
            ],
            finalDelay(scene) {
                return getModifiedCooldown(scene, this.baseDelay);
            },
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;

                this.damage = upgrade.damage;
                this.duration = upgrade.duration;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.count = upgrade.count;
                this.skillInfo = {
                    level: this.level,
                    name: this.name,
                    damage: getPlayerDamageBeforeSpread(scene, this.damage),
                    cooldown: `${this.finalDelay(scene) / 1000}c`,
                    description: this.description,
                    count: this.count,
                    duration: `${this.duration / 1000}c`
                }

                if (!scene.shootTornadoTimer) {
                    scene.shootTornadoTimer = scene.time.addEvent({
                        delay: this.finalDelay(scene),
                        callback: () => shootTornado(
                            scene,
                            scene.player,
                            scene.tornadoGroup,
                            this.count,
                            this.iconID,
                            this.level
                        ),
                        loop: true
                    });
                } else {
                    scene.shootTornadoTimer.delay = this.finalDelay(scene);
                }
                this.level++;
            }
        };
        this.satellite = {
            name: 'spellsNames.satellite',
            description: 'Спутники вращаются вокруг героя и наносят урон врагам.',
            level: 1,
            icon: 'pictureSatellite',
            iconUI: 'iconSatellite',
            damage: SkillRegistry.satellite.getCurrentStats().damage,
            delayDamage: 100, // раз в 500 мс наносить урон
            count: 1,
            upgrades: [
                { damage: SkillRegistry.satellite.damage, count: 1, description: 'spellsUpgradeDescription.satellite.1' },
                { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 15, count: 2, description: 'spellsUpgradeDescription.satellite.2' },
                { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 30, count: 3, description: 'spellsUpgradeDescription.satellite.3' },
                { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 45, count: 4, description: 'spellsUpgradeDescription.satellite.4' },
                { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 60, count: 5, description: 'spellsUpgradeDescription.satellite.5' },
                { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 75, count: 6, description: 'spellsUpgradeDescription.satellite.6' },
                { damage: SkillRegistry.satellite.damage + SkillRegistry.satellite.damage / 100 * 90, count: 7, description: 'spellsUpgradeDescription.satellite.7' },
            ],
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;
                this.skillInfo = {
                    level: this.level,
                    name: this.name,
                    damage: getPlayerDamageBeforeSpread(scene, upgrade.damage),
                    description: this.description,
                    count: this.count
                }
                this.level++;
                this.count = upgrade.count;
                this.damage = upgrade.damage
                this.description = upgrade.description

                scene.satellites.setCount(this.count);
                scene.audio.play('satelliteStartSoundSfx')

            }
        };
        this.hail = {
            name: 'spellsNames.hail',
            description: 'spellsDescription.hail',
            level: 1,
            icon: 'pictureHail',
            iconUI: 'iconHail',
            damage: SkillRegistry.hail.getCurrentStats().damage,
            delayDamage: 300, // раз в 500 мс наносить урон
            baseDelay: SkillRegistry.hail.getCurrentStats().delay,
            count: 10,
            delayInterval: 100,
            upgrades: [
                {
                    damage: SkillRegistry.hail.damage,
                    delay: SkillRegistry.hail.delay, delayInterval: 100, count: 10, description: 'spellsUpgradeDescription.hail.1'
                },
                {
                    damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 15,
                    delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 5, delayInterval: 100, count: 15, description: 'spellsUpgradeDescription.hail.2'
                },
                {
                    damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 30,
                    delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 10, delayInterval: 100, count: 15, description: 'spellsUpgradeDescription.hail.3'
                },
                {
                    damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 45,
                    delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 15, delayInterval: 100, count: 15, description: 'spellsUpgradeDescription.hail.4'
                },
                {
                    damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 60,
                    delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 20, delayInterval: 100, count: 15, description: 'spellsUpgradeDescription.hail.5'
                },
                {
                    damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 75,
                    delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 25, delayInterval: 100, count: 15, description: 'spellsUpgradeDescription.hail.6'
                },
                {
                    damage: SkillRegistry.hail.damage + SkillRegistry.hail.damage / 100 * 90,
                    delay: SkillRegistry.hail.delay - SkillRegistry.hail.delay / 100 * 30, delayInterval: 100, count: 15, description: 'spellsUpgradeDescription.hail.7'
                },
            ],
            finalDelay(scene) {
                return getModifiedCooldown(scene, this.baseDelay);
            },
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;

                this.damage = upgrade.damage;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.count = upgrade.count
                this.delayInterval = upgrade.delayInterval;
                this.skillInfo = {
                    level: this.level,
                    name: this.name,
                    damage: getPlayerDamageBeforeSpread(scene, this.damage),
                    cooldown: `${this.finalDelay(scene) / 1000}c`,
                    description: this.description,
                    count: this.count,
                    interval: this.delayInterval
                }

                if (!scene.shootHailTimer) {
                    scene.shootHailTimer = scene.time.addEvent({
                        delay: this.finalDelay(scene),
                        callback: () => shootHail(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            this.count,
                            this.delayInterval,
                            this.iconID
                        ),
                        loop: true
                    });
                } else {
                    scene.shootHailTimer.delay = this.finalDelay(scene);
                }
                this.level++;
            }
        };
        this.armageddon = {
            name: 'spellsNames.armageddon',
            description: 'spellsDescription.armageddon',
            level: 1,
            icon: 'pictureArmageddon',
            iconUI: 'iconArmageddon',
            damage: SkillRegistry.armageddon.getCurrentStats().damage,
            baseDelay: SkillRegistry.armageddon.getCurrentStats().delay,
            upgrades: [
                {
                    damage: SkillRegistry.armageddon.damage,
                    delay: SkillRegistry.armageddon.delay, description: 'spellsUpgradeDescription.armageddon.1'
                },
                {
                    damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 15,
                    delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 5, description: 'spellsUpgradeDescription.armageddon.2'
                },
                {
                    damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 30,
                    delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 10, description: 'spellsUpgradeDescription.armageddon.3'
                },
                {
                    damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 45,
                    delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 15, description: 'spellsUpgradeDescription.armageddon.4'
                },
                {
                    damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 60,
                    delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 20, description: 'spellsUpgradeDescription.armageddon.5'
                },
                {
                    damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 75,
                    delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 25, description: 'spellsUpgradeDescription.armageddon.6'
                },
                {
                    damage: SkillRegistry.armageddon.damage + SkillRegistry.armageddon.damage / 100 * 90,
                    delay: SkillRegistry.armageddon.delay - SkillRegistry.armageddon.delay / 100 * 30, description: 'spellsUpgradeDescription.armageddon.7'
                },
            ],
            finalDelay(scene) {
                return getModifiedCooldown(scene, this.baseDelay);
            },
            delayInterval: 100,
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;

                this.damage = upgrade.damage;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.skillInfo = {
                    level: this.level,
                    name: this.name,
                    damage: getPlayerDamageBeforeSpread(scene, this.damage),
                    cooldown: `${this.finalDelay(scene) / 1000}c`,
                    description: this.description,
                }

                if (!scene.shootArmageddonTimer) {
                    scene.shootArmageddonTimer = scene.time.addEvent({
                        delay: this.finalDelay(scene),
                        callback: () => shootArmageddon(
                            scene,
                            scene.enemies.getGroup(),
                            this.iconID
                        ),
                        loop: true
                    });
                } else {
                    scene.shootArmageddonTimer.delay = this.finalDelay(scene);
                }

                this.level++;
            }
        };
        this.intellect = {
            name: 'spellsNames.intellect',
            description: 'spellsDescription.intellect',
            level: 1,
            icon: 'pictureIntellect',
            iconUI: 'iconIntellect',
            plusDamage: 0.25,
            plusDamageTotal: 0.25,
            upgrades: [
                { plusDamage: 0.25, plusDamageTotal: 0.25, description: 'spellsUpgradeDescription.intellect.1' },
                { plusDamage: 0.25, plusDamageTotal: 0.50, description: 'spellsUpgradeDescription.intellect.2' },
                { plusDamage: 0.25, plusDamageTotal: 0.75, description: 'spellsUpgradeDescription.intellect.3' },
                { plusDamage: 0.25, plusDamageTotal: 1.00, description: 'spellsUpgradeDescription.intellect.4' },
                { plusDamage: 0.25, plusDamageTotal: 1.25, description: 'spellsUpgradeDescription.intellect.5' },
                { plusDamage: 0.25, plusDamageTotal: 1.50, description: 'spellsUpgradeDescription.intellect.6' },
                { plusDamage: 0.25, plusDamageTotal: 1.75, description: 'spellsUpgradeDescription.intellect.7' },
            ],
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;
                this.plusDamage = upgrade.plusDamage;
                this.plusDamageTotal = upgrade.plusDamageTotal
                this.level++;
                this.description = upgrade.description;
                this.skillInfo = {
                    level: this.level,
                    name: this.name,
                    plusDamageTotal: `+${this.plusDamageTotal * 100}%`,
                    description: this.description,

                }
                scene.player.playerInitCfgs.damageBonus += this.plusDamage * scene.level.currentLevel.playerConfigs.dmg;
                if (scene.shootMagicTimer && playerSkills.magic) {
                    playerSkills.magic.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.magic.damage)
                }

                if (scene.shootFireTimer && playerSkills.fire) {
                    playerSkills.fire.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.fire.damage)

                }
                if (scene.shootLightTimer && playerSkills.light) {
                    playerSkills.light.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.light.damage)

                }
                if (scene.shootLightningTimer && playerSkills.lightning) {
                    playerSkills.lightning.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.lightning.damage)
                }
                if (scene.shootFireAuraTimer && playerSkills.fireAura) {
                    playerSkills.fireAura.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.fireAura.damage)
                }
                if (scene.shootTornadoTimer && playerSkills.tornado) {
                    playerSkills.tornado.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.tornado.damage)
                }
                if (scene.shootHailTimer && playerSkills.hail) {
                    playerSkills.hail.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.hail.damage)
                }
                if (scene.shootArmageddonTimer && playerSkills.armageddon) {
                    playerSkills.armageddon.skillInfo.damage = getPlayerDamageBeforeSpread(scene, playerSkills.armageddon.damage)
                }
            }
        };
        this.robe = {
            name: 'spellsNames.robe',
            description: 'spellsDescription.robe',
            level: 1,
            icon: 'pictureRobe',
            iconUI: 'iconRobe',
            cooldwonReduceTotal: 0.05,
            upgrades: [
                { cooldwonReduce: 0.05, cooldwonReduceTotal: 0.05, description: 'spellsUpgradeDescription.robe.1' },
                { cooldwonReduce: 0.05, cooldwonReduceTotal: 0.10, description: 'spellsUpgradeDescription.robe.2' },
                { cooldwonReduce: 0.05, cooldwonReduceTotal: 0.15, description: 'spellsUpgradeDescription.robe.3' },
                { cooldwonReduce: 0.05, cooldwonReduceTotal: 0.20, description: 'spellsUpgradeDescription.robe.4' },
                { cooldwonReduce: 0.05, cooldwonReduceTotal: 0.25, description: 'spellsUpgradeDescription.robe.5' },
                { cooldwonReduce: 0.05, cooldwonReduceTotal: 0.30, description: 'spellsUpgradeDescription.robe.6' },
                { cooldwonReduce: 0.1, cooldwonReduceTotal: 0.40, description: 'spellsUpgradeDescription.robe.7' },
            ],
            applyUpgrade(scene) {

                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;
                this.skillInfo = {
                    level: this.level,
                    name: this.name,
                    cooldwonReduceTotal: `-${upgrade.cooldwonReduceTotal * 100}%`,
                    description: this.description,
                }
                this.cooldwonReduceTotal = upgrade.cooldwonReduceTotal
                this.description = upgrade.description;
                this.level++;

                scene.player.playerInitCfgs.cooldownReductionBonus += upgrade.cooldwonReduce

                // Если таймер магии уже есть — обнови его delay
                if (scene.shootMagicTimer && playerSkills.magic) {
                    scene.shootMagicTimer.delay = playerSkills.magic.finalDelay(scene);
                    playerSkills.magic.skillInfo.cooldown = `${scene.shootMagicTimer.delay / 1000}c`
                }

                if (scene.shootFireTimer && playerSkills.fire) {
                    scene.shootFireTimer.delay = playerSkills.fire.finalDelay(scene);
                    playerSkills.fire.skillInfo.cooldown = `${scene.shootFireTimer.delay / 1000}c`
                }
                if (scene.shootLightTimer && playerSkills.light) {
                    scene.shootLightTimer.delay = playerSkills.light.finalDelay(scene);
                    playerSkills.light.skillInfo.cooldown = `${scene.shootLightTimer.delay / 1000}c`
                }
                if (scene.shootLightningTimer && playerSkills.lightning) {
                    scene.shootLightningTimer.delay = playerSkills.lightning.finalDelay(scene);
                    playerSkills.lightning.skillInfo.cooldown = `${scene.shootLightningTimer.delay / 1000}c`
                }
                if (scene.shootFireAuraTimer && playerSkills.fireAura) {
                    scene.shootFireAuraTimer.delay = playerSkills.fireAura.finalDelay(scene);
                }
                if (scene.shootTornadoTimer && playerSkills.tornado) {
                    scene.shootTornadoTimer.delay = playerSkills.tornado.finalDelay(scene);
                    playerSkills.tornado.skillInfo.cooldown = `${scene.shootTornadoTimer.delay / 1000}c`
                }
                if (scene.shootHailTimer && playerSkills.hail) {
                    scene.shootHailTimer.delay = playerSkills.hail.finalDelay(scene);
                    playerSkills.hail.skillInfo.cooldown = `${scene.shootHailTimer.delay / 1000}c`
                }
                if (scene.shootArmageddonTimer && playerSkills.armageddon) {
                    scene.shootArmageddonTimer.delay = playerSkills.armageddon.finalDelay(scene);
                    playerSkills.hail.cooldown = `${scene.shootArmageddonTimer.delay / 1000}c`

                }

            }
        };
        this.magnetRadius = {
            name: 'spellsNames.magnetRadius',
            description: 'spellsDescription.magnetRadius',
            level: 1,
            icon: 'pictureMagnet',
            iconUI: 'iconMagnet',
            upgrades: [
                { radius: 1, description: 'spellsUpgradeDescription.magnetRadius.1' },
                { radius: 2, description: 'spellsUpgradeDescription.magnetRadius.2' },
                { radius: 3, description: 'spellsUpgradeDescription.magnetRadius.3' },
                { radius: 4, description: 'spellsUpgradeDescription.magnetRadius.4' },
                { radius: 5, description: 'spellsUpgradeDescription.magnetRadius.5' },
                { radius: 6, description: 'spellsUpgradeDescription.magnetRadius.6' },
                { radius: 7, description: 'spellsUpgradeDescription.magnetRadius.7' },
            ],
            applyUpgrade(scene) {

                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;
                this.skillInfo = {
                    level: this.level,
                    name: this.name,
                    description: this.description,
                    radius: 32 * upgrade.radius
                }
                this.level++;
                this.description = upgrade.description;

                scene.player.playerInitCfgs.coinsMagnetRadiusBonus = upgrade.radius;

            }
        };

    },
    getRandomUpgrades(scene) {

        const result = []

        while (result.length < 3) {
            const randomIndex = Phaser.Math.Between(0, this.allNotMaxLevelSkills.length - 1);
            const item = this.allNotMaxLevelSkills[randomIndex];

            if (!result.includes(item)) {
                result.push(item);
            }
        }

        return result

    }
}

