class gameEnter extends Phaser.Scene {
  constructor() {
    super("gameEnter");
  }

  preload() {
    this.load.image("entranceButton", "pictures/entranceButton.png");
    this.load.image("back_button", "pictures/back_button.png");

    this.load.image("soceUpperLevelButton","pictures/soceUpperLevel.png");
    this.load.image("soceLowerLevelButton","pictures/soceLowerLevel.png");

    this.load.image("soceEntranceUpperLevel", "pictures/soceEntranceUpperLevel.png");
    this.load.image("soceEntranceLowerLevel", "pictures/soceEntranceLowerLevel.png");
  }

  create() {

    // returns null if there is no cookie with tatorTaskID
    if(this.getCookie("tatorTaskID") ==  null) {
      //sets the cookie to the first tasks
      document.cookie = "tatorTaskID = 1";
    }
    // returns null if there is no cookie with tatorRoomID
    if(this.getCookie("tatorRoomID") ==  null) {
      //sets the cookie to the first tasks
      document.cookie = "tatorRoomID = 1";
    }


    // returns null if there is no cookie with tatorTaskID
    if(this.getCookie("soceTaskID") ==  null) {
      //sets the cookie to the first tasks
      document.cookie = "soceTaskID = 1";
    }
    // returns null if there is no cookie with tatorRoomID
    if(this.getCookie("soceRoomID") ==  null) {
      //sets the cookie to the first tasks
      document.cookie = "soceRoomID = 1";
    }

    // loads the tator room
    this.tatorRoomID = this.getCookie("tatorRoomID");
    this.loadOneRoomPicture(this.tatorRoomID);
    // loads the room of soce
    this.soceRoomID = this.getCookie("soceRoomID");
    this.loadOneRoomPictureSOCE(this.soceRoomID);

    // loads the first room soce downstairs
    this.loadOneRoomPictureSOCE(10);


    const background = this.add.image(462,334,"background");
    background.scale = 1.0;

    const person4 = this.add.image(100,460,"person4");
    person4.scale = .1;

    const boomer = this.add.image(825,475,"boomer");
    boomer.scale = 2;

    const soceEntranceLowerLevel = this.add.image("");

    //settings button
    this.settings_button = this.add.image(100,30, "settings_button").setInteractive();
    //  this.settings_button.scale = .8;
    this.settings_button.once('pointerdown', () => {
      this.scene.get("settings").setPrev("gameEnter");
      this.scene.start('settings');
    });

    //back back_button
    this.backButton = this.add.image(82,643, "back_button").setInteractive();
    this.backButton.setScale(.8);
    this.backButton.once('pointerdown', () => this.scene.start('instructions'),this);
    // change back to characterScene

    //entranceButton -- student center
    this.entranceButton = this.add.image(430,120,"entranceButton").setInteractive();
    this.entranceButton.setScale(.6);
    this.entranceButton.once('pointerdown', () => this.scene.start('wholeTator'));

    //entranceButton -- SOCE Upper Level
    this.soceEntranceUpperLevel = this.add.image(430,320,"soceEntranceUpperLevel").setInteractive();
    this.soceEntranceUpperLevel.setScale(.6);
    this.soceEntranceUpperLevel.once('pointerdown', () => this.scene.start('SOCE'));

    //entranceButton -- SOCE Lower Level
    this.soceEntranceLowerLevel = this.add.image(430,520,"soceEntranceLowerLevel").setInteractive();
    this.soceEntranceLowerLevel.setScale(.6);
    this.soceEntranceLowerLevel.once('pointerdown', () => this.scene.start('SOCEDownstairs'));

    /*
    //entranceButton -- SOCE
    this.entranceButtonSOCE = this.add.image(430,420,"entranceButtonSOCE").setInteractive();
    this.entranceButtonSOCE.setScale(.6);
    this.entranceButtonSOCE.once('pointerdown', () => this.scene.start('SOCEDownstairs'));
    */
    //   this.createSpeechBubble(670, 50, 200, 120, 'Hey and Welcome to ArQUade!');
    // this.createSpeechBubble(150, 250, 150, 120, "Thanks Boomer! I'm excited");
    this.createSpeechBubble(670, 50, 200, 220, "QUICK REMINDER: \n Good Luck!");


    //   this.input.on('pointerdown', () => this.scene.start('campusScene'));



  }

  // gets all the room pictures
  async loadOneRoomPicture(id) {

    const imageID = id;

    const data = await this.fetchAllRoomDataImages(imageID);

    const picNorthName = data["picNorth"];
    const picEastName = data["picEast"];
    const picSouthName = data["picSouth"];
    const picWestName =  data["picWest"];


    console.log("This is the room id " + this.imageID);
    console.log("This is the north picture name " + picNorthName);
    console.log("This is the east picture name " + picEastName);
    console.log("This is the west picture name " + picWestName);
    console.log("This is the east picture name " + picSouthName);

    if(picNorthName != "") {
      this.load.image(picNorthName, "pictures/"+picNorthName+".png");
    }
    if(picEastName != "") {
      this.load.image(picEastName, "pictures/"+picEastName+".png");
    }
    if(picSouthName != "") {
      this.load.image(picSouthName, "pictures/"+picSouthName+".png");
    }
    if(picWestName != "") {
      this.load.image(picWestName, "pictures/"+picWestName+".png");
    }
    this.load.start();
    console.log("loading is done");

  }
  // gets all the room pictures
  async loadOneRoomPictureSOCE(id) {

    const imageID = id;

    const data = await this.fetchAllRoomDataImagesSOCE(imageID);

    const picNorthName = data["picNorth"];
    const picEastName = data["picEast"];
    const picSouthName = data["picSouth"];
    const picWestName =  data["picWest"];


    console.log("This is the room id " + this.imageID);
    console.log("This is the north picture name " + picNorthName);
    console.log("This is the east picture name " + picEastName);
    console.log("This is the west picture name " + picWestName);
    console.log("This is the east picture name " + picSouthName);

    if(picNorthName != "") {
      this.load.image(picNorthName, "pictures/"+picNorthName+".png");
    }
    if(picEastName != "") {
      this.load.image(picEastName, "pictures/"+picEastName+".png");
    }
    if(picSouthName != "") {
      this.load.image(picSouthName, "pictures/"+picSouthName+".png");
    }
    if(picWestName != "") {
      this.load.image(picWestName, "pictures/"+picWestName+".png");
    }
    this.load.start();
    console.log("loading is done");

  }

  // FUNCTION THAT CHECKS IF A COOKIE IS NULL
  getCookie(name) {
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
    return match ? match[1] : null;
  }

  async fetchAllRoomDataImages(id) {

    // api url
    const urlRequestImages = ("http://localhost:3000/destination?Room_ID="+id);
    try {
      //      fetch request using the api url
      const res = await fetch(urlRequestImages);
      return res.json();
    }
    catch(err) {
      console.log(err);
    }
  }

  async fetchAllRoomDataImagesSOCE(id) {

    // api url
    const urlRequestImages = ("http://localhost:3000/destinationSOCE?Room_ID="+id);
    try {
      //      fetch request using the api url
      const res = await fetch(urlRequestImages);
      return res.json();
    }
    catch(err) {
      console.log(err);
    }
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
