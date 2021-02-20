var  bgImg;
var fairy ,fairyImg, fairyVoice;
var star, starImg, starBody;

function preload()
{
	
	bgImg = loadImage("images/starNight.png");
    fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
}

function setup() {
	createCanvas(800, 750);


	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;


}


function draw() {
  background(bgImg);

  drawSprites();

}


