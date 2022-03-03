window.onload = function() {

// variable that sets the background color, width, and height of screen
  var config = {


    width : 924,
    height: 668,
    scale: {
        // Or set parent divId here


        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,

        // Or put game size here
        // width: 1024,
        // height: 768,

        // Minimum size
        min: {
            width: 700,
            height: 500
        },
        // Or set minimum size like these
        // mixWidth: 800,
        // mixHeight: 600,

        // Maximum size
        max: {
            width: 1400,
            height: 1100
        }
        // Or set maximum size like these
        // maxWidth: 1600,
        // maxHeight: 1200,



    },
    backgroundColor: 0x000000,
    // all the scenes
    scene: [MenuScene, instructions, characterScene, gameEnter, settings,
      wholeTator]
  //  scene: [MenuScene, instructions, characterScene, gameEnter]
  }

  // creates a new phaser Game
  var game = new Phaser.Game(config);


}
