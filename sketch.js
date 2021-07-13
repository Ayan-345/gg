var groundImg;
var path;
var Runner;
var runner1Img;
var diamondsG;
var jwelleryG;
var treasureCollection = 0;
function preload() {
 groundImg = loadImage("road.png");
 runner1Img = loadAnimation("Runner-1.png","Runner-2.png");
 diamondsImg = loadImage("diamonds.png");
 jwelleryImg = loadImage("jwell.png")
}

function setup() {
createCanvas(400,400);
path=createSprite(200,200);
path.addImage(groundImg);
path.velocityY = 4;
path.scale = 1

Runner = createSprite(200,300);
Runner.addAnimation("SahilRunning",runner1Img);
Runner.scale=0.08;
  
diamondsG = new Group();
jwelleryG = new Group();

}

function draw() {
    if(path.y > 400 ){
   path.y = height/2;
  }
if (Runner.isTouching(diamondsG)) {
  diamondsG.destroyEach();
  diamondsG.setVelocityEach(0);
  treasureCollection = treasureCollection+150

}else if(jwelleryG.isTouching(Runner)) {
  jwelleryG.destroyEach();
  jwelleryG.setVelocityEach(0)
 treasureCollection = treasureCollection+100
  
}
  Runner.x = World.mouseX

createDiamonds()
createJwellery()
 drawSprites()   
 textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
  }


function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 30, 30));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}
function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}










