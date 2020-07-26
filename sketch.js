//------------------------------------------------
// Staff constants

const linesX = 300;
const spacesX = 500;
const lineGap = 40;
const noteGap = 20;
const levels = [{level: 1}];
var linesYStart, spacesYStart;

//------------------------------------------------

// clef image variable
var clef;

//------------------------------------------------

// Game  variables
var sounds = []
const soundFiles =
   ["sounds/si0.mp3",   "sounds/si1.mp3",   "sounds/si2.mp3",   "sounds/si3.mp3",   "sounds/si4.mp3",
    "sounds/do1.mp3",   "sounds/do2.mp3",   "sounds/do3.mp3",   "sounds/do4.mp3",   "sounds/do5.mp3",
    "sounds/do#1.mp3",  "sounds/do#2.mp3",  "sounds/do#3.mp3",  "sounds/do#4.mp3",  "sounds/do#5.mp3",
    "sounds/re1.mp3",   "sounds/re2.mp3",   "sounds/re3.mp3",   "sounds/re4.mp3",   "sounds/re5.mp3",
    "sounds/re#1.mp3",  "sounds/re#2.mp3",  "sounds/re#3.mp3",  "sounds/re#4.mp3",
    "sounds/mi1.mp3",   "sounds/mi2.mp3",   "sounds/mi3.mp3",   "sounds/mi4.mp3",
    "sounds/fa1.mp3",   "sounds/fa2.mp3",   "sounds/fa3.mp3",   "sounds/fa4.mp3",
    "sounds/fa#1.mp3",  "sounds/fa#2.mp3",  "sounds/fa#3.mp3",  "sounds/fa#4.mp3",
    "sounds/sol1.mp3",  "sounds/sol2.mp3",  "sounds/sol3.mp3",  "sounds/sol4.mp3",
    "sounds/sol#1.mp3", "sounds/sol#2.mp3", "sounds/sol#3.mp3", "sounds/sol#4.mp3",
    "sounds/la1.mp3",   "sounds/la2.mp3",   "sounds/la3.mp3",   "sounds/la4.mp3",
    "sounds/la#1.mp3",  "sounds/la#2.mp3",  "sounds/la#3.mp3",  "sounds/la#4.mp3",
  ];
  const soundRefs = {si0: 0,   si1: 1,    si2: 2,    si3: 3,    si4: 4,
                               do1: 5,    do2: 6,    do3: 7,    do4: 8,   do5: 9,
                               do#1: 10,  do#2: 11,  do#3: 12,  do#4: 13, do#5: 14,
                               re1: 15,   re2: 16,   re3: 17,   re4: 18,  re5: 19,
                               re#1: 20,  re#2: 21,  re#3: 22,  re#4: 23,
                               mi1: 24,   mi2: 25,   mi3: 26,   mi4: 27,
                               fa1: 28,   fa2: 29,   fa3: 30,   fa4: 31,
                               fa#1: 32,  fa#2: 33,  fa#3: 34,  fa#4: 35,
                               sol1: 36,  sol2: 37,  sol3: 38,  sol4: 39,
                               sol#1: 40, sol#2: 41, sol#3: 42, sol#4: 43,
                               la1: 44,   la2: 45,   la3: 46,   la4: 47,
                               la#1: 48,  la#2: 49,  la#3: 50,  la#4: 51,
                    }
var noteIndex = 19;
var noteButtons = [];
var notes = [];
let noteNames = ["MI", "FA", "SOL", "LA", "SI", //0 -4
  "Do", "Re", "Mi", "Fa", "Sol", "La", "Si",    //5- 11
  "do", "re", "mi", "fa", "sol", "la", "si",    //12- 18
  "do", "re", "mi", "fa", "sol", "la", "si"];   //19- 25

let buttons = ["DO", "RE", "MI", "FA", "SOL", "LA", "SI"];
/*
const levels = [{notes: [0, 2, 8, 10], buttons: []}, [0, 2, 4, 8], [4, 6, 8, 10], [2, 4, 6, 8], [0, 2, 4, 6, 8],    //  1 - 5
                [2, 4, 6, 8, 10], [0, 2, 4, 6, 8, 10], [0, 1, 2, 3], [0, 1, 2, 3, 4, 5],      //  6 - 9
                [2, 3, 4, 5, 6, 7], [5, 6, 7, 8, 9 ,10], [3, 4, 5, 6, 7, 8],                  // 10 - 12
                [0, 1, 2, 3, 4, 5, 6, 7], [3, 4, 5, 6, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5, 6, 7],// 13 - 15
                [0, 1, 2, 3, 7, 8, 9, 10], [2, 3, 4, 5, 6, 7, 8, 9],                          // 16 - 17
                [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],                 // 18 - 19
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];                                          // 20
*/
var level = 1;


