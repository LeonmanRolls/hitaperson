/* globals __DEV__ */
import Phaser from 'phaser'
import crowbar from '../sprites/Crowbar'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Phaser + ES6 + Webpack'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.crowbar = new crowbar({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'crowbar'
    })

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.game.add.existing(this.crowbar)
  }

  render () {

    if (__DEV__) {
      this.game.debug.spriteInfo(this.crowbar, 32, 32);
      if(this.cursors.up.isDown) {
        console.log('hi there')
        this.crowbar.y += -5;

      } 
      
      if (this.cursors.down.isDown) {
        console.log('dirtsss')
        this.crowbar.y += 5;
      }
      if (this.cursors.left.isDown) {
        console.log('trains')
        this.crowbar.x += -5;
    }  
    if (this.cursors.right.isDown) {
      console.log('bosss')
      this.crowbar.x += 5;
    }
  
  }

  }

}

