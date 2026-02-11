import originalLevels from "../../../levelsConfigs.js";
import Background from "./Background.js";

export default class Level {
    constructor(scene) {
        this.scene = scene
        this.levels = JSON.parse(JSON.stringify(originalLevels))
        this.currentLevelIndex = this.scene.registry.get('currentLevel')
        this.currentLevel = this.levels[this.currentLevelIndex]
        this.background = new Background(this.scene, this.currentLevel.levelConfigs.backGround)
    }
    update() {
        this.background.update()
    }
}