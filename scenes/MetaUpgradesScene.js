import { t } from "../LanguageManager.js";
import SkillRegistry from "../SkillsRegistry.js";
import Tooltip from "../ui/Tooltip.js";
import UIManager from "../ui/UIManager.js";

import { flashScreen } from "../utils/FlashScreen.js";
import saveManager from "../utils/SaveManager.js";


export default class MetaUpgradesScene extends Phaser.Scene {
    constructor(scene) {
        super("MetaUpgradesScene");

    }
    init(data) {
        this.MenuScene = data.scene; // ссылка на старую сцену
    }

    create() {
        this.ui = new UIManager(this);
        this.scale.on('resize', this.ui.resize, this.ui);


        const scene = this;
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;
        const cw = this.cameras.main.width
        const ch = this.cameras.main.height

        this.toolTip = new Tooltip(this)

        this.ui.createRectangle(
            { xPercent: 0, yPercent: 0.0, widthPercent: 1, heightPercent: 1 },
            0x031303, 1)
            .setOrigin(0)
            .setScrollFactor(0);

        const goldTextBg = this.ui.createRectangle(
            { xPercent: 0, yPercent: 0.01, widthPercent: 0.105, heightPercent: 0.05 },
            0xffff00, 0.14).setOrigin(0).setStrokeStyle(2, 0xeeee00);

        const goldText = this.ui.createText(
            this.registry.get('goldCount'),
            { xPercent: 0.1, yPercent: 0.025, fontPercent: 0.03 },
            {
                fontSize: "24px",
                fill: "rgba(238, 234, 0, 1)"
            }).setOrigin(1, 0);
        const goldIcon = this.ui.createImage(
            'gold',
            { xPercent: 0.015, yPercent: 0.035 },
            0.055
        )

        //title
        this.ui.createText(
            'Мета-улучшения',
            { xPercent: 0.5, yPercent: 0.125, fontPercent: 0.05 },
            { fontSize: '32px', color: '#fff' }).setOrigin(0.5, 0.5);

        this.tempBG = this.ui.createRectangle(
            { xPercent: 0.5, yPercent: 0.7, widthPercent: 0.19, heightPercent: 0.15 },
            0x031303).setOrigin(0.5).setDepth(3)

        const spacingRows = 100;
        const spacingColumn = 120;
        this.activeSpellIDMULTIPLY = 0;
        const allSpells = []
        const allSpellsLevel = []
        const spells = SkillRegistry.skillRegistryItems
        this.activeSpell = {}


        // const getPosition = (index) => {
        //     if (index <= 2) return { x: 80 + spacingColumn * index, y: 200 };
        //     if (index > 2 && index <= 5) return { x: -280 + spacingColumn * index, y: 320 };
        //     if (index > 5 && index <= 8) return { x: - 640 + spacingColumn * index, y: 440 };
        //     if (index > 8 && index <= 11) return { x: - 1000 + spacingColumn * index, y: 560 };
        //     return null;
        // };
        const getPosition = (index) => {
            if (index == 0) return { x: 0.435, y: 0.25 };
            if (index == 1) return { x: 0.5, y: 0.25 };
            if (index == 2) return { x: 0.565, y: 0.25 };
            if (index == 3) return { x: 0.435, y: 0.375 };
            if (index == 4) return { x: 0.5, y: 0.375 };
            if (index == 5) return { x: 0.565, y: 0.375 };
            if (index == 6) return { x: 0.435, y: 0.5 };
            if (index == 7) return { x: 0.5, y: 0.5 };
            if (index == 8) return { x: 0.565, y: 0.5 };
            return null;
        };

        const bg = this.ui.createRectangle(
            { xPercent: 0.5, yPercent: 0.19, widthPercent: 0.21, heightPercent: 0.38 },
            0x000000,).setOrigin(0.5, 0).setDepth(0)

        function renderSpells(scene) {
            let obj = scene.activeSpell;

            for (let key in obj) {
                if (key != 'entity' && key != 'id') {
                    if (obj[key] && typeof obj[key].destroy === "function") {
                        obj[key].destroy(); // уничтожаем Phaser-объект
                    }
                    obj[key] = null; // зануляем ссылку, чтобы сборщик мусора освободил память

                }
            }

            // if (scene.activeSpell.entity) {
            //     console.log("here");


            //    scene.activeSpell.currentDamageText = scene.ui.createText(
            //         scene.activeSpell.entity.getCurrentStats().damage,
            //         { xPercent: 0.417, yPercent: 0.67, fontPercent: 0.035 },
            //         { fontSize: "30px", color: '#f07a72ff' }).setDepth(5).setOrigin(0.5)

            //     scene.activeSpell.nextDamageText = scene.ui.createText(
            //         scene.activeSpell.entity.getNextStats().damage,
            //         { xPercent: 0.581, yPercent: 0.67, fontPercent: 0.04 },
            //         { fontSize: "32px", color: '#ff1100ff' }).setDepth(5).setOrigin(0.5)

            //     scene.activeSpell.currentCooldownText = scene.ui.createText(
            //         `${scene.activeSpell.entity.getCurrentStats().delay / 1000}c`,
            //         { xPercent: 0.412, yPercent: 0.75, fontPercent: 0.035 },
            //         { fontSize: "30px", color: '#ec81ecff' }).setDepth(5).setOrigin(0.5)

            //     scene.activeSpell.nextCooldownText = scene.ui.createText(
            //         `${scene.activeSpell.entity.getNextStats().delay / 1000}c`,
            //         { xPercent: 0.581, yPercent: 0.75, fontPercent: 0.04 },
            //         { fontSize: "32px", color: '#ff00ff' }).setDepth(5).setOrigin(0.5)

            //     scene.activeSpell.price = scene.ui.createText(
            //         scene.activeSpell.entity.getCurrentStats().price,
            //         { xPercent: 0.5, yPercent: 0.825, fontPercent: 0.04 },
            //         { fontSize: "28px", color: '#fae902ff' }).setDepth(5).setOrigin(0.5)

            //     scene.activeSpell.title = scene.ui.createText(
            //         t(`spellsNames.${scene.activeSpell.entity.key}`),
            //         { xPercent: 0.5, yPercent: 0.6, fontPercent: 0.04 },
            //         { fontSize: "24px", color: '#1ffa02ff' }).setOrigin(0.5)

            //     scene.activeSpell.trail = scene.add.particles(0, 0, 'flares', {
            //         frame: 'yellow',
            //         lifespan: 500,
            //         speed: { min: 50, max: 100 },
            //         // angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
            //         gravityY: 0,             // без гравитации
            //         scale: { start: 0.5, end: 0 }, // уменьшаются
            //         alpha: { start: 1, end: 0.3 },   // исчезают
            //         frequency: 100,
            //         // tint: [0xffffff, 0xff11ff],
            //         tint: [0xff3344, 0xffff33],
            //         blendMode: 'ADD',
            //         follow: allSpells[scene.activeSpell.id]
            //             // follow: spell,
            //     }).setDepth(2);
            //     console.log(allSpells[scene.activeSpell.id]);

            //     // console.log(scene.activeSpell.trail);

            // }


            allSpells.forEach(el => el.destroy())
            allSpellsLevel.forEach((el) => { el.destroy() })

            spells.forEach((el, index, array) => {


                const pos = getPosition(index);
                if (!pos) return;
                const spellLevel = scene.ui.createText(
                    el.level,
                    { xPercent: pos.x + 0.02, yPercent: pos.y + 0.05, fontPercent: 0.03 },
                    { fontSize: "20px", color: 'rgba(255, 7, 160, 1)' }).setDepth(2)

                const spell = scene.ui.createImage(
                    el.icon,
                    { xPercent: pos.x, yPercent: pos.y },
                    0.09
                )
                    .setDepth(1)
                    .setOrigin(0.5)
                    .setInteractive();

                spell.on('pointerover', () => {

                    scene.MenuScene.onHoverSfx.play()
                });
                spell.on('pointerout', () => { })
                spell.on('pointerdown', () => {

                    scene.MenuScene.onTapSfx.play()
                    scene.tempBG.setFillStyle('0x033333', 0.5).setDepth(-1)
                    scene.upgradeTextHider.setDepth(-1)
                    for (let key in obj) {
                        if (obj[key] && typeof obj[key].destroy === "function") {
                            obj[key].destroy(); // уничтожаем Phaser-объект
                        }
                        obj[key] = null; // зануляем ссылку, чтобы сборщик мусора освободил память
                    }

                    scene.activeSpell.id = index;
                    scene.activeSpell.entity = el;
                    // scene.activeSpell.level = scene.add.text(centerX - 160, ch * 0.65, el.level, { fontSize: "30px", color: '#9fddf5ff' }).setDepth(5).setOrigin(0.5)
                    // scene.activeSpell.nextLevel = scene.add.text(centerX + 160, ch * 0.65, el.nextLevel, { fontSize: "32px", color: '#00b7ffff' }).setDepth(5).setOrigin(0.5)
                    scene.activeSpell.currentDamageText = scene.ui.createText(
                        el.getCurrentStats().damage,
                        { xPercent: 0.417, yPercent: 0.67, fontPercent: 0.035 },
                        { fontSize: "30px", color: '#f07a72ff' }).setDepth(5).setOrigin(0.5)

                    scene.activeSpell.nextDamageText = scene.ui.createText(
                        el.getNextStats().damage,
                        { xPercent: 0.581, yPercent: 0.67, fontPercent: 0.04 },
                        { fontSize: "32px", color: '#ff1100ff' }).setDepth(5).setOrigin(0.5)

                    scene.activeSpell.currentCooldownText = scene.ui.createText(
                        `${el.getCurrentStats().delay / 1000}c`,
                        { xPercent: 0.412, yPercent: 0.75, fontPercent: 0.035 },
                        { fontSize: "30px", color: '#ec81ecff' }).setDepth(5).setOrigin(0.5)

                    scene.activeSpell.nextCooldownText = scene.ui.createText(
                        `${el.getNextStats().delay / 1000}c`,
                        { xPercent: 0.581, yPercent: 0.75, fontPercent: 0.04 },
                        { fontSize: "32px", color: '#ff00ff' }).setDepth(5).setOrigin(0.5)

                    scene.activeSpell.price = scene.ui.createText(
                        scene.activeSpell.entity.getCurrentStats().price,
                        { xPercent: 0.5, yPercent: 0.825, fontPercent: 0.04 },
                        { fontSize: "28px", color: '#fae902ff' }).setDepth(5).setOrigin(0.5)

                    scene.activeSpell.title = scene.ui.createText(
                        t(`spellsNames.${scene.activeSpell.entity.key}`),
                        { xPercent: 0.5, yPercent: 0.6, fontPercent: 0.04 },
                        { fontSize: "24px", color: '#1ffa02ff' }).setOrigin(0.5)

                    scene.activeSpell.trail = scene.add.particles(0, 0, 'flares', {
                        frame: 'yellow',
                        lifespan: 500,
                        speed: { min: 50, max: 100 },
                        // angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
                        gravityY: 0,             // без гравитации
                        scale: { start: 0.5, end: 0 }, // уменьшаются
                        alpha: { start: 1, end: 0.3 },   // исчезают
                        frequency: 100,
                        // tint: [0xffffff, 0xff11ff],
                        tint: [0xff3344, 0xffff33],
                        blendMode: 'ADD',
                        //  follow: scene.tempBG,
                        follow: spell,
                        // follow: allSpells[scene.activeSpell.id]

                    }).setDepth(2);




                })
                allSpells.push(spell)
                allSpellsLevel.push(spellLevel)

            })

            if (scene.activeSpell.entity) {


                scene.activeSpell.currentDamageText = scene.ui.createText(
                    scene.activeSpell.entity.getCurrentStats().damage,
                    { xPercent: 0.417, yPercent: 0.67, fontPercent: 0.035 },
                    { fontSize: "30px", color: '#f07a72ff' }).setDepth(5).setOrigin(0.5)

                scene.activeSpell.nextDamageText = scene.ui.createText(
                    scene.activeSpell.entity.getNextStats().damage,
                    { xPercent: 0.581, yPercent: 0.67, fontPercent: 0.04 },
                    { fontSize: "32px", color: '#ff1100ff' }).setDepth(5).setOrigin(0.5)

                scene.activeSpell.currentCooldownText = scene.ui.createText(
                    `${scene.activeSpell.entity.getCurrentStats().delay / 1000}c`,
                    { xPercent: 0.412, yPercent: 0.75, fontPercent: 0.035 },
                    { fontSize: "30px", color: '#ec81ecff' }).setDepth(5).setOrigin(0.5)

                scene.activeSpell.nextCooldownText = scene.ui.createText(
                    `${scene.activeSpell.entity.getNextStats().delay / 1000}c`,
                    { xPercent: 0.581, yPercent: 0.75, fontPercent: 0.04 },
                    { fontSize: "32px", color: '#ff00ff' }).setDepth(5).setOrigin(0.5)

                scene.activeSpell.price = scene.ui.createText(
                    scene.activeSpell.entity.getCurrentStats().price,
                    { xPercent: 0.5, yPercent: 0.825, fontPercent: 0.04 },
                    { fontSize: "28px", color: '#fae902ff' }).setDepth(5).setOrigin(0.5)

                scene.activeSpell.title = scene.ui.createText(
                    t(`spellsNames.${scene.activeSpell.entity.key}`),
                    { xPercent: 0.5, yPercent: 0.6, fontPercent: 0.04 },
                    { fontSize: "24px", color: '#1ffa02ff' }).setOrigin(0.5)

                scene.activeSpell.trail = scene.add.particles(0, 0, 'flares', {
                    frame: 'yellow',
                    lifespan: 500,
                    speed: { min: 50, max: 100 },
                    // angle: { min: -90 - 10, max: -90 + 10 }, // летят вверх, +-10°
                    gravityY: 0,             // без гравитации
                    scale: { start: 0.5, end: 0 }, // уменьшаются
                    alpha: { start: 1, end: 0.3 },   // исчезают
                    frequency: 100,
                    // tint: [0xffffff, 0xff11ff],
                    tint: [0xff3344, 0xffff33],
                    blendMode: 'ADD',
                    follow: allSpells[scene.activeSpell.id + 9 * scene.activeSpellIDMULTIPLY]
                    // follow: spell,
                }).setDepth(2);

            }
        }
        renderSpells(this)

        this.currentDamageIcon = this.ui.createImage(
            'damageIcon',
            { xPercent: 0.417, yPercent: 0.64 },
            0.025,)
        this.currentColldownIcon = this.ui.createImage(
            'cooldownIcon',
            { xPercent: 0.417, yPercent: 0.72 },
            0.025,)

        this.nextDamageIcon = this.ui.createImage(
            'damageIcon',
            { xPercent: 0.581, yPercent: 0.64 },
            0.025,)
        this.nextColldownIcon = this.ui.createImage(
            'cooldownIcon',
            { xPercent: 0.581, yPercent: 0.72 },
            0.025,)

        this.arrows = this.ui.createImage(
            'arrowIcon',
            { xPercent: 0.5, yPercent: 0.7 },
            0.125,)

        this.ui.createImage(
            'arrowIcon',
            { xPercent: 0.5, yPercent: 0.7 },
            0.025,)

        //upgrade spell
        this.upgradeTextHider = this.ui.createRectangle(
            { xPercent: 0.5, yPercent: 0.88, widthPercent: 0.555, heightPercent: 0.05 },
            0x031303).setScrollFactor(0).setDepth(100).setInteractive().setOrigin(0.5)

        const upgradeText = this.ui.createText(
            "Улучшить способность ",
            { xPercent: 0.5, yPercent: 0.875, fontPercent: 0.03 },
            { fontSize: "20px", color: 'rgba(238, 241, 10, 1)' })
            .setOrigin(0.5)
            .setInteractive()
            .on('pointerover', () => {
                this.MenuScene.onHoverSfx.play();
                upgradeText.setScale(1.2)
            })
            .on('pointerout', () => { upgradeText.setScale(1) })
            .on("pointerdown", () => {


                this.MenuScene.onTapSfx.play()
                if (this.registry.get('goldCount') >= SkillRegistry[this.activeSpell.entity.key].getCurrentStats().price) {
                    this.registry.set('goldCount', this.registry.get('goldCount') - SkillRegistry[this.activeSpell.entity.key].getCurrentStats().price)
                    goldText.setText(this.registry.get('goldCount'))
                    SkillRegistry[this.activeSpell.entity.key].upgrade()

                    const t = this.registry.get('skillsLevelsObj');
                    t[`${this.activeSpell.entity.key}Level`] += 1;
                    this.registry.set('skillsLevelsObj', t); ///data savve
                    saveManager.save(this)
                    flashScreen(this)
                    this.MenuScene.successSfx.play()



                } else {
                    this.MenuScene.rejectSoundSfx.play()
                    this.tweens.add({
                        targets: goldText,
                        scale: { from: 1, to: 1.3 }, // увеличиваем
                        yoyo: true,                  // обратно к 1
                        duration: 100,               // всего 100мс
                        ease: 'Power1'
                    });
                    this.tweens.add({
                        targets: goldTextBg,
                        scale: { from: 1, to: 1.3 }, // увеличиваем
                        yoyo: true,                  // обратно к 1
                        duration: 100,               // всего 100мс
                        ease: 'Power1'
                    });

                }

                this.activeSpellIDMULTIPLY += 1;
                renderSpells(this)
            });
        const fx = upgradeText.postFX.addShine(3, .5, 1);
        // Кнопка "Назад"
        const backBtn = this.ui.createText(
            t('ui.back'),
            { xPercent: 0.5, yPercent: 0.95, fontPercent: 0.025 },

            {
                fontSize: '24px',
                color: '#fff',
                padding: { x: 10, y: 5 },
                backgroundColor: '#333'
            }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.scene.start('MenuScene');
                this.MenuScene.onHoverSfx.play()
            })
            .on('pointerover', () => {
                this.MenuScene.onHoverSfx.play()
                backBtn.setScale(1.1)
            })
            .on('pointerout', () => {
                this.MenuScene.onHoverSfx.play()
                backBtn.setScale(1)
            })


    }
}