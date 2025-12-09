const PATH_IMAGEM = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"  

class PokemonModel {
    constructor({id, nome, habilidades}) {

        //varoáveis de instância (objeto em memória)
        this.id = id;
        this.nome = nome;
        this.habilidades = habilidades;
        this.imagem = `${PATH_IMAGEM}${this.id}.png`;

        //variaveis de instancia que NÃO INTERESSAM ao cliente final
        this.dataDeCriacao = new Date();
        this.ativo = true;
    }
}

module.exports = PokemonModel; 
//Exportando a classe no back usando o ExpressJS