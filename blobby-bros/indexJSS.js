var gameOver = false;
var blobbyBoy;

function setup() {
	createCanvas(600,600);
	blobbyBoyImg = loadImage("blobby-boy.png");
	blobbyBoy = createSprite(300, 500);
	blobbyBoy.addImage(blobbyBoyImg);
	blobbyBoy.scale = .1;
	background(0);
	fill(0,255,0);
	rect(0,500,600,100);

}

var blobbyBoyMovements = function() {
	if(keyWentDown("d")){
		blobbyBoy.position.y += 1;
	}
}

function draw() {
	drawSprites();
	if(gameOver === false) {
		blobbyBoyMovements();
	}
}