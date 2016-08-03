var blobbyBoy;
var blobbyBoyX = 300;
var blobbyBoyY = 300;

function setup() {
	blobbyBoyImg = loadImage("blobby-boy.png");
	blobbyBoy = createSprite(blobbyBoyX, blobbyBoyY);
	blobbyBoy.addImage("blobbyBoySprite");
	createCanvas(600,600);
	background(0);
	fill(0,255,0);
	rect(0,500,600,100);

}

function draw() {
	loadSprites();
}