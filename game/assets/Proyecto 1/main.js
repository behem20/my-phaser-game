
class Example extends Phaser.Scene {
    preload () {
        
		
    }

    create () {
        const emitter1 = this.add.particles(1024, 576, 'AtlasParticulas', {
frame: ["star-1"] ,
lifespan: 1080 ,
frequency: 10 ,
quantity: 4 ,
blendMode: "ADD" ,
gravityY: 180 ,
speedX: { min: -500, max: 500 } ,
speedY: { min: -500, max: 500 } ,
scale: { start: 0.5, end: 1 } ,
rotate: { start: 0, end: 360 } ,
color: [0xff0000,0x00ff00,0x0000ff] 
});
const gravityWell1 = emitter1.createGravityWell({x: 0, y: 0, power: 100, epsilon: 94, gravity: 1000});


    }
}

const config = {
    type: Phaser.AUTO,
    width: 2048,
	height: 1152,
    backgroundColor: '#494a4a',
    parent: 'phaser-example',
	title: "Particle Editor Phaser",
	scale: {
		mode: Phaser.Scale.ScaleModes.FIT,
		autoCenter: Phaser.Scale.Center.CENTER_BOTH
	},
    scene: Example
};

const game = new Phaser.Game(config);
