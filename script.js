// 🎬 Screen elements for navigation
var welcomeScreen = document.getElementById("welcomeScreen");
var difficultyScreen = document.getElementById("difficultyScreen");
var gameScreen = document.getElementById("gameScreen");

// ✅ Handle the "Play!!" button to move from Welcome to Difficulty
document.getElementById("playBtn").addEventListener("click", function() {
    welcomeScreen.style.display = "none";   // Hide Welcome screen
    difficultyScreen.style.display = "block"; // Show Difficulty screen
});

// ✅ Function to start the game when difficulty is selected
function startGame(level) {
    difficultyScreen.style.display = "none"; // Hide Difficulty screen
    gameScreen.style.display = "block";      // Show Game screen

    console.log("Level selected:", level); // Optional: log the selected level
}

// ✅ Function to go back to a specific screen
function goBack(screen) {
    if(screen === 'welcome') {
        difficultyScreen.style.display = "none";
        welcomeScreen.style.display = "block";
    } else if(screen === 'difficulty') {
        gameScreen.style.display = "none";
        difficultyScreen.style.display = "block";
    }
}


// 📥 Get elements from the page
var guessnum = document.getElementById("gno")
var result = document.getElementById("result")
var randomnum = Math.floor(Math.random() * 10) + 1 // Random number between 1 and 10
var score = document.getElementById("score")
var tscore = 10

// ✅ Function to check the guess
function Gus() {
    var num = Number(guessnum.value)
    if(randomnum == num) {
        console.log("YOU'RE RIGHT")
        result.textContent = "Right"
        alert("YOU WON......")
    } else {
        tscore = tscore - 1
        score.textContent = "Score:" + tscore
        result.textContent = "Wrong"
        alert("TRY AGAIN:)")
        console.log("YOU'RE WRONG")
    }
}
