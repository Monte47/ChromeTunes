import colors from './color.js';

const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

const colorArray = colors;

window.addEventListener('mousemove', (e) => {
  cursor.xPos = e.x;
  cursor.yPos = e.y;
});

let cursor = {
  x: undefined,
  y: undefined
};

class Circle {
  constructor(x, y, dx, dy, radius, color){
    this.xStart = x;
    this.yStart = y;
    this.xVel = dx;
    this.yVel = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.maxRadius = radius + 55;
    this.color = color || colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  draw() {
    c.beginPath();
    c.arc(this.xStart, this.yStart, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }

  move(){
    if (this.xStart + this.radius > innerWidth || this.xStart - this.radius < 0) {
      this.xVel = -this.xVel;
    }
    if (this.yStart + this.radius > innerHeight || this.yStart - this.radius < 0) {
      this.yVel = -this.yVel;
    }
    this.xStart += this.xVel;
    this.yStart += this.yVel;
    this.draw();

    if(cursor.xPos - this.xStart < this.maxRadius - 2 && cursor.xPos - this.xStart > -this.maxRadius - 2
     && cursor.yPos - this.yStart < this.maxRadius - 2 && cursor.yPos - this.yStart > -this.maxRadius - 2) {
      if (this.radius < this.maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius){
      this.radius -= 1;
    }

  }
}

export default Circle;
