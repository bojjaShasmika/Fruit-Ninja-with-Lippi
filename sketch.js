
//There are three Main Function in p5 editor.
// 1. Function Preload
// 2. Function Setup
// 3. Function Draw

// To see the Outputs in Console Window --> console.log(variable (operand) variable).

var Knife,Knife_Img;


function preload(){
  //To Load an Image --> var = loadImage ("Img File")
  Knife_Img = loadImage("knife.png");
  
} 

function setup(){
  //To create a Canvas --> createCanvas (h,w)
createCanvas (600,500);
  Knife = createSprite(100,250,40,20);
  Knife.addImage(Knife_Img);
  Knife.sacle= 5;
}

function draw(){
  //To put up a Background Color --> background("Color")
  background(0);
  
}
