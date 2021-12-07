window.onload = function() {

// variable that sets the background color, width, and height of screen
  var config = {
    width : 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [MenuScene, instructions, characterScene, gameEnter, settings,
      tatorHall, cafeFront, cafeLeft, cafeRight, bookStore, tatorBathroom, tatorHall130,tatorHallway, tatorHallway2,wholeTator,wholeTator1,wholeTator2, wholeTator3]
  //  scene: [MenuScene, instructions, characterScene, gameEnter]
  }

  // creates a new phaser Game
  var game = new Phaser.Game(config);


}
