class wholeTator extends Phaser.Scene {
  constructor() {
    super("wholeTator");
  }
  preload() {
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

    //tator hall hallway

    //th130

    //th107

    //printer

  }
  create() {
    // setting the first room ID
    //
    this.roomTable = 1;
    this.roomID = 5;
    this.roomIDDB = 1;
    this.roomPicture = "Not changed yet";

    this.currentRoomData = null;



    // the direction that the player is facing
    this.personDirection = 0;
    // button group
    this.backgroundGroup = this.add.group();

    this.background = this.add.image(400,300,"cafeFront0").setDepth(1);
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

            // setting up a new background
            this.backNavigation = this.add.image(400,550, "backNavigation").setInteractive().setDepth(10);
            this.backNavigation.setScale(.3);
            this.backNavigation.on('pointerdown', () => {
              // changing the persons direction
              this.personDirection = (this.personDirection + 2) % 4;
              console.log(this.personDirection);
              this.updateScene();

            });

            this.forwardNavigation = this.add.image(400,450, "forwardNavigation").setInteractive().setDepth(10);
            this.forwardNavigation.setScale(.3);
            this.forwardNavigation.on('pointerdown', () => {
              this.moveForwardScene();
              //  this.scene.get(sceneforward).setLastLocation(this.scene.key);
              /*  this.scene.start(sceneforward),this*/

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

          moveForwardScene() {
            // gets the current room id information
            var currentRoom = roomTable[this.getRoomID()];
            // arrary of the new room link names
            var linkName = ["linkNorth", "linkEast", "linkSouth", "linkWest"];
            // gets the name of the link for the next room
            var link = linkName[this.personDirection];
            //finds the next link room number and saves it
            var nextRoom = currentRoom[link];
            console.log(nextRoom);
            // if the next room is not null go to the next room
            if(nextRoom != null) {
              this.setRoomID(nextRoom);
              this.updateScene();
            }


          }
          moveForwardSceneDB() {
            // gets the current room id information
            var currentRoom = roomTable[this.getRoomID()];
            // arrary of the new room link names
            var linkName = ["linkNorth", "linkEast", "linkSouth", "linkWest"];
            // gets the name of the link for the next room
            var link = linkName[this.personDirection];
            //finds the next link room number and saves it
            var nextRoom = currentRoom[link];
            console.log(nextRoom);
            // if the next room is not null go to the next room
            if(nextRoom != null) {
              this.setRoomID(nextRoom);
              //removes the room data
              this.currentRoomData = null;
              this.updateScene();
            }
          }


          // will remove the background setting
          updateScene() {
            this.backgroundGroup.clear(true);

            //gets the room data
            //  this.getRoomData(this.getRoomID());
            // North: 0 , East: 1 , South: 2, West: 3
            // arrary of direction names
            var directionName = ["picNorth", "picEast", "picSouth", "picWest"];
            //Finding out what direction we need to go, saves the direction name
            var direction = directionName[this.personDirection];

            //gets the room data
            this.setRoomPicture(direction);
            //
            // gets the name of the picture of the next room
            //
            var pictureName = roomTable[this.getRoomID()][direction];


            this.background = this.add.image(400,300,pictureName).setDepth(1);
            this.background.scale = .275;
            this.backgroundGroup.add(this.background);
            console.log("code hit after background");

            console.log("update methods picture name" + pictureName);

            //  var pictureFile = "pictures/"+pictureName+".png"
            //  console.log(pictureFile);
            console.log("Code Before Setting Background");

        }


    async  updateSceneDB() {
          this.backgroundGroup.clear(true);
          var directionName = ["picNorth", "picEast", "picSouth", "picWest"];
          var direction = directionName[this.personDirection];
          //gets the room data
          this.setRoomPicture(direction);

          this.background = this.add.image(400,300,this.pictureName).setDepth(1);
          this.background.scale = .275;
          this.backgroundGroup.add(this.background);
          console.log("code hit after background");

        }

        // new function
        // gets the current Room data
        //
  async   setRoomPicture(pictureNameWanted) {
          if(this.currentRoomData == null) {
            //fetch the data for this roomID
            this.fetchAllRoomData();
        //      this.pictureName = "cafeFront1" ;
          this.pictureName = await this.currentRoomData[this.direction];

          }
          else {
            console.log("this is getting the next picture " + this.currentRoomData[this.direction]);
            this.pictureName = this.currentRoomData[this.direction];
          }

        }
        // grab the current room data
    async fetchAllRoomData() {
          this.urlRequest = ("http://localhost:3000/destination?Room_ID="+this.getRoomIDDB());
          console.log(this.urlRequest);
          fetch(this.urlRequest)
          .then(res => res.json())
          // getting the new room name for update method
//          .then(data => roomDataPictureTest = data[0])
          .then(res => { this.currentRoomData = res[0] ; console.log("fetch all room data "+ this.currentRoomData["picWest"])});

          // going to have to wait for the response

//          while(this.currentRoomData == null) {

  //        }
  //        console.log("After the fetch and while loop  "+this.currentRoomData);


/*
          var roomDataPictureTest =  "";
          var roomData;
          var pictureName = pictureNameWanted;
          console.log(this.getRoomIDDB());
          var urlRequest = "";
          // cases checking what direction the user is
          switch (this.personDirection) {
            case 0:
            this.urlRequest = ("http://localhost:3000/destination?Room_ID="+this.getRoomIDDB());
            console.log(this.urlRequest);
            fetch(this.urlRequest)
            .then(res => res.json())
            // getting the new room name for update method
            .then(data => roomDataPictureTest = data[0].picNorth)
            .then(data => console.log(data))

            //     .then(data => console.log("This is the get RoomData method picture " + roomDataPictureTest));
            this.setRoomPicDB(roomDataPictureTest);
            console.log("Case 0 in getRoomData method" + this.getRoomPicDB());

            this.background = this.add.image(400,300,this.getRoomPicDB()).setDepth(1);
            this.background.scale = .275;
            this.backgroundGroup.add(this.background);
            console.log("code hit after background");
            break;
            case 1:
            this.urlRequest = ("http://localhost:3000/destination?Room_ID="+this.getRoomIDDB());
            console.log(this.urlRequest);
            fetch(this.urlRequest)
            .then(res => res.json())
            // getting the new room name for update method
          //  .then(data => roomDataPictureTest = JSON.stringify(data[0].picEast))
            .then(data => console.log(JSON.stringify(data[0].picEast)))
          //  console.log("This is the get RoomData method picture " + roomDataPictureTest)
            this.setRoomPicDB(roomDataPictureTest);

            console.log("Case 1 in getRoomData method " + this.getRoomPicDB());
            this.background = this.add.image(400,300,this.getRoomPicDB()).setDepth(1);
            this.background.scale = .275;
            this.backgroundGroup.add(this.background);
            console.log("code hit after background");

            break;
            case 2:
            this.urlRequest = ("http://localhost:3000/destination?Room_ID="+this.getRoomIDDB());
            console.log(this.urlRequest);
            fetch(this.urlRequest)
            .then(res => res.json())
            //           .then(data => roomData = data)
            // getting the new room name for update method
            .then(data => roomDataPictureTest = data[0].picSouth)
            .then(data => console.log("This is the get RoomData method picture " + roomDataPictureTest));
            this.setRoomPicDB(roomDataPictureTest);

            console.log("Case 2 in getRoomData method " + this.getRoomPicDB() );

            this.background = this.add.image(400,300,this.getRoomPicDB()).setDepth(1);
            this.background.scale = .275;
            this.backgroundGroup.add(this.background);
            console.log("code hit after background");
            break;

            case 3:
            this.urlRequest = ("http://localhost:3000/destination?Room_ID="+this.getRoomIDDB());
            console.log(this.urlRequest);
            fetch(this.urlRequest)
            .then(res => res.json())
            //           .then(data => roomData = data)
            // getting the new room name for update method
            .then(data => roomDataPictureTest = data[0].picWest)
            .then(data => console.log("This is the get RoomData method picture" + roomDataPictureTest));
            this.setRoomPicDB(roomDataPictureTest);
            console.log("Case 3 in getRoomData methodd" + this.getRoomPicDB());

            this.background = this.add.image(400,300,this.getRoomPicDB()).setDepth(1);
            this.background.scale = .275;
            this.backgroundGroup.add(this.background);
            console.log("code hit after background");
            break;
            */
          }

          /*
          console.log("entering room data");
          fetch('http://localhost:3000/destination?Room_ID='+this.getRoomID())
          .then(res => res.json())
          .then(data => roomData = data)
          // getting the new room name for update method
          .then(data => roomDataTest = data[0].pictureName)
          .then(data => console.log("This is the get RoomData method picture" + roomDataTest));
          */
          // room data will pass the picture name



          //  .then(data => console.log("data"));

          // once we get the room data in json seperate the information into different varaibles
          // Find the next room link information for the moveForwardScene method
          // find the next picture name for the updatescene method




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

        // querys for the name of the next picture
        getRoomPic(roomDirection, roomID) {
          connection.query('Select '+roomDirection+ ' FROM Room where id= "'+roomID+'"' , (err, res) => {
            console.log(res)
          });
        }
        // querys the name of the next scene to load
        getRoomLink(linkDirection,roomID) {
          connection.query('Select '+linkDirection+ ' FROM Room where id= "'+id+'"' , (err, res) => {
            console.log(res)
          });
        }
        // sets the room ID
        setRoomID(id) {
          this.roomID = id;
        }
        // gets the room ID
        getRoomID() {
          return this.roomID;
        }

        // sets the room ID
        setRoomIDDB(id) {
          this.roomIDDB = id;
        }
        // gets the room ID
        getRoomIDDB() {
          return this.roomIDDB;
        }

        setRoomPicDB(roomPicture) {
          this.roomPicture = roomPicture;
        }
        getRoomPicDB() {
          return this.roomPicture;
        }

        getCurrentRoomData() {
          return this.currentRoomData;
        }

        getpersonDirection() {
          return this.personDirection;
        }
        setpersonDirection(personDirection) {
          this.personDirection = personDirection;
        }

      }
