import { t } from "../LanguageManager.js";
import levels from "../levelsConfigs.js";
import playerInitCfgs from "../PlayerConfigs.js";
import { shootArmageddon } from "../projectiles/Armageddon.js";
import { shootFire } from "../projectiles/Fire.js";
import { shootFireAura } from "../projectiles/FireAura.js";
import { shootHail } from "../projectiles/Hail.js";
import { shootLight } from "../projectiles/Light.js";
import { shootLightning } from "../projectiles/Lightning.js";
import { shootMagic } from "../projectiles/Magic.js";
import { shootMeteor } from "../projectiles/Meteor.js";
import { shootTornado } from "../projectiles/Tornado.js";
import { getModifiedCooldown } from "./cooldownUtils.js";

export function setupSkills(scene) {

}



export const playerSkills = {
    upgradePointsCount: 0,
    magic: {
        name: 'spellsNames.magic',
        description: 'spellsUpgradeDescription.magic.2',
        level: 2,
        icon: 'pictureMagic',
        damage: 0,
        baseDelay: 0,
        targetCount: 0,
        count: 0,
        upgrades: [
            { damage: 35, delay: 850, targetCount: 1, count: 1, description: 'spellsUpgradeDescription.magic.1' },
            { damage: 45, delay: 700, targetCount: 2, count: 1, description: 'spellsUpgradeDescription.magic.2' },
            { damage: 60, delay: 550, targetCount: 2, count: 1, description: 'spellsUpgradeDescription.magic.3' },
            { damage: 75, delay: 450, targetCount: 2, count: 2, description: 'spellsUpgradeDescription.magic.4' },
            { damage: 95, delay: 400, targetCount: 3, count: 2, description: 'spellsUpgradeDescription.magic.5' },
            { damage: 105, delay: 400, targetCount: 3, count: 2, description: 'spellsUpgradeDescription.magic.6' },
            { damage: 120, delay: 400, targetCount: 3, count: 3, description: 'spellsUpgradeDescription.magic.7' },
        ],
        get finalDelay() {
            return getModifiedCooldown(this.baseDelay);
        },
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;
            this.damage = upgrade.damage;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.count = upgrade.count;
            this.targetCount = upgrade.targetCount;
            this.level++;
            if (!scene.shootMagicTimer) {
                if (scene.shootFakeMagicTimer) scene.shootFakeMagicTimer.destroy()//fake destroy
                scene.shootMagicTimer = scene.time.addEvent({
                    delay: this.finalDelay,
                    callback: () => shootMagic(
                        scene,
                        scene.player,
                        scene.enemies.getGroup(),
                        scene.magicShots,
                        this.count,
                        this.targetCount,
                    ),
                    loop: true
                });
            } else {
                scene.shootMagicTimer.delay = this.finalDelay;
            }
        }
    },
    fire: {
        name: 'spellsNames.fire',
        description: 'spellsDescription.fire',
        level: 1,
        icon: 'pictureFire',
        damage: 0,
        baseDelay: 0,
        count: 0,
        upgrades: [
            { damage: 40, delay: 1350, count: 1, description: 'spellsUpgradeDescription.fire.1' },
            { damage: 40, delay: 1200, count: 2, description: 'spellsUpgradeDescription.fire.2' },
            { damage: 40, delay: 1050, count: 2, description: 'spellsUpgradeDescription.fire.3' },
            { damage: 40, delay: 900, count: 2, description: 'spellsUpgradeDescription.fire.4' },
            { damage: 55, delay: 900, count: 3, description: 'spellsUpgradeDescription.fire.5' },
            { damage: 75, delay: 900, count: 3, description: 'spellsUpgradeDescription.fire.6' },
            { damage: 100, delay: 800, count: 3, description: 'spellsUpgradeDescription.fire.7' },
        ],
        get finalDelay() {
            return getModifiedCooldown(this.baseDelay);
        },
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;
            this.damage = upgrade.damage;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.count = upgrade.count
            this.level++;
            if (!scene.shootFireTimer) {
                scene.shootFireTimer = scene.time.addEvent({
                    delay: this.finalDelay,
                    callback: () => shootFire(
                        scene,
                        scene.player,
                        scene.enemies.getGroup(),
                        scene.fireShots,
                        this.count
                    ),
                    loop: true
                });
            } else {
                scene.shootFireTimer.delay = this.finalDelay;
            }
        }
    },
    light: {
        name: 'spellsNames.light',
        description: 'spellsDescription.light',
        level: 1,
        icon: 'pictureLight',
        damage: 0,
        baseDelay: 0,
        count: 0,
        upgrades: [
            { damage: 35, delay: 850, count: 1, description: 'spellsUpgradeDescription.light.1' },
            { damage: 35, delay: 700, count: 2, description: 'spellsUpgradeDescription.light.2' },
            { damage: 35, delay: 550, count: 3, description: 'spellsUpgradeDescription.light.3' },
            { damage: 40, delay: 450, count: 3, description: 'spellsUpgradeDescription.light.4' },
            { damage: 55, delay: 400, count: 3, description: 'spellsUpgradeDescription.light.5' },
            { damage: 75, delay: 400, count: 3, description: 'spellsUpgradeDescription.light.6' },
            { damage: 100, delay: 400, count: 4, description: 'spellsUpgradeDescription.light.7' },
        ],
        get finalDelay() {
            return getModifiedCooldown(this.baseDelay);
        },
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;
            this.damage = upgrade.damage;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.count = upgrade.count
            this.level++;
            if (!scene.shootLightTimer) {
                scene.shootLightTimer = scene.time.addEvent({
                    delay: this.finalDelay,
                    callback: () => shootLight(
                        scene,
                        scene.player,
                        scene.lightShots,
                        this.count,
                        scene.enemies
                    ),
                    loop: true
                });
            } else {
                scene.shootLightTimer.delay = this.finalDelay;
            }
        }
    },
    lightning: {
        name: 'spellsNames.lightning',
        description: 'spellsDescription.lightning',
        level: 1,
        icon: 'pictureLightning',
        damage: 0,
        baseDelay: 0,
        count: 0,
        upgrades: [
            { damage: 50, delay: 1550, count: 2, description: 'spellsUpgradeDescription.lightning.1' },
            { damage: 50, delay: 1400, count: 4, description: 'spellsUpgradeDescription.lightning.2' },
            { damage: 50, delay: 1250, count: 5, description: 'spellsUpgradeDescription.lightning.3' },
            { damage: 60, delay: 1100, count: 5, description: 'spellsUpgradeDescription.lightning.4' },
            { damage: 70, delay: 950, count: 5, description: 'spellsUpgradeDescription.lightning.5' },
            { damage: 85, delay: 800, count: 5, description: 'spellsUpgradeDescription.lightning.6' },
            { damage: 100, delay: 650, count: 5, description: 'spellsUpgradeDescription.lightning.7' },
        ],
        get finalDelay() {
            return getModifiedCooldown(this.baseDelay);
        },
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;
            this.damage = upgrade.damage;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.count = upgrade.count
            this.level++;
            scene.thunderLevelUpSfx.play()
            if (!scene.shootLightningTimer) {
                scene.shootLightningTimer = scene.time.addEvent({
                    delay: this.finalDelay,
                    callback: () => shootLightning(
                        scene,
                        scene.player,
                        scene.enemies.getGroup(),
                        scene.lightningShots,
                        this.count,
                    ),
                    loop: true
                });
            } else {
                scene.shootLightningTimer.delay = this.finalDelay;
            }
        }
    },
    fireAura: {
        name: 'spellsNames.fireAura',
        description: 'spellsDescription.fireAura',
        level: 1,
        icon: 'pictureFireAura',
        damage: 0,
        baseDelay: 400,
        radius: 200,
        upgrades: [
            { damage: 15, delay: 250, radius: 100, description: 'spellsUpgradeDescription.fireAura.1' },
            { damage: 20, delay: 250, radius: 130, description: 'spellsUpgradeDescription.fireAura.2' },
            { damage: 30, delay: 250, radius: 160, description: 'spellsUpgradeDescription.fireAura.3' },
            { damage: 40, delay: 250, radius: 190, description: 'spellsUpgradeDescription.fireAura.4' },
            { damage: 55, delay: 250, radius: 220, description: 'spellsUpgradeDescription.fireAura.5' },
            { damage: 75, delay: 250, radius: 250, description: 'spellsUpgradeDescription.fireAura.6' },
            { damage: 100, delay: 250, radius: 280, description: 'spellsUpgradeDescription.fireAura.7' },
        ],
        get finalDelay() {
            return getModifiedCooldown(this.baseDelay);
        },
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;
            this.damage = upgrade.damage;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.radius = upgrade.radius;
            this.level++;

            if (!scene.shootFireAuraTimer) {
                scene.shootFireAuraTimer = scene.time.addEvent({
                    delay: this.finalDelay,
                    callback: () => shootFireAura(
                        scene,
                        scene.player,
                        scene.enemies.getGroup(),
                        scene.fireAuraShots,
                        this.radius
                    ),
                    loop: true
                });
            } else {
                scene.shootFireAuraTimer.delay = this.finalDelay;
            }
        }
    },
    tornado: {
        name: 'spellsNames.tornado',
        description: 'spellsDescription.tornado',
        level: 1,
        icon: 'pictureTornado',
        damage: 0,
        damageDelay: 250,
        baseDelay: 0,
        count: 1,
        duration:2000,
        upgrades: [
            { damage: 15, delay: 1550, duration: 3000, count: 2, description: 'spellsUpgradeDescription.tornado.1' },
            { damage: 20, delay: 1500, duration: 3000, count: 4, description: 'spellsUpgradeDescription.tornado.2' },
            { damage: 30, delay: 1550, duration: 3000, count: 6, description: 'spellsUpgradeDescription.tornado.3' },
            { damage: 40, delay: 1450, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.4' },
            { damage: 55, delay: 1400, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.5' },
            { damage: 75, delay: 1400, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.6' },
            { damage: 100, delay: 1400, duration: 3000, count: 8, description: 'spellsUpgradeDescription.tornado.7' },
        ],
        get finalDelay() {
            return getModifiedCooldown(this.baseDelay);
        },
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;
            this.damage = upgrade.damage;
            this.duration = upgrade.duration;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.count = upgrade.count

            this.level++;
            if (!scene.shootTornadoTimer) {
                scene.shootTornadoTimer = scene.time.addEvent({
                    delay: this.finalDelay,
                    callback: () => shootTornado(
                        scene,
                        scene.player,
                        scene.tornadoGroup,
                        this.count
                    ),
                    loop: true
                });
            } else {
                scene.shootTornadoTimer.delay = this.finalDelay;
            }
        }
    },
    satellite: {
        name: 'spellsNames.satellite',
        description: 'Спутники вращаются вокруг героя и наносят урон врагам.',
        level: 1,
        icon: 'pictureSatellite',
        damage: 25 + playerInitCfgs.damageBonus,
        delayDamage: 100, // раз в 500 мс наносить урон
        count: 0,
        applyUpgrade(scene) {
            this.level++;
            this.count++
            // количество спутников = уровень
            scene.satellites.setCount(this.count);
            scene.satelliteStartSoundSfx.play()

        }
    },
    meteor: {
        name: 'spellsNames.meteor',
        description: 'meteoritus !',
        level: 1,
        icon: 'pictureMeteor',
        damage: 25 + playerInitCfgs.damageBonus,
        delayDamage: 100, // раз в 500 мс наносить урон
        delay: 4000,
        count: 1,
        delayInterval: 100,
        applyUpgrade(scene) {
            this.level++;
            this.count += 1;

            if (!scene.shootMeteorTimer) {
                scene.shootMeteorTimer = scene.time.addEvent({
                    delay: this.delay,
                    callback: () => shootMeteor(
                        scene,
                        scene.player,
                        scene.enemies.getGroup(),
                        this.count,
                        this.delayInterval,
                    ),
                    loop: true
                });
            } else {
                scene.shootMeteorTimer.delay = this.delay;
            }
        }
    },
    hail: {
        name: 'spellsNames.hail',
        description: 'spellsDescription.hail',
        level: 1,
        icon: 'pictureHail',
        damage: 0,
        delayDamage: 300, // раз в 500 мс наносить урон
        baseDelay: 0,
        count: 0,
        delayInterval: 100,
        upgrades: [
            { damage: 35, delay: 3000, count: 10, description: 'spellsUpgradeDescription.hail.1' },
            { damage: 45, delay: 3000, count: 15, description: 'spellsUpgradeDescription.hail.2' },
            { damage: 55, delay: 3000, count: 15, description: 'spellsUpgradeDescription.hail.3' },
            { damage: 65, delay: 3000, count: 15, description: 'spellsUpgradeDescription.hail.4' },
            { damage: 75, delay: 300, count: 15, description: 'spellsUpgradeDescription.hail.5' },
            { damage: 90, delay: 3000, count: 15, description: 'spellsUpgradeDescription.hail.6' },
            { damage: 100, delay: 3000, count: 15, description: 'spellsUpgradeDescription.hail.7' },
        ],
        get finalDelay() {
            return getModifiedCooldown(this.baseDelay);
        },
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;
            this.damage = upgrade.damage;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.count = upgrade.count
            this.level++;

            if (!scene.shootHailTimer) {
                scene.shootHailTimer = scene.time.addEvent({
                    delay: this.finalDelay,
                    callback: () => shootHail(
                        scene,
                        scene.player,
                        scene.enemies.getGroup(),
                        this.count,
                        this.delayInterval,

                    ),
                    loop: true
                });
            } else {
                scene.shootHailTimer.delay = this.finalDelay;
            }
        }
    },
    armageddon: {
        name: 'spellsNames.armageddon',
        description: 'spellsDescription.armageddon',
        level: 1,
        icon: 'pictureArmageddon',
        damage: 1000,
        baseDelay: 20000,
        upgrades: [
            { damage: 1000, delay: 20000, description: 'spellsUpgradeDescription.armageddon.1' },
            { damage: 1000, delay: 18000, description: 'spellsUpgradeDescription.armageddon.2' },
            { damage: 1000, delay: 16000, description: 'spellsUpgradeDescription.armageddon.3' },
            { damage: 1000, delay: 14000, description: 'spellsUpgradeDescription.armageddon.4' },
            { damage: 1000, delay: 12000, description: 'spellsUpgradeDescription.armageddon.5' },
            { damage: 1000, delay: 10000, description: 'spellsUpgradeDescription.armageddon.6' },
            { damage: 1000, delay: 8000, description: 'spellsUpgradeDescription.armageddon.7' },
        ],
        get finalDelay() {
            return getModifiedCooldown(this.baseDelay);
        },
        delayInterval: 100,
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;
            this.damage = upgrade.damage;
            this.baseDelay = upgrade.delay;
            this.description = upgrade.description;
            this.level++;

            if (!scene.shootArmageddonTimer) {
                scene.shootArmageddonTimer = scene.time.addEvent({
                    delay: this.finalDelay,
                    callback: () => shootArmageddon(
                        scene,
                        scene.enemies.getGroup(),

                    ),
                    loop: true
                });
            } else {
                scene.shootArmageddonTimer.delay = this.finalDelay;
            }
        }
    },
    intellect: {
        name: 'spellsNames.intellect',
        description: 'spellsDescription.intellect',
        level: 1,
        icon: 'pictureIntellect',
        upgrades: [
            { damage: 1000, delay: 20000, description: 'spellsUpgradeDescription.intellect.1' },
            { damage: 1000, delay: 18000, description: 'spellsUpgradeDescription.intellect.2' },
            { damage: 1000, delay: 16000, description: 'spellsUpgradeDescription.intellect.3' },
            { damage: 1000, delay: 14000, description: 'spellsUpgradeDescription.intellect.4' },
            { damage: 1000, delay: 12000, description: 'spellsUpgradeDescription.intellect.5' },
            { damage: 1000, delay: 10000, description: 'spellsUpgradeDescription.intellect.6' },
            { damage: 1000, delay: 8000, description: 'spellsUpgradeDescription.intellect.7' },
        ],
        applyUpgrade(scene) {
            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;
            this.level++;
            this.description = upgrade.description;
            playerInitCfgs.damageBonus += 0.25 * levels[0].playerConfigs.dmg;
        }
    },
    robe: {
        name: 'spellsNames.robe',
        description: 'spellsDescription.robe',
        level: 1,
        icon: 'pictureRobe',
        upgrades: [
            { cooldwonReduce: 0.05, description: 'spellsUpgradeDescription.robe.1' },
            { cooldwonReduce: 0.05, description: 'spellsUpgradeDescription.robe.2' },
            { cooldwonReduce: 0.05, description: 'spellsUpgradeDescription.robe.3' },
            { cooldwonReduce: 0.05, description: 'spellsUpgradeDescription.robe.4' },
            { cooldwonReduce: 0.05, description: 'spellsUpgradeDescription.robe.5' },
            { cooldwonReduce: 0.05, description: 'spellsUpgradeDescription.robe.6' },
            { cooldwonReduce: 0.1, description: 'spellsUpgradeDescription.robe.7' },
        ],
        applyUpgrade(scene) {

            const upgrade = this.upgrades[this.level - 1];
            if (!upgrade) return;
            this.level++;
            this.description = upgrade.description;
            playerInitCfgs.cooldownReductionBonus += upgrade.cooldwonReduce

            // Если таймер магии уже есть — обнови его delay
            if (scene.shootMagicTimer && playerSkills.magic) {
                scene.shootMagicTimer.delay = playerSkills.magic.finalDelay;
            }

            if (scene.shootFireTimer && playerSkills.fire) {
                scene.shootFireTimer.delay = playerSkills.fire.finalDelay;
            }
            if (scene.shootLightTimer && playerSkills.light) {
                scene.shootLightTimer.delay = playerSkills.light.finalDelay;
            }
            if (scene.shootLightningTimer && playerSkills.lightning) {
                scene.shootLightningTimer.delay = playerSkills.lightning.finalDelay;
            }
            if (scene.shootFireAuraTimer && playerSkills.fireAura) {
                scene.shootFireAuraTimer.delay = playerSkills.fireAura.finalDelay;
            }
            if (scene.shootTornadoTimer && playerSkills.tornado) {
                scene.shootTornadoTimer.delay = playerSkills.tornado.finalDelay;
            }
            // if (scene.shootFireTimer && playerSkills.satellite) {
            //     scene.shootFireTimer.delay = playerSkills.satellite.finalDelay;
            // }
            if (scene.shootMeteorTimer && playerSkills.meteor) {
                scene.shootMeteorTimer.delay = playerSkills.meteor.finalDelay;
            }
            if (scene.shootHailTimer && playerSkills.hail) {
                scene.shootHailTimer.delay = playerSkills.hail.finalDelay;
            }
            if (scene.shootArmageddonTimer && playerSkills.armageddon) {
                scene.shootArmageddonTimer.delay = playerSkills.armageddon.finalDelay;
            }

        }
    },
    magnetRadius: {
        name: 'spellsNames.magnetRadius',
        description: 'spellsDescription.magnetRadius',
        level: 1,
        icon: 'pictureMagnet',
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
            this.level++;
            this.description = upgrade.description;
            playerInitCfgs.coinsMagnetRadiusBonus = upgrade.radius;

        }
    },

    get allSkills() {
        if (this.upgradePointsCount > 4) {
            return [

                // this.meteor,
                this.magic,
                this.armageddon,
                this.tornado,
                this.fireAura,
                this.satellite,
                // this.hail,
                // this.fire,
                // this.light,
                // this.lightning,

                // this.magnetRadius,
                // this.intellect,
                // this.robe,
            ]
        } else {
            return [
                // this.meteor,
                this.magic,
                this.armageddon,
                this.tornado,
                this.fireAura,
                this.satellite,
                // this.hail,
                // this.fire,
                // this.light,
                // this.lightning,
            ]
        }
    },
    get allNotMaxLevelSkills() {
        return this.allSkills.filter(skill => skill.level <= 7)


    },
    resetSkills() {
        this.upgradePointsCount = 0;


        this.magic = {
            name: 'spellsNames.magic',
            description: 'spellsDescription.magic',
            level: 2,
            icon: 'pictureMagic',
            damage: 0,
            baseDelay: 0,
            targetCount: 0,
            count: 0,
            upgrades: [
                { damage: 35, delay: 850, targetCount: 1, count: 1, description: 'spellsUpgradeDescription.magic.1' },
                { damage: 45, delay: 700, targetCount: 2, count: 1, description: 'spellsUpgradeDescription.magic.2' },
                { damage: 60, delay: 550, targetCount: 2, count: 1, description: 'spellsUpgradeDescription.magic.3' },
                { damage: 75, delay: 450, targetCount: 2, count: 2, description: 'spellsUpgradeDescription.magic.4' },
                { damage: 95, delay: 400, targetCount: 3, count: 2, description: 'spellsUpgradeDescription.magic.5' },
                { damage: 105, delay: 400, targetCount: 3, count: 2, description: 'spellsUpgradeDescription.magic.6' },
                { damage: 120, delay: 400, targetCount: 3, count: 3, description: 'spellsUpgradeDescription.magic.7' },
            ],
            get finalDelay() {
                return getModifiedCooldown(this.baseDelay);
            },
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;
                this.damage = upgrade.damage;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.count = upgrade.count;
                this.targetCount = upgrade.targetCount;
                this.level++;
                if (!scene.shootMagicTimer) {
                    if (scene.shootFakeMagicTimer) scene.shootFakeMagicTimer.destroy()//fake destroy
                    scene.shootMagicTimer = scene.time.addEvent({
                        delay: this.finalDelay,
                        callback: () => shootMagic(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            scene.magicShots,
                            this.count,
                            this.targetCount,
                        ),
                        loop: true
                    });
                } else {
                    scene.shootMagicTimer.delay = this.finalDelay;
                }
            }
        }
        this.fire = {
            name: 'spellsNames.fire',
            description: 'spellsDescription.fire',
            level: 1,
            icon: 'pictureFire',
            damage: 0,
            baseDelay: 0,
            count: 0,
            upgrades: [
                { damage: 40, delay: 1350, count: 1, description: 'spellsUpgradeDescription.fire.1' },
                { damage: 40, delay: 1200, count: 2, description: 'spellsUpgradeDescription.fire.2' },
                { damage: 40, delay: 1050, count: 2, description: 'spellsUpgradeDescription.fire.3' },
                { damage: 40, delay: 900, count: 2, description: 'spellsUpgradeDescription.fire.4' },
                { damage: 55, delay: 900, count: 3, description: 'spellsUpgradeDescription.fire.5' },
                { damage: 75, delay: 900, count: 3, description: 'spellsUpgradeDescription.fire.6' },
                { damage: 100, delay: 800, count: 3, description: 'spellsUpgradeDescription.fire.7' },
            ],
            get finalDelay() {
                return getModifiedCooldown(this.baseDelay);
            },
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;
                this.damage = upgrade.damage;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.count = upgrade.count
                this.level++;
                if (!scene.shootFireTimer) {
                    scene.shootFireTimer = scene.time.addEvent({
                        delay: this.finalDelay,
                        callback: () => shootFire(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            scene.fireShots,
                            this.count
                        ),
                        loop: true
                    });
                } else {
                    scene.shootFireTimer.delay = this.finalDelay;
                }
            }
        }
        this.light = {
            name: 'spellsNames.light',
            description: 'spellsDescription.light',
            level: 1,
            icon: 'pictureLight',
            damage: 0,
            baseDelay: 0,
            count: 0,
            upgrades: [
                { damage: 35, delay: 850, count: 1, description: 'spellsUpgradeDescription.light.1' },
                { damage: 35, delay: 700, count: 2, description: 'spellsUpgradeDescription.light.2' },
                { damage: 35, delay: 550, count: 3, description: 'spellsUpgradeDescription.light.3' },
                { damage: 40, delay: 450, count: 3, description: 'spellsUpgradeDescription.light.4' },
                { damage: 55, delay: 400, count: 3, description: 'spellsUpgradeDescription.light.5' },
                { damage: 75, delay: 400, count: 3, description: 'spellsUpgradeDescription.light.6' },
                { damage: 100, delay: 400, count: 4, description: 'spellsUpgradeDescription.light.7' },
            ],
            get finalDelay() {
                return getModifiedCooldown(this.baseDelay);
            },
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;
                this.damage = upgrade.damage;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.count = upgrade.count
                this.level++;
                if (!scene.shootLightTimer) {
                    scene.shootLightTimer = scene.time.addEvent({
                        delay: this.finalDelay,
                        callback: () => shootLight(
                            scene,
                            scene.player,
                            scene.lightShots,
                            this.count,
                            scene.enemies
                        ),
                        loop: true
                    });
                } else {
                    scene.shootLightTimer.delay = this.finalDelay;
                }
            }
        }
        this.lightning = {
            name: 'spellsNames.lightning',
            description: 'spellsDescription.lightning',
            level: 1,
            icon: 'pictureLightning',
            damage: 0,
            baseDelay: 0,
            count: 0,
            upgrades: [
                { damage: 50, delay: 1550, count: 2, description: 'spellsUpgradeDescription.lightning.1' },
                { damage: 50, delay: 1400, count: 4, description: 'spellsUpgradeDescription.lightning.2' },
                { damage: 50, delay: 1250, count: 5, description: 'spellsUpgradeDescription.lightning.3' },
                { damage: 60, delay: 1100, count: 5, description: 'spellsUpgradeDescription.lightning.4' },
                { damage: 70, delay: 950, count: 5, description: 'spellsUpgradeDescription.lightning.5' },
                { damage: 85, delay: 800, count: 5, description: 'spellsUpgradeDescription.lightning.6' },
                { damage: 100, delay: 650, count: 5, description: 'spellsUpgradeDescription.lightning.7' },
            ],
            get finalDelay() {
                return getModifiedCooldown(this.baseDelay);
            },
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;
                this.damage = upgrade.damage;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.count = upgrade.count
                this.level++;
                scene.thunderLevelUpSfx.play()
                if (!scene.shootLightningTimer) {
                    scene.shootLightningTimer = scene.time.addEvent({
                        delay: this.finalDelay,
                        callback: () => shootLightning(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            scene.lightningShots,
                            this.count,
                        ),
                        loop: true
                    });
                } else {
                    scene.shootLightningTimer.delay = this.finalDelay;
                }
            }
        }
        this.fireAura = {
            name: 'spellsNames.fireAura',
            description: 'spellsDescription.fireAura',
            level: 1,
            icon: 'pictureFireAura',
            damage: 0,
            baseDelay: 400,
            radius: 200,
            upgrades: [
                { damage: 15, delay: 250, radius: 100, description: 'spellsUpgradeDescription.fireAura.1' },
                { damage: 20, delay: 250, radius: 130, description: 'spellsUpgradeDescription.fireAura.2' },
                { damage: 30, delay: 250, radius: 160, description: 'spellsUpgradeDescription.fireAura.3' },
                { damage: 40, delay: 250, radius: 190, description: 'spellsUpgradeDescription.fireAura.4' },
                { damage: 55, delay: 250, radius: 220, description: 'spellsUpgradeDescription.fireAura.5' },
                { damage: 75, delay: 250, radius: 250, description: 'spellsUpgradeDescription.fireAura.6' },
                { damage: 100, delay: 250, radius: 280, description: 'spellsUpgradeDescription.fireAura.7' },
            ],
            get finalDelay() {
                return getModifiedCooldown(this.baseDelay);
            },
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;
                this.damage = upgrade.damage;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.radius = upgrade.radius;
                this.level++;

                if (!scene.shootFireAuraTimer) {
                    scene.shootFireAuraTimer = scene.time.addEvent({
                        delay: this.finalDelay,
                        callback: () => shootFireAura(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            scene.fireAuraShots,
                            this.radius
                        ),
                        loop: true
                    });
                } else {
                    scene.shootFireAuraTimer.delay = this.finalDelay;
                }
            }
        }
        this.tornado = {
            name: 'spellsNames.tornado',
            description: 'spellsDescription.tornado',
            level: 1,
            icon: 'pictureTornado',
            damage: 0,
            damageDelay: 250,
            baseDelay: 0,
            upgrades: [
                { damage: 15, delay: 1550, count: 2, description: 'spellsUpgradeDescription.tornado.1' },
                { damage: 20, delay: 1500, count: 4, description: 'spellsUpgradeDescription.tornado.2' },
                { damage: 30, delay: 1550, count: 6, description: 'spellsUpgradeDescription.tornado.3' },
                { damage: 40, delay: 1450, count: 8, description: 'spellsUpgradeDescription.tornado.4' },
                { damage: 55, delay: 1400, count: 8, description: 'spellsUpgradeDescription.tornado.5' },
                { damage: 75, delay: 1400, count: 8, description: 'spellsUpgradeDescription.tornado.6' },
                { damage: 100, delay: 1400, count: 8, description: 'spellsUpgradeDescription.tornado.7' },
            ],
            get finalDelay() {
                return getModifiedCooldown(this.baseDelay);
            },
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;
                this.damage = upgrade.damage;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.count = upgrade.count

                this.level++;
                if (!scene.shootTornadoTimer) {
                    scene.shootTornadoTimer = scene.time.addEvent({
                        delay: this.finalDelay,
                        callback: () => shootTornado(
                            scene,
                            scene.player,
                            scene.tornadoGroup,
                            this.level
                        ),
                        loop: true
                    });
                } else {
                    scene.shootTornadoTimer.delay = this.finalDelay;
                }
            }
        }
        this.satellite = {
            name: 'spellsNames.satellite',
            description: 'Спутники вращаются вокруг героя и наносят урон врагам.',
            level: 1,
            icon: 'pictureSatellite',
            damage: 25 + playerInitCfgs.damageBonus,
            delayDamage: 100, // раз в 500 мс наносить урон
            count: 0,
            applyUpgrade(scene) {
                this.level++;
                this.count++
                // количество спутников = уровень
                scene.satellites.setCount(this.count);
                scene.satelliteStartSoundSfx.play()

            }
        }
        this.meteor = {
            name: 'spellsNames.meteor',
            description: 'meteoritus !',
            level: 1,
            icon: 'pictureMeteor',
            damage: 25 + playerInitCfgs.damageBonus,
            delayDamage: 100, // раз в 500 мс наносить урон
            delay: 4000,
            count: 1,
            delayInterval: 100,
            applyUpgrade(scene) {
                this.level++;
                this.count += 1;

                if (!scene.shootMeteorTimer) {
                    scene.shootMeteorTimer = scene.time.addEvent({
                        delay: this.delay,
                        callback: () => shootMeteor(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            this.count,
                            this.delayInterval,
                        ),
                        loop: true
                    });
                } else {
                    scene.shootMeteorTimer.delay = this.delay;
                }
            }
        }
        this.hail = {
            name: 'spellsNames.hail',
            description: 'spellsDescription.hail',
            level: 1,
            icon: 'pictureHail',
            damage: 0,
            delayDamage: 300, // раз в 500 мс наносить урон
            baseDelay: 0,
            count: 0,
            delayInterval: 100,
            upgrades: [
                { damage: 35, delay: 3000, count: 10, description: 'spellsUpgradeDescription.hail.1' },
                { damage: 45, delay: 3000, count: 15, description: 'spellsUpgradeDescription.hail.2' },
                { damage: 55, delay: 3000, count: 15, description: 'spellsUpgradeDescription.hail.3' },
                { damage: 65, delay: 3000, count: 15, description: 'spellsUpgradeDescription.hail.4' },
                { damage: 75, delay: 300, count: 15, description: 'spellsUpgradeDescription.hail.5' },
                { damage: 90, delay: 3000, count: 15, description: 'spellsUpgradeDescription.hail.6' },
                { damage: 100, delay: 3000, count: 15, description: 'spellsUpgradeDescription.hail.7' },
            ],
            get finalDelay() {
                return getModifiedCooldown(this.baseDelay);
            },
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;
                this.damage = upgrade.damage;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.count = upgrade.count
                this.level++;

                if (!scene.shootHailTimer) {
                    scene.shootHailTimer = scene.time.addEvent({
                        delay: this.finalDelay,
                        callback: () => shootHail(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            this.count,
                            this.delayInterval,

                        ),
                        loop: true
                    });
                } else {
                    scene.shootHailTimer.delay = this.finalDelay;
                }
            }
        }
        this.armageddon = {
            name: 'spellsNames.armageddon',
            description: 'spellsDescription.armageddon',
            level: 1,
            icon: 'pictureArmageddon',
            damage: 1000,
            baseDelay: 20000,
            upgrades: [
                { damage: 1000, delay: 20000, description: 'spellsUpgradeDescription.armageddon.1' },
                { damage: 1000, delay: 18000, description: 'spellsUpgradeDescription.armageddon.2' },
                { damage: 1000, delay: 16000, description: 'spellsUpgradeDescription.armageddon.3' },
                { damage: 1000, delay: 14000, description: 'spellsUpgradeDescription.armageddon.4' },
                { damage: 1000, delay: 12000, description: 'spellsUpgradeDescription.armageddon.5' },
                { damage: 1000, delay: 10000, description: 'spellsUpgradeDescription.armageddon.6' },
                { damage: 1000, delay: 8000, description: 'spellsUpgradeDescription.armageddon.7' },
            ],
            get finalDelay() {
                return getModifiedCooldown(this.baseDelay);
            },
            delayInterval: 100,
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;
                this.damage = upgrade.damage;
                this.baseDelay = upgrade.delay;
                this.description = upgrade.description;
                this.level++;

                if (!scene.shootArmageddonTimer) {
                    scene.shootArmageddonTimer = scene.time.addEvent({
                        delay: this.finalDelay,
                        callback: () => shootArmageddon(
                            scene,
                            scene.enemies.getGroup(),

                        ),
                        loop: true
                    });
                } else {
                    scene.shootArmageddonTimer.delay = this.finalDelay;
                }
            }
        }
        this.intellect = {
            name: 'spellsNames.intellect',
            description: 'spellsDescription.intellect',
            level: 1,
            icon: 'pictureIntellect',
            upgrades: [
                { damage: 1000, delay: 20000, description: 'spellsUpgradeDescription.intellect.1' },
                { damage: 1000, delay: 18000, description: 'spellsUpgradeDescription.intellect.2' },
                { damage: 1000, delay: 16000, description: 'spellsUpgradeDescription.intellect.3' },
                { damage: 1000, delay: 14000, description: 'spellsUpgradeDescription.intellect.4' },
                { damage: 1000, delay: 12000, description: 'spellsUpgradeDescription.intellect.5' },
                { damage: 1000, delay: 10000, description: 'spellsUpgradeDescription.intellect.6' },
                { damage: 1000, delay: 8000, description: 'spellsUpgradeDescription.intellect.7' },
            ],
            applyUpgrade(scene) {
                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;
                this.level++;
                this.description = upgrade.description;
                playerInitCfgs.damageBonus += 0.25 * levels[0].playerConfigs.dmg;
            }
        }
        this.robe = {
            name: 'spellsNames.robe',
            description: 'spellsDescription.robe',
            level: 1,
            icon: 'pictureRobe',
            upgrades: [
                { cooldwonReduce: 0.05, description: 'spellsUpgradeDescription.robe.1' },
                { cooldwonReduce: 0.05, description: 'spellsUpgradeDescription.robe.2' },
                { cooldwonReduce: 0.05, description: 'spellsUpgradeDescription.robe.3' },
                { cooldwonReduce: 0.05, description: 'spellsUpgradeDescription.robe.4' },
                { cooldwonReduce: 0.05, description: 'spellsUpgradeDescription.robe.5' },
                { cooldwonReduce: 0.05, description: 'spellsUpgradeDescription.robe.6' },
                { cooldwonReduce: 0.1, description: 'spellsUpgradeDescription.robe.7' },
            ],
            applyUpgrade(scene) {

                const upgrade = this.upgrades[this.level - 1];
                if (!upgrade) return;
                this.level++;
                this.description = upgrade.description;
                playerInitCfgs.cooldownReductionBonus += upgrade.cooldwonReduce

                // Если таймер магии уже есть — обнови его delay
                if (scene.shootMagicTimer && playerSkills.magic) {
                    scene.shootMagicTimer.delay = playerSkills.magic.finalDelay;
                }

                if (scene.shootFireTimer && playerSkills.fire) {
                    scene.shootFireTimer.delay = playerSkills.fire.finalDelay;
                }
                if (scene.shootLightTimer && playerSkills.light) {
                    scene.shootLightTimer.delay = playerSkills.light.finalDelay;
                }
                if (scene.shootLightningTimer && playerSkills.lightning) {
                    scene.shootLightningTimer.delay = playerSkills.lightning.finalDelay;
                }
                if (scene.shootFireAuraTimer && playerSkills.fireAura) {
                    scene.shootFireAuraTimer.delay = playerSkills.fireAura.finalDelay;
                }
                if (scene.shootTornadoTimer && playerSkills.tornado) {
                    scene.shootTornadoTimer.delay = playerSkills.tornado.finalDelay;
                }
                // if (scene.shootFireTimer && playerSkills.satellite) {
                //     scene.shootFireTimer.delay = playerSkills.satellite.finalDelay;
                // }
                if (scene.shootMeteorTimer && playerSkills.meteor) {
                    scene.shootMeteorTimer.delay = playerSkills.meteor.finalDelay;
                }
                if (scene.shootHailTimer && playerSkills.hail) {
                    scene.shootHailTimer.delay = playerSkills.hail.finalDelay;
                }
                if (scene.shootArmageddonTimer && playerSkills.armageddon) {
                    scene.shootArmageddonTimer.delay = playerSkills.armageddon.finalDelay;
                }

            }
        }
        this.magnetRadius = {
            name: 'spellsNames.magnetRadius',
            description: 'spellsDescription.magnetRadius',
            level: 1,
            icon: 'pictureMagnet',
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
                this.level++;
                this.description = upgrade.description;
                playerInitCfgs.coinsMagnetRadiusBonus = upgrade.radius;

            }
        }

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

