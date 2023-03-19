var mainEl = document.querySelector("main");
var startPage = document.querySelector(".start-page");
var startBtn = document.querySelector(".start-button");
var questionsEl = document.querySelector(".questions");
var quizDone = document.querySelector(".done");
var scoreEl = document.querySelector(".score");
var formInitials = document.querySelector(".form-initials");
var highscoresEl = document.querySelector(".highscores");
var timeLeft = document.querySelector(".time-left");

var time = 50;
var timerInterval;
var questionIndex = 0;
// start at 0 so it defaults by starting at the 1st question of the array of questions
var rightOrWrong = "";


var questionsObj = [
  {
  questionText: "What is the capital of Greece?", 
  possibleAnswers: ["Athens", "Thessaloniki", "Patra"],
  correctAnswer: 0
  },

  {
  questionText: "What is a neighboring country of Greece?", 
  possibleAnswers: ["Spain", "Switzerland", "Turkey"],
  correctAnswer: 2
  },

  {
  questionText: "What is the biggest port of Greece?", 
  possibleAnswers: ["Patra", "Pireaus", "Thessaloniki"],
  correctAnswer: 1
  },

  {
  questionText: "What is a traditional food of Greece?", 
  possibleAnswers: ["Souvlaki", "Pasta", "Falafel"],
  correctAnswer: 0
  },
  
  {
  questionText: "Which city is the Acropolis in?", 
  possibleAnswers: ["Athens", "Volos", "Kalamata"],
  correctAnswer: 0
  },
]


function startQuiz(){
  mainEl.innerHTML = "";
  // hide and show the things I want after the click of the start button

  console.log("quiz started");


  timerInterval = setInterval(function(){
    time--;
    timeLeft.textContent = `Time left: ${time}` ;
    
    if (time <= 0){
      clearInterval(timerInterval);
      // print time is up score=0
      endGame();
      return;
    } 
    // stop the timer if it reaches 0
    
    // if all questions answered, clear interval

  }, 1000);

  displayQuestions();
}

startBtn.addEventListener("click", startQuiz);



function displayQuestions(){
  mainEl.innerHTML = "";

if (questionIndex >= questionsObj.length) {
  endGame();
  return;
}

    var h1El=document.createElement("h1");
    h1El.textContent = questionsObj[questionIndex].questionText
    mainEl.appendChild(h1El);
    // we create an element to carry the text of the questions and append it to appear on the screen

    var btnDivEl = document.createElement("div");
    mainEl.appendChild(btnDivEl);

    var pEl = document.createElement("p");
    pEl.textContent = rightOrWrong;
    mainEl.appendChild(pEl);

    btnDivEl.addEventListener("click", function(event){
      var target=event.target;
      // console.log("hit")

      if (target.getAttribute("class") !== "btn") return;
      
      var clickedQuestionIndex = parseInt(target.getAttribute("data-index"));
      // parse to change the string into a number 
      // we're grabbing the index of the possible answers to compare it later

      if (clickedQuestionIndex === questionsObj[questionIndex].correctAnswer){
        rightOrWrong = "Correct!"
      } else {
        time = time - 10;
        rightOrWrong = "Wrong!"
      }


      questionIndex++;
      displayQuestions();
    })


    for (var  i = 0; i<questionsObj[questionIndex].possibleAnswers.length; i++){
      var buttonEl = document.createElement("button");
      buttonEl.textContent=questionsObj[questionIndex].possibleAnswers[i];
      buttonEl.setAttribute("class", "btn");
      buttonEl.setAttribute("data-index", i);
      btnDivEl.appendChild(buttonEl);

      buttonEl.setAttribute("style", "font-size: 30px");

    }
  }


function endGame() {
  clearInterval(timerInterval);
  console.log("quiz done")
  mainEl.innerHTML="";


  // form goes here
  // local storage

  var divForm = document.createElement("div");
  divForm.setAttribute("class", "form");
  divForm.innerHTML = 
  `
  <form class = "form-initials" >
    <!-- action="/action_page.php" -->
    <label for="initials">Initials</label><br>
    <input type="text" id="initials" name="initials" value="Add your initials here:"><br><br>
    <button class ="submit-button" type="submit" value="Submit" formaction='highscores.html'>Submit</button>
  </form> 
`

mainEl.appendChild(divForm);

}



