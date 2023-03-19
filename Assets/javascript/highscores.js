var homeBtn = document.querySelector("#home-page")
var highscoresList = document.querySelector("#highscores-list");


homeBtn.addEventListener("click", function(){
  location.href="index-new.html";
})

function displayHighScores(){

  var localStorageHighScores=JSON.parse(localStorage.getItem("localStorageHighScores")) || [];
  var orderedScores = localStorageHighScores.sort(sortHighToLow);

  for (var i=0; i<orderedScores.length; i++){
    var liEl=document.createElement("li");
    liEl.textContent = orderedScores[i].initials + ": " + orderedScores[i].score;
    highscoresList.appendChild(liEl);
  }
}

function sortHighToLow(score) {
  return score;
}


displayHighScores();