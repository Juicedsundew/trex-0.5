
var trex ,trex_running;
var ground ,ground_img;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  ground_img = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,180,20,20);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  edges = createEdgeSprites()
  ground = createSprite(200, 180, 400, 20)
  ground.addImage("ground_image", ground_img)

}

function draw(){
  background("white")
  ground.velocityX = -3;

  if(ground.x < 0){
    ground.x = ground.width / 2
  }

  //trex - jump
  if(keyDown("SPACE")){
    trex.velocityY = -5;
  }
  //Providing gravity to the trex
  //                     -5 + 1 = -4+1= -3+1 = -2+1 =-1+1=0+1 = 1+1=2
  trex.velocityY  = trex.velocityY + 1;
  
  trex.collide(ground); 

  drawSprites();

}
