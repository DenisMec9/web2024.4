const API_TOKEN = 'seu_token_aqui';
 
        
        async function fetchPlayerData(playerTag) {
            const url = `https://api.clashroyale.com/v1/players/%23${playerTag}`;
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${API_TOKEN}`
                }
            });
 
            if (response.ok) {
                const playerData = await response.json();
                displayPlayerData(playerData);
            } else {
                document.getElementById('player-info').innerText = 'Erro ao buscar dados do jogador.';
            }
        }
 
       
        function displayPlayerData(data) {
            const playerInfoDiv = document.getElementById('player-info');
            playerInfoDiv.innerHTML = `
<h2>${data.name}</h2>
<p>Tag: ${data.tag}</p>
<p>Nível: ${data.expLevel}</p>
<p>Troféus: ${data.trophies}</p>
            `;
        }
 
     
        fetchPlayerData('2PP'); 