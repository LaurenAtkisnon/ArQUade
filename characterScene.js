class characterScene extends Phaser.Scene {
  constructor() {
    super("characterScene");
  }

  preload() {
    this.load.image("background", "pictures/image1.png");
    this.load.image("person1", "pictures/person1.png");
    this.load.image("person2", "pictures/person2.png");
    this.load.image("person3", "pictures/person3.png");
    this.load.image("person4", "pictures/person4.png");
    this.load.image("back_button", "pictures/back_button.png");
  }

  create() {
    this.background = this.add.image(400,300,"background");
    this.background.scale = .8;

    this.person1 = this.add.image(500,250,"person1");
    this.person1.scale = .3;

    this.person2 = this.add.image(300,250,"person2");
    this.person2.scale = .3;

    this.person3 = this.add.image(300,400,"person3");
    this.person3.scale = .1;

    this.person4 = this.add.image(500,400,"person4");
    this.person4.scale = .1;

    this.back_button = this.add.image(95,575, "back_button");
    this.back_button.scale = .8;


    const boomer = this.add.image(750,480,"boomer");
    boomer.scale = 1.4;

     this.add.text(200, 100, "Pick A Character & Tell Me Your Name", {
       font: "25px Arial",
       fill: "black"
     });
  }

}
