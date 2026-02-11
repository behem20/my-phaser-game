export class ChestArrowManager {
    constructor(scene, chestsGroup, arrowTexture = 'arrow') {
        this.scene = scene;
        this.chests = chestsGroup;
        this.camera = scene.cameras.main;
        this.arrowTexture = arrowTexture;
        this.arrows = new Map();

        this.timer = 0;
        this.updateDelay = 16; // ms
        this.padding = 20;
    }

    // вызывай из scene.update(time, delta)
    update(time, delta) {
        this.timer += delta;
        if (this.timer < this.updateDelay) return;
        this.timer = 0;
        this._updateArrowsOnce();
    }

    _createArrowForChest(chest) {
        const arrow = this.scene.add.sprite(0, 0, this.arrowTexture);
        arrow.setOrigin(0.5);
        arrow.setScale(1)
        arrow.setDepth(1000);
        arrow.setScrollFactor(0); // фиксируем на экране (UI)
        arrow.setVisible(false);
        this.arrows.set(chest, arrow);
        return arrow;
    }

    _updateArrowsOnce() {
        const cam = this.camera;
        // центр камеры в world координатах
        const camWorldCenterX = cam.worldView.centerX;
        const camWorldCenterY = cam.worldView.centerY;
        // центр камеры в screen (экранных) координатах
        const camScreenCenterX = cam.centerX;
        const camScreenCenterY = cam.centerY;

        const w = cam.width / 2 - this.padding;
        const h = cam.height / 2 - this.padding;

        this.chests.children.iterate(chest => {
            if (!chest || !chest.active) return; // выход из callback для этой итерации

            let arrow = this.arrows.get(chest);
            if (!arrow) arrow = this._createArrowForChest(chest);

            // если сундук виден — скрываем стрелку
            if (cam.worldView.contains(chest.x, chest.y)) {
                arrow.setVisible(false);
                return; // НЕ continue, а return внутри iterate callback
            }

            // Вектор в world
            const dx = chest.x - camWorldCenterX;
            const dy = chest.y - camWorldCenterY;
            const angle = Math.atan2(dy, dx);

            // пересечение с границей (проекция на прямоугольник камеры)
            let x = 0, y = 0;
            const tanAngle = Math.tan(angle);

            if (Math.abs(dy) * w > Math.abs(dx) * h) {
                y = dy > 0 ? h : -h;
                x = y / tanAngle;
            } else {
                x = dx > 0 ? w : -w;
                y = x * tanAngle;
            }

            // позиция стрелки в screen координатах, т.к. setScrollFactor(0)
            arrow.x = camScreenCenterX + x;
            arrow.y = camScreenCenterY + y;
            // arrow.rotation = angle;
            arrow.setVisible(true);
        });
    }

    // вызывай при удалении сундука
    removeChest(chest) {
        const arrow = this.arrows.get(chest);
        if (arrow) {
            arrow.destroy();
            this.arrows.delete(chest);
        }
    }
}