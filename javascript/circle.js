import colors from './color.js';

const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

const colorArray = colors;

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

let mouse = {
  x: undefined,
  y: undefined
};

class Circle {
  constructor(x, y, dx, dy, radius, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.maxRadius = radius + 45;
    this.color = color || colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }

  update(){
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();

    if(mouse.x - this.x < this.maxRadius && mouse.x - this.x > -this.maxRadius
     && mouse.y - this.y < this.maxRadius && mouse.y - this.y > -this.maxRadius) {
      if (this.radius < this.maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius){
      this.radius -= 1;
    }

  }
}

export default Circle;
