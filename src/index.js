import './style.scss';
import 'phaser';
import config from './Conf/config';
import Model from './Conf/Model'
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import CreditsScene from './Scenes/CreditsScene';
import OptionsScene from './Scenes/OptionsScene';
import CharacterSelectScene from './Scenes/CharacterSelectScene';
import GamePlayScene from './Scenes/GamePlayScene';
import GameOverScene from './Scenes/GameOverScene';
import LeaderBoardScene from './Scenes/LeaderBoardScene';

const body = document.querySelector('body')

const form = document.createElement('form')

const cityInput = document.createElement('input')
cityInput.type = 'text'
cityInput.placeholder = 'Enter Text...'
form.appendChild(cityInput)

const submitBtn = document.createElement('input')
submitBtn.type = 'submit'
submitBtn.value = "Enter Text"
submitBtn.onclick = (e) => {
  e.preventDefault()
  alert(cityInput.value)
}
form.appendChild(submitBtn)

body.appendChild(form)


class Game extends Phaser.Game {
  constructor() {
    super(config);
    window.model = new Model();
    this.globals = {
      model,
      bgMusic: null
    };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('CharacterSelect', CharacterSelectScene);
    this.scene.add('Game', GamePlayScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('LeaderBoard', LeaderBoardScene);

    this.scene.start('Boot');
  }
}

window.game = new Game();