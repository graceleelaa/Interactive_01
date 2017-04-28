var ball={
	x:0,
	y:0,
	xspeed: 3,
	yspeed: -3
}


var cigarette={

	x:0,
	y:600,
	xspeed:20
}

var lung;

function setup() {
    
  	lung = loadImage("lungs.png");

    createCanvas(windowWidth,windowHeight);

    // background(lung); // ADD IMAGE TO BACKGROUND
    //image(lung,0,0,700,500);

    
}

function draw() {

    //background(100, 149, 237);
    image(lung,0,height/2-250,700,500);
	//move();
	bounce();
	display();
	ballBounce();
	ballMove();
	ballDisplay();

	if(ball.x == cigarette.x && ball.y == cigarette.y && ball.x == cigarette.x + 100){
		ball.yspeed = ball.yspeed * -1;

	}

/*
if(ball.x == cigarette.x && ball.y == cigarette.y ){
	ball.xspeed = ball.xspeed * -1;
	ball.yspeed = ball.yspeed *-1;
}
*/


}

function bounce(){

	if(cigarette.x > width-300 || cigarette.x < 0){

		cigarette.xspeed = cigarette.xspeed*-1;
	}
}

function display(){
	   // This is my cigarette. //

	//background(100, 149, 237);
	noStroke();
   fill(218,165,32);
   rect(cigarette.x,cigarette.y,200,50);

   fill(255,255,255); 
   rect(cigarette.x+200,cigarette.y,100,50);

     	if(keyIsDown(LEFT_ARROW)){
  			cigarette.x = cigarette.x + cigarette.xspeed;
  	}
  	if(keyIsDown(RIGHT_ARROW)){

  			cigarette.x = cigarette.x - cigarette.xspeed;
  	}
  

 } 


function click(){

   if(mouseX>0 && mouseX< 700 && mouseY > 0 && mouseY < 500 && mouseIsPressed){
   	fill(100, 149, 237);
   	rect(mouseX, mouseY, 20,20);
   	console.log('inside lung');

	}




}
function ballDisplay(){
		noStroke();
		fill(0)
		ellipse(ball.x, ball.y, 50, 50);
}

function ballBounce(){
	if(ball.x > width || ball.x < 0){
		ball.xspeed = ball.xspeed * -1;
	}

	if(ball.y > height || ball.y <0){
		ball.yspeed = ball.yspeed *-1;
	}


}

function ballMove(){
	ball.x = ball.x +ball.xspeed;
	ball.y = ball.y + ball.yspeed;
}

