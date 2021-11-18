class characterScene extends Phaser.Scene {
  constructor() {
    super("characterScene");
  }

  preload() {
    this.load.image("background", "pictures/image1.png");
    this.load.image("person1", "pictures/person1.png");
    this.load.image("person2", "pictures/person2.png");
    this.load.image("person3", "pictures/person3.png");
    this.load.image("person4", "pictures/person4.png");
    this.load.image("options_button", "pictures/options_button.png");
    this.load.image("back_button", "pictures/back_button.png");
    this.load.image("next_button", "pictures/next_button.png");
    this.load.image("boomerwave", "pictures/boomerwave.png");
    this.load.image("settings_button", "pictures/settings_button.png");
    this.load.image("textbox", "pictures/textbox.png")


  }

  create() {
    this.background = this.add.image(400,300,"background");
    this.background.scale = .8;

//    this.options_button = this.add.image(140,30, "options_button");
//    this.options_button.scale =.8;

    //back button
    this.backButton = this.add.image(60,580, "back_button").setInteractive();
    this.backButton.setScale(.6);
    this.backButton.once('pointerdown', () => this.scene.start('instructions'),this);

    this.setting();
//    this.input.on('pointerdown', () => this.scene.start('settings'));

    //next button
    this.nextButton = this.add.image(740,580,"next_button").setInteractive();
    this.nextButton.setScale(.6);
    this.nextButton.once('pointerdown', () => this.scene.start('gameEnter'));

    this.person1 = this.add.image(500,250,"person1");
    this.person1.scale = .3;

    this.person2 = this.add.image(300,250,"person2");
    this.person2.scale = .3;

    this.person3 = this.add.image(300,400,"person3");
    this.person3.scale = .1;

    this.person4 = this.add.image(500,400,"person4");
    this.person4.scale = .1;

//    this.back_button = this.add.image(60,580, "back_button");
//    this.back_button.scale = .6;

  //  this.boomerwave = this.add.image(530,300,"boomerwave");
//    this.boomerwave.scale = 1.2;

    const textbox = this.add.image(400,525,"textbox");
    textbox.scale = .8;

     this.add.text(200, 100, "Pick A Character & Tell Me Your Name", {
       font: "25px Arial",
       fill: "black"
     });

  }
/*
  setting() {
    this.settings_button = this.add.image(75,20, "settings_button").setInteractive();
    this.settings_button.scale = .8;
    this.settings_button.once('pointerdown', () => {
      this.scene.get("settings").setPrev(this.scene.key);
      this.scene.start('settings');
    });
  }
*/


}
