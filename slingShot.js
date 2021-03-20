class Sling{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.004,
            length:10,

        }
        this.pointB=pointB;
        this.sling=constraint.create(options);
        World.add(world,this.sling);
        
        fly (){
            this.sling.bodyA=null;
        }

        display(){
            if(this.sling.bodyA){
            var PointA=this.sling.bodyA;
            var pointB=thisB;
            strokeWeight=4;
            line (PointA.x,PointA.y,Pointb.x,PointB.y);
            }
        }
    }
}