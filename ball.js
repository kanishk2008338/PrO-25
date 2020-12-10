class Ball{
    constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, r, options);
      this.x=x
      this.y=y
      this.r=r
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      stroke("pink");
      strokeWeight(5);
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("white");
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };