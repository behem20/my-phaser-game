import levels from "../levelsConfigs.js";

export default class HUD {
    constructor(scene, levelDuration, onLevelComplete) {
        this.scene = scene;
        this.levelDuration = levelDuration;
        this.onLevelComplete = onLevelComplete;

        this.score = 0;
        this.exp = 0;
        this.coins = 0;
        this.lives = 10;
        this.elapsedTime = 0;

        const style = { fontSize: "20px", fill: "#fff" };
        // this.scoreText = scene.add.text(10, 10, "", style).setScrollFactor(0).setDepth(13);
        // this.livesText = scene.add.text(10, 40, "", style).setScrollFactor(0).setDepth(13);
        this.headBGRect = scene.add.rectangle(0, 0, 800, 40, 0x000000, 0.6).setScrollFactor(0).setOrigin(0, 0).setDepth(11)
        this.coinsText = scene.add.text(40, 15, "", { fontSize: "20px", fill: "rgba(255, 255, 255, 1)" }).setScrollFactor(0).setDepth(13);
        this.coinsImage = scene.add.image(20, 23, 'coin').setScrollFactor(0).setDepth(13).setScale(0.7);

        this.timeText = scene.add.text(400, 23, "", style).setScrollFactor(0).setDepth(13).setOrigin(0.5);;
        this.debugText = scene.add.text(10, 40, "", { fontSize: "10px", fill: "#fff" }).setScrollFactor(0).setDepth(13);
        this.expProgressBarBg = scene.add.graphics();
        this.expProgressBarFill = scene.add.graphics().setDepth(13);
        this.expProgressBarBg.fillStyle(0x000000, 0.8).setDepth(12);              //0x115577
        this.expProgressBarBg.fillRect(0, 0, 800, 10).setScrollFactor(0);
        this.updateExpProgress();


        this.updateAll();
    }
    pause() {
        this.scene.gameTimer.paused = true;
    }
    resume() {
        this.scene.gameTimer.paused = false;
    }
    updateAll() {
        this.updateScore();
        this.updateLives();
        this.updateCoins();
        this.updateExp()
        this.timeText.setText(this.elapsedTime);
    }
    updateDebug(x, y) {
        this.debugText.setText(`X: ${x.toFixed(0)}, Y: ${y.toFixed(0)}`);
    }
    updateScore() {
        // this.scoreText.setText("Score: " + this.score);
    }
    addScore(amount = 1) {
        this.score += amount;
        this.updateScore();
    }
    addLives(amount = 1) {
        if (this.lives > 9) {
            return;
        } else if (this.lives + amount > 9) {
            this.lives = 10;
            this.updateLives()
        } else {
            this.lives += amount;
            this.updateLives()
        }


    }
    updateLives() {
        // this.livesText.setText("Lives: " + this.lives);
    }
    minusLives() {
        this.lives -= 1;
        this.updateLives();
    }
    updateCoins() {
        this.coinsText.setText(this.coins);
    }
    clearCoins() {
        this.coins = 0;
        this.updateCoins()
    }
    addCoins(amount = 1) {
        this.coins += amount;

        this.updateCoins();
    }
    updateExp() {

    }
    addExp() {
        this.exp++;
        this.updateExpProgress()

    }
    clearExp() {
        this.exp = 0;
        this.updateExpProgress()
    }



    updateExpProgress() {
        const progress = Phaser.Math.Clamp(
            this.exp / (
                levels[this.scene.registry.get('currentLevel')].levelConfigs.expToUpgrade *
                levels[this.scene.registry.get('currentLevel')].levelConfigs.coefficientToUpgradeLevel
            ),
            0,
            1
        );

        const width = 800 * progress;

        // Основной бар
        this.expProgressBarFill.clear();
        this.expProgressBarFill.fillStyle(0x00A2E8, 1); //0xff3477
        this.expProgressBarFill.fillRect(0, 0, width, 10).setScrollFactor(0);

        // Эффект бегущей полосы
        const glow = this.scene.add.graphics().setScrollFactor(0).setDepth(100);
        glow.fillStyle(0xffffff, 0.8);
        glow.fillRect(0, 0, 30, 10); // ширина полоски 20 пикселей

        glow.x = 0;
        glow.y = 0;

        this.scene.tweens.add({
            targets: glow,
            x: width - 30,
            duration: 300,
            ease: 'Cubic.easeOut',
            onComplete: () => glow.destroy()
        });
    }
}   