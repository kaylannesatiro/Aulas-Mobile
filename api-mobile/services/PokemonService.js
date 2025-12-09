const PokemonRepository = require('../repositories/PokemonRepository');
const PokemonDTO = require('../dtos/PokemonDTO');


//faz o mapeamento dos models do repository para os dtos
//interface que o cliente tem interesse
class PokemonService {
    constructor() {
        this.pokemonRepository = new PokemonRepository();
    }

    async listarTodos() {
        const pokemons = await this.pokemonRepository.findAll();

        const PokemonsDTOs = pokemons.map(
            (pokemonModel) => {
                return new PokemonDTO(pokemonModel);
            }
        )

        return PokemonsDTOs;
    }
}


//criando e mandando só o objeto do serviço em vez da classe:
module.exports = new PokemonService();