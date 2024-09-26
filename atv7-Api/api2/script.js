// Seleciona o botão e o container onde a piada será exibida
const jokeBtn = document.getElementById('joke-btn');
const jokeContainer = document.getElementById('joke-container');

// Adiciona o evento de clique no botão
jokeBtn.addEventListener('click', generateJoke);

// Função para buscar uma piada da API e exibi-la
async function generateJoke() {
    const apiUrl = 'https://geek-jokes.sameerkumar.website/api?format=json';

    try {
        const response = await fetch(apiUrl); // Faz a requisição à API
        if (response.ok) {
            const data = await response.json(); // Converte a resposta em JSON
            jokeContainer.textContent = data.joke; // Exibe a piada na tela
        } else {
            jokeContainer.textContent = 'Erro ao obter a piada. Tente novamente mais tarde!'; // Em caso de erro na API
        }
    } catch (error) {
        jokeContainer.textContent = 'Erro de conexão. Verifique sua internet.'; // Em caso de erro de rede
        console.error('Erro:', error); // Exibe o erro no console para debug
    }
}

