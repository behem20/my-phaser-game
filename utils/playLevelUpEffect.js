export function playLevelUpEffect(scene, player) {
    // 🔊 звук
    scene.levelUpSfx.play();
    //text
    // const levelUpText = scene.add.text(scene.cameras.main.centerX, scene.cameras.main.centerY -35, 'lvl up', {
    //     fontSize: "10px",
    //     fill: "rgba(0, 67, 253, 1)",
    //     // backgroundColor: "#333",
    //     padding: { x: 10, y: 5 }
    // }).setScrollFactor(0).setOrigin(0.5)
    // scene.tweens.add({
    //     targets: levelUpText,
    //     y: levelUpText.y - 30,
    //     alpha: { from: 0.8, to: 1 },
    //     scale: { from: 1, to: 3.6 },
    //     duration: 3000,
    //     onComplete: () => levelUpText.destroy()
    // });

    const leftlevelUpImg = scene.add.image(scene.cameras.main.centerX, scene.cameras.main.centerY, 'levelUp').setScrollFactor(0).setOrigin(0).setScale(0.05);
    scene.tweens.add({
        targets: leftlevelUpImg,
        y: leftlevelUpImg.y - 30,
        alpha: { from: 0.7, to: 1 },
        scale: { from: 0.05, to: 0.18 },
        duration:3000,
        onComplete: () => leftlevelUpImg.destroy()
    });
    // const rightlevelUpImg = scene.add.image(370, 360, 'levelUp').setScrollFactor(0).setOrigin(0).setScale(0.1);

    // scene.tweens.add({
    //     targets: rightlevelUpImg,
    //     alpha: { from: 1, to: 0 },
    //     // scale: { from: 1, to: 1.6 },
    //     duration: 800,
    //     onComplete: () => rightlevelUpImg.destroy()
    // });


    // ✨ свечение/аура
    const aura = scene.add.circle(player.x, player.y, 700, 0xffff66, 0.4)
        .setDepth(100);
    scene.tweens.add({
        targets: aura,
        alpha: { from: 0.8, to: 0 },
        scale: { from: 1, to: 1.6 },
        duration: 1300,
        onComplete: () => aura.destroy()
    });

}