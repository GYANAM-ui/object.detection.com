img = "";
status = "";

function preload() {
	img = loadImage("../images/fruit-basket.jpg");
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
    fill('#2b05ff');
    stroke('#2b05ff');
    text("Fruit Basket", 110, 45);
    noFill();
    rect(100, 30, 400, 300);
}

function gotResult(error,results) {
	if (error) {
		console.log(error);
	}

	console.log(results);
}