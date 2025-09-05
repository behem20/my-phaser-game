
import { getHUD } from "./hudManager.js";
import { updateCooldownTimers } from "./updateCooldownTimers.js";
import { playerSkills } from "./upgradesManager.js";

export const playerItems = {
    activeItemsCount: 0,
    harp: {
        name: 'harp',
        description: 'itemsDiscription.harp',
        rank: 'common',
        icon: 'harp',
        isActive: false,
        applyItem(player) {
            this.isActive = true
            player.magicsDurationBonus *= 1.25;
            

        }
    },
    hourglass: {
        name: 'hourglass',
        description: 'itemsDiscription.hourglass',
        rank: 'rare',
        icon: 'hourglass',
        isActive: false,
        applyItem(player, scene) {
            this.isActive = true
            player.cooldownReductionBonus += 0.15
            updateCooldownTimers(scene, playerSkills.allSkillsForItems)
           

        }
    },
    broom: {
        name: 'broom',
        description: 'itemsDiscription.broom',
        rank: 'common',
        icon: 'broom',
        isActive: false,
        applyItem(player) {
            this.isActive = true
            player.moveSpeedBonus *= 1.2;
            

        }
    },
    lightningRod: {
        name: 'lightningRod',
        description: 'itemsDiscription.lightningRod',
        rank: 'uncommon',
        icon: 'lightningRod',
        isActive: false,
        applyItem(player) {
            this.isActive = true
            player.lightningCountBonus++;
        

        }
    },
    torch: {
        name: 'torch',
        description: 'itemsDiscription.torch',
        rank: 'rare',
        icon: 'torch',
        isActive: false,
        applyItem(player) {
            this.isActive = true
            player.fireDamageBonus *= 1.35;
            

        }

    },
    ring: {
        name: 'ring',
        description: 'itemsDiscription.ring',
        rank: 'epic',
        icon: 'ring',
        isActive: false,
        applyItem(player) {
            this.isActive = true
            player.damageBonus *= 1.2;
            

        }
    },
    bagOfGold: {
        name: 'bagOfGold',
        description: 'itemsDiscription.bagOfGold',
        rank: 'legendary',
        icon: 'bagOfGold',
        isActive: false,
        applyItem(player) {
            // this.isActive = true
            // player.damageBonus *= 1.2;
            getHUD().addCoins(50)

        }
    },
    stoneOfMalick: {
        name: 'stoneOfMalick',
        description: 'itemsDiscription.stoneOfMalick',
        rank: 'common',
        icon: 'stoneOfMalick',
        isActive: false,
        applyItem(player, scene) {
            // this.isActive = true
            scene.levels[scene.registry.get('currentLevel')].levelConfigs.dropCoinsAmount += 1
            

        }
    },
    stars: {
        name: 'stars',
        description: 'itemsDiscription.stars',
        rank: 'epic',
        icon: 'stars',
        isActive: false,
        applyItem(player, scene) {
            // this.isActive = true
            scene.levels[scene.registry.get('currentLevel')].levelConfigs.addExpAmountPerKillAmount += 0.1


        }
    },

    get allItems() {
        return [
            this.broom,
            this.harp,
            this.hourglass,
            this.lightningRod,
            this.torch,
            this.ring,
            this.bagOfGold,
            this.stars,
            this.stoneOfMalick
        ]
    },
    get nonActiveItems() {
        return this.allItems.filter(item => item.isActive == false)
    },
    setAllItemsIsActiveStatus() { 
        this.allItems.forEach(item => item.isActive = false)
    },
    getRandomItems(scene) {

        const result = []

        while (result.length < 3) {

            const randomIndex = Phaser.Math.Between(0, this.nonActiveItems.length - 1);
            const item = this.nonActiveItems[randomIndex];

            if (!result.includes(item)) {
                result.push(item);
            }
        }
      

        return result

    }
}
