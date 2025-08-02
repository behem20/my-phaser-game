export default class FireAura {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;

        this.scene.anims.create({
            key: 'fireAuraAnim',
            frames: scene.anims.generateFrameNumbers('fireAuraAnims', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        });

        // this.sprite = this.scene.add.sprite(390, 385, 'fireAuraAnims').setScrollFactor(0)
        // // this.sprite.body.allowGravity = false;

    }

    update() {
        // this.sprite.setPosition(400, 385);

        // if (!this.sprite.anims.isPlaying) {
        //     this.sprite.play('fireAuraAnim');
        // }
    }

}