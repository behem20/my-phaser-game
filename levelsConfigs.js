const levels = [
    {
        enemiesConfigs: {
            normalType: {
                hp: 45,
                texture: 'enemy_normal_1',
                animation: 'enemy_normal_1',
                speed: 50,
            },
            fastType: {
                hp: 30,
                texture: 'enemyFast_1',
                animation: 'enemy_fast_1',
                speed: 150,
            },
            tankType: {
                hp: 160,
                texture: 'enemy_tank_1',
                animation: 'enemy_tank_1',
                speed: 70,
            },
            bossType: {
                hp: 1550,
                texture: 'enemy_boss_1',
                animation: 'enemy_boss_1',
                speed: 50,
            },
            coefficientStartEnemiesHP: 30,
            enemiesProcentHPIncreasePer10sec: 30,
        },
        levelConfigs: {
            levelDuration: 300,
            backGround: 'background_5',
            expToUpgrade: 10,
            coefficientToUpgradeLevel: 1.3,
            MaxUpgradeLevelSkills: 8,
            dropCoinsAmount: 1,
            levelUpPointsCount: 1
        }, playerConfigs: {
            dmg: 10,
            hp: 10,
            maxHP: 10,
            baseCastInterval: 10000,
        },
        wavesConfigs: {
            delayBetweenWaves: 5000,
            waves: [
                {
                    groups: [

                    ]
                },

                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 500 },
                        // { type: 'fast', count: 50, delayBetweenEnemies: 300 },


                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 500 },
                        // { type: 'fast', count: 50, delayBetweenEnemies: 300 },


                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 500 },
                        // { type: 'fast', count: 50, delayBetweenEnemies: 300 },


                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 10, delayBetweenEnemies: 450 },

                    ]
                },
                {
                    groups: [//5

                        { type: 'normal', count: 10, delayBetweenEnemies: 200 },
                    ]
                },
                {
                    groups: [
                        // { type: 'tank', count: 5, delayBetweenEnemies: 600 },
                        { type: 'normal', count: 20, delayBetweenEnemies: 200 },
                        { type: 'fast', count: 5, delayBetweenEnemies: 30 },
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 20, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 20, delayBetweenEnemies: 150 }
                    ]
                },

                {
                    groups: [//10

                        { type: 'normal', count: 20, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'fast', count: 20, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 20, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'tank', count: 20, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [//15
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 20, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        // { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 20, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },
                        // { type: 'tank', count: 30, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 30, delayBetweenEnemies: 10 },
                        // { type: 'tank', count: 30, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [//20 100 sec

                        { type: 'normal', count: 10, delayBetweenEnemies: 10 },
                        // { type: 'tank', count: 30, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 200 },
                        { type: 'normal', count: 50, delayBetweenEnemies: 150 },
                        // { type: 'tank', count: 100, delayBetweenEnemies: 150 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 3, delayBetweenEnemies: 555 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 100, delayBetweenEnemies: 300 }

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 50, delayBetweenEnemies: 5 }

                    ]
                },

                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 100, delayBetweenEnemies: 1 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 1 },//160 sec
                        { type: 'fast', count: 50, delayBetweenEnemies: 1 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 10, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 50, delayBetweenEnemies: 1 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 50, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 1 }
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 4, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 4, delayBetweenEnemies: 1 }
                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 40, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 40, delayBetweenEnemies: 10 },//200 sec

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 40, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 40, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 40, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 40, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 100, delayBetweenEnemies: 1 },

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 200, delayBetweenEnemies: 1 },//240sec

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 200, delayBetweenEnemies: 1 },

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 200, delayBetweenEnemies: 1 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 40, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 100, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 200, delayBetweenEnemies: 10 },//280

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 300, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 400, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

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
            backGround: 'TempBG_2',
            expToUpgrade: 15,
            coefficientToUpgradeLevel: 1,
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
            coefficientToUpgradeLevel: 1,
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
            coefficientToUpgradeLevel: 1,
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