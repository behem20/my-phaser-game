import { t } from "../LanguageManager.js";
import SkillRegistry from "../SkillsRegistry.js";
import Tooltip from "../ui/Tooltip.js";
import { flashIcon } from "../utils/flashIcon.js";
import { flashScreen } from "../utils/FlashScreen.js";
import saveManager from "../utils/SaveManager.js";
import { openSkillWindow } from "../utils/SpellWindows.js";
import { playerSkills } from "../utils/upgradesManager.js";

export default class MetaUpgradesScene extends Phaser.Scene {
    constructor(scene) {
        super("MetaUpgradesScene");

    }
    init(data) {
        this.MenuScene = data.scene; // ссылка на старую сцену
    }

    create() {



        if (ysdk?.features?.GameplayAPI) ysdk.features.GameplayAPI.start();
        const scene = this;
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;
        const cw = this.cameras.main.width
        const ch = this.cameras.main.height

        this.toolTip = new Tooltip(this)

        this.add.rectangle(0, 0, cw, ch, 0x031303, 1)
            .setOrigin(0)
            .setScrollFactor(0);

        const goldTextBg = this.add.rectangle(0, 10, 160, 40, 0x000000,).setOrigin(0).setStrokeStyle(2, 0xeeee00);
        const goldText = this.add.text(155, 20, this.registry.get('goldCount'), {
            fontSize: "24px",
            fill: "rgba(238, 234, 0, 1)"
        }).setOrigin(1, 0);
        const goldIcon = this.add.image(10, 10, 'gold').setScale(0.15).setOrigin(0)


        //title
        this.add.text(centerX, centerY - centerY * 0.75, 'Мета-улучшения', { fontSize: '32px', color: '#fff' }).setOrigin(0.5, 0.5);
        this.tempBG = this.add.rectangle(centerX, centerY + centerY * 0.40, 350, 150, 0x031303,).setOrigin(0.5).setDepth(3)

        const spacingRows = 100;
        const spacingColumn = 120;
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
            if (index == 0) return { x: centerX - 120, y: centerY * 0.5 };
            if (index == 1) return { x: centerX, y: centerY * 0.5 };
            if (index == 2) return { x: centerX + 120, y: centerY * 0.5 };
            if (index == 3) return { x: centerX - 120, y: centerY * 0.75 };
            if (index == 4) return { x: centerX, y: centerY * 0.75 };
            if (index == 5) return { x: centerX + 120, y: centerY * 0.75 };
            if (index == 6) return { x: centerX - 120, y: centerY };
            if (index == 7) return { x: centerX, y: centerY };
            if (index == 8) return { x: centerX + 120, y: centerY };
            return null;
        };

        const bg = this.add.rectangle(centerX, centerY * 0.38, 350, 360, 0x000000, 0.5).setOrigin(0.5, 0).setDepth(0)

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

