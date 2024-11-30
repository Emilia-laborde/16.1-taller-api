const buscarPersonajeBtn = document.getElementById('buscarPersonajeBtn');
const buscarPersonajeInput = document.getElementById('buscarPersonajeInput');
const characterCard = document.getElementById('characterCard')

buscarPersonajeBtn.addEventListener ('click', () => {
    const query = buscarPersonajeInput.value.trim().toLowerCase();
    if (!query) return;

    const url = `https://rickandmortyapi.com/api/character/${query}`;

    fetch(url)
        .then(response =>{
            if(!response.ok){
                throw new Error('Personaje no encontrado');
            }
            return response.json();
        })
        .then(data =>{
            characterCard.style.display = 'block';
            document.getElementById('characterName').textContent = data.name;
            document.getElementById('characterImage').src = data.image;
            document.getElementById('characterStatus').textContent = 'Estado: ' + data.status;
            document.getElementById('characterSpecies').textContent = 'Especie: ' + data.species;
            document.getElementById('characterGender').textContent = 'Género: ' + data.gender;
            document.getElementById('characterOrigin').textContent = 'Origen: ' + data.origin.name;
        })
        .catch(error => {
            console.error('Hubo un problema en la solicitud:', error);
            alert(error.message);
            characterCard.style.display = 'none';
        })
        
})