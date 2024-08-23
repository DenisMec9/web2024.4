let total=0;

function adicionarNumero() {
    const numero= parseFloat(document.getElementById('numero').value);
    if (!isNaN(numero)){
        total += numero;
        document.getElementById('total').innerText = `somatório: ${total}`;
        document.getElementById('numero').value) = '';
    } else {
        alert('por favor, insira um número inteiro.');
    }
}