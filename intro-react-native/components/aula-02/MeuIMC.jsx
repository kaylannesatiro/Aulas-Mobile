import {View, Text, TextInput, Button} from "react-native";
import { use, useState } from "react"; //gancho pro estado do componente, um código de fora do componente
import estilos from "./estilos";

const MeuIMC = () => {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    function calcularIMC() {
        setResultado (peso / altura**2);
    }

    return (
        <View style={estilos.container}>
            <View style={estilos.header}>
                <Text style={estilos.texto}>
                    Calculadora IMC
                </Text>
            </View>

            <View style={estilos.form}>
                <View style={estilos.formGroup}>
                    <Text style={estilos.texto}>
                        Peso:
                    </Text>
                    <TextInput 
                        style={estilos.textoInput}
                        keyboardType="numeric" //deixa o teclado numerico
                        placeholder="Digite seu peso"
                        onChangeText = {(x) => setPeso(x)}
                    />
                </View>

                <View style={estilos.formGroup}>
                    <Text style={estilos.texto}>
                        Altura:
                    </Text>
                    <TextInput 
                        style={estilos.textoInput}
                        keyboardType="numeric" //deixa o teclado numerico
                        placeholder="Digite sua altura"
                        onChangeText = {(x) => setAltura(x)}
                    />
                </View>
            </View>

            <View style={estilos.form}>
                <Text style={estilos.texto}>
                    Resultado: {resultado}
                </Text>
            </View>

            <View>
                <Button 
                    title="CALCULAR"
                    onPress={() => calcularIMC()}
                />
            </View>
        </View>
    )
}

export default MeuIMC;