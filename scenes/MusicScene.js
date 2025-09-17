export default class MusicScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MusicScene', active: true })
    }
    preload() {
        this.load.audio('bgMusic', './game/assets/music/gameSceneMusic.mp3')
    }
    create() {
        if (!this.sound.get('bgMusic')) {
            const music = this.sound.add('bgMusic', { loop: true, volume: 0.02 });
            music.play();
        }
    }
}