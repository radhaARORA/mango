class Stone{
    constructor(x,y){
        var options={
            isStatic:false,
            restitutiton:0,
            friction:1,
            density:1.2,
        }
        this.body=Body.circle(x,y,10,options);
        World.add(world,this.body);


    }
}