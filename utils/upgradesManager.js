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
    magic: {
        name: 'magic',
        description: 'выпускает снаряд в цель',
        level: 1,
        icon: 'pictureMagic',
        damage: 0,
        baseDelay: 0,
        count: 0,
        upgrades: [
            { damage: 15, delay: 850, count: 1, description: '+5 урона, -150мс перезарядки, +1 цель' },
            { damage: 20, delay: 700, count: 2, description: '+10 урона, -150мс перезарядки, +1 цель' },
            { damage: 30, delay: 550, count: 3, description: '+10 урона, -100мс перезарядки, +1 цель' },
            { damage: 40, delay: 450, count: 4, description: '+15 урона, -50мс перезарядки, +1 цель' },
            { damage: 55, delay: 400, count: 5, description: '+20 урона' },
            { damage: 75, delay: 400, count: 5, description: '+25 урона, +3 цели' },
            { damage: 100, delay: 400, count: 8, description: 'выпускает снаряд в цель' },
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
            if (!scene.shootMagicTimer) {
                scene.shootMagicTimer = scene.time.addEvent({
                    delay: this.finalDelay,
                    callback: () => shootMagic(
                        scene,
                        scene.player,
                        scene.enemies.getGroup(),
                        scene.magicShots,
                        this.count
                    ),
                    loop: true
                });
            } else {
                scene.shootMagicTimer.delay = this.finalDelay;
            }
        }
    },
    fire: {
        name: 'fire',
        description: 'выпускает шар. он взрывается',
        level: 1,
        icon: 'pictureFire',
        damage: 0,
        baseDelay: 0,
        count: 0,
        upgrades: [
            { damage: 15, delay: 950, count: 1, description: '+5 урона, -250мс перезарядки, +1 цель' },
            { damage: 20, delay: 700, count: 2, description: '+10 урона, -150мс перезарядки, +1 цель' },
            { damage: 30, delay: 550, count: 3, description: '+10 урона, -100мс перезарядки, +1 цель' },
            { damage: 40, delay: 450, count: 4, description: '+15 урона, -50мс перезарядки, +1 цель' },
            { damage: 55, delay: 400, count: 5, description: '+20 урона' },
            { damage: 75, delay: 400, count: 5, description: '+25 урона, +3 цели' },
            { damage: 100, delay: 400, count: 8, description: 'выпускает шар. он взрывается' },
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
        name: 'light',
        description: 'bla bla',
        level: 0,
        icon: 'pictureLight',
        damage: 20,
        delay: 1150,
        applyUpgrade(scene) {
            this.level++;
            this.delay = Math.max(100, this.delay - 150);
            if (!scene.shootLightTimer) {
                scene.shootLightTimer = scene.time.addEvent({
                    delay: this.delay,
                    callback: () => shootLight(
                        scene,
                        scene.player,
                        scene.lightShots,
                        this.level + 1
                    ),
                    loop: true
                });
            } else {
                scene.shootLightTimer.delay = this.delay;
            }
        }
    },
    lightning: {
        name: 'lightning',
        description: 'bla bla',
        level: 0,
        icon: 'pictureLightning',
        damage: 15,
        delay: 1800,
        applyUpgrade(scene) {
            this.level++;
            this.delay = Math.max(100, this.delay - 150);
            if (!scene.shootLightningTimer) {
                scene.shootLightningTimer = scene.time.addEvent({
                    delay: this.delay,
                    callback: () => shootLightning(
                        scene,
                        scene.player,
                        scene.enemies.getGroup(),
                        scene.lightningShots,
                        this.level + 1
                    ),
                    loop: true
                });
            } else {
                scene.shootLightningTimer.delay = this.delay;
            }
        }
    },
    fireAura: {
        name: 'fireAura',
        description: 'bla bla',
        level: 0,
        icon: 'pictureFireAura',
        damage: 2 + playerInitCfgs.damageBonus,
        delay: 400,
        applyUpgrade(scene) {
            this.level++;
            this.delay = Math.max(100, this.delay - 150);
            if (!scene.shootFireAuraTimer) {
                scene.shootFireAuraTimer = scene.time.addEvent({
                    delay: this.delay,
                    callback: () => shootFireAura(
                        scene,
                        scene.player,
                        scene.enemies.getGroup(),
                        scene.fireAuraShots,
                        this.level + 1
                    ),
                    loop: true
                });
            } else {
                scene.shootFireAuraTimer.delay = this.delay;
            }
        }
    },
    tornado: {
        name: 'tornado',
        description: 'bla bla',
        level: 0,
        icon: 'pictureTornado',
        damage: 10 + playerInitCfgs.damageBonus,
        damageDelay: 250,
        delay: 2000,
        applyUpgrade(scene) {
            this.level++;
            this.delay = Math.max(100, this.delay - 150);
            if (!scene.shootTornadoTimer) {
                scene.shootTornadoTimer = scene.time.addEvent({
                    delay: this.delay,
                    callback: () => shootTornado(
                        scene,
                        scene.player,
                        scene.tornadoGroup,
                        this.level
                    ),
                    loop: true
                });
            } else {
                scene.shootTornadoTimer.delay = this.delay;
            }
        }
    },
    satellite: {
        name: 'satellite',
        description: 'Спутники вращаются вокруг героя и наносят урон врагам.',
        level: 0,
        icon: 'pictureSatellite',
        damage: 5 + playerInitCfgs.damageBonus,
        delayDamage: 100, // раз в 500 мс наносить урон
        applyUpgrade(scene) {
            this.level++;
            // количество спутников = уровень
            scene.satellites.setCount(this.level);
            scene.satelliteStartSoundSfx.play()




        }
    },
    meteor: {
        name: 'meteor',
        description: 'meteoritus !',
        level: 0,
        icon: 'pictureMeteor',
        damage: 25 + playerInitCfgs.damageBonus,
        delayDamage: 100, // раз в 500 мс наносить урон
        delay: 4000,
        count: 1,
        delayInterval: 100,
        applyUpgrade(scene) {
            this.level++;
            this.count += 1;
            this.delay = Math.max(100, this.delay - 50);
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
        name: 'hail',
        description: 'hail hail hail !',
        level: 0,
        icon: 'pictureHail',
        damage: 25 + playerInitCfgs.damageBonus,
        delayDamage: 100, // раз в 500 мс наносить урон
        delay: 1400,
        count: 10,
        delayInterval: 100,
        applyUpgrade(scene) {
            this.level++;
            this.count += 2;
            this.delay = Math.max(100, this.delay - 150);
            if (!scene.shootHailTimer) {
                scene.shootHailTimer = scene.time.addEvent({
                    delay: this.delay,
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
                scene.shootHailTimer.delay = this.delay;
            }
        }
    },
    armageddon: {
        name: 'armageddon',
        description: 'armageddon armageddon armageddon !',
        level: 0,
        icon: 'pictureArmageddon',
        damage: 1000,
        delayDamage: 100, // раз в 500 мс наносить урон
        delay: 15000 + playerInitCfgs.damageBonus,
        count: 10,
        delayInterval: 100,
        applyUpgrade(scene) {
            this.level++;
            this.count += 2;
            this.delay = Math.max(100, this.delay - 150);
            if (!scene.shootArmageddonTimer) {
                scene.shootArmageddonTimer = scene.time.addEvent({
                    delay: this.delay,
                    callback: () => shootArmageddon(
                        scene,
                        scene.enemies.getGroup(),
                    ),
                    loop: true
                });
            } else {
                scene.shootArmageddonTimer.delay = this.delay;
            }
        }
    },
    intellect: {
        name: 'intellect',
        description: 'intellect intellect intellect !',
        level: 0,
        icon: 'pictureIntellect',
        applyUpgrade(scene) {
            this.level++;
            playerInitCfgs.damageBonus += 0.25 * levels[0].playerConfigs.dmg;
        }
    },
    robe: {
        name: 'robe',
        description: 'start -5% cooldown on all abilities',
        level: 1,
        icon: 'pictureRobe',
        upgrades: [
            { cooldwonReduce: 0.05, description: '-5% cooldown on all abilities' },
            { cooldwonReduce: 0.05, description: '-5% cooldown on all abilities' },
            { cooldwonReduce: 0.05, description: '-5% cooldown on all abilities' },
            { cooldwonReduce: 0.05, description: '-5% cooldown on all abilities' },
            { cooldwonReduce: 0.05, description: '-5% cooldown on all abilities' },
            { cooldwonReduce: 0.05, description: 'Reduces the cooldown of all abilities' },
            { cooldwonReduce: 0.05, description: 'Reduces the cooldown of all abilities' },
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
        }
    },

    get allSkills() {
        return [
            // this.magic,
            // this.fire,
            // this.light,
            // this.lightning,
            this.fireAura,
            this.tornado,
            this.satellite,
            // this.meteor,
            // this.hail,
            // this.armageddon,
            // this.intellect,
            // this.robe
        ]
    },
    resetSkills() {
        this.magic = {
            name: 'magic',
            description: 'bla bla',
            level: 0,
            icon: 'pictureMagic',
            damage: 10,
            delay: 1000,
            applyUpgrade(scene) {
                this.level++;
                this.delay = Math.max(100, this.delay - 150);
                if (!scene.shootMagicTimer) {
                    scene.shootMagicTimer = scene.time.addEvent({
                        delay: this.delay,
                        callback: () => shootMagic(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            scene.magicShots,
                            this.level + 1
                        ),
                        loop: true
                    });
                } else {
                    scene.shootMagicTimer.delay = this.delay;
                }
            }
        };
        this.fire = {
            name: 'fire',
            description: 'bla bla',
            level: 0,
            icon: 'pictureFire',
            damage: 10,
            delay: 1500,
            applyUpgrade(scene) {
                this.level++;
                this.delay = Math.max(100, this.delay - 150);
                if (!scene.shootFireTimer) {
                    scene.shootFireTimer = scene.time.addEvent({
                        delay: this.delay,
                        callback: () => shootFire(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            scene.fireShots,
                            this.level + 1
                        ),
                        loop: true
                    });
                } else {
                    scene.shootFireTimer.delay = this.delay;
                }
            }
        };
        this.light = {
            name: 'light',
            description: 'bla bla',
            level: 0,
            icon: 'pictureLight',
            damage: 20,
            delay: 1150,
            applyUpgrade(scene) {
                this.level++;
                this.delay = Math.max(100, this.delay - 150);
                if (!scene.shootLightTimer) {
                    scene.shootLightTimer = scene.time.addEvent({
                        delay: this.delay,
                        callback: () => shootLight(
                            scene,
                            scene.player,
                            scene.lightShots,
                            this.level + 1
                        ),
                        loop: true
                    });
                } else {
                    scene.shootLightTimer.delay = this.delay;
                }
            }
        };
        this.lightning = {
            name: 'lightning',
            description: 'bla bla',
            level: 0,
            icon: 'pictureLightning',
            damage: 15,
            delay: 1800,
            applyUpgrade(scene) {
                this.level++;
                this.delay = Math.max(100, this.delay - 150);
                if (!scene.shootLightningTimer) {
                    scene.shootLightningTimer = scene.time.addEvent({
                        delay: this.delay,
                        callback: () => shootLightning(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            scene.lightningShots,
                            this.level + 1
                        ),
                        loop: true
                    });
                } else {
                    scene.shootLightningTimer.delay = this.delay;
                }
            }
        };
        this.fireAura = {
            name: 'fireAura',
            description: 'bla bla',
            level: 0,
            icon: 'pictureFireAura',
            damage: 2,
            delay: 400,
            applyUpgrade(scene) {
                this.level++;
                this.delay = Math.max(100, this.delay - 150);
                if (!scene.shootFireAuraTimer) {
                    scene.shootFireAuraTimer = scene.time.addEvent({
                        delay: this.delay,
                        callback: () => shootFireAura(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            scene.fireAuraShots,
                            this.level + 1
                        ),
                        loop: true
                    });
                } else {
                    scene.shootFireAuraTimer.delay = this.delay;
                }
            }
        };
        this.tornado = {
            name: 'tornado',
            description: 'bla bla',
            level: 0,
            icon: 'pictureTornado',
            damage: 2,
            delay: 400,
            applyUpgrade(scene) {
                this.level++;
                this.delay = Math.max(100, this.delay - 150);
                if (!scene.shootTornadoTimer) {
                    scene.shootTornadoTimer = scene.time.addEvent({
                        delay: this.delay,
                        callback: () => shootTornado(
                            scene,
                            scene.player,
                            scene.enemies.getGroup(),
                            scene.fireAuraShots,
                            this.level + 1
                        ),
                        loop: true
                    });
                } else {
                    scene.shootTornadoTimer.delay = this.delay;
                }
            }
        };
        this.satellite = {
            name: 'satellite',
            description: 'bla bla',
            level: 0,
            icon: 'pictureSatellite',
            damage: 20,
            damageDelay: 250,
            delay: 2000,
            applyUpgrade(scene) {
                this.level++;
                this.delay = Math.max(100, this.delay - 150);
                if (!scene.shootSatelliteTimer) {
                    scene.shootSatelliteTimer = scene.time.addEvent({
                        delay: this.delay,
                        callback: () => shootSatellite(
                            scene,
                            scene.player,
                            scene.satelliteGroup,
                            this.level
                        ),
                        loop: true
                    });
                } else {
                    scene.shootSatelliteTimer.delay = this.delay;
                }
            }
        };
        this.meteor = {
            name: 'meteor',
            description: 'meteoritus !',
            level: 0,
            icon: 'pictureMeteor',
            damage: 25,
            delayDamage: 100, // раз в 500 мс наносить урон
            delay: 4000,
            count: 1,
            delayInterval: 100,
            applyUpgrade(scene) {
                this.level++;
                this.count += 1;
                this.delay = Math.max(100, this.delay - 50);
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
        };
        this.hail = {
            name: 'hail',
            description: 'hail hail hail !',
            level: 0,
            icon: 'pictureHail',
            damage: 25,
            delayDamage: 100, // раз в 500 мс наносить урон
            delay: 1400,
            count: 10,
            delayInterval: 100,
            applyUpgrade(scene) {
                this.level++;
                this.count += 2;
                this.delay = Math.max(100, this.delay - 150);
                if (!scene.shootHailTimer) {
                    scene.shootHailTimer = scene.time.addEvent({
                        delay: this.delay,
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
                    scene.shootHailTimer.delay = this.delay;
                }
            }
        };
        this.armageddon = {
            name: 'armageddon',
            description: 'armageddon armageddon armageddon !',
            level: 0,
            icon: 'pictureArmageddon',
            damage: 1000,
            delayDamage: 100, // раз в 500 мс наносить урон
            delay: 15000,
            count: 10,
            delayInterval: 100,
            applyUpgrade(scene) {
                this.level++;
                this.count += 2;
                this.delay = Math.max(100, this.delay - 150);
                if (!scene.shootArmageddonTimer) {
                    scene.shootArmageddonTimer = scene.time.addEvent({
                        delay: this.delay,
                        callback: () => shootArmageddon(
                            scene,
                            scene.enemies.getGroup(),
                        ),
                        loop: true
                    });
                } else {
                    scene.shootArmageddonTimer.delay = this.delay;
                }
            }
        };
        this.intellect = {
            name: 'intellect',
            description: 'intellect intellect intellect !',
            level: 0,
            icon: 'pictureIntellect',
            applyUpgrade(scene) {
                this.level++;
                playerInitCfgs.damageBonus += 10;
            }
        };

    },
    getRandomUpgrades(scene) {

        const result = []

        while (result.length < 3) {
            const randomIndex = Phaser.Math.Between(0, this.allSkills.length - 1);
            const item = this.allSkills[randomIndex];

            if (!result.includes(item)) {
                result.push(item);
            }
        }

        return result

    }
}

