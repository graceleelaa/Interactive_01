
var x = 400;
var y = 300;
var xspeed = 2;
var yspeed = 2;

function setup() {

	createCanvas(600,600);
	

}

function draw() {
	background(0);

	noStroke();
	fill(255,0,0);
	triangle(x, y-50, x-50, y+50, x+50, y+50);
	fill(255);
	rect(x-25, y-25, 50, 70);
	fill(random(255),random(255),random(255))
	ellipse(x, y, 50, 50);
	fill(0);
	ellipse(x-10, y, 5, 5);
	ellipse(x+10,y, 5, 5);
	arc(x,y, 10, 10, 0, PI);


	fill(0,0, 255);
	rect(x+100, y, 100, 100);
	fill(0,0,200);
	quad(x+100, y, x+200, y, x+250, y-50, x+150, y-50);
	fill(0,0,100);
	quad(x+200, y, x+250, y-50, x+250, y+50, x+200, y+100);


	if(x > width ||x < 0){
		xspeed =xspeed * -1;
	}

	if(y > height ||y <0){
		yspeed =yspeed *-1;
	}

		x =x +xspeed;
		y =y +yspeed;

}


