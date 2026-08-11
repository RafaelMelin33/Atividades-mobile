import {View, StyleSheet, TextInput, Button, Alert, Text, Pressable, Image} from "react-native";
import {useState} from "react";

export default function App(){
    const [valor, setValor] = useState('');
    const [guardado, setGuardado] = useState('');
    const [economiaMes, setEconomiaMes] = useState('');
    const [meses, setMeses] = useState('');
    const [quantoFalta, setQuantoFalta] = useState('');
    return(
        <View style={css.fundo}>
            <View style={css.div}>
                <Image source={require('./assets/dinheiro.png')} style={css.imagem} />
                <TextInput style={css.input}
                           placeholder={"Digite o valor que deseja juntar"}
                           keyboardType="decimal-pad"
                           onChangeText={setValor}
                           value={valor}/>
                <TextInput style={css.input}
                           placeholder={"Digite o valor que já tem guardado"}
                           keyboardType="decimal-pad"
                           onChangeText={setGuardado}
                           value={guardado}/>
                <TextInput style={css.input}
                           placeholder={"Digite o quando consegue economizar por mês"}
                           keyboardType="decimal-pad"
                           onChangeText={setEconomiaMes}
                           value={economiaMes}/>
                <Pressable
                    style={css.botao}
                    onPress={() => {
                        if (((valor-guardado)/economiaMes) < 1){
                            setMeses(1)
                        } else{
                            setMeses((valor-guardado)/economiaMes)
                        }
                        setQuantoFalta(valor-guardado)
                    }}
                >
                    <Text style={[css.textoCentralizado]}>Calcular</Text>
                </Pressable>
                {quantoFalta && (
                    <>
                        <Text style={[css.textoCentralizado, css.branco]}>Valor que falta: R$ {quantoFalta}</Text>
                        <Text style={[css.textoCentralizado, css.branco]}>Quantos meses para juntar: {meses}</Text>
                    </>
                )}
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    fundo:{
        backgroundColor:'white',
        flex: 1,
        paddingVertical: 30,
        justifyContent:'center',
        alignItems: 'center',
    },
    imagem:{
        width: 100,
        height: 100,
        marginHorizontal: 'auto',
    },
    div:{
        backgroundColor:'#4A7C59',
        width:'90%',
        padding: 20,
        borderRadius:10,
    },
    input:{
        borderWidth: 2,
        borderColor:'black',
        borderRadius: 10,
        marginVertical: 10,
        paddingLeft: 10,
        color: 'white',
    },
    botao:{
        backgroundColor:'white',
        padding:10,
        borderRadius:10,
    },
    textoCentralizado:{
        textAlign:'center',
    },
    branco:{
        color:'white',
    }
})