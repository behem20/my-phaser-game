

export default class CoinSpawner {
    constructor(scene, player, enemy) {
        this.scene = scene;
        this.player = player;
        this.group = scene.physics.add.group();




    }

    spawnRandomly(minDistance = 1000, maxDistance = 2000, scene) {
        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
        const distance = Phaser.Math.Between(minDistance, maxDistance);
        const x = this.player.x + Math.cos(angle) * distance;
        const y = this.player.y + Math.sin(angle) * distance;

        const coin = this.group.create(x, y, "coins_anim");


        coin.setOrigin(0.5, 0.5);
        
        
        const pickupRadius = coin.width *   scene.playerInitCfgs.coinsMagnetRadiusBonus;
        coin.setCircle(pickupRadius, -(pickupRadius - pickupRadius / 4), -(pickupRadius - pickupRadius / 4));

        coin.setDepth(-2)
        coin.play('coins_anim')

        coin.setCollideWorldBounds(true);
        coin.setBounce(1);

        // this.coinParticles = scene.add.particles(0, 0, 'flares', {
        //     frame: 'yellow',
        //     speed: { min: 100, max: 160 },
        //     scale: { start: 0.5, end: 0.3 },
        //     alpha: { start: 0.6, end: 0 },
        //     lifespan: 150,
        //     frequency: 350, // частота появления
        //     tint: [0x00ff33, 0xffffff],
        //     follow: coin, // следят за игроком
        //     blendMode: 'ADD'
        // }).setDepth(-1);
        scene.time.delayedCall(60000, () => {
            if (coin.active) { // значит ещё не уничтожена
                coin.destroy();
            }
        });

    }
    spawnForKill(enemyX, enemyY, scene) {

        if (Math.random() > 0.1) return
        else {
            const coin = this.group.create(enemyX, enemyY, "coins_anim");
            coin.setOrigin(0.5, 0.5);
            const pickupRadius = coin.width *  scene.playerInitCfgs.coinsMagnetRadiusBonus;
            coin.setCircle(pickupRadius, -(pickupRadius - pickupRadius / 4), -(pickupRadius - pickupRadius / 4));

            coin.play('coins_anim')
            coin.setDepth(-2)

            coin.setCollideWorldBounds(true);
            coin.setBounce(1);
            coin.body.allowGravity = false;

            // this.coinParticles = scene.add.particles(0, 0, 'flares', {
            //     frame: 'yellow',
            //     speed: { min: 100, max: 160 },
            //     scale: { start: 0.5, end: 0.3 },
            //     alpha: { start: 0.6, end: 0 },
            //     lifespan: 150,
            //     frequency: 350, // частота появления
            //     tint: [0x00ff33, 0xffffff],
            //     follow: coin, // следят за игроком
            //     blendMode: 'ADD'
            // })
            //     .setDepth(-1);
            scene.time.delayedCall(30000, () => {
                if (coin.active) { // значит ещё не уничтожена
                    coin.destroy();
                }
            });
        }
    }



    getGroup() {
        return this.group;
    }
}