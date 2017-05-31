/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var colors = ['#42F2F7', '#E5446D', '#FB4D3D', '#7D7ABC', '#37FF8B', '#8D9EC6', '#EAC435', '#E40066', '#345995', '#C4D6B0', '#090C9B', '#B49FCC', '#152614', '#FDE74C', '#9BC53D', '#F06449', '#31E981', '#35605A', '#F2F79E', '#03CEA4', '#A390E4', '#99C5B5', '#706C61', '#E4D9FF', '#1E2749', '#A23E48', '#FFF275', '#C6CA53', '#7B7263', '#D30C7B', '#F2F3AE'];

exports.default = colors;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _color = __webpack_require__(0);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var colorArray = _color2.default;

window.addEventListener('mousemove', function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

var mouse = {
  x: undefined,
  y: undefined
};

var Circle = function () {
  function Circle(x, y, dx, dy, radius, color) {
    _classCallCheck(this, Circle);

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.maxRadius = radius + 45;
    this.color = color || colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  _createClass(Circle, [{
    key: 'draw',
    value: function draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;
      this.draw();

      if (mouse.x - this.x < this.maxRadius && mouse.x - this.x > -this.maxRadius && mouse.y - this.y < this.maxRadius && mouse.y - this.y > -this.maxRadius) {
        if (this.radius < this.maxRadius) {
          this.radius += 1;
        }
      } else if (this.radius > this.minRadius) {
        this.radius -= 1;
      }
    }
  }]);

  return Circle;
}();

exports.default = Circle;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var Keyboard = function () {
  function Keyboard(scale, colors, soundType) {
    _classCallCheck(this, Keyboard);

    this.scale = scale;
    this.colors = colors;
    this.currentColor = null;
    this.colorArray = [];
    this.soundType = soundType;
    this.key;
    if (this.scale[0] === 49.00) {
      this.key = "G Blues";
    } else if (this.scale[0] === 110) {
      this.key = "A Minor";
    } else {
      this.key = "E Major";
    }
  }

  _createClass(Keyboard, [{
    key: 'sound',
    value: function sound(key) {
      var context = new (window.AudioContext || window.webkitAudioContext)();
      var o = context.createOscillator();
      var g = context.createGain();
      var frequency;
      switch (key) {
        case "q":
          frequency = this.scale[0];
          this.currentColor = this.colors[0];
          break;
        case "w":
          frequency = this.scale[1];
          this.currentColor = this.colors[1];
          break;
        case "e":
          frequency = this.scale[2];
          this.currentColor = this.colors[2];
          break;
        case "r":
          frequency = this.scale[3];
          this.currentColor = this.colors[3];
          break;
        case "t":
          frequency = this.scale[4];
          this.currentColor = this.colors[4];
          break;
        case "y":
          frequency = this.scale[5];
          this.currentColor = this.colors[5];
          break;
        case "u":
          frequency = this.scale[6];
          this.currentColor = this.colors[6];
          break;
        case "i":
          frequency = this.scale[7];
          this.currentColor = this.colors[7];
          break;
        case "o":
          frequency = this.scale[8];
          this.currentColor = this.colors[8];
          break;
        case "p":
          frequency = this.scale[9];
          this.currentColor = this.colors[9];
          break;
        case "[":
          frequency = this.scale[10];
          this.currentColor = this.colors[10];
          break;
        case "]":
          frequency = this.scale[11];
          this.currentColor = this.colors[11];
          break;
        case "a":
          frequency = this.scale[12];
          this.currentColor = this.colors[12];
          break;
        case "s":
          frequency = this.scale[13];
          this.currentColor = this.colors[13];
          break;
        case "d":
          frequency = this.scale[14];
          this.currentColor = this.colors[14];
          break;
        case "f":
          frequency = this.scale[15];
          this.currentColor = this.colors[15];
          break;
        case "g":
          frequency = this.scale[16];
          this.currentColor = this.colors[16];
          break;
        case "h":
          frequency = this.scale[17];
          this.currentColor = this.colors[17];
          break;
        case "j":
          frequency = this.scale[18];
          this.currentColor = this.colors[18];
          break;
        case "k":
          frequency = this.scale[19];
          this.currentColor = this.colors[19];
          break;
        case "l":
          frequency = this.scale[20];
          this.currentColor = this.colors[20];
          break;
        case ";":
          frequency = this.scale[21];
          this.currentColor = this.colors[21];
          break;
        case "'":
          frequency = this.scale[22];
          this.currentColor = this.colors[22];
          break;
        case "z":
          frequency = this.scale[23];
          this.currentColor = this.colors[23];
          break;
        case "x":
          frequency = this.scale[24];
          this.currentColor = this.colors[24];
          break;
        case "c":
          frequency = this.scale[25];
          this.currentColor = this.colors[25];
          break;
        case "v":
          frequency = this.scale[26];
          this.currentColor = this.colors[26];
          break;
        case "b":
          frequency = this.scale[27];
          this.currentColor = this.colors[27];
          break;
        case "n":
          frequency = this.scale[28];
          this.currentColor = this.colors[28];
          break;
        case "m":
          frequency = this.scale[29];
          this.currentColor = this.colors[29];
          break;
        case ",":
          frequency = this.scale[30];
          this.currentColor = this.colors[30];
          break;
        default:
          frequency = 0;
          break;
      }
      o.frequency.value = frequency;
      o.type = this.soundType;
      o.connect(g);
      g.connect(context.destination);
      o.start(0);
      g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
      setTimeout(function () {
        return context.close();
      }, 500);
      this.colorArray.push(this.currentColor);
    }
  }, {
    key: 'draw',
    value: function draw() {
      c.strokeStyle = 'black';
      c.lineWidth = 3;
      c.font = "60px Coiny";
      c.fillStyle = this.currentColor;
      c.textAlign = "center";
      c.strokeText("Press a Key to Make a Sound", canvas.width / 2, canvas.height / 2);
      c.fillText("Press a Key to Make a Sound", canvas.width / 2, canvas.height / 2);
      c.font = "30px Coiny";
      c.strokeText("Press Enter to Change Sound Type", canvas.width / 2, canvas.height / 1.25);
      c.fillText("Press Enter to Change Sound Type", canvas.width / 2, canvas.height / 1.25);
      c.strokeText('' + this.soundType, canvas.width / 2, canvas.height / 1.17);
      c.fillText('' + this.soundType, canvas.width / 2, canvas.height / 1.17);
      c.strokeText("Press Space to Change Key", canvas.width / 2, canvas.height / 1.1);
      c.fillText("Press Space to Change Key", canvas.width / 2, canvas.height / 1.1);
      c.strokeText('' + this.key, canvas.width / 2, canvas.height / 1.05);
      c.fillText('' + this.key, canvas.width / 2, canvas.height / 1.05);
    }
  }]);

  return Keyboard;
}();

exports.default = Keyboard;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var keys = exports.keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,".split("");

var gBluesScale = exports.gBluesScale = [49.00, 58.27, 65.41, 69.30, 73.42, 87.31, 98.00, 116.5, 130.8, 138.6, 146.8, 174.6, 196.0, 233.1, 261.6, 277.2, 293.7, 349.2, 392.0, 466.2, 523.3, 554.4, 587.3, 698.5, 784.0, 932.3, 1047, 1109, 1175, 1397, 1568];

var aMinorScale = exports.aMinorScale = [110, 123.5, 130.8, 146.8, 164.8, 174.6, 196.0, 220.0, 246.9, 261.1, 293.7, 329.6, 349.2, 392.0, 440.0, 493.9, 523.3, 587.3, 659.3, 698.5, 784.0, 880.0, 987.8, 1047, 1175, 1319, 1397, 1568, 1760, 1976, 2093];

var dMinorScale = exports.dMinorScale = [73.42, 82.41, 87.31, 98.00, 110.0, 116.5, 130.8, 146.8, 164.8, 174.6, 196.0, 220.0, 233.1, 261.6, 293.7, 329.6, 349.2, 392.0, 440.0, 466.2, 523.3, 587.3, 659.3, 698.5, 784.0, 880.0, 932.3, 1047, 1175, 1319, 1397];

var eMajorScale = exports.eMajorScale = [82.41, 92.5, 103.8, 110, 123.5, 138.6, 155.6, 164.8, 185.0, 207.7, 220.0, 246.9, 277.2, 311.1, 329.6, 370, 415.3, 440, 493.9, 554.4, 622.3, 659.3, 740, 830.6, 880, 987.8, 1109, 1245, 1319, 1480, 1661];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keyboard = __webpack_require__(2);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _circle = __webpack_require__(1);

var _circle2 = _interopRequireDefault(_circle);

var _color = __webpack_require__(0);

var _color2 = _interopRequireDefault(_color);

var _sound = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

var scalesArray = [_sound.aMinorScale, _sound.gBluesScale, _sound.eMajorScale];
var scalesI = 0;

var soundTypeArray = ["sine", "triangle", "square", "sawtooth"];
var soundTypeI = 0;

var keyBoard = new _keyboard2.default(scalesArray[0], _color2.default, soundTypeArray[0]);

window.addEventListener("keydown", function (e) {
  return keyHandler(e);
}, false);

var keyHandler = function keyHandler(e) {
  var key = e.key;
  var currentSound = void 0;
  var currentScale = void 0;
  console.log(key);
  if (key === " ") {
    scalesI++;
    currentSound = soundTypeArray[soundTypeI % soundTypeArray.length];
    currentScale = scalesArray[scalesI % scalesArray.length];
    keyBoard = new _keyboard2.default(currentScale, _color2.default, currentSound);
  } else if (key === "Enter") {
    soundTypeI++;
    currentSound = soundTypeArray[soundTypeI % soundTypeArray.length];
    currentScale = scalesArray[scalesI % scalesArray.length];
    keyBoard = new _keyboard2.default(currentScale, _color2.default, currentSound);
  } else if (_sound.keys.indexOf(key) > -1) {
    keyBoard.sound(key);
    createSoundCircle();
    setTimeout(function () {
      return circleArray.splice(1500, 1);
    }, 5000);
  }
};

var createSoundCircle = function createSoundCircle() {
  var radius = 60;
  var x = Math.random() * (window.innerWidth - radius * 2) + radius;
  var y = Math.random() * (window.innerHeight - radius * 2) + radius;
  var dirs = [-10, 10];
  var dx = dirs[Math.floor(Math.random() * dirs.length)];
  var dy = dirs[Math.floor(Math.random() * dirs.length)];
  circleArray.push(new _circle2.default(x, y, dx, dy, radius, keyBoard.currentColor));
};

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

var circleArray = [];

var init = function init() {
  circleArray = [];
  for (var i = 0; i < 1500; i++) {
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    circleArray.push(new _circle2.default(x, y, dx, dy, radius));
  }
};

var animate = function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var j = 0; j < circleArray.length; j++) {
    circleArray[j].update();
  }
  keyBoard.draw();
};

init();
animate();

////////////////////
////////////////////

var nav = document.getElementById("nav");
var about = document.getElementById("about-modal");
var root = document.getElementById("root");
var closeButton = document.getElementById("close-button");
console.log(nav);
console.log(about);

nav.addEventListener('click', function () {
  console.log("hello");
  if (about.classList.contains("hidden")) {
    about.classList.remove("hidden");
  } else {
    about.classList.add("hidden");
  }
});

closeButton.addEventListener('click', function () {
  about.classList.add("hidden");
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map