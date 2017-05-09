var ball = [];  //Empty Array named ball

function setup() {

	createCanvas(600,600);
	for(var i = 0; i < 6; i++){

			ball[i] ={
			x: random(0, width),
			y: random(0, height),
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
	}

	print(ball);

}

/*
Draw function execute the function defined above in setup
*/

function draw() {
	background(0);
	for(var i = 0; i < ball.length; i++){
	 ball[i].move();
	 ball[i].bounce();
	 ball[i].display();

	}

}

