export function playEnemyDeathEffect(scene, enemy) {
    console.log('enemy  deafth effect played');


   
        if (enemy.isSpecial) {
            scene.coins.spawnForKill(enemy.x, enemy.y, scene, 2)
        }
    
    //--

    scene.splashes.spawn(enemy.x, enemy.y, enemy.sprite.height, enemy.isSpecial);

    if (enemy.sprite.texture.key == 'sheet_enemy_boss_1') {
        scene.enemySplashesSfx.play()
        const particles = scene.add.particles(0, 0, 'red-flares', {
            frame: 'red',
            x: enemy.x,
            y: enemy.y,
            speed: { min: 200, max: 600 },
            angle: { min: -90 - 10, max: -90 + 10 },
            lifespan: 800,
            gravityY: 0,
            scale: { start: 0.2, end: 0.3 },
            alpha: { start: 0.1, end: 0 },
            // frequency: 100,
            quantity: 15

        });
        scene.tweens.add({
            targets: particles,
            alpha: { from: 1, to: 0 },
            duration: 800,
            ease: 'Cubic.easeOut',
            onComplete: () => {

            }
        });
        scene.time.delayedCall(800, () => particles.destroy());
    } else {
        // scene.enemySplatSfx.play()
        const rndScale = Phaser.Math.FloatBetween(0.2, 0.25)
        const rndAlpha = Phaser.Math.FloatBetween(0.05, 0.1)

        const rndSpeed = Phaser.Math.Between(150, 320)
        const colors = ['yellow', 'white', 'red', 'blue', 'green']

        const particles = scene.add.particles(0, 0, 'red-flares', {
            frame: colors[Phaser.Math.Between(0, colors.length - 1)],
            x: enemy.x,
            y: enemy.y,
            speed: { min: rndSpeed, max: rndSpeed * 1.5 },
            // angle: { min: -90 - 10, max: -90 + 10 },
            lifespan: 800,
            gravityY: 0,
            scale: { start: rndScale, end: rndScale * 1.5 },
            alpha: { start: rndAlpha, end: 0 },
            // frequency: 100,
            quantity: 15

        });
        scene.tweens.add({
            targets: particles,
            alpha: { from: 1, to: 0 },
            duration: 800,
            ease: 'Cubic.easeOut',
            onComplete: () => {

            }
        });
        scene.time.delayedCall(800, () => particles.destroy());
    }

    enemy.sprite.stop();
    enemy.sprite.setTintFill(0xffffff)
    // scene.cameras.main.flash(200, 255, 255, 255); flash screen
    scene.tweens.add({
        targets: enemy.shadow,
        alpha: { from: 1, to: 0 },
        duration: 300,
        ease: 'Cubic.easeOut',
        onComplete: () => {

        }
    });
    // 3. Мягкое затухание и уничтожение
    scene.tweens.add({
        targets: enemy.sprite,
        scale: { from: 1, to: 1.4 },
        alpha: { from: 1, to: 0.3 },
        duration: 300,
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