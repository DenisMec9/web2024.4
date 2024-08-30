document.getElementById('gerarNumero').onclick = function() {
    // Gera um número aleatório entre 1 e 100
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    // Exibe o número no elemento com id "resultado"
    document.getElementById('resultado').textContent = 'Número Sorteado: ' + numeroAleatorio;
};