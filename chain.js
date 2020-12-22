class Chain{
	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		//console.log(options);
		this.chain=Constraint.create(options)
		World.add(world,this.chain)
	}

	display()
	{
		var pointA=this.chain.bodyA.position;
		var pointB=this.chain.bodyB.position;

		strokeWeight(2);

		var x1=pointA.x
		var y1=pointA.y

		var x2=pointB.x+this.offsetX
		var y2=pointB.y+this.offsetY

		line(x1,y1,x2,y2);
	}

}
