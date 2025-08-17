export function playEnemyDeathEffect(scene, enemy) {


    enemy.sprite.stop();
    enemy.sprite.setTintFill(0xffffff)

    // scene.cameras.main.flash(200, 255, 255, 255); flash screen


    scene.tweens.add({
        targets: enemy.shadow,
        alpha: { from: 1, to: 0 },
        duration: 150,
        ease: 'Cubic.easeOut',
        onComplete: () => {

        }
    });
    // 3. Мягкое затухание и уничтожение
    scene.tweens.add({
        targets: enemy.sprite,
        scale: { from: 1, to: 1.2 },
        alpha: { from: 1, to: 0 },
        duration: 200,
        ease: 'Cubic.easeOut',
        onComplete: () => {
            enemy.sprite.clearTint();
            enemy.sprite.setAlpha(1);
            enemy.shadow.setAlpha(1)
            if (enemy.shadow) enemy.shadow.setVisible(false); // временно скрыли тень на эффект

            enemy.deactivateEnemy(); // деактивируем врага, спрайт и физику
        }
    });
}