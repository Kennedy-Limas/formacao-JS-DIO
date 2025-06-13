function convertPokemonTypesToli(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}



function convertPokemonToList(pokemon) {
    return`
    <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
    
        <div class="detail">
            <ol class="types" >

                ${convertPokemonTypesToli(pokemon.types).join('')}

            </ol>

            <img src=" ${pokemon.sprites.other.dream_world.front_default} " alt="${pokemon.name}">
        </div>
    </li>

    `;
}

const pokemonListName = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

        const newHtml = pokemons.map(convertPokemonToList).join('')  
        pokemonListName.innerHTML = newHtml 


        //O  código acima substitui esse trecho para reduzir linhas de código e utilizar funções especificas
        // const listItems = []

        // for (let i = 0; i < pokemons.length; i++) {
        //     const pokemon = pokemons[i];    
        //     listItems.push(convertPokemonToList(pokemon))
        // }
        // console.log(listItems)

    })



