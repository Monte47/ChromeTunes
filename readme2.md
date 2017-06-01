# [**ChromeTunes**](https://monte47.github.io/ChromeTunes/)

ChromeTunes is an interactive audio-visual app which lets you create music notes and colors with your keyboard. ChromeTunes is inspired by the concept of Synesthesia, specifically Chromesthesia.

It was built using JavaScript, HTML5 Canvas, and CSS3.

## **Implementation and Functionality**

#### **Notes**

ChromeTunes generates sound programmatically using the JavaScript Web Audio API, which uses different waveform frequencies to change the tone of sound, and different wave shape types to produce different sound textures.

```Javascript
sound(key){
  var ctx = new (window.AudioContext || window.webkitAudioContext);
  var o = ctx.createOscillator();
  var g = ctx.createGain();
  o.frequency.value = key;
  o.type = this.soundType;
  o.connect(g);
  g.connect(ctx.destination);
  o.start(0);
  g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + .5);
  setTimeout(() => ctx.close(), 500);
}
```

#### **Colors**

ChromeTunes uses HTML5 Canvas and Javascript logic to implement color animations. Color circles are each given velocities positions. Functional logic determines how colors interact with the edge of the window and the cursor.

```Javascript
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

  if( cursor.yPos - this.yStart < this.maxRadius - 2 && cursor.yPos - this.yStart > -this.maxRadius - 2
    && cursor.xPos - this.xStart < this.maxRadius - 2 && cursor.xPos - this.xStart > -this.maxRadius - 2) {
    if (this.radius < this.maxRadius) {
      this.radius += 1;
    }
  } else if (this.radius > this.minRadius){
    this.radius -= 1;
  }
}
```

#### **Settings**

The app utilizes object oriented design to allow users to change sounds settings. Users can toggle through a series of scales and sound types to implement different sounds.

```Javascript
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
    setTimeout(() => colorArray.splice(1500, 1), 5000);
  }
};
```

## **Future Plans for ChromeTunes**

Future development plans for ChromeTunes include a Demo button that will play from a variety of quick songs depending which sound type/key is currently in use.
