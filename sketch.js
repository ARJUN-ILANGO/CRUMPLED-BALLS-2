const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper,leftS,middle,rightS;
var dust_bin, paper_image;
var dustbin;

function preload(){
	dust_bin = loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(1600,800);


	engine = Engine.create();
	world = engine.world;

	paper = new Ball(120,400,80,80);

	ground = new Ground(800,650,1600,20);

	leftBrick = new Dustbin(930,550,20,180);
	downBrick = new Dustbin(1010,630,140,20);
  rightBrick = new Dustbin(1090,550,20,180);
  
	dustbin = createSprite(1010.5,550,180,180);
	dustbin.addImage(dust_bin);
	dustbin.scale = 0.70;

	Engine.run(engine);
  
}


function draw() {
  background(260);

  Engine.update(engine);
  paper.display();
  ground.display();
  leftBrick.display();
  rightBrick.display();
  downBrick.display();
  dustbin.display();
}

function keyPressed(){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:120,y:-170})
	}
}
