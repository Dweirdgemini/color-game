let targetColor = "";
let score = 0;

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateColorOptions(target) {
    const options = [target];
    while (options.length < 6) {
        const newColor = generateRandomColor();
        if (!options.includes(newColor)) {
            options.push(newColor);
        }
    }
    return options.sort(() => Math.random() - 0.5);
}

function startNewGame() {
    targetColor = generateRandomColor();
    document.getElementById("colorBox").style.backgroundColor = targetColor;
    document.getElementById("gameStatus").textContent = "";

    const colorOptions = generateColorOptions(targetColor);
    const optionsContainer = document.getElementById("colorOptions");
    optionsContainer.innerHTML = "";

    colorOptions.forEach(color => {
        const button = document.createElement("button");
        button.className = "option";
        button.style.backgroundColor = color;
        button.onclick = () => handleColorSelect(color);
        optionsContainer.appendChild(button);
    });
}

function handleColorSelect(selectedColor) {
    const statusElement = document.getElementById("gameStatus");

    if (selectedColor === targetColor) {
        score++;
        document.getElementById("score").textContent = score;
        statusElement.textContent = "Correct! Well done!";
        statusElement.style.color = "green";
        setTimeout(startNewGame, 1500);
    } else {
        statusElement.textContent = "Wrong guess, try again!";
        statusElement.style.color = "red";
    }
}

startNewGame();
