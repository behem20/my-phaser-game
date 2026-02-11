import { playerItems } from "../itemsManager.js";

function openChest() {
    this.scene.pause();
            this.scene.launch("InChestScene", {
                scene: this,
                items: playerItems.allItems,
                onSelect: (item) => {
                    item.applyItem(this.player.playerInitCfgs, this)
                }
            });

}
export default openChest