export function flashIcon(scene, iconID) {
    // console.log(scene.skillsUI.icons, iconID);//icon id undefined 

    if (scene.skillsUI.icons[iconID]) {
        scene.skillsUI.icons[iconID].setTint(0x666666); // жёлтая подсветка
        scene.time.delayedCall(100, () => {
            scene.skillsUI.icons[iconID].clearTint();
        });
        scene.tweens.add({
            targets: scene.skillsUI.icons[iconID],
            alpha: 0.1,
            duration: 100,
            yoyo: true
        });
    }
}