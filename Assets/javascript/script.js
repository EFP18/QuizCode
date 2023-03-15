var startBtn = document.querySelector("#start-button");
var startPage = document.querySelector(".start-page");
var questionDisplay = document.querySelector("#question");
var quizButtonContainer = document.querySelector("#quiz-buttons");
var finishedP = document.querySelector("#finished");

var timer = document.querySelector(".timer");
var timeLeft = 20;
var timeStart;

var quizButtons = quizButtonContainer.querySelectorAll("button");

// var questionsContainer = document.querySelector(".questions-container") 

// var showQuestions = document.querySelector(".show-questions");

// when I hit the start quiz button, I want my questions to show 
// one by one

// when they choose an answer, I want to say wrong or right

// when they finish one question, I want a next button for the next one

// 

var questions = [
  {
  Question: "What is the capital of Greece?", 
  PossibleAnswers: ["Athens", "Thessaloniki", "Patra"],
  CorrectAnswer: 0
  },

  {
  Question: "What is a neighboring country of Greece?", 
  PossibleAnswers: ["Spain", "Switzerland", "Turkey"],
  CorrectAnswer: 2
  },

  {
  Question: "What is the biggest port of Greece?", 
  PossibleAnswers: ["Patra", "Pireaus", "Thessaloniki"],
  CorrectAnswer: 1
  },

  {
  Question: "What is a traditional food of Greece?", 
  PossibleAnswers: ["Souvlaki", "Pasta", "Falafel"],
  CorrectAnswer: 0
  },
  
  {
  Question: "Which city is the Acropolis in?", 
  PossibleAnswers: ["Athens", "Volos", "Kalamata"],
  CorrectAnswer: 0
  },
]

var questionIndex = 0;


startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  //hide start button
  startBtn.remove();
  startPage.remove();
  quizButtonContainer.hidden = false;
  questionDisplay.hidden = false;
  displayAnswer();

  quizButtonContainer.style.display = 'block' //setAttribute("stye", "display:block)"


  timeStart = setInterval(function() {
    timeLeft--
    timer.textContent = "Time: " + timeLeft
    if (timeLeft <= 0){
      endQuiz()
    }
  },1000)

}

var displayAnswer = function (){
  questionDisplay.textContent = questions[questionIndex].Question;
  for (var i=0; i<quizButtons.length; i++) {
    quizButtons[i].textContent = questions[questionIndex].PossibleAnswers[i];
  }
}

// for (var i=0; i < questionDisplay.length; i++){
//   for (var j = 0 ; j < PossibleAnswers.length; j++) {
//     if (PossibleAnswers[j] = CorrectAnswer){
//       print = ("Correct!");
//       console.log("correct");
//     } else {
//       print = ("Wrong!")
//       console.log("wrong");
    
//     }
//   }
// }

for (var i=0; i < quizButtons.length; i++){
  quizButtons[i].addEventListener("click", function(){
    questionIndex++;
    if (questionIndex< questions.length){
      displayAnswer();
    } else {
      questionDisplay.hidden=true;
      quizButtonContainer.remove();
      endQuiz();
    }
  })
}


function endQuiz() {
  clearInterval(timeStart);
  console.log('quiz ended')
  finishedP.hidden = false;
  questionDisplay.hidden = true;
  quizButtonContainer.remove();
}


// timer interval




// connect correct answer
// print wrong or right
// highscores
// subtract time from clock for wrong answer