//------------------------------------------------
var startButton;


//------------------------------------------------
// Timer variables

var startTimer = false;
var canCount = false;
var showStartButton = true;
var millisVal = 0;
const levelPoints = 5;
var points = 0;

//------------------------------------------------
// Canvas variables

const canvasWidth = 800;
const canvasHeight = 600;

//------------------------------------------------
// Scene variables
  var startScene, countdownScene, gameScene, winScene, looseScene, afterGameScene;
  var activeScene = "startScene";


//------------------------------------------------
function preload() {
  clef = loadImage("images/clef.png");
  for (var i = 0; i < sounFiles.length; i++){
    sounds.push(loadSound(soundFiles[i]));
  }
}

//------------------------------------------------
function setup() {

  createCanvas(canvasWidth, canvasHeight);

  startScene = new Scene(true);
  gameScene = new Scene(false);
  afterGameScene = new Scene(false);
  winScene = new Scene(false);
  looseScene = new Scene(false);
  countdownScene = new Scene(false);

  startButton = new StartButton(true, canvasWidth, canvasHeight);


  createButtons(buttons);

  linesYStart = height / 2 - (lineGap * 2);
  spacesYStart = height / 2 - (lineGap * 2) - lineGap / 2;

  loadLevelNotes();



}

//------------------------------------------------
function draw() {

  background(255);

  image(clef, 100, linesYStart - 31, 88, 246);

  drawStaff();
  fill(0);
  textSize(40);
  text("Level " + level, width/2, 100);

  if (gameScene.display){

    drawButtons();
    notes[noteIndex].drawNote();
    drawNoteLine();
    roundTimer(15);
    pointsCounter(levelPoints);

  }else if (countdownScene.display){
    countdownTimer();


  } else if (startScene.display){

    startButton.drawButton(canvasWidth, canvasHeight);

  } else if (winScene.display){
    win();
    startButton.drawButton(canvasWidth, canvasHeight);
  } else if (looseScene.display){
    loose();
    startButton.drawButton(canvasWidth, canvasHeight);
  }
}

//------------------------------------------------
function loadLevelNotes(){
  let lowestNote = linesYStart + lineGap * 4 + 10;
  console.log("lowestNote: " + lowestNote);
  for (let i = 0; i < 26; i++) {

    if (i < 12) {
      notes.push(new Note(noteNames[i], width / 2, lowestNote - i * noteGap, false));
    } else {
      notes.push(new Note(noteNames[i], width / 2, lowestNote - lineGap - i * noteGap, true));
    }
  }
}

