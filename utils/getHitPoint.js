export function getHitPoint(skill, enemy) {
    // Центры
    const x1 = skill.x;
    const y1 = skill.y;
    const x2 = enemy.x;
    const y2 = enemy.y;

    // Вектор от скилла к врагу
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dist = Math.hypot(dx, dy);

    // Нормализация
    const nx = dx / dist;
    const ny = dy / dist;

    // Размеры хитбокса enemy
    const hw = enemy.body.halfWidth;
    const hh = enemy.body.halfHeight;

    // Точка пересечения на стороне enemy
    return {
        x: x2 - nx * hw,
        y: y2 - ny * hh
    };
}