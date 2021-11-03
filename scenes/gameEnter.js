class gameEnter extends Phaser.Scene {
  constructor() {
    super("gameEnter");
  }

  preload() {
    this.load.image("background", "pictures/image1.png");
    this.load.image("boomer", "pictures/image2.png");
    this.load.audio("title_music", "audio/shuinvy-childhood.mp3");
    this.load.image("options_button", "pictures/options_button.png");
    this.load.image("back_button", "pictures/back_button.png");
    this.load.image("next_button", "pictures/next_button.png")
  }


  create() {
    this.background = this.add.image(400,300,"background");
    this.background.scale = .8;

//    this.options_button = this.add.image(140,30, "options_button");
//    this.options_button.scale =.8;

    const settings_button = this.add.image(75,20, "settings_button");
    settings_button.scale = .8;
    this.input.on('pointerdown', () => this.scene.start('settings'));


    //next button
    const next_button = this.add.image(740,580,"next_button");
    next_button.scale = .6;
    this.input.on('pointerdown', () => this.scene.start('instructions'));
    back_button.scale = .6;

    //back button
    const back_button = this.add.image(60,580, "back_button");
    this.input.on('pointerdown', () => this.scene.start('characterScene'));
    back_button.scale = .6;
  }}
