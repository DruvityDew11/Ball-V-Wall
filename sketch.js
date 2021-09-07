var box;
var wall1,wall2,wall3,wall4;
function setup() {
  createCanvas(400, 400);
  box = createSprite(160, 160, 30, 30);
  wall1 = createSprite(200,0,400,10)
  wall2 = createSprite(200,400,400,10);
  wall3 = createSprite(0,200,10,400);
  wall4 = createSprite(400,200,10,400)




}

function draw() {
  background(30);
  drawSprites();
  if (keyDown("right")) {
    box.position.x = box.position.x + 5;
  }

  if (keyDown("left")) {
    box.position.x = box.position.x - 5;
  }

  if (keyDown("up")) {
    box.position.y = box.position.y - 5;
  }

  if (keyDown("down")) {
    box.position.y = box.position.y + 5;
  }
box.collide(wall1);
box.collide(wall2);
box.collide(wall3);
box.collide(wall4);
}




