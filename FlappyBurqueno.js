//declare our canvas and context variables
let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

//load images

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeNorth = new Image();
let pipeSouth = new Image();

bird.src= "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

//declare variables
//set the gap to 75 pixels which will be applied to the y axis
let gap = 80;
//set the constant variable to the height of the north pipe plus the gap
let constant = pipeNorth.height + gap;
//set my variables for the bird x and y position
let bX = 10;
let bY = 150;
//set the gravity variable equal to 1 pixel
let gravity = 1;

//add key down event listener to allow burqueno to jump
document.addEventListener("keydown", moveUp);

function moveUp() {
	bY -= 20;
}

//set the pipe variable equal to an empty array
let pipe = [];

//set the pipe coordinates
pipe[0] = {
	x : cvs.width,
	y : 0
}

// draw images
window.onload = function draw() {

	//draw the background
	ctx.drawImage(bg, 0, 0);

	//loop through the pipe array and draw all of the pipes
	for(var i = 0; i < pipe.length; i++){
		//draw the north and south pipes
		ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
		ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);

		//moves the pipes to the left, into view and across the screen
		pipe[i].x --;
	}


	//draw the foreground
	ctx.drawImage(fg, 0, cvs.height - fg.height);

	//draw the bird
	ctx.drawImage(bird, bX, bY);

	//add in gravity
	bY += gravity;

	//add in the animation frame that will loop through the draw function
	requestAnimationFrame(draw);

}
