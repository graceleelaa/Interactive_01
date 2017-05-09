var ball ={
	x: 30,
	y: 30,
	xspeed: 1,
	yspeed: -1
}


function setup() {

	createCanvas(600,600);
	

}

function draw() {
	background(0);
	move();
	bounce();
	display();

}


function bounce(){
	if(ball.x > width || ball.x < 0){
		ball.xspeed = ball.xspeed * -1;
	}

	if(ball.y > height || ball.y <0){
		ball.yspeed = ball.yspeed *-1;
	}
}

function display(){
		noStroke();
		fill(random(255),random(255),random(255))
		ellipse(ball.x, ball.y, 50, 50);
}

function move(){
	ball.x = ball.x +ball.xspeed;
	ball.y = ball.y + ball.yspeed;
}