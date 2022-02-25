
// suppose to be a class of methods
class methods {

}

// setting method
setting() {
  this.settings_button = this.add.image(75,20, "settings_button").setInteractive();
  this.settings_button.scale = .8;
  this.settings_button.once('pointerdown', () => {
    this.scene.get("settings").setPrev(this.scene.key);
    this.scene.start('settings');
  });
}
