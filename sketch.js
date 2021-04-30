
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;


function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1200,200,30);
	mango3=new mango(1000,100,30);
	mango4=new mango(1100,220,30);
	mango5=new mango(995,200,30);

	treeObj=new tree(1050,600);
	groundObject=new ground(width/2,600,width,20);
	stoneObj = new stone(100,400,20);
	chain = new Chain(stoneObj.body,{x:250, y:440});

	Engine.run(engine);

}

function draw() {

  background(rgb(210, 255, 255));
  fill('black');
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY!", 200,200);
  image(boy,200,370,200,300);
  
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();
  stoneObj.display();

  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);


}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stoneObj.body,{x:160, y:500});
    chain.attach(stoneObj.body);
  }
}
function detectCollision(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r + lstone.r){
	  Matter.Body.setStatic(lmango.body, false);
	}
  
  }