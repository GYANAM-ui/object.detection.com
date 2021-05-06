img = "";
status = "";

function preload() {
	img = loadImage("../images/tv.ac.jpg");
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
    fill('#00ff00');
    stroke('#00ff00');
    text("AC", 310, 105);
    noFill();
    rect(300, 90, 330, 50);

    fill('#FF0000');
    stroke('#FF0000');
    text("TV", 310, 165);
    noFill();
    rect(300, 150, 330, 150);
}

function gotResult(error,results) {
	if (error) {
		console.log(error);
	}

	console.log(results);
}