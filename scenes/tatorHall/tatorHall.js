class tatorHall extends Phaser.Scene {
  constructor() {
    super("tatorHall");
  }

  preload() {
    this.load.image("cafeFront", "pictures/cafeFront");
    this.load.image("cafeLeft", "pictures/cafeLeft");
    this.load.image("cafeRight", "pictures/cafeRight");
  }

  create() {
    const background = this.add.image(400,300,"background");
    background.scale = .8;

    const person4 = this.add.image(100,460,"person4");
    person4.scale = .2;

    this.options_button = this.add.image(175,32, "options_button");

    const boomer = this.add.image(700,400,"boomer");
    boomer.scale = 2;

   this.createSpeechBubble(590, 50, 200, 120, 'Hey Professor Duncan! Welcome to ARQUADE!');
   this.createSpeechBubble(150, 250, 150, 120, "Thanks Boomer! i'm excited");
   this.createSpeechBubble(375, 200, 220, 220, "QUICK REMINDER: \n This a task-based game. You will be given a set of tasks you will need to complete in order to complete your first day as student! Good Luck!");


   this.input.on('pointerdown', () => this.scene.start('campusScene'));
