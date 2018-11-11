function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  initialize();

  turnRight(90);
  forward(500);
  turnLeft(90);

  for (var i = 0; i < 20; i++) {
    drawTree();
    turnLeft(80);
    forward(50);
    turnRight(80);
  }

  plotStartEnd();
}

function drawTree() {
  // tree base
  turnLeft(90);
  forward(20);
  turnRight(90);
  trace(200);
  turnRight(90);
  trace(40);
  turnRight(90);
  trace(200);

  // tree leaves
  turnLeft(90);
  trace(60);
  turnRight(110);
  trace(235);
  turnRight(140);
  trace(235);
  turnRight(110);
  trace(60);

  // return to starting point
  forward(20);
  turnLeft(90);
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

