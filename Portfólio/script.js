let combination = generateCombination();
let attempts = [];

function generateCombination() {
    let digits = [];
    while (digits.length < 4) {
        let num = Math.floor(Math.random() * 10);
        if (!digits.includes(num)) {
            digits.push(num);
        }
    }
    return digits.join('');
}

function checkGuess() {
    const guess = document.getElementById('guess').value;
    if (guess.length !== 4 || new Set(guess).size !== guess.length) {
        alert('Digite uma combinação válida de 4 dígitos diferentes.');
        return;
    }
    
    const result = compareGuesses(guess, combination);
    attempts.unshift(`Tentativa: ${guess} - Resultado: ${result}`);
    document.getElementById('guess').value = '';
    updateAttempts();
}

function compareGuesses(guess, combination) {
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < 4; i++) {
        if (guess[i] === combination[i]) {
            bulls++;
        } else if (combination.includes(guess[i])) {
            cows++;
        }
    }
    return `${bulls} Bulls, ${cows} Cows`;
}

function updateAttempts() {
    const attemptsDiv = document.getElementById('attempts');
    attemptsDiv.innerHTML = attempts.map(attempt => `<p>${attempt}</p>`).join('');
}

function showCombination() {
    alert(`A combinação é: ${combination}`);
}
