class Chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 10,
            stiffness : 0.05
        }
     this.chain = Constraint.create(options); 
     World.add(world, this.chain);
    }
    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;

        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}