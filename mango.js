class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        }
    

    this.body=Body.circle(x,y,10,options);
    this.image = loadImage("images/mango4.png");
    this.image = loadImage("images/mango7.png");
    this.image = loadImage("images/mango8.png");
    this.image = loadImage("images/mango9.jpg");
    World.add(world,this.body);
    }
    detectCollision(){
        detectCollision(stoneObj,mango1);
        detectCollision(stoneObj,mango2);
        detectCollision(stoneObj,mango3);
        detectCollision(stoneObj,mango4);
        detectCollision(stoneObj,mango5);
    }
}