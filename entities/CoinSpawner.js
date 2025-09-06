

export default class CoinSpawner {
    constructor(scene, player, enemy) {
        this.scene = scene;
        this.player = player;
        this.group = scene.physics.add.group();

        this.coinTypes = {
            bot: {
                key: "coins_bot_sheet",
                anim: 'coins_bot_anim',
                chance: 0.90,   // 80%
                value: 10,
                life: 30000
            },
            mid: {
                key: "coins_mid_sheet",
                anim: 'coins_mid_anim',
                chance: 0.08,  // 15%
                value: 50,
                life: 40000
            },
            top: {
                key: "coins_top_sheet",
                anim: 'coins_top_anim',
                chance: 0.02,  // 5%
                value: 200,
                life: 50000
            }
        };


    }
    pickCoinType() {
        const rnd = Math.random();
        let sum = 0;

        for (let type in this.coinTypes) {
            sum += this.coinTypes[type].chance;
            if (rnd <= sum) return this.coinTypes[type];
        }
        return this.coinTypes.bot;
    }
    spawnRandomly(minDistance = 1000, maxDistance = 2000, scene) {
        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
        const distance = Phaser.Math.Between(minDistance, maxDistance);
        const x = this.player.x + Math.cos(angle) * distance;
        const y = this.player.y + Math.sin(angle) * distance;

        this.spawnCoin(x, y)

    }
    spawnCoin(x, y) {
        const cfg = this.pickCoinType();
        const PLUS_X = Phaser.Math.Between(-55, 55)
        const PLUS_y = Phaser.Math.Between(-55, 55)
        const coin = this.group.create(x + PLUS_X, y + PLUS_y, cfg.key);
        const rnd = Phaser.Math.FloatBetween(1.35,1.79)
        coin.setScale(rnd)
        coin.trail = this.scene.add.particles(0, 0, 'flares', {
            frame: 'yellow',
            lifespan: 320,
            speed: { min: 50, max: 100 },
            angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
            gravityY: 0,             // без гравитации
            scale: { start: 0.2, end: 0 }, // уменьшаются
            alpha: { start: 1, end: 0 },   // исчезают
            frequency: 100,
            tint: [0xffffff, 0xff11ff],
            blendMode: 'ADD',
            follow: coin,
        }).setDepth(-1);

        coin.setOrigin(0.5);
        coin.value = cfg.value; // сколько даёт эта монета

        const pickupRadius = coin.width * this.scene.playerInitCfgs.coinsMagnetRadiusBonus;
        coin.setCircle(pickupRadius, -(pickupRadius - pickupRadius / 4), -(pickupRadius - pickupRadius / 4));

        coin.setDepth(-2);

        coin.play(cfg.anim); // если анимация есть


        coin.setCollideWorldBounds(true);
        coin.setBounce(1);
        coin.body.allowGravity = false;

        this.scene.time.delayedCall(cfg.life, () => {
            if (coin.active) {
                coin.destroy();
                coin.trail.destroy()
            }
        });
    }
    spawnForKill(enemyX, enemyY, scene, amount = 1) {

        for (let index = 0; index < amount; index++) {

            this.spawnCoin(enemyX, enemyY)
            console.log('coin for kill spawned');
            
        }

    }



    getGroup() {
        return this.group;
    }
}