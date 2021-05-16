
class Quiz {
  constructor(){
    this.restartButton = createButton('Restart');

  }
  diaplay(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    
    });
  
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //this.restartButton.hide()
    question.hide();
     var posy = 300;
     Contestant.getPlayerInfo();
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer){
        fill ("green")
      }else{
        fill ("red")
      }
      textSize(15);
      text (allContestants[plr].name + ": " + allContestants[plr].answer,290,posy);
      posy+=20
      
    }

    if(gameState === 1 ){   
     // Background("yellow")
      document.body.style.backgroundColor = "yellow";
      this.restartButton.position(290,390);
      //location.reload();
      this.restartButton.mousePressed(()=>{
      clear();
      n = ON;
      this.restartButton.hide();
      //if(gameState !== 0){
      database.ref('restartPressed').once("value",function (d){
        contestant.updateReCount(d.val()+1);
        restartPressed = d.val()+1;
        });
     // }
      });
      
      if(restartPressed === contestantCount){
        gameState = 0;
        clear();
        this.restartButton.hide()
         //if( n===1){
           location.reload();
          n =2;
         //}
      quiz.update(0);
      contestantCount = 0;
      contestant.updateCount(0);      
      console.log("all restart");
      question = new Question;
      clear ();
     question.display();
     this.restartButton.show();
     location.reload();
     database.ref("contestants").remove();


     restartPressed = 0;
     contestant.updateReCount(restartPressed);
      

        
        }
      } //  else {      document.body.style.backgroundColor = "pink"; }


  }
   
  
 //write code to change the background color here

    

    //write code to show a heading for showing the result of Quiz



    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  
  changeBGC(){
      document.body.style.background = 'light green';
  
    }


}
