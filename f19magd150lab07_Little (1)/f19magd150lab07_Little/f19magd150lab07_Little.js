let grass = [];
let sunX = 540;
let sunY = 100;
let sunR = 255;
let sunG = 255;
let sunB = 0;
//I had to make a sky variable so i could continously change the color.
let backgroundR = 189;
let backgroundG = 255;
let backgroundB = 246;
let sun;
function setup() {
  createCanvas(1920, 1080);
  for (let i = 0; i < width; i++) {
    let amount = map(i, 0, width, 0, PI);
    grass[i] = abs(cos(amount));
  }

}

function draw() {
    background(backgroundR,backgroundG,backgroundB);
  drawGrass();
  sun = new makeSun();
  time();

}

//this makes the grass
function drawGrass() {
    let grassTop = height-25;
  let grassBottom = 1080;
  for (let i = 0; i < width; i += 3) {
    stroke(0,255,0);
    line(i, grassBottom, i, grassTop);
  }
}
//this class makes a sun
class makeSun {
  constructor(){
  noStroke();
  fill(sunR,sunG,sunB)
  ellipse(sunX,sunY,150,150);
  }
}

//this class moves the sun
function time(){
  if (sunX < 1920 && sunR == 255) {
 sunX = sunX+10;
  }
  if (sunX >= 1920 && sunR == 255) {
    sunX = 0;
    sunR = 150;
    sunG = 150;
    sunB = 150;
    backgroundR = 50;
    backgroundG = 50;
    backgroundB = 50;
  }
 if (sunX < 1920 && sunR == 150) {
 sunX = sunX+10;
  }
  if (sunX >= 1920 && sunR == 150) {
    sunX = 0;
    sunR = 255;
    sunG = 255;
    sunB = 0;
    backgroundR = 189;
    backgroundG = 255;
    backgroundB = 246;
  }
}