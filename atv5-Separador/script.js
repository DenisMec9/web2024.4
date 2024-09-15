function separarLetras() {
    const wordInput = document.getElementById('wordInput').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    for (const letter of wordInput) {
        const letterDiv = document.createElement('div');
        letterDiv.className = 'letter';
        letterDiv.textContent = letter;
        resultDiv.appendChild(letterDiv);
    }
}
