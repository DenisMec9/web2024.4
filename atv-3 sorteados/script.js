function transformarEmJSON() {
    const mat = document.getElementById('mat').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value;

    // Validação dos campos
    if (!mat || !nome || !idade || !cpf) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação da idade
    if (!Number.isInteger(Number(idade))) {
        alert('Idade deve ser um valor inteiro.');
        return;
    }

    // Criar objeto aluno
    const aluno = {
        mat: mat,
        nome: nome,
        idade: parseInt(idade, 10), // Converter idade para número inteiro
        cpf: cpf
    };

    // Exibir o objeto aluno em formato JSON
    document.getElementById('resultado').textContent = JSON.stringify(aluno, null, 2);
}

