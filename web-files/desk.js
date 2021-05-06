img = "";
status = "";

function preload() {
	img = loadImage("../images/desk.jpg");
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
    fill('#002aff');
    stroke('#002aff');
    text("Desk", 85, 315);
    noFill();
    rect(70, 300, 550, 100);

    fill('#f2ff00');
    stroke('#f2ff00');
    text("Bulb", 115, 85);
    noFill();
    rect(100, 70, 150, 150);

    fill('#04bf07');
    stroke('#04bf07');
    text("Plant", 85, 245);
    noFill();
    rect(80, 230, 150, 80);
}

function gotResult(error,results) {
	if (error) {
		console.log(error);
	}

	console.log(results);
}