const roomTable = [];
class MenuScene extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
// pre load images for scenes
  preload() {
    this.load.image("homeBackground", "pictures/image11.png");
    this.load.image("boomer", "pictures/image2.png");
    this.load.image("play_button", "pictures/play_button.png");
    this.load.audio("title_music", "audio/shuinvy-childhood.mp3");
    this.load.image("options_button", "pictures/options_button.png");
    this.load.image("back_button", "pictures/back_button.png");
    this.load.image("welcome", "pictures/welcome.png");
    this.load.image("settings_button", "pictures/settings_button.png");
    this.load.image("joystick", "pictures/joystick.png");
  //  this.load.image("backNavigation", "pictures/backNavigation.png");
  //  this.load.image("forwardNavigation", "pictures/forwardNavigation.png");
  //  this.load.image("leftNavigation", "pictures/leftNavigation.png");
  //  this.load.image("rightNavigation", "pictures/rightNavigation.png");
//    this.load.image("joystick", "pictures/joystick.png");
//    this.load.image("cafeFront0", "pictures/cafeFront0.png");
  //  this.load.image("cafeFront1", "pictures/cafeFront1.png");
//    this.load.image("cafeFront2", "pictures/cafeFront2.png");
//    this.load.image("cafeFront3", "pictures/cafeFront3.png");

this.load.image("cafeFront0", "pictures/cafeFront0.png");
this.load.image("cafeFront1", "pictures/cafeFront1.png");
this.load.image("cafeFront2", "pictures/cafeFront2.png");
this.load.image("cafeFront3", "pictures/cafeFront3.png");

this.load.image("soceEntrance0", "pictures/soceEntrance0.png");
this.load.image("soceEntrance1", "pictures/soceEntrance1.png");
this.load.image("soceEntrance2", "pictures/soceEntrance2.png");
this.load.image("soceEntrance3", "pictures/soceEntrance3.png");

this.load.image("backNavigation", "pictures/backNavigation.png");
this.load.image("forwardNavigation", "pictures/forwardNavigation.png");
this.load.image("leftNavigation", "pictures/leftNavigation.png");
this.load.image("rightNavigation", "pictures/rightNavigation.png");

this.load.image("downNavigationSOCE", "pictures/downNavigationSOCE.png");
this.load.image("forwardNavigationSOCE", "pictures/forwardNavigationSOCE.png");
this.load.image("leftNavigationSOCE", "pictures/leftNavigationSOCE.png");
this.load.image("rightNavigationSOCE", "pictures/rightNavigationSOCE.png");




this.load.image("joystick", "pictures/joystick.png");
  //  this.load.spritesheet('')
  }

// method that creates objects for the scene
  create() {

//background (x,y)
const background = this.add.image(462,334,"homeBackground");


// the start button goes to instruction scene
this.startButton = this.add.image(450,500,'play_button').setInteractive();
this.startButton.setScale(.8);
this.startButton.once('pointerdown', () => this.scene.start('instructions'), this);

//  this.tatorRoomID = parseInt(this.getCookie("tatorRoomID"));
//  console.log("This is the tator room number " + this.tatorRoomID)
//  this.loadOneRoomPicture(this.tatorRoomID);


// adds music to the menu screen
/*
    this.sound.pauseOnBlur = false;
    this.sound.play("title_music", {
      loop: true
    });
*/

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
}
