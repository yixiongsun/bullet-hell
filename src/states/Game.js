/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../entities/Mushroom'
import lang from '../lang'
import Keyboard from '../input/Keyboard'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    const bannerText = lang.text('welcome')
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
      font: '40px Arial',
      fill: '#77BFA3',
      smoothed: false
    })

    banner.padding.set(10, 16)
    banner.anchor.setTo(0.5)



    var emitter = game.add.emitter(this.game.world.centerX, 0, 400);

    emitter.width = this.game.world.width;
    // emitter.angle = 30; // uncomment to set an angle for the rain.

    emitter.makeParticles('rain');

    emitter.minParticleScale = 0.1;
    emitter.maxParticleScale = 0.5;

    emitter.setYSpeed(200, 200);
    emitter.setXSpeed(-5, 5);

    emitter.minRotation = 0;
    emitter.maxRotation = 0;

    emitter.start(false, 1600, 5, 0);







    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'player_ship'
    })

    game.physics.arcade.enable(this.mushroom);

    this.mushroom.body.bounce.y = 0
    this.mushroom.body.bounce.x = 0
    this.mushroom.body.collideWorldBounds = true;

    this.input = new Keyboard(this.game)

    this.game.add.existing(this.mushroom)




  }

  render() {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }


  // update function
  update() {

    // keyboard action
    let keys = this.input.pressedKeys()
    if (keys.left) {
      this.mushroom.x -= 1
    }
    if (keys.right) {
      this.mushroom.x += 1
    }
    if (keys.up) {
      this.mushroom.y -= 1
    }
    if (keys.down) {
      this.mushroom.y += 1
    }


  }
}
