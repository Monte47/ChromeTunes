// import Keyboard from './keyboard.js';
//
// let canvas = document.querySelector('canvas');
//
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
//
// var c = canvas.getContext('2d');
//
// let keyBoard = new Keyboard();
//
//
// // c.fillStyle = 'rgba(255, 0, 0 , 0.5)';
// // c.fillRect(100, 100, 100, 100);
// // c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// // c.fillRect(400, 100, 100, 100);
// // c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// // c.fillRect(300, 300, 100, 100);
//
// // Line
// // c.beginPath();
// // c.moveTo(50, 300);
// // c.lineTo(300, 100);
// // c.lineTo(400, 300);
// // c.strokeStyle = "#fa34a3";
// // c.stroke();
//
//
// // Arc
// // c.beginPath();
// // c.arc(300, 300, 30, 0, Math.PI * 2, false);
// // c.strokeStyle = 'blue';
// // c.stroke();
//
// // for (var i = 0; i < 500; i++) {
// //   let x = Math.random() * window.innerWidth / 2;
// //   let y = Math.random() * window.innerHeight;
// //   c.beginPath();
// //   c.arc(x, y, 30, 0, Math.PI * 2, false);
// //   c.strokeStyle = 'blue';
// //   c.stroke();
// // }
//
// let mouse = {
//   x: undefined,
//   y: undefined
// };
//
// let maxRadius = 50;
// // let minRadius = 3;
//
// window.addEventListener('mousemove', (e) => {
//   mouse.x = e.x;
//   mouse.y = e.y;
// });
//
// window.addEventListener('click', (e) => {
//   keyBoard.sound();
// });
//
// window.addEventListener('resize', () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//
//   init();
// });
//
// var colorArray = [
//   '#B21262',
//   '#FFE519',
//   '#FF007F',
//   '#14B5CC',
//   '#099DB2'
// ];
//
// function Circle(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;
//   this.minRadius = radius;
//   this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
//
//   this.draw = function() {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.fillStyle = this.color;
//     c.fill();
//   };
//
//   this.update = function(){
//     if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }
//     if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//       this.dy = -this.dy;
//     }
//     this.x += this.dx;
//     this.y += this.dy;
//     this.draw();
//
//     if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
//       if (this.radius < maxRadius) {
//         this.radius += 1;
//       }
//     } else if (this.radius > this.minRadius){
//       this.radius -= 1;
//     }
//
//   };
// }
//
// let circleArray = [];
//
//
// const init = () => {
//   circleArray = [];
//   for (var i = 0; i < 1500; i++) {
//     let radius = Math.random() * 3 + 1;
//     let x = Math.random() * (window.innerWidth - radius * 2) + radius;
//     let y = Math.random() * (window.innerHeight - radius * 2) + radius;
//     let dx = (Math.random() - 0.5) * 5;
//     let dy = (Math.random() - 0.5) * 5;
//     circleArray.push(new Circle(x, y, dx, dy, radius));
//   }
// };
//
// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);
//
//   for (var j = 0; j < circleArray.length; j++) {
//     circleArray[j].update();
//     keyBoard.draw();
//   }
//
//
// }
//
// init();
// animate();
let c;

class Color {
  constructor(xstart, ystart, xend, yend) {
    this.xstart = xstart;
    this.ystart = ystart;
    this.xend = xend;
    this.yend = yend;
    this.dx = 1;
    this.dy = 1;
  }

  draw(){
    c.beginPath();
    c.moveTo(this.xstart, this.ystart);
    c.lineTo(this.xend, this.yend);
    c.stroke;
  }

  update(){
    if(this.xend > innerWidth || this.xend < 0) {
      this.dx = -this.dx;
    }
    if(this.yend > innerHeight || this.yend < 0) {
      this.dy = -this.dy;
    }
    this.xend += this.dx;
    this.yend += this.dy;
    this.draw();
  }
}


////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////


