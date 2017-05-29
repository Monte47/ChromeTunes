let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

class Keyboard {
  constructor() {

  }

  draw() {
    c.fillStyle = 'red';
    let boardWidthStart = (window.innerWidth / 5);
    let boardHeightStart = (window.innerHeight / 2.2);
    let boardWidth = (window.innerWidth / 1.8);
    let boardHeight =  (window.innerHeight / 4.5);
    c.fillRect(boardWidthStart, boardHeightStart, boardWidth, boardHeight);
  }

  sound(){
        var audio = document.createElement("audio");
        audio.src = "./sounds/piano.wav";
        audio.play();
    }


}

export default Keyboard;
