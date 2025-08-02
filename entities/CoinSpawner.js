export default class CoinSpawner {
    constructor(scene, player, enemy) {
        this.scene = scene;
        this.player = player;
        this.group = scene.physics.add.group();
       
        
        scene.anims.create({
            key: 'coins_anim',
            frames: this.scene.anims.generateFrameNumbers('coins_sheet', { start: 0, end: 3 }),
            frameRate: 2,
            repeat: -1
        });
         console.log(1);

    }

    spawnRandomly(minDistance = 1000, maxDistance = 2000) {
        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
        const distance = Phaser.Math.Between(minDistance, maxDistance);
        const x = this.player.x + Math.cos(angle) * distance;
        const y = this.player.y + Math.sin(angle) * distance;

        const coin = this.group.create(x, y, "coins_anim");
        coin.setDepth(-2)
        coin.play('coins_anim')

        coin.setCollideWorldBounds(true);
        coin.setBounce(1);

    }
    spawnForKill(enemyX, enemyY) {

        if (Math.random() > 0.1) return
        else {
            const coin = this.group.create(enemyX, enemyY, "coins_anim");
            coin.play('coins_anim')
            coin.setDepth(-2)

            coin.setCollideWorldBounds(true);
            coin.setBounce(1);
            coin.body.allowGravity = false;
        }
    }



    getGroup() {
        return this.group;
    }
}