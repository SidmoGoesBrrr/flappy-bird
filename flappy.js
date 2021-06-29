score = 0;
var pipes = []
var bird;
var gameState = "menu";
var button;
function setup() {
  createCanvas(1000, 700);
  
  
}

function draw() {
  background("black");
  fill(200, 0, 0);
  textSize(32);

  if (gameState == "play") {
    text(score / 2, 50, 50);
  }

  if (gameState == "menu"){
    Playbutton = createSprite(100,100);
    Playbutton.shapeColor = "white";
    if (mousePressedOver(Playbutton)) {
      gameState = "play"
    
    }
    
  }


  drawSprites();

  if (gameState== "play"){
    bird = new Bird();
    pipes.push(new Pipe());
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      score = 0;
    } else if (frameCount % 100 == 0) {
      score = score + 1;
    }
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1)

    }
  }


  if (keyDown("w")){
    bird.up()
  }
  
  bird.show();
  bird.update();

  
  console.log(frameCount)
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());

  }

  if (score == 1) {
    score += 1
  }
}

}
   