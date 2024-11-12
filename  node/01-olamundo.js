function ehprimo (n) {
    let qtdDivisores = 0;
    for (let i = 1; i<= n; ++1 ){
        if (n % i==0){
            ++qtdDivisores;

        }

    } 
    return qtdDivisores == 2;
}
let resposta ="2"
for (let i= 3; i<= 100; ++i){
    if (ehprimo(i)) {
        resposta +=", "+ i;
    }
}
console.log(resposta);
