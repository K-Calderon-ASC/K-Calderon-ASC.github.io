var gameOver = false;
var blobbyBoy;
var blobbyBoyY = 500;
function setup() {
	createCanvas(600,600);
	blobbyBoyImg = loadImage("blobby-boy.png");
	blobbyBoy = createSprite(width/2, blobbyBoyY);
	blobbyBoy.addImage(blobbyBoyImg);
	blobbyBoy.scale = .1;
	background(0);
	fill(0,255,0);
	rect(0,500,600,100);
	camera.on();
}

var blobbyBoyMovements = function() {
	if(keyWentDown("d")){
		blobbyBoy.position.y += 1;
		// camera.position.x +=1 ;
	}
}

function draw() {
	drawSprites();
	if(gameOver === false) {
		blobbyBoyMovements();
	}
}
