class Bob {
    constructor(x, y, diameter) {
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 5,
            density: 2.2,
        }
        this.body = Bodies.circle(x, y, diameter / 2, options);
        this.diameter = diameter;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
       // rotate(angle);
        rectMode(CENTER);
        fill("purple")
        ellipse(0, 0, this.diameter,this.diameter);
        pop();
    }
};