let cachedTargets = [];
let lastUpdateTime = 0;


// export function getClosestEnemies(scene,source, targets, count) {
//     const now = scene.time.now;
//     return targets
//         .filter(t => t.active) // Только живые
//         .map(target => ({
//             target,
//             distance: Phaser.Math.Distance.Between(source.x, source.y, target.x, target.y)
//         }))
//         .sort((a, b) => a.distance - b.distance)
//         .slice(0, count)
//         .map(entry => entry.target);


//     //   return targets
//     //     .filter(t => t.active) // Только живые
//     //     .map(target => ({
//     //         target,
//     //         distance: Phaser.Math.Distance.Between(source.x, source.y, target.x, target.y)
//     //     }))
//     //     .sort((a, b) => a.distance - b.distance)
//     //     .slice(0, count)
//     //     .map(entry => entry.target);  
// }

export function getClosestEnemies(scene, source, targets, count) {
    // Массив ближайших целей
    const closest = [];

    for (let i = 0; i < targets.length; i++) {
        const t = targets[i];
        if (!t.active) continue;

        const d = Phaser.Math.Distance.Between(source.x, source.y, t.x, t.y);

        if (closest.length < count) {
            // Добавляем пока не набрали count
            closest.push({ target: t, distance: d });
        } else {
            // Находим самого дальнего
            let maxIndex = 0;
            let maxDistance = closest[0].distance;

            for (let j = 1; j < count; j++) {
                if (closest[j].distance > maxDistance) {
                    maxDistance = closest[j].distance;
                    maxIndex = j;
                }
            }

            // Если текущий враг ближе — заменяем дальнего
            if (d < maxDistance) {
                closest[maxIndex] = { target: t, distance: d };
            }
        }
    }

    // Возвращаем только targets
    return closest.map(e => e.target);
}