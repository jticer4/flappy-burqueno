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
// draw images

window.onload = function draw() {

	//draw the background
	ctx.drawImage(bg, 0, 0);

	//draw the north and south pipes
	ctx.drawImage(pipeNorth, 100, 0);
	ctx.drawImage(pipeSouth, 100, constant);

	//draw the foreground
	ctx.drawImage(fg, 0, cvs.height - fg.height);

}
