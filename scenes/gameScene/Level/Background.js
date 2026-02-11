export default class Background {
    constructor(scene, bg) {
        this.scene = scene
        this.image = this.scene.ui.createTileSprite(bg,
            { xPercent: 0.5, yPercent: 0.5 }, 1, 1).setDepth(-5).setScrollFactor(0);
    }
    update() {
        if (this.image) {
            this.image.tilePositionX = this.scene.cameras.main.scrollX ;
            this.image.tilePositionY = this.scene.cameras.main.scrollY ;
        }//bg
    }
}