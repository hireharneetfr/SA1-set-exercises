// Selects HTML elements for easier reference
const rgbDisplay = document.getElementById("rgbDisplay");
const choicesContainer = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const livesEl = document.getElementById("lives");
const scoreEl = document.getElementById("score");
const playAgainBtn = document.getElementById("playAgain");

// Initialize game variables
let correctColor = "";
let lives = 3;
let score = 0;

// Function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // gets a random red value
  const g = Math.floor(Math.random() * 256); // gets a random green value
  const b = Math.floor(Math.random() * 256); // gets a random blue value
  return `rgb(${r}, ${g}, ${b})`;  // Return the RGB color as a string
}


// Function to start a new round of the game
function startGame() {
  choicesContainer.innerHTML = ""; // Clears previous color choices
  feedback.textContent = ""; // Clears feedback message
  playAgainBtn.style.display = "none";

  correctColor = getRandomColor(); // Set the correct color for this round
  rgbDisplay.textContent = correctColor; // Display the target RGB color  

  const correctIndex = Math.floor(Math.random() * 3);

 // Generate three color choices, one of which is correct
  for (let i = 0; i < 3; i++) {
    const box = document.createElement("div"); 
    box.classList.add("color-box");
    const color = i === correctIndex ? correctColor : getRandomColor();
    box.style.backgroundColor = color;
    box.addEventListener("click", () => handleChoice(color));
    choicesContainer.appendChild(box);
  }
}

// Function to handle the player's color choice
function handleChoice(selectedColor) {
  if (selectedColor === correctColor) { //If the answer picked is right
    feedback.textContent = "Correct!"; //Displays this message
    score++;
  } else { //If the answer picked is wrong
    feedback.textContent = "Incorrect!"; //Displays this message
    lives--;
  }

  scoreEl.textContent = score;
  livesEl.textContent = lives;

 // Check if the player has run out of lives
  if (lives === 0) {
    feedback.textContent = `Game Over! Final Score: ${score}`;
    playAgainBtn.style.display = "inline-block";
    choicesContainer.innerHTML = "";
  } else {
    setTimeout(startGame, 1000);
  }
}

// Event listener for the "Play Again" button
playAgainBtn.addEventListener("click", () => {
  lives = 3; // Resets lives to 3
  score = 0;   // Resets score to 0
  livesEl.textContent = lives;
  scoreEl.textContent = score;
  startGame(); // Starts a new game
});

// Initialize the game when the page loads
startGame();
