class tatorHallway extends Phaser.Scene {
  constructor() {
    super("tatorHallway");
  }

  preload() {

    this.load.image("person4", "pictures/person4.png");
    this.load.image("tatorHallway", "pictures/tatorHallway.png");

    this.load.image("boomer", "pictures/image2.png");

// hi

  }

  create() {
    const background = this.add.image(400,300,"tatorHallway");
    background.scale = .3;

    console.log("hello tatorhall");

    //character
    const person4 = this.add.image(100,460,"person4");
    person4.scale = .2;

    //boomer
    const boomer = this.add.image(700,400,"boomer");
    boomer.scale = 2;

    //settings
    this.setting();

    this.navigationButtons("bookStore", "tatorHallway2","tatorBathroom", this.getLastLocation() );
    //backwards button should go to cafeRight

    //forwards button should go to tatorHallway2

    //left button should go to bookStore

    //right button should go to tatorBathroom



    this.createSpeechBubble(590, 50, 200, 120, "Correct! Should we continue forward or make a turn?");
    this.createSpeechBubble(150, 250, 150, 120, "forward!");
  }
  //this.input.on('pointerdown', () => this.scene.start('campusScene'));
 // function that creates a bubble speeech box
  createSpeechBubble (x, y, width, height, quote) {
   var bubbleWidth = width;
   var bubbleHeight = height;
   var bubblePadding = 10;
   var arrowHeight = bubbleHeight / 4;

   var bubble = this.add.graphics({ x: x, y: y });

   //  Bubble shadow
   bubble.fillStyle(0x222222, 0.5);
   bubble.fillRoundedRect(6, 6, bubbleWidth, bubbleHeight, 16);

   //  Bubble color
   bubble.fillStyle(0xffffff, 1);

   //  Bubble outline line style
   bubble.lineStyle(4, 0x565656, 1);

   //  Bubble shape and outline
   bubble.strokeRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);
   bubble.fillRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);

   //  Calculate arrow coordinates
   var point1X = Math.floor(bubbleWidth / 7);
   var point1Y = bubbleHeight;
   var point2X = Math.floor((bubbleWidth / 7) * 2);
   var point2Y = bubbleHeight;
   var point3X = Math.floor(bubbleWidth / 7);
   var point3Y = Math.floor(bubbleHeight + arrowHeight);

   //  Bubble arrow shadow
   bubble.lineStyle(4, 0x222222, 0.5);
   bubble.lineBetween(point2X - 1, point2Y + 6, point3X + 2, point3Y);

   //  Bubble arrow fill
   bubble.fillTriangle(point1X, point1Y, point2X, point2Y, point3X, point3Y);
   bubble.lineStyle(2, 0x565656, 1);
   bubble.lineBetween(point2X, point2Y, point3X, point3Y);
   bubble.lineBetween(point1X, point1Y, point3X, point3Y);

   var content = this.add.text(0, 0, quote, { fontFamily: 'Arial', fontSize: 20, color: '#000000', align: 'center', wordWrap: { width: bubbleWidth - (bubblePadding * 2) } });

   var b = content.getBounds();

   content.setPosition(bubble.x + (bubbleWidth / 2) - (b.width / 2), bubble.y + (bubbleHeight / 2) - (b.height / 2));
}
setting() {
 this.settings_button = this.add.image(75,20, "settings_button").setInteractive();
 this.settings_button.scale = .8;
 this.settings_button.once('pointerdown', () => {
   this.scene.get("settings").setPrev(this.scene.key);
   this.scene.start('settings');
 });

}
getLastLocation() {
  return this.lastLocation;

}
setLastLocation(lastScene) {
  this.lastLocation = lastScene;
}

navigationButtons(sceneleft,sceneforward,sceneright,sceneback) {


  this.backNavigation = this.add.image(400,550, "backNavigation").setInteractive();
  this.backNavigation.setScale(.3);
  this.backNavigation.once('pointerdown', () => {
    this.scene.get(sceneback).setLastLocation(this.scene.key);
    this.scene.start(sceneback),this});

  this.forwardNavigation = this.add.image(400,450, "forwardNavigation").setInteractive();
  this.forwardNavigation.setScale(.3);
  this.forwardNavigation.once('pointerdown', () => {
    this.scene.get(sceneforward).setLastLocation(this.scene.key);
    this.scene.start(sceneforward),this});

  this.leftNavigation = this.add.image(350,500, "leftNavigation").setInteractive();
  this.leftNavigation.setScale(.3);
  this.leftNavigation.once('pointerdown', () => {
    this.scene.get(sceneleft).setLastLocation(this.scene.key);
    this.scene.start(sceneleft),this});

  this.rightNavigation = this.add.image(450,500, "rightNavigation").setInteractive();
  this.rightNavigation.setScale(.3);
  this.rightNavigation.once('pointerdown', () => {
    this.scene.get(sceneright).setLastLocation(this.scene.key);
    this.scene.start(sceneright),this});

}

}
