import { t } from "../../../LanguageManager.js";

export default class DamageToggleUI {
    constructor(scene) {
        this.scene = scene
        this.hideDamageText = true;
        this.hideDamageButton = this.scene.ui.createText(t('game.damage?'), { xPercent: 0.8, yPercent: 0.02, fontPercent: 0.02 }).setScrollFactor(0).setDepth(1200).setInteractive()
        this.hideDamageButton.on('pointerdown', () => {
            this.hideDamageText = !this.hideDamageText;
            this.scene.audio.play('onTapSfx')
        })
        this.hideDamageButton.on('pointerover', () => {
            this.hideDamageButton.setFontSize(parseInt(this.hideDamageButton.style.fontSize) + 2);
            this.scene.audio.play('onHoverSfx')
        })
        this.hideDamageButton.on('pointerout', () => { this.hideDamageButton.setFontSize(parseInt(this.hideDamageButton.style.fontSize) - 2); })
    }



}