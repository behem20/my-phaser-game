

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

    const COLORS = {
        satellite: Math.random < 0.33 ? [0x888888, 0x333300, 0x0000aa, 0xaa0000] :
            Math.random() < 0.66 ? [0x333300, 0x888888, 0x0000aa, 0xaa0000]:
            [0x0000aa,0xaa0000,0x333300, 0x888888],
        satellite: [0xffffff,0xffffff, 0xffffff, 0xffffff],
        magic: [0xff0505, 0xff6699, 0xffffff00, 0x00ffffff],
        lightning: [0xffffff, 0xffffff, 0xffffff, 0xffffff]
    }
    // const colors = [0x00aaff, 0xff6699, 0x0000ff, 0xffffff];
    // const colors1 = [0xff0505, 0xff6699, 0xffffff00, 0x00ffffff];
    // if (source == 'satellite') {

    //     // enemy.setTintFill(randomTintFill('#ff0505ff', '#9c0303ff'));
    //     enemy.setTintFill(...colors);
    // } else {
    //     // enemy.setTintFill(randomTintFill('#a70000', '#460303ff'));
    //     enemy.setTintFill(...colors1);
    // }
    function getSource() {
        let result = ''

        if (COLORS[source]) {
            result = COLORS[source]
        } else {
            result = [0xffffff00, 0xffffff00, 0xffffff, 0xffffff]
        }
        return result
    }


    enemy.setTintFill(...getSource())



    // 🔥 Доп таймер для очистки
    enemy.scene.time.delayedCall(150, () => {
        if (enemy.active) {
            enemy.clearTint();
            enemy.resetPipeline();
            // enemy.setAlpha(1);
        }
    });


}