//------------------------------------------------
function drawNoteLine(){
  stroke(0);
  strokeWeight(2);

  if (noteIndex === 0 || noteIndex === 1){
    line(width / 2 - 10, linesYStart + lineGap * 5, width / 2 + 60, linesYStart + lineGap * 5);
    line(width / 2 - 10, linesYStart + lineGap * 6, width / 2 + 60, linesYStart + lineGap * 6);
    line(width / 2 - 10, linesYStart + lineGap * 7, width / 2 + 60, linesYStart + lineGap * 7);

  } else if (noteIndex === 2 || noteIndex === 3){
    line(width / 2 - 10, linesYStart + lineGap * 5, width / 2 + 60, linesYStart + lineGap * 5);
    line(width / 2 - 10, linesYStart + lineGap * 6, width / 2 + 60, linesYStart + lineGap * 6);

  } else if (noteIndex === 4 || noteIndex === 5){
    line(width / 2 - 10, linesYStart + lineGap * 5, width / 2 + 60, linesYStart + lineGap * 5);

  } else if (noteIndex === 17 || noteIndex === 18){
  line(width / 2 - 10, linesYStart - lineGap, width / 2 + 60, linesYStart - lineGap);

  } else if (noteIndex === 19 || noteIndex === 20){
    line(width / 2 - 10, linesYStart - lineGap, width / 2 + 60, linesYStart - lineGap);
    line(width / 2 - 10, linesYStart - lineGap*2, width / 2 + 60, linesYStart - lineGap*2);

  } else if (noteIndex === 21 || noteIndex === 22){
    line(width / 2 - 10, linesYStart - lineGap, width / 2 + 60, linesYStart - lineGap);
    line(width / 2 - 10, linesYStart - lineGap*2, width / 2 + 60, linesYStart - lineGap*2);
    line(width / 2 - 10, linesYStart - lineGap*3, width / 2 + 60, linesYStart - lineGap*3);

  } else if (noteIndex === 23 || noteIndex === 24){
    line(width / 2 - 10, linesYStart - lineGap, width / 2 + 60, linesYStart - lineGap);
    line(width / 2 - 10, linesYStart - lineGap*2, width / 2 + 60, linesYStart - lineGap*2);
    line(width / 2 - 10, linesYStart - lineGap*3, width / 2 + 60, linesYStart - lineGap*3);
    line(width / 2 - 10, linesYStart - lineGap*4, width / 2 + 60, linesYStart - lineGap*4);


  } else if (noteIndex === 25){
    line(width / 2 - 10, linesYStart - lineGap, width / 2 + 60, linesYStart - lineGap);
    line(width / 2 - 10, linesYStart - lineGap*2, width / 2 + 60, linesYStart - lineGap*2);
    line(width / 2 - 10, linesYStart - lineGap*3, width / 2 + 60, linesYStart - lineGap*3);
    line(width / 2 - 10, linesYStart - lineGap*4, width / 2 + 60, linesYStart - lineGap*4);
    line(width / 2 - 10, linesYStart - lineGap*5, width / 2 + 60, linesYStart - lineGap*5);
  }
}
//------------------------------------------------
// This method is to make shure only one scene is active
function pickScene(scene){

  startScene.displayScene(false);
  countdownScene.displayScene(false);
  gameScene.displayScene(false);
  afterGameScene.displayScene(false);
  winScene.displayScene(false);
  looseScene.displayScene(false);


  if (scene === "start"){
    startScene.displayScene(true);
    activeScene = "startScene";

  } else if (scene === "countdown"){
    console.log("Game Started");
    countdownScene.displayScene(true);
    activeScene = "countdownScene";

  }else if (scene === "game"){
    console.log("Game Started");
    gameScene.displayScene(true);
    activeScene = "gameScene";

  } else if (scene === "afterGame"){
    afterGameScene.displayScene(true);
    activeScene = "afterGameScene";

  } else if (scene === "win"){
    winScene.displayScene(true);
    activeScene = "winScene";

  } else if (scene === "loose"){
    looseScene.displayScene(true);
    activeScene = "looseScene";
  }
}

//------------------------------------------------
function drawStaff() {
  stroke(0);
  line(100, linesYStart, width - 100, linesYStart);
  line(100, linesYStart + lineGap, width - 100, linesYStart + lineGap);
  line(100, linesYStart + lineGap * 2, width - 100, linesYStart + lineGap * 2);
  line(100, linesYStart + lineGap * 3, width - 100, linesYStart + lineGap * 3);
  line(100, linesYStart + lineGap * 4, width - 100, linesYStart + lineGap * 4);
}

//------------------------------------------------
function drawButtons() {

  for (i = 0; i < noteButtons.length; i++) {
    noteButtons[i].drawButton();
  }
}

//------------------------------------------------
function createButtons(buttons) {
  let padding = 10;
  let buttonWidth = 50;
  let buttonY = 550;
  for (let i = 0; i < buttons.length; i++) {
    noteButtons.push(new Button(buttons[i], 200 + (buttonWidth * i) + padding, buttonY));
    padding += 10;
  }
}

//------------------------------------------------
var seconds = 0;

function roundTimer(duration){
  //console.log("duration: " + duration);
  //console.log("seconds: " + seconds);
  let timerX = 100;
  let timerY = 100;
  let timerWidth = 50;
  let timerHeight = 50;

  fill(255);
  ellipse(timerX, timerY, timerWidth, timerHeight);  // just a frame
  if (seconds < duration){
  seconds = (millis() - millisVal)/1000;
    //console.log("seconds: " + seconds);
  }

  var colorAdd = 255/duration;
  // Green 36, 237, 76 // Red 255, 47, 0
  fill(colorAdd * seconds*duration/4, 255/(seconds/(duration/3)),0);
  if (canCount &&  seconds <= duration){
    arc(timerX, timerY, // x and y
        timerWidth, timerHeight,
        -PI/2, // Starts on top. Set to 0 to start on the right.
        1/3 -PI/2 + (seconds)*6 / (duration), PIE);
    if (points > 5){
      pickScene("win");
    }
  } else if (canCount) {
    canCount = false;
    console.log("Timer Finished");
    if (points > 5){
      pickScene("win");
    } else {
      pickScene("loose");
    }
    //pickScene("afterGame");
  }
}

