import { playLevelUpEffect } from "../playLevelUpEffect.js";
import { playerSkills } from "../upgradesManager.js";

function levelUp() {
    this.hud.clearExp();
    this.skillsUI.hideTooltip()
    this.scene.pause();
    this.scene.launch("UpgradeForExpScene", {
        scene: this,
        upgrades: playerSkills.allSkills,// allSkills// генерируешь 3 апгрейда
        onSelect: (upgrade) => {
            upgrade.applyUpgrade(this); // логика применения
            playLevelUpEffect(this, this.player)
        }
    });
    
    this.level.currentLevel.levelConfigs.levelUpPointsCount++;
    this.level.currentLevel.levelConfigs.coefficientToUpgradeLevel++;

}


export default levelUp