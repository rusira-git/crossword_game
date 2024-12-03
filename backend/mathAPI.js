const API_URL = "https://marcconrad.com/uob/banana/api.php";
const puzzleImage = document.getElementById("puzzleImage");
const timerElement = document.getElementById("timer");
const userAnswer = document.getElementById("userAnswer");
const checkButton = document.getElementById("checkButton");
const nextButton = document.getElementById("nextButton");
const message = document.getElementById("message");

let solution = null;
let timer;
let timeLeft = 60;
let startTime;

// Fetch puzzle and solution from the API
async function fetchPuzzle() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    puzzleImage.src = data.question;
    solution = data.solution;
    resetGame();
  } catch (error) {
    console.error("Error fetching puzzle:", error);
    message.textContent = "Failed to load puzzle. Please refresh.";
  }
}

// Reset game state
function resetGame() {
  clearInterval(timer);
  timeLeft = 60;
  timerElement.textContent = `Time Left: ${timeLeft}s`;
  userAnswer.value = "";
  message.textContent = "";
  nextButton.disabled = true;
  startTimer();
}

// Start the countdown timer
function startTimer() {
  startTime = Date.now();
  timer = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    timeLeft = 60 - elapsed;
    timerElement.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      message.textContent = "Time's up! Refreshing puzzle...";
      fetchPuzzle();
    }
  }, 1000);
}

// Check user's answer
checkButton.addEventListener("click", () => {
  clearInterval(timer); // Stop the timer when checking the answer
  const elapsedTime = 60 - timeLeft;
  const userInput = parseInt(userAnswer.value, 10);

  if (userInput === solution) {
    message.textContent = "Correct! You may proceed.";
    nextButton.disabled = false; 
  } else {
    message.textContent = "Incorrect! Refreshing puzzle...";
    fetchPuzzle(); 
  }
});

// Navigate to the next page based on time taken
nextButton.addEventListener("click", () => {
  if (60 - timeLeft <= 30) {
    window.location.href = "crossword.html"; 
  } else {
    window.location.href = "crossword2.html"; 
  }
});

// Initialize the game
fetchPuzzle();
displayUsername();





