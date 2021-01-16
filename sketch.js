
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paperObject=new paper(200,450,40);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();

 
}


function keypresed(params) {
	if (keycode === UP_ARROW)

	Matter.body.applyforce(paperobject.body,paperobject.body.position, {x:85,y:-85})
}


