import SkillRegistry from "../SkillsRegistry.js";

class SaveManager {
    save(scene) {
       

        const data = {
            coins: scene.registry.get('goldCount') || 10,
            diamonds: scene.registry.get('gemCount') || 4,
            completedLevels: scene.registry.get('completedLevelsList') || [0, 0, 0, 0, 0, 0],
            skillsLevels: scene.registry.get('skillsLevelsObj') || {
                magicLevel: 1,
                fireLevel: 1,
                lightLevel: 1,
                lightningLevel: 1,
                tornadoLevel: 1,
                fireAuraLevel: 1,
                satelliteLevel: 1,
                hailLevel: 1,
                armageddonLevel: 1,
            },
        };
        

        localStorage.setItem('gameSave', JSON.stringify(data));
    }

    load() {
        const data = JSON.parse(localStorage.getItem('gameSave'));

        console.log(data);

        return data || null;
    }
}
const saveManager = new SaveManager();
export default saveManager;