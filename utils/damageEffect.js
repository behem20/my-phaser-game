
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

    // 🔥 Отобразить число урона
    if (damage > 0) {
        const dmgText = scene.add.text(enemy.x, enemy.y - 40, `-${damage}`, {
            fontSize: '24px',
            fontFamily: 'Arial',
            color: '#a70000ff',
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