var ball ={
	x: 30,
	y: 30,
	xspeed: 1,
	yspeed: -1,

	move: function(){
		this.x = this.x +this.xspeed;
		this.y = this.y + this.yspeed;
	},

	bounce: function(){
		if(	this.x > width || this.x < 0){
		
		this.xspeed = this.xspeed * -1;
	}

	if(this.y > height || this.y <0){
		
		this.yspeed = this.yspeed *-1;
	}
},

	display: function(){
		noStroke();
		fill(random(255),random(255),random(255))
		ellipse(this.x, this.y, 50, 50);
	}
}


function setup() {

	createCanvas(600,600);
	

}

function draw() {
	background(0);
	ball.move();
	ball.bounce();
	ball.display();

}

