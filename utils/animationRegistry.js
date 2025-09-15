
export function loadAllAnimations(scene) {
    const animations = [
        {   //coins
            key: 'coins_bot_anim',
            frames: scene.anims.generateFrameNumbers('coins_bot_sheet', { start: 0, end: 3 }),
            frameRate: 6,
            repeat: -1
        },
         {   //coins
            key: 'coins_mid_anim',
            frames: scene.anims.generateFrameNumbers('coins_mid_sheet', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        },
         {   //coins
            key: 'coins_top_anim',
            frames: scene.anims.generateFrameNumbers('coins_top_sheet', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        },

        {   //enemies 
            key: 'enemy_normal_1',
            frames: scene.anims.generateFrameNumbers('sheet_enemy_normal_1', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        },
        {
            key: 'enemy_fast_1',
            frames: scene.anims.generateFrameNumbers('sheet_enemy_fast_1', { start: 0, end: 3 }),
            frameRate: 12,
            repeat: -1
        },
        {
            key: 'enemy_tank_1',
            frames: scene.anims.generateFrameNumbers('sheet_enemy_tank_1', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        },
        {
            key: 'enemy_boss_1',
            frames: scene.anims.generateFrameNumbers('sheet_enemy_boss_1', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        },
         {   //enemies mid
            key: 'enemy_midNormal_1',
            frames: scene.anims.generateFrameNumbers('sheet_enemy_midNormal_1', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        },
        {
            key: 'enemy_midFast_1',
            frames: scene.anims.generateFrameNumbers('sheet_enemy_midFast_1', { start: 0, end: 3 }),
            frameRate: 12,
            repeat: -1
        },
        {
            key: 'enemy_midTank_1',
            frames: scene.anims.generateFrameNumbers('sheet_enemy_midTank_1', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        },
        {
            key: 'enemy_midBoss_1',
            frames: scene.anims.generateFrameNumbers('sheet_enemy_midBoss_1', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        },

        {   //hail  
            key: 'hailStartAnim',
            frames: scene.anims.generateFrameNumbers('hailStartAnims', { start: 0, end: 8 }),
            frameRate: 32,
            repeat: 0
        },
        {
            key: 'hailActiveAnim',
            frames: scene.anims.generateFrameNumbers('hailActiveAnims', { start: 0, end: 7 }),
            frameRate: 32,
            repeat: 0
        },
        {
            key: 'hailEndingAnim',
            frames: scene.anims.generateFrameNumbers('hailEndingAnims', { start: 0, end: 17 }),
            frameRate: 32,
            repeat: 0
        },

        {   //fire
            key: 'fireAnim',
            frames: scene.anims.generateFrameNumbers('fireAnims', { start: 0, end: 7 }),
            frameRate: 24,
            repeat: -1
        },
        {   //fire
            key: 'fireAnim_2',
            frames: scene.anims.generateFrameNumbers('fireAnims_2', { start: 0, end: 7 }),
            frameRate: 24,
            repeat: -1
        },
        {
            key: 'fireExplosionAnim',
            frames: scene.anims.generateFrameNumbers('fireExplosionAnims', { start: 0, end: 10 }),
            frameRate: 24,
            repeat: 0
        },

        {
            key: 'fireAuraAnim',
            frames: scene.anims.generateFrameNumbers('fireAuraAnims', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        },

        {   //tornado
            key: 'tornadoAnims',
            frames: scene.anims.generateFrameNumbers('tornadoAnims', { start: 0, end: 5 }),
            frameRate: 24,
            repeat: -1
        },
        {   //tornado_2
            key: 'tornadoAnims_2',
            frames: scene.anims.generateFrameNumbers('tornadoAnims_2', { start: 0, end: 5 }),
            frameRate: 24,
            repeat: -1
        },

        {
            key: 'idle',
            frames: scene.anims.generateFrameNumbers('player_idle', { start: 0, end: 3 }),
            frameRate: 4,
            repeat: -1
        },

        // Walk Up
        {
            key: 'walk_up',
            frames: scene.anims.generateFrameNumbers('player_walk_up', { start: 0, end: 3 }),
            frameRate: 6,
            repeat: -1
        },

        // Walk Down
        {
            key: 'walk_down',
            frames: scene.anims.generateFrameNumbers('player_walk_down', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        },

        // Walk Left
        {
            key: 'walk_left',
            frames: scene.anims.generateFrameNumbers('player_walk_left', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        },

        // Walk Right
        {
            key: 'walk_right',
            frames: scene.anims.generateFrameNumbers('player_walk_right', { start: 0, end: 3 }),
            frameRate: 6,
            repeat: -1
        },


    ];

    animations.forEach(anim => {
        if (!scene.anims.exists(anim.key)) {
            scene.anims.create(anim);
        }
    });
}