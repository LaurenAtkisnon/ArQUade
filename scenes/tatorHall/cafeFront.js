class cafeFront extends Phaser.Scene {
  constructor() {
    super("cafeFront");
  }

  preload() {
    this.load.image("cafeFront", "pictures/cafeFront.png");
    this.load.image("cafeLeft", "pictures/cafeLeft.png");
    this.load.image("cafeRight", "pictures/cafeRight.png");

    this.load.image("backNavigation", "pictures/backNavigation.png");
    this.load.image("forwardNavigation", "pictures/forwardNavigation.png");
    this.load.image("leftNavigation", "pictures/leftNavigation.png");
    this.load.image("rightNavigation", "pictures/rightNavigation.png");
    this.load.image("joystick", "pictures/joystick.png");
  }

  create() {
    this.background = this.add.image(400,300,"cafeFront");
    this.background.scale = .275;

    this.setting();
    this.navigationButtons();
  }

  setting() {
    this.settings_button = this.add.image(75,20, "settings_button").setInteractive();
    this.settings_button.scale = .8;
    this.settings_button.once('pointerdown', () => {
      this.scene.get("settings").setPrev(this.scene.key);
      this.scene.start('settings');
    });
  }
  navigationButtons(scene1,scene2,scene3,scene4) {
    this.backButton = this.add.image(60,580, "back_button").setInteractive();
    this.backButton.setScale(.6);
    this.backButton.once('pointerdown', () => this.scene.start(name),this);

  }
  navigationButtons(scene1,scene2,scene3) {
    this.backButton = this.add.image(60,580, "back_button").setInteractive();
    this.backButton.setScale(.6);
    this.backButton.once('pointerdown', () => this.scene.start(scene1),this);

  }

  getLastLocation() {
    return this.lastLocation;

  }
  setLastLocation(lastScene) {
    this.lastLocation = lastScene;
  }

  navigationButtons() {

   //  this.joystick = this.add.image(350,350, "joystick");
  //  this.joystick.setScale(.4);

    this.backNavigation = this.add.image(350,350, "backNavigation").setInteractive();
    this.backNavigation.setScale(.3);
    this.backNavigation.once('pointerdown', () => this.scene.start("tatorHall"),this);

    this.forwardNavigation = this.add.image(350,250, "forwardNavigation").setInteractive();
    this.forwardNavigation.setScale(.3);
    this.forwardNavigation.once('pointerdown', () => this.scene.start("tatorHall"),this);

    this.leftNavigation = this.add.image(300,300, "leftNavigation").setInteractive();
    this.leftNavigation.setScale(.3);
    this.leftNavigation.once('pointerdown', () => this.scene.start("cafeLeft"),this);

    this.rightNavigation = this.add.image(400,300, "rightNavigation").setInteractive();
    this.rightNavigation.setScale(.3);
    this.rightNavigation.once('pointerdown', () => this.scene.start("cafeRight"),this);

  }
}
