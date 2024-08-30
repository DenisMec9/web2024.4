//let somatorio=0;
//const btAdic = document.getElementById("btAdic");
//const inputNum= document.getElementById("inputNum");
//const inputSoma= document.getElementById("btAdic");

//function adicionarNumero() {
    //const numero= parseFloat(document.getElementById('numero').value);
    //if (!isNaN(numero)){
       // somatorio += numero;
    //} else {
      //  alert('por favor, insira um número inteiro.');
   // }
//}
const btAdic = document.getElementById("btAdic");
const inputNum = document.getElementById("inputNum");
const inputSoma = document.getElementById("inputSoma");
const inputMedia = document.getElementById("inputMedia");

let somatorio = 0;
let media = somatorio / Número;

btAdic.onclick = () => {
  let num = parseInt(inputNum.value);
  if (isNaN(num)) {
    alert("Digite um número inteiro!");
    return;
  }

  somatorio += num;
  inputSoma.value = somatorio;
  inputNum.value = "";
  inputNum.focus();
};