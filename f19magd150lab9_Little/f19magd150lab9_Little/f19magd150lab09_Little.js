var player1x = 10;
var player1y = 500;
var player2x = 785;
var player2y = 500;
var gotKey = 0;
var openDoor = 0;
//var unlock;
//var winner;
//var backgroundSound;
//The variable "bcktrns" represents the background transparency.
var bcktrns = 0;


function preload() {
  new p5.SoundFile('unlock.mp3');
  goldKeyImg = loadImage('GoldKey.png');
  doorImg = loadImage('Door.jpg');
  soundFormats('mp3', 'ogg', 'wav');
  unlock = loadSound('unlock.mp3');
  winner = loadSound('winner.mp3');
  backgroundSound = loadSound('background.mp3')
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0,0,0,bcktrns);
  //backgroundSound.play();
  push();
  fill(105,30);
  rectMode(CORNER);
  rect(0,0,800,800);
  pop();
  playersMove();
  players();
  goldenKey();
  door();
  
}

//This part of the code builds the player and the reflected player.
function players() {
 
  fill(230,230,230);
  stroke(random(1,255),random(1,255),random(1,255));
  ellipse(player1x,player1y,10,10);
  ellipse(player2x,player2y,10,10);
 
}

//This will move the player left using "a", right using "d", up using "w" and down using "s". This will also move the reflected player right using "a" and left using "d".
function playersMove() {
 
  if(keyCode === 68){
    player1x = player1x+1;
    player2x = player2x-1;
   
   
  }
 
  if(player1x < 0) {
    player1x = 1
    player2x = 789
  }
 
  if(keyCode === 65){
   player1x = player1x-1;
   player2x = player2x+1;
 }
 
  if(player1x > 385) {
    player1x = 384;
    player2x = 406;
  }
 
  if(keyCode === 87) {
    player1y = player1y-1;
    player2y = player2y-1;
  }
 
  if(player1y < 0) {
  player1y = 1;
  player2y = 1;
  }
 
    if(keyCode === 83) {
    player1y = player1y+1;
    player2y = player2y+1;
  }
 
  if(player1y > 790) {
  player1y = 789;
  player2y = 789;
  }
 
 
 
}
//This is named "goldenKey" because key was already something. This part of the code will check the location of the original player to see if they are on top of the key.
function goldenKey() {
  if (gotKey < 9) {
    
    image(goldKeyImg,50,50);
    filter(OPAQUE);

  } else {
    rect(0,0,0,0);
  }
  if (player1x > 40 && player1y > 40 && player1x < 60 && player1y < 60) {
    gotKey = 10;
    unlock.start();


  }
}

//This part of the code will check if the player has the key and to check the location of the mirror player to see if they are interacting with the door.
function door() {
  noStroke();
  image(doorImg,408,300);
  doorImg.resize(15,25);
  if(gotKey > 9 && player2x > 400 && player2x < 425 && player2y > 297 && player2y < 322) {
    openDoor = 10
  }
  if(openDoor > 9) {
    fill(0);
    rectMode(CORNER);
    rect(0,0,800,800);
    fill(255);
    textSize(50);
    text("You Win",400,400);
    bcktrns = 100;
    winner.start();
    winner.rate(1.5);
    amp(.5);
   
  }
}