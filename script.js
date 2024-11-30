const searchCharacterButton = document.getElementById('searchCharacterButton');
const searchCharacterInput = document.getElementById('searchCharacterInput');
const characterCard = document.getElementById('characterCard');

searchCharacterButton.addEventListener('click', () => {
    const query = searchCharacterInput.value.trim().toLowerCase();
    if (!query) return;
    
    const url = `https://rickandmortyapi.com/api/character/${query}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Personaje no encontrado');
            }
            return response.json();
        })
        .then(data => {
            characterCard.style.display = 'block';

            document.getElementById('characterName').textContent = data.name;
            document.getElementById('characterImage').src = data.image;
            document.getElementById('characterStatus').textContent = 'Estado: ' + data.status;
            document.getElementById('characterSpecies').textContent = 'Especie: ' + data.species;
            document.getElementById('characterGender').textContent = 'Género: ' + data.gender;
            document.getElementById('characterOrigin').textContent = 'Origen: ' + data.origin.name;
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud:', error);
            alert(error.message);
            characterCard.style.display = 'none';
        });
});


const searchEpisodeButton = document.getElementById('searchEpisodeButton');
const searchEpisodeInput = document.getElementById('searchEpisodeInput');
const episodeCard = document.getElementById('episodeCard');

searchEpisodeButton.addEventListener('click', () => {
    const query = searchEpisodeInput.value.trim().toLowerCase();
    if (!query) return;

    const url = `https://rickandmortyapi.com/api/episode/${query}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Episodio no encontrado');
            }
            return response.json();
        })
        .then(data => {
            episodeCard.style.display = 'block';

            document.getElementById('episodeName').textContent = data.name;
            document.getElementById('episodeAirDate').textContent = 'Fecha de emisión: ' + data.air_date;
            document.getElementById('episodeCode').textContent = 'Código de Episodio: ' + data.episode;
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud:', error);
            alert(error.message);
            episodeCard.style.display = 'none';
        });
});


