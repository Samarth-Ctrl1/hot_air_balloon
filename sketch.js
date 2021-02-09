var balloon;


function preload(){
  balloon.loadImage("Hot Air Ballon-02.png")
}
function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
  var balloonPos = database.ref('balloon/height');
  balloonPos.on("value", readPosition, showError);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(keyDown(UP_ARROW)){
      balloon.Y = balloon.Y - 10;
  }
  if(keyDown(DOWN_ARROW)){
    balloon.Y = balloon.Y + 10;
}
if(keyDown(LEFT_ARROW)){
  balloon.X = balloon.X - 10;
}
if(keyDown(RIGHT_ARROW)){
  balloon.X = balloon.X +- 10;
}
}