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
