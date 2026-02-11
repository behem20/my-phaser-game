import { printStats } from "../damageStats.js";
import { togglePause } from "../pauseManager.js";
import levelUp from "./levelUp.js";
import openChest from "./openChest.js";
import teleportTo from "./teleport.js";


export default class inputsController {
    constructor(scene) {
        this.scene = scene
        this.teleportKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.levelUpKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.chestKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.spawnCoinsKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.restoreHpKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this.pauseKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        this.printStats = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        this.applyMagnet = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

        this.scene.events.off('teleport-request', teleportTo, this.scene);
        this.scene.events.off('levelUp-request', levelUp, this.scene);
        this.scene.events.off('openChest-request', openChest, this.scene);

        this.scene.events.on('teleport-request', teleportTo, this.scene);
        this.scene.events.on('levelUp-request', levelUp, this.scene);
        this.scene.events.on('openChest-request', openChest, this.scene);
    }

    update() {

        if (Phaser.Input.Keyboard.JustDown(this.teleportKey)) {
            this.scene.events.emit('teleport-request')
        }//teleport SPACE

        if (Phaser.Input.Keyboard.JustDown(this.levelUpKey)) {
            this.scene.events.emit('levelUp-request')
        }//exp scene Q

        if (Phaser.Input.Keyboard.JustDown(this.chestKey)) {
            this.scene.events.emit('openChest-request')
        }//chest scene R

        if (Phaser.Input.Keyboard.JustDown(this.spawnCoinsKey)) {
            for (let index = 0; index < 100; index++) {
                this.scene.coins.spawnRandomly(100, 700);
            }
        }//spawn money C

        if (Phaser.Input.Keyboard.JustDown(this.restoreHpKey)) {
            this.scene.hud.addLives(10);
        }//restore hp E

        if (Phaser.Input.Keyboard.JustDown(this.pauseKey)) {
            togglePause(this.scene);
        }  //pause P


        if (Phaser.Input.Keyboard.JustDown(this.printStats)) {
            printStats(this.scene.player.gAura);
        }  // print stats T

        if (Phaser.Input.Keyboard.JustDown(this.applyMagnet)) {
            this.scene.coins.activateMagnet(3500, 500);
        }  //magnet M

    }
}
