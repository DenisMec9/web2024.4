function gravar(){
    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
 
    localStorage.setItem('nome', nome);
    localStorage.setItem('endereco', endereco);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);
 
    alert('Dados enviados com sucesso')
}
function exibir(){
    let nome = localStorage.getItem("nome");
/// buscando o localStorage o valor do campo nome e adicionar na variavel 'nome'
    let endereco = localStorage.getItem("endereco");
    let email = localStorage.getItem("email");
    let telefone = localStorage.getItem("telefone");
    
    if(nome && endereco && email && telefone){
        document.getElementById('dados-nome').querySelector('p').textContent = nome;
        /// adicionando o valor da variavel nome no campo 'P' da Div com id 'dados-nome'
        document.getElementById('dados-endereco').querySelector('p').textContent = endereco;
        document.getElementById('dados-email').querySelector('p').textContent = email;
        document.getElementById('dados-telefone').querySelector('p').textContent = telefone;
    } else {
        document.getElementById('dados-exibidos').innerHTML = '<p>Nenhum dado encontrado</p>'
    }
}
function enviar(){
    let nome = localStorage.getItem("nome");
    let endereco = localStorage.getItem("endereco");
    let email = localStorage.getItem("email");
    let telefone = localStorage.getItem("telefone");

    let data = "Nome: " + nome +"\n" + "Endereço:" + "\n" + "Email: " + "\n" + "Telefone" + telefone + "\n";
    const url = "https://api.whatsapp.com/send?phone=81988954430" + telefone + "&text" + encodeURIComponent(data);

    window .open(url, "_blank");    
}
