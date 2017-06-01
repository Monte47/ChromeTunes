import Keyboard from './keyboard.js';
import Circle from './circle.js';
import colors from './color.js';
import { gBluesScale, aMinorScale, eMajorScale, keys } from './sound.js';

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');

const scalesArray = [aMinorScale, gBluesScale, eMajorScale];
let scalesI = 0;

const soundTypeArray = ["sine", "triangle", "square", "sawtooth"];
let soundTypeI = 0;

let keyBoard = new Keyboard(scalesArray[0], colors, soundTypeArray[0]);


window.addEventListener("keydown", (e) => keyHandler(e), false);


const keyHandler = (e) => {
  let key = e.key;
  let currentSound;
  let currentScale;
  console.log(key);
  if(key === " ") {
    scalesI++;
    currentSound = soundTypeArray[soundTypeI % soundTypeArray.length];
    currentScale = scalesArray[scalesI % scalesArray.length];
    keyBoard = new Keyboard(currentScale, colors, currentSound);
  } else if (key === "Enter") {
    soundTypeI++;
    currentSound = soundTypeArray[soundTypeI % soundTypeArray.length];
    currentScale = scalesArray[scalesI % scalesArray.length];
    keyBoard = new Keyboard(currentScale, colors, currentSound);
  } else if (keys.indexOf(key) > -1) {
    keyBoard.sound(key);
    createSoundCircle();
    setTimeout(() => circleArray.splice(1500, 1), 5000);
  }
};

const createSoundCircle = () => {
  let radius = 60;
  let x = Math.random() * (window.innerWidth - radius * 2) + radius;
  let y = Math.random() * (window.innerHeight - radius * 2) + radius;
  let dirs = [-10, 10];
  let dx = dirs[Math.floor(Math.random() * dirs.length)];
  let dy = dirs[Math.floor(Math.random() * dirs.length)];
  circleArray.push(new Circle(x, y, dx, dy, radius, keyBoard.currentColor));
};

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

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var j = 0; j < circleArray.length; j++) {
    circleArray[j].move();
  }
  keyBoard.draw();

};

init();
animate();




////////////////////
////////////////////

let nav = document.getElementById("nav");
let about = document.getElementById("about-modal");
let root = document.getElementById("root");
let closeButton = document.getElementById("close-button");
console.log(nav);
console.log(about);

nav.addEventListener('click', () => {
  console.log("hello");
  if (about.classList.contains("hidden")) {
    about.classList.remove("hidden");
  } else {
    about.classList.add("hidden");
  }
});

closeButton.addEventListener('click', () => {
  about.classList.add("hidden");
});
