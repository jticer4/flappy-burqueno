//declare our canvas and context variables
let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");


//load images

let bird = new Image(200, 300);
let bg = new Image(200, 300);
let fg = new Image(200, 300);
let pipeNorth = new Image(200, 300);
let pipeSouth = new Image(200, 300);

bird.src= "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

// draw images

window.onload = function draw() {

	ctx.drawImage(bg, 0, 0);


}
