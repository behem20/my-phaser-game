export default function initGroups(scene) {
    scene.magicShots = scene.physics.add.group({
        maxSize: 500,
        runChildUpdate: true
    });
    scene.lightShots = scene.physics.add.group()
    scene.lightningShots = scene.physics.add.group()
    scene.fireShots = scene.physics.add.group()
    scene.fireAuraShots = scene.physics.add.group()
    scene.hailShots = scene.physics.add.group()
    scene.tornadoGroup = scene.physics.add.group({
        classType: Phaser.Physics.Arcade.Sprite,
        maxSize: 200,
        runChildUpdate: false
    });

}