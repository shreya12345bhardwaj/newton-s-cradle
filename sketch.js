
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof1 = new roof(width/2,height/4,400,20)
  //bob3 = new bob(720,height/4+300,40);
  bob2 = new bob(760,height/4+300,40);
	bob1 = new bob(800,height/4+300,40);
  //bob4 = new bob(840,height/4+300,40);
  //bob5 = new bob(880,height/4+300,40);

  //rope3 = new rope(roof1.body,bob3.body,-80,0);
  rope2 = new rope(roof1.body,bob2.body,-80,0);
  rope1 = new rope(roof1.body,bob1.body,0,0);
  //rope4 = new rope(roof1.body,bob4.body,40,0);
  //rope5 = new rope(roof1.body,bob5.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof1.display();

  bob1.display();
  bob2.display();
  //bob3.display();
  //bob4.display();
  //bob5.display();

  rope1.display();
  rope2.display();
  //rope3.display();
  //rope4.display();
  //rope5.display();

  drawSprites();
 
}



