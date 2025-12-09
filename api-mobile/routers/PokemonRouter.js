const express = require("express");

//importando aquele objeto do serviço já criado:
const pokemonService = require("../services/PokemonService");

const router = express.Router();

router.get(
    "/listarPokemons",

    async (request, response) => {
        try {
            const pokemonsDTOs = await pokemonService.listarTodos();

            response.json(pokemonsDTOs);
        }

        catch (error) {
            console.error(error);

            response.status(500).json({"erro": "Erro no Servidor"});
        } 
    }
)

module.exports = router;

