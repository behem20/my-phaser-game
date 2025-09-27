export class MagnetSkill {
    /**
     * @param {Phaser.Scene} scene - сцена
     * @param {Phaser.GameObjects.Sprite} player - игрок
     * @param {Phaser.Physics.Arcade.Group} coinsGroup - группа монет
     * @param {object} config - настройки
     */
    constructor(scene, player, coinsGroup, config = {}) {
        this.scene = scene;
        this.player = player;
        this.coinsGroup = coinsGroup;

        this.radius = config.radius || 150;      // финальный радиус
        this.speed = config.speed || 200;
        this.duration = config.duration || 5000;

        this.active = false;

        // Эффект: круг с маленьким радиусом и прозрачностью
        this.effect = this.scene.add.circle(player.x, player.y, 0, 0x00ffff, 0.5);
        this.effect.setVisible(false);
    }

    // Включение магнита
    activate() {
        if (this.active) return;
        this.active = true;
        this.effect.setVisible(true);
        this.effect.setRadius(0);
        this.effect.setAlpha(0.5);

        // Анимация круга: растёт и затухает
        this.scene.tweens.add({
            targets: this.effect,
            radius: this.radius,
            alpha: 0,          // постепенно исчезает
            duration: this.duration,
            ease: 'Cubic.easeOut',
            onComplete: () => this.deactivate()
        });
    }

    // Выключение магнита
    deactivate() {
        this.active = false;
        this.effect.setVisible(false);
    }

    // Вызывать в update сцены
    update() {
        if (!this.active) return;

        // Обновляем позицию эффекта на игроке
        this.effect.setPosition(this.player.x, this.player.y);

        // Притягиваем монеты
        this.coinsGroup.getChildren().forEach(coin => {
            if (!coin.active) return;

            const dist = Phaser.Math.Distance.Between(this.player.x, this.player.y, coin.x, coin.y);
            if (dist <= this.effect.radius) { // используем текущий радиус анимации
                const angle = Phaser.Math.Angle.Between(coin.x, coin.y, this.player.x, this.player.y);
                this.scene.physics.velocityFromRotation(angle, this.speed, coin.body.velocity);
            }
        });
    }
}