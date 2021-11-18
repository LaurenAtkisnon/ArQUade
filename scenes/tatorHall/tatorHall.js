class tatorHall extends Phaser.Scene {
  constructor() {
    super("tatorHall");
  }

  preload() {
    this.load.image("studentCenter", "pictures/studentCenter");
    this.load.image("play_button", "pictures/play_button");
    this.load.image("next_button", "pictures/next_button.png");

  }

  create() {
    //background
    const background = this.add.image(400,300,"studentCenter");
    background.scale = 1;

    this.startButton = this.add.image(400,550,'play_button').setInteractive();
    this.startButton.setScale(.8);
    this.startButton.once('pointerdown', () => this.scene.start('cafeFront'), this);

    //character
    const person4 = this.add.image(100,460,"person4");
    person4.scale = .2;

    //boomer
    const boomer = this.add.image(700,400,"boomer");
    boomer.scale = 2;

//    this.options_button = this.add.image(175,32, "options_button");


//   this.createSpeechBubble(590, 50, 200, 120, 'Are you ready? Click next to start your first task!');
//   this.createSpeechBubble(150, 250, 150, 120, "You got it Boomer");
  // this.createSpeechBubble(375, 200, 220, 220, "QUICK REMINDER: \n This a task-based game. You will be given a set of tasks you will need to complete in order to complete your first day as student! Good Luck!");


   //this.input.on('pointerdown', () => this.scene.start('campusScene'));
}}
