window.onload = function() {

// variable that sets the background color, width, and height of screen
  var config = {
    width : 800,
    height: 600,
    backgroundColor: 0x000000,
    // all of the scenes we want in the game
    scene: [MenuScene, instructions, characterScene,scene3,campusScene]
  }

  // creates a new phaser Game
  var game = new Phaser.Game(config);


}
