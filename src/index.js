import Phaser from 'phaser'
import logoImg from './assets/logo.png'

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-game',
  width: 1024,
  height: 768,
  scene: {
    preload: preload,
    create: create
  }
}

const game = new Phaser.Game(config)

function preload() {
  this.load.image('logo', logoImg)
}

function create() {
  const logo = this.add.image(400, 150, 'logo')
  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 1000,
    ease: 'Power',
    yoyo: true,
    loop: -1
  })
}
