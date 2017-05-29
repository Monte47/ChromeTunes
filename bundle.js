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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
  function Keyboard() {
    _classCallCheck(this, Keyboard);
  }

  _createClass(Keyboard, [{
    key: 'draw',
    value: function draw() {
      c.fillStyle = 'red';
      var boardWidthStart = window.innerWidth / 5;
      var boardHeightStart = window.innerHeight / 2.2;
      var boardWidth = window.innerWidth / 1.8;
      var boardHeight = window.innerHeight / 4.5;
      c.fillRect(boardWidthStart, boardHeightStart, boardWidth, boardHeight);
    }
  }, {
    key: 'sound',
    value: function sound() {
      var audio = document.createElement("audio");
      audio.src = "./sounds/piano.wav";
      audio.play();
    }
  }]);

  return Keyboard;
}();

exports.default = Keyboard;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keyboard = __webpack_require__(0);

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

window.addEventListener('mousemove', function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener('click', function (e) {
  var context = new AudioContext();
  var o = context.createOscillator();
  var g = context.createGain();
  var frequency = 261.6;
  o.frequency.value = frequency;
  o.connect(g);
  g.connect(context.destination);
  o.start(0);
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
  setTimeout(function () {
    return context.close();
  }, 500);
});

window.addEventListener("keypress", keyHandler, false);

function keyHandler(e) {
  var key = e.key;
  var context = new AudioContext();
  var o = context.createOscillator();
  o.type = "triangle";
  var g = context.createGain();
  var frequency;
  switch (key) {
    case "z":
      frequency = 146.8; // d minor 3
      break;
    case "x":
      frequency = 164.8;
      break;
    case "c":
      frequency = 174.6;
      break;
    case "v":
      frequency = 196.0;
      break;
    case "b":
      frequency = 220.0;
      break;
    case "n":
      frequency = 233.1;
      break;
    case "m":
      frequency = 261.6;
      break;
    case ",":
      frequency = 293.7;
      break;
    case "q":
      frequency = 196.0; // blues g 3
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
    default:
      frequency = 0;
      break;
  }
  o.frequency.value = frequency;
  o.connect(g);
  g.connect(context.destination);
  o.start(0);
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
  setTimeout(function () {
    return context.close();
  }, 500);
}

var mouse = {
  x: undefined,
  y: undefined
};

var maxRadius = 50;

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

var colorArray = ['#B21262', '#FFE519', '#FF007F', '#14B5CC', '#099DB2'];

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();

    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
  };
}

var circleArray = [];

var init = function init() {
  circleArray = [];
  for (var i = 0; i < 1500; i++) {
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
};

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var j = 0; j < circleArray.length; j++) {
    circleArray[j].update();
  }
}

init();
animate();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map