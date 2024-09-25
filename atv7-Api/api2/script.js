// Função para buscar uma paleta de cores da API Colormind
function getPalette() {
    const paletteContainer = document.getElementById('palette-container');
    const apiUrl = 'http://colormind.io/api/';
    const xhr = new XMLHttpRequest();

    xhr.open('POST', apiUrl, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            if (data && data.result) {
                // Limpa o contêiner antes de exibir novas cores
                paletteContainer.innerHTML = '';

                // Exibe as cores na tela
                data.result.forEach(function(color) {
                    const colorDiv = document.createElement('div');
                    const rgb = 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')';
                    colorDiv.classList.add('color-box');
                    colorDiv.style.backgroundColor = rgb;
                    paletteContainer.appendChild(colorDiv);
                });

                // Exibe o botão "Próxima Paleta" após carregar a paleta
                document.getElementById('next-btn').style.display = 'inline-block';
            } else {
                paletteContainer.innerHTML = 'Erro ao carregar paleta de cores.';
            }
        } else {
            paletteContainer.innerHTML = 'Erro ao carregar paleta de cores.';
        }
    };

    // Envia a requisição com o modelo "default"
    xhr.send('{"model":"default"}');
}

// Função para carregar uma nova paleta ao clicar no botão
document.getElementById('next-btn').addEventListener('click', function() {
    getPalette();
});

// Carrega a primeira paleta ao iniciar a página
getPalette();
