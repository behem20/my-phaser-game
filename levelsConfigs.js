const originalLevels = [
    //0
    {
        enemiesConfigs: {
            normalType: {
                hp: 75,
                texture: 'enemy_normal_1',
                animation: 'enemy_normal_1',
                speed: 5,
                radius: 24
            },
            fastType: {
                hp: 55,
                texture: 'enemyFast_1',
                animation: 'enemy_fast_1',
                speed: 120,
                radius: 12
            },
            tankType: {
                hp: 280,
                texture: 'enemy_tank_1',
                animation: 'enemy_tank_1',
                speed: 70,
                radius: 32
            },
            bossType: {
                hp: 2630,
                texture: 'enemy_boss_1',
                animation: 'enemy_boss_1',
                speed: 45,
                radius: 120
            },
            coefficientStartEnemiesHP: 30,
            enemiesProcentHPIncreasePer10sec: 20,
        },
        levelConfigs: {
            levelDuration: 60,
            backGround: 'background_1',
            expToUpgrade: 10,
            coefficientToUpgradeLevel: 1.3,
            MaxUpgradeLevelSkills: 8,
            dropCoinsAmount: 1,

            dropCoinsAmountBonus: 0.15,

            levelUpPointsCount: 1,
            addExpAmountPerKillAmount: 1,
            addGoldAndGemsCoefficient: 0.5,
        }, playerConfigs: {
            dmg: 1,
            hp: 10,
            maxHP: 10,
            baseCastInterval: 10000,
            speed: 1250,
        },
        wavesConfigs: {
            delayBetweenWaves: 5000,
            waves: [
                {
                    groups: [
                        // { type: 'boss', count: 2, delayBetweenEnemies: 1 },
                        {type: 'fast', count: 5, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 500000, delayBetweenEnemies: 10 },
                        // { type: 'normal', count: 500000, delayBetweenEnemies: 2 },

                    ]
                },

                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 300 },
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

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },

                {
                    groups: [//10

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'fast', count: 15, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 15, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'tank', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [//15
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 15, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        // { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
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
                    groups: [

                        { type: 'normal', count: 10, delayBetweenEnemies: 10 },
                        // { type: 'tank', count: 30, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 200 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },
                        // { type: 'tank', count: 100, delayBetweenEnemies: 150 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 3, delayBetweenEnemies: 555 } //120 

                    ]
                },

                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 300 }

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [

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
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },//200 sec

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

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
                        { type: 'boss', count: 20, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 100, delayBetweenEnemies: 32 },

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 100, delayBetweenEnemies: 14 },//240sec

                    ]
                },
                {
                    groups: [

                        { type: 'tank', count: 130, delayBetweenEnemies: 23 },


                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 140, delayBetweenEnemies: 20 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 25, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 50, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 60, delayBetweenEnemies: 10 },//280

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 70, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 80, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },

            ]
        }
    },
    //1
    {
        enemiesConfigs: {
            normalType: {
                hp: 105,
                texture: 'enemy_normal_1',
                animation: 'enemy_normal_1',
                speed: 50,
                radius: 24
            },
            fastType: {
                hp: 75,
                texture: 'enemyFast_1',
                animation: 'enemy_fast_1',
                speed: 150,
                radius: 12
            },
            tankType: {
                hp: 370,
                texture: 'enemy_tank_1',
                animation: 'enemy_tank_1',
                speed: 70,
                radius: 32
            },
            bossType: {
                hp: 4000,
                texture: 'enemy_boss_1',
                animation: 'enemy_boss_1',
                speed: 50,
                radius: 120
            },
            coefficientStartEnemiesHP: 30,
            enemiesProcentHPIncreasePer10sec: 30,
        },
        levelConfigs: {
            levelDuration: 300,
            backGround: 'background_2',
            expToUpgrade: 10,
            coefficientToUpgradeLevel: 1.4,
            MaxUpgradeLevelSkills: 8,
            dropCoinsAmount: 3,
            dropCoinsAmountBonus: 0.45,

            levelUpPointsCount: 1,
            addExpAmountPerKillAmount: 1,
            addGoldAndGemsCoefficient: 0.6,
        }, playerConfigs: {
            dmg: 1,
            hp: 10,
            maxHP: 10,
            baseCastInterval: 10000,
            speed: 250,
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

                    ]
                },
                {
                    groups: [

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

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },

                {
                    groups: [//10

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'fast', count: 15, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 15, delayBetweenEnemies: 150 }
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
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 15, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 15, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        // { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
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
                    groups: [

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 10, delayBetweenEnemies: 10 },
                        // { type: 'tank', count: 30, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 200 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },
                        // { type: 'tank', count: 100, delayBetweenEnemies: 150 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 3, delayBetweenEnemies: 555 } //120 

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 300 }

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [

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
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },//200 sec

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

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
                        { type: 'boss', count: 20, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 100, delayBetweenEnemies: 1 },

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 100, delayBetweenEnemies: 30 },//240sec
                        { type: 'boss', count: 20, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 150, delayBetweenEnemies: 30 },//240sec
                        { type: 'boss', count: 20, delayBetweenEnemies: 10 },
                        { type: 'fast', count: 100, delayBetweenEnemies: 25 },

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 200, delayBetweenEnemies: 1 },
                        { type: 'boss', count: 35, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 45, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 50, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 60, delayBetweenEnemies: 10 },//280

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 70, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 80, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },

            ]
        }
    },
    //2
    {
        enemiesConfigs: {
            normalType: {
                hp: 145,
                texture: 'enemy_normal_1',
                animation: 'enemy_normal_1',
                speed: 50,
                radius: 24
            },
            fastType: {
                hp: 105,
                texture: 'enemyFast_1',
                animation: 'enemy_fast_1',
                speed: 150,
                radius: 12
            },
            tankType: {
                hp: 520,
                texture: 'enemy_tank_1',
                animation: 'enemy_tank_1',
                speed: 70,
                radius: 32
            },
            bossType: {
                hp: 5850,
                texture: 'enemy_boss_1',
                animation: 'enemy_boss_1',
                speed: 50,
                radius: 120
            },
            coefficientStartEnemiesHP: 30,
            enemiesProcentHPIncreasePer10sec: 40,
        },
        levelConfigs: {
            levelDuration: 300,
            backGround: 'background_3',
            expToUpgrade: 10,
            coefficientToUpgradeLevel: 1.5,
            MaxUpgradeLevelSkills: 8,
            dropCoinsAmount: 5,

            dropCoinsAmountBonus: 0.75,

            levelUpPointsCount: 1,
            addExpAmountPerKillAmount: 1,
            addGoldAndGemsCoefficient: 0.7,
        }, playerConfigs: {
            dmg: 1,
            hp: 10,
            maxHP: 10,
            baseCastInterval: 10000,
            speed: 250,
        },
        wavesConfigs: {
            delayBetweenWaves: 5000,
            waves: [
                {
                    groups: [
                        // { type: 'boss', count: 4, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 5, delayBetweenEnemies: 500 },
                    ]
                },

                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 300 },
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

                    ]
                },
                {
                    groups: [

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

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },

                {
                    groups: [//10

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'fast', count: 15, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 15, delayBetweenEnemies: 150 }
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
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 15, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 15, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        // { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
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
                    groups: [

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 10, delayBetweenEnemies: 10 },
                        // { type: 'tank', count: 30, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 200 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },
                        // { type: 'tank', count: 100, delayBetweenEnemies: 150 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 3, delayBetweenEnemies: 555 } //120 

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 300 }

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [

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
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },//200 sec

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

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
                        { type: 'boss', count: 20, delayBetweenEnemies: 10 },

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
                        { type: 'boss', count: 25, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 50, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 60, delayBetweenEnemies: 10 },//280

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 70, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 80, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },

            ]
        }
    },
    //3
    {
        enemiesConfigs: {
            normalType: {
                hp: 180,
                texture: 'enemy_normal_1',
                animation: 'enemy_normal_1',
                speed: 50,
                radius: 24
            },
            fastType: {
                hp: 130,
                texture: 'enemyFast_1',
                animation: 'enemy_fast_1',
                speed: 150,
                radius: 12
            },
            tankType: {
                hp: 710,
                texture: 'enemy_tank_1',
                animation: 'enemy_tank_1',
                speed: 70,
                radius: 32
            },
            bossType: {
                hp: 7650,
                texture: 'enemy_boss_1',
                animation: 'enemy_boss_1',
                speed: 50,
                radius: 120
            },
            coefficientStartEnemiesHP: 30,
            enemiesProcentHPIncreasePer10sec: 50,
        },
        levelConfigs: {
            levelDuration: 300,
            backGround: 'background_4',
            expToUpgrade: 10,
            coefficientToUpgradeLevel: 1.6,
            MaxUpgradeLevelSkills: 8,
            dropCoinsAmount: 7,

            dropCoinsAmountBonus: 1.05,

            levelUpPointsCount: 1,
            addExpAmountPerKillAmount: 1,
            addGoldAndGemsCoefficient: 0.8,
        }, playerConfigs: {
            dmg: 1,
            hp: 10,
            maxHP: 10,
            baseCastInterval: 10000,
            speed: 250,
        },
        wavesConfigs: {
            delayBetweenWaves: 5000,
            waves: [
                {
                    groups: [
                        // { type: 'boss', count: 4, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 5, delayBetweenEnemies: 500 },
                    ]
                },

                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 300 },
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

                    ]
                },
                {
                    groups: [

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

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },

                {
                    groups: [//10

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'fast', count: 15, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 15, delayBetweenEnemies: 150 }
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
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 15, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 15, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        // { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
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
                    groups: [

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 10, delayBetweenEnemies: 10 },
                        // { type: 'tank', count: 30, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 200 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },
                        // { type: 'tank', count: 100, delayBetweenEnemies: 150 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 3, delayBetweenEnemies: 555 } //120 

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 300 }

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [

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
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },//200 sec

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

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
                        { type: 'boss', count: 20, delayBetweenEnemies: 10 },

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
                        { type: 'boss', count: 25, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 50, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 60, delayBetweenEnemies: 10 },//280

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 70, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 80, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },

            ]
        }
    },
    //4
    {
        enemiesConfigs: {
            normalType: {
                hp: 220,
                texture: 'enemy_normal_1',
                animation: 'enemy_normal_1',
                speed: 50,
                radius: 24
            },
            fastType: {
                hp: 160,
                texture: 'enemyFast_1',
                animation: 'enemy_fast_1',
                speed: 150,
                radius: 12
            },
            tankType: {
                hp: 880,
                texture: 'enemy_tank_1',
                animation: 'enemy_tank_1',
                speed: 70,
                radius: 32
            },
            bossType: {
                hp: 9100,
                texture: 'enemy_boss_1',
                animation: 'enemy_boss_1',
                speed: 50,
                radius: 120
            },
            coefficientStartEnemiesHP: 30,
            enemiesProcentHPIncreasePer10sec: 60,
        },
        levelConfigs: {
            levelDuration: 300,
            backGround: 'background_5',
            expToUpgrade: 10,
            coefficientToUpgradeLevel: 1.7,
            MaxUpgradeLevelSkills: 8,
            dropCoinsAmount: 9,
            dropCoinsAmountBonus: 1.35,
            levelUpPointsCount: 1,
            addExpAmountPerKillAmount: 1,
            addGoldAndGemsCoefficient: 0.9,
        }, playerConfigs: {
            dmg: 1,
            hp: 10,
            maxHP: 10,
            baseCastInterval: 10000,
            speed: 250,
        },
        wavesConfigs: {
            delayBetweenWaves: 5000,
            waves: [
                {
                    groups: [
                        // { type: 'boss', count: 4, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 5, delayBetweenEnemies: 500 },
                    ]
                },

                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 300 },
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

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },

                {
                    groups: [//10

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'fast', count: 15, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 15, delayBetweenEnemies: 150 }
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
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 15, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 15, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        // { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
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
                    groups: [

                    ]
                },

                {
                    groups: [

                        { type: 'normal', count: 10, delayBetweenEnemies: 10 },
                        // { type: 'tank', count: 30, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 200 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },
                        // { type: 'tank', count: 100, delayBetweenEnemies: 150 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 3, delayBetweenEnemies: 555 } //120 

                    ]
                },
                {
                    groups: [

                    ]
                },

                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 300 }

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [

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
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },//200 sec

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

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
                        { type: 'boss', count: 20, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 100, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 150, delayBetweenEnemies: 10 },//240sec

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 160, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 170, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 25, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 50, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 60, delayBetweenEnemies: 10 },//280

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 70, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 80, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },

            ]
        }
    },
    //5
    {
        enemiesConfigs: {
            normalType: {
                hp: 270,
                texture: 'enemy_normal_1',
                animation: 'enemy_normal_1',
                speed: 50,
                radius: 24
            },
            fastType: {
                hp: 200,
                texture: 'enemyFast_1',
                animation: 'enemy_fast_1',
                speed: 150,
                radius: 12
            },
            tankType: {
                hp: 1100,
                texture: 'enemy_tank_1',
                animation: 'enemy_tank_1',
                speed: 70,
                radius: 32
            },
            bossType: {
                hp: 11000,
                texture: 'enemy_boss_1',
                animation: 'enemy_boss_1',
                speed: 50,
                radius: 120
            },
            coefficientStartEnemiesHP: 30,
            enemiesProcentHPIncreasePer10sec: 70,
        },
        levelConfigs: {
            levelDuration: 300,
            backGround: 'background_6',
            expToUpgrade: 10,
            coefficientToUpgradeLevel: 1.8,
            MaxUpgradeLevelSkills: 8,
            dropCoinsAmount: 11,
            dropCoinsAmountBonus: 1.65,
            levelUpPointsCount: 1,
            addExpAmountPerKillAmount: 1,
            addGoldAndGemsCoefficient: 1,
        }, playerConfigs: {
            dmg: 1,
            hp: 10,
            maxHP: 10,
            baseCastInterval: 10000,
            speed: 250,
        },
        wavesConfigs: {
            delayBetweenWaves: 5000,
            waves: [
                {
                    groups: [
                        // { type: 'boss', count: 4, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 5, delayBetweenEnemies: 500 },
                    ]
                },

                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 300 },
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

                    ]
                },
                {
                    groups: [

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

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },

                {
                    groups: [//10

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'fast', count: 15, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 15, delayBetweenEnemies: 150 }
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
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 15, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 15, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        // { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
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
                    groups: [

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 10, delayBetweenEnemies: 10 },
                        // { type: 'tank', count: 30, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 200 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },
                        // { type: 'tank', count: 100, delayBetweenEnemies: 150 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 3, delayBetweenEnemies: 555 } //120 

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 300 }

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [

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
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },//200 sec

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

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
                        { type: 'boss', count: 20, delayBetweenEnemies: 10 },

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
                        { type: 'boss', count: 25, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 50, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 60, delayBetweenEnemies: 10 },//280

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 70, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 80, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },

            ]
        }
    },
    // 6
    {
        enemiesConfigs: {
            normalType: {
                hp: 100,
                texture: 'enemy_normal_1',
                animation: 'enemy_normal_1',
                speed: 50,
                radius: 24
            },
            fastType: {
                hp: 140,
                texture: 'enemyFast_1',
                animation: 'enemy_fast_1',
                speed: 150,
                radius: 12
            },
            tankType: {
                hp: 720,
                texture: 'enemy_tank_1',
                animation: 'enemy_tank_1',
                speed: 70,
                radius: 32
            },
            bossType: {
                hp: 7000,
                texture: 'enemy_boss_1',
                animation: 'enemy_boss_1',
                speed: 50,
                radius: 120
            },
            coefficientStartEnemiesHP: 30,
            enemiesProcentHPIncreasePer10sec: 70,
        },
        levelConfigs: {
            levelDuration: 1200,
            backGround: 'background_7',
            expToUpgrade: 10,
            coefficientToUpgradeLevel: 1.8,
            MaxUpgradeLevelSkills: 8,
            dropCoinsAmount: 6,
            dropCoinsAmountBonus: 0.9,
            levelUpPointsCount: 1,
            addExpAmountPerKillAmount: 1,
            addGoldAndGemsCoefficient: 1,
        }, playerConfigs: {
            dmg: 1,
            hp: 10,
            maxHP: 10,
            baseCastInterval: 10000,
            speed: 250,
        },
        wavesConfigs: {
            delayBetweenWaves: 5000,
            waves: [
                {
                    groups: [
                        // { type: 'boss', count: 4, delayBetweenEnemies: 500 },
                        { type: 'normal', count: 5, delayBetweenEnemies: 500 },
                    ]
                },

                {
                    groups: [
                        { type: 'normal', count: 5, delayBetweenEnemies: 300 },
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

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },

                {
                    groups: [//10

                        { type: 'normal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'fast', count: 15, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 15, delayBetweenEnemies: 150 }
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
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 15, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 15, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        // { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
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
                    groups: [

                    ]
                },

                {
                    groups: [

                        { type: 'normal', count: 10, delayBetweenEnemies: 10 },
                        // { type: 'tank', count: 30, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 200 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },
                        // { type: 'tank', count: 100, delayBetweenEnemies: 150 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 3, delayBetweenEnemies: 555 } //120 

                    ]
                },
                {
                    groups: [

                    ]
                },

                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 300 }

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 30, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [

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
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },//200 sec

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 10, delayBetweenEnemies: 10 },

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
                        { type: 'boss', count: 20, delayBetweenEnemies: 10 },

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
                        { type: 'boss', count: 25, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 50, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 60, delayBetweenEnemies: 10 },//280

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 70, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 80, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },

            ]
        }
    },

]
export default originalLevels

