var gameOver = false;
var spriteX = 300;
var spriteY = 500;
var player;
var playerImg;
function setup() {
	createCanvas(600,600);
	playerImg = loadImage("greenblob.png");
	player = createSprite(spriteX, spriteY, 40,40);
	player.addImage(playerImg);
	player.scale=.2;

}

function draw() {
	background(0);
	if(gameOver===false){
		fill(0,255,0);
		rect(0, 500, 600, 100);
		drawSprites();
	}
 }