//------------------------------------------------

var countdownSeconds = 0;

function countdownTimer(){
  let countdownDuration = 3;
  let timerX = width/2;
  let timerY = height/2;

  if (countdownSeconds < countdownDuration){
  countdownSeconds = (millis() - millisVal)/1000;
    //console.log("seconds: " + seconds);
  }

  if (countdownSeconds <= countdownDuration){
    fill(0);
    textSize(55);
    text(Math.ceil(countdownDuration - countdownSeconds), width/2, height/2);
    //console.log("countdownSeconds: " + countdownSeconds);
    //console.log("countdownDuration: " + countdownDuration);

  } else {
    pickScene("game");
    canCount = true;
    millisVal = millis();
  }
}


//------------------------------------------------
function mouseReleased() {
  console.log("noteIndex: " + noteNames[noteIndex]);
  if (!canCount){
    millisVal = millis();
  }
  if (gameScene.display){
    calculatePoints();
  }


  if (startScene.display && startButton.buttonHovered()){
        pickScene("countdown");

  } else if (winScene.display && startButton.buttonHovered()){

    millisVal = millis();
    countdownSeconds = 0;
    level++;
    points = 0;
    pickScene("countdown");
  } else if (looseScene.display && startButton.buttonHovered()){
    seconds = 0;
    millisVal = millis();
    countdownSeconds = 0;
    points = 0;
    pickScene("countdown");
  }
  console.log(activeScene);
}

//------------------------------------------------
function calculatePoints(){

  var btnClicked = "";

  for (let btn of noteButtons) {
    let tempBtn = btn.buttonClicked();
    if (typeof tempBtn  !== 'undefined'){
      btnClicked = tempBtn;
    } else {

      console.log("Button is undefined");
    }
  }

  if ((btnClicked.toLowerCase()).localeCompare(notes[noteIndex].name.toLowerCase()) === 0){
    console.log("Correct");

    //console.log("0");
    points++;
    noteIndex = floor(random(0, notes.length - 1));
    console.log("Note index: " + noteIndex);
  } else if((btnClicked.toLowerCase()).localeCompare(notes[noteIndex].name.toLowerCase()) === 1) {
    console.log("btnClicked: " + btnClicked);
    if (btnClicked === ""){ // player clicked outside of the buttons
      return;
    }
    console.log("Wrong!");
    console.log("btn: " + (btnClicked.toLowerCase()));

    if (points > 0){
      points--;
    }
    noteIndex = floor(random(0, notes.length - 1));

  } else if ((btnClicked.toLowerCase()).localeCompare(notes[noteIndex].name.toLowerCase()) === -1) {
    console.log("btnClicked: " + btnClicked);
    if (btnClicked === ""){ // player clicked outside of the buttons
      return;
    }
    console.log("Wrong!");
    console.log("btn: " + (btnClicked.toLowerCase()));

    if (points > 0){
      points--;
    }
    noteIndex = floor(random(0, notes.length - 1));
  }
  console.log("something else was clicked");
}

//------------------------------------------------
function playNote(){


}


//------------------------------------------------
function pointsCounter(total){
  noFill();
  for (let i = 0; i < total; i++){
    rect(width - 50, 200 + (i*25), 25, 25);
  }


  for (let i = 0; i < total && i < points; i++){
    fill(100, 255, 100);
    rect(width - 50, 200 + (i*25), 25, 25);

  }
}

//------------------------------------------------
function startButtonHovered(buttonWidth, buttonHeight, x, y){
  if (mouseX > x && mouseX < x + buttonWidth && mouseY > y && mouseY < y + buttonHeight){
    return true;
  } else {
    return false;
  }
}

function win(){
  fill(0);
  text("YOU WIN!!!", 400, 200);
  //console.log("YOU WIN!!!");
}

function loose(){
  fill(0);
  text("You lost", 400, 200);
  //console.log("YOU loose!!!");
}
