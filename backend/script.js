// Show Registration Form
function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

// Show Login Form
function showLogin() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}







// Function to show welcome message
function showWelcomeMessage(username) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('welcomeMessage').style.display = 'block';
    document.getElementById('welcomeText').textContent = `Welcome, ${username}! Ready to play?`;

    // Save the current user
    saveCurrentUser(username);
}






// Function to start the game
function startGame() {
    window.location.href = "mathAPI.html"; // Replace with the actual game page URL
}

// Function to go to the leaderboard
function leaderBoard() {
    window.location.href = "leaderboard.html"; // Redirect to the leaderboard page
}










// Handle Registration
document.getElementById('registrationForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('regName').value;
    const password = document.getElementById('regPassword').value;

    try {
        const response = await fetch('http://localhost:5000/register', { // Replace with your server URL
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message || 'Registration successful!');
            showLogin();
        } else {
            alert(data.error || 'Registration failed!');
        }
    } catch (error) {
        console.error('Error during registration:', error);
        alert('Could not register. Please try again later.');
    }
});

// Handle Login
document.getElementById('loginFormSubmit').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('loginName').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('http://localhost:5000/login', { // Replace with your server URL
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('jwt', data.token); // Store JWT token
            localStorage.setItem('currentUser', username); // Save username for reference
            alert('Login successful!');
            showWelcomeMessage(username);
            startGame();
             // Redirect to game
        } else {
            alert(data.error || 'Login failed!');
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('Could not log in. Please try again later.');
    }
});




