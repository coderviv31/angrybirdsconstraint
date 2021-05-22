class Chain{
    constructor(bodyA,bodyB) {
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 1,
            length : 10
        }
        this.chain = Matter.Constraint.create(options)
        World.add(world, this.chain);
      }
      display(){
      }
}