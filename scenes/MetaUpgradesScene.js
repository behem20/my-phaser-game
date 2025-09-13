import { t } from "../LanguageManager.js";
import SkillRegistry from "../SkillsRegistry.js";
import Tooltip from "../ui/Tooltip.js";
import { flashIcon } from "../utils/flashIcon.js";
import { flashScreen } from "../utils/FlashScreen.js";
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
        const scene = this;


        this.toolTip = new Tooltip(this)

        this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0x031303, 1)
            .setOrigin(0)
            .setScrollFactor(0);

        const goldTextBg = this.add.rectangle(0, 10, 160, 40, 0x000000,).setOrigin(0).setStrokeStyle(2, 0xeeee00);
        const goldText = this.add.text(155, 20, this.registry.get('goldCount'), {
            fontSize: "24px",
            fill: "rgba(238, 234, 0, 1)"
        }).setOrigin(1, 0);
        const goldIcon = this.add.image(10, 10, 'gold').setScale(0.15).setOrigin(0)


        //title
        this.add.text(400, 100, 'Мета-улучшения', { fontSize: '32px', color: '#fff' }).setOrigin(0.5);
        this.tempBG = this.add.rectangle(375, 150, 350, 150, 0x031303,).setOrigin(0).setDepth(3)
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;
        const spacingRows = 100;
        const spacingColumn = 120;
        const allSpells = []
        const allSpellsLevel = []
        const spells = SkillRegistry.skillRegistryItems
        this.activeSpell = {}


        const getPosition = (index) => {
            if (index <= 2) return { x: 80 + spacingColumn * index, y: 200 };
            if (index > 2 && index <= 5) return { x: -280 + spacingColumn * index, y: 320 };
            if (index > 5 && index <= 8) return { x: - 640 + spacingColumn * index, y: 440 };
            if (index > 8 && index <= 11) return { x: - 1000 + spacingColumn * index, y: 560 };
            return null;
        };

        const bg = this.add.rectangle(20, 150, 350, 360, 0x000000, 0.5).setOrigin(0).setDepth(0)

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

                scene.activeSpell.level = scene.add.text(410, 155, scene.activeSpell.entity.level, { color: '#9fddf5ff' }).setDepth(5)
                scene.activeSpell.nextLevel = scene.add.text(650, 155, scene.activeSpell.entity.nextLevel, { fontSize: "20px", color: '#00b7ffff' }).setDepth(5)
                scene.activeSpell.currentDamageText = scene.add.text(410, 200, scene.activeSpell.entity.getCurrentStats().damage, { color: '#f07a72ff' }).setDepth(5)
                scene.activeSpell.nextDamageText = scene.add.text(650, 200, scene.activeSpell.entity.getNextStats().damage, { fontSize: "20px", color: '#ff1100ff' }).setDepth(5)
                scene.activeSpell.currentCooldownText = scene.add.text(410, 270, `${scene.activeSpell.entity.getCurrentStats().delay / 1000}c`, { color: '#ec81ecff' }).setDepth(5)
                scene.activeSpell.nextCooldownText = scene.add.text(650, 270, `${scene.activeSpell.entity.getNextStats().delay / 1000}c`, { fontSize: "20px", color: '#ff00ff' }).setDepth(5)
                scene.activeSpell.price = scene.add.text(560, 735, scene.activeSpell.entity.getCurrentStats().price, { fontSize: "28px", color: '#fae902ff' }).setDepth(5)


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
                    scene.activeSpell.level = scene.add.text(410, 155, el.level, { color: '#9fddf5ff' }).setDepth(5)
                    scene.activeSpell.nextLevel = scene.add.text(650, 155, el.nextLevel, { fontSize: "20px", color: '#00b7ffff' }).setDepth(5)
                    scene.activeSpell.currentDamageText = scene.add.text(410, 200, el.getCurrentStats().damage, { color: '#f07a72ff' }).setDepth(5)
                    scene.activeSpell.nextDamageText = scene.add.text(650, 200, el.getNextStats().damage, { fontSize: "20px", color: '#ff1100ff' }).setDepth(5)
                    scene.activeSpell.currentCooldownText = scene.add.text(410, 270, `${el.getCurrentStats().delay / 1000}c`, { color: '#ec81ecff' }).setDepth(5)
                    scene.activeSpell.nextCooldownText = scene.add.text(650, 270, `${el.getNextStats().delay / 1000}c`, { fontSize: "20px", color: '#ff00ff' }).setDepth(5)
                    scene.activeSpell.price = scene.add.text(560, 735, scene.activeSpell.entity.getCurrentStats().price, { fontSize: "28px", color: '#fae902ff' }).setDepth(5)

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

        this.currentDamageIcon = this.add.image(390, 210, 'damageIcon')
        this.currentColldownIcon = this.add.image(390, 275, 'cooldownIcon')

        this.nextDamageIcon = this.add.image(630, 210, 'damageIcon')
        this.nextColldownIcon = this.add.image(630, 275, 'cooldownIcon')

        this.arrows = this.add.image(540, 240, 'arrowIcon').setScale(2)


        //upgrade spell
        this.upgradeTextHider = this.add.rectangle(390, 750, 300, 40, 0x031303).setScrollFactor(0).setDepth(100).setInteractive()
        const upgradeText = this.add.text(400, 750, "Улучшить способность ", { fontSize: "20px", color: 'rgba(238, 241, 10, 1)' })
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

        // Кнопка "Назад"
        const backBtn = this.add.text(680, 20, t('ui.back'), {
            fontSize: '24px',
            color: '#fff',
            backgroundColor: '#333'
        })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.scene.start('MenuScene');
                this.MenuScene.onHoverSfx.play()
            })
            .on('pointerover', () => {
                this.MenuScene.onHoverSfx.play()
            })


    }
}