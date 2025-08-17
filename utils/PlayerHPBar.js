
import { getHUD } from "./hudManager.js";
import playerInitCfgs from "../PlayerConfigs.js";
import levels from "../levelsConfigs.js";

export default class PlayerHPMark {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;

        // графика для HP-бара
        this.hpBarBg = scene.add.graphics().setDepth(30);
        this.hpBar = scene.add.graphics().setDepth(31);
        this.border = scene.add.graphics().setDepth(31);

        // чтобы бар двигался с игроком
        this.hpBarBg.setScrollFactor(0);
        this.hpBar.setScrollFactor(0);
        this.border.setScrollFactor(0);
        
        // // сначала скрыт
        // this.hpBarBg.setVisible(false);
        // this.hpBar.setVisible(false);
    }

    update() {
        const hud = getHUD();
        const hp = hud.lives;
        const max = levels[this.scene.registry.get("currentLevel")].playerConfigs.maxHP;

        // if (hp >= max) {
        //     this.hpBarBg.setVisible(false);
        //     this.hpBar.setVisible(false);
        //     return;
        // }

        const hpPercent = Phaser.Math.Clamp(hp / max, 0, 1);

        const width = 40;
        const height = 3;

        const x = 400;
        const y = 430;

        // очистка старого
        this.hpBarBg.clear();
        this.hpBar.clear();
        this.border.clear()



        this.border.lineStyle(1, 0x000000, 1); // белая рамка толщиной 2
        this.border.strokeRect(x-20, y, width, height);

        // фон (чёрный)
        this.hpBarBg.fillStyle(0x000000, 0.7);
        this.hpBarBg.fillRect(x - width / 2, y, width, height);

        // цвет меняется от красного к зелёному
        const color = Phaser.Display.Color.Interpolate.ColorWithColor(
            new Phaser.Display.Color(255, 0, 0),
            new Phaser.Display.Color(0, 255, 0),
            100,
            hpPercent * 100
        );
        const hpColor = Phaser.Display.Color.GetColor(color.r, color.g, color.b);

        // сам HP-блок
        this.hpBar.fillStyle(hpColor, 1);
        this.hpBar.fillRect(x - width / 2, y, width * hpPercent, height);

        this.hpBarBg.setVisible(true);
        this.hpBar.setVisible(true);

        // vignette
        let intensity = 1 - hpPercent;
        this.scene.vignette.setAlpha(intensity * 0.5);
    }
}