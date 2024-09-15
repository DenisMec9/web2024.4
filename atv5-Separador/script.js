function separarPalavra() {
    const inputWord = document.getElementById('inputWord').value;
    const output = document.getElementById('output');
    output.innerHTML = ''; // Limpa o conteúdo anterior

    for (let i = 0; i < inputWord.length; i++) {
        const letra = document.createElement('div');
        letra.className = 'letter';
        letra.textContent = inputWord[i];
        output.appendChild(letra);
    }
}
