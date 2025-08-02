import levels from "../../levelsConfigs.js";
import { damageEnemy } from "../../utils/damageEnemy.js";
import { getHUD } from "../../utils/hudManager.js";
import { playerSkills } from "../../utils/upgradesManager.js";


export function handleMagicHit(scene, magic, enemy) {

    if (!enemy.active) return;

    magic.trail.stop()
    scene.time.delayedCall(300, () => {
        magic.trail.destroy();
    });
    magic.destroy();



    damageEnemy(scene, enemy, playerSkills.magic.damage, getHUD())
}

export function handleLightHit(scene, magic, enemy) {
    if (!enemy.active) return;
    damageEnemy(scene, enemy, playerSkills.light.damage, getHUD())
}
export function handleTornadoHit(scene, tornado, enemy) {
    if (!enemy.active) return;
    damageEnemy(scene, enemy, playerSkills.tornado.damage, getHUD())
}


export function handleSatelliteHit(scene, satellite, enemy) {
    if (!enemy.active) return;
    damageEnemy(scene, enemy, playerSkills.satellite.damage, getHUD())

    // if (!scene.satelliteHitSoundsSfx.isPlaying) {
    //     scene.satelliteHitSoundsSfx.play();
    // }

    if (scene.time.now - scene.lastShootSoundTime > 150) {
        scene.lastShootSoundTime = scene.time.now;
        scene.satelliteHitSoundsSfx.play();
    }
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
            damageEnemy(scene, enemy, playerSkills.hail.damage, getHUD())
        }
    });
    hail.destroy();
}





export function handleTouchEnemy(scene, player, enemy) {
    // scene.hud.minusLives();
    // enemy.hpBar.destroy()
    enemy.destroy()
    enemy.shadow.destroy()
    if (scene.hud.lives <= 0) {

        scene.scene.pause();
        scene.scene.launch("GameOverScene", { score: scene.hud.score });
    }
}

export function handleCoinCollect(scene, player, coin) {
    scene.coinCollectSoundSfx.play()

    coin.disableBody(true, false)
    const amount = levels[scene.registry.get('currentLevel')].levelConfigs.dropCoinsAmount;
    scene.registry.set('coinsCount', scene.registry.get('coinsCount') + amount)
    scene.hud.addCoins(amount);

    console.log(scene);
    
    const targetX = scene.hud.coinsText.x;
    const targetY = scene.hud.coinsText.y;
    console.log(targetX,targetY);
    
    scene.tweens.add({
        targets: coin,
        x: targetX,
        y: targetY,
        scale: 0.5,
        alpha: 0,
        duration: 600,
        ease: 'Cubic.easeIn',
        onComplete: () => {
            coin.destroy();
        }
    });

}
export function handleItemCollect(scene, player, item) {
    console.log(item);
    console.log(item.texture);

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