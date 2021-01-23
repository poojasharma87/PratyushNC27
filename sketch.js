
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof1;
var bobDiameter=20;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Bob(150,100,20);
	ball2 = new Bob(400,300,20);
	ball3 = new Bob(450,300,20);
	ball4 = new Bob(500,300,20);
	ball5 = new Bob(550,300,20);
	
    roof = new Roof(450,100,300,30);

    
    rope1 = new Rope(ball1.body,{x:350,y:100});
    rope2 = new Rope(ball2.body,{x:400,y:100});
    rope3 = new Rope(ball3.body,{x:450,y:100});     
    rope4 = new Rope(ball4.body,{x:500,y:100});
    rope5 = new Rope(ball5.body,{x:550,y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});

	}
}


