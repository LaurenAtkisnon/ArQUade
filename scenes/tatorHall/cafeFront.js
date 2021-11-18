class cafeFront extends Phaser.Scene {
  constructor() {
    super("cafeFront");
  }

  preload() {
    this.load.image("cafeFront", "pictures/cafeFront");
    this.load.image("cafeLeft", "pictures/cafeLeft");
    this.load.image("cafeRight", "pictures/cafeRight");
  }

  create() {
    const background = this.add.image(400,300,"cafeFront");
    background.scale = 1;
  }}
