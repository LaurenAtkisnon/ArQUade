class campusScene extends Phaser.Scene {
  constructor() {
    super("campusScene");
  }

  preload() {
  this.load.image("Campus", "pictures/QUCampus.png");
  }

  create() {
  const campusBackground = this.add.image(400,300,"Campus");
  campusBackground.scale = .7;


  }
}
