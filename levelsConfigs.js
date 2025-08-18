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
            enemiesProcentHPIncreasePer10sec: 20,
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
            enemiesProcentHPIncreasePer10sec: 40,
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
            enemiesProcentHPIncreasePer10sec: 50,
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
            enemiesProcentHPIncreasePer10sec: 60,
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
            enemiesProcentHPIncreasePer10sec: 70,
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

]

export default levels;