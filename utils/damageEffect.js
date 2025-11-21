// free to delete
export function randomTintFill(minHex, maxHex) {
    const min = Phaser.Display.Color.HexStringToColor(minHex);
    const max = Phaser.Display.Color.HexStringToColor(maxHex);

    const r = Phaser.Math.Between(min.red, max.red);
    const g = Phaser.Math.Between(min.green, max.green);
    const b = Phaser.Math.Between(min.blue, max.blue);

    return (r << 16) + (g << 8) + b; // 0xRRGGBB
}

export function playDamageEffect(enemy, source) {

    // Пример:
    if (!enemy || !enemy.scene || !enemy.active) return;
    // 🔥 Подсветка врага

    const colors = [0x00aaff, 0xff6699, 0x0000ff, 0xffffff];
    if (source == 'satellite') {
       
        // enemy.setTintFill(randomTintFill('#ff0505ff', '#9c0303ff'));
        enemy.setTintFill(...colors);
    } else {
        enemy.setTintFill(randomTintFill('#a70000', '#460303ff'));
    }


    // 🔥 Доп таймер для очистки
    enemy.scene.time.delayedCall(150, () => {
        if (enemy.active) {
            enemy.clearTint();
            // enemy.setAlpha(1);
        }
    });


}