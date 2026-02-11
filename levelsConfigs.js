const originalLevels = [
    //0
    {
        enemiesConfigs: {
            normalType: {
                hp: 75,//75
                texture: 'enemy_normal_1',
                animation: 'enemy_normal_1',
                speed: 50,//50
                radius: 24
            },
            fastType: {
                hp: 55,
                texture: 'enemyFast_1',
                animation: 'enemy_fast_1',
                speed: 120,//120
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
                hp: 260030,//2630
                texture: 'enemy_boss_1',
                animation: 'enemy_boss_1',
                speed: 1,//45
                radius: 120
            },
            midNormalType: {
                hp: 150,
                texture: 'enemy_midNormal_1',
                animation: 'enemy_midNormal_1',
                speed: 60,
                radius: 24
            },
            midFastType: {
                hp: 110,
                texture: 'enemy_midFast_1',
                animation: 'enemy_midFast_1',
                speed: 130,
                radius: 12
            },
            midTankType: {
                hp: 560,
                texture: 'enemy_midTank_1',
                animation: 'enemy_midTank_1',
                speed: 80,
                radius: 32
            },
            midBossType: {
                hp: 5260,
                texture: 'enemy_midBoss_1',
                animation: 'enemy_midBoss_1',
                speed: 50,
                radius: 120
            },
            coefficientStartEnemiesHP: 30,
            enemiesProcentHPIncreasePer10sec: 20,
        },
        levelConfigs: {
            levelDuration: 300,
            backGround: 'background_1',
            expToUpgrade: 10,
            coefficientToUpgradeLevel: 1.2,
            MaxUpgradeLevelSkills: 8,
            dropCoinsAmount: 1,

            dropCoinsAmountBonus: 0.15,

            levelUpPointsCount: 1,
            addExpAmountPerKillAmount: 1,
            addGoldAndGemsCoefficient: 0.5,
        },
        playerConfigs: {
            dmg: 1,
            hp: 10,
            maxHP: 10,
            baseCastInterval: 10000,
            speed: 250,//250
        },
        wavesConfigs: {
            delayBetweenWaves: 5000,
            delayBetweenWaves:50000000,
            waves: [
                {
                    groups: [
                        // { type: 'boss', count: 3, delayBetweenEnemies: 10 },
                        { type: 'normal', count: 150000000, delayBetweenEnemies: 1     },
                        // { type: 'midTank', count: 5, delayBetweenEnemies: 50 },
                        // { type: 'fast', count: 50, delayBetweenEnemies: 40 },
                        // { type: 'normal', count: 10, delayBetweenEnemies: 20 },

                    ]
                },

                {
                    groups: [
                        { type: 'normal', count: 15, delayBetweenEnemies: 300 },
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
                        { type: 'normal', count: 25, delayBetweenEnemies: 500 },
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
                        { type: 'normal', count: 50, delayBetweenEnemies: 500 },
                        // { type: 'fast', count: 50, delayBetweenEnemies: 300 },
                    ]
                },
                {//30
                    groups: [
                        // { type: 'boss', count: 1, delayBetweenEnemies: 500 },
                        { type: 'fast', count: 10, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 500 },
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 10, delayBetweenEnemies: 450 },
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 20, delayBetweenEnemies: 200 },
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
                        { type: 'midNormal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 }
                    ]
                },

                {
                    groups: [//60

                        { type: 'normal', count: 200, delayBetweenEnemies: 1 },
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
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 150, delayBetweenEnemies: 10 }
                    ]
                },
                {//1:30
                    groups: [
                        { type: 'normal', count: 50, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 10, delayBetweenEnemies: 30 },
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
                        { type: 'midTank', count: 30, delayBetweenEnemies: 400 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 200 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },

                    ]
                },
                {//2:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 40, delayBetweenEnemies: 300 }

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 20, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 100, delayBetweenEnemies: 1 }
                    ]
                },


                {
                    groups: [
                        { type: 'midFast', count: 10, delayBetweenEnemies: 45 }

                    ]
                },
                {//2:30
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 100, delayBetweenEnemies: 1 }

                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 100, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 45 }

                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 200, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 45 }

                    ]
                },
                {//3:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 20, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 25, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 20, delayBetweenEnemies: 1 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 40, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 1 }
                    ]
                },
                {//3:30
                    groups: [
                        { type: 'midBoss', count: 3, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 1000 },//200 sec

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 1000 }
                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {//4:00
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'midNormal', count: 100, delayBetweenEnemies: 30 },
                        { type: 'midNormal', count: 100, delayBetweenEnemies: 330 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 100, delayBetweenEnemies: 32 },
                    ]
                },
                {
                    groups: [
                        { type: 'midTank', count: 50, delayBetweenEnemies: 14 },//240sec
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 60, delayBetweenEnemies: 23 },
                    ]
                },
                {//4:30
                    groups: [
                        { type: 'midBoss', count: 10, delayBetweenEnemies: 10 },

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
                        { type: 'midBoss', count: 25, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 35, delayBetweenEnemies: 10 },
                    ]
                },
                {//5:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
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
                speed: 120,
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
                speed: 45,
                radius: 120
            },
            midNormalType: {
                hp: 210,
                texture: 'enemy_midNormal_1',
                animation: 'enemy_midNormal_1',
                speed: 60,
                radius: 24
            },
            midFastType: {
                hp: 150,
                texture: 'enemy_midFast_1',
                animation: 'enemy_midFast_1',
                speed: 130,
                radius: 12
            },
            midTankType: {
                hp: 740,
                texture: 'enemy_midTank_1',
                animation: 'enemy_midTank_1',
                speed: 80,
                radius: 32
            },
            midBossType: {
                hp: 8000,
                texture: 'enemy_midBoss_1',
                animation: 'enemy_midBoss_1',
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
            dropCoinsAmount: 2,
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
                        // { type: 'boss', count: 2, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 15, delayBetweenEnemies: 1 },
                        // { type: 'midNormal', count: 5, delayBetweenEnemies: 50 },
                        // { type: 'fast', count: 500000, delayBetweenEnemies: 40 },
                        // { type: 'normal', count: 500000, delayBetweenEnemies: 2 },

                    ]
                },

                {
                    groups: [
                        { type: 'normal', count: 15, delayBetweenEnemies: 300 },
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
                        { type: 'normal', count: 25, delayBetweenEnemies: 500 },
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
                        { type: 'normal', count: 50, delayBetweenEnemies: 500 },
                        // { type: 'fast', count: 50, delayBetweenEnemies: 300 },
                    ]
                },
                {//30
                    groups: [
                        // { type: 'boss', count: 1, delayBetweenEnemies: 500 },
                        { type: 'fast', count: 10, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 500 },
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 10, delayBetweenEnemies: 450 },
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 20, delayBetweenEnemies: 200 },
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
                        { type: 'midNormal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 }
                    ]
                },

                {
                    groups: [//60

                        { type: 'normal', count: 200, delayBetweenEnemies: 1 },
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
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 150, delayBetweenEnemies: 10 }
                    ]
                },
                {//1:30
                    groups: [
                        { type: 'normal', count: 50, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 10, delayBetweenEnemies: 30 },
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
                        { type: 'midTank', count: 30, delayBetweenEnemies: 400 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 200 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },

                    ]
                },
                {//2:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 40, delayBetweenEnemies: 300 }

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 20, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 100, delayBetweenEnemies: 1 }
                    ]
                },


                {
                    groups: [
                        { type: 'midFast', count: 10, delayBetweenEnemies: 45 }

                    ]
                },
                {//2:30
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 100, delayBetweenEnemies: 1 }

                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 100, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 45 }

                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 200, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 45 }

                    ]
                },
                {//3:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 20, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 25, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 20, delayBetweenEnemies: 1 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 40, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 1 }
                    ]
                },
                {//3:30
                    groups: [
                        { type: 'midBoss', count: 3, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 1000 },//200 sec

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 1000 }
                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {//4:00
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'midNormal', count: 100, delayBetweenEnemies: 30 },
                        { type: 'midNormal', count: 100, delayBetweenEnemies: 330 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 100, delayBetweenEnemies: 32 },
                    ]
                },
                {
                    groups: [
                        { type: 'midTank', count: 50, delayBetweenEnemies: 14 },//240sec
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 60, delayBetweenEnemies: 23 },
                    ]
                },
                {//4:30
                    groups: [
                        { type: 'midBoss', count: 10, delayBetweenEnemies: 10 },

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
                        { type: 'midBoss', count: 25, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 35, delayBetweenEnemies: 10 },
                    ]
                },
                {//5:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
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
                speed: 120,
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
            midNormalType: {
                hp: 290,
                texture: 'enemy_midNormal_1',
                animation: 'enemy_midNormal_1',
                speed: 60,
                radius: 24
            },
            midFastType: {
                hp: 210,
                texture: 'enemy_midFast_1',
                animation: 'enemy_midFast_1',
                speed: 130,
                radius: 12
            },
            midTankType: {
                hp: 1040,
                texture: 'enemy_midTank_1',
                animation: 'enemy_midTank_1',
                speed: 80,
                radius: 32
            },
            midBossType: {
                hp: 9000,
                texture: 'enemy_midBoss_1',
                animation: 'enemy_midBoss_1',
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
            dropCoinsAmount: 3,

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
                        // { type: 'boss', count: 2, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 15, delayBetweenEnemies: 1 },
                        // { type: 'midNormal', count: 5, delayBetweenEnemies: 50 },
                        // { type: 'fast', count: 500000, delayBetweenEnemies: 40 },
                        // { type: 'normal', count: 500000, delayBetweenEnemies: 2 },

                    ]
                },

                {
                    groups: [
                        { type: 'normal', count: 15, delayBetweenEnemies: 300 },
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
                        { type: 'normal', count: 25, delayBetweenEnemies: 500 },
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
                        { type: 'normal', count: 50, delayBetweenEnemies: 500 },
                        // { type: 'fast', count: 50, delayBetweenEnemies: 300 },
                    ]
                },
                {//30
                    groups: [
                        // { type: 'boss', count: 1, delayBetweenEnemies: 500 },
                        { type: 'fast', count: 10, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 500 },
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 10, delayBetweenEnemies: 450 },
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 20, delayBetweenEnemies: 200 },
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
                        { type: 'midNormal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 }
                    ]
                },

                {
                    groups: [//60

                        { type: 'normal', count: 200, delayBetweenEnemies: 1 },
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
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 150, delayBetweenEnemies: 10 }
                    ]
                },
                {//1:30
                    groups: [
                        { type: 'normal', count: 50, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 10, delayBetweenEnemies: 30 },
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
                        { type: 'midTank', count: 30, delayBetweenEnemies: 400 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 200 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },

                    ]
                },
                {//2:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 40, delayBetweenEnemies: 300 }

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 20, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 100, delayBetweenEnemies: 1 }
                    ]
                },


                {
                    groups: [
                        { type: 'midFast', count: 10, delayBetweenEnemies: 45 }

                    ]
                },
                {//2:30
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 100, delayBetweenEnemies: 1 }

                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 100, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 45 }

                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 200, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 45 }

                    ]
                },
                {//3:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 20, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 25, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 20, delayBetweenEnemies: 1 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 40, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 1 }
                    ]
                },
                {//3:30
                    groups: [
                        { type: 'midBoss', count: 3, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 1000 },//200 sec

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 1000 }
                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {//4:00
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'midNormal', count: 100, delayBetweenEnemies: 30 },
                        { type: 'midNormal', count: 100, delayBetweenEnemies: 330 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 100, delayBetweenEnemies: 32 },
                    ]
                },
                {
                    groups: [
                        { type: 'midTank', count: 50, delayBetweenEnemies: 14 },//240sec
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 60, delayBetweenEnemies: 23 },
                    ]
                },
                {//4:30
                    groups: [
                        { type: 'midBoss', count: 10, delayBetweenEnemies: 10 },

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
                        { type: 'midBoss', count: 25, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 35, delayBetweenEnemies: 10 },
                    ]
                },
                {//5:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
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
                speed: 120,
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
                speed: 45,
                radius: 120
            },
            midNormalType: {
                hp: 360,
                texture: 'enemy_midNormal_1',
                animation: 'enemy_midNormal_1',
                speed: 60,
                radius: 24
            },
            midFastType: {
                hp: 260,
                texture: 'enemy_midFast_1',
                animation: 'enemy_midFast_1',
                speed: 130,
                radius: 12
            },
            midTankType: {
                hp: 1420,
                texture: 'enemy_midTank_1',
                animation: 'enemy_midTank_1',
                speed: 80,
                radius: 32
            },
            midBossType: {
                hp: 12000,
                texture: 'enemy_midBoss_1',
                animation: 'enemy_midBoss_1',
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
            dropCoinsAmount: 4,

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
                        // { type: 'boss', count: 2, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 15, delayBetweenEnemies: 1 },
                        // { type: 'midNormal', count: 5, delayBetweenEnemies: 50 },
                        // { type: 'fast', count: 500000, delayBetweenEnemies: 40 },
                        // { type: 'normal', count: 500000, delayBetweenEnemies: 2 },

                    ]
                },

                {
                    groups: [
                        { type: 'normal', count: 15, delayBetweenEnemies: 300 },
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
                        { type: 'normal', count: 25, delayBetweenEnemies: 500 },
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
                        { type: 'normal', count: 50, delayBetweenEnemies: 500 },
                        // { type: 'fast', count: 50, delayBetweenEnemies: 300 },
                    ]
                },
                {//30
                    groups: [
                        // { type: 'boss', count: 1, delayBetweenEnemies: 500 },
                        { type: 'fast', count: 10, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 500 },
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 10, delayBetweenEnemies: 450 },
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 20, delayBetweenEnemies: 200 },
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
                        { type: 'midNormal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 }
                    ]
                },

                {
                    groups: [//60

                        { type: 'normal', count: 200, delayBetweenEnemies: 1 },
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
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 150, delayBetweenEnemies: 10 }
                    ]
                },
                {//1:30
                    groups: [
                        { type: 'normal', count: 50, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 10, delayBetweenEnemies: 30 },
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
                        { type: 'midTank', count: 30, delayBetweenEnemies: 400 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 200 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },

                    ]
                },
                {//2:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 40, delayBetweenEnemies: 300 }

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 20, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 100, delayBetweenEnemies: 1 }
                    ]
                },


                {
                    groups: [
                        { type: 'midFast', count: 10, delayBetweenEnemies: 45 }

                    ]
                },
                {//2:30
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 100, delayBetweenEnemies: 1 }

                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 100, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 45 }

                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 200, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 45 }

                    ]
                },
                {//3:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 20, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 25, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 20, delayBetweenEnemies: 1 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 40, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 1 }
                    ]
                },
                {//3:30
                    groups: [
                        { type: 'midBoss', count: 3, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 1000 },//200 sec

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 1000 }
                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {//4:00
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'midNormal', count: 100, delayBetweenEnemies: 30 },
                        { type: 'midNormal', count: 100, delayBetweenEnemies: 330 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 100, delayBetweenEnemies: 32 },
                    ]
                },
                {
                    groups: [
                        { type: 'midTank', count: 50, delayBetweenEnemies: 14 },//240sec
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 60, delayBetweenEnemies: 23 },
                    ]
                },
                {//4:30
                    groups: [
                        { type: 'midBoss', count: 10, delayBetweenEnemies: 10 },

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
                        { type: 'midBoss', count: 25, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 35, delayBetweenEnemies: 10 },
                    ]
                },
                {//5:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
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
                speed: 120,
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
                speed: 45,
                radius: 120
            },
            midNormalType: {
                hp: 440,
                texture: 'enemy_midNormal_1',
                animation: 'enemy_midNormal_1',
                speed: 60,
                radius: 24
            },
            midFastType: {
                hp: 320,
                texture: 'enemy_midFast_1',
                animation: 'enemy_midFast_1',
                speed: 130,
                radius: 12
            },
            midTankType: {
                hp: 1760,
                texture: 'enemy_midTank_1',
                animation: 'enemy_midTank_1',
                speed: 80,
                radius: 32
            },
            midBossType: {
                hp: 14000,
                texture: 'enemy_midBoss_1',
                animation: 'enemy_midBoss_1',
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
            dropCoinsAmount: 5,
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
                        // { type: 'boss', count: 2, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 15, delayBetweenEnemies: 1 },
                        // { type: 'midNormal', count: 5, delayBetweenEnemies: 50 },
                        // { type: 'fast', count: 500000, delayBetweenEnemies: 40 },
                        // { type: 'normal', count: 500000, delayBetweenEnemies: 2 },

                    ]
                },

                {
                    groups: [
                        { type: 'normal', count: 15, delayBetweenEnemies: 300 },
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
                        { type: 'normal', count: 25, delayBetweenEnemies: 500 },
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
                        { type: 'normal', count: 50, delayBetweenEnemies: 500 },
                        // { type: 'fast', count: 50, delayBetweenEnemies: 300 },
                    ]
                },
                {//30
                    groups: [
                        // { type: 'boss', count: 1, delayBetweenEnemies: 500 },
                        { type: 'fast', count: 10, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 500 },
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 10, delayBetweenEnemies: 450 },
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 20, delayBetweenEnemies: 200 },
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
                        { type: 'midNormal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 }
                    ]
                },

                {
                    groups: [//60

                        { type: 'normal', count: 200, delayBetweenEnemies: 1 },
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
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 150, delayBetweenEnemies: 10 }
                    ]
                },
                {//1:30
                    groups: [
                        { type: 'normal', count: 50, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 10, delayBetweenEnemies: 30 },
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
                        { type: 'midTank', count: 30, delayBetweenEnemies: 400 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 200 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },

                    ]
                },
                {//2:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 40, delayBetweenEnemies: 300 }

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 20, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 100, delayBetweenEnemies: 1 }
                    ]
                },


                {
                    groups: [
                        { type: 'midFast', count: 10, delayBetweenEnemies: 45 }

                    ]
                },
                {//2:30
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 100, delayBetweenEnemies: 1 }

                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 100, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 45 }

                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 200, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 45 }

                    ]
                },
                {//3:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 20, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 25, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 20, delayBetweenEnemies: 1 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 40, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 1 }
                    ]
                },
                {//3:30
                    groups: [
                        { type: 'midBoss', count: 3, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 1000 },//200 sec

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 1000 }
                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {//4:00
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'midNormal', count: 100, delayBetweenEnemies: 30 },
                        { type: 'midNormal', count: 100, delayBetweenEnemies: 330 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 100, delayBetweenEnemies: 32 },
                    ]
                },
                {
                    groups: [
                        { type: 'midTank', count: 50, delayBetweenEnemies: 14 },//240sec
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 60, delayBetweenEnemies: 23 },
                    ]
                },
                {//4:30
                    groups: [
                        { type: 'midBoss', count: 10, delayBetweenEnemies: 10 },

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
                        { type: 'midBoss', count: 25, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 35, delayBetweenEnemies: 10 },
                    ]
                },
                {//5:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
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
                speed: 120,
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
                speed: 45,
                radius: 120
            },
            midNormalType: {
                hp: 540,
                texture: 'enemy_midNormal_1',
                animation: 'enemy_midNormal_1',
                speed: 60,
                radius: 24
            },
            midFastType: {
                hp: 400,
                texture: 'enemy_midFast_1',
                animation: 'enemy_midFast_1',
                speed: 130,
                radius: 12
            },
            midTankType: {
                hp: 2200,
                texture: 'enemy_midTank_1',
                animation: 'enemy_midTank_1',
                speed: 80,
                radius: 32
            },
            midBossType: {
                hp: 17000,
                texture: 'enemy_midBoss_1',
                animation: 'enemy_midBoss_1',
                speed: 50,
                radius: 120
            },
            coefficientStartEnemiesHP: 30,
            enemiesProcentHPIncreasePer10sec: 70,
        },
        levelConfigs: {
            levelDuration: 5,//300
            backGround: 'background_6',
            expToUpgrade: 10,
            coefficientToUpgradeLevel: 1.8,
            MaxUpgradeLevelSkills: 8,
            dropCoinsAmount: 6,
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
                        // { type: 'boss', count: 2, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 15, delayBetweenEnemies: 1 },
                        // { type: 'midNormal', count: 5, delayBetweenEnemies: 50 },
                        // { type: 'fast', count: 500000, delayBetweenEnemies: 40 },
                        // { type: 'normal', count: 500000, delayBetweenEnemies: 2 },

                    ]
                },

                {
                    groups: [
                        { type: 'normal', count: 15, delayBetweenEnemies: 300 },
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
                        { type: 'normal', count: 25, delayBetweenEnemies: 500 },
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
                        { type: 'normal', count: 50, delayBetweenEnemies: 500 },
                        // { type: 'fast', count: 50, delayBetweenEnemies: 300 },
                    ]
                },
                {//30
                    groups: [
                        // { type: 'boss', count: 1, delayBetweenEnemies: 500 },
                        { type: 'fast', count: 10, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 500 },
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 10, delayBetweenEnemies: 450 },
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 20, delayBetweenEnemies: 200 },
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
                        { type: 'midNormal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 }
                    ]
                },

                {
                    groups: [//60

                        { type: 'normal', count: 200, delayBetweenEnemies: 1 },
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
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 150, delayBetweenEnemies: 10 }
                    ]
                },
                {//1:30
                    groups: [
                        { type: 'normal', count: 50, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 10, delayBetweenEnemies: 30 },
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
                        { type: 'midTank', count: 30, delayBetweenEnemies: 400 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 200 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },

                    ]
                },
                {//2:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 40, delayBetweenEnemies: 300 },
                        { type: 'midNormal', count: 1040, delayBetweenEnemies: 100 }

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 20, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 100, delayBetweenEnemies: 1 }
                    ]
                },


                {
                    groups: [
                        { type: 'midFast', count: 10, delayBetweenEnemies: 45 }

                    ]
                },
                {//2:30
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 100, delayBetweenEnemies: 1 }

                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 100, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 45 }

                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 200, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 45 }

                    ]
                },
                {//3:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 1600, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 25, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 20, delayBetweenEnemies: 1 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 40, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 1 }
                    ]
                },
                {//3:30
                    groups: [
                        { type: 'midBoss', count: 3, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 1000 },//200 sec

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 1000 }
                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {//4:00
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'midNormal', count: 100, delayBetweenEnemies: 30 },
                        { type: 'midNormal', count: 100, delayBetweenEnemies: 330 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 100, delayBetweenEnemies: 32 },
                    ]
                },
                {
                    groups: [
                        { type: 'midTank', count: 50, delayBetweenEnemies: 14 },//240sec
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 60, delayBetweenEnemies: 23 },
                    ]
                },
                {//4:30
                    groups: [
                        { type: 'midBoss', count: 10, delayBetweenEnemies: 10 },

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
                        { type: 'midBoss', count: 25, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 35, delayBetweenEnemies: 10 },
                    ]
                },
                {//5:00
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
                    ]
                },


            ]
        }
    },
    // 6 infinty
    {
        enemiesConfigs: {
            normalType: {
                hp: 300,
                texture: 'enemy_normal_1',
                animation: 'enemy_normal_1',
                speed: 50,
                radius: 24
            },
            fastType: {
                hp: 230,
                texture: 'enemyFast_1',
                animation: 'enemy_fast_1',
                speed: 120,
                radius: 12
            },
            tankType: {
                hp: 1200,
                texture: 'enemy_tank_1',
                animation: 'enemy_tank_1',
                speed: 70,
                radius: 32
            },
            bossType: {
                hp: 12000,
                texture: 'enemy_boss_1',
                animation: 'enemy_boss_1',
                speed: 45,
                radius: 120
            },
            midNormalType: {
                hp: 600,
                texture: 'enemy_midNormal_1',
                animation: 'enemy_midNormal_1',
                speed: 60,
                radius: 24
            },
            midFastType: {
                hp: 460,
                texture: 'enemy_midFast_1',
                animation: 'enemy_midFast_1',
                speed: 130,
                radius: 12
            },
            midTankType: {
                hp: 2400,
                texture: 'enemy_midTank_1',
                animation: 'enemy_midTank_1',
                speed: 80,
                radius: 32
            },
            midBossType: {
                hp: 20000,
                texture: 'enemy_midBoss_1',
                animation: 'enemy_midBoss_1',
                speed: 50,
                radius: 120
            },
            coefficientStartEnemiesHP: 30,
            enemiesProcentHPIncreasePer10sec: 100,
        },
        levelConfigs: {
            levelDuration: 1200,
            backGround: 'background_7',
            expToUpgrade: 10,
            coefficientToUpgradeLevel: 1.9,
            MaxUpgradeLevelSkills: 8,
            dropCoinsAmount: 6,
            dropCoinsAmountBonus: 0.9,
            levelUpPointsCount: 1,
            addExpAmountPerKillAmount: 1,
            addGoldAndGemsCoefficient: 1,
        },
        playerConfigs: {
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
                        // { type: 'boss', count: 2, delayBetweenEnemies: 1 },
                        { type: 'midNormal', count: 15, delayBetweenEnemies: 10 },
                        // { type: 'midNormal', count: 5, delayBetweenEnemies: 50 },
                        // { type: 'fast', count: 500000, delayBetweenEnemies: 40 },
                        // { type: 'normal', count: 500000, delayBetweenEnemies: 2 },

                    ]
                },

                {
                    groups: [
                        { type: 'normal', count: 15, delayBetweenEnemies: 300 },
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
                        { type: 'normal', count: 25, delayBetweenEnemies: 500 },
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
                        { type: 'normal', count: 50, delayBetweenEnemies: 500 },
                        // { type: 'fast', count: 50, delayBetweenEnemies: 300 },
                    ]
                },
                {//30
                    groups: [
                        // { type: 'boss', count: 1, delayBetweenEnemies: 500 },
                        { type: 'fast', count: 10, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 500 },
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 10, delayBetweenEnemies: 450 },
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 20, delayBetweenEnemies: 200 },
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
                        { type: 'midNormal', count: 10, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 }
                    ]
                },

                {
                    groups: [//60
                        { type: 'normal', count: 500, delayBetweenEnemies: 100 },

                        { type: 'normal', count: 200, delayBetweenEnemies: 1 },
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
                    groups: [
                        { type: 'fast', count: 10, delayBetweenEnemies: 30 },
                        { type: 'normal', count: 10, delayBetweenEnemies: 150 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [

                        { type: 'normal', count: 150, delayBetweenEnemies: 10 }
                    ]
                },
                {//1:30
                    groups: [
                        { type: 'normal', count: 50, delayBetweenEnemies: 150 }
                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 10, delayBetweenEnemies: 30 },
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
                        { type: 'midTank', count: 30, delayBetweenEnemies: 400 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 200 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 50, delayBetweenEnemies: 1 },
                        { type: 'normal', count: 30, delayBetweenEnemies: 150 },

                    ]
                },
                {//2:00
                    groups: [
                        { type: 'normal', count: 800, delayBetweenEnemies: 100 },

                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 40, delayBetweenEnemies: 300 }

                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 20, delayBetweenEnemies: 5 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 100, delayBetweenEnemies: 1 }
                    ]
                },


                {
                    groups: [
                        { type: 'midFast', count: 10, delayBetweenEnemies: 45 }

                    ]
                },
                {//2:30
                    groups: [
                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 100, delayBetweenEnemies: 1 }

                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 100, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 45 }

                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 200, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 45 }

                    ]
                },
                {//3:00
                    groups: [
                        { type: 'normal', count: 1500, delayBetweenEnemies: 50 },

                        { type: 'midBoss', count: 1, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 450 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 20, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 20, delayBetweenEnemies: 10 }

                    ]
                },
                {
                    groups: [
                        { type: 'fast', count: 25, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 20, delayBetweenEnemies: 1 }
                    ]
                },
                {
                    groups: [
                        { type: 'normal', count: 40, delayBetweenEnemies: 10 },
                        { type: 'tank', count: 10, delayBetweenEnemies: 1 }
                    ]
                },
                {//3:30
                    groups: [
                        { type: 'midBoss', count: 3, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 1000 },//200 sec

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 5, delayBetweenEnemies: 1000 }
                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 1000 },

                    ]
                },
                {//4:00
                    groups: [
                        { type: 'normal', count: 2500, delayBetweenEnemies: 30 },

                        { type: 'midBoss', count: 5, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'midNormal', count: 100, delayBetweenEnemies: 30 },
                        { type: 'midNormal', count: 100, delayBetweenEnemies: 330 },

                    ]
                },
                {
                    groups: [
                        { type: 'boss', count: 5, delayBetweenEnemies: 10 },
                    ]
                },
                {
                    groups: [
                        { type: 'midFast', count: 100, delayBetweenEnemies: 32 },
                    ]
                },
                {
                    groups: [
                        { type: 'midTank', count: 50, delayBetweenEnemies: 14 },//240sec
                    ]
                },
                {
                    groups: [
                        { type: 'tank', count: 60, delayBetweenEnemies: 23 },
                    ]
                },
                {//4:30
                    groups: [
                        { type: 'midBoss', count: 10, delayBetweenEnemies: 10 },

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
                        { type: 'midBoss', count: 25, delayBetweenEnemies: 10 },

                    ]
                },
                {
                    groups: [

                    ]
                },
                {
                    groups: [
                        { type: 'midBoss', count: 35, delayBetweenEnemies: 10 },
                    ]
                },
                { groups: [{ type: 'midBoss', count: 5, delayBetweenEnemies: 10 },] },//5:00
                { groups: [{ type: 'boss', count: 25, delayBetweenEnemies: 10 },] },
                { groups: [] },
                { groups: [{ type: 'midBoss', count: 25, delayBetweenEnemies: 10 },] },
                { groups: [] },
                { groups: [{ type: 'midBoss', count: 35, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 5, delayBetweenEnemies: 10 },] },//5:30
                { groups: [{ type: 'boss', count: 25, delayBetweenEnemies: 10 },] },
                { groups: [] },
                { groups: [{ type: 'midBoss', count: 25, delayBetweenEnemies: 10 },] },
                { groups: [] },
                { groups: [{ type: 'midBoss', count: 35, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 5, delayBetweenEnemies: 10 },] },//6:00
                { groups: [{ type: 'boss', count: 25, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 5, delayBetweenEnemies: 10 }, { type: 'midTank', count: 50000, delayBetweenEnemies: 300 },] },
                { groups: [{ type: 'midBoss', count: 25, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 25, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 35, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 5, delayBetweenEnemies: 10 },] },//6:30
                { groups: [{ type: 'boss', count: 25, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 5, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 25, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 25, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 35, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 6, delayBetweenEnemies: 10 },] },//7:00
                { groups: [{ type: 'midBoss', count: 26, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 6, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 26, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 26, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 36, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 6, delayBetweenEnemies: 10 },] },//7:30
                { groups: [{ type: 'midBoss', count: 26, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 6, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 26, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 26, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 36, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 7, delayBetweenEnemies: 10 },] },//8:00
                { groups: [{ type: 'midBoss', count: 27, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 7, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 27, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 27, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 37, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 7, delayBetweenEnemies: 10 },] },//8:30
                { groups: [{ type: 'midBoss', count: 27, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 7, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 27, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 27, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 37, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 8, delayBetweenEnemies: 10 },] },//9:00
                { groups: [{ type: 'midBoss', count: 28, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 8, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 28, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 28, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 38, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 8, delayBetweenEnemies: 10 },] },//9:30
                { groups: [{ type: 'midBoss', count: 28, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 8, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 28, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 28, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 38, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 9, delayBetweenEnemies: 10 },] },//10:00
                { groups: [{ type: 'midBoss', count: 29, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 9, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 29, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 29, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 39, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 9, delayBetweenEnemies: 10 },] },//10:30
                { groups: [{ type: 'midBoss', count: 29, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 9, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 29, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 29, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 39, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 10, delayBetweenEnemies: 10 },] },//11:00
                { groups: [{ type: 'midBoss', count: 30, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 10, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 30, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 30, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 40, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 10, delayBetweenEnemies: 10 },] },//11:30
                { groups: [{ type: 'midBoss', count: 30, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 10, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 30, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 30, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 40, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 11, delayBetweenEnemies: 10 },] },//12:00
                { groups: [{ type: 'midBoss', count: 31, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 11, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 31, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 31, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 41, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 11, delayBetweenEnemies: 10 },] },//12:30
                { groups: [{ type: 'midBoss', count: 31, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 11, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 31, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 31, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 41, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 12, delayBetweenEnemies: 10 },] },//13:00
                { groups: [{ type: 'midBoss', count: 32, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 12, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 32, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 32, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 42, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 12, delayBetweenEnemies: 10 },] },//13:30
                { groups: [{ type: 'midBoss', count: 32, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 12, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 32, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 32, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 42, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 13, delayBetweenEnemies: 10 },] },//14:00
                { groups: [{ type: 'midBoss', count: 33, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 13, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 33, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 33, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 43, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 13, delayBetweenEnemies: 10 },] },//14:30
                { groups: [{ type: 'midBoss', count: 33, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 13, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 33, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 33, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 43, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 14, delayBetweenEnemies: 10 },] },//15:00
                { groups: [{ type: 'midBoss', count: 34, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 14, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 34, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 34, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 44, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 14, delayBetweenEnemies: 10 },] },//15:30
                { groups: [{ type: 'midBoss', count: 34, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 14, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 34, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 34, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 44, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 15, delayBetweenEnemies: 10 },] },//16:00
                { groups: [{ type: 'midBoss', count: 35, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 15, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 35, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 35, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 45, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 15, delayBetweenEnemies: 10 },] },//16:30
                { groups: [{ type: 'midBoss', count: 35, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 15, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 35, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 35, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 45, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 16, delayBetweenEnemies: 10 },] },//17:00
                { groups: [{ type: 'midBoss', count: 36, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 16, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 36, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 36, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 46, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 16, delayBetweenEnemies: 10 },] },//17:30
                { groups: [{ type: 'midBoss', count: 36, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 16, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 36, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 36, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 46, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 17, delayBetweenEnemies: 10 },] },//18:00
                { groups: [{ type: 'midBoss', count: 37, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 17, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 37, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 37, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 47, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 17, delayBetweenEnemies: 10 },] },//18:30
                { groups: [{ type: 'midBoss', count: 37, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 17, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 37, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 37, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 47, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 18, delayBetweenEnemies: 10 },] },//19:00
                { groups: [{ type: 'midBoss', count: 38, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 18, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 38, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 38, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 48, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 18, delayBetweenEnemies: 10 },] },//19:30
                { groups: [{ type: 'midBoss', count: 38, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 18, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 38, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 38, delayBetweenEnemies: 10 },] },
                { groups: [{ type: 'midBoss', count: 48, delayBetweenEnemies: 10 },] },


            ]
        }
    },

]
export default originalLevels

