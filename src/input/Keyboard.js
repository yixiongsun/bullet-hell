import Phaser from 'phaser'

export default class {
    constructor(game) {
        this.keyboard = game.input.keyboard
        this.leftKey = this.keyboard.addKey(Phaser.Keyboard.A)
        this.rightKey = this.keyboard.addKey(Phaser.Keyboard.D)
        this.upKey = this.keyboard.addKey(Phaser.Keyboard.W)
        this.downKey = this.keyboard.addKey(Phaser.Keyboard.S)
    }

    pressedKeys() {
        var keys = {}
        if (this.leftKey.isDown) {
            keys.left = true
        }
        if (this.rightKey.isDown) {
            keys.right = true
        }
        if (this.upKey.isDown) {
            keys.up = true
        }
        if (this.downKey.isDown) {
            keys.down = true
        }
        return keys
    }

}
