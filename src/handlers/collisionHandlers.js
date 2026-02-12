
import { applyDamageWithCooldown } from "../../utils/applyDamageWithCooldown.js";
import { flashScreen } from "../../utils/FlashScreen.js";
import { playerItems } from "../../utils/itemsManager.js";

function knockBack(scene, target, source, power = 1) {
    if (target.isKnocked) { 0 } else {
        const distanceFromPlayerToTarget = Phaser.Math.Distance.Between(scene.player.sprite.x, scene.player.sprite.y, target.x, target.y)
        const distanceFromPlayerToSource = Phaser.Math.Distance.Between(scene.player.sprite.x, scene.player.sprite.y, source.x, source.y)
        if (distanceFromPlayerToTarget < distanceFromPlayerToSource) { return }
        target.setVelocity((target.x - source.x) * power, (target.y - source.y) * power);
        target.isKnocked = true
        scene.time.delayedCall(10, () => {
            target.isKnocked = false
        })
    }
}
export function handleMagicHit(scene, magic, enemy) {
    if (!enemy.active) return;

    // knockBack(scene, enemy, magic)

    // magic.trail.stop()

    // scene.time.delayedCall(150, () => {
    //     if (magic.trail) {
    //         magic.trail.destroy();
    //     }
    // })
    if (magic.trail) {
        magic.trail.destroy();
    }
    // magic.trail.destroy();
    magic.destroy()

    // magic.disableBody(true, true);

    applyDamageWithCooldown(scene, 'magic', enemy, 10, 1, magic)
}

export function handleLightHit(scene, light, enemy) {
    if (!enemy.active) return;
    // knockBack(scene, enemy, light,2)
    applyDamageWithCooldown(scene, 'light', enemy, 10, 500, light)
}
export function handleTornadoHit(scene, tornado, enemy) {
    if (!enemy.active) return;
    applyDamageWithCooldown(scene, 'tornado', enemy, 10, 150, tornado)
}

export function handleSatelliteHit(scene, satellite, enemy) {
    if (!enemy.active) return;

    if (scene.time.now - scene.audio.sfx.lastSatelliteHitTime > Phaser.Math.Between(100, 250)) {
        scene.audio.sfx.lastSatelliteHitTime = scene.time.now;
        scene.audio.play('satelliteHitSoundsSfx', {
            volume: Phaser.Math.FloatBetween(0.9, 1),
            rate: Phaser.Math.FloatBetween(0.5, 1.15)
        })
    }
    console.log();

    console.log();
    applyDamageWithCooldown(scene, 'satellite', enemy, 10, 1300, satellite)
}



export function handleHailHit(scene, hail, enemy) {
    if (!enemy.active) return;
    const explosion = scene.add.circle(hail.x, hail.y, 45, 0xff0000, 1) //0x0066ff
        .setDepth(10)
        .setBlendMode('ADD');
    scene.time.delayedCall(1400, () => explosion.destroy());
    scene.enemies.getGroup().getChildren().forEach(otherEnemy => {
        if (!otherEnemy.active) return;
        const distance = Phaser.Math.Distance.Between(hail.x, hail.y, otherEnemy.x, otherEnemy.y);
        if (distance <= 1200) {

            applyDamageWithCooldown(scene, 'hail', enemy, 10, 10, hail)
        }
    });
    hail.destroy();
}



export function  handleTouchEnemy(scene, player, enemy) {
    scene.hud.minusLives();
    flashScreen(scene, 0xff0000, 0.18, 200)
    enemy.deactivateEnemy()

    if (scene.hud.lives <= 0) {
        scene.scene.pause();
        scene.scene.launch("GameOverScene", { scene: scene, coins: scene.hud.onFinishCoins(), score: scene.hud.score });
    }
}

export function handleCoinCollect(scene, player, coin) {
    scene.audio.play('coinCollectSoundSfx')
    // coin.trail.destroy()
    coin.disableBody(true, false)


    const amount = scene.level.currentLevel.levelConfigs.dropCoinsAmount * coin.value;
    function getRandomAmount(amountBeforeSpread, spread = 2) {
        const min = amountBeforeSpread - spread;
        const max = amountBeforeSpread + spread;
        return Phaser.Math.Between(min, max);
    }
    const finalAmount = getRandomAmount(amount, amount / 100 * 11)
    scene.registry.set('coinsCount', scene.registry.get('coinsCount') + finalAmount)//fix
    scene.hud.addCoins(finalAmount);
    scene.hud.tintCoins();
    scene.hud.addExp(0.2 * coin.value)


    const targetX = scene.player.x + Phaser.Math.Between(-40, 40);
    const targetY = scene.player.y - 400;
    // console.log(targetX,targetY);

    scene.tweens.add({
        targets: coin,
        // x: targetX ,
        // y: targetY,
        x: targetX,
        y: targetY,
        scale: 2.4,
        depth: 5,
        // alpha: 0.5,
        duration: 350,
        ease: 'Cubic.easeIn',
        onComplete: () => {

            coin.destroy();

        }
    });

    // coin.setTintFill(0xffffff, 0x00ee13, 0x00ee13, 0x00ee13);
    // coin.setScale(1)
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
    scene.audio.play('openChestSfx') //collect chest sound

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
                item.applyItem(scene.player.playerInitCfgs, scene)
            }
        })
    });
}

export function handleMagnetCollect(scene, player, magnet) {
    scene.audio.play('openChestSfx')

    magnet.setScale(1.1)
    magnet.disableBody(0, 0)
    scene.time.delayedCall(200, () => {
        magnet.setScale(1);
        magnet.destroy()
        magnet.trail.destroy()

    });
    scene.coins.activateMagnet(1500, 500);
}

export function handleHealthPackCollect(scene, player, hp) {

    hp.disableBody(1, 0);
    scene.audio.play('HPCollectSoundSfx')
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