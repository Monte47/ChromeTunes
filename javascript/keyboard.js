let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

class Keyboard {
  constructor(scale, colors, soundType) {
    this.scale = scale;
    this.colors = colors;
    this.currentColor = null;
    this.colorArray = [];
    this.soundType = soundType;
  }

  sound(key){
    var context = new (window.AudioContext || window.webkitAudioContext);
    var o = context.createOscillator();
    var g = context.createGain();
    var frequency;
    switch (key) {
      case "q":
        frequency = this.scale[0];
        this.currentColor = this.colors[0];
        break;
      case "w":
        frequency = this.scale[1];
        this.currentColor = this.colors[1];
        break;
      case "e":
        frequency = this.scale[2];
        this.currentColor = this.colors[2];
        break;
      case "r":
        frequency = this.scale[3];
        this.currentColor = this.colors[3];
        break;
      case "t":
        frequency = this.scale[4];
        this.currentColor = this.colors[4];
        break;
      case "y":
        frequency = this.scale[5];
        this.currentColor = this.colors[5];
        break;
      case "u":
        frequency = this.scale[6];
        this.currentColor = this.colors[6];
        break;
      case "i":
        frequency = this.scale[7];
        this.currentColor = this.colors[7];
        break;
      case "o":
        frequency = this.scale[8];
        this.currentColor = this.colors[8];
        break;
      case "p":
        frequency = this.scale[9];
        this.currentColor = this.colors[9];
        break;
      case "[":
        frequency = this.scale[10];
        this.currentColor = this.colors[10];
        break;
      case "]":
        frequency = this.scale[11];
        this.currentColor = this.colors[11];
        break;
      case "a":
        frequency = this.scale[12];
        this.currentColor = this.colors[12];
        break;
      case "s":
        frequency = this.scale[13];
        this.currentColor = this.colors[13];
        break;
      case "d":
        frequency = this.scale[14];
        this.currentColor = this.colors[14];
        break;
      case "f":
        frequency = this.scale[15];
        this.currentColor = this.colors[15];
        break;
      case "g":
        frequency = this.scale[16];
        this.currentColor = this.colors[16];
        break;
      case "h":
        frequency = this.scale[17];
        this.currentColor = this.colors[17];
        break;
      case "j":
        frequency = this.scale[18];
        this.currentColor = this.colors[18];
        break;
      case "k":
        frequency = this.scale[19];
        this.currentColor = this.colors[19];
        break;
      case "l":
        frequency = this.scale[20];
        this.currentColor = this.colors[20];
        break;
      case ";":
        frequency = this.scale[21];
        this.currentColor = this.colors[21];
        break;
      case "'":
        frequency = this.scale[22];
        this.currentColor = this.colors[22];
        break;
      case "z":
        frequency = this.scale[23];
        this.currentColor = this.colors[23];
        break;
      case "x":
        frequency = this.scale[24];
        this.currentColor = this.colors[24];
        break;
      case "c":
        frequency = this.scale[25];
        this.currentColor = this.colors[25];
        break;
      case "v":
        frequency = this.scale[26];
        this.currentColor = this.colors[26];
        break;
      case "b":
        frequency = this.scale[27];
        this.currentColor = this.colors[27];
        break;
      case "n":
        frequency = this.scale[28];
        this.currentColor = this.colors[28];
        break;
      case "m":
        frequency = this.scale[29];
        this.currentColor = this.colors[29];
        break;
      case ",":
        frequency = this.scale[30];
        this.currentColor = this.colors[30];
        break;
      default:
        frequency = 0;
        break;
    }
    o.frequency.value = frequency;
    o.type = this.soundType;
    o.connect(g);
    g.connect(context.destination);
    o.start(0);
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
    setTimeout(() => context.close(), 500);
    this.colorArray.push(this.currentColor);
  }

  draw() {
    c.strokeStyle = 'black';
    c.lineWidth = 3;
    c.font = "60px Coiny";
    c.fillStyle = this.currentColor;
    c.textAlign = "center";
    c.strokeText("Press a Key to Make a Sound", canvas.width/2, canvas.height/2);
    c.fillText("Press a Key to Make a Sound", canvas.width/2, canvas.height/2);
    c.font = "30px Coiny";
    c.strokeText("Press Enter to Change Sound Type", canvas.width/2, canvas.height/1.2);
    c.fillText("Press Enter to Change Sound Type", canvas.width/2, canvas.height/1.2);
    c.strokeText("Press Space to Change Key", canvas.width/2, canvas.height/1.1);
    c.fillText("Press Space to Change Key", canvas.width/2, canvas.height/1.1);
  }


}





export default Keyboard;
