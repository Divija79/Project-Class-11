var jaxon;
var jaxon_running;
var path;
var pathImage;
var left;
var right;
var edges;


function preload(){
  //pre-load images
jaxon_running=loadAnimation("Runner-1.png","Runner-2.png");
pathImage=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(190,200);
path.addImage("path",pathImage);
path.velocityY=4;
path.scale=1.2;

jaxon=createSprite(180,330,50,50);
jaxon.addAnimation("running",jaxon_running);
jaxon.scale=0.1;
jaxon.x=180;

left=createSprite(40,200,10,390);
left.visible=false;

right=createSprite(350,200,10,390);
right.visible=false;
edges=createEdgeSprites();
}

function draw() {
  background(0);
  jaxon.x=World.mouseX;
if(path.y>400){
path.y=height/2;
}

if(jaxon.x<50){
jaxon.x=50;
}

if(jaxon.x>360){
  jaxon.x=360;
}

jaxon.collide(left);
jaxon.collide(right);
jaxon.collide(edges);

drawSprites();
}
