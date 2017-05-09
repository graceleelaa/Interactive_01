var ballExtra ={
	x:0,
	y:0
}

var ball={
	x:0,
	y:0,
	xspeed: 5,
	yspeed: -5
}


var cigarette={

	x:600,
	y:600,
	xspeed:20
}

var lung;


function setup() {
    
  	lung = loadImage("lungs.png");
	//image(lung,0,0,700,500);
    
    createCanvas(windowWidth,windowHeight);

   // background(lung); // ADD IMAGE TO BACKGROUND
    

    
}

function draw() {
	
    background(100, 149, 237);
    
	image(lung,windowWidth/2-350,windowHeight/2-360,800,500);
	//move();
	bounce();
	display();
	ballBounce();
	ballMove();
	ballDisplay();

	if(ball.x == cigarette.x){
		ball.yspeed = ball.yspeed * -1;
	} else if( ball.x <= cigarette.x+300 && ball.x >= cigarette.x && ball.y >= cigarette.y){
		ball.yspeed = ball.yspeed * -1;
	}

	
	if(ball.x >= windowWidth/2-350 && ball.x < windowWidth/2-350+800 && ball.y >= windowHeight/2-360 && ball.y <=windowHeight/2-360+500){
		createBall();
		console.log("ball is on top of lungs!");

	}

console.log("ballx is" + " " + ball.x);
console.log("cigarette x is"  + " " + cigarette.x);
//console.log("bally is" + " " + ball.y);
//

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
   fill(255,255,255);
   rect(cigarette.x,cigarette.y,200,50);

   fill(218,165,32); 
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

	if( ball.y <0){
		ball.yspeed = ball.yspeed *-1;
	}


}

function ballMove(){
	ball.x = ball.x +ball.xspeed;
	ball.y = ball.y + ball.yspeed;
}


function createBall(){
	//frameRate(10);
		//ballExtra.x == ball.x;
		noStroke();
		fill(100, 149, 237);
		ellipse(random(windowWidth/2-350,windowWidth/2-350+800),random(windowHeight/2-360,windowHeight/2-360+500), 50, 50);

}

