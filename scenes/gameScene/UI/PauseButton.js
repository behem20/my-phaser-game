import { togglePause } from "../../../utils/pauseManager.js";

export default class PauseButton {
    constructor(scene) {
        this.scene = scene
        this.pauseButton = this.scene.ui.createImage('pausePicture', { xPercent: 0.96, yPercent: 0.025 }, 0.08).setDepth(100).setInteractive().setOrigin(0.5).setScrollFactor(0)
        this.pauseButton.basicScale = this.pauseButton.scale
        this.pauseButton.on('pointerover', () => { this.pauseButton.setScale(this.pauseButton.scale * 1.1); this.scene.audio.play('onHoverSfx') })
        this.pauseButton.on('pointerout', () => { this.pauseButton.setScale(this.pauseButton.basicScale) })
        this.pauseButton.on('pointerdown', () => { this.scene.audio.play('onTapSfx'); togglePause(this.scene) })

    }
}