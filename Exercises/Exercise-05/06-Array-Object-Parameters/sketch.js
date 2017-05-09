
var zoogBot = [];



function setup() {

	createCanvas(600,600);
		for(var i=0; i<5; i++){
				zoogBot[i] ={
				x: random(30, width),
				y: random(30,height),
				xspeed: random(1, 5),
				yspeed: (-1, 2),

				display: function(x,y, color1, color2, color3){
					noStroke();
					fill(color1 ,color2 ,color3);
					triangle(this.x, this.y-50, this.x-50, this.y+50, this.x+50,this.y+50);
					fill(color1);
					rect(this.x-25, this.y-25, 50, 70);
					fill(random(color1),random(color2),random(color3))
					ellipse(this.x, this.y, 50, 50);
					fill(color2);
					ellipse(this.x-10, this.y, 5, 5);
					ellipse(this.x+10, this.y, 5, 5);
					arc(this.x, this.y, 10, 10, 0, PI);
				},

				move: function(){
					if(this.x > width || this.x < 0){
						this.xspeed = this.xspeed * -1;
					}

					if(this.y > height || this.y < 0){
						this.yspeed = this.yspeed *-1;
					}

					this.x = this.x + this.xspeed;
					this.y = this.y + this.yspeed;

				}
			}

		}
	print(zoogBot);

}

function draw() {

		background(0);
		for(var i = 0; i < zoogBot.length; i++){
			zoogBot[i].display(10,20, 255, 100, 0);
			zoogBot[i].move();
			//zoogBot[i].display(100,200, 0, 100, 255);
			//zoogBot[i].move();

		}
}



