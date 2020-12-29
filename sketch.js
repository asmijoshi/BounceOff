var movrect,fixrect,r1,r2,r3,r4,r5;
var ob1,ob2;
function setup() {
  createCanvas(400,400);
  movrect=createSprite(100, 200, 50, 100);
  movrect.shapeColor="gold";
  fixrect=createSprite(200,200,50,50);
  fixrect.shapeColor="gold";

  r1=createSprite(100,150,50,50);
  r1.velocityY=4;

  r2=createSprite(250,150,50,50);
  r2.velocityX=-4;

  r3=createSprite(100,310,50,50);
  r3.velocityY=-4;
  
  r4=createSprite(250,310,50,50);

  r5=createSprite(90,150,50,50);
  r5.velocityX=4;
}

function draw() {
  background(170,122,150); 
  
  //movrect.x=mouseX;
  //movrect.y=mouseY;

    isTouching(movrect,fixrect);
    isTouching(movrect,r1);
    isTouching(movrect,r2);
  
    BounceOff(r1,r3);
    BounceOff(r2,r5);

  drawSprites();
}

