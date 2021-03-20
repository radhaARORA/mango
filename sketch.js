
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,ground,mango,stoneObj;
var boy_img,tree_img,bg_img;
function preload()
{
boy_img=loadImage("images/boy.jpg");
tree_img=loadImage("images/tree.jpg");


}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	mango1=new Mango(355,400,10,PI/2);
	mango2=new Mango(380,380,10,PI/2);
	mango3=new Mango(345,395,10,PI/2);
	mango4=new Mango(385,390,10,PI/2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectCollision();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  drawSprites();

  function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
 
  function mouseReleased(){
    fly ();
  }

  function detectCollision(stone,mango){
    mangoBodyPosition=mango.body.position
    stoneBodyPosition=stone.body.position

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=mango.r+stone.r)
    {
      Matter.Body.setStatic(mango.body,false);
    }

    function keyPressed(){
      if(keyCode===32){
        Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
        launcherObject.attach(stoneObj.body);

      }
    }

  }
}



