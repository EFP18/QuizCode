var startBtn = document.querySelector(".start-quiz") 
var timer = document.querySelector(".timer") 
var questionsContainer = document.querySelector(".questions-container") 
var timeLeft = 10
var timeStart;

//create an array of objects.
//each object will have three properties.The  question, answers array, correct answer(be the index of the correct answer in your choice array).

// who is harry potter?
// ['a muggle', 'the boy who lived', ',.kufebgkhybuje']
// 1

function startQuiz() {
  //hide start button
  startBtn.remove();

  questionsContainer.style.display = 'block' //setAttribute("stye", "display:block)"

  timeStart = setInterval(function() {
    timeLeft--
    timer.textContent = "Time: " + timeLeft
    if (timeLeft <= 0){
      endQuiz()
    }
  },1000)
}

function endQuiz() {
  clearInterval(timeStart);
  console.log('quiz ended')
}


startBtn.addEventListener("click", startQuiz);

// timer interval

