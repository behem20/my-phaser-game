export function openSkillWindow(scene, skillKey, skillsRegistry) {
   
    
    const skillsProgress = scene.registry.get('skills');
    const currentLevel = skillsProgress[skillKey] ?? 0;

    const skillData = skillsRegistry[skillKey];
    const currentStats = skillData.levels[currentLevel];
    const nextStats = skillData.levels[currentLevel + 1];

    // фон окна
    const bg = scene.add.rectangle(400, 300, 300, 200, 0x000000, 0.7)
        .setStrokeStyle(3, 0xffffff);

    // текущий уровень
    let currentText = `Текущий уровень ${currentLevel}\n`;
    for (let key in currentStats) {
        currentText += `${key}: ${currentStats[key]}\n`;
    }
    scene.add.text(320, 250, currentText, { fontSize: "16px", fill: "#fff" });

    if (nextStats) {
        // следующий уровень
        let nextText = `После апгрейда ${currentLevel + 1}\n`;
        for (let key in nextStats) {
            nextText += `${key}: ${nextStats[key]}\n`;
        }
        scene.add.text(520, 250, nextText, { fontSize: "16px", fill: "#0f0" });
    } else {
        scene.add.text(520, 250, "Максимум!", { fontSize: "16px", fill: "#f00" });
    }

    // кнопка покупки
    if (nextStats) {
        const buyBtn = scene.add.text(400, 400, "Улучшить", {
            fontSize: "20px",
            backgroundColor: "#333",
            padding: { x: 10, y: 5 }
        }).setOrigin(0.5).setInteractive();

        buyBtn.on('pointerdown', () => {
            skillsProgress[skillKey] = currentLevel + 1;
            scene.registry.set('skills', skillsProgress);
            bg.destroy();
            buyBtn.destroy();
            // рекурсивно перерисовать окно
            openSkillWindow(scene, skillKey, skillsRegistry);
        });
    }
}