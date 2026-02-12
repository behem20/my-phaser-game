

export default class HUD {
    constructor(scene, levelDuration, onLevelComplete) {
        this.scene = scene;
        this.levelDuration = levelDuration;
        this.onLevelComplete = onLevelComplete;

        this.centerX = this.scene.cameras.main.width / 2;
        this.centerY = this.scene.cameras.main.height / 2;
        this.x = this.scene.cameras.main.width;
        this.y = this.scene.cameras.main.height;


        this.score = 0;
        this.exp = 0;
        this.coins = 0;

        this.lives = 10;
        this.elapsedTime = 0;

        const style = { fontSize: "20px", fill: "#fff" };
        // this.scoreText = scene.add.text(10, 10, "", style).setScrollFactor(0).setDepth(13);
        // this.livesText = scene.add.text(10, 40, "", style).setScrollFactor(0).setDepth(13);
        this.headBGRect = this.scene.ui.createRectangle(
            { xPercent: 0, yPercent: 0, widthPercent: 1, heightPercent: 0.04 },
            0x000000, 0.6)
            .setScrollFactor(0).setOrigin(0, 0).setDepth(11)
        this.coinsText = scene.ui.createText("",
            { xPercent: 0.09, yPercent: 0.035, fontPercent: 0.025 },
            { fontSize: '20px', color: "rgba(224, 231, 15, 1)" }).setScrollFactor(0).setDepth(13).setOrigin(0, 1);
        this.coinsImage = scene.ui.createImage('coin', { xPercent: 0.04, yPercent: 0.025 }, 0.065).setScrollFactor(0).setDepth(13).setScale(0.7);

        this.timeText = scene.ui.createText("",
            { xPercent: 0.5, yPercent: 0.025, fontPercent: 0.025 },
            { fontSize: '20px', color: '#fff' },).setScrollFactor(0).setDepth(1300).setOrigin(0.5);;
        this.debugText = scene.ui.createText("", { xPercent: 0.6, yPercent: 0.95, fontPercent: 0.02 }, { fill: "#fff" }).setScrollFactor(0).setDepth(13);
        this.expProgressBarBg = scene.add.graphics();
        this.expProgressBarFill = scene.add.graphics().setDepth(13);
        this.expProgressBarBg.fillStyle(0x000000, 0.8).setDepth(12);              //0x115577

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
            this.scene.FXManager.vignette.setAlpha(0);
        } else {
            this.lives += amount;
            this.updateLives()
            this.scene.FXManager.vignette.setAlpha(0);
        }
    }
    updateLives() {
        // this.livesText.setText("Lives: " + this.lives);
    }
    minusLives(amount = 1) {
        this.lives -= amount;
        this.updateLives();
    }
    updateCoins() {
        this.coinsText.setText(this.coins);
    }
    onFinishCoins() {
        return this.coins
    }
    clearCoins() {
        this.coins = 0;
        this.updateCoins()
    }
    addCoins(amount = 1) {
        this.coins += amount;
        this.updateCoins();
    }
    tintCoins() {
        this.scene.tweens.add({
            targets: this.coinsText,
            // alpha: { from: 1, to: 0 },
            scale: { from: 1, to: 1.2 },
            duration: 150,
            ease: 'Cubic.easeOut',
            onComplete: () => {
                this.coinsText.setScale(1)
            }
        });
    }
    updateExp() {
    }
    addExp(amount = 1) {
        this.exp += amount;
        if (!this.expThrottled) {
            this.expThrottled = true;

            this.scene.time.delayedCall(60, () => {
                this.updateExpProgress();
                this.expThrottled = false;
            });
        }
    }
    clearExp() {
        this.exp = 0;
        this.updateExpProgress()
    }
    updateExpProgress() {
        const ch = this.scene.cameras.main.height;
        const cw = this.scene.cameras.main.width;

        const progress = Phaser.Math.Clamp(
            this.exp / (
                this.scene.level.currentLevel.levelConfigs.expToUpgrade *
                this.scene.level.currentLevel.levelConfigs.coefficientToUpgradeLevel
            ),
            0,
            1
        );
        const width = this.scene.cameras.main.width * progress;
        // Основной бар
        this.expProgressBarFill.clear();
        this.expProgressBarFill.fillStyle(0x00A2E8, 1); //0xff3477
        this.expProgressBarBg.fillRect(0, 0, cw, ch * 0.011).setScrollFactor(0)
        this.expProgressBarFill.fillRect(0, 0, width, ch * 0.011).setScrollFactor(0);


    }
}   