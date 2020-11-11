class Paper{
    //r = radius
    constructor(x, y, r){
        var options = {
            'isStatic' : false,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
        }
        this.image=loadImage("paper.png");
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.r);
        fill(230);
        strokeWeight(0);
        image(this.image, pos.x - 50, pos.y - 50, 100, 100)
    }
}