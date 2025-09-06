export default class SplashSpawner {
    constructor(scene) {
        this.scene = scene;

        // создаём группу под кляксы
        this.group = scene.add.group({
            classType: Phaser.GameObjects.Image,
            maxSize: 1530,       // ограничим пул
            runChildUpdate: false
        });
    }

    spawn(x, y, enemyWidth = 1, isSpecial) {

        let splash;
        if (isSpecial) {
            splash = this.group.get(x, y, `splashRed`);
            splash.isSpecialRed = true;
        } else {
            splash = this.group.get(x, y, `splash${Phaser.Math.Between(1, 6)}`);
            splash.isSpecialRed = false;
        }

        if (!splash) return;

        splash.setActive(true);
        splash.setVisible(true);
        splash.setDepth(-2);

        // масштаб от размера врага, с небольшим разбросом
        if (isSpecial) {
            const finalScale = 0.001 * enemyWidth * Phaser.Math.FloatBetween(0.8, 1.2);
            splash.setScale(finalScale * 0, 5);

            this.scene.tweens.add({
                targets: splash,
                scale: finalScale,
                ease: 'Bounce.easeOut',
                duration: 200
            });
        } else {
            const finalScale = 0.001 * enemyWidth * Phaser.Math.FloatBetween(0.8, 1.2);
            splash.setScale(finalScale * 0.5);

            this.scene.tweens.add({
                targets: splash,
                scale: finalScale,
                ease: 'Bounce.easeOut',
                duration: 200
            });
        }

        splash.setAlpha(1);
        splash.setAngle(Phaser.Math.Between(0, 360));

        // 🎨 оттенки около чёрного (тёмно-серые, фиолетово-серые и т.п.)
        const colors = [
            0x1a1a1a, // тёмно-серый почти чёрный
            0x222222,
            0x2a1f2a, // с фиолетовым отливом
            0x1f2a2a, // с зеленцой
            0x2a2620  // с коричневым оттенком
        ];
        if (!splash.isSpecialRed) {
            splash.setTint(Phaser.Utils.Array.GetRandom(colors));
        }


        const lifetime = Phaser.Math.Between(2000, 6000);
        const permanent = Phaser.Math.FloatBetween(0, 1) < 0.02;
        // плавное исчезновение
        if (!permanent) {
            this.scene.tweens.add({
                targets: splash,
                alpha: 0,
                duration: lifetime,
                ease: "Linear",
                onComplete: () => {
                    this.group.killAndHide(splash);
                    splash.setVisible(false);
                }
            });
        }

    }


    getGroup() {
        return this.group;
    }
}