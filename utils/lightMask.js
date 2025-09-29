
export default class LightMask {
    constructor(scene, radius = 250) {
        this.scene = scene;

        // Текстура для "тумана"
        this.visionTexture = scene.make.renderTexture({
            width: scene.scale.width + 100,
            height: scene.scale.height + 100,
            add: true
        });
        this.visionTexture
        .setDepth(10)
        .setScrollFactor(0)
        .setOrigin(0.5,0.5)
        .setPosition(this.scene.cameras.main.width/2,this.scene.cameras.main.height/2);

        // Форма для круга света
        this.lightShape = scene.make.graphics({ x: 0, y: 0, add: false });
this.scene.scale.on('resize', this.onResize, this);
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


    onResize(gameSize){
        // console.log(gameSize);
        this.visionTexture.destroy(); // удаляем старый RT
        this.visionTexture = this.scene.make.renderTexture({
             width: gameSize.width + 100,
             height: gameSize.height + 100,
             add: true
        });
    this.visionTexture.setOrigin(0.5, 0.5);
    this.visionTexture.setScrollFactor(0).setDepth(10);
        
        const newWidth = gameSize.width + 100;
        const newHeight = gameSize.height + 100;
       
       
        this.visionTexture.setSize(newWidth, newHeight);
         this.visionTexture.setPosition(gameSize.width/2,gameSize.height/2)
        
    }

    update(target) {

        const ch = this.scene.cameras.main.height
        const cw = this.scene.cameras.main.width

        const radius = ch > cw ? ch * 0.7 /2: cw * 0.7/2;
        this.scene.LightMaskRadius = radius
     
        
        // console.log(radius);
        
        const cam = this.scene.cameras.main;
        const screenX = target.x - cam.scrollX;
        const screenY = target.y - cam.scrollY;
// console.log(screenX,screenY);
// console.log(cw,ch);


        // Рисуем градиентный круг
        this.createLightCircle(radius);

        // Чёрный фон
        this.visionTexture.clear();
        this.visionTexture.fill(0x000000, 0.98);


        // "Стираем" круг в тумане
        // this.visionTexture.erase(this.lightShape, screenX, screenY);
        this.visionTexture.erase(this.lightShape, this.visionTexture.width/2, this.visionTexture.height/2);
    }
}


// export default class LightMask {
//     constructor(scene, radius = 250) {
//         this.scene = scene;

//         // RenderTexture для "тумана"
//         this.visionTexture = scene.make.renderTexture({
//             width: scene.scale.width + 200,
//             height: scene.scale.height + 155,
//             add: true
//         });
//         this.visionTexture.setDepth(10).setScrollFactor(0).setOrigin(0, 0);

//         // Кэшированная текстура градиента света
//         this.lightTexture = scene.make.renderTexture({
//             width: radius * 2,
//             height: radius * 2,
//             add: false
//         });
       
//         this.createLightCircle(radius);
//     }

//     createLightCircle(radius) {
//         const steps = 70; // количество шагов градиента
//         const graphics = this.scene.make.graphics({ add: false });
//         graphics.clear();

//         for (let i = steps; i >= 0; i--) {
//             const r = radius * (i / steps);
//             const alpha = 1 - i / steps; // ближе к центру — прозрачнее
//             graphics.fillStyle(0xffffff, alpha);
//             graphics.fillCircle(radius, radius, r);
//         }

//         // Рисуем графику один раз на lightTexture
        
//         this.lightTexture.clear();
//         this.lightTexture.draw(graphics, 0, 0);
//         graphics.destroy();
//     }

//     update(target) {
//         if (!this.lightTexture || !this.visionTexture) return;

//         const cam = this.scene.cameras.main;
//         const ch = cam.height;
//         const cw = cam.width;
//         const radius = ch > cw ? ch * 0.7 / 2 : cw * 0.7 / 2;
//         this.scene.LightMaskRadius = radius;

//         const screenX = target.x - cam.scrollX - radius;
//         const screenY = target.y - cam.scrollY - radius;

//         // Чёрный фон
//         this.visionTexture.clear();
//         this.visionTexture.fill(0x000000, 0.58);

//         // "Стираем" круг в тумане, используя кэшированную текстуру
//         this.visionTexture.erase(this.lightTexture, screenX, screenY);
//     }
// }