class gameEnter extends Phaser.Scene {
  constructor() {
    super("gameEnter");
  }

  preload() {
    this.load.image("newentrance", "pictures/newentrance.png");
    this.load.image("back_button", "pictures/back_button");
  }

  create() {
    const background = this.add.image(400,300,"background");
    background.scale = .8;

    const newroad = this.add.image(400,520, "newentrance");
    newroad.scale = .7;

    const person4 = this.add.image(100,460,"person4");
    person4.scale = .1;

    this.settings_button = this.add.image(75,20, "settings_button");
    this.settings_button.scale = .8;

    const boomer = this.add.image(700,400,"boomer");
    boomer.scale = 2;

    //back back_button
    this.back_button = this.add.image(60,580,"back_button");
    this.back_button.scale = .6;
    this.input.on('pointerdown', () => this.scene.start('bootGame'));

   this.createSpeechBubble(590, 50, 200, 120, 'Hey Professor Duncan! Welcome to ARQUADE!');
   this.createSpeechBubble(150, 250, 150, 120, "Thanks Boomer! I'm excited");
   this.createSpeechBubble(375, 200, 220, 220, "QUICK REMINDER: \n This a task-based game. You will be given a set of tasks you will need to complete in order to complete your first day as student! Good Luck!");


//   this.input.on('pointerdown', () => this.scene.start('campusScene'));
}


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

}