            if (scene.activeSpell.entity) {


                // scene.activeSpell.level = scene.add.text(centerX - 160, ch * 0.65, scene.activeSpell.entity.level, { fontSize: "30px", color: '#9fddf5ff' }).setDepth(5).setOrigin(0.5)
                // scene.activeSpell.nextLevel = scene.add.text(centerX + 160, ch * 0.65, scene.activeSpell.entity.nextLevel, { fontSize: "32px", color: '#00b7ffff' }).setDepth(5).setOrigin(0.5)
                scene.activeSpell.currentDamageText = scene.add.text(centerX - 160, ch * 0.67, scene.activeSpell.entity.getCurrentStats().damage, { fontSize: "30px", color: '#f07a72ff' }).setDepth(5).setOrigin(0.5)
                scene.activeSpell.nextDamageText = scene.add.text(centerX + 160, ch * 0.67, scene.activeSpell.entity.getNextStats().damage, { fontSize: "32px", color: '#ff1100ff' }).setDepth(5).setOrigin(0.5)
                scene.activeSpell.currentCooldownText = scene.add.text(centerX - 160, ch * 0.75, `${scene.activeSpell.entity.getCurrentStats().delay / 1000}c`, { fontSize: "30px", color: '#ec81ecff' }).setDepth(5).setOrigin(0.5)
                scene.activeSpell.nextCooldownText = scene.add.text(centerX + 160, ch * 0.75, `${scene.activeSpell.entity.getNextStats().delay / 1000}c`, { fontSize: "32px", color: '#ff00ff' }).setDepth(5).setOrigin(0.5)
                scene.activeSpell.price = scene.add.text(centerX, centerY + centerY * 0.65, scene.activeSpell.entity.getCurrentStats().price, { fontSize: "28px", color: '#fae902ff' }).setDepth(5).setOrigin(0.5)
                scene.activeSpell.title = scene.add.text(centerX, ch * 0.6, t(`spellsNames.${scene.activeSpell.entity.key}`), { fontSize: "24px", color: '#1ffa02ff' }).setOrigin(0.5)

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
                    follow: allSpells[scene.activeSpell.id]
                }).setDepth(2);
            }


            allSpells.forEach(el => el.destroy())
            allSpellsLevel.forEach((el) => { el.destroy() })

            spells.forEach((el, index, array) => {
                const pos = getPosition(index);
                if (!pos) return;
                const spellLevel = scene.add.text(pos.x + 30, pos.y + 30, el.level, { fontSize: "20px", color: 'rgba(255, 7, 160, 1)' }).setDepth(2)
                const spell = scene.add.image(pos.x, pos.y, el.icon)
                    .setDepth(1)
                    .setScale(2)
                    .setOrigin(0.5)
                    .setInteractive();

                spell.on('pointerover', () => {
                    spell.setScale(2.05);
                    scene.MenuScene.onHoverSfx.play()
                });
                spell.on('pointerout', () => { spell.setScale(2) })
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
                    scene.activeSpell.currentDamageText = scene.add.text(centerX - 160, ch * 0.67, el.getCurrentStats().damage, { fontSize: "30px", color: '#f07a72ff' }).setDepth(5).setOrigin(0.5)
                    scene.activeSpell.nextDamageText = scene.add.text(centerX + 160, ch * 0.67, el.getNextStats().damage, { fontSize: "32px", color: '#ff1100ff' }).setDepth(5).setOrigin(0.5)
                    scene.activeSpell.currentCooldownText = scene.add.text(centerX - 160, ch * 0.75, `${el.getCurrentStats().delay / 1000}c`, { fontSize: "30px", color: '#ec81ecff' }).setDepth(5).setOrigin(0.5)
                    scene.activeSpell.nextCooldownText = scene.add.text(centerX + 160, ch * 0.75, `${el.getNextStats().delay / 1000}c`, { fontSize: "32px", color: '#ff00ff' }).setDepth(5).setOrigin(0.5)
                    scene.activeSpell.price = scene.add.text(centerX, centerY + centerY * 0.65, scene.activeSpell.entity.getCurrentStats().price, { fontSize: "28px", color: '#fae902ff' }).setDepth(5).setOrigin(0.5)
                    scene.activeSpell.title = scene.add.text(centerX, ch * 0.6, t(`spellsNames.${scene.activeSpell.entity.key}`), { fontSize: "24px", color: '#1ffa02ff' }).setOrigin(0.5)

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
                        follow: spell,
                    }).setDepth(2);
                })
                allSpells.push(spell)
                allSpellsLevel.push(spellLevel)

            })
        }
        renderSpells(this)

        this.currentDamageIcon = this.add.image(centerX - 160, ch * 0.64, 'damageIcon')
        this.currentColldownIcon = this.add.image(centerX - 160, ch * 0.72, 'cooldownIcon')

        this.nextDamageIcon = this.add.image(centerX + 160, ch * 0.64, 'damageIcon')
        this.nextColldownIcon = this.add.image(centerX + 160, ch * 0.72, 'cooldownIcon')

        this.arrows = this.add.image(centerX, ch * 0.70, 'arrowIcon').setScale(2)


        //upgrade spell
        this.upgradeTextHider = this.add.rectangle(centerX, ch * 0.88, 300, 40, 0x031303).setScrollFactor(0).setDepth(100).setInteractive().setOrigin(0.5)
        const upgradeText = this.add.text(centerX, centerY + centerY * 0.75, "Улучшить способность ", { fontSize: "20px", color: 'rgba(238, 241, 10, 1)' })
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


                renderSpells(this)
            });
        const fx = upgradeText.postFX.addShine(3, .5, 1);
        // Кнопка "Назад"
        const backBtn = this.add.text(centerX, centerY + centerY * 0.9, t('ui.back'), {
            fontSize: '24px',
            color: '#fff',
            padding: { x: 10, y: 5 },
            backgroundColor: '#333'
        }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {

                if (ysdk?.features?.GameplayAPI) ysdk.features.GameplayAPI.stop();
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