export function playEnemyDeathEffect(scene, enemy) {
    console.log(enemy);

    enemy.sprite.stop();
    enemy.sprite.setTintFill(0xffffff)
    enemy.shadow.destroy()
    // scene.cameras.main.flash(200, 255, 255, 255); flash screen

    // 3. Мягкое затухание и уничтожение
    scene.tweens.add({
        targets: enemy,
        scale: { from: 1, to: 1.2 },
        alpha: { from: 1, to: 0 },
        duration: 300,
        ease: 'Cubic.easeOut',
        
        onComplete: () => {

            enemy.destroy(); // или disableBody(true, true)

        }
    });
}