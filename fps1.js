camX = 0;
camY = 0;
camZ = 0;
speed = 10;

boxWidth = 50;
boxHeight = 50;
boxDepth = 50;

reset = true;

x1 = 0;
y1 = 0;
z1 = 0;

function preload()
{
  image = loadImage("texture/IMG_0866.jpg");
}

function setup() 
{
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
  cam = createCamera();
}

function draw() 
{
  background(220);
  
  fill(0);

  //box
  push();
  translate(x1 - camX, y1 - camY, z1 - camZ);
  box(boxWidth, boxHeight, boxDepth);
  pop();

  translate(-camX, -camY, -camZ);
    
  //vægge
  noStroke();
  texture(image);

  push();
  translate(-200,0);
  rotateY(90);
  plane(400);
  pop();

  push();
  translate(200,0);
  rotateY(90);
  plane(400);
  pop();

  push();
  translate(0,-200);
  rotateX(90);
  plane(400);
  pop();

  push();
  translate(0,200);
  rotateX(90);
  plane(400);
  pop();

  push();
  translate(0,0,-200);
  rotateZ(0);
  plane(400);
  pop();


  //tastatur
  if(keyIsDown(65)) //A
  {
    camX -= speed;
  }

  if(keyIsDown(68)) //D
  {
    camX += speed;
  }

  if(keyIsDown(87)) //W
  {
    camY -= speed;
  }

  if(keyIsDown(83)) //S
  {
    camY += speed;
  }

  if(keyIsDown(38)) //PilOp
  {
    camZ -= speed;
  }

  if(keyIsDown(40)) //PilNed
  {
    camZ += speed;
  }

  if(reset == true) //Spawn box
  {
    x1 = random(-200,200);
    y1 = random(-200,200);
    z1 = -200;

    reset = false;
  }

  z1 = z1 + speed;

  if (z1 >= 400) //Send box tilbage
  {
    reset = true;
  }
}
