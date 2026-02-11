export class HPBar {
    constructor(scene, parent, width = 48, height = 4) {
        this.scene = scene
        this.parent = parent


        this.width = parent.width*0.7 

        this.height = height

        this.graphics = scene.add.graphics()
        this.graphics.setDepth(100)
        this.graphics.setVisible(false)
    }
    show() {

        this.graphics.setVisible(true)

        if (this.hideHpBarTimer) {
            this.hideHpBarTimer.remove(false)
            this.hideHpBarTimer = null
        }

        this.hideHpBarTimer = this.scene.time.delayedCall(1700, () => {
            this.graphics.setVisible(false)
            this.hideHpBarTimer = null
        })
    }
    update(currentHp, maxHp) {
        const x = this.parent.x - this.width / 2
        const y = this.parent.y + this.parent.height * 0.5

        // console.log(this.maxHp);

        const percent = Phaser.Math.Clamp(currentHp / maxHp, 0, 1)

        this.graphics.clear()

        // фон
        this.graphics.fillStyle(0x000000, 0.3)
        this.graphics.fillRect(x, y, this.width, this.height)

        // hp
        this.graphics.fillStyle(0xff0000, 0.6)
        this.graphics.fillRect(x, y, this.width * percent, this.height)

    }

    destroy() {
        this.graphics.destroy()
    }
}