let timeRemaining = 120; // Timer in seconds (6 minutes)
let timerInterval; // Store the timer interval



window.onload = () => {
    startTimer();
}
document.getElementById("submit-btn").addEventListener("click", checkAnswers);

function startTimer() {
    const timerDisplay = document.getElementById("timer");
    timerInterval = setInterval(() => {
        // Decrement time
        timeRemaining--;

        // Update the timer display
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        // Check if time is up
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timeUp();
        }
    }, 1000);
}

// Handle time-up scenario
function timeUp() {
    alert("Time is up! Redirecting to the Time Up page...");
    window.location.href = "timeup.html"; // Redirect to the time-up page
}


function checkAnswers() {
    const cells = document.querySelectorAll(".letter-cell");
    let allCorrect = true;

    cells.forEach(cell => {
        if (cell.value.toUpperCase() === cell.dataset.answer) {
            cell.style.backgroundColor = "lightgreen";  // Correct answer

            document.getElementById("nextButton").disabled = false;
        } else {
            cell.style.backgroundColor = "lightcoral";  // Incorrect answer
            allCorrect = false;
        }
    });

    nextButton.addEventListener("click", () => {
        
          window.location.href = "crossword_less3.html"; 
        
        }
      );



    showHintButton.addEventListener("click", () => {
        window.location.href = "less_hints2.html";
    
    });


    let startTime; // Variable to store the start time

document.addEventListener("DOMContentLoaded", () => {
    // Start the timer when the user enters the level
    startTime = Date.now();
});


      

    const feedback = document.getElementById("feedback");
    feedback.textContent = allCorrect ? "All answers are correct! Great job!" : "Some answers are incorrect. Try again!";
};