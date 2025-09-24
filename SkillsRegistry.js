const SkillRegistry = {//basic
    magic: {
        key: 'magic',
        level: 1,
        icon: 'pictureMagic',
        upgrades: [
            { damage: 35, delay: 850, targetCount: 1, count: 1, price: 600 },
            { damage: 40, delay: 828, targetCount: 1, count: 2, price: 1200 },
            { damage: 46, delay: 803, targetCount: 2, count: 2, price: 2400 },
            { damage: 53, delay: 781, targetCount: 2, count: 2, price: 4800 },
            { damage: 61, delay: 759, targetCount: 3, count: 2, price: 9600 },
            { damage: 70, delay: 737, targetCount: 3, count: 2, price: 19200 },
            { damage: 81, delay: 715, targetCount: 3, count: 3, price: 1000000 },
            { damage: 1000, delay: 693, targetCount: 3, count: 3, price: 1000000 }

        ],
        getCurrentStats() {


            return this.upgrades[this.level - 1] || this.upgrades[this.upgrades.length - 1];
        },
        getNextStats() {
            return this.upgrades[this.level] || this.upgrades[this.upgrades.length - 1];
        },
        getStats() {
            return this.upgrades;
        },
        get damage() {
            // console.log('magic dmg : ', this.upgrades[this.level - 1].damage);

            return this.upgrades[this.level - 1].damage
        },
        get delay() {
            return this.upgrades[this.level - 1].delay
        },
        get currentLevel() { return this.level },
        get nextLevel() { return this.level + 1 },
        upgrade() {
            if (this.level < this.upgrades.length) {
                this.level++;
            }
        }
    },
    fire: {
        key: 'fire',
        level: 1,
        icon: 'pictureFire',
        upgrades: [
            { damage: 40, delay: 1350, targetCount: 1, count: 1, price: 600 },
            { damage: 46, delay: 1316, targetCount: 1, count: 2, price: 1200 },
            { damage: 53, delay: 1282, targetCount: 2, count: 2, price: 2400 },
            { damage: 61, delay: 1248, targetCount: 2, count: 2, price: 4800 },
            { damage: 70, delay: 1214, targetCount: 3, count: 2, price: 9600 },
            { damage: 81, delay: 1180, targetCount: 3, count: 2, price: 19200 },
            { damage: 93, delay: 1146, targetCount: 3, count: 3, price: 1000000 },
            { damage: 1000, delay: 1112, targetCount: 4, count: 4, price: 1000000 }

        ],
        getCurrentStats() {
            return this.upgrades[this.level - 1] || this.upgrades[this.upgrades.length - 1];
        },
        getNextStats() {
            return this.upgrades[this.level] || this.upgrades[this.upgrades.length - 1];
        },
        getStats() {
            return this.upgrades;
        },
        get nextLevel() { return this.level + 1 },
        get damage() {
            // console.log('fire dmg : ', this.upgrades[this.level - 1].damage);

            return this.upgrades[this.level - 1].damage
        },
        get delay() {
            return this.upgrades[this.level - 1].delay
        },
        upgrade() {
            if (this.level < this.upgrades.length) {
                this.level++;
            }
        }
    },

    light: {
        key: 'light',
        level: 1,
        icon: 'pictureLight',
        upgrades: [
            { damage: 27, delay: 1200, targetCount: 1, count: 1, price: 600 },
            { damage: 31, delay: 1170, targetCount: 1, count: 2, price: 1200 },
            { damage: 36, delay: 1140, targetCount: 2, count: 2, price: 2400 },
            { damage: 41, delay: 1110, targetCount: 2, count: 2, price: 4800 },
            { damage: 47, delay: 1080, targetCount: 3, count: 2, price: 9600 },
            { damage: 54, delay: 1050, targetCount: 3, count: 2, price: 19200 },
            { damage: 62, delay: 1020, targetCount: 3, count: 3, price: 1000000 },
            { damage: 1000, delay: 1020, targetCount: 3, count: 3, price: 1000000 }
        ],
        getCurrentStats() {
            return this.upgrades[this.level - 1] || this.upgrades[this.upgrades.length - 1];
        },
        getNextStats() {
            return this.upgrades[this.level] || this.upgrades[this.upgrades.length - 1];
        },
        getStats() {
            return this.upgrades;
        },
        get nextLevel() { return this.level + 1 },
        get damage() {
            // console.log('light dmg : ', this.upgrades[this.level - 1].damage);

            return this.upgrades[this.level - 1].damage
        },
        get delay() {
            return this.upgrades[this.level - 1].delay
        },
        upgrade() {
            if (this.level < this.upgrades.length) {
                this.level++;
            }
        }
    },

    lightning: {
        key: 'lightning',
        level: 1,
        icon: 'pictureLightning',
        upgrades: [
            { damage: 50, delay: 1510, targetCount: 1, count: 1, price: 600 },
            { damage: 57, delay: 1470, targetCount: 1, count: 2, price: 1200 },
            { damage: 66, delay: 1430, targetCount: 2, count: 2, price: 2400 },
            { damage: 78, delay: 1390, targetCount: 2, count: 2, price: 4800 },
            { damage: 101, delay: 1350, targetCount: 3, count: 2, price: 9600 },
            { damage: 116, delay: 1310, targetCount: 3, count: 2, price: 19200 },
             { damage: 136, delay: 1270, targetCount: 3, count: 2, price: 1000000 },
            { damage: 1000, delay: 1270, targetCount: 3, count: 3, price: 1000000 }
        ],
        getCurrentStats() {
            return this.upgrades[this.level - 1] || this.upgrades[this.upgrades.length - 1];
        },
        getNextStats() {
            return this.upgrades[this.level] || this.upgrades[this.upgrades.length - 1];
        },
        getStats() {
            return this.upgrades;
        },
        get nextLevel() { return this.level + 1 },
        get damage() {
            // console.log('lightning dmg : ', this.upgrades[this.level - 1].damage);

            return this.upgrades[this.level - 1].damage
        },
        get delay() {
            return this.upgrades[this.level - 1].delay
        },
        upgrade() {
            if (this.level < this.upgrades.length) {
                this.level++;
            }
        }
    },
    fireAura: {
        key: 'fireAura',
        level: 1,
        icon: 'pictureFireAura',
        upgrades: [
            { damage: 23, delay: 250, targetCount: 1, count: 1, price: 600 },
            { damage: 27, delay: 245, targetCount: 1, count: 2, price: 1200 },
            { damage: 31, delay: 240, targetCount: 2, count: 2, price: 2400 },
            { damage: 36, delay: 235, targetCount: 2, count: 2, price: 4800 },
            { damage: 42, delay: 230, targetCount: 3, count: 2, price: 9600 },
            { damage: 49, delay: 225, targetCount: 3, count: 2, price: 19200 },
            { damage: 55, delay: 220, targetCount: 3, count: 3, price: 1000000 },
            { damage: 1000, delay: 215, targetCount: 3, count: 3, price: 1000000 }

        ],
        getCurrentStats() {
            return this.upgrades[this.level - 1] || this.upgrades[this.upgrades.length - 1];
        },
        getNextStats() {
            return this.upgrades[this.level] || this.upgrades[this.upgrades.length - 1];
        },
        getStats() {
            return this.upgrades;
        },
        get damage() {
            // console.log('fireaura dmg : ', this.upgrades[this.level - 1].damage);

            return this.upgrades[this.level - 1].damage
        },
        get delay() {
            return this.upgrades[this.level - 1].delay
        },
        get currentLevel() { return this.level },
        get nextLevel() { return this.level + 1 },
        upgrade() {
            if (this.level < this.upgrades.length) {
                this.level++;
            }
        }
    },
    tornado: {
        key: 'tornado',
        level: 1,
        icon: 'pictureTornado',
        upgrades: [
            { damage: 17, delay: 1700, targetCount: 1, count: 1, price: 600 },
            { damage: 20, delay: 1657, targetCount: 1, count: 2, price: 1200 },
            { damage: 23, delay: 1614, targetCount: 2, count: 2, price: 2400 },
            { damage: 26, delay: 1572, targetCount: 2, count: 2, price: 4800 },
            { damage: 31, delay: 1530, targetCount: 3, count: 2, price: 9600 },
            { damage: 37, delay: 1488, targetCount: 3, count: 2, price: 19200 },
            { damage: 42, delay: 1446, targetCount: 3, count: 3, price: 1000000 },
            { damage: 1000, delay: 693, targetCount: 3, count: 3, price: 1000000 }

        ],
        getCurrentStats() {
            return this.upgrades[this.level - 1] || this.upgrades[this.upgrades.length - 1];
        },
        getNextStats() {
            return this.upgrades[this.level] || this.upgrades[this.upgrades.length - 1];
        },
        getStats() {
            return this.upgrades;
        },
        get damage() {
            // console.log('tornado dmg : ', this.upgrades[this.level - 1].damage);
            return this.upgrades[this.level - 1].damage
        },
        get delay() {
            return this.upgrades[this.level - 1].delay
        },
        get currentLevel() { return this.level },
        get nextLevel() { return this.level + 1 },
        upgrade() {
            if (this.level < this.upgrades.length) {
                this.level++;
            }
        }
    },
    satellite: {
        key: 'satellite',
        level: 1,
        icon: 'pictureSatellite',
        upgrades: [
            { damage: 26, delay: 0, targetCount: 1, count: 1, price: 600 },
            { damage: 30, delay: 0, targetCount: 1, count: 2, price: 1200 },
            { damage: 34, delay: 0, targetCount: 2, count: 2, price: 2400 },
            { damage: 39, delay: 0, targetCount: 2, count: 2, price: 4800 },
            { damage: 45, delay: 0, targetCount: 3, count: 2, price: 9600 },
            { damage: 51, delay: 0, targetCount: 3, count: 2, price: 19200 },
            { damage: 58, delay: 0, targetCount: 3, count: 3, price: 1000000 },
            { damage: 1000, delay: 0, targetCount: 3, count: 3, price: 1000000 }

        ],
        getCurrentStats() {
            return this.upgrades[this.level - 1] || this.upgrades[this.upgrades.length - 1];
        },
        getNextStats() {
            return this.upgrades[this.level] || this.upgrades[this.upgrades.length - 1];
        },
        getStats() {
            return this.upgrades;
        },
        get damage() {
            // console.log('satellite dmg : ', this.upgrades[this.level - 1].damage);
            return this.upgrades[this.level - 1].damage
        },
        get delay() {
            return this.upgrades[this.level - 1].delay
        },
        get currentLevel() { return this.level },
        get nextLevel() { return this.level + 1 },
        upgrade() {
            if (this.level < this.upgrades.length) {
                this.level++;
            }
        }
    },
    hail: {
        key: 'hail',
        level: 1,
        icon: 'pictureHail',
        upgrades: [
            { damage: 35, delay: 3000, targetCount: 1, count: 1, price: 600 },
            { damage: 40, delay: 2925, targetCount: 1, count: 2, price: 1200 },
            { damage: 47, delay: 2850, targetCount: 2, count: 2, price: 2400 },
            { damage: 54, delay: 2775, targetCount: 2, count: 2, price: 4800 },
            { damage: 62, delay: 2700, targetCount: 3, count: 2, price: 9600 },
            { damage: 72, delay: 2625, targetCount: 3, count: 2, price: 19200 },
            { damage: 83, delay: 2550, targetCount: 3, count: 3, price: 1000000 },
            { damage: 1000, delay: 2475, targetCount: 3, count: 3, price: 1000000 }

        ],
        getCurrentStats() {
            return this.upgrades[this.level - 1] || this.upgrades[this.upgrades.length - 1];
        },
        getNextStats() {
            return this.upgrades[this.level] || this.upgrades[this.upgrades.length - 1];
        },
        getStats() {
            return this.upgrades;
        },
        get damage() {
            // console.log('hail dmg : ', this.upgrades[this.level - 1].damage);
            return this.upgrades[this.level - 1].damage
        },
        get delay() {
            return this.upgrades[this.level - 1].delay
        },
        get currentLevel() { return this.level },
        get nextLevel() { return this.level + 1 },
        upgrade() {
            if (this.level < this.upgrades.length) {
                this.level++;
            }
        }
    },
    armageddon: {
        key: 'armageddon',
        level: 1,
        icon: 'pictureArmageddon',
        upgrades: [
            { damage: 100000, delay: 60000, targetCount: 1, count: 1, price: 600 },
            { damage: 100000, delay: 58500, targetCount: 1, count: 2, price: 1200 },
            { damage: 100000, delay: 57000, targetCount: 2, count: 2, price: 2400 },
            { damage: 100000, delay: 55000, targetCount: 2, count: 2, price: 4800 },
            { damage: 100000, delay: 53500, targetCount: 3, count: 2, price: 9600 },
            { damage: 100000, delay: 52000, targetCount: 3, count: 2, price: 19200 },
            { damage: 100000, delay: 50500, targetCount: 3, count: 3, price: 1000000 },
            { damage: 100000, delay: 49000, targetCount: 3, count: 3, price: 1000000 }

        ],
        getCurrentStats() {
            return this.upgrades[this.level - 1] || this.upgrades[this.upgrades.length - 1];
        },
        getNextStats() {
            return this.upgrades[this.level] || this.upgrades[this.upgrades.length - 1];
        },
        getStats() {
            return this.upgrades;
        },
        get damage() {

            return this.upgrades[this.level - 1].damage
        },
        get delay() {
            return this.upgrades[this.level - 1].delay
        },
        get currentLevel() { return this.level },
        get nextLevel() { return this.level + 1 },
        upgrade() {
            if (this.level < this.upgrades.length) {
                this.level++;
            }
        }
    },

    get skillRegistryItems() {
        return [this.magic, this.fire, this.light, this.lightning,
        this.fireAura, this.tornado, this.satellite, this.hail,
        this.armageddon
        ]
    }
};
export function setLevelsToSkillRegistrySpells(arr) {
    SkillRegistry.magic.level = arr.magicLevel;
    SkillRegistry.fire.level = arr.fireLevel;
    SkillRegistry.light.level = arr.lightLevel;
    SkillRegistry.lightning.level = arr.lightningLevel;
    SkillRegistry.fireAura.level = arr.fireAuraLevel;
    SkillRegistry.tornado.level = arr.tornadoLevel;
    SkillRegistry.satellite.level = arr.satelliteLevel;
    SkillRegistry.hail.level = arr.hailLevel;
    SkillRegistry.armageddon.level = arr.armageddonLevel;
}


export default SkillRegistry;