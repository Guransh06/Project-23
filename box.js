class Box
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.Width=200;
		this.Height=100;
		this.wallThickness=20;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.Width, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.Width/2, this.y-this.Height/2, this.wallThickness, this.Height, {isStatic:true})
		

		this.rightWallBody=Bodies.rectangle(this.x+this.Width/2, this.y-this.Height/2, this.wallThickness, this.Height, {isStatic:true})
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	
}
