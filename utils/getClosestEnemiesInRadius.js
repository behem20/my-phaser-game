export function getClosestEnemiesInRadius(source, targets, count) {
  
    return targets
        .filter(t => t.active) // Только живые
         .filter(t => Phaser.Math.Distance.Between(source.x, source.y, t.x, t.y)<400) 
        .map(target => ({
            target,
            distance: Phaser.Math.Distance.Between(source.x, source.y, target.x, target.y)
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, count)
        .map(entry => entry.target);
}