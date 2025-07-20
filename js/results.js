function loadResults() {
  const correctAnswers = localStorage.getItem("correctAnswers");
  const wrongAnswers = localStorage.getItem("wrongAnswers");
  document.getElementById("correct").textContent = correctAnswers;
  document.getElementById("wrong").textContent = wrongAnswers;
}

function restartQuiz() {
  localStorage.clear();
  window.location.href = "welcom.html";
}

window.onload = loadResults;
