img = "";
status = "";

function preload() {
	img = loadImage("../images/bedroom.jpg");
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
    fill('#FF0000');
    stroke('#FF0000');
    text("Bedroom", 90, 120);
    noFill();
    rect(70, 100, 450, 280);
}

function gotResult(error,results) {
	if (error) {
		console.log(error);
	}

	console.log(results);
}