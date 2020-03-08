import preload from './preload'
import create from './create'

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

export default config
