var canvas, backgroundImage,n = 1, ON =2;
var color = "pink";
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
let restartPressed=0;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
   background("pink")

  if(contestantCount === 2){
    quiz.update(1);
    gameState = 1;
  }
  if(gameState === 1){
    background("yellow");
    clear();
    quiz.play();
    color = "pink";

    textSize(30);
    fill ("black")
    text ("Result of the Quiz",300,40);
    textSize(25);

    text ("*Note the person highlighted in green has given the correct answer",10,250)
  } else{color = "yellow"}   

  document.addEventListener("visibilitychange", event => {
    if (document.visibilityState == "visible" && n === 2) {
      location.reload();
     } else {
      // location.reload()
    }
  })

  if(keyDown('r')){
    contestantCount = 0;
    contestant.updateCount(0);
    restartPressed = 0;
    contestant.updateReCount(restartPressed);
    quiz.update(0);
    gameState = 0;
    location.reload();
    n = 2
  }
   
  //console.log(n);

}
