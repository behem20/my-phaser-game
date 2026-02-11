import { t } from "../LanguageManager.js";

export function playLevelStartEffect(scene, player) {

    //text
    const isLastLevel = scene.registry.get('currentLevel') == 6



    scene.audio.play('levelStartSfx')
    const levelStartText = scene.add.text(scene.cameras.main.centerX, scene.cameras.main.centerY - 150,
        isLastLevel ? t('game.goal20') : t('game.goal'), {
        fontSize: "56px",
        fill: "rgba(255, 0, 0, 1)",
        // backgroundColor: "#333",
        padding: { x: 10, y: 5 }
    }).setScrollFactor(0).setOrigin(0.5).setDepth(2000)
    scene.tweens.add({
        targets: levelStartText,
        alpha: { from: 1, to: 0 },
        scale: { from: 1, to: 1.6 },
        duration: 5800,
        onComplete: () => {
            levelStartText.destroy();

        }
    });


    // ✨ свечение/аура
    const aura = scene.add.circle(player.x, player.y, 700, 0xff66ff, 0.4)
        .setDepth(100);
    scene.tweens.add({
        targets: aura,
        alpha: { from: 0.4, to: 0 },
        scale: { from: 1, to: 1.6 },
        duration: 800,
        onComplete: () => aura.destroy()
    });
}