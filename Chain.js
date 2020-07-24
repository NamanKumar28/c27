class Chain{
    constructor(bodyA,bodyB) {
        var options = {
             bodyA:bodyA, bodyB:bodyB,
              stiffness:2,
              legnth: 10 
        }

        this.chain = Matter.Constraint.create(options);
        this.bodyA = bodyA; 
        this.bodyB = bodyB;
        World.add(world, this.chain);
      }

      display(){
       var pointA = this.chain.bodyA.position;
       var pointB = this.chain.bodyB.position;
       strokeWeight(4);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
      }
}