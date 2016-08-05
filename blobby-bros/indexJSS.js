var gameOver = false;
var blobbyBoy;
var blobbyBoyY = 500;
function setup() {
	createCanvas(600,600);
	camera.on();
	blobbyBoyImg = loadImage("blobby-boy.png");
	blobbyBoy = createSprite(camera.position.x, blobbyBoyY);
	blobbyBoy.addImage(blobbyBoyImg);
	blobbyBoy.scale = .1;
	background(0);
	fill(0,255,0);
	rect(0,500,600,100);
}

var blobbyBoyMovements = function() {
	camera.position.x +=5 ;
	if(keyDown("x")){
		console.log("are you running or nah");
		blobbyBoy.position.y -= 10;
		blobbyBoy.position.y+=10;
	}
}

function draw() {
	background(0);
	fill(0,255,0);
	rect(0,500,600,100);
	drawSprites();
	if(gameOver === false) {
		blobbyBoyMovements();
	}
}
