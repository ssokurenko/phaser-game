import Phaser from 'phaser'
import characterImage from './assets/mario-run.png'

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
}

const game = new Phaser.Game(config)

function preload() {
  this.load.image('mario-run', characterImage)
}

function create() {
  const logo = this.add.image(400, 150, 'mario-run')
  logo.width = 50
  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 1000,
    ease: 'Power',
    yoyo: true,
    loop: -1
  })
}
