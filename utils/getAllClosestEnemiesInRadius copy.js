export function getAllClosestEnemiesInRadius(source, targets, radius) {
  
    return targets
        .filter(t => t.active) // Только живые
         .filter(t => Phaser.Math.Distance.Between(source.x, source.y, t.x, t.y)<radius) 
        .map(target => ({
            target,
            distance: Phaser.Math.Distance.Between(source.x, source.y, target.x, target.y)
        }))
        .sort((a, b) => a.distance - b.distance)
        .map(entry => entry.target);
}