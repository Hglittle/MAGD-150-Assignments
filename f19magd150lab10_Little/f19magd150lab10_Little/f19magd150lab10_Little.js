var backgroundR = 200;
var backgroundG = 200;
var backgroundB = 200;
var cameraX = 0;
var cameraY = 0;
var cameraZ = 0;
var x = 0;
let video;

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(backgroundR,backgroundG,backgroundB);
  createModel();
  changeBackground();
  createLight();
  createCameras();
  captureVideo();
  print("Hi Hunter");
   video = createCapture(VIDEO);
  video.size(100,100);
  image(video, 0, 0, 100, 100);
  video.hide();
}

function preload() {
  water = loadTable('CSV.csv');
}

function changeBackground() {
 //Automatically changes background
  if(keyCode == "68") {
    if(backgroundR >= 180 && backgroundR <= 254) {
     backgroundR = backgroundR + 0.1;
    }
     if(backgroundB >= 180 && backgroundB <= 254) {
     backgroundB = backgroundB + 0.1;
    }
         if(backgroundG >= 181 && backgroundG <= 255) {
     backgroundG = backgroundG - 0.1;
    }
        if(backgroundG >= 181 && backgroundG <=255) {
      keyCode = 68;
    } else {
      keyCode = 65;
    }
  }
 
  if(keyCode == "65") {
    if(backgroundR >= 181 && backgroundR <= 255) {
     backgroundR = backgroundR - 0.1;
    }
     if(backgroundB >= 180 && backgroundB <= 254) {
     backgroundB = backgroundB + 0.1;
    }  
         if(backgroundG >= 180 && backgroundG <= 254) {
     backgroundG = backgroundG + 0.1;
    }
    if(backgroundR >= 181 && backgroundR <=255) {
      keyCode = 65;
    } else {
      keyCode = 68;
  }
  }
 
}

function createModel() {
 //Creates box that changes color
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  specularMaterial(backgroundB,backgroundR,backgroundG,50);
  box(100);
  pop();
 // creates box that goes in opposite direction
  push();
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  rotateZ(frameCount * -0.01);
  normalMaterial();
  fill(backgroundG,backgroundR,backgroundB);
  box(100)
  pop();
 
  push();
  beginShape();
  vertex(-100,100);
  vertex(100,100);
  vertex(100,110);
  vertex(-100,110);
  endShape(CLOSE);
}

function createLight() {
 pointLight(0,51,255,-50,0,10);
  ambientLight(255,0,255);
  
}
//moves the camera around
function createCameras() {
  camera(x, 0, (height/2.0) / tan(PI*30.0 / 180.0), cameraX, cameraY, cameraZ, 0, 1, 0);
  if(keyCode == LEFT_ARROW) {
   cameraX = cameraX+1; 
  }
    if(keyCode == RIGHT_ARROW) {
   cameraX = cameraX-1; 
  }
    if(keyCode == UP_ARROW) {
   cameraY = cameraY+1; 
  }
    if(keyCode == DOWN_ARROW) {
   cameraY = cameraY-1; 
  }
  
}

function captureVideo() {

 //video = createCapture(VIDEO);
  //video.size(100,100);
  //image(video, 0, 0, 100, 100);
  //video.hide();
}