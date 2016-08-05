var gameOver = false;
var blobbyBoy;
var blobbyBoyY = 500;
var block;
var blockX = 700;
var blockY = 500;
var x = 0;
var movementX = 1;
function setup() {
	createCanvas(600,600);
	blobbyBoyImg = loadImage("blobby-boy.png");
	blobbyBoy = createSprite(width/2, blobbyBoyY);
	blobbyBoy.addImage(blobbyBoyImg);
	blobbyBoy.scale = .1;
	block = createSprite(700, blockY, 40, 40);
	// blockImg = loadImage("block.png");
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

var blockCheck = function() {
	if(x>=30) {
		block.position.x -= 10;
		if(block.position.x===0){
			block.position.x = 700;
			x = 0;
		}
		}
}
function draw() {
	background(0);
	fill(0,255,0);
	rect(0,500,600,100);
	console.log("Help Kevin Dodge his responsiblities!");
	drawSprites();
	x += 1;
	if(gameOver === false) {
		blockCheck();
		blobbyBoyMovements();
	}
}
