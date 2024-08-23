let somatorio=0;
const btAdic = document.getElementById("btAdic");
const inputNum= document.getElementById("inputNum");
const inputSoma= document.getElementById("btAdic");

function adicionarNumero() {
    const numero= parseFloat(document.getElementById('numero').value);
    if (!isNaN(numero)){
        somatorio += numero;
    } else {
        alert('por favor, insira um número inteiro.');
    }
}