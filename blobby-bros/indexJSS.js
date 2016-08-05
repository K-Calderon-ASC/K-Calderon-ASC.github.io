var gameOver = false;
var blobbyBoy;
var blobbyBoyY = 500;
var block;
var blockX = 600;
var blockY = 300;
var x = 0;
function setup() {
	createCanvas(600,600);
	blobbyBoyImg = loadImage("blobby-boy.png");
	blobbyBoy = createSprite(width/2, blobbyBoyY);
	blobbyBoy.addImage(blobbyBoyImg);
	blobbyBoy.scale = .1;
	blockImg = loadImage("block.png");
	block = createSprite(blockX, blockY, 40, 40);
	// block.addImage(blockImg);
	// block.scale = .1;
	background(0);
	fill(0,255,0);
	rect(0,500,600,100);
}

var blobbyBoyMovements = function() {
	if(keyDown("x")){
		 blobbyBoy.position.y -= 10;
	}
}

function draw() {
	background(0);
	fill(0,255,0);
	rect(0,500,600,100);
	drawSprites();
	x += 1
	if(gameOver === false) {
		if(x>=30) {
			blockX -= 10;
			if(blockX===0){
				blockX = 600;
				x = 0;
			}
		}
		blobbyBoyMovements();
	}
}
