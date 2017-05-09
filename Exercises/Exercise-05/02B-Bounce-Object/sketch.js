var zoog ={
	x: 30,
	y: 30,
	xspeed: 1,
	yspeed: -1
}

var voog ={
	x: 400,
	y: 300,
	xspeed: 2,
	yspeed: 2
}

function setup() {

	createCanvas(600,600);
	

}

function draw() {
	background(0);

	noStroke();
	fill(255,0,0);
	triangle(zoog.x, zoog.y-50, zoog.x-50, zoog.y+50, zoog.x+50, zoog.y+50);
	fill(255);
	rect(zoog.x-25, zoog.y-25, 50, 70);
	fill(random(255),random(255),random(255))
	ellipse(zoog.x, zoog.y, 50, 50);
	fill(0);
	ellipse(zoog.x-10, zoog.y, 5, 5);
	ellipse(zoog.x+10, zoog.y, 5, 5);
	arc(zoog.x, zoog.y, 10, 10, 0, PI);


	fill(0,0, 255);
	rect(voog.x, voog.y, 100, 100);
	fill(0,0,200);
	quad(voog.x, voog.y, voog.x+100, voog.y, voog.x+150, voog.y-50, voog.x+50, voog.y-50);
	fill(0,0,100);
	quad(voog.x+100, voog.y, voog.x+150, voog.y-50, voog.x+150, voog.y+50, voog.x+100, voog.y+100);


	if(zoog.x > width || zoog.x < 0){
		zoog.xspeed = zoog.xspeed * -1;
	}

	if(zoog.y > height || zoog.y <0){
		zoog.yspeed = zoog.yspeed *-1;
	}

	zoog.x = zoog.x + zoog.xspeed;
	zoog.y = zoog.y + zoog.yspeed;


	if(voog.x > width || voog.x < 0){
		voog.xspeed = voog.xspeed * -1;
	}

	if(voog.y > height || voog.y <0){
		voog.yspeed = voog.yspeed *-1;
	}

	voog.x = voog.x+voog.xspeed;
	voog.y = voog.y+voog.yspeed;
}


