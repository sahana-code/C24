const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var d1,d2,d3;
var paper;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
	 d1 = createSprite(750,700,10,200)
d2 = createSprite(650,700,200,20)
 d3 = createSprite(550,700,10,200)
	paper = createSprite(100,700,50,75)
	Matter.Bodies.circle()
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
  drawSprites();
 
}



