x = 100;
y = 600;
block = 1.0;
function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(0,156,255);
    movePlayer();
  drawPlayer();
  obstical();
  finish();
  fill(0,255,0);
  rect(0,700,width,600);

  loop();
  
}

//Player is supposed to be Mario
function drawPlayer() {
  fill(255,0,0);
  rect(x,y,50,100);
  push();
  fill(255,235,199);
  translate(0,-50);
  rect(x,y,50,50);
  translate(0,-5);
  fill(255,0,0);
  rect(x,y,60,5);
  translate(0,-20);
  rect(x,y,50,20);
  
  pop();
  
}
//Moves player left and right but not up or down
function movePlayer() {
  if (keyIsDown(68)) {
    x = x+5;
  }
  if (keyIsDown(65)) {
    x = x-5;
  }
  loop();
}

function obstical() {
  //This is the fire ball
  push();
  fill (255,106,0);
  stroke(255,0,0);
  translate(1000,300);
  rotate(block);
  ellipse(150,150,50,50);

    block = block + 0.1;
  pop();
  
}

//The finish line

function finish() {
  
  fill(115,69,0);
  stroke(0,0,0);
  rect(1600,200,10,500)
  
  if (x > 1600) {
    textSize(30);
    fill(255,255,255);
    text("Your princess is in another castle", width/2, 100);
  }
  
}