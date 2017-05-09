function zoogBot(x,y, xspeed, yspeed, color1, color2, color3){

			noStroke();
			fill(color1 ,color2 ,color3);
			triangle(x, y-50, x-50, y+50, x+50,y+50);
			fill(color1);
			rect(x-25, y-25, 50, 70);
			fill(random(color1),random(color2),random(color3))
			ellipse(x, y, 50, 50);
			fill(color2);
			ellipse(x-10, y, 5, 5);
			ellipse(x+10, y, 5, 5);
			arc(x, y, 10, 10, 0, PI);

			if(x > width || x < 0){
				xspeed = xspeed * -1;
			}

			if(y > height || y <0){
				yspeed = yspeed *-1;
			}

			x = x + xspeed;
			y = y + yspeed;

}



function setup() {

	createCanvas(600,600);


}

function draw() {

		background(0);

			zoogBot(10,20, 1, -1, 255, 100, 0);
			zoogBot(300, 300,1, -1, 255, 255, 255);
			zoogBot(500, 500, 1, -1, 100, 0, 255);

}



