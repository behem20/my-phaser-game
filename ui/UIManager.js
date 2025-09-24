export default class UIManager {
    constructor(scene) {
        this.scene = scene;
        this.elements = []; // сюда добавляем все UI

        // Подписка на ресайз и события сцены
        this.scene.scale.on('resize', this.resize, this);
        this.scene.events.on("shutdown", () => this.destroy());
        this.scene.events.on("destroy", () => this.destroy());
    }

    // Добавляем элемент в менеджер
    add(element, config) {
        // config: { xPercent, yPercent, fontPercent?, widthPercent?, heightPercent?, scalePercent? }
        this.elements.push({ element, config });
        this.updateElement(this.elements.length - 1); // сразу выставляем
    }

    // Пересчитываем один элемент
    updateElement(index) {
        const { element, config } = this.elements[index];
        const w = this.scene.scale.width;
        const h = this.scene.scale.height;

        if (!element.active) return; // элемент уже удалён

        // Позиция по процентам
        element.setPosition(w * config.xPercent, h * config.yPercent);

        // Шрифт
        if (config.fontPercent && element.setFontSize) {
            element.setFontSize(Math.round(h * config.fontPercent));
        }

        // Размеры для обычных объектов
        if (config.widthPercent && config.heightPercent) {
            if (element.setSize) {
                element.setSize(w * config.widthPercent, h * config.heightPercent);
            }
            // tileSprite или image
            else if (element instanceof Phaser.GameObjects.TileSprite || element instanceof Phaser.GameObjects.Image || element instanceof Phaser.GameObjects.Rectangle) {
                element.width = w * config.widthPercent;
                element.height = h * config.heightPercent;
                if (element.setDisplaySize) element.setDisplaySize(element.width, element.height);
            }
        }

        // Масштаб по проценту (если задан)
        if (config.scalePercent && element.setScale) {
            const scale = Math.min(w, h) * config.scalePercent / element.width;
            element.setScale(scale);
        }
    }

    // Пересчёт всех элементов
    resize() {
        for (let i = 0; i < this.elements.length; i++) {
            this.updateElement(i);
        }
    }

    // 🔹 Текст
    createText(text, options, style = {}) {
        const obj = this.scene.add.text(0, 0, text, {
            fontSize: "10px", // базовый размер
            color: "#fff",
            ...style
        }).setOrigin(0.5);

        this.add(obj, options);
        return obj;
    }

    // 🔹 Кнопка
    createButton(text, options, style = {}, callback = null) {
        const btn = this.scene.add.text(0, 0, text, {
            fontSize: "10px",
            color: "#0f0",
            backgroundColor: "#000",
            padding: { left: 10, right: 10, top: 5, bottom: 5 },
            ...style
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        if (callback) btn.on("pointerdown", callback);

        this.add(btn, options);
        return btn;
    }

    // 🔹 TileSprite
    createTileSprite(key, options, widthPercent = 1, heightPercent = 1) {
        const w = this.scene.scale.width * widthPercent;
        const h = this.scene.scale.height * heightPercent;

        const tile = this.scene.add.tileSprite(0, 0, w, h, key).setOrigin(0.5);
        this.add(tile, { ...options, widthPercent, heightPercent });
        return tile;
    }

    // 🔹 Картинка
    createImage(key, options, scalePercent = null) {
        const img = this.scene.add.image(0, 0, key).setOrigin(0.5);
        this.add(img, { ...options, scalePercent });
        return img;
    }
    /* ui.createRectangle(
                    { xPercent: x, yPercent: y, widthPercent: 0.15, heightPercent: 0.37 },0x222222, 1)
    */

    /*
    ui.createText(
                        t(upgrade.name),
                        { xPercent: x, yPercent: 0.35, fontPercent: 0.028, },
                        { fontSize: "20px", color: "#ffffffff" ,wordWrap: { width: cardWidth - 20 }})
                       
     */

    // 🔹 Прямоугольник
    createRectangle(options, color = 0xffffff, alpha = 1) {
        const rect = this.scene.add.rectangle(0, 0, 10, 10, color, alpha).setOrigin(0.5);
        this.add(rect, options);
        return rect;
    }

    // 🔹 Очистка
    destroy() {
        this.scene.scale.off('resize', this.resize, this);
        this.elements.forEach(el => el.element.destroy());
        this.elements = [];
    }
}