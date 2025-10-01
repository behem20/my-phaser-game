
export function randomTintFill(minHex, maxHex) {
    const min = Phaser.Display.Color.HexStringToColor(minHex);
    const max = Phaser.Display.Color.HexStringToColor(maxHex);

    const r = Phaser.Math.Between(min.red, max.red);
    const g = Phaser.Math.Between(min.green, max.green);
    const b = Phaser.Math.Between(min.blue, max.blue);

    return (r << 16) + (g << 8) + b; // 0xRRGGBB
}

export function playDamageEffect(enemy, scene, damage = 1) {

    // Пример:
    if (!enemy || !enemy.scene || !enemy.active) return;
    // 🔥 Подсветка врага
    enemy.sprite.setTintFill(randomTintFill('#a70000', '#460303ff'));
    const textX = enemy.x + Phaser.Math.Between(-20, 20)
    const textY = enemy.y + Phaser.Math.Between(-20, 20)
    // 🔥 Отобразить число урона
    if (damage > 0) {
        if (scene.hideDamageText) {
            const dmgText = scene.add.text(textX, textY - 40, `-${damage}`, {
                fontSize: Math.random()>0.5?'16px':'20px',
                fontFamily: 'Arial',
                color: Math.random()>0.5?'#ff0000ff':'#da0d0dff',
                stroke: '#000000',
                strokeThickness: 1
            }).setOrigin(0.5).setDepth(100);

            // Анимация: всплытие и исчезновение
            scene.tweens.add({
                targets: dmgText,
                y: dmgText.y - 30,
                // alpha: 0.4,
                duration: 500,
                ease: 'Cubic.easeOut',
                onComplete: () => {
                    dmgText.destroy();
                }
            });
        }

    }

    // 🔥 Доп таймер для очистки
    enemy.scene.time.delayedCall(150, () => {
        if (enemy.active) {
            enemy.sprite.clearTint();
            enemy.sprite.setAlpha(1);
        }
    });
    const rndScale = Phaser.Math.FloatBetween(0.2, 0.25)
    const rndAlpha = Phaser.Math.FloatBetween(0.05, 0.1)

    const rndSpeed = Phaser.Math.Between(150, 320)
    const colors = ['yellow', 'white', 'red', 'blue', 'green']

    // scene.REDparticles = scene.add.particles(0, 0, 'red-flares', {
    //     frame: colors[Phaser.Math.Between(0, colors.length - 1)],
    //     x: enemy.x,
    //     y: enemy.y,
    //     speed: { min: rndSpeed, max: rndSpeed * 1.5 },
    //     // angle: { min: -90 - 10, max: -90 + 10 },
    //     lifespan: 400,
    //     gravityY: 0,
    //     scale: { start: rndScale, end: rndScale * 1.5 },
    //     alpha: { start: rndAlpha, end: 0 },
    //     // frequency: 100,
    //     quantity: 15

    // });
    // scene.tweens.add({
    //     targets: scene.REDparticles,
    //     alpha: { from: 1, to: 0 },
    //     duration: 400,
    //     ease: 'Cubic.easeOut',
    //     onComplete: () => {

    //     }
    // });
    // scene.time.delayedCall(400, () => scene.REDparticles.destroy());
}