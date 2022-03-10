class wholeTator extends Phaser.Scene {
  constructor() {
    super("wholeTator");
  }
  async preload() {
    //cafe
    this.load.image("cafeFront0", "pictures/cafeFront0.png");
    this.load.image("cafeFront1", "pictures/cafeFront1.png");
    this.load.image("cafeFront2", "pictures/cafeFront2.png");
    this.load.image("cafeFront3", "pictures/cafeFront3.png");
    this.load.image("cafeLeft", "pictures/cafeLeft.png");
    this.load.image("cafeRight", "pictures/cafeRight.png");

    // cafe hallway
    this.load.image("cafeHallway0", "pictures/cafeHallway0.png");
    this.load.image("cafeHallway1", "pictures/cafeHallway1.png");
    this.load.image("cafeHallway2", "pictures/cafeHallway2.png");
    this.load.image("cafeHallway3", "pictures/cafeHallway3.png");

    //boomer & character
    this.load.image("boomer", "pictures/image2.png");
    this.load.image("person4", "pictures/person4.png");

    //navigation buttons & joystidl
    this.load.image("backNavigation", "pictures/backNavigation.png");
    this.load.image("forwardNavigation", "pictures/forwardNavigation.png");
    this.load.image("leftNavigation", "pictures/leftNavigation.png");
    this.load.image("rightNavigation", "pictures/rightNavigation.png");
    this.load.image("joystick", "pictures/joystick.png");

    //1st tator hall hallway -- directly after th130
    this.load.image("tatorHallwayDeeper0", "pictures/tatorHallwayDeeper0.png")
    this.load.image("tatorHallwayDeeper1", "pictures/tatorHallwayDeeper1.png")
    this.load.image("tatorHallwayDeeper2", "pictures/tatorHallwayDeeper2.png")
    this.load.image("tatorHallwayDeeper3", "pictures/tatorHallwayDeeper3.png")

    //2nd tator hall hallway -- goes after the first hallway
    this.load.image("thEndofHallway0", "pictures/thEndofHallway0.png")
    this.load.image("thEndofHallway1", "pictures/thEndofHallway1.png")
    this.load.image("thEndofHallway2", "pictures/thEndofHallway2.png")
    this.load.image("thEndofHallway3", "pictures/thEndofHallway3.png")

    //th130 -- inside classroom photo
    this.load.image("th130(0)", "pictures/th130(0).png")
    this.load.image("th130(1)", "pictures/th130(1).png")
    this.load.image("th130(2)", "pictures/th130(2).png")
    this.load.image("th130(3)", "pictures/th130(3).png")

    //th107 -- inside classroom photo
    this.load.image("th107(0)", "pictures/th107(0).png")
    this.load.image("th107(1)", "pictures/th107(1).png")
    this.load.image("th107(2)", "pictures/th107(2).png")
    this.load.image("th107(3)", "pictures/th107(3).png")

    //th105 -- inside classroom photo
    this.load.image("th105(0)", "pictures/th105(0).png")
    this.load.image("th105(1)", "pictures/th105(1).png")
    this.load.image("th105(2)", "pictures/th105(2).png")
    this.load.image("th105(3)", "pictures/th105(3).png")

    //th127

    //th127 -- inside classroom photo
    this.load.image("th127(0)", "pictures/th127(0).png")
    this.load.image("th127(1)", "pictures/th127(1).png")
    this.load.image("th127(2)", "pictures/th127(2).png")
    this.load.image("th127(3)", "pictures/th127(3).png")


    //printer
    this.load.image("thprinter0", "pictures/thprinter0.png")
    this.load.image("thprinter1", "pictures/thprinter1.png")
    this.load.image("thprinter2", "pictures/thprinter2.png")
    this.load.image("thprinter3", "pictures/thprinter3.png")

    //hallway
    this.load.image("hallway0", "pictures/hallway0.png")
    this.load.image("hallway1", "pictures/hallway1.png")
    this.load.image("hallway2", "pictures/hallway2.png")
    this.load.image("hallway3", "pictures/hallway3.png")

    // bathroom
    this.load.image("Bathroom0", "pictures/Bathroom0.png")
    this.load.image("Bathroom1", "pictures/Bathroom1.png")
    this.load.image("Bathroom2", "pictures/Bathroom2.png")
    this.load.image("Bathroom3", "pictures/Bathroom3.png")


    //bookstore hallway

    this.load.image("bkstHallway0", "pictures/bkstHallway0.png")
    this.load.image("bkstHallway1", "pictures/bkstHallway1.png")
    this.load.image("bkstHallway2", "pictures/bkstHallway2.png")
    this.load.image("bkstHallway3", "pictures/bkstHallway3.png")
    //pubhallway

    this.load.image("pubHallway0", "pictures/pubHallway0.png")
    this.load.image("pubHallway1", "pictures/pubHallway1.png")
    this.load.image("pubHallway2", "pictures/pubHallway2.png")
    this.load.image("pubHallway3", "pictures/pubHallway3.png")
    //tator hallway
    this.load.image("tatorHallway0", "pictures/tatorHallway0.png")
    this.load.image("tatorHallway1", "pictures/tatorHallway1.png")
    this.load.image("tatorHallway2", "pictures/tatorHallway2.png")
    this.load.image("tatorHallway3", "pictures/tatorHallway3.png")

    // 130hallway
    this.load.image("130Hallway0", "pictures/130Hallway0.png")
    this.load.image("130Hallway1", "pictures/130Hallway1.png")
    this.load.image("130Hallway2", "pictures/130Hallway2.png")
    this.load.image("130Hallway3", "pictures/130Hallway3.png")

    //infront printer pictures
    this.load.image("infrontprinter0", "pictures/infrontprinter0.png")
    this.load.image("infrontprinter1", "pictures/infrontprinter1.png")
    this.load.image("infrontprinter2", "pictures/infrontprinter2.png")
    this.load.image("infrontprinter3", "pictures/infrontprinter3.png")


  }
  create() {

    // setting the first room id
    this.roomIDDB = 1;

    // sets the task ID to 1
    this.taskID = 1;
    // settinh roomPicture variable
    this.roomPicture = "Not changed yet";

    // setting currentRoomData to null
    this.currentRoomData = null;



    // the direction that the player is facing
    this.personDirection = 0;
    // button group
    this.backgroundGroup = this.add.group();

    // adding the background
    this.background = this.add.image(400,300,"cafeFront0").setDepth(1);
    this.background.scale = .275;
    this.backgroundGroup.add(this.background);


    this.setTaskRoomID();
    // sets the task description
    this.setTaskDescription();

    //calling the setting button method
    this.setting();

    this.createDisplayTask();
    this.createDisplayRoomDescription();

    // calling the navigation button method
    this.navigationButtons("wholeTator3","wholeTator","wholeTator1","wholeTator2");
  }
//
//  update() {

//    this.navigationButtons("wholeTator3","wholeTator","wholeTator1","wholeTator2");

//  }



  navigationButtons(sceneleft,sceneforward,sceneright,sceneback) {

    // setting up a new background
    this.backNavigation = this.add.image(450,550, "backNavigation").setInteractive().setDepth(10); //400, 550
    this.backNavigation.setScale(.3);
    this.backNavigation.on('pointerdown', () => {
      // changing the persons direction
      this.personDirection = (this.personDirection + 2) % 4;

      // calling the updateScene method that uses the Database
      this.updateSceneDB();

    });

    this.forwardNavigation = this.add.image(450,440, "forwardNavigation").setInteractive().setDepth(10); //400, 450
    this.forwardNavigation.setScale(.3);
    this.forwardNavigation.on('pointerdown', () => {
      // calling the move forward scene that uses the database
      this.moveForwardSceneDB();
      //  this.scene.get(sceneforward).setLastLocation(this.scene.key);
      /*  this.scene.start(sceneforward),this*/

    });

    this.leftNavigation = this.add.image(375,495, "leftNavigation").setInteractive().setDepth(10); //350. 500
    this.leftNavigation.setScale(.3);
    this.leftNavigation.on('pointerdown', () => {

      // checks if the personDirection is 0. If its 0 set it to 3. If not subtract 1.
      // setting up the new players direction
      this.personDirection = (this.personDirection + 3) % 4;
      //              calling the updateScene method that uses the Database
      this.updateSceneDB();
      /*  this.scene.start(sceneleft),this*/
    });
    this.rightNavigation = this.add.image(525,495, "rightNavigation").setInteractive().setDepth(10); //450, 500
    this.rightNavigation.setScale(.3);
    this.rightNavigation.on('pointerdown', () => {
      // setting up the new players direction
      this.personDirection = (this.personDirection + 1) % 4;
      //              calling the updateScene method that uses the Database
      this.updateSceneDB();
    });

  }

  // method that sets the setting button
  setting() {
    this.settings_button = this.add.image(75,20, "settings_button").setInteractive().setDepth(10);
    this.settings_button.scale = .8;
    this.settings_button.on('pointerdown', () => {
      this.scene.get("settings").setPrev(this.scene.key);
      this.scene.start('settings');
    });
  }

  async  moveForwardSceneDB() {
    const linkName = ["Link_North_ID", "Link_East_ID", "Link_South_ID", "Link_West_ID"];
    // name of the new link needed
    const link = linkName[this.personDirection];
    //gets the new roomID
    const roomID =  this.setRoomLink(link);
  //console.log("Finished the moveforward scene DB");
  }

  async setRoomLink(link) {
    //gets the new room link
    const roomLink = await this.getRoomLink(link);
    console.log("this is the roomLink " + roomLink );
    //if room link is not null and 0 then we set a new roomID
    if(roomLink != null && roomLink != 0) {
      // sets the new room id
      this.setRoomIDDB(roomLink);
      // sets currentRoomData to null
      this.currentRoomData = null;

      // calls update scene method
      this.updateSceneDB();
    }
  }

  // gets the new room link
  async getRoomLink(link) {
    // fetchs all the room data from fetchAllRoomData
    const data = await this.fetchAllRoomData();
    // returns the new room id link
    return data[link];
  }
  async  updateSceneDB() {
    // array of picture direction names
    const directionName = ["picNorth", "picEast", "picSouth", "picWest"];
    // gets which direction name to get using the persons direction
    const direction = directionName[this.personDirection];
    //gets the room data
    await  this.setRoomPicture(direction);
    // updates the task if needed
//    this.updateDisplayTask();
    // updates the room description if needed
    this.updateDisplayRoomDescription();
  }
  // new function
  // gets the current Room data
  async setRoomPicture(direction) {
    // sets the picture name using the getRoomPicture method
    const pictureName = await this.getRoomPicture(direction);
    // clears the background
    this.backgroundGroup.clear(true);
    // setting up the new background using the information we got from the getRoomPicture method
    this.background = this.add.image(400,300,pictureName).setDepth(1);
    this.background.scale = .275;
    this.backgroundGroup.add(this.background);
    console.log("this is the roomID " + this.getRoomIDDB());

    // checks if the room they enter is the task room
    if(this.getRoomIDDB() ==  await this.getTaskRoomID()) {
      // needs to update to the new task
      // changes to the next task
      this.taskID = this.taskID + 1;
      // updates the task if needed
      this.updateDisplayTask();
      console.log("Player has reached the task room and assigned a new task ");
    }
    else {
      console.log("Player has not reached the task room" + await this.getTaskRoomID());
    }
  }

  // gets the roomPicture Data
  async getRoomPicture(direction) {
    //calls the fetchAllRoomData method to get all the room data
    const data = await this.fetchAllRoomData();
    // returns the new scene picture using the data and direction which is name for example picNorth
    return data[direction];
  }
  // gets the roomDescription which will explain what room there in
async getRoomDescription() {
  const data = await this.fetchAllRoomData();
  //returns the room Description
  return data["Room_Description"];
}

  // grab the current room data
  async fetchAllRoomData() {
    // if the currentroom data is not null then dont fetch data from database
    if (this.currentRoomData != null ) {
      return this.currentRoomData;
    }
    // api url
    const urlRequest = ("http://localhost:3000/destination?Room_ID="+this.getRoomIDDB());
    try {
      //      fetch request using the api url
      const res = await fetch(urlRequest);
      // currentRoomData is now the fetch api response database
      this.currentRoomData = res.json();
      // returns the currentRoomData
      return this.currentRoomData;
    }
    catch(err) {
      console.log(err);
    }
  }

  // sets the task description
  async setTaskDescription() {
    // gets the task description
    const taskDescription = await this.getTaskDescription();
    // console.log("This is the task Description " + taskDescription);
  }

  // gets the task Description
  async getTaskDescription() {
    //calls the fetchTask method to get all the task data
    const data = await this.fetchTaskData();
    // returns the task description
    return data["Task_Description"];
  }

  // sets the task destination
  async setTaskRoomID() {
    // gets the task description
    const taskRoomID = await this.getTaskRoomID();
    //  console.log("This is the task Room ID  " + taskRoomID);
  }

  // gets the task room id
  async getTaskRoomID() {
    //calls the fetchTask method to get all the task data
    const data = await this.fetchTaskData();
    // returns the task destination
    return data["Destination"];
  }

  // grabs the task room data
  async fetchTaskData() {
    // this is the query request
    const urlRequest = ("http://localhost:3000/task?Task_ID="+this.getTaskID());
    try {
      //fetch request using the api url
      const res = await fetch(urlRequest);
      // taskData is now the fetch api response database
      this.taskData = res.json();
      //returns the taskdata
      return this.taskData;
    }
    catch(err) {
      console.log(err);
    }
  }

// creates the task display
  async createDisplayTask() {
    console.log("This is task Description " +  await this.getTaskDescription() );
    this.taskText =  this.add.text(450, 85, await this.getTaskDescription(), { //600, 25
    //  font: "bold 25px Arial",
    //  fill: "white"
    fontSize: '25px',
    fontFamily: 'Courier',
    color: '#ffffff',
    align: 'left',
    backgroundColor: '#418fde'
    }).setDepth(10);
  }
  // updates the Task
  async updateDisplayTask() {
    console.log("This is task Description " +  await this.getTaskDescription() );
    this.taskText.setText(await this.getTaskDescription());
  }
  // creates the room Descrisption
  async createDisplayRoomDescription() {
    console.log("This is room Description " +  await this.getRoomDescription() );
    this.roomText =  this.add.text(250, 15, await this.getRoomDescription(), { //600, 25
    //  font: "bold 25px Arial",
    //  fill: "white"
    fontSize: '25px',
    fontFamily: 'Courier',
    color: '#ffffff',
    align: 'left',
    backgroundColor: '#418fde'
    }).setDepth(10);
}

// updates the roomDescription
async updateDisplayRoomDescription() {
  console.log("This is room Description " +  await this.getRoomDescription() );
  this.roomText.setText(await this.getRoomDescription());
}




  // sets the room ID
  setRoomIDDB(id) {
    this.roomIDDB = id;
  }
  // gets the room ID
  getRoomIDDB() {
    return this.roomIDDB;
  }

  //set the Task ID
  setTaskID(id) {
    this.taskID = id;
  }

  //gets the task id
  getTaskID() {
    return this.taskID;

  }
  // sets the room picutre
  setRoomPicDB(roomPicture) {
    this.roomPicture = roomPicture;
  }
  // gets the room picture
  getRoomPicDB() {
    return this.roomPicture;
  }

  // gets the current room data
  getCurrentRoomData() {
    return this.currentRoomData;
  }
  // gets the task data
  getTaskData() {
    return this.taskData;
  }
  // gets the person direction
  getpersonDirection() {
    return this.personDirection;
  }
  // sets the person direction

  setpersonDirection(personDirection) {
    this.personDirection = personDirection;
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
    console.log("Bubble is Created");
  }


}
