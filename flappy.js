score = 0;
var pipes = []
var bird;
var gameState = "menu";
var button;
var Playbutton,bird,reset;
function setup() {
  createCanvas(1000, 700);
  Playbutton = createSprite(100, 100);
  Playbutton.visible = false;

  bird = createSprite(500, 350);
  bird.velocityY = 0;
}

function draw() {
  background("black");
  fill(200, 0, 0);
  textSize(32);

  if (gameState == "play") {
    text(score / 2, 50, 50);
  }

  if (gameState == "menu") {
    stroke("red");
    text("Press button to play",200,80);
    Playbutton.visible = true;
    Playbutton.shapeColor = "white";
    if (mousePressedOver(Playbutton)) {
      gameState = "play"

    }

  }

  if (gameState == "play") {
    Playbutton.visible = false;
    //pipes.push(new Pipe());
    for (var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();

      if (pipes[i].hits(bird)) {
        score = 0;
        gameState = "end"
      } else if (frameCount % 120 == 0) {
        score = score + 1;
      }
      if (pipes[i].offscreen()) {
        pipes.splice(i, 1)

      }
      if (keyDown("space")) {// bird.y = bird.y - 8; 
        bird.velocityY = -10;
      }

      // bird.show();
      // bird.update();

      bird.velocityY = bird.velocityY + 0.5;

    }

    if (frameCount % 100 == 0) {
      pipes.push(new Pipe());

    }

    if (score == 1) {
      score += 1
    }
  }
  else if (gameState === "end") {
    reset = createSprite(100,100);
    if (mousePressedOver(reset)) {
      //remove();
      //setup();
    }
  }

  drawSprites();

}
