var r = 66;
var r1 = 173;
var r2 = 173;
var r3 = 173;
var r4 = 173;
var g = 66;
var g1 = 87;
var g2 = 87;
var g3 = 87;
var g4 = 87;
var b = 66;
var b1 = 36;
var b2 = 36;
var b3 = 36;
var b4 = 36;
var l;
var l2 = 300;
var l3 = 600;
var x1 = 635;
var x2 = 635;
var x3 = 635;
var x4 = 635;
var y1 = 425;
var y2 = 500;
var y3 = 575;
var y4 = 700;
var w1 = 100;
var w2 = 100;
var w3 = 100;
var w4 = 50;
var h1 = 50;
var h2 = 50;
var h3 = 50;
var h4 = 50;

function setup() {
  createCanvas(1920, 1080);
  l = 290;
}

function draw() {
  background(255, 224, 181);

  

  fill(0,0,0);
  line(800,50,940,200);
  line(1120,50,980,200);
  
  fill(181,180,179);
  ellipseMode(CENTER);
  ellipse(960,240,200,100);
  
  fill(204,142,18);
  rectMode(CENTER);
  rect(960,540,800,600,80);
  
  fill(181, 66, 0);
  ellipse(960,900,800,100);
  
    fill(219, 146, 20);
  ellipse(960,900,600,75);
  
    fill(181, 66, 0);
  ellipse(960,900,400,50);
  
  fill(r,g,b);
  rect(960,540,500,500);
  
  fill(r1,g1,b1);
  rect(x1,y1,w1,h1);
  fill(r2,g2,b2);
  rect(x2,y2,w2,h2);
  fill(r3,g3,b3);
  rect(x3,y3,w3,h3);
  fill(r4,g4,b4);
  ellipse(x4,y4,w4,h4);
  
  
  if(mouseIsPressed){
    if(mouseX>x4-25 && mouseX < (x4-25)+w4 && mouseY>y4-25 && mouseY <(y4-25)+h4){

      if (r = 66) {
    r = 255;
    b = 255;
    g = 255;
        
  }

      
 

    }
      
    if(mouseX>x2-25 && mouseX < (x2-25)+w2 && mouseY>y2-25 && mouseY <(y2-25)+h2){
      if(r != 66);
      r = random(1,255);
    
      
    }
    
        if(mouseX>x1-25 && mouseX < (x1-25)+w1 && mouseY>y1-25 && mouseY <(y1-25)+h1){
      if(b != 66);
      b = random(1,255);
    
      
    }
    if(mouseX>x3-25 && mouseX < (x3-25)+w3 && mouseY>y3-25 && mouseY <(y3-25)+h3){
      if(g != 66);
      g = random(1,255);
    
    
  }
   line(710,l,1210,l);
  l = l+0.5;
  if(l>790){
    l=290;
  } else {
    l = l+0.5;
  
  }
line(710,l2,1210,l2);
  l2 = l2+0.5;
  if(l2>790){
    l2=290;
  } else {
    l2 = l2+0.5;
  
  }
line(710,l3,1210,l3);
  l3 = l3+0.5;
  if(l3>790){
    l3=290;
  } else {
    l3 = l3+0.5;
  
  }

}
  
  if(mouseX>x4-25 && mouseX < (x4-25)+w4 && mouseY>y4-25 && mouseY <(y4-25)+h4){

      fill(255);
      strokeWeight(1);
      stroke(0);
      textSize(15);
      text("Power", 613, 705);
    } else {
      text(" ", 100, 100);

    }
      
    if(mouseX>x2-25 && mouseX < (x2-25)+w2 && mouseY>y2-25 && mouseY <(y2-25)+h2){
      fill(255);
      strokeWeight(1);
      stroke(0);
      textSize(15);
      text("Blue Hue", 600, 505);
    } else {
      text(" ", 100, 100);
      
    }
    
        if(mouseX>x1-25 && mouseX < (x1-25)+w1 && mouseY>y1-25 && mouseY <(y1-25)+h1){
      fill(255);
      strokeWeight(1);
      stroke(0);
      textSize(15);
      text("Red Hue", 600, 430);
    } else {
      text(" ", 100, 100);
      
    }
    if(mouseX>x3-25 && mouseX < (x3-25)+w3 && mouseY>y3-25 && mouseY <(y3-25)+h3){
      fill(255);
      strokeWeight(1);
      stroke(0);
      textSize(15);
      text("Green Hue", 600, 580);
    } else {
      text(" ", 100, 100);
    
    
  }
  
  
}