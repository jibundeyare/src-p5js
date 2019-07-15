function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  initialize();

  // functions you can use:
  // - forward(distance): move without drawing by a distance (in pixels)
  // - trace(distance): draw a line by a distance (in pixels)
  // - turnRight(angle): turn right by an angle (in degrees)
  // - turnLeft(angle): turn left by an angle (in degrees)
  // - plotStartEnd(): draw the starting point (in blue) and the ending point (in red)

  // type your code here
  // ...

  // plotStartEnd();
}

function initialize() {
  // colors
  background(200);
  stroke(0);
  strokeWeight(1);

  // centering
  push();
  translate(width / 2, height / 2);
}

function plotStartEnd() {
  // ending point
  stroke(0, 0, 255);
  strokeWeight(5);
  point(0, 0);
  pop();

  // starting point
  push();
  translate(width / 2, height / 2);
  stroke(255, 0, 0);
  strokeWeight(5);
  point(0, 0);
  pop();
}

function forward(distance) {
  translate(0, distance);
}

function trace(distance) {
  line(0, 0, 0, distance);
  translate(0, distance);
}

function turnRight(angle) {
  rotate(radians(angle));
}

function turnLeft(angle) {
  rotate(radians(-angle));
}

