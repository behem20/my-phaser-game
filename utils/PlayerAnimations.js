export function createPlayerAnimations(scene) {
    // Idle
    scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNumbers('player_idle', { start: 0, end: 3 }),
        frameRate: 4,
        repeat: -1
    });

    // Walk Up
    scene.anims.create({
        key: 'walk_up',
        frames: scene.anims.generateFrameNumbers('player_walk_up', { start: 0, end: 3 }),
        frameRate: 6,
        repeat: -1
    });

    // Walk Down
    scene.anims.create({
        key: 'walk_down',
        frames: scene.anims.generateFrameNumbers('player_walk_down', { start: 0, end: 3 }),
        frameRate: 8,
        repeat: -1
    });

    // Walk Left
    scene.anims.create({
        key: 'walk_left',
        frames: scene.anims.generateFrameNumbers('player_walk_left', { start: 0, end: 3 }),
        frameRate: 8,
        repeat: -1
    });

    // Walk Right
    scene.anims.create({
        key: 'walk_right',
        frames: scene.anims.generateFrameNumbers('player_walk_right', { start: 0, end: 3 }),
        frameRate: 6,
        repeat: -1
    });

    // ➡️ Добавь сюда диагонали, если подготовишь спрайты:
    // walk_up_left, walk_up_right, и т.д.
}