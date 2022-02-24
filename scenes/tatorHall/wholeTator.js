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
    this.load.image("th130", "pictures/th130.png")

    //th107 -- inside classroom photo
    this.load.image("th107", "pictures/th107.png")

    //th105 -- inside classroom photo
    this.load.image("th105", "pictures/th105.png")

    //printer
    this.load.image("thprinter0", "pictures/thprinter0.png")
    this.load.image("thprinter1", "pictures/thprinter1.png")
    this.load.image("thprinter2", "pictures/thprinter2.png")
    this.load.image("thprinter3", "pictures/thprinter3.png")

  }
  create() {

    // setting the first room id
    this.roomIDDB = 1;
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
    //calling the setting button method
    this.setting();
    // calling the navigation button method
    this.navigationButtons("wholeTator3","wholeTator","wholeTator1","wholeTator2");

  }

          navigationButtons(sceneleft,sceneforward,sceneright,sceneback) {

            // setting up the backwards button
            this.backNavigation = this.add.image(400,550, "backNavigation").setInteractive().setDepth(10);
            this.backNavigation.setScale(.3);
            this.backNavigation.on('pointerdown', () => {
              // changing the persons direction
              this.personDirection = (this.personDirection + 2) % 4;

//              calling the updateScene method that uses the Database
              this.updateSceneDB();

            });
            // setting up the forward button
            this.forwardNavigation = this.add.image(400,450, "forwardNavigation").setInteractive().setDepth(10);
            this.forwardNavigation.setScale(.3);
            this.forwardNavigation.on('pointerdown', () => {
              // calling the move forward scene that uses the database
              this.moveForwardSceneDB();
              //  this.scene.get(sceneforward).setLastLocation(this.scene.key);
              /*  this.scene.start(sceneforward),this*/

            });
              // setting up the left button
            this.leftNavigation = this.add.image(350,500, "leftNavigation").setInteractive().setDepth(10);
            this.leftNavigation.setScale(.3);
            this.leftNavigation.on('pointerdown', () => {

              // checks if the personDirection is 0. If its 0 set it to 3. If not subtract 1.
              // setting up the new players direction
              this.personDirection = (this.personDirection + 3) % 4;
//              calling the updateScene method that uses the Database
              this.updateSceneDB();
              /*  this.scene.start(sceneleft),this*/
            });
              // setting up the right button
            this.rightNavigation = this.add.image(450,500, "rightNavigation").setInteractive().setDepth(10);
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
            const roomID = this.setRoomLink(link);


//            console.log("Finished the moveforward scene DB");

          }

          async setRoomLink(link) {
            //gets the new room link
            const roomLink = await this.getRoomLink(link);

//            if room link is not null and 0 then we set a new roomID
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

          }

          // new function
          // gets the current Room data
          //
          async setRoomPicture(direction) {
            // sets the picture name using the getRoomPicture method
            const pictureName = await this.getRoomPicture(direction);
            // clears the background
            this.backgroundGroup.clear(true);
                  // setting up the new background using the information we got from the getRoomPicture method
            this.background = this.add.image(400,300,pictureName).setDepth(1);
            this.background.scale = .275;
            this.backgroundGroup.add(this.background);



          }

          // gets the roomPicture Data
          async getRoomPicture(direction) {
            //calls the fetchAllRoomData method to get all the room data
            const data = await this.fetchAllRoomData();
// returns the new scene picture using the data and direction which is name for example picNorth
            return data[direction];
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


          // grabs the task room data
          async fetchTaskData() {

            // this is the query request
            const urlRequest = ("http://localhost:3000/task?Task_ID="+this.getTaskID());
            try {
          //      fetch request using the api url
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
            //gets the task id
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

        }
