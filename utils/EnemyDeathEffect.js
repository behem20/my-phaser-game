export function playEnemyDeathEffect(scene, enemy, hitXY) {


    if (enemy.isSpecial) {
        scene.coins.spawnForKill(enemy.x, enemy.y, scene, 2)
    }

    scene.splashes.spawn(enemy.x, enemy.y, enemy.height, enemy.isSpecial);
    scene.satelliteParticlesOnHit.explode(32, hitXY.x, hitXY.y)

    enemy.stop();
    // enemy.deactivateEnemy(); 


    //if you want white spplahes on death

    enemy.setTintFill(0xffffff)


    // 3. Мягкое затухание и уничтожение
    scene.tweens.add({
        targets: enemy,
        scale: { from: 1, to: 1.4 },
        alpha: { from: 1, to: 0.3 },
        duration: 100,
        ease: 'Cubic.easeOut',
        onComplete: () => {

            // enemy.clearTint();
            // enemy.sprite.setAlpha(1);
            // enemy.sprite.setScale(1);

            enemy.deactivateEnemy(); // деактивируем врага, спрайт и физику

        }
    });
}