function teleportTo() {
    const p = this.input.activePointer;
    const cam = this.cameras.main;
    const worldPoint = cam.getWorldPoint(p.x, p.y);

    this.particles.list.teleportTo.explode(16, this.player.sprite.x, this.player.sprite.y)
    this.time.delayedCall(150, () => {
        this.player.sprite.x = worldPoint.x
        this.player.sprite.y = worldPoint.y
    })
    this.particles.list.teleportTo.explode(16, worldPoint.x, worldPoint.y)
}
export default teleportTo