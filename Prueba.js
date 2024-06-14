let y = 550;
let x = 400;
function setup() {
  createCanvas(800, 600);
  rana = createSprite(
    400, 550, 50, 50);
  rana.shapeColor = color(255);
  auto1 = createSprite(
    40, 410, 65, 65);
  auto1.shapeColor = color(255,0,255);
  auto2 = createSprite(
    760, 210, 65, 65);
  auto2.shapeColor = color(255,0,255);
}
function draw() {
  background(50);
 
  fill(0);
  rect(0, 350, 800, 120);
  rect(0, 150, 800, 120);
  drawSprites();
  if (rana.overlap(auto1)){
 x = 400
 y = 550
  }
  if (rana.overlap(auto2)){
  x = 400
  y = 550
  }
  auto1.setSpeed(8,360);
  auto2.setSpeed(8,180);
  if(auto1.x = 800){
  auto1.x = 40
  }
}
    function keyPressed() {
      if (keyCode == DOWN_ARROW) {
        rana.setSpeed(3, 90);
      }
      else if (keyCode == UP_ARROW) {
        rana.setSpeed(3, 270);
      }
      else if (keyCode == RIGHT_ARROW) {
        rana.setSpeed(3, 360);
      }
      else if (keyCode == LEFT_ARROW) {
        rana.setSpeed(3, 180);
      }
     
    }