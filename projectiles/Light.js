export function shootLight(scene, player, lightGroup, level) {

    
    for (let i = 0; i <= level; i++) {
        const light = lightGroup.create(player.x, player.y, "light");
        if (!light) return;
        scene.lightShootSfx.play();
        light.body.allowGravity = false;

        const angle = Phaser.Math.FloatBetween(0, Math.PI * 2); // случайное направление
        const speed = 2500;

        scene.physics.velocityFromRotation(angle, speed, light.body.velocity);
        player.attackTextureOnce();

        scene.time.delayedCall(1000, () => {
            if (light.active) {
                light.destroy()
            }
        });
    }

}