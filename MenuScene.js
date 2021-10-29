class MenuScene extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
//lauren is showing you something
// pre load images for scenes
  preload() {
    this.load.image("background", "pictures/image1.png");
    this.load.image("boomer", "pictures/image2.png");
    this.load.image("play_button", "pictures/play_button.png");
    this.load.audio("title_music", "audio/shuinvy-childhood.mp3");
    this.load.image("options_button", "pictures/options_button.png");
  }

// method that creates objects for the scene
  create() {
const background = this.add.image(400,300,"background");
background.scale = .8;

const boomer = this.add.image(750,480,"boomer");
boomer.scale = 1.4;

// play button
const play_button = this.add.image(400,300, "play_button");

// option button
const options_button = this.add.image(70,20, "options_button");

// welcome to arquade font on screen
    this.add.text(250, 100, "WELCOME TO ARQUADE", {
      font: "25px Arial",
      fill: "black"
    });

// text of boomer talking to the user=
    this.add.text(520, 400,
      "Hi! I'm Boomer,\n I will be here\n to assist you.", {
      font: "25px Arial",
      fill: "black"
    });


// adds music to the menu screen
/*
    this.sound.pauseOnBlur = false;
    this.sound.play("title_music", {
      loop: true
    });
*/


  }
}
