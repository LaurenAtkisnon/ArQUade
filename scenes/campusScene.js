class campusScene extends Phaser.Scene {
  constructor() {
    super("campusScene");
  }

  // preload method
  preload() {
  this.load.image("Campus", "pictures/QUCampus.png");
  }

  create() {
    // adds the background for the scene
  const campusBackground = this.add.image(400,300,"Campus");
  campusBackground.scale = .7;


  }
}
