export default class Player {
    constructor(scene, x, y) {
        this.scene = scene;

        // Создаем физический спрайт
        this.sprite = scene.physics.add.sprite(x, y, 'player_idle');
        this.shadow = scene.add.sprite(this.sprite.x, this.sprite.y + 10, 'shadow').setScale(0.3).setAlpha(0.3);
        this.shadow.setDepth(-1);
        this.stepParticles = scene.add.particles(0, 0, 'flares', {
            frame: 'red',
            speed: { min: 100, max: 260 },
            scale: { start: 0.1, end: 0.3 },
            alpha: { start: 0.6, end: 0 },
            lifespan: 200,
            frequency: 50, // частота появления
            tint: [0xff0033,],
            follow: this.sprite, // следят за игроком
            followOffset: { x: 0, y: 0 }, // смещение вниз (как бы от ног)
            blendMode: 'DIFFERENCE'
        }).setDepth(-1);
        this.sprite.setCollideWorldBounds(true);

        // Камера следует за игроком
        scene.cameras.main.startFollow(this.sprite);

        // Клавиши
        this.cursors = scene.input.keyboard.createCursorKeys();

        // Текущее направление для оптимизации (чтобы не перезапускать анимацию каждый тик)
        this.currentAnim = null;
    }

    update() {
        const speed = 250;

        let moveX = 0;
        let moveY = 0;

        if (this.cursors.left.isDown) {
            moveX = -1;
        } else if (this.cursors.right.isDown) {
            moveX = 1;
        }

        if (this.cursors.up.isDown) {
            moveY = -1;
        } else if (this.cursors.down.isDown) {
            moveY = 1;
        }

        // Нормализация для диагоналей
        const len = Math.hypot(moveX, moveY);
        if (len > 0) {
            moveX /= len;
            moveY /= len;
        }

        this.sprite.setVelocity(moveX * speed, moveY * speed);
        this.shadow.setPosition(this.sprite.x, this.sprite.y + 20);

        this.stepParticles.on = false; // отключено
        // в update particles
        if (this.sprite.body.velocity.x !== 0 || this.sprite.body.velocity.y !== 0) {
            this.stepParticles.on = true;
        } else {
            this.stepParticles.on = false;
        }





        // 🎬 Выбор анимации
        let newAnim = 'idle';

        if (moveX === 0 && moveY === 0) {
            newAnim = 'idle';
        } else {
            // Если хочешь только 4 направления:
            if (moveY < 0 && moveX === 0) newAnim = 'walk_up';
            else if (moveY > 0 && moveX === 0) newAnim = 'walk_down';
            else if (moveX < 0 && moveY === 0) newAnim = 'walk_left';
            else if (moveX > 0 && moveY === 0) newAnim = 'walk_right';
            // 👇 Если хочешь 8 направлений – добавь свои анимации:
            // else if (moveX < 0 && moveY < 0) newAnim = 'walk_up_left';
            // else if (moveX > 0 && moveY < 0) newAnim = 'walk_up_right';
            // else if (moveX < 0 && moveY > 0) newAnim = 'walk_down_left';
            // else if (moveX > 0 && moveY > 0) newAnim = 'walk_down_right';
        }

        // Запускаем анимацию только если она изменилась
        if (this.currentAnim !== newAnim) {
            this.sprite.play(newAnim, true);
            this.currentAnim = newAnim;
        }
    }

    attackTextureOnce() {
        // пример анимации атаки — можно потом расширить
        // this.sprite.setTexture("player_attack");
        // this.scene.time.delayedCall(100, () => this.sprite.setTexture("player_idle"));
    }

    get x() { return this.sprite.x; }
    get y() { return this.sprite.y; }
    get body() { return this.sprite.body; }
    get active() { return this.sprite.active; }
    get gameObject() { return this.sprite; }
}