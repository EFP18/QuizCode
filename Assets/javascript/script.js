// var startBtn = document.querySelector("#start-button");
// var startPage = document.querySelector(".start-page");
// var questionDisplay = document.querySelector("#question");
// var quizButtonContainer = document.querySelector("#quiz-buttons");
// var finishedP = document.querySelector("#finished");
// var submitBtn = document.querySelector("#submit-button");
// var timer = document.querySelector(".timer");
// var userNotePTag = document.querySelector("#user-note");
// var timeLeft = 80;
// var timeStart;
// var highScores = document.querySelector("#highscores");

// var quizButtons = quizButtonContainer.querySelectorAll("button");

// var counter = 0;


// // var questionsContainer = document.querySelector(".questions-container") 

// // var showQuestions = document.querySelector(".show-questions");

// // when I hit the start quiz button, I want my questions to show 
// // one by one

// // when they choose an answer, I want to say wrong or right

// // when they finish one question, I want a next button for the next one

// // 

// var questions = [
//   {
//   Question: "What is the capital of Greece?", 
//   PossibleAnswers: ["Athens", "Thessaloniki", "Patra"],
//   CorrectAnswer: 0
//   },

//   {
//   Question: "What is a neighboring country of Greece?", 
//   PossibleAnswers: ["Spain", "Switzerland", "Turkey"],
//   CorrectAnswer: 2
//   },

//   {
//   Question: "What is the biggest port of Greece?", 
//   PossibleAnswers: ["Patra", "Pireaus", "Thessaloniki"],
//   CorrectAnswer: 1
//   },

//   {
//   Question: "What is a traditional food of Greece?", 
//   PossibleAnswers: ["Souvlaki", "Pasta", "Falafel"],
//   CorrectAnswer: 0
//   },
  
//   {
//   Question: "Which city is the Acropolis in?", 
//   PossibleAnswers: ["Athens", "Volos", "Kalamata"],
//   CorrectAnswer: 0
//   },
// ]

// var questionIndex = 0;


// startBtn.addEventListener("click", startQuiz);

// function startQuiz() {
//   //hide start button
//   startBtn.remove();
//   startPage.remove();
//   quizButtonContainer.hidden = false;
//   questionDisplay.hidden = false;
//   displayAnswer();

//   quizButtonContainer.style.display = 'block' //setAttribute("stye", "display:block)"


//   timeStart = setInterval(function() {
//     timeLeft--
//     timer.textContent = "Time: " + timeLeft
//     if (timeLeft <= 0){
//       endQuiz()
//     }
//   },1000)

// }


// var displayAnswer = function (){
//   questionDisplay.textContent = questions[questionIndex].Question;
//   for (var i=0; i<quizButtons.length; i++) {
//     quizButtons[i].textContent = questions[questionIndex].PossibleAnswers[i];
//   }
// }



// startBtn.addEventListener("click", startQuiz);

// var rightOrWrong = [];

// for (var i=0; i < quizButtons.length; i++){
//   quizButtons[i].addEventListener("click", function(event){
    
//     var targetButtonIndex = parseInt(event.target.dataset.index);

//     if (targetButtonIndex === questions[questionIndex].CorrectAnswer) {
//       // console.log('correct');
      
//       userNotePTag.textContent = 'Correct!'
      
//       // quizButtons.setAttribute("style", "color: green;");
//     } else {
//       // console.log('incorrect');
//       timeLeft = timeLeft - 10;
//       userNotePTag.textContent = 'Incorrect!'
//       // quizButtons.setAttribute("style", "color: red;");

//     }
    

//     questionIndex++;
    
//     if (questionIndex < questions.length){
//       displayAnswer();
//     } else {
//       questionDisplay.hidden=true;
//       quizButtonContainer.remove();
//       endQuiz();
//     }
//   })
// }


// function endQuiz() {
//   clearInterval(timeStart);
//   console.log('quiz ended')
//   finishedP.hidden = false;
//   submitBtn.hidden = false;
//   highScores.hidden = true;
//   questionDisplay.hidden = true;
//   quizButtonContainer.remove();

// }

// function submit(){
//   highScores.hidden = false;
//   finishedP.hidden=true;
//   submitBtn.hidden=true;
//   userNotePTag.remove();


// }

// submitBtn.addEventListener("click", submit);

// // Show results and submit buttons


// // connect correct answer
// // print wrong or right
// // highscores
// // subtract time from clock for wrong answer

// // add event listener when hit the correct answer text to turn green 



// // local storage

// // submit even prevent default



// // set time out for the answer in question after the answer, to delay when the next question shows
// // put the display question in the set time out
// // store the results in an array of objects, key initials, value their name, score and value 
// // loop over the array and display in the highscores 








