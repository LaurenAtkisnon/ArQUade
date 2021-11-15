class instructions extends Phaser.Scene {
  constructor() {
    super("instructions");
  }

  preload() {
    //this is how images get into the "game"
    this.load.image("background", "pictures/image1.png");
    this.load.image("next_button", "pictures/next_button.png");
    this.load.image("back_button", "pictures/back_button.png");
    this.load.image("home_button", "pictures/home_button.png");
    this.load.image("howtoplay_button", "pictures/howtoplay_button.png");
    this.load.image("settings_button", "pictures/settings_button.png");
    this.load.image("home_button", "pictures/home_button.png");
  }

  create() {
    this.background = this.add.image(400,300,"background");
    this.background.scale = .8;

    //"how to play"
    const howtoplay_button = this.add.image(400,90,"howtoplay_button");
    howtoplay_button.scale = .6;

    //settings button
    const settings_button = this.add.image(75,20, "settings_button");
    settings_button.scale = .8;
  //  this.input.on('pointerdown', () => this.scene.start('settings'));

//    const next_button = this.add.image(740,580, "next_button");
//    this.input.on('pointerdown', () => this.scene.start('gameEnter'));
//    next_button.scale = .6;

    var content = [
    "Welcome to ArQUade && Welcome to Quinnipiac! Are you ready to play? ",
    "",
    "Let's get down to business, here is how you play the game (it's fairly simple) ",
    "Your goal is to make it through the first day of classes in the School of Engineering",
    "and Computing. Complete the tasks, figure your way through the SOEC,",
    "outlined on the right-hand side navigation bar. You can use your arrow keys or",
    "you can click the buttons located on the screen to complete your tasks",
    "",
    "Boomer the Bobcat will be with you every step of the way and can give you hints",
    "(Boomer Hints can be toggled off in Settings)",
    "Give it your best bet! Have a blast!",
    "",
    "#GoBobcats",
    "",
    "We hope you enjoy -- Lauren A & Harrison D",
];
//write the text
this.add.text(30, 150, content, {
  fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
  fontSize: '20px',
  align: 'center',
  color: '#000080'});

/*
  this.add.text(740, 580, 'Next Button', {
      fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
      fontSize: '20px',
      align: 'center',
      color: '#000080'
  });
  .setInteractive ({useHandCursor: true})
  .on('pointerdown', () => this.scene.start('bootGame'))
  .setScale (.6);
  */

/*
  const test = this.add.text(200, 280, 'hello');
  test.setInteractive({ useHandCursor: true })
  test.on('pointerdown', this.scene.start('characterScene'));
*/


//const startButton = scene.add.text(740, 580, 'Next Button');

//text = this.add.text(740, 580, 'Next Button');


//THIS WORKS
this.homeButton = this.add.image(60,580, "home_button").setInteractive();
this.homeButton.setScale (.6);

this.homeButton.once('pointerdown', () => this.scene.start('bootGame'))



//this.add.image(740, 580, "next_button")
//.setInteractive ({useHandCursor: true})
//.on('pointerdown', () => this.scene.start('characterScene'));
//.setScale (.6);

this.nextButton = this.add.image(740,580,"next_button").setInteractive();
this.nextButton.setScale(.6);
this.nextButton.once('pointerdown', () => this.scene.start('settings'));


//back button
//const back_button = this.add.image(60,580, "back_button");
//back_button.scale = .6;

//next button
//this.next_button = this.add.image(740,580, "next_button");
//this.input.on('pointerdown', () => this.scene.start('characterScene'));
//this.next_button.scale = .6;

//this.add.sprite(740, 580, "next_button");
//this.input.once('pointerdown', function(){
//  console.log('From instructions to characterScene');
//  this.scene.start('characterScene');
//}, this);

//const back_button = this.add.image(60,580, "back_button");
//this.input.on('pointerdown', () => this.scene.start('MenuScene'));
//back_button.scale = .6;

/* const self = this;
this.input.on('gameobjectdown', function () {
   self.scene.start('MenuScene');
}); */

/* this.home_button = this.add.image(60,580, "home_button");
this.home_button.on('pointerdown', () => this.scene.start('MenuScene'));
this.home_button.scale = .6; */


//this.add.sprite(60, 580, "home_button");
//this.home_button.scale = .6;
//this.input.once('pointerdown', function() {
//  console.log('From instructions to MenuScene');
//  this.scene.start('bootGame');
//}, this);

}

  }
