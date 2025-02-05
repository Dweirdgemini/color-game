// Color options
const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', 
    '#FDCB6E', '#6C5CE7', '#A8E6CF'
];

// Game elements
const colorBox = document.querySelector('[data-testid="colorBox"]');
const colorOptions = document.querySelectorAll('[data-testid="colorOption"]');
const gameStatus = document.getElementById('gameStatus');
const scoreElement = document.getElementById('score');
const newGameButton = document.getElementById('newGameButton');

let correctColor, score = 0;

function initializeGame() {
    // Choose target color
    correctColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = correctColor;

    // Randomize color options
    const shuffledColors = [...colors].sort(() => 0.5 - Math.random());
    colorOptions.forEach((option, index) => {
        option.style.backgroundColor = shuffledColors[index];
        option.onclick = () => checkGuess(shuffledColors[index]);
    });

    // Reset status
    gameStatus.textContent = '';
}

function checkGuess(selectedColor) {
    if (selectedColor === correctColor) {
        gameStatus.textContent = 'Correct! 🎉';
        gameStatus.style.color = 'green';
        score++;
        scoreElement.textContent = score;
    } else {
        gameStatus.textContent = 'Wrong! Try again 😔';
        gameStatus.style.color = 'red';
    }

    // Start new round after a short delay
    setTimeout(initializeGame, 1500);
}

// Event listeners
newGameButton.onclick = () => {
    score = 0;
    scoreElement.textContent = score;
    initializeGame();
};

// Initialize first game
initializeGame();