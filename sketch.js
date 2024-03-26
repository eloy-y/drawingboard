let brushX;
let brushY;
let brushZ = 50;

let col1 = 255;
let col2 = 255;
let col3 = 255;

let eraserY;

let happy;

let bx;
let by;
let boxSize = 100;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

let titlefont;
let instfont;

function preload() {
  // Fonts
  titlefont = loadFont("Micro5-Regular.ttf");
  instfont = loadFont("KodeMono-VariableFont_wght.ttf");

  //Image
  happy = loadImage("happy.png");
}

function setup() {
  createCanvas(1800, 1000);
  bx = 1300;
  by = 200;
  background(240);
}

function draw() {
  //console.log(mouseX, mouseY);

  // Paint Brush
  fill(col1, col2, col3, 200);
  brushX = constrain(mouseX, 50, 1500);
  brushY = constrain(mouseY, 120, 950);
  if (mouseIsPressed) {
    ellipse(brushX, brushY, brushZ);
  }

  //outline
  noStroke();
  fill(101, 133, 184);
  rect(0, 0, 80, 1000); //left
  rect(0, 920, 1400, 80); //bottom
  rect(1200, 0, 200, 1000); //right
  rect(0, 0, 1400, 150); //top

  //eraser
  stroke(50);
  strokeWeight(5);
  line(1300, 200, 1300, 880);
  stroke(200);
  fill(255);

  // slider conditions
  if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true;
    if (!locked) {
      true;
    }
  } else {
    overBox = false;
  }

  // slider circle
  ellipse(bx, by, boxSize, boxSize);

  // erase the board with slider
  rectMode(CORNER);
  noStroke();
  fill(240, 01);

  if (by > 240) {
    rect(80, 150, 1120, 770);
  }

  fill(240, 04);
  if (by > 550) {
    rect(80, 150, 1120, 770);
  }

  fill(240, 07);
  if (by > 680) {
    rect(80, 150, 1120, 770);
  }

  fill(240, 150);
  if (by > 860) {
    rect(80, 150, 1120, 770);
  }

  //Paintbrush Color
  //Purple
  if (mouseX < 640 && mouseY < 535) {
    col1 = 153;
    col2 = 51;
    col3 = 255;
  }

  // Yellow
  if (mouseX > 640 && mouseY > 535) {
    col1 = 227;
    col2 = 207;
    col3 = 95;
  }

  //Red
  if (mouseX < 640 && mouseY > 535) {
    col1 = 191;
    col2 = 64;
    col3 = 64;
  }

  //Green
  if (mouseX > 640 && mouseY < 535) {
    col1 = 133;
    col2 = 244;
    col3 = 163;
  }

  // Title
  textAlign(CENTER);
  fill(220);
  textFont(titlefont);
  textSize(140);
  text("Online Drawing Board", 640, 110);

  //Instruction Box
  fill(252, 149, 71);
  rect(1400, 0, 400, 1000);

  // Instructions Title
  fill(40);
  textSize(50);
  textFont(instfont);
  text("Instructions", 1600, 80);

  //Directions
  textAlign(LEFT);
  textSize(30);
  text("1. Draw on the white \n   space", 1405, 140);

  text(
    "2. Pull the circle \n   slider all the way \n   down to erase the \n   board. Put the \n   slider all the way \n   up before drawing",
    1405,
    240
  );

  text("3. Use the Scroll \n   Wheel to change \n   the brush size", 1405, 490);

  // Brush Size Display
  textAlign(CENTER);
  text("Brush Size", 1600, 650);
  fill(200);
  ellipse(1600, 770, brushZ);
  fill(40);
  let brushdisplay = round(brushZ);
  text(brushdisplay, 1600, 780);

  // Farewell
  text("Hope you enjoy!", 1600, 910);
  imageMode(CENTER);
  tint(255, 190);
  image(happy, 1600, 950, 50, 50);
}

// Change Brush Size
function mouseWheel(event) {
  print(brushZ);
  brushZ -= event.delta / 25;
  if (brushZ > 200) {
    brushZ = 200;
  }
  if (brushZ < 0) {
    brushZ = 0;
  }
}

// Slider
function mousePressed() {
  if (overBox) {
    locked = true;
  } else {
    locked = false;
  }
  xOffset = mouseX;
  yOffset = mouseY - by;
}

// Slider movement
function mouseDragged() {
  if (
    locked &&
    mouseX > 1250 &&
    mouseX < 1350 &&
    mouseY > 200 &&
    mouseY < 880
  ) {
    bx = 1300;
    by = mouseY - yOffset;
  }
}

// Stop movement
function mouseReleased() {
  locked = false;
}
