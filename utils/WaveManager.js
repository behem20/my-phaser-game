import levels from "../levelsConfigs.js";

export default class WaveManager {
    constructor(scene, levelIndex) {
        this.scene = scene;
        this.waves = levels[levelIndex].wavesConfigs.waves;
        this.delayBetweenWaves = levels[levelIndex].wavesConfigs.delayBetweenWaves;

        this.currentWaveIndex = 0;
        this.enemySpawnTimers = [];  // массив таймеров для групп врагов
        this.nextWaveTimer = null;  // delayedCall для следующей волны
    }

    start() {
        this.scheduleNextWave();
    }

    scheduleNextWave() {
        // если все волны пройдены — выходим
        if (this.currentWaveIndex >= this.waves.length) {
            console.log('✅ Все волны пройдены');
            return;
        }
        // console.log(this.currentWaveIndex); 
        const waveConfig = this.waves[this.currentWaveIndex];

        // для каждой группы в волне запускаем свой таймер спавна
        waveConfig.groups.forEach(group => {
            let spawned = 0;
            // первый спавн сразу
            this.scene.events.emit('spawnEnemy', group.type);
            spawned++;

             console.log('new wave ', this.currentWaveIndex,this.scene.hud.elapsedTime);
            const t = this.scene.time.addEvent({
                delay: group.delayBetweenEnemies,
                callback: () => {
                    if (spawned < group.count) {
                        this.scene.events.emit('spawnEnemy', group.type);
                        spawned++;
                    }
                },
                repeat: group.count - 1
            });

            this.enemySpawnTimers.push(t);
        });

        // планируем следующую волну
        this.currentWaveIndex++;
        this.nextWaveTimer = this.scene.time.delayedCall(this.delayBetweenWaves, () => {
            this.scheduleNextWave();
        });
    }

    /**
     * 🛑 Останавливаем всё: и текущие таймеры, и ожидание следующей волны
     */
    stopAll() {
        // отменяем все таймеры спавна врагов
        this.enemySpawnTimers.forEach(t => {
            if (t && !t.hasDispatched) {
                t.remove(false);
            }
        });
        this.enemySpawnTimers = [];

        // отменяем таймер следующей волны
        if (this.nextWaveTimer && !this.nextWaveTimer.hasDispatched) {
            this.nextWaveTimer.remove(false);
            this.nextWaveTimer = null;
        }
    }

    /**
     * 🔄 Сбросить менеджер для перезапуска уровня
     */
    reset() {
        this.stopAll();
        this.currentWaveIndex = 0;
    }
}