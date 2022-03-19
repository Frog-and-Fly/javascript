var paddleX;
var paddleY;
var ballX;
var ballY;
var ballSpeed;
let score;
let ShowScore;
let set_speed;
let paddle_speed;
let a;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  rectMode(CENTER);
  ellipseMode(CENTER);
  paddleX = width / 2;
  paddleY = height - 50;
  ballX = width / 2;
  ballY = height / 2;
  set_speed = 3;
  ballSpeedX = random(-set_speed, set_speed);
  ballSpeedY = random(-set_speed, set_speed);
  paddle_speed = 2;
  score = 0;
}

function draw() {
  background(0, 226, 255);
  fill(255, 255, 255);
  rect(paddleX, paddleY, 100, 20);
  fill(255, 255, 255);
  ellipse(ballX, ballY, 35, 35);

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  fill(0, 0, 0);
  textSize(30);
  ShowScore = text("You have " + score + " points", width / 2, height / 2);
  logic();
}

function logic() {
  if (ballX > width || ballX < 0) {
    ballSpeedX *= -1;
  }

  if (ballY > height) {
    ballX = width / 2;
    ballY = height / 2;
    score -= 1;
    set_speed -= 0.5;
    if (score > 0) {
      ballSpeedX = random(-set_speed, set_speed);
      ballSpeedY = random(-set_speed, set_speed);
      paddle_speed -= 0.5;
    }
  }
  if (ballY < 0) {
    ballSpeedY *= -1;
  }

  if (keyIsDown(LEFT_ARROW)) {
    paddleX -= paddle_speed;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    paddleX += paddle_speed;
  }

  //BALL BOUNCE OFF THE PADDLE
  if (ballX > paddleX - 60 && ballX < paddleX + 60) {
    if (ballY > paddleY - 30 && ballY < paddleY + 30) {
      score++;
      set_speed += 0.5;
      ballSpeedX = random(set_speed);
      ballSpeedY = random(set_speed);
      ballSpeedY *= -1;

      if (score > 0) {
        paddle_speed += 0.5;
      }
    }
  }
}
