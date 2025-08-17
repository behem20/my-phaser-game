export function flashScreen(scene, color = 0x99ccff, transparent = 1, duration = 100,) {
    // Создаём белый прямоугольник на весь экран
    const flash = scene.add.rectangle(
        scene.cameras.main.centerX,
        scene.cameras.main.centerY,
        scene.cameras.main.width,
        scene.cameras.main.height,
        color, // цвет белый
        transparent        // непрозрачность
    );
    flash.setScrollFactor(0); // чтобы не двигался с камерой
    flash.setDepth(999);      // поверх всего

    // Плавно убираем за 'duration' миллисекунд
    scene.tweens.add({
        targets: flash,
        alpha: 0,
        duration: duration,
        onComplete: () => flash.destroy()
    });
}