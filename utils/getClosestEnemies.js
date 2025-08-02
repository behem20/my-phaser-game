export function getClosestEnemies(source, targets, count) {
  
    return targets
        .filter(t => t.active) // Только живые
        .map(target => ({
            target,
            distance: Phaser.Math.Distance.Between(source.x, source.y, target.x, target.y)
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, count)
        .map(entry => entry.target);
}