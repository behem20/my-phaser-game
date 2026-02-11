export default class FXManager {
    constructor(scene) {
        this.vignette = scene.ui.createImage("vignette", { xPercent: 0.5, yPercent: 0.5 })
            .setScrollFactor(0).setDepth(9999).setAlpha(0);
    }

}