class MenuScene extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
// pre load images for scenes
  preload() {
    this.load.image("background", "pictures/image1.png");
    this.load.image("boomer", "pictures/image2.png");
    this.load.image("play_button", "pictures/play_button.png");
    this.load.audio("title_music", "audio/shuinvy-childhood.mp3");
    this.load.image("options_button", "pictures/options_button.png");
    this.load.image("back_button", "pictures/back_button.png");
    this.load.image("welcome", "pictures/welcome.png");
    this.load.image("settings_button", "pictures/settings_button.png");

  //  this.load.spritesheet('')
  }

// method that creates objects for the scene
  create() {

//play button
//const play_button = this.add.image(400,300, "play_button");

//background
const background = this.add.image(400,300,"background");
background.scale = .8;

//boomer
const boomer = this.add.image(750,480,"boomer");
boomer.scale = 1.4;

// game name
const welcome = this.add.image(400,100,"welcome");
welcome.scale = .6;

// settings button
const settings_button = this.add.image(75,20, "settings_button");
settings_button.scale = .8;
//this.input.on('pointerdown', () => this.scene.start('settings'));

// text of boomer talking to the user=
    this.add.text(575, 500,
      "Hi! I'm Boomer,\n I will be here\n to assist you.", {
      font: "15px Quicksand",
      fill: "black"
    });

this.startButton = this.add.image(400,300,'play_button').setInteractive();
this.startButton.setScale(.8);
this.startButton.once('pointerdown', () => this.scene.start('instructions'), this);

// adds music to the menu screen
/*
    this.sound.pauseOnBlur = false;
    this.sound.play("title_music", {
      loop: true
    });
*/

  }
}

//back button
//const back_button = this.add.image(60,580, "back_button");
//back_button.scale = .6;
//back_button.setInteractive()
//back_button.on('pointerdown', () => button.setScale( 1.1 ))
//back_button.on('pointerup', () => button.setScale( 1 ));
// welcome to arquade font on screen
//    this.add.text(200, 100, "WELCOME TO ARQUADE", {
    //  fontFamily: "25px Arial",
    //  fill: "black"
//    fontFamily: 'Bahiana',
//    fontSize: '40px',
//    color: '#000000',
//    fontStyle: 'normal'
//    });

    //this.add.image(200,100, "welcome")

// works with text
/*
this.startButton = this.add.image(400, 300, 'play_button')
.setOrigin(0.5)
   .setInteractive({ useHandCursor: true })
   .on('pointerdown', () => this.scene.start('instructions'));
*/

/*
this.startButton = this.add.text(400, 300, 'Enter')
.setOrigin(0.5)
   .setInteractive({ useHandCursor: true })
   .on('pointerdown', () => this.scene.start('instructions'));
*/

    // play button
//    const play_button = this.add.image(400,300, "play_button");
  //  this.input.on('pointerdown', () => this.scene.start('instructions'));
//    play_button.scale = .8;
