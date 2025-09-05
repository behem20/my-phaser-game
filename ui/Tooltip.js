import { t } from "../LanguageManager.js";

export default class Tooltip {
    constructor(scene) {
        this.scene = scene;
        this.container = null;
    }

    show(skillInfo, x, y) {
        this.hide(); // если уже есть тултип — убрать

        const elements = [];
        let offsetY = 10;
        let maxWidth = 0;

        // Заголовок
        const nameText = this.scene.add.text(10, offsetY, `+${skillInfo.level} ${t(`spellsNames.${skillInfo.name.split(".")[1]}`)}`, {
            fontSize: "16px",
            color: "#ffff00"
        });
        elements.push(nameText);
        offsetY += nameText.height + 10;
        maxWidth = Math.max(maxWidth, nameText.width);



        // Динамические параметры
        const params = [
            // { key: "level", label: "Уровень", color: "#445ff5ff" },
            { key: "damage", label: "Урон", color: "#f82626ff" },
            { key: "duration", label: "Длительность", color: "#55ff55" },
            { key: "cooldown", label: "Перезарядка", color: "#5599ff" },
            { key: "targetCount", label: "Целей", color: "#aaaaff" },
            { key: "count", label: "Снарядов", color: "#ee3fc2ff" },
            { key: "radius", label: "Радиус", color: "#c2ec4dff" },
            { key: "inteval", label: "Интревал урона", color: "#4dececff" },
            { key: "cooldwonReduceTotal", label: "Общее уменьшение перезарядки всех способностей на", color: "#c2ec4dff" },
            { key: "plusDamageTotal", label: "Увеличение урона", color: "#f73e06ff" },
        ];

        params.forEach(p => {
            if (skillInfo[p.key] !== undefined) {
                const t = this.scene.add.text(10, offsetY, `${p.label}: ${skillInfo[p.key]}`, {
                    fontSize: "14px",
                    color: p.color
                });
                elements.push(t);
                offsetY += t.height + 5;
                maxWidth = Math.max(maxWidth, t.width);
            }
        });

        // Описание
        if (skillInfo.description) {
            const descText = this.scene.add.text(10, offsetY, t(`spellsDescription.${skillInfo.name.split(".")[1]}`), {
                fontSize: "14px",
                color: "#37fc30ff",
                wordWrap: { width: 250 }
            });
            elements.push(descText);
            offsetY += descText.height + 10;
            maxWidth = Math.max(maxWidth, descText.width);
        }


        // Фон автоматически по контенту
        const padding = 10;
        const bg = this.scene.add.rectangle(
            0,
            0,
            maxWidth + padding * 2,
            offsetY + padding,
            0x000000,
            0.8
        )
            .setOrigin(0)
            .setStrokeStyle(2, 0xffffff);

        // Контейнер
        this.container = this.scene.add.container(x + 25, y, [bg, ...elements])
            .setScrollFactor(0);
    }

    hide() {
        if (this.container) {
            this.container.destroy(true);
            this.container = null;
        }
    }
}