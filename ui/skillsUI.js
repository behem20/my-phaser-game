import { t } from "../LanguageManager.js";

export default class SkillsUI {
    constructor(scene, skillsList) {
        

        this.scene = scene;
        this.icons = [];
        this.iconsBgs = []

        // координаты стартовые (нижний левый угол)
        let startX = 50;
        let startY = 100;
        let spacing = 50;

        skillsList.forEach((skillKey, index) => {


            const skill = scene.registry.get("skills")[skillKey];
            skill.iconID = index //for flash x y
            
            


            // иконка
            const icon = scene.add.image(startX, startY + index * spacing, skill.iconUI)
                .setOrigin(0.5)
                .setScale(0.8)
                .setInteractive()
                .setScrollFactor(0)
                .setDepth(100)
                .setScale(0.9)

            // при наведении показываем подсказку
            icon.on("pointerover", () => {
                this.showTooltip(skill, icon.x, icon.y);
            });

            icon.on("pointerout", () => {
                this.hideTooltip();
            });
            this.icons.push(icon);

            const iconBg = scene.add.rectangle(startX,
                startY + index * spacing,
                icon.width,
                icon.height,
                0x5511ff,
                0.3
            ).setOrigin(0.5)
                .setScrollFactor(0)
                .setDepth(icon.depth - 1);
            iconBg.setStrokeStyle(2, 0x000000);
            this.iconsBgs.push(iconBg)
        });
       
    }

    showTooltip(skill, x, y) {
        this.scene.tooltip.show(skill.skillInfo, x, y);
    }

    hideTooltip() {
       this.scene.tooltip.hide();
    }
    destroy() {
        this.icons.forEach(icon => icon.destroy())
        this.iconsBgs.forEach(iconBg => iconBg.destroy())

    }
}