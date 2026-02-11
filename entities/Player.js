
import originalPlayerInitCfgs from "../PlayerConfigs.js";
import { playerSkills } from "../utils/upgradesManager.js";

export default class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        this.gAura = 0
        // Создаем физический спрайт
        this.sprite = scene.ui.createPhysicSprite('player_idle', { xPercent: 0, yPercent: 0, scalePercent: 0.08 })
        // this.sprite = scene.physics.add.sprite();
        

        this.shadow = scene.add.sprite(this.sprite.x, this.sprite.y + 10, 'shadow').setScale(0.3).setAlpha(0.3);
        this.shadow.setDepth(-1);
        this.sprite.setCollideWorldBounds(true);

        //fire aurs spell
        this.fireAuraBGParticles = scene.add.particles(this.sprite.x, this.sprite.y, 'red-flares', {
            frame: 'red',
            lifespan: 720,
            // speed: 360,
            speed: { min: 60, max: 220 },
            angle: { start: 0, end: 360, steps: 24 },
            scale: { start: 0.3, end: 1 },
            alpha: { start: 0.55, end: 0 },
            frequency: -1, // частота появления
            // quantity: 30,
            tint: [0xff6633, 0xff3322, 0xdd5522],
            // tint: [0xff6633, 0xff3322, 0xddee22],
            // tint: [0xff66FF, 0x2200FF],
            blendMode: 'SCREEN'
            // blendMode: 'ADD',

        }).setDepth(-1);

        this.stepParticles = scene.add.particles(0, 0, 'flares', {
            frame: 'yellow',
            speed: 10,
            // speed: { min: 100, max: 260 },
            scale: { start: 0.25, end: 0.1 },
            alpha: { start: 0.6, end: 0 },
            lifespan: 800,
            frequency: 100, // частота появления
            tint: [0xff33ff, 0xff8800],
            follow: this.sprite, // следят за игроком
            followOffset: { x: 0, y: 16 }, // смещение вниз (как бы от ног)
            blendMode: 'ADD'
        }).setDepth(-1);



        // Камера следует за игроком
        scene.cameras.main.startFollow(this.sprite, false, 1, 1);

        // Клавиши
        this.cursors = scene.input.keyboard.createCursorKeys();

        this.wasd = scene.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });

        // this.joystick = scene.rexVirtualJoystick.add(scene, {
        //     x: scene.cameras.main.width * 0.5,
        //     y: scene.cameras.main.height * 0.85,
        //     radius: scene.cameras.main.width * 0.3,
        //     base: scene.add.circle(0, 0, scene.cameras.main.width * 0.2, 0x888888).setAlpha(0.5),
        //     thumb: scene.add.circle(0, 0, scene.cameras.main.width * 0.1, 0x333333).setAlpha(0.5),
        // });//joysick
        // this.cursorKeys = this.joystick.createCursorKeys();

        let controller = scene.rexVirtualJoystick.addVectorToCursorKeys({
            dir: '8dir',
            forceMin: 16
        });
        this.cursorKeys = controller.createCursorKeys();
        this.scene.input
            .on('pointerup', function () {
                controller.clearVector();
            })
            .on('pointermove', function (pointer) {
                if (!pointer.isDown) {
                    controller.clearVector();
                    return;
                }
                controller.setVector(pointer.downX, pointer.downY, pointer.x, pointer.y);
            });


        // Текущее направление для оптимизации (чтобы не перезапускать анимацию каждый тик)
        this.currentAnim = null;


        this.playerInitCfgs = JSON.parse(JSON.stringify(originalPlayerInitCfgs));
    }

    update() {

        const speed =
            this.scene.level.currentLevel.playerConfigs.speed * this.playerInitCfgs.moveSpeedBonus * 1;//!

        let moveX = 0;
        let moveY = 0;

        if (this.cursors.left.isDown || this.wasd.left.isDown || this.cursorKeys.left.isDown) {

            moveX = -1;
        } else if (this.cursors.right.isDown || this.wasd.right.isDown || this.cursorKeys.right.isDown) {
            moveX = 1;
        }

        if (this.cursors.up.isDown || this.wasd.up.isDown || this.cursorKeys.up.isDown) {
            moveY = -1;
        } else if (this.cursors.down.isDown || this.wasd.down.isDown || this.cursorKeys.down.isDown) {
            moveY = 1;
        }

        // Нормализация для диагоналей
        const len = Math.hypot(moveX, moveY);
        if (len > 0) {
            moveX /= len;
            moveY /= len;
        }

        // 🎵 Логика звука ходьбы
        if (moveX !== 0 || moveY !== 0) {
            // игрок движется
            if (!this.scene.audio.isPlaying('playerMoveSfx')) {
                this.scene.audio.play('playerMoveSfx', { loop: true, volume: Phaser.Math.FloatBetween(0.07, 0.1) });
            }
            this.stepParticles.start()

        } else {
            // игрок стоит
            if (this.scene.audio.isPlaying('playerMoveSfx')) {
                this.scene.audio.stop('playerMoveSfx');
            }
            this.gAura++;
            this.scene.audio.stop('stepParticles')

        }

        this.sprite.setVelocity(moveX * speed, moveY * speed);
        this.shadow.setPosition(this.sprite.x, this.sprite.y + 20);



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

        //fire aura
        if (playerSkills.fireAura.level > 1) {
            if (!this.fireAuraBGActive) {//BG FIREAURA
                this.fireAuraBGActive = true;
                this.fireAuraBGParticles.setParticleLifespan(playerSkills.fireAura.radius * 6)
                this.fireAuraBGParticles.setPosition(this.sprite.x, this.sprite.y);
                this.fireAuraBGParticles.explode(6);
                // console.log('explode');
                this.scene.time.delayedCall(25, () => {
                    this.fireAuraBGActive = false;
                });
            }



            // this.fireAuraCircle.clear();
            // this.fireAuraCircle.lineStyle(5, 0xff9900, 0.3); // толщина 2, оранжевый, прозрачность 0.8

            // this.fireAuraCircle.strokeCircle(0, 0, playerSkills.fireAura.radius); // радиус 80
            // this.fireAuraCircle.setPosition(this.scene.cameras.main.worldView.centerX, this.scene.cameras.main.worldView.centerY);
            // this.fireAuraCircle.setDepth(5); // чтобы было под игроком

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