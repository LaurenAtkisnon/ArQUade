class wholeTator extends Phaser.Scene {
  constructor() {
    super("wholeTator");
  }
  preload() {
    this.load.image("cafeFront", "pictures/cafeFront.png");
    this.load.image("cafeFront1", "pictures/cafeFront1.png");
    this.load.image("cafeFront2", "pictures/cafeFront2.png");
    this.load.image("cafeFront3", "pictures/cafeFront3.png");
    this.load.image("cafeLeft", "pictures/cafeLeft.png");
    this.load.image("cafeRight", "pictures/cafeRight.png");
    this.load.image("boomer", "pictures/image2.png");
    this.load.image("person4", "pictures/person4.png");


    this.load.image("backNavigation", "pictures/backNavigation.png");
    this.load.image("forwardNavigation", "pictures/forwardNavigation.png");
    this.load.image("leftNavigation", "pictures/leftNavigation.png");
    this.load.image("rightNavigation", "pictures/rightNavigation.png");
    this.load.image("joystick", "pictures/joystick.png");

  }
  create() {
    this.personDirection = 0;
    this.backgroundGroup = this.add.group();

    this.background = this.add.image(400,300,"cafeFront").setDepth(1);
    this.background.scale = .275;
    this.backgroundGroup.add(this.background);
    this.setting();
    this.navigationButtonsTest("wholeTator3","wholeTator","wholeTator1","wholeTator2");
  //  this.setDatabaseConnection();

  }

  navigationButtons(sceneleft,sceneforward,sceneright,sceneback) {


    this.backNavigation = this.add.image(400,550, "backNavigation").setInteractive();
    this.backNavigation.setScale(.3);
    this.backNavigation.on('pointerdown', () => {
      this.scene.get(sceneback).setLastLocation(this.scene.key);
      this.scene.start(sceneback),this});

    this.forwardNavigation = this.add.image(400,450, "forwardNavigation").setInteractive();
    this.forwardNavigation.setScale(.3);
    this.forwardNavigation.on('pointerdown', () => {
      this.scene.get(sceneforward).setLastLocation(this.scene.key);
      this.scene.start(sceneforward),this});

    this.leftNavigation = this.add.image(350,500, "leftNavigation").setInteractive();
    this.leftNavigation.setScale(.3);
    this.leftNavigation.on('pointerdown', () => {
      this.scene.get(sceneleft).setLastLocation(this.scene.key);
      this.scene.start(sceneleft),this});

    this.rightNavigation = this.add.image(450,500, "rightNavigation").setInteractive();
    this.rightNavigation.setScale(.3);
    this.rightNavigation.on('pointerdown', () => {
      this.scene.get(sceneright).setLastLocation(this.scene.key);
      this.scene.start(sceneright),this});

  }
  navigationButtonsTest(sceneleft,sceneforward,sceneright,sceneback) {


    this.backNavigation = this.add.image(400,550, "backNavigation").setInteractive().setDepth(10);
    this.backNavigation.setScale(.3);
    this.backNavigation.on('pointerdown', () => {
    //  this.scene.get(sceneback).setLastLocation(this.scene.key);
  /*  this.scene.start(sceneback),this*/
  //subtract 2 from the person Location to go backwards and face the opposite direction
  this.personDirection = (this.personDirection -2) %4
// this case happens if their position is 1 looking east and wants to go backwards
  if (this.personDirection == -1){
    this.personDirection = 3;
    }
    // this happens when the user wants to go backward from the 0 position looking north.
  if (this.personDirection <0) {
    this.personDirection = -(this.personDirection);
  }
  console.log(this.personDirection);
});

    this.forwardNavigation = this.add.image(400,450, "forwardNavigation").setInteractive().setDepth(10);
    this.forwardNavigation.setScale(.3);
    this.forwardNavigation.on('pointerdown', () => {

    //  this.scene.get(sceneforward).setLastLocation(this.scene.key);
  /*  this.scene.start(sceneforward),this*/
  switch(this.personDirection) {
    case 0 : console.log("case 0 this is where we would call the north link in the database");
    break;
    case 1 : console.log("case 1 this is where we would call the east link in the database");
    break;
    case 2 : console.log("case 2 this is where we would call south link picture in the database");
    break;
    case 3 : console.log("case 3 this is where we would call west link picture in the database");
    break;
  }
});

    this.leftNavigation = this.add.image(350,500, "leftNavigation").setInteractive().setDepth(10);
    this.leftNavigation.setScale(.3);
    this.leftNavigation.on('pointerdown', () => {
    //  this.scene.get(sceneleft).setLastLocation(this.scene.key);
      // checks if the personDirection is 0. If its 0 set it to 3. If not subtract 1.

        this.personDirection = (this.personDirection + 3) % 4;
        console.log(this.personDirection);
        this.updateScene();
    /*  this.scene.start(sceneleft),this*/
  });
    this.rightNavigation = this.add.image(450,500, "rightNavigation").setInteractive().setDepth(10);
    this.rightNavigation.setScale(.3);
    this.rightNavigation.on('pointerdown', () => {
      this.personDirection = (this.personDirection + 1) % 4;
      console.log(this.personDirection);
      this.updateScene();
  });

  }

  setting() {
    this.settings_button = this.add.image(75,20, "settings_button").setInteractive().setDepth(10);
    this.settings_button.scale = .8;
    this.settings_button.on('pointerdown', () => {
      this.scene.get("settings").setPrev(this.scene.key);
      this.scene.start('settings');
    });
  }

// will remove the background setting
  updateScene() {
    this.backgroundGroup.clear(true);
    switch(this.personDirection) {
      case 0 :
      this.background = this.add.image(400,300,"cafeFront").setDepth(1);
      this.background.scale = .275;
      this.backgroundGroup.add(this.background);
      console.log("case 0 this is where we would call the different picture in the database");
      break;
      case 1 :

      this.background = this.add.image(400,300,"cafeFront1").setDepth(1);
      this.background.scale = .275;
      this.backgroundGroup.add(this.background);
    //  this.scene.get("wholeTator1").setpersonDirection(this.getpersonDirection());
    //  this.scene.start("wholeTator1");
      console.log("case 1 this is where we would call the different picture in the database");
      break;
      case 2 :
      this.background = this.add.image(400,300,"cafeFront2").setDepth(1);
      this.background.scale = .275;
      this.backgroundGroup.add(this.background);
    //  this.scene.get("wholeTator2").setpersonDirection(this.getpersonDirection());
    //  this.scene.start("wholeTator2");
      console.log("case 2 this is where we would call the different picture in the database");
      break;
      case 3 :
      this.background = this.add.image(400,300,"cafeFront3").setDepth(1);
      this.background.scale = .275;
      this.backgroundGroup.add(this.background);
    //  this.scene.get("wholeTator3").setpersonDirection(this.getpersonDirection());
    //  this.scene.start("wholeTator3");
      console.log("case 3 this is where we would call the different picture in the database");
      break;
    }

  }

  setDatabaseConnection() {

    const mysql = require('mysql');
    const connection = mysql.createConnection({
      host: 'us-cdbr-east-04.cleardb.com',
      user: 'b3c19bde0098f7',
      password: '811d1ee5',
    });
    connection.connect((err) => {
      if (err) throw err;
      console.log('Connected!');
    });

    connection.query('use  heroku_8b1f2a27d4def71');
    connection.query('select * from Room' , (err, res) => {
      console.log(res)
    });
  }

  getEastRoom(id) {

  }
  getNorthRoom() {

  }
  getSouthRoom() {

  }
  getWestRoom() {

  }


  getLastLocation() {
    return this.lastLocation;

  }
  setLastLocation(lastScene) {
    this.lastLocation = lastScene;
  }

  getpersonDirection() {
    return this.personDirection;
  }
  setpersonDirection(personDirection) {
    this.personDirection = personDirection;

  }
}
