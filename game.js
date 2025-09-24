import CompleteLevelScene from './scenes/CompleteLevelScene.js'
import GameOverScene from './scenes/GameOverScene.js'
import GameScene from './scenes/GameScene.js'
import InChestScene from './scenes/InChestScene.js'
import MenuScene from './scenes/MenuScene.js'
import MusicScene from './scenes/MusicScene.js'
import MetaUpgradesScene from './scenes/MetaUpgradesScene.js'
import UpgradeForExpScene from './scenes/UpgradeForExpScene.js'
import PreloaderScene from './scenes/PreloaderScene.js'


export function startGame() {
    // Если игра уже существует, уничтожаем её полностью
    // Если существует старый экземпляр Phaser — уничтожаем
    if (window.game && typeof window.game.destroy === 'function') {
        window.game.destroy(true); // true — удаляет canvas
        window.game = null;
    }
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 800,
        backgroundColor: "#123",
        physics: {
            default: "arcade",
            arcade: {
                debug: 0
            }
        },
        scale: {
            mode: Phaser.Scale.RESIZE, // подстраиваемся под размер экрана
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        scene: [
            PreloaderScene,
            MenuScene,
            GameScene,
            GameOverScene,
            CompleteLevelScene,
            MusicScene,
            UpgradeForExpScene,
            InChestScene,
            MetaUpgradesScene
        ],
        plugins: {
            scene: [
                {
                    key: 'rexVirtualJoystick',
                    plugin: rexvirtualjoystickplugin,
                    mapping: 'rexVirtualJoystick'
                }
            ]
        }
    }

    // Создаём новую игру
    window.game = new Phaser.Game(config);
    window.game.ysdk = window.ysdk;
}
