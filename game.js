import CompleteLevelScene from './scenes/CompleteLevelScene.js'
import GameOverScene from './scenes/GameOverScene.js'
import GameScene from './scenes/GameScene.js'
import InventoryScene from './scenes/InventoryScene.js'
import MenuScene from './scenes/MenuScene.js'
import MusicScene from './scenes/MusicScene.js'
import ShopScene from './scenes/ShopScene.js'
import UpgradeForExpScene from './scenes/UpgradeForExpScene.js'

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
    scene: [
        MenuScene,
        GameScene,
        GameOverScene,
        CompleteLevelScene,
        MusicScene,
        UpgradeForExpScene,
        InventoryScene,
        ShopScene
    ]
}

const game = new Phaser.Game(config)