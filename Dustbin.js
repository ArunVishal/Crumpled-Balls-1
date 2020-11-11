class Dustbin{
	constructor(x,y){
		this.x = x;
		this.y = y;
		
		this.image=loadImage("dustbingreen.png")
		this.bottomBody=Bodies.rectangle(x, y, 150, 10, {isStatic:true})
		this.leftBody=Bodies.rectangle(x - 75, y - 100, 5, 125, {isStatic:true})
		this.rightBody=Bodies.rectangle(x + 100, y - 100, 5, 125, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftBody)
		World.add(world, this.rightBody);
	}
	display(){
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftBody.position;
            var posRight=this.rightBody.position;
        
			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill(255)
			rotate(-1 * this.angle)
			pop()

			push()
			translate(posBottom.x, posBottom.y + 10);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0, -100, 150, 200)
			pop()
    }
}