var audio1= new Audio("click.mp3");
var audio2= new Audio("wrong.mp3");
document.querySelector('body').addEventListener("mousedown", function(){
    document.querySelector('body').classList.add("clicked");
    audio2.play();
  });
  document.querySelector('body').addEventListener("mouseup", function(){
    document.querySelector('body').classList.remove("clicked");
  });
  var randomNumber1;
  var string1;
  var element;
  var score=0;
  var previous;
  var intervalId;
  var gintervalId;
  var finalscore;
  var highscore=0;
  document.getElementById("playagain").addEventListener("click",function(){
    if(seconds==0){
    score=0;
    seconds=60;
    updatescore();
    gintervalId = setInterval(timer, 1000);
    }
  })
  var seconds=60;
  function updatescore(){
    if(seconds>0)
    document.getElementById("score").innerHTML=`<h3>Score:${score} High Score:${highscore}</h3>`;
  }
  function generator() {
    do {
      randomNumber1 = Math.ceil(Math.random() * 9);
    } while (randomNumber1 === previous);
    previous = randomNumber1;
    string1 = "#hole" + randomNumber1;
    element = document.querySelector(string1);
    if (element) {
      element.innerHTML= '<img src="diglet.png">';
      element.addEventListener("click",function(){
        if (element==this) {
          score+=10;
          if(score>highscore){
            highscore=score;
          }
          audio1.play();
          updatescore();
          destroy();
       
        } else {
          console.log("Element not found:", string1);
        }
      });
      clearInterval(intervalId); 
      intervalId = setInterval(destroy, 900);
    } else {
      console.log("Element not found:", string1);
    }
  }
  function destroy(){
    if (element) {
      element.innerHTML= '';
      generator();
    } else {
      console.log("Element not found:", string1);
    }
  }
function timer(){     
    if(seconds>0){
      
         document.getElementById("timer").innerHTML=`${seconds} seconds left`;
         seconds--;
         document.getElementById("playagain").style.visibility="hidden";
}
else{
  finalscore=score;
  if(finalscore>highscore){
    highscore=finalscore;
  }
  document.getElementById("playagain").style.visibility="visible";
  document.getElementById("timer").innerHTML=`Game Over!`;
  document.getElementById("score").innerHTML=`Final Score:${finalscore} High Score:${highscore}`;
  clearInterval(gintervalId);
  return;
}
} 
function startGame() {
  gintervalId = setInterval(timer, 1000);
  generator();
}
startGame();