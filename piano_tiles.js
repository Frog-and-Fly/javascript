//tile size
const WIDTH = 100;
const HEIGHT = 150;

//winning score
let WINNING_SCORE = 50;

//timer
let time;

//score
var score = 0;
let HighScore;

//state of game
let playing;

//winning
let won;
var tiles = [];
let old_win_score;

//level
var level = 1;
var count = 1;

//sound
let noteA;
let noteB;
let noteC;
let noteD;
let NoteE;
let NoteF;
let NoteG;
let NoteEb;
let sounds;
let play_note;

//constant variables
const a = 3;

//load in the sounds
function preload() {
  noteA = loadSound("piano_a.wav");
  noteB = loadSound("piano_b.wav");
  noteC = loadSound("piano_c.wav");
  noteD = loadSound("piano_d.wav");
  noteE = loadSound("piano_e.wav");
  noteF = loadSound("piano_f.wav");
  noteG = loadSound("piano_g.wav");
  noteEb = loadSound("piano_d#.wav");

  sounds = [noteA, noteB, noteC, noteD, noteE, noteF, noteG];
}

//setup
function setup() {
  print(
    "To play:\nclick the lowest black tile. \nEvery tile you click adds one to your score.\nIf you click a white tile the game is over.\nGet to 50 on level one to beat the level."
  );
  createCanvas(401, 601); //added padding of 1 pixel
  time = -3; //countdown for 3 seconds
  score = 0;
  for (var i = 0; i < 4; i++) {
    newRow();
  }

  playing = false;
  won = false;
  textAlign(CENTER);
}

//call function drawTiles()
function draw() {
  background(220);
  drawTiles();
  handleState();
}

//draw in the tiles
function drawTiles() {
  for (var i = 0; i < tiles.length; i++) {
    let x = (i % 4) * WIDTH;
    let y = Math.floor(i / 4) * HEIGHT;
    // -1 = red    0 = black   1 = white
    fill(tiles[i] !== 0 ? (tiles[i] === 1 ? "#FFFFFF" : "#FF0000") : "#000000");
    rect(x, y, WIDTH, HEIGHT);
  }
}

//Handle if the game is being played or not / won or not
function handleState() {
  if (!playing) {
    // if not playing

    if (time > 0) {
      // if we are not in the countdown
      /* endGame */

      drawEnd(won);
    } else {
      // pre-game

      /* draw countdown */
      textSize(60);
      fill("#FF0000");
      text(-time, width / 2, height / 2);

      /* count down countdown */
      if (frameCount % 60 === 0) {
        time++;
        if (time === 0) {
          playing = true;
        }
      }
    }
  } else {
    /* still playing
    draw time */

    textSize(90);
    fill("#FF0000");
    text(getTime(), width / 2, HEIGHT);
    time++;
  }
}

//Drawing the screen for when you pass a level
function drawEnd(won) {
  if (won) {
    background(0, 150, 0);
    textSize(50);
    fill(255, 255, 255);
    text("YOU WON", width / 2, height / 2);
    textSize(30);
    text("You took " + getTime() + " seconds", width / 2, height / 3);
    text("Please wait for next level \n to start.", width / 2, height / 1.5);
    text("Highscore: " + highscore(), width / 2, height / 2 + 217);
    text("Score: " + score, width / 2, height / 1.25);

    //continue onto next level
    if (second() == 0) {
      level++;
      old_win_score = WINNING_SCORE;
      WINNING_SCORE = (old_win_score + 50) * level;
      playing = true;
    }
  }

  //Drawing the screen for when you lose
  if (!won) {
    background(255, 0, 0);
    textSize(50);
    fill(0, 0, 0);
    textSize(30);
    text("Highscore: " + highscore(), width / 2, height / 2 + 140);
    text("Game Over", width / 2, height / 2 + 25);
    textSize(15);

    text("Please wait for game to start again", width / 2, height / 2 + 175);

    textSize(30);

    //display the time
    if (Math.floor(time) < 60) {
      textSize(30);
      text(
        "You lasted \n" + getTime() / 60 + "\n seconds",
        width / 2,
        height / 3.5
      );
    }

    if (getTime() < 60) {
      if (Math.floor(time) > 60) {
        textSize(30);
        text(
          "You lasted \n " + getTime() + "\n seconds",
          width / 2,
          height / 3.5
        );
        text("You clicked " + score + " tiles", width / 2, height / 1.5);
      }
    } else {
      textAlign(CENTER);
      text(
        "You lasted \n" + getTime() / 60 + "\n" + "minutes",
        width / 2,
        height / 4
      );
      text("You clicked " + score + " tiles", width / 2, height / 1.5);
      text("HighScore: " + highscore(), width / 2, height - 75);
    }

    //re-start the game
    if (second() == 0) {
      WINNING_SCORE = 50;
      score = 0;
      level = 1;
      playing = true;
      time = 0;
    }
  }
}

//A new row of tiles
function newRow() {
  let column = Math.floor(random(4));
  for (var i = 0; i < 4; i++) {
    tiles.unshift(column === i ? 0 : 1); //push tiles to front
  }
}

/* function keyPressed(){

}
*/

function mousePressed() {
  if (!playing) {
    return;
  }
  if (mouseY >= 3 * HEIGHT && mouseY <= 4 * HEIGHT) {
    let tile = getClickedTile(mouseX, mouseY);
    if (tile == -1) {
      return;
    }
    if (tiles[tile] != 0) {
      tiles[tile] = -1;
      won = false;
      playing = false;
      noteEb.play();
    } else {
      play_note = random(sounds);
      play_note.play();
      score++;
      newRow();

      if (score >= WINNING_SCORE) {
        won = true;
        //highscore();
        playing = false;
      }
    }
  }
}

function handleState() {
  if (!playing) {
    // if we are not playing

    if (time > 0) {
      // if we are not in the countdown
      /* endGame */

      drawEnd(won);
    } else {
      // pre-game

      /* draw countdown */
      textSize(60);
      fill("#FF0000");
      text(-time, width / 2, height / 2);

      /* count down countdown */
      if (frameCount % 60 === 0) {
        time++;
        if (time === 0) {
          playing = true;
        }
      }
    }
  } else {
    //still playing
    //time
    textSize(90);
    fill(255, 0, 0);
    text(getTime(), width / 2, HEIGHT);
    time++;
  }
}

//Get the tile that was last clicked
function getClickedTile(mX) {
  for (var i = 0; i < 4; i++) {
    let lowerBound = i * WIDTH;
    let upperBound = (i + 1) * WIDTH;

    if (mX >= lowerBound && mX <= upperBound) {
      return i + 12; // only return for bottom row, which is 3 rows of 4 deep in the array
    }
  }

  return -1; // click was out of bounds
}

//Get the time
function getTime() {
  if (!playing) {
    if (Math.floor(time) < 60) {
      return Math.floor(time) + "." + Math.floor(map(time % 60, 0, 59, 0, 999));
    } else {
      return (
        Math.floor(time / 60) + "." + Math.floor(map(time % 60, 0, 59, 0, 999))
      );
    }
  } else {
    return (
      Math.floor(time / 60) + "." + Math.floor(map(time % 60, 0, 59, 0, 999))
    );
  }
}

//Find out the highscore
function highscore() {
  HighScore = getItem("HighScore");

  if (score > HighScore || HighScore === null) {
    //define / convert to string
    HighScore = score;

    //store the variables
    storeItem("HighScore", HighScore);
  }
  return HighScore;
}
