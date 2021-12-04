var readlineSync = require('readline-sync');
 
var score = 0;


console.log("Welcome Kushal quiz's on game of thrones ");


function play(question , answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer) {
    console.log("right!");
    score ++;
  } else {
    console.log("Wrong!")
  }
  console.log("Current score :", score);
  console.log("___________");
}

var questions = [{
  question : "What was jon snows real name? \n a: robert \n b: Aegon targareyn \n c: ned \n",
  answer : "b"
},
{
  question : "What was the nick name of jaime lannister ?\n a: King Slayer \n b: Hog rider \n c: King in the north \n",
  answer: "a"
}, {
  question : "Who is called as mad King ? \n a: Aegon targareyn \n b: deamon targareyn \n c: Aerys II Targaryen \n",
  answer : "c"
}]

for(var i = 0; i < questions.length ; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question , currentQuestion.answer);
}

console.log("your final score = ", score)