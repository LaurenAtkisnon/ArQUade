class instructions extends Phaser.Scene {
  constructor() {
    super("instructions");
  }

  // preloads the pictures --this is how images get into the "game"
  preload() {
    this.load.image("background", "pictures/image1.png");
    this.load.image("next_button", "pictures/next_button.png");
    this.load.image("back_button", "pictures/back_button.png");
    this.load.image("home_button", "pictures/home_button.png");
    this.load.image("howtoplay_button", "pictures/howtoplay_button.png");
    this.load.image("settings_button", "pictures/settings_button.png");
    this.load.image("home_button", "pictures/home_button.png");
    this.load.image("instructionButtons", "pictures/instructionButtons.png");
  }

  create() {
    this.background = this.add.image(462,334,"background");
    this.background.scale = 1.0;

    //"how to play button"
    const howtoplay_button = this.add.image(460,115,"howtoplay_button");
    howtoplay_button.scale = .6;

    //buttons on page
    this.instructionButtons = this.add.image(125, 315, "instructionButtons");
    this.instructionButtons.scale = .4;

    //settings button | scale was at .8
    this.settings_button = this.add.image(100,30, "settings_button").setInteractive();
    this.settings_button.once('pointerdown', () => {
      this.scene.get("settings").setPrev("instructions");
      this.scene.start('settings');

    });

    // instructions
    var content = [
      "Welcome to ArQUade & Welcome to Quinnipiac!",
      "Are you ready to play?",
      "",
    //  "Your goal is to make it through the first day of classes in the School of Engineering",
    //  "and Computing. Complete the tasks, figure your way through campus,",
    //  "outlined on the right-hand side navigation bar.",
      "Tasks will be given to you in the top right-hand corner",
      "Use your arrow keys or Use the arrow buttons on screen",
      "to complete your tasks.",
      "",
      "#GoBobcats",
      "",
      "Best of Luck from Lauren A & Harrison D",
    ];
    //write the text --   fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
    this.add.text(200, 175, content, {
      fontFamily: 'Comic Sans MS',
      fontSize: '25px',
      fontStyle: 'bold',
      fontVariant: 'small-caps',
      align: 'left',
      color: '#FFFFFF',


    });

    //home button goes back to home
    this.homeButton = this.add.image(82,643, "home_button").setInteractive();
    this.homeButton.setScale (.8);
    this.homeButton.once('pointerdown', () => this.scene.start('bootGame'))

    // next button goes to next scene which is character Scene
    this.nextButton = this.add.image(847,643,"next_button").setInteractive();
    this.nextButton.setScale(.8);
    //this.nextButton.once('pointerdown', () => this.scene.start('characterScene'));
    this.nextButton.once('pointerdown', () => this.scene.start('gameEnter'));

  }
}
