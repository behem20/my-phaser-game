


export default class CoinSpawner {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;
        this.group = scene.physics.add.group({
            classType: Phaser.Physics.Arcade.Sprite,
            maxSize: 500,
            runChildUpdate: true
        });

        scene.events.on('update', this.update, this);

        this.isMagnetActive = false;
        this.magnetRadius = 0;

        this.coinTypes = {
            bot: { key: "coins_bot_sheet", anim: 'coins_bot_anim', chance: 0.90, value: 10, life: 30000 },
            mid: { key: "coins_mid_sheet", anim: 'coins_mid_anim', chance: 0.08, value: 50, life: 40000 },
            top: { key: "coins_top_sheet", anim: 'coins_top_anim', chance: 0.02, value: 200, life: 50000 }
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

    spawnRandomly(minDistance = 1000, maxDistance = 2000) {


        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
        const distance = Phaser.Math.Between(minDistance, maxDistance);
        const x = this.player.x + Math.cos(angle) * distance;
        const y = this.player.y + Math.sin(angle) * distance;
        this.spawnCoin(x, y);
    }

    spawnCoin(x, y) {
        const cfg = this.pickCoinType();
        const PLUS_X = Phaser.Math.Between(-55, 55);
        const PLUS_Y = Phaser.Math.Between(-55, 55);
        const coin = this.group.get(x + PLUS_X, y + PLUS_Y, cfg.key);
        if (!coin) return;

        coin.setScale(Phaser.Math.FloatBetween(1, 1.79));
        coin.setOrigin(0.5);
        coin.value = cfg.value;

        const pickupRadius = coin.width * this.scene.playerInitCfgs.coinsMagnetRadiusBonus;
        coin.setCircle(pickupRadius, -(pickupRadius - pickupRadius / 4), -(pickupRadius - pickupRadius / 4));

        coin.setDepth(-2);
        coin.play(cfg.anim);
        coin.setCollideWorldBounds(true);
        coin.setBounce(1);
        coin.body.allowGravity = false;
        


        coin.isMagnetized = false;
        coin.magnetSpeed = 0;
        this.scene.time.delayedCall(cfg.life, () => {
            if (coin.active) {
                // coin.trail.destroy()
                coin.destroy();

            }
        });


    }

    spawnForKill(enemyX, enemyY, amount = 1) {
        for (let i = 0; i < amount; i++) {
            this.spawnCoin(enemyX, enemyY);
        }
    }

    getGroup() {
        return this.group;
    }

    activateMagnet(duration = 1000, radius = 300) {
        this.isMagnetActive = true;
        this.magnetRadius = radius;

        // визуальный эффект вокруг игрока
        const effect = this.scene.add.circle(this.player.x, this.player.y, 10, 0x00ff00, 0.3);
        effect.setDepth(5);
        this.scene.tweens.add({
            targets: effect,
            radius: radius,
            alpha: 0,
            duration: duration,
            ease: 'Cubic.easeOut',
            onComplete: () => effect.destroy()
        });

        // через duration мс выключаем магнит
        this.scene.time.delayedCall(duration, () => {
            this.isMagnetActive = false;
            this.group.children.each(coin => {
                if (coin.active) coin.isMagnetized = false;
            });
        });
    }

    update() {
        // if (!this.group) return;
        if (!this.group || !this.group.children) return;

        this.group.children.iterate(coin => {
            if (!coin || !coin.active) return;

            if (this.isMagnetActive && !coin.isMagnetized) {
                const dx = this.player.x - coin.x;
                const dy = this.player.y - coin.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.magnetRadius) {
                    coin.isMagnetized = true;
                    coin.magnetSpeed = 60; // 🔹 стартовая скорость притяжения (можно менять)
                }
            }

            if (coin.isMagnetized) {
                // 🔹 Здесь регулируется скорость полета монеты
                const factor = 0.08; // 0.08 = медленнее, 0.12 = чуть быстрее
                coin.x += (this.player.x - coin.x) * factor;
                coin.y += (this.player.y - coin.y) * factor;
            }
        });
    }
}

