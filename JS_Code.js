var l, cat, cats, carpet;

function setup() {
	l = min(windowWidth,windowHeight);
	createCanvas(windowWidth, windowHeight);
	cat = loadImage('cat.png')
	carpet = loadImage('carpet.png')
	cats = []
	for(let i = 0; i < 0; i++){
		cats.push(new Cat(-i*l*0.25,height/2,cat,l*0.25))
	}
	background(255);
}

function draw() {
	image(carpet,0,0,width,height)
	push()
	translate(width/2,height/2)
	tint(255,255,255,200)
	pop()
	
	cats.forEach(c => {
		c.update()
		c.display()
	})
	
}

function mousePressed(){
	cats.push(new Cat(mouseX,mouseY,cat,l*0.25))
}

class Cat{
	constructor(x,y,cat,w){
		this.x = x
		this.y = y
		this.cat = cat
		this.w = w;
		this.a = 0.1;
	}
	
	update(){
		this.x += cos(this.a) * deltaTime * this.w*0.001
		this.y += sin(this.a) * deltaTime * this.w*0.001
		this.a += random(-0.02,0.02)
		this.a = constrain(this.a,-PI/3,PI/3)
		this.t += 0.1
		let adjustedH = this.cat.height/this.cat.width*this.w;
		if(this.y < -adjustedH || this.y > height+adjustedH || this.x > width+this.w){
			this.x = -this.w;
			this.y = random(height);
			this.a = 0
		}
	}
	
	display(){
		push()
		translate(this.x,this.y)
		scale(-1,1)
		rotate(-1*this.a)
		let adjustedH = this.cat.height/this.cat.width*this.w;
		image(this.cat,-this.w/2,-adjustedH/2, this.w, adjustedH)
		pop()
	}
}
