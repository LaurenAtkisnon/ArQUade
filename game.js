window.onload = function() {

// variable that sets the background color, width, and height of screen
  var config = {
    width : 800,
    height: 600,
    backgroundColor: 0x000000,
    // all the scenes
    scene: [MenuScene, instructions, characterScene, gameEnter, settings,
      wholeTator]
  //  scene: [MenuScene, instructions, characterScene, gameEnter]
  }

  // creates a new phaser Game
  var game = new Phaser.Game(config);


}
