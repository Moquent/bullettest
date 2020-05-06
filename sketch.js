var bullet1, bullet2, bullet3, bullet4, wall1, wall2, wall3, wall4, speed, weightbullet1, weightbullet2, weightbullet3, weightbullet4, dambullet1, dambullet2, dambullet3, dambullet4;
function setup() {
  createCanvas(1000,600);


  bullet1 = createSprite(50, 70, 50, 50);
  bullet2 = createSprite(50, 170, 50, 50);
  bullet3 = createSprite(50, 270, 50, 50);
  bullet4 = createSprite(50, 370, 50, 50);

  wall1 = createSprite(700, 70, 70, 80);
  wall2 = createSprite(700, 170, 40, 80);
  wall3 = createSprite(700, 270, 50, 80);
  wall4 = createSprite(700, 370, 60, 80);

  //enter your values
  speedbullet1 = 223;
  speedbullet2 = 222;
  speedbullet3 = 105;
  speedbullet4 = 175;

  //enter your values
  weightbullet1 = 32;
  weightbullet2 = 32;
  weightbullet3 = 32;
  weightbullet4 = 32;

  bullet1.velocityX = speedbullet1;
  bullet2.velocityX = speedbullet2;
  bullet3.velocityX = speedbullet3;
  bullet4.velocityX = speedbullet4;

  dambullet1 = (0.5*weightbullet1*speedbullet1*speedbullet1)/(wall1.width*wall1.width*wall1.width);
  dambullet2 = (0.5*weightbullet2*speedbullet2*speedbullet2)/(wall2.width*wall2.width*wall2.width);
  dambullet3 = (0.5*weightbullet3*speedbullet3*speedbullet3)/(wall3.width*wall3.width*wall3.width);
  dambullet4 = (0.5*weightbullet4*speedbullet4*speedbullet4)/(wall4.width*wall4.width*wall4.width);
  
}

function draw() {
  background("black"); 

  if(wall1.x - bullet1.x < (bullet1.width + wall1.width)/2)
  {
    bullet1.velocityX = 0;
    if(dambullet1 < 10)
    {
      bullet1.shapeColor = color(0,255,0);
    }
  
    if(dambullet1 > 10)
    {
      bullet1.shapeColor = color(255,0,0);
    }
  
  }
  if(wall2.x - bullet2.x < (bullet2.width + wall2.width)/2)
  {
    bullet2.velocityX = 0;
    if(dambullet2 < 10)
    {
      bullet2.shapeColor = color(0,255,0);
    }
  
    if(dambullet2 > 10)
    {
      bullet2.shapeColor = color(255,0,0);
    }
  }
  if(wall3.x - bullet3.x < (bullet3.width + wall3.width)/2)
  {
    bullet3.velocityX = 0;
    if(dambullet3 < 10)
    {
      bullet3.shapeColor = color(0,255,0);
    }
  
    if(dambullet3 > 10)
    {
      bullet3.shapeColor = color(255,0,0);
    }
  }
  if(wall4.x - bullet4.x < (bullet4.width + wall4.width)/2)
  {
    bullet4.velocityX = 0;
    if(dambullet4 < 10)
    {
      bullet4.shapeColor = color(0,255,0);
    }
  
    if(dambullet4 > 10)
    {
      bullet4.shapeColor = color(255,0,0);
    }
  }


  drawSprites();
}
