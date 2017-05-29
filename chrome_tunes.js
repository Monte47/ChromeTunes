import Keyboard from './keyboard.js';

let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

let keyBoard = new Keyboard();


window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('click', (e) => {
  var context = new AudioContext();
  var o = context.createOscillator();
  var  g = context.createGain();
  var frequency = 261.6;
  o.frequency.value = frequency;
  o.connect(g);
  g.connect(context.destination);
  o.start(0);
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
  setTimeout(() => context.close(), 500);
});

window.addEventListener("keypress", keyHandler, false);


function keyHandler(e){
  let key = e.key;
  var context = new AudioContext();
  var o = context.createOscillator();
  o.type = "square";
  var  g = context.createGain();
  var frequency;
  switch (key) {
    case "a":
      frequency = 329.6;
      break;
    case "s":
      frequency = 370.0;
      break;
    case "d":
      frequency = 415.3;
      break;
    case "q":
      frequency = 196.0;
      break;
    case "w":
      frequency = 233.1;
      break;
    case "e":
      frequency = 261.6;
      break;
    case "r":
      frequency = 277.2;
      break;
    case "t":
      frequency = 293.7;
      break;
    case "y":
      frequency = 349.2;
      break;
    case "u":
      frequency = 392.0;
      break;
  }
  o.frequency.value = frequency;
  o.connect(g);
  g.connect(context.destination);
  o.start(0);
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
  setTimeout(() => context.close(), 500);
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

  for (var j = 0; j < circleArray.length; j++) {
    circleArray[j].update();
    keyBoard.draw();
  }


}

init();
animate();
