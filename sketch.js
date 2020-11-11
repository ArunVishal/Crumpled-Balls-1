const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper, ground, dustbin;

function preload(){

	
}

function setup() {
	createCanvas(1000, 700);
	ellipseMode(CENTER);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50, 660, 70);
	ground = new Ground(500, 675, 1000, 10);
	dustbin = new Dustbin(850,660);

	Engine.run(engine);

  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(121.1);
  
  paper.display();
  ground.display();
  dustbin.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Body.applyForce(paper.body, paper.body.position, {x: 1000, y: -1000});
	}
}
