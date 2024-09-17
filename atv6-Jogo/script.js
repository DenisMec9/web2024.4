// Lista de palavras
const palavras = [
    "abacaxi", "anel", "amigo", "ave", "abacate",
    "bola", "bala", "banho", "bau", "banco",
    "casa", "cachorro", "carro", "cafe", "cama",
    "dado", "dedo", "doce", "dia", "dente",
    "elefante", "estrela", "escola", "elo", "escada",
    "faca", "festa", "fogo", "foca", "fada",
    "gato", "galo", "gelo", "goma", "ganso",
    "helicoptero", "hipopotamo", "hotel", "harpa", "horta",
    "ilha", "iglu", "iris", "indio", "ima",
    "janela", "jarra", "jogo", "jumento", "joaninha",
    "ketchup", "kiwi", "karate", "koala", "kamikaze",
    "leao", "lago", "lua", "lima", "livro",
    "maca", "mala", "muro", "mapa", "mesa",
    "neve", "ninho", "navio", "nuvem", "nota",
    "olho", "ovo", "onda", "ouro", "orelha",
    "pato", "peixe", "pipoca", "pato", "perna",
    "quilo", "quadro", "queijo", "quina", "queda",
    "raio", "rosa", "rede", "rato", "roupa",
    "sol", "sapo", "seda", "sabao", "sapato",
    "tigre", "touro", "teto", "tela", "tesoura",
    "uva", "urso", "urna", "uniao", "umidade",
    "vaca", "verao", "vento", "vela", "vidro",
    "webcam", "whisky", "waffle", "walker", "wifi",
    "xale", "xadrez", "xerox", "xarope", "xampu",
    "yoga", "yakisoba", "yogurte", "yeti", "yuppie",
    "zebra", "zoologico", "zumbi", "zero", "zagueiro"
];

let palavraSelecionada = palavras[Math.floor(Math.random() * palavras.length)];
let tentativasErradas = 0;
let acertos = [];

// Inicializa a palavra com underscores
function initPalavra() {
    const palavraContainer = document.getElementById('palavra');
    palavraContainer.innerHTML = palavraSelecionada.split('').map(letra => acertos.includes(letra) ? letra : '_').join(' ');
}

// Cria os botões de letras
function criarBotoesLetras() {
    const botoesContainer = document.getElementById('botoes-letras');
    botoesContainer.innerHTML = '';
    for (let i = 0; i < 26; i++) {
        const letra = String.fromCharCode(65 + i).toLowerCase();
        const botao = document.createElement('button');
        botao.textContent = letra;
        botao.onclick = () => tentarLetra(letra);
        botoesContainer.appendChild(botao);
    }
}

// Lógica de tentativa de letras
function tentarLetra(letra) {
    if (palavraSelecionada.includes(letra)) {
        acertos.push(letra);
    } else {
        tentativasErradas++;
        desenharForca(tentativasErradas);
    }
    initPalavra();
    verificarFimDeJogo();
}

// Desenha a forca à medida que o jogador erra
function desenharForca(erros) {
    const canvas = document.getElementById('canvas');
    const contexto = canvas.getContext('2d');
    contexto.lineWidth = 2;
    contexto.strokeStyle = '#000';

    if (erros === 1) {
        // Base da forca
        contexto.moveTo(10, 190);
        contexto.lineTo(190, 190);
        contexto.stroke();
    } else if (erros === 2) {
        // Poste da forca
        contexto.moveTo(50, 190);
        contexto.lineTo(50, 10);
        contexto.stroke();
    } else if (erros === 3) {
        // Braço da forca
        contexto.moveTo(50, 10);
        contexto.lineTo(150, 10);
        contexto.stroke();
    } else if (erros === 4) {
        // Corda
        contexto.moveTo(150, 10);
        contexto.lineTo(150, 30);
        contexto.stroke();
    } else if (erros === 5) {
        // Cabeça
        contexto.beginPath();
        contexto.arc(150, 50, 20, 0, Math.PI * 2);
        contexto.stroke();
    } else if (erros === 6) {
        // Corpo
        contexto.moveTo(150, 70);
        contexto.lineTo(150, 130);
        contexto.stroke();
    } else if (erros === 7) {
        // Braço esquerdo
        contexto.moveTo(150, 80);
        contexto.lineTo(120, 100);
        contexto.stroke();
    } else if (erros === 8) {
        // Braço direito
        contexto.moveTo(150, 80);
        contexto.lineTo(180, 100);
        contexto.stroke();
    } else if (erros === 9) {
        // Perna esquerda
        contexto.moveTo(150, 130);
        contexto.lineTo(120, 160);
        contexto.stroke();
    } else if (erros === 10) {
        // Perna direita
        contexto.moveTo(150, 130);
        contexto.lineTo(180, 160);
        contexto.stroke();
    }
}

// Verifica se o jogo terminou
function verificarFimDeJogo() {
    const palavraContainer = document.getElementById('palavra');
    if (!palavraContainer.textContent.includes('_')) {
        alert('Você ganhou!');
        reiniciarJogo();
    } else if (tentativasErradas >= 10) {
        alert('Você perdeu! A palavra era: ' + palavraSelecionada);
        reiniciarJogo();
    }
}

// Reinicia o jogo
function reiniciarJogo() {
    palavraSelecionada = palavras[Math.floor(Math.random() * palavras.length)];
    tentativasErradas = 0;
    acertos = [];
    const canvas = document.getElementById('canvas');
    const contexto = canvas.getContext('2d');
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    initPalavra();
    criarBotoesLetras();
}

// Inicializa o jogo
initPalavra();
criarBotoesLetras();
