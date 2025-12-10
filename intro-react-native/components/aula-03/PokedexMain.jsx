const PATH_API = "http://172.25.213.44:3000/api/pokemon/listarPokemons";
import {View, StyleSheet, FlatList} from "react-native";
import {use, useState} from "react";
import { useEffect } from "react";


const PokedexMain = () => {
    const [pokemons, setPokemons] = useState([])

    //emulando um construtor
    useEffect(
        () => {
            fetch(PATH_API)
            .then(
                (res) => {
                    return res.json()
                }
            )
            .then(
                (json) => {
                    setPokemons(json)
                }
            )
            .catch(error => console.log(error))
        },
        []
    )

    return (
        <View style={estilos.container}>
            <FlatList
                data = {pokemons}
                renderItem = {
                    ({item}) => {
                        return <PokedexCard 
                            nome ={item.nome}
                            imagem = {item.imagem}
                            id = {item.id}
                        />
                    }
                }
                numColumns={3}
                contentContainerStyle={estilos.lista}
            />
        </View>
    )
}

const estilos = StyleSheet.create ({
    container: {

    },

    lista: {
        alignItems: "center",
        gap: 3
    }
})

export default PokedexMain;