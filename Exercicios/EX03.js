import {View, StyleSheet, TextInput, Button, Alert, Text, Pressable, Image} from "react-native";
import {useState} from "react";

export default function App(){
    const [valor, setValor] = useState('');
    const [valorDesconto, setValorDesconto] = useState('');
    return(
        <View style={css.fundo}>
            <View style={css.div}>
                <Image source={require('./assets/dinheiro.png')} style={css.imagem} />
                <TextInput style={css.input}
                           placeholder={"Digite o valor da compra"}
                           keyboardType="decimal-pad"
                           onChangeText={setValor}
                           value={valor}/>
                <Pressable
                    style={css.botao}
                    onPress={() => {
                        var preco = valor
                        if(Number(preco) >= 100 && preco < 300){
                            preco *= 0.95
                        } else if (Number(preco) >= 300 && preco < 500){
                            preco *= 0.9
                        } else if (Number(preco) >= 500){
                            preco *= 0.85
                        }
                        setValorDesconto(preco);
                    }}
                >
                    <Text style={[css.branco, css.textoCentralizado]}>Ver desconto</Text>
                </Pressable>
                {valorDesconto && (
                    <>
                        <Text style={[css.textoCentralizado]}>Valor com desconto: R$ {(valorDesconto)}</Text>
                    </>
                )}
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    fundo:{
        backgroundColor:'#4A90E2',
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
        backgroundColor:'#D8D8D8',
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
        color: 'black',
    },
    botao:{
        backgroundColor:'#4A7C59',
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