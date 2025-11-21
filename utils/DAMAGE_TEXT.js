export function createDamageTextPool(scene, poolSize = 100) {
    scene.damageTextPool = [];
    for (let i = 0; i < poolSize; i++) {
        const txt = scene.add.text(-1000, -1000, '', {
            fontSize: '72px',
            fontFamily: 'Arial',
            color: '#ff0000',
            stroke: '#000000',
            strokeThickness: 1
        })
            .setOrigin(0.5)
            .setDepth(100)
            .setVisible(false);

        // Добавим свои параметры для анимации
        txt.life = 0;        // сколько времени текст будет активен
        txt.vx = 0;          // смещение по X
        txt.vy = 0;          // смещение по Y
        scene.damageTextPool.push(txt);
    }
}

// -----------------------------
// 2. Взять свободный текст из пула
// -----------------------------
function getFreeDamageText(scene) {
    for (const txt of scene.damageTextPool) {
        if (!txt.visible) return txt;
    }
    return null; // если все заняты
}

// -----------------------------
// 3. Показать текст урона
// -----------------------------
export function showDamageText(enemy, scene, damage = 15) {
    if (!enemy || !enemy.active) return;

    const txt = getFreeDamageText(scene);
    if (!txt) return;

    txt.setText(`-${damage}`);
    txt.setStyle({
        fontSize: Math.random() > 0.5 ? '24px' : '32px',
        color: Math.random() > 0.5 ? '#ff0000ff' : '#da0d0dff'
    });

    txt.setPosition(
        enemy.x + Phaser.Math.Between(-20, 20),
        enemy.y + Phaser.Math.Between(-40, -20)
    );

    txt.vx = Phaser.Math.Between(-10, 10);
    txt.vy = -Phaser.Math.Between(25, 40);
    txt.life =600; // миллисекунд
    txt.alpha = 1;
    txt.setVisible(true);
}

// -----------------------------
// 4. Обновление пула в update()
// -----------------------------
export function updateDamageTextPool(scene, delta) {

    for (const txt of scene.damageTextPool) {
        if (!txt.visible) continue;

        txt.life -= delta;
        if (txt.life <= 0) {
            txt.setVisible(false);
            continue;
        }

        txt.x += txt.vx * (delta / 1000); // скорость px/сек
        txt.y += txt.vy * (delta / 1000);
        txt.alpha = txt.life / 500; // плавное исчезновение

    }
}