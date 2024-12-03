let attempts = 0; // Track the number of attempts
let score = 0; // User's total score for this session
let timeRemaining = 180; // Timer in seconds (6 minutes)
let timerInterval; // Store the timer interval



window.onload = () => {
    startTimer();
}


// Event listeners for buttons
document.getElementById("submit-btn").addEventListener("click", checkAnswers);
document.getElementById("nextButton").addEventListener("click", goToNextPuzzle);
document.getElementById("showHintButton").addEventListener("click", showHints);

// Timer function
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

// Check Answers
function checkAnswers() {
    const cells = document.querySelectorAll(".letter-cell");
    let allCorrect = true;

    attempts++; // Increment attempts each time the button is clicked

    // Validate answers
    cells.forEach(cell => {
        if (cell.value.toUpperCase() === cell.dataset.answer) {
            cell.style.backgroundColor = "lightgreen"; // Correct answer
        } else {
            cell.style.backgroundColor = "lightcoral"; // Incorrect answer
            allCorrect = false;
        }
    });

    // Handle feedback
    handleFeedback(allCorrect);
}

// Feedback
function handleFeedback(allCorrect) {
    const feedback = document.getElementById("feedback");

    if (allCorrect) {

        // Display feedback
        feedback.textContent = `All answers are correct! Great job!`;
        feedback.style.color = "green";

        // Enable "Next" button
        document.getElementById("nextButton").disabled = false;
        clearInterval(timerInterval);
    } else {
        feedback.textContent = "Some answers are incorrect. Try again!";
        feedback.style.color = "red";
    }
}




// Navigate to Next Puzzle
function goToNextPuzzle() {
    
    window.location.href = "crossword_more3.html"; // Redirect to the next puzzle
}

// Show Hints
function showHints() {
    window.location.href = "more_hints2.html"; // Redirect to the hints page
}







