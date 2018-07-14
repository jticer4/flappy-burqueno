//declare our canvas and context variables
let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

//load images

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeNorth = new Image();
let pipeSouth = new Image();

//give the images their corresponding sources
bird.src= "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

//declare variables
//set the gap to 75 pixels which will be applied to the y axis
let gap = 90;
//set the constant variable to the height of the north pipe plus the gap
let constant = pipeNorth.height + gap;
//set my variables for the bird x and y position
let bX = 10;
let bY = 150;
//set the gravity variable equal to 1.5 pixels
let gravity = 1.5;
let score = 0;

//add audio files
let fly = new Audio();
let scor = new Audio();

//give the sounds their corresponding audio sources
fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";

//the function that makes the burqueno fly and plays the fly sound each time
function moveUp() {
	bY -= 27;
	//rewinds the fly sound to the start so that it can be played many times in succession
	fly.currentTime = 0;
	//play the fly sound
	fly.play();
}

//add key down event listener to allow burqueno to jump
document.addEventListener('keydown', moveUp);

//set the pipe variable equal to an empty array
let pipe = [];

//set the pipe coordinates
pipe[0] = {
	x : cvs.width,
	y : 0
};

// draw images
function draw() {

	//draw the background
	ctx.drawImage(bg, 0, 0);

	//loop through the pipe array and draw all of the pipes
	for(let i = 0; i < pipe.length; i++){
		//draw the north and south pipes
		ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
		ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);

		//moves the pipes to the left, into view and across the screen
		pipe[i].x --;

		/*when the current pipe's x coordinate equals 125 add another pipe to the pipe array. Set its x coordinate to the
		far right of the canvas and its y coordinate to a random  height, then subtract the height of the north pipe to bring
		the pipes to the top of the canvas
		 */
		if(pipe[i].x === 110){
			pipe.push({
				x : cvs.width,
				y : Math.floor(Math.random()*pipeNorth.height) - pipeNorth.height
			});
		}
		//checks to make sure you're not hitting the pipes or hitting the ground
		if( bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY + bird.height >= pipe[i].y + constant) || bY + bird.height >= cvs.height - fg.height){
			//if you hit a pipe it will reload the page
			location.reload()
		}

		//adds one point to the score variable when the pipe gets to the far left of the screen
		if(pipe[i].x === 5){
			score++;
			scor.play();
		}
	}


	//draw the foreground at the bottom of the canvas
	ctx.drawImage(fg, 0, cvs.height - fg.height);

	//draw the bird
	ctx.drawImage(bird, bX, bY);

	//add in gravity
	bY += gravity;

	ctx.fillStyle = "#000";
	ctx.font = "20px Verdana";
	ctx.fillText("Score : " + score, 10, cvs.height - 20);

	//add in the animation frame that will loop through the draw function
	requestAnimationFrame(draw);

}

draw();


