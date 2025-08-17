// export default class LightMask {
//     constructor(scene, radius = 150) {
//         this.scene = scene;
//         this.baseRadius = radius;
//         this.pulseTime = 0;

//         this.visionTexture = scene.make.renderTexture({
//             width: scene.scale.width,
//             height: scene.scale.height,
//             add: true
//         });
//         this.visionTexture.setDepth(10);
//         this.visionTexture.setScrollFactor(0);
//         this.visionTexture.setOrigin(0,0)

//         this.lightShape = scene.make.graphics({ x: 0, y: 0, add: false });

//         this.createLightCircle(radius);
//     }

//     createLightCircle(radius) {
//         this.lightShape.clear();
//         this.lightShape.fillStyle(0xffffff, 1);
//         this.lightShape.fillCircle(0, 0, radius);
//         this.lightShape.setScrollFactor(0)
//     }

//     update(target) {
//         const delta = this.scene.game.loop.delta; // берём delta прямо из цикла
//         const cam = this.scene.cameras.main;
//         const screenX = target.x - cam.scrollX;
//         const screenY = target.y - cam.scrollY;

//         // Плавная пульсация
//         this.pulseTime += delta * 0.005;
//         const radius = this.baseRadius + Math.sin(this.pulseTime) * 10;
//         this.createLightCircle(radius);

//         // Заливаем тьмой
//         this.visionTexture.clear();
//         this.visionTexture.fill(0x000000, 0.95);

//         // Вырезаем свет
//         this.visionTexture.erase(this.lightShape, screenX, screenY);
//     }
// }
export default class LightMask {
    constructor(scene, radius = 250) {
        this.scene = scene;
        this.radius = radius;

        // Текстура для "тумана"
        this.visionTexture = scene.make.renderTexture({
            width: scene.scale.width+155,
            height: scene.scale.height+155,
            add: true
        });
        this.visionTexture.setDepth(10).setScrollFactor(0).setOrigin(0.01,0.01);

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
        const cam = this.scene.cameras.main;
        const screenX = target.x - cam.scrollX;
        const screenY = target.y - cam.scrollY;

        // Рисуем градиентный круг
        this.createLightCircle(this.radius);

        // Чёрный фон
        this.visionTexture.clear();
        this.visionTexture.fill(0x000000, 0.98);

        // "Стираем" круг в тумане
        this.visionTexture.erase(this.lightShape, screenX, screenY);
    }
}