function setup() {
  //create a surface to draw on
  createCanvas(700, 480);
   background(225, 204, 450);

}

function draw() {
  // take a big brush
  strokeWeight(50);
  //dip it in colour purple
  stroke("purple");
  frameRate(10);
  // declare variables
  let posY = mouseY;
  let posX = mouseX;
  //place a dot on a screen
  point(posX, posY);
}
