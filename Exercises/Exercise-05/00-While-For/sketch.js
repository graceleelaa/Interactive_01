var offset = 0;

function setup() {

	createCanvas(600,600);
	

}

function draw() {
	background(255,240,247);

var x = 0;
	while( x <= width){
		noStroke();
		fill(random(255), random(255), random(255));
		ellipse(x, 200, 50, 50);
		x = x+50;
		console.log(x);
	}
  
	for(var x = 0; x <=width; x+=50){
		noStroke();
		fill(x,x,x);
		ellipse(x+offset, 400, 50,50);
	}

	offset = offset+ 1;

}

