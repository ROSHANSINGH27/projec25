
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,binImage,bin,paperImg


function preload()
{
	binImage=loadImage("dustbingreen.png")
	paperImg=loadImage("paper.png")

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,height,1600,20)

	bin=new Dustbin(1200,680)
	 paper=new Paper(200,450,70)

	
	  

	 
	Engine.run(engine);
  
}


function draw() {
	background("grey")
  rectMode(CENTER);
 
  
paper.display()
  ground.display()

  bin.display()
 

 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{
			x:130,y:-180
		})
	}
}



