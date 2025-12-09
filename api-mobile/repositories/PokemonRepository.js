const PokemonModel = require('../models/PokemonModel');

//emulando uma base de dados
const pokemons = [
    new PokemonModel({id: 1, nome: "Bulbasaur", habilidades:["planta", "água"]}),
    new PokemonModel({id: 2, nome: "Ivysaur", habilidades:["planta", "água"]}),
    new PokemonModel({id: 3, nome: "Venusaur", habilidades:["planta", "água"]}),
    new PokemonModel({id: 4, nome: "Charmander", habilidades:["fogo"]}),
    new PokemonModel({id: 5, nome: "Charmeleon", habilidades:["fogo"]}),
    new PokemonModel({id: 6, nome: "Charizard", habilidades:["fogo", "voador"]}),
    new PokemonModel({id: 7, nome: "Squirtle", habilidades:["água"]}),
    new PokemonModel({id: 8, nome: "Wartortle", habilidades:["água"]}),
    new PokemonModel({id: 9, nome: "Blastoise", habilidades:["água"]}),
    new PokemonModel({id: 10, nome: "Caterpie", habilidades:["inseto"]}),
]
//fim do emulando


//é resposável em oferecer as funções que acessam a tela Pokemon
class PokemonRepository {
    async findAll() {
        return Promise.resolve(pokemons)
    }

    //poderiam ter vários outros serviços de acesso a base de dados aqui
}

module.exports = PokemonRepository;