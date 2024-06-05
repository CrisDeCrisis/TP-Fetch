const containerPokedex = document.getElementById('containerPokedex');

const fetchPokemon = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await response.json();
        const pokemon = {
            name: data.name,
            id: data.id,
            image: data.sprites.front_default
        };
        displayPokemon(pokemon);
    } catch (error) {
        console.log(error);
    }
};

const displayPokemon = (pokemon) => {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    const paddedId = String(pokemon.id).padStart(3, '0');
    pokemonElement.innerHTML = `
    <section class="card text-center">
        <div class="img-container">
            <img src="${pokemon.image}" alt="${pokemon.name}" />
        </div>
        <h3>${pokemon.name}</h3>
        <p>#${paddedId}</p>
    </section>
`;
    containerPokedex.appendChild(pokemonElement);
};

for (let i = 1; i <= 151; i++) {
    fetchPokemon(i);
}