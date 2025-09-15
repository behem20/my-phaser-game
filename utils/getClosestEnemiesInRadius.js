// export function getClosestEnemiesInRadius(scene, source, targets, count, radius = 400) {

//     return targets
//         .filter(t => t.active && Phaser.Math.Distance.Between(source.x, source.y, t.x, t.y) < radius)
//         // .filter(t => t.active) // Только живые
//         // .filter(t => Phaser.Math.Distance.Between(source.x, source.y, t.x, t.y) < radius)
//         .map(target => ({
//             target,
//             distance: Phaser.Math.Distance.Between(source.x, source.y, target.x, target.y)
//         }))
//         .sort((a, b) => a.distance - b.distance)
//         .slice(0, count)
//         .map(entry => entry.target);
// }
export function getClosestEnemiesInRadius(scene, source, targets, count, radius = 400) {
    if (!scene._closestEnemiesCache) {
        scene._closestEnemiesCache = {
            lastUpdate: 0,
            result: []
        };
    }

    const now = scene.time.now; // текущее время сцены
    const cache = scene._closestEnemiesCache;

    if (now - cache.lastUpdate > 200) {
        
        // Обновляем только раз в 200мс
        cache.result = targets
            .filter(t => t.active && Phaser.Math.Distance.Between(source.x, source.y, t.x, t.y) < radius)
            .map(target => ({
                target,
                distance: Phaser.Math.Distance.Between(source.x, source.y, target.x, target.y)
            }))
            .sort((a, b) => a.distance - b.distance)
            .slice(0, count)
            .map(entry => entry.target);

        cache.lastUpdate = now;
    }

    return cache.result;
}