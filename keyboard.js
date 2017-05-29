let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

class Keyboard {
  constructor() {

  }

  draw() {
    c.fillStyle = 'red';
    c.fillRect(100, 100, 100, 100);
  }

  sound(){
        var audio = document.createElement("audio");
        audio.src = "./sounds/piano.wav";
        audio.play();
    }


}

export default Keyboard;
