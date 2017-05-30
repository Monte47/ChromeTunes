import Keyboard from './keyboard.js';
import Circle from './circle.js';
import colors from './color.js';
import { gBluesScale, aMinorScale } from './sound.js';

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');


let scalesArray = [aMinorScale, gBluesScale];
let scalesI = 1;

let soundTypeArray = ["sine", "triangle", "square", "sawtooth"];
let soundTypeI = 1;

let keyBoard = new Keyboard(gBluesScale, colors, "sine");



window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener("keypress", keyHandler, false);


function keyHandler(e){
  let key = e.key;
  let currentSound = soundTypeArray[soundTypeI % soundTypeArray.length];
  let currentScale = scalesArray[scalesI % scalesArray.length];
  console.log(key);
  if(key === " ") {
    scalesI++;
    keyBoard = new Keyboard(currentScale, colors, currentSound);
    console.log("hi");
  } else if (key === "Enter") {
    soundTypeI++;
    keyBoard = new Keyboard(currentScale, colors, currentSound);
  } else {
    keyBoard.sound(key);
  }
  let radius = Math.random() * 3 + 60;
  let x = Math.random() * (window.innerWidth - radius * 2) + radius;
  let y = Math.random() * (window.innerHeight - radius * 2) + radius;
  let dirs = [-10, 10];
  let dx = dirs[Math.floor(Math.random() * dirs.length)];
  let dy = dirs[Math.floor(Math.random() * dirs.length)];
  circleArray.push(new Circle(x, y, dx, dy, radius, keyBoard.currentColor));
  setTimeout(() => circleArray.splice(1500, 1), 5000);
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
  }
  keyBoard.draw();


}

init();
animate();
