import Keyboard from './keyboard.js';
import colors from './color.js';

let gBluesScale = [49.00, 58.27, 65.41, 69.30, 73.42, 87.31,
  98.00, 116.5, 130.8, 138.6, 146.8, 174.6,
  196.0, 233.1, 261.6, 277.2, 293.7, 349.2,
  392.0, 466.2, 523.3, 554.4, 587.3, 698.5,
  784.0, 932.3, 1047, 1109, 1175, 1397, 1568];

let dMinorScale = [73.42, 82.41, 87.31, 98.00, 110.0, 116.5, 130.8,
  146.8, 164.8, 174.6, 196.0, 220.0, 233.1, 261.6,
  293.7, 329.6, 349.2, 392.0, 440.0, 466.2, 523.3,
  587.3, 659.3, 698.5, 784.0, 880.0, 932.3, 1047,
  1175, 1319, 1397];

let scalesArray = [dMinorScale, gBluesScale];
let scalesI = 1;

let soundTypeArray = ["sine", "square", "triangle", "sawtooth"];
let soundTypeI = 1;

let keyBoard = new Keyboard(gBluesScale, colors, "sine");

let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');



window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener("keypress", keyHandler, false);


function keyHandler(e){
  let key = e.key;
  console.log(key);
  if(key === " ") {
    scalesI++;
    keyBoard = new Keyboard(scalesArray[scalesI % scalesArray.length], colors, soundTypeArray[soundTypeI % soundTypeArray.length]);
    console.log("hi");
  } else if (key === "Enter") {
    soundTypeI++;
    keyBoard = new Keyboard(scalesArray[scalesI % scalesArray.length], colors, soundTypeArray[soundTypeI % soundTypeArray.length]);
  } else {
    keyBoard.sound(key);
  }
  let radius = Math.random() * 3 + 20;
  let x = Math.random() * (window.innerWidth - radius * 2) + radius;
  let y = Math.random() * (window.innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 5;
  let dy = (Math.random() - 0.5) * 5;
  circleArray.push(new Circle(x, y, dx, dy, radius, keyBoard.currentColor));
  setTimeout(() => circleArray.pop(), 5000);
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

var colorArray = colors;

function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = color || colorArray[Math.floor(Math.random() * colorArray.length)];

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
