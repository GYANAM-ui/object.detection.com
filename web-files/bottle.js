img = "";
status = "";

function preload() {
	img = loadImage("../images/bottles.jpg");
}

function setup() {
	canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
	status = true;
	objectDetector.detect(img , gotResult);
}

function draw() {
	image(img, 0, 0, 640, 420);
    fill('#ff00b3');
    stroke('#ff00b3');
    text("Bottles", 85, 65);
    noFill();
    rect(70, 50, 500, 350);
}

function gotResult(error,results) {
	if (error) {
		console.log(error);
	}

	console.log(results);
}