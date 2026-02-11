export default class AudioManager {
    constructor(scene) {
        this.scene = scene;

        this.sfx = {
            magicShootSfx: this.scene.sound.add('magicShootSound', { volume: 1.5 }),
            lightShootSfx: this.scene.sound.add('lightShootSound', { volume: 0.03 }),
            fireShootSfx: this.scene.sound.add('fireShootSound', { volume: 0.4 }),
            hailShootSfx: this.scene.sound.add('hailShootSound', { volume: 0.1 }),
            enemyHitSfx: this.scene.sound.add('enemyHitSound', {
                volume: Phaser.Math.FloatBetween(0.1, 0.2),
                rate: Phaser.Math.FloatBetween(0.7, 1.1)
            }),

            // enemySplatSfx: this.scene.sound.add('enemySplatSound', { volume: Phaser.Math.Between(1, 2), rate: Phaser.Math.FloatBetween(0.7, 1.1) }),
            // enemySplashesSfx: this.scene.sound.add('splashesSound', { volume: Phaser.Math.Between(1, 3) }),

            lastShootSoundTime: 0,
            lastSatelliteHitTime: 0,
            lightningShootSfx: this.scene.sound.add('lightningShootSound', { volume: Phaser.Math.FloatBetween(0.1, 0.3) }),
            thunderLevelUpSfx: this.scene.sound.add('thunderLevelUpSound', { volume: 0.35 }),
            fireAuraSfx: this.scene.sound.add('fireAuraHitSound', { volume: 0.2 }),
            onTapSfx: this.scene.sound.add('onTapSound', { volume: 0.1 }),
            onHoverSfx: this.scene.sound.add('hoverSound', { volume: 0.1 }),
            openChestSfx: this.scene.sound.add('openChestSound', { volume: 1 }),
            levelUpSfx: this.scene.sound.add('levelUpSound', { volume: 0.3 }),
            levelStartSfx: this.scene.sound.add('levelStartSound', { volume: 1 }),
            gameBGSoundSfx: this.scene.sound.add('gameBGSound', { volume: 1, loop: true }),
            fireShootCollisionSfx: this.scene.sound.add('fireShootCollisionSound', { volume: 0.05 }),
            satelliteStartSoundSfx: this.scene.sound.add('satelliteStartSound', { volume: 1, loop: true }),
            satelliteHitSoundsSfx: this.scene.sound.add('satelliteCollisionSound', {
                volume: Phaser.Math.FloatBetween(0.9, 1),
                rate: Phaser.Math.FloatBetween(0.5, 1.15)
            }),
            lastTornadoSoundTime: 0,
            tornadoStartSoundSfx: this.scene.sound.add('tornadoStartSound', { volume: 0.05 }),
            coinCollectSoundSfx: this.scene.sound.add('coinCollectSound', {
                volume: Phaser.Math.FloatBetween(0.1, 0.2),
                rate: Phaser.Math.FloatBetween(0.9, 1.1)
            }),
            HPCollectSoundSfx: this.scene.sound.add('playerCollectHP', {
                volume: Phaser.Math.FloatBetween(0.9, 1),
                rate: Phaser.Math.FloatBetween(0.9, 1.1)
            }),
            playerMoveSfx: this.scene.sound.add('playerMoveSound', { volume: 1 }),

        };
    }

    play(type, cfg = {}) {
        this.sfx[type]?.play(cfg);
    }
    stop(type) {
        this.sfx[type]?.stop()
    }
    isPlaying(type) {
        return this.sfx[type]?.isPlaying
    }
}