
import { applyDamageWithCooldown } from "../../utils/applyDamageWithCooldown.js";
import { randomTintFill } from "../../utils/damageEffect.js";
import { damageEnemy } from "../../utils/damageEnemy.js";
import { addDamage } from "../../utils/damageStats.js";
import { flashScreen } from "../../utils/FlashScreen.js";
import { getHUD } from "../../utils/hudManager.js";
import { playerItems } from "../../utils/itemsManager.js";
import { togglePause } from "../../utils/pauseManager.js";
import { playerSkills } from "../../utils/upgradesManager.js";


export function handleMagicHit(scene, magic, enemy) {
    if (!enemy.active) return;
    magic.trail.stop()
    scene.time.delayedCall(300, () => {
        magic.trail.destroy();
    });
    magic.destroy();

    // damageEnemy(scene, enemy, playerSkills.magic.damage || 35, getHUD())
    applyDamageWithCooldown(scene, 'magic', enemy, 10, 10)
    // addDamage("magic", playerSkills.magic.damage || 35);
}

export function handleLightHit(scene, light, enemy) {
    if (!enemy.active) return;
    applyDamageWithCooldown(scene, 'light', enemy, 10, 500)
    // damageEnemy(scene, enemy, playerSkills.light.damage, getHUD())
    // addDamage("light", playerSkills.light.damage);
}
export function handleTornadoHit(scene, tornado, enemy) {
    if (!enemy.active) return;
    // damageEnemy(scene, enemy, playerSkills.tornado.damage, getHUD())
    applyDamageWithCooldown(scene, 'tornado', enemy, 10, 300)
    // addDamage("tornado", playerSkills.tornado.damage);
}

export function handleSatelliteHit(scene, satellite, enemy) {
    if (!enemy.active) return;
    // damageEnemy(scene, enemy, playerSkills.satellite.damage, getHUD())
    applyDamageWithCooldown(scene, 'satellite', enemy, 10, 700)
}

export function handleMeteorHit(scene, meteor, enemy) {
    if (!enemy.active) return;
    const explosion = scene.add.circle(meteor.x, meteor.y, 200, 0xff6600, 0.3)
        .setDepth(10)
        .setBlendMode('ADD');
    scene.time.delayedCall(400, () => explosion.destroy());


    scene.enemies.getGroup().getChildren().forEach(otherEnemy => {
        if (!otherEnemy.active) return;
        const distance = Phaser.Math.Distance.Between(meteor.x, meteor.y, otherEnemy.x, otherEnemy.y);
        if (distance <= 1200) {
            damageEnemy(scene, enemy, playerSkills.meteor.damage, getHUD())
        }
    });
    meteor.destroy();
}

export function handleHailHit(scene, hail, enemy) {
    if (!enemy.active) return;
    const explosion = scene.add.circle(hail.x, hail.y, 45, 0x0066ff, 0.3)
        .setDepth(10)
        .setBlendMode('ADD');
    scene.time.delayedCall(400, () => explosion.destroy());
    scene.enemies.getGroup().getChildren().forEach(otherEnemy => {
        if (!otherEnemy.active) return;
        const distance = Phaser.Math.Distance.Between(hail.x, hail.y, otherEnemy.x, otherEnemy.y);
        if (distance <= 1200) {

            applyDamageWithCooldown(scene, 'hail', enemy, 10, 10)
        }
    });
    hail.destroy();
}



export function handleTouchEnemy(scene, player, enemy) {
    scene.hud.minusLives();
    // enemy.hpBar.destroy()
    flashScreen(scene, 0x990000, 0.18, 200)
    enemy.deactivateEnemy()

    if (scene.hud.lives <= 0) {
        scene.scene.pause();

        scene.scene.launch("GameOverScene", { scene: scene, coins: scene.hud.onFinishCoins() });

    }
}