// import Keyboard from './keyboard.js';
// import colors from './color.js';
// import { gBluesScale, aMinorScale } from './sound.js';
//
// let canvas = document.querySelector('canvas');
//
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
//
// let c = canvas.getContext('2d');
//
//
// let scalesArray = [aMinorScale, gBluesScale];
// let scalesI = 1;
//
// let soundTypeArray = ["sine", "triangle", "square", "sawtooth"];
// let soundTypeI = 1;
//
// let keyBoard = new Keyboard(gBluesScale, colors, "sine");
//
//
//
// window.addEventListener('mousemove', (e) => {
//   mouse.x = e.x;
//   mouse.y = e.y;
// });
//
// window.addEventListener('click', () => {
//   c.clearRect(0, 0, innerWidth, innerHeight);
// });
//
// window.addEventListener("keypress", keyHandler, false);
//
//
// function keyHandler(e){
//   let key = e.key;
//   console.log(key);
//   if(key === " ") {
//     scalesI++;
//     keyBoard = new Keyboard(scalesArray[scalesI % scalesArray.length], colors, soundTypeArray[soundTypeI % soundTypeArray.length]);
//     console.log("hi");
//   } else if (key === "Enter") {
//     soundTypeI++;
//     keyBoard = new Keyboard(scalesArray[scalesI % scalesArray.length], colors, soundTypeArray[soundTypeI % soundTypeArray.length]);
//   } else {
//     keyBoard.sound(key);
//   }
//   let radius = Math.random() * 3 + 60;
//   let x = Math.random() * (window.innerWidth - radius * 2) + radius;
//   let y = Math.random() * (window.innerHeight - radius * 2) + radius;
//   // let dx = (Math.random() - 0.5) * 20;
//   let dx = 50;
//   // let dy = (Math.random() - 0.5) * 20;
//   let dy = 50;
//   circleArray.push(new Circle(x, y, dx, dy, radius, keyBoard.currentColor));
//   setTimeout(() => circleArray.splice(0, 1), 500);
// }
//
//
//
// let mouse = {
//   x: undefined,
//   y: undefined
// };
//
// let maxRadius = 50;
//
// window.addEventListener('resize', () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//
//   init();
// });
//
// var colorArray = colors;
//
// function Circle(x, y, dx, dy, radius, color) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;
//   this.minRadius = radius;
//   this.color = color || colorArray[Math.floor(Math.random() * colorArray.length)];
//
//   this.draw = function() {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.fillStyle = this.color;
//     c.fill();
//   };
//
//   this.update = function(){
//     if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }
//     if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//       this.dy = -this.dy;
//     }
//     this.x += this.dx;
//     this.y += this.dy;
//     this.draw();
//
//     if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
//       if (this.radius < maxRadius) {
//         this.radius += 1;
//       }
//     } else if (this.radius > this.minRadius){
//       this.radius -= 1;
//     }
//
//   };
// }
//
//
// class Color {
//   constructor(x, y, length, height, dx, dy) {
//     this.x = x;
//     this.y = y;
//     this.length = length;
//     this.height = height;
//     this.dx = 1;
//     this.dy = 1;
//   }
//
//   draw(){
//     c.fillRect(this.x, this.y, this.length, this.height);
//   }
//   update(){
//     if (this.x + this.length > innerWidth) {
//       this.dx = -this.dx;
//     }
//     if (this.y + this.height > innerHeight) {
//       this.dy = -this.dy;
//     }
//     this.x += this.dx;
//     this.y += this.dy;
//     this.length += this.dx;
//     this.height += this.dy;
//     this.draw();
//   }
// }
//
// let c1 = new Color(50,50, 20, 20);
//
// let circleArray = [];
//
//
// const init = () => {
//   circleArray = [];
//   for (var i = 0; i < 1500; i++) {
//     let radius = Math.random() * 3 + 1;
//     let x = Math.random() * (window.innerWidth - radius * 2) + radius;
//     let y = Math.random() * (window.innerHeight - radius * 2) + radius;
//     let dx = (Math.random() - 0.5) * 5;
//     let dy = (Math.random() - 0.5) * 5;
//     // circleArray.push(new Circle(x, y, dx, dy, radius));
//   }
//   c1.draw();
// };
//
//
//
// function animate() {
//   requestAnimationFrame(animate);
//   // c.clearRect(0, 0, innerWidth, innerHeight);
//   c1.update();
//   keyBoard.draw();
//
//   for (var j = 0; j < circleArray.length; j++) {
//     circleArray[j].update();
//   }
//
//
// }
//
// init();
// animate();
