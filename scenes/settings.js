class settings extends Phaser.Scene {
  constructor() {
    super("settings");
  }

  preload() {
    this.load.image("background", "pictures/image1.png");
    this.load.image("next_button", "pictures/next_button.png");
  //  this.load.image("back_button", "pictures/back_button.png");
  //  this.load.image("home_button", "pictures/home_button.png");
    //this.load.image("howtoplay_button", "pictures/howtoplay_button.png");
    this.load.image("settings_button", "pictures/settings_button.png");
    this.load.image("home_button", "pictures/home_button.png");
    this.load.image("settingstitle_button", "pictures/settingstitle_button.png");

  }

  create() {
    this.background = this.add.image(400,300,"background");
    this.background.scale = .8;

    //"how to play"
    const howtoplay_button = this.add.image(400,100,"howtoplay_button");
    howtoplay_button.scale = .6;

    //settings button
    const settings_button = this.add.image(75,20, "settings_button");
    settings_button.scale = .8;

    //"settings" title
    const settingstitle_button = this.add.image(75,20, "settingstitle_button");
    settingstitle_button.scale = .8;

    var content = [
    "words words words",
];
//write the text
this.add.text(30, 150, content, {
  fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
  fontSize: '20px',
  align: 'center',
  color: '#000080' });


//back button
//const back_button = this.add.image(60,580, "back_button");
//back_button.scale = .6;

//next button
const next_button = this.add.image(740,580, "next_button");
this.input.on('pointerdown', () => this.scene.start('gameEnter'));
next_button.scale = .6;

//const back_button = this.add.image(60,580, "back_button");
//this.input.on('pointerdown', () => this.scene.start('MenuScene'));
//back_button.scale = .6;

const home_button = this.add.image(60,580, "home_button");
// this.input.on('pointerdown', () => this.scene.start('MenuScene'));
home_button.scale = .6;
}

  }
