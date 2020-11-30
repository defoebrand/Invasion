import 'phaser';
import Background from '/src/Assets/loadingScreen.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', Background);

  }

  create() {
    this.add.image(400, 300, 'logo');

  }
};
