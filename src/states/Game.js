/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../entities/Mushroom'
import lang from '../lang'
import Keyboard from '../input/Keyboard'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
    const bannerText = lang.text('welcome')
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
      font: '40px Arial',
      fill: '#77BFA3',
      smoothed: false
    })

    banner.padding.set(10, 16)
    banner.anchor.setTo(0.5)

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'player_ship'
    })
    
    this.input = new Keyboard(this.game)

    this.game.add.existing(this.mushroom)
  }

  render() {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }


  // update function
  update () {

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
