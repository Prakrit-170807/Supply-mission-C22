var helicopter_image, helicopter 
var package,package_image
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopter_image=loadImage("helicopter.png")
	package_image=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	

	package=createSprite(width/2, 200, 10,10);
	package.addImage(package_image)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopter_image)
	helicopter.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

   
	
	
	var options={
		restitution:.45, isStatic:true
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 ,options);
	World.add(world, packageBody);

	var ground_options={
		isStatic:true
	}

	ground = Bodies.rectangle(width/2, 650, width, 10 ,ground_options);
	 World.add(world, ground);
  
}


function draw() {
  background(0);
  Engine.update(engine)
  ellipseMode(RADIUS)
  rectMode(CENTER)
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false );
  }
}



