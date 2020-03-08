export default function create() {
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
