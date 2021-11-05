class settings extends Phaser.Scene {
  constructor() {
    super("settings");
  }

  preload() {
    this.load.image("background", "pictures/image1.png");
    this.load.image("next_button", "pictures/next_button.png");
    this.load.image("back_button", "pictures/back_button.png");
  //  this.load.image("home_button", "pictures/home_button.png");
  //  this.load.image("howtoplay_button", "pictures/howtoplay_button.png");
    this.load.image("settings_button", "pictures/settings_button.png");
    this.load.image("home_button", "pictures/home_button.png");
    this.load.image("settingstitle_button", "pictures/settingstitle_button.png");

    this.load.image("togglebutton", "pictures/toggle button.png")

  }

  create() {
    this.background = this.add.image(400,300,"background");
    this.background.scale = .8;

    const togglebutton1 = this.add.image(500,230, "togglebutton");
    const togglebutton2 = this.add.image(400,300, "togglebutton");

    //settings button
    const settings_button = this.add.image(75,20, "settings_button");
    settings_button.scale = .8;

    //"settings" title
    const settingstitle_button = this.add.image(400, 100, "settingstitle_button");
    settingstitle_button.scale = .6;

    //next_button
    this.next_button = this.add.image(740,580,"next_button");
    this.next_button.scale = .6;
    this.input.on('pointerdown', () => this.scene.start('characterScene'));

    var content = [
    "Boomer Hints \n \nMusic",
];
//write the text

//if you cant get the toggles to work, USE THE BELOW
//this.add.text(270, 220, content, {
//and uncomment the align center call
this.add.text(200, 220, content, {
  fontFamily: "Gill Sans",
  fontSize: '40px',
//  align: 'center',
  color: 'white' });


//back button
const back_button = this.add.image(60,580, "back_button");
back_button.scale = .6;

//next button
//const next_button = this.add.image(740,580, "next_button");
//this.input.on('pointerdown', () => this.scene.start('gameEnter'));
//next_button.scale = .6;

//const back_button = this.add.image(60,580, "back_button");
//this.input.on('pointerdown', () => this.scene.start('MenuScene'));
//back_button.scale = .6;

//const home_button = this.add.image(60,580, "home_button");
// this.input.on('pointerdown', () => this.scene.start('MenuScene'));
//home_button.scale = .6;
}

  }
