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
    this.personLocation = 0;


    this.background = this.add.image(400,300,"cafeFront");
    this.background.scale = .275;


    this.setting();
    this.navigationButtonsTest("wholeTator3","wholeTator","wholeTator2","wholeTator3");
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
  navigationButtonsTest(sceneleft,sceneforward,sceneright,sceneback) {


    this.backNavigation = this.add.image(400,550, "backNavigation").setInteractive();
    this.backNavigation.setScale(.3);
    this.backNavigation.once('pointerdown', () => {
    //  this.scene.get(sceneback).setLastLocation(this.scene.key);
  /*  this.scene.start(sceneback),this*/
  //subtract 2 from the person Location to go backwards and face the opposite direction
  this.personLocation = (this.personLocation -2) %4
// this case happens if their position is 1 looking east and wants to go backwards
  if (this.personLocation == -1){
    this.personLocation = 3;
    }
    // this happens when the user wants to go backward from the 0 position looking north.
  if (this.personLocation <0) {
    this.personLocation = -(this.personLocation);
  }
  console.log(this.personLocation);
});

    this.forwardNavigation = this.add.image(400,450, "forwardNavigation").setInteractive();
    this.forwardNavigation.setScale(.3);
    this.forwardNavigation.once('pointerdown', () => {

    //  this.scene.get(sceneforward).setLastLocation(this.scene.key);
  /*  this.scene.start(sceneforward),this*/
  switch(this.personLocation) {
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

    this.leftNavigation = this.add.image(350,500, "leftNavigation").setInteractive();
    this.leftNavigation.setScale(.3);
    this.leftNavigation.once('pointerdown', () => {
    //  this.scene.get(sceneleft).setLastLocation(this.scene.key);
      // checks if the personLocation is 0. If its 0 set it to 3. If not subtract 1.
      if(this.personLocation == 0) {
        this.personLocation = 3;
        this.scene.get("wholeTator3").setPersonLocation(this.getPersonLocation());
        this.scene.start("wholeTator3");
        console.log("case 3 this is where we would call the different picture in the database");

      } else {
        this.personLocation = (this.personLocation - 1) % 4;
        console.log(this.personLocation);
        switch(this.personLocation) {
          case 0 :
           this.scene.get("wholeTator").setPersonLocation(this.getPersonLocation());
          this.scene.start("wholeTator");
         console.log("case 0 this is where we would call the different picture in the database");
          break;
          case 1 :
          this.scene.get("wholeTator1").setPersonLocation(this.getPersonLocation());
          this.scene.start("wholeTator1");
           console.log("case 1 this is where we would call the different picture in the database");
          break;
          case 2 : this.scene.get("wholeTator2").setPersonLocation(this.getPersonLocation());
          this.scene.start("wholeTator2");
          console.log("case 2 this is where we would call the different picture in the database");
          break;
          case 3 :
          this.scene.get("wholeTator3").setPersonLocation(this.getPersonLocation());
          this.scene.start("wholeTator3");
          console.log("case 3 this is where we would call the different picture in the database");
          break;
        }
      }
    /*  this.scene.start(sceneleft),this*/});

    this.rightNavigation = this.add.image(450,500, "rightNavigation").setInteractive();
    this.rightNavigation.setScale(.3);
    this.rightNavigation.once('pointerdown', () => {
      this.personLocation = (this.personLocation + 1) % 4;
      console.log(this.personLocation);
    //  this.scene.get(sceneright).setLastLocation(this.scene.key);
  /*    this.scene.start(sceneright),this;*/
  switch(this.personLocation) {
    case 0 :
    this.scene.get("wholeTator").setPersonLocation(this.getPersonLocation());
    this.scene.start("wholeTator");
    console.log("case 0 this is where we would call the different picture in the database");
    break;
    case 1 :
    this.scene.get("wholeTator1").setPersonLocation(this.getPersonLocation());
    this.scene.start("wholeTator1");
    console.log("case 1 this is where we would call the different picture in the database");
    break;
    case 2 :
    this.scene.get("wholeTator2").setPersonLocation(this.getPersonLocation());
    this.scene.start("wholeTator2");
    console.log("case 2 this is where we would call the different picture in the database");
    break;
    case 3 :
    this.scene.get("wholeTator3").setPersonLocation(this.getPersonLocation());
    this.scene.start("wholeTator3");
    console.log("case 3 this is where we would call the different picture in the database");
    break;
  }
});

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

  getPersonLocation() {
    return this.personLocation;
  }
  setPersonLocation(personLocation) {
    this.personLocation = personLocation;

  }
}