export function handleCoinCollect(scene, player, coin) {
    scene.coinCollectSoundSfx.play()

    coin.disableBody(true, false)


    const amount = scene.levels[scene.registry.get('currentLevel')].levelConfigs.dropCoinsAmount * coin.value;
    function getRandomAmount(amountBeforeSpread, spread = 2) {
        const min = amountBeforeSpread - spread;
        const max = amountBeforeSpread + spread;
        return Phaser.Math.Between(min, max);
    }
    const finalAmount = getRandomAmount(amount, amount / 100 * 11)
    scene.registry.set('coinsCount', scene.registry.get('coinsCount') + finalAmount)//fix
    scene.hud.addCoins(finalAmount);
    scene.hud.tintCoins();
    scene.hud.addExp(0.1 * coin.value)


    const targetX = scene.hud.coinsText.x;
    const targetY = scene.hud.coinsText.y;

    scene.tweens.add({
        targets: coin,
        x: targetX,
        y: targetY,
        scale: 0.5,
        alpha: 0,
        duration: 600,
        ease: 'Cubic.easeIn',
        onComplete: () => {
            coin.trail.destroy()
            coin.destroy();

        }
    });

    coin.setTintFill(0xffffff, 0x00ee13, 0x00ee13, 0x00ee13);
    coin.setScale(1.1)
    scene.time.delayedCall(100, () => {
        coin.clearTint();
    });

    const textX = coin.x + Phaser.Math.Between(-20, 20)
    const textY = coin.y + Phaser.Math.Between(-20, 20)
    const coinsText = scene.add.text(textX, textY - 40, `+${finalAmount}`, {
        fontSize: Math.random() > 0.5 ? '24px' : '30px',
        fontFamily: 'Arial',
        color: Math.random() > 0.5 ? '#b0c007ff' : '#b4c407ff',
        stroke: '#000000',
        strokeThickness: 3
    }).setOrigin(0.5).setDepth(100);

    // Анимация: всплытие и исчезновение
    scene.tweens.add({
        targets: coinsText,
        y: coinsText.y - 30,
        alpha: 0,
        duration: 1800,
        ease: 'Cubic.easeOut',
        onComplete: () => {
            coinsText.destroy();
        }
    });

}
export function handleChestCollect(scene, player, chest) {
    scene.openChestSfx.play() //collect chest sound

    chest.setScale(1.1)
    chest.disableBody(0, 0)
    scene.time.delayedCall(200, () => {
        chest.setScale(1);
        chest.destroy()
        chest.trail.destroy()
        scene.scene.pause()
        scene.scene.launch('InChestScene', {
            scene: scene,
            items: playerItems.allItems,
            onSelect: (item) => {
                item.applyItem(scene.playerInitCfgs, scene)
            }
        })
    });
}
export function handleChestCollect(scene, player, chest) {
    scene.openChestSfx.play() //collect chest sound

    chest.setScale(1.1)
    chest.disableBody(0, 0)
    scene.time.delayedCall(200, () => {
        chest.setScale(1);
        chest.destroy()
        chest.trail.destroy()
        scene.scene.pause()
        scene.scene.launch('InChestScene', {
            scene: scene,
            items: playerItems.allItems,
            onSelect: (item) => {
                item.applyItem(scene.playerInitCfgs, scene)
            }
        })
    });
}
export function handleHealthPackCollect(scene, player, hp) {

    hp.disableBody(1, 0);
    scene.HPCollectSoundSfx.play()
    scene.hud.addLives(6)

    scene.tweens.add({
        targets: scene.hpMark.border,
        alpha: 0.2,     // полупрозрачное мигание
        yoyo: true,     // вернётся к исходной альфе
        duration: 300,  // миллисекунды
        repeat: 0
    });

    hp.setScale(1.4)
    scene.time.delayedCall(100, () => {
        // hp.clearTint();
        hp.trail.destroy()
        hp.disableBody(1, 1)
    });
}

export function handleItemCollect(scene, player, item) {

    if (!scene.registry.has('inventory')) scene.registry.set('inventory', []


    )
    if (scene.registry.get('inventory').length <= 11) {
        const currentItem = {
            key: item.key,
            itemType: item.itemType,
            uid: item.uid,
            isActive: item.isActive,
            name: item.name,
            level: item.level,
            damage: item.damage,
        }

        const currentInventory = scene.registry.get('inventory') || [];
        currentInventory.push(currentItem)
        scene.registry.set('inventory', currentInventory)
        item.destroy();
    } else {
        return
    }




}