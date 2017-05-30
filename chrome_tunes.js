import Keyboard from './keyboard.js';
import colors from './color.js';

let bluesScaleG = [49.00, 58.27, 65.41, 69.30, 73.42, 87.31,
  98.00, 116.5, 130.8, 138.6, 146.8, 174.6,
  196.0, 233.1, 261.6, 277.2, 293.7, 349.2,
  392.0, 466.2, 523.3, 554.4, 587.3, 698.5,
  784.0, 932.3, 1047, 1109, 1175, 1397, 1568];

let keyBoard = new Keyboard(bluesScaleG, colors);

let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');



window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('click', (e) => {
  keyBoard.sound();
});


window.addEventListener("keypress", keyHandler, false);


function keyHandler(e){
  let key = e.key;
  keyBoard.sound(key);
  // var context = new AudioContext();
  // var o = context.createOscillator();
  // o.type = "triangle";
  // var  g = context.createGain();
  // var frequency;
  // switch (key) {
  //   case "z":
  //     frequency = 146.8; // d minor 3
  //     break;
  //   case "x":
  //     frequency = 164.8;
  //     break;
  //   case "c":
  //     frequency = 174.6;
  //     break;
  //   case "v":
  //     frequency = 196.0;
  //     break;
  //   case "b":
  //     frequency = 220.0;
  //     break;
  //   case "n":
  //     frequency = 233.1;
  //     break;
  //   case "m":
  //     frequency = 261.6;
  //     break;
  //   case ",":
  //     frequency = 293.7;
  //     break;
  //   case "q":
  //     frequency = 196.0; // blues g 3
  //     break;
  //   case "w":
  //     frequency = 233.1;
  //     break;
  //   case "e":
  //     frequency = 261.6;
  //     break;
  //   case "r":
  //     frequency = 277.2;
  //     break;
  //   case "t":
  //     frequency = 293.7;
  //     break;
  //   case "y":
  //     frequency = 349.2;
  //     break;
  //   case "u":
  //     frequency = 392.0;
  //     break;
  //   default:
  //     frequency = 0;
  //     break;
  // }
  // o.frequency.value = frequency;
  // o.connect(g);
  // g.connect(context.destination);
  // o.start(0);
  // g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
  // setTimeout(() => context.close(), 500);
}



let mouse = {
  x: undefined,
  y: undefined
};

let maxRadius = 50;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

var colorArray = [
  '#B21262',
  '#FFE519',
  '#FF007F',
  '#14B5CC',
  '#099DB2'
];

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = function(){
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();

    if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius){
      this.radius -= 1;
    }

  };
}

let circleArray = [];


const init = () => {
  circleArray = [];
  for (var i = 0; i < 1500; i++) {
    let radius = Math.random() * 3 + 1;
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;
    let y = Math.random() * (window.innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 5;
    let dy = (Math.random() - 0.5) * 5;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
};

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  keyBoard.draw();

  for (var j = 0; j < circleArray.length; j++) {
    circleArray[j].update();
  }


}

init();
animate();
