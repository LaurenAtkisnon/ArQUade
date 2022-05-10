  class SOCEDownstairs extends Phaser.Scene {
    constructor() {
      super("SOCEDownstairs");
    }
    async preload() {


    }

    create() {
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
      // makes them start at the top of the stairs
      document.cookie = "soceRoomID = 9";
      // starts at the entrance of the lower level
      this.roomIDDB = 10;

      this.setRoomPicture("picSouth");

      // sets the task ID to the cookie id
      this.taskID = parseInt(this.getCookie("soceTaskID"));
      // settinh roomPicture variable
      this.roomPicture = "Not changed yet";

      // setting currentRoomData to null
      this.currentRoomData = null;



      // the direction that the player is facing
      this.personDirection = 2;
      // button group
      this.backgroundGroup = this.add.group();

      // adding the background of the first image
      //  this.background = this.add.image(400,300,"cafeFront0").setDepth(1);
      //  this.background.scale = .275;
      //  this.backgroundGroup.add(this.background);


      this.setTaskRoomID();
      // sets the task description
      this.setTaskDescription();

      //calling the setting button method
        this.setting();
      this.createDisplayTask();
      this.createDisplayRoomDescription();

      //  need this if u wwant to load outside preload
      //    this.load.start();

      this.loadRoomPictures(11);


      // calling the navigation button method
      this.navigationButtons("wholeTator3","wholeTator","wholeTator1","wholeTator2");


    }
    navigationButtons(sceneleft,sceneforward,sceneright,sceneback) {

      this.backNavigation = this.add.image(450,550, "downNavigationSOCE").setInteractive().setDepth(10); //400, 550
      this.backNavigation.setScale(.3);
      this.backNavigation.on('pointerdown', () => {
        // changing the persons direction
        this.personDirection = (this.personDirection + 2) % 4;

        // calling the updateScene method that uses the Database
        this.updateSceneDB();

      });

      this.forwardNavigation = this.add.image(450,440, "forwardNavigationSOCE").setInteractive().setDepth(10); //400, 450
      this.forwardNavigation.setScale(.3);
      this.forwardNavigation.on('pointerdown', () => {
        // calling the move forward scene that uses the database
        this.moveForwardSceneDB();
        //  this.scene.get(sceneforward).setLastLocation(this.scene.key);
        /*  this.scene.start(sceneforward),this*/

      });

      this.leftNavigation = this.add.image(375,495, "leftNavigationSOCE").setInteractive().setDepth(10); //350. 500
      this.leftNavigation.setScale(.3);
      this.leftNavigation.on('pointerdown', () => {

        // checks if the personDirection is 0. If its 0 set it to 3. If not subtract 1.
        // setting up the new players direction
        this.personDirection = (this.personDirection + 3) % 4;
        //              calling the updateScene method that uses the Database
        this.updateSceneDB();
        /*  this.scene.start(sceneleft),this*/
      });
      this.rightNavigation = this.add.image(525,495, "rightNavigationSOCE").setInteractive().setDepth(10); //450, 500
      this.rightNavigation.setScale(.3);
      this.rightNavigation.on('pointerdown', () => {
        // setting up the new players direction
        this.personDirection = (this.personDirection + 1) % 4;
        //              calling the updateScene method that uses the Database
        this.updateSceneDB();
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
      //console.log("this is the roomLink " + roomLink );
      //if room link is not null and 0 then we set a new roomID
      if(roomLink != null && roomLink != 0) {
        // sets the new room id
        this.setRoomIDDB(roomLink);

        // Updates the Roomid of the COOKIE
        //  document.cookie = "tatorRoomID = " + roomLink;

        // sets currentRoomData to null
        this.currentRoomData = null;

        // loads images
        //   this.loadRoomPictures();

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
      //  console.log("this is the roomID " + this.getRoomIDDB());

      // checks if the room they enter is the task room
      if(this.getRoomIDDB() ==  await this.getTaskRoomID()) {
        // needs to update to the new task
        if(this.taskID < 10) {
          // changes to the next task
          this.taskID = this.taskID + 1;
          // updates the taskid of the cookie
          document.cookie = "soceTaskID = " + this.taskID ;
          // updates the task if needed
          this.updateDisplayTask();
          console.log("Player has reached the task room and assigned a new task ");
          console.log("New task id" + this.taskID);
        }
        else {
          //  console.log("Player has not reached the task room" + await this.getTaskRoomID());
        }
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

    }

    // gets all the room pictures
    async loadRoomPictures(id) {

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

      this.imageID = imageID + 1 ;

      // if imageID is less then 35 then get next set of images
      if(this.imageID < 35) {
        this.loadRoomPictures(this.getImageID());
      }
    }

    // grab the current room data
    async fetchAllRoomData() {
      // if the currentroom data is not null then dont fetch data from database
      if (this.currentRoomData != null ) {
        return this.currentRoomData;
      }
      // api url
      const urlRequest = ("http://localhost:3000/destinationSOCE?Room_ID="+this.getRoomIDDB());
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

    async fetchAllRoomDataImages(id) {

      // api url
      const urlRequestImages = ("http://localhost:3000/destinationsocedown?Room_ID="+id);
      try {
        //      fetch request using the api url
        const res = await fetch(urlRequestImages);
        return res.json();
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
    // gets the task Name
    async getTaskName() {
      //calls the fetchTask method to get all the task data
      const data = await this.fetchTaskData();
      // returns the task description
      return data["Task_Name"];
    }

    // sets the task destination
    async setTaskRoomID() {
      // gets the task description
      const taskRoomID = await this.getTaskRoomID();
      //  console.log("This is the task Room ID  " + taskRoomID);
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
      const urlRequest = ("http://localhost:3000/taskSOCE?Task_ID="+this.getTaskID());
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

      console.log("This is task Description" +  await this.getTaskDescription() );
      this.taskText =  this.add.text(5, 80, "Task:" +  await this.getTaskDescription(), { //600, 25
        //  font: "bold 25px Arial",
        //  fill: "white"
        fontSize: '25px',
        fontFamily: 'Courier',
        color: '#418FDE',
        borderStyle: 'dotted dashed solid double',
        backgroundColor: '#0C2340'
      }).setDepth(10);

        this.taskTextName =  this.add.text(5, 50, "Task Location:" +  await this.getTaskName(), { //600, 25
        //  font: "bold 25px Arial",
        //  fill: "white"
        fontSize: '25px',
        fontFamily: 'Courier',
        color: '#418FDE',
        borderStyle: 'dotted dashed solid double',
        backgroundColor: '#0C2340'
        }).setDepth(10);
    }
    // updates the Task
    async updateDisplayTask() {
      console.log("This is task Description" +  await this.getTaskDescription() );
      this.taskText.setText("Task: " +await this.getTaskDescription());
      this.taskTextName.setText("Task Location: " +await this.getTaskName());
    }
    // creates the room Descrisption
    async createDisplayRoomDescription() {
      console.log("This is room Description" +  await this.getRoomDescription() );
      this.roomText =  this.add.text(0, 635, "Location:" +   await this.getRoomDescription(), { //600, 25
        //  font: "bold 25px Arial",
        //  fill: "white"
        fontSize: '25px',
        fontFamily: 'Courier',
        color: '#418FDE',
        borderStyle: 'dotted dashed solid double',
        backgroundColor: '#0C2340'
      }).setDepth(10);
    }

    // updates the roomDescription
    async updateDisplayRoomDescription() {
      console.log("This is room Description" +  await this.getRoomDescription() );
      this.roomText.setText("Location: " + await this.getRoomDescription());
    }

    // sets the room ID
    setRoomIDDB(id) {
      this.roomIDDB = id;
    }
    // gets the room ID
    getRoomIDDB() {
      return this.roomIDDB;
    }

    // sets the room ID
    setImageID(id) {
      this.imageID = id;
    }
    // gets the room ID
    getImageID() {
      return this.imageID;
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

    // FUNCTION THAT CHECKS IF A COOKIE IS NULL
    getCookie(name) {
      var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
      return match ? match[1] : null;
    }
    // method that sets the setting button
    setting() {
      this.settings_button = this.add.image(75,20, "settingsButtonSOCE").setInteractive().setDepth(10);
      this.settings_button.scale = .8;
    this.settings_button.once('pointerdown', () => this.scene.start('gameEnter'));



      }


  }
