import {View, StyleSheet, TextInput, Button, Alert, Text, Pressable, Image} from "react-native";
import {useState} from "react";

export default function App(){
    const [nomeProduto, setNomeProduto] = useState('');
    const [estoqueProduto, setEstoqueProduto] = useState(0);
    const [totalItens, setTotalItes] = useState(0);
    const [totalPreco, setTotalPreco] = useState(0);
    return(
        <View style={css.fundo}>
            <View style={css.div}>
                <Image source={require('./assets/carrinhoCompras.png')} style={css.imagem} />
                <TextInput placeholder={'Digite o nome do produto'}
                           value={nomeProduto}
                           onChangeText={setNomeProduto}
                />
                <TextInput placeholder={'Digite o estoque do produto'}
                           value={Number(estoqueProduto)}
                           onChangeText={setEstoqueProduto}
                />
                <View style={[css.botoes]}>
                    <Pressable
                        style={[css.botaoAdd]}
                        onPress={() => {
                            setEstoqueProduto(Number(estoqueProduto)+1);
                        }}
                    >
                        <Text style={[css.branco, css.textoCentralizado]}>+</Text>
                    </Pressable>
                    <Pressable
                        style={[css.botaoSub]}
                        onPress={() => {
                            if (estoqueProduto <= 0) {
                                Alert.alert('Não há mais produtos em estoque')
                                return
                            }
                            if (estoqueProduto <= 5) {
                                Alert.alert('Produto está acabando')
                            }
                            setEstoqueProduto(Number(estoqueProduto)-1);
                        }}
                    >
                        <Text style={[css.branco, css.textoCentralizado]}>-</Text>
                    </Pressable>
                </View>
                <Text style={[css.textoCentralizado]}>Nome do produto: {nomeProduto}</Text>
                <Text style={[css.textoCentralizado]}>Estoque do produto: {estoqueProduto}</Text>
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
    },
    botaoAdd:{
        backgroundColor:'green',
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
    },
    botaoSub:{
        backgroundColor:'red',
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
    },
    botoes:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10,
    },

})