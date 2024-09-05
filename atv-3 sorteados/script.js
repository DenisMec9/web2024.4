function transformarEmJSON() {
    const mat = document.getElementById('mat').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value;

   
    if (!mat || !nome || !idade || !cpf) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    
    if (!Number.isInteger(Number(idade))) {
        alert('Idade deve ser um valor inteiro.');
        return;
    }

    
    const aluno = {
        mat: mat,
        nome: nome,
        idade: parseInt(idade, 10), 
        cpf: cpf
    };

    
    document.getElementById('resultado').textContent = JSON.stringify(aluno, null, 2);
}

