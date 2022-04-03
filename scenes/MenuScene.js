const roomTable = [];
class MenuScene extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
// pre load images for scenes
  preload() {
    this.load.image("homeBackground", "pictures/image11.png");
    this.load.image("boomer", "pictures/image2.png");
    this.load.image("play_button", "pictures/play_button.png");
    this.load.audio("title_music", "audio/shuinvy-childhood.mp3");
    this.load.image("options_button", "pictures/options_button.png");
    this.load.image("back_button", "pictures/back_button.png");
    this.load.image("welcome", "pictures/welcome.png");
    this.load.image("settings_button", "pictures/settings_button.png");
    this.load.image("joystick", "pictures/joystick.png");
  //  this.load.image("backNavigation", "pictures/backNavigation.png");
  //  this.load.image("forwardNavigation", "pictures/forwardNavigation.png");
  //  this.load.image("leftNavigation", "pictures/leftNavigation.png");
  //  this.load.image("rightNavigation", "pictures/rightNavigation.png");
//    this.load.image("joystick", "pictures/joystick.png");
//    this.load.image("cafeFront0", "pictures/cafeFront0.png");
  //  this.load.image("cafeFront1", "pictures/cafeFront1.png");
//    this.load.image("cafeFront2", "pictures/cafeFront2.png");
//    this.load.image("cafeFront3", "pictures/cafeFront3.png");

this.load.image("cafeFront0", "pictures/cafeFront0.png");
this.load.image("cafeFront1", "pictures/cafeFront1.png");
this.load.image("cafeFront2", "pictures/cafeFront2.png");
this.load.image("cafeFront3", "pictures/cafeFront3.png");

this.load.image("soceEntrance0", "pictures/soceEntrance0.png");
this.load.image("soceEntrance1", "pictures/soceEntrance1.png");
this.load.image("soceEntrance2", "pictures/soceEntrance2.png");
this.load.image("soceEntrance3", "pictures/soceEntrance3.png");

this.load.image("backNavigation", "pictures/backNavigation.png");
this.load.image("forwardNavigation", "pictures/forwardNavigation.png");
this.load.image("leftNavigation", "pictures/leftNavigation.png");
this.load.image("rightNavigation", "pictures/rightNavigation.png");

this.load.image("downNavigationSOCE", "pictures/downNavigationSOCE.png");
this.load.image("forwardNavigationSOCE", "pictures/forwardNavigationSOCE.png");
this.load.image("leftNavigationSOCE", "pictures/leftNavigationSOCE.png");
this.load.image("rightNavigationSOCE", "pictures/rightNavigationSOCE.png");




this.load.image("joystick", "pictures/joystick.png");
  //  this.load.spritesheet('')
  }

// method that creates objects for the scene
  create() {

//background (x,y)
const background = this.add.image(462,334,"homeBackground");

// background.scale = 1.0;


//boomer
//const boomer = this.add.image(750,480,"boomer");
// boomer.scale = 1.4;

// game name
// const welcome = this.add.image(400,100,"welcome");
// welcome.scale = .6;

// settings button
//const settings_button = this.add.image(75,20, "settings_button");
// settings_button.scale = .8;


// text of boomer talking to the user=
//    this.add.text(575, 500,
//      "Hi! I'm Boomer,\n I will be here\n to assist you.", {
//      font: "15px Quicksand",
//      fill: "black"
//    });

// the start button goes to instruction scene
this.startButton = this.add.image(450,500,'play_button').setInteractive();
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
