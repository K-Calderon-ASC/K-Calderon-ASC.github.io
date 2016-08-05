var gameOver = false;
var blobbyBoy;
var blobbyBoyY = 500;
function setup() {
	createCanvas(600,600);
	blobbyBoyImg = loadImage("blobby-boy.png");
	blobbyBoy = createSprite((camera.position.x)+300, blobbyBoyY);
	blobbyBoy.addImage(blobbyBoyImg);
	blobbyBoy.scale = .1;
	background(0);
	fill(0,255,0);
	rect(camera.position.x,500,600,100);
	camera.on();
}

var blobbyBoyMovements = function() {
	camera.position.x +=1 ;
	if(keyDown("x")){
		console.log("are you running or nah");
		blobbyBoy.position.y -= 10;
	}
}

function draw() {
	background(0);
	fill(0,255,0);
	rect(camera.position.x,500,600,100);
	drawSprites();
	if(gameOver === false) {
		blobbyBoyMovements();
	}
}
