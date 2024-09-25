let currentPage = 0;
const limit = 10; 

async function getAnimeList(page) {
    const animeContainer = document.getElementById('anime-container');
    const apiUrl = `https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=${limit}&page[offset]=${page * limit}`;

    try {
        animeContainer.innerHTML = 'Carregando...';

        const response = await fetch(apiUrl);
        const data = await response.json();

        
        animeContainer.innerHTML = '';

        const animes = data.data;
        animes.forEach(anime => {
            const animeDiv = document.createElement('div');
            animeDiv.classList.add('anime');

           
            animeDiv.innerHTML = `
                <img src="${anime.attributes.posterImage.medium}" alt="${anime.attributes.canonicalTitle}">
                <h3>${anime.attributes.canonicalTitle}</h3>
                <p>Popularidade: ${anime.attributes.popularityRank}</p>
            `;

            animeContainer.appendChild(animeDiv);
        });
        
    } catch (error) {
        animeContainer.innerHTML = 'Erro ao carregar animes. Tente novamente.';
    }
}


document.getElementById('next-btn').addEventListener('click', () => {
    currentPage++;
    getAnimeList(currentPage);
});

getAnimeList(currentPage);
