
export default class LightMask {
    constructor(scene, radius = 250) {
        this.scene = scene;

        // Текстура для "тумана"
        this.visionTexture = scene.make.renderTexture({
            width: scene.scale.width + 2000,
            height: scene.scale.height + 1555,
            add: true
        });
        this.visionTexture.setDepth(10).setScrollFactor(0).setOrigin(0.0, 0.0);

        // Форма для круга света
        this.lightShape = scene.make.graphics({ x: 0, y: 0, add: false });
    }

    createLightCircle(radius) {
        this.lightShape.clear();

        const steps = 70; // чем больше — тем плавнее край
        for (let i = steps; i >= 0; i--) {
            const r = radius * (i / steps);
            const alpha = 1 - i / steps; // ближе к центру — прозрачнее
            this.lightShape.fillStyle(0xffffff, alpha);
            this.lightShape.fillCircle(0, 0, r);
        }
    }

    update(target) {

        const ch = this.scene.cameras.main.height
        const cw = this.scene.cameras.main.width

        const radius = ch > cw ? ch * 0.7 : cw * 0.7;
        // console.log(radius);
        
        const cam = this.scene.cameras.main;
        const screenX = target.x - cam.scrollX;
        const screenY = target.y - cam.scrollY;

        // Рисуем градиентный круг
        this.createLightCircle(radius/2);

        // Чёрный фон
        this.visionTexture.clear();
        this.visionTexture.fill(0x000000, 0.98);


        // "Стираем" круг в тумане
        this.visionTexture.erase(this.lightShape, screenX, screenY);
    }
}