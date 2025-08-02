const levels = [
    {
        enemiesConfigs: {
            normalType: {
                hp: 10,
                texture: 'enemy_normal_1',
                animation: 'enemy_normal_1',
                speed: 50,
            },
            fastType: {
                hp: 5,
                texture: 'enemyFast_1',
                animation: 'enemy_fast_1',
                speed: 120,
            },
            tankType: {
                hp: 30,
                texture: 'enemy_tank_1',
                animation: 'enemy_tank_1',
                speed: 30,
            },
            bossType: {
                hp: 1550,
                texture: 'enemy_boss_1',
                animation: 'enemy_boss_1',
                speed: 60,
            },
            coefficientStartEnemiesHP: 11,
            enemiesProcentHPIncreasePer10sec: 10,
        },
        levelConfigs: {
            levelDuration: 180,
            backGround: 'background_2',
            expToUpgrade: 10,
            upgradeLevel: 1,
            MaxUpgradeLevelSkills: 8,
            dropCoinsAmount: 3
        }, playerConfigs: {
            dmg: 10,
            hp: 10,
            maxHP: 10,
            baseCastInterval: 10000,
        },
        wavesConfigs: {
            delayBetweenWaves: 10000,
            waves: [

                {
                    groups: [
                        { type: 'normal', count: 50, delayBetweenEnemies: 1300 },
                        // { type: 'fast', count: 20, delayBetweenEnemies: 1300 },
                        // { type: 'boss', count: 51, delayBetweenEnemies: 1200 },
                        // { type: 'tank', count: 200, delayBetweenEnemies: 1500 },

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 1000 },
                        { type: 'fast', count: 200, delayBetweenEnemies: 100 },
                        { type: 'boss', count: 5, delayBetweenEnemies: 100 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 1000 },
                        { type: 'fast', count: 200, delayBetweenEnemies: 100 },
                        { type: 'boss', count: 5, delayBetweenEnemies: 100 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 5, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 5, delayBetweenEnemies: 450 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 650 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 55, delayBetweenEnemies: 2500 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 1450 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 10, delayBetweenEnemies: 2000 },
                        { type: 'fast', count: 20, delayBetweenEnemies: 400 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 10, delayBetweenEnemies: 2000 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 1500 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 2000 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 1500 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 10, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 50, delayBetweenEnemies: 1500 }
                    ]
                }, {
                    groups: [
                        { type: 'tank', count: 5, delayBetweenEnemies: 200 },
                        { type: 'fast', count: 20, delayBetweenEnemies: 300 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 2000 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 1050 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 600 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 550 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 50, delayBetweenEnemies: 1050 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 300 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 150 }
                    ]
                },
            ]
        }
    },
    {
        enemiesConfigs: {
            normalType: {
                hp: 30,
                texture: 'enemy',
                speed: 50,
            },
            fastType: {
                hp: 50,
                texture: 'enemyFast',
                speed: 90,
            },
            tankType: {
                hp: 90,
                texture: 'enemyTank',
                speed: 30,
            },
            coefficientStartEnemiesHP: 11,
            enemiesProcentHPIncreasePer10sec: 12,
        },
        levelConfigs: {
            levelDuration: 240,
            backGround: 'background_1',
            expToUpgrade: 15,
            upgradeLevel: 1,
            MaxUpgradeLevelSkills: 7,
            dropCoinsAmount: 17
        }, playerConfigs: {
            dmg: 10,
            hp: 10,
            maxHP: 10
        },
        wavesConfigs: {
            delayBetweenWaves: 10000,
            waves: [
                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 1000 },
                        { type: 'fast', count: 2, delayBetweenEnemies: 400 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 5, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 5, delayBetweenEnemies: 450 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 650 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 55, delayBetweenEnemies: 2500 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 1450 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 10, delayBetweenEnemies: 2000 },
                        { type: 'fast', count: 20, delayBetweenEnemies: 400 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 10, delayBetweenEnemies: 2000 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 1500 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 2000 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 1500 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 10, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 50, delayBetweenEnemies: 1500 }
                    ]
                }, {
                    groups: [
                        { type: 'tank', count: 5, delayBetweenEnemies: 200 },
                        { type: 'fast', count: 20, delayBetweenEnemies: 300 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 2000 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 1050 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 600 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 550 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 50, delayBetweenEnemies: 1050 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 300 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 50, delayBetweenEnemies: 1050 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 300 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 50, delayBetweenEnemies: 1050 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 300 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 150 }
                    ]
                }, {
                    groups: [
                        { type: 'normal', count: 130, delayBetweenEnemies: 300 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 150 }
                    ]
                },
            ]
        }
    },
    {
        enemiesConfigs: {
            normalType: {
                hp: 45,
                texture: 'enemy_3',
                speed: 50,
            },
            fastType: {
                hp: 75,
                texture: 'enemyFast',
                speed: 90,
            },
            tankType: {
                hp: 135,
                texture: 'enemyTank',
                speed: 30,
            },
            coefficientStartEnemiesHP: 11,
            enemiesProcentHPIncreasePer10sec: 14,
        },
        levelConfigs: {
            levelDuration: 240,
            backGround: 'background_0',
            expToUpgrade: 25,
            upgradeLevel: 1,
            MaxUpgradeLevelSkills: 9,
            dropCoinsAmount: 71
        }, playerConfigs: {
            dmg: 10,
            hp: 10,
            maxHP: 10
        },
        wavesConfigs: {
            delayBetweenWaves: 10000,
            waves: [
                {
                    groups: [
                        { type: 'normal', count: 150, delayBetweenEnemies: 500 },
                        { type: 'fast', count: 20, delayBetweenEnemies: 400 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 350, delayBetweenEnemies: 1000 },
                        { type: 'fast', count: 20, delayBetweenEnemies: 400 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 150, delayBetweenEnemies: 500 },
                        { type: 'fast', count: 20, delayBetweenEnemies: 400 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 350, delayBetweenEnemies: 1000 },
                        { type: 'fast', count: 20, delayBetweenEnemies: 400 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 50, delayBetweenEnemies: 1000 },
                        { type: 'fast', count: 20, delayBetweenEnemies: 400 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 5, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 5, delayBetweenEnemies: 450 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 650 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 1000 },
                        { type: 'fast', count: 2, delayBetweenEnemies: 400 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 5, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 15, delayBetweenEnemies: 450 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 650 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 55, delayBetweenEnemies: 2500 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 1450 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 10, delayBetweenEnemies: 2000 },
                        { type: 'fast', count: 20, delayBetweenEnemies: 400 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 10, delayBetweenEnemies: 2000 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 1500 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 2000 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 1500 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 10, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 50, delayBetweenEnemies: 1500 }
                    ]
                }, {
                    groups: [
                        { type: 'tank', count: 5, delayBetweenEnemies: 200 },
                        { type: 'fast', count: 20, delayBetweenEnemies: 300 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 2000 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 1050 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 600 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 550 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 50, delayBetweenEnemies: 1050 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 300 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 50, delayBetweenEnemies: 1050 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 300 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 50, delayBetweenEnemies: 1050 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 300 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 150 }
                    ]
                }, {
                    groups: [
                        { type: 'normal', count: 130, delayBetweenEnemies: 300 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 150 }
                    ]
                },
            ]
        }
    },
    {
        enemiesConfigs: {
            normalType: {
                hp: 75,
                texture: 'enemy_3',
                speed: 50,
            },
            fastType: {
                hp: 135,
                texture: 'enemyFast',
                speed: 90,
            },
            tankType: {
                hp: 235,
                texture: 'enemyTank',
                speed: 30,
            },
            coefficientStartEnemiesHP: 11,
            enemiesProcentHPIncreasePer10sec: 19,
        },
        levelConfigs: {
            levelDuration: 240,
            backGround: 'background_4',
            expToUpgrade: 25,
            upgradeLevel: 1,
            MaxUpgradeLevelSkills: 11,
            dropCoinsAmount: 340
        }, playerConfigs: {
            dmg: 10,
            hp: 10,
            maxHP: 10
        },
        wavesConfigs: {
            delayBetweenWaves: 10000,
            waves: [
                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 1000 },
                        { type: 'fast', count: 2, delayBetweenEnemies: 400 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 5, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 5, delayBetweenEnemies: 450 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 650 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 1000 },
                        { type: 'fast', count: 2, delayBetweenEnemies: 400 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 5, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 15, delayBetweenEnemies: 450 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 650 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 55, delayBetweenEnemies: 2500 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 1450 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 10, delayBetweenEnemies: 2000 },
                        { type: 'fast', count: 20, delayBetweenEnemies: 400 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 10, delayBetweenEnemies: 2000 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 1500 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 2000 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 1500 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 10, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 50, delayBetweenEnemies: 1500 }
                    ]
                }, {
                    groups: [
                        { type: 'tank', count: 5, delayBetweenEnemies: 200 },
                        { type: 'fast', count: 20, delayBetweenEnemies: 300 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 2000 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 1050 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 600 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 550 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 50, delayBetweenEnemies: 1050 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 300 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 50, delayBetweenEnemies: 1050 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 300 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 30, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 50, delayBetweenEnemies: 1050 }
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 300 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 150 }
                    ]
                }, {
                    groups: [
                        { type: 'normal', count: 130, delayBetweenEnemies: 300 },
                        { type: 'fast', count: 70, delayBetweenEnemies: 150 }
                    ]
                },
            ]
        }
    },

]

export default levels;