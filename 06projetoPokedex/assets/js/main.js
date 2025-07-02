
const pokemonListName = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const limit = 10
let offset = 0
const maxRecodsPagination = 151


function loadMoreButtonItems(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => 
        `
    <li class="pokemon ${pokemon.type} ">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
    
        <div class="detail">
            <ol class="types" >

                ${pokemon.types
                  .map((type) => `<li class="type ${type} ">${type}</li>`)
                  .join("")}

            </ol>

            <img src=" ${pokemon.photo} " alt="${pokemon.name}">
        </div>
    </li>

    `
    ).join("");
    pokemonListName.innerHTML += newHtml;
  });
}

loadMoreButtonItems( offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRegisterNextPage = offset + limit

    if(qtdRegisterNextPage >= maxRecodsPagination) {
        const newLimit = maxRecodsPagination - offset 
        loadMoreButtonItems(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadMoreButtonItems(offset, limit)
    }



})




