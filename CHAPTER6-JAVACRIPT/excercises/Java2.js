const rgbDisplay = document.getElementById("rgbDisplay");
const choicesContainer = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const livesEl = document.getElementById("lives");
const scoreEl = document.getElementById("score");
const playAgainBtn = document.getElementById("playAgain");

let correctColor = "";
let lives = 3;
let score = 0;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function startGame() {
  choicesContainer.innerHTML = "";
  feedback.textContent = "";
  playAgainBtn.style.display = "none";

  correctColor = getRandomColor();
  rgbDisplay.textContent = correctColor;

  const correctIndex = Math.floor(Math.random() * 3);

  for (let i = 0; i < 3; i++) {
    const box = document.createElement("div");
    box.classList.add("color-box");
    const color = i === correctIndex ? correctColor : getRandomColor();
    box.style.backgroundColor = color;
    box.addEventListener("click", () => handleChoice(color));
    choicesContainer.appendChild(box);
  }
}

function handleChoice(selectedColor) {
  if (selectedColor === correctColor) {
    feedback.textContent = "Correct!";
    score++;
  } else {
    feedback.textContent = "Incorrect!";
    lives--;
  }

  scoreEl.textContent = score;
  livesEl.textContent = lives;

  if (lives === 0) {
    feedback.textContent = `Game Over! Final Score: ${score}`;
    playAgainBtn.style.display = "inline-block";
    choicesContainer.innerHTML = "";
  } else {
    setTimeout(startGame, 1000);
  }
}

playAgainBtn.addEventListener("click", () => {
  lives = 3;
  score = 0;
  livesEl.textContent = lives;
  scoreEl.textContent = score;
  startGame();
});

startGame();
