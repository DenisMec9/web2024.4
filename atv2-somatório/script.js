let somatorio=0;

function adicionarNumero() {
    const numero= parseFloat(document.getElementById('numero').value);
    if (!isNaN(numero)){
        somatorio += numero;
        document.getElementById('total').innerText = `somatório: ${somatorio}`;
        document.getElementById('numero').value ='';
    } else {
        alert('por favor, insira um número inteiro.');
    }
}