
import { getHUD } from "./hudManager.js";
import  playerInitCfgs  from "../PlayerConfigs.js";

export default class PlayerHPMark {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;

        // левая и правая линия
        this.left = scene.add.image(0, 0, 'hp_line').setOrigin(0, 0.5).setDepth(30);
        this.right = scene.add.image(0, 0, 'hp_line').setOrigin(0, 0.5).setDepth(30);

        // чтобы они двигались с камерой
        this.left.setScrollFactor(0);
        this.right.setScrollFactor(0);

        this.left.setVisible(false);
        this.right.setVisible(false);
    }

    update() {

        // показать линии
        this.left.setVisible(false);
        this.right.setVisible(false);

        const hud = getHUD();
        const hp = hud.lives;
        const max = playerInitCfgs.maxHP;

        if (hp >= max) {
            this.left.setVisible(false);
            this.right.setVisible(false);
            return;
        }

        const ratio = 1 - (hp / max);
        const maxLength = 20;
        const length = maxLength * ratio;

        const x = 400;
        const y = 370;

        // позиция и угол
        this.left.setPosition(x, y);
        this.left.setRotation(45 * Phaser.Math.DEG_TO_RAD);
        this.left.setScale(length / 20, 1);

        this.right.setPosition(x, y);
        this.right.setRotation(135 * Phaser.Math.DEG_TO_RAD);
        this.right.setScale(length / 20, 1);

        // показать линии
        this.left.setVisible(true);
        this.right.setVisible(true);

    }
}