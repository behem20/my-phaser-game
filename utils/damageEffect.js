
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
    const textX = enemy.x+Phaser.Math.Between(-20,20)
    const textY = enemy.y+Phaser.Math.Between(-20,20)
    // 🔥 Отобразить число урона
    if (damage > 0) {
        const dmgText = scene.add.text(textX, textY - 40, `-${damage}`, {
            fontSize: Math.random()>0.5?'24px':'30px',
            fontFamily: 'Arial',
            color: Math.random()>0.5?'#a70000ff':'#f82f50ff',
            stroke: '#000000',
            strokeThickness: 3
        }).setOrigin(0.5).setDepth(100);

        // Анимация: всплытие и исчезновение
        scene.tweens.add({
            targets: dmgText,
            y: dmgText.y - 30,
            alpha: 0,
            duration: 1800,
            ease: 'Cubic.easeOut',
            onComplete: () => {
                dmgText.destroy();
            }
        });
    }

    // 🔥 Доп таймер для очистки
    enemy.scene.time.delayedCall(150, () => {
        if (enemy.active) {
            enemy.sprite.clearTint();
            enemy.sprite.setAlpha(1);
        }
    });
}