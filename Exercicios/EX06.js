import {View, StyleSheet, TextInput, Button, Alert, Text, Pressable, Image} from "react-native";
import {useState} from "react";

export default function App(){
    const [item1, setItem1] = useState({nome: 'Orelha esquerda do prescinotti', preco:30, quantidade:0});
    const [item2, setItem2] = useState({nome: 'Orelha direita do prescinotti', preco:40, quantidade:0});
    const [item3, setItem3] = useState({nome: 'Celular da Lais', preco:3200, quantidade:0});
    const [totalItens, setTotalItes] = useState(0);
    const [totalPreco, setTotalPreco] = useState(0);
    return(
        <View style={css.fundo}>
            <View style={css.div}>
                <Image source={require('./assets/carrinhoCompras.png')} style={css.imagem} />
                <View style={[css.item]}>
                    <Text>{item1.nome}</Text>
                    <Text>R$ {item1.preco}</Text>
                    <Text>Quantidade: {item1.quantidade}</Text>
                    <View style={[css.botoes]}>
                        <Pressable
                            style={[css.botaoAdd]}
                            onPress={() => {
                                setTotalItes(totalItens+1)
                                setTotalPreco(totalPreco + item1.preco)
                                setItem1({...item1, quantidade: item1.quantidade+1})
                            }}
                        >
                            <Text style={[css.branco, css.textoCentralizado]}>+</Text>
                        </Pressable>
                        <Pressable
                            style={[css.botaoSub]}
                            onPress={() => {
                                if (item1.quantidade <= 0) {
                                    return
                                } else{
                                    setTotalItes(totalItens-1)
                                    setTotalPreco(totalPreco - item1.preco)
                                    setItem1({...item1, quantidade: item1.quantidade-1})
                                }
                            }}
                        >
                            <Text style={[css.branco, css.textoCentralizado]}>-</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={[css.item]}>
                    <Text>{item2.nome}</Text>
                    <Text>R$ {item2.preco}</Text>
                    <Text>Quantidade: {item2.quantidade}</Text>
                    <View style={[css.botoes]}>
                        <Pressable
                            style={[css.botaoAdd]}
                            onPress={() => {
                                setTotalItes(totalItens+1)
                                setTotalPreco(totalPreco + item2.preco)
                                setItem2({...item2, quantidade: item2.quantidade+1})
                            }}
                        >
                            <Text style={[css.branco, css.textoCentralizado]}>+</Text>
                        </Pressable>
                        <Pressable
                            style={[css.botaoSub]}
                            onPress={() => {
                                if (item2.quantidade <= 0) {
                                    return
                                } else{
                                    setTotalItes(totalItens-1)
                                    setTotalPreco(totalPreco - item2.preco)
                                    setItem2({...item2, quantidade: item2.quantidade-1})
                                }
                            }}
                        >
                            <Text style={[css.branco, css.textoCentralizado]}>-</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={[css.item]}>
                    <Text>{item3.nome}</Text>
                    <Text>R$ {item3.preco}</Text>
                    <Text>Quantidade: {item3.quantidade}</Text>
                    <View style={[css.botoes]}>
                        <Pressable
                            style={[css.botaoAdd]}
                            onPress={() => {
                                setTotalItes(totalItens+1)
                                setTotalPreco(totalPreco + item3.preco)
                                setItem3({...item3, quantidade: item3.quantidade+1})
                            }}
                        >
                            <Text style={[css.branco, css.textoCentralizado]}>+</Text>
                        </Pressable>
                        <Pressable
                            style={[css.botaoSub]}
                            onPress={() => {
                                if (item3.quantidade <= 0) {
                                    return
                                } else{
                                    setTotalItes(totalItens - 1)
                                    setTotalPreco(totalPreco - item3.preco)
                                    setItem3({...item3, quantidade: item3.quantidade-1})
                                }
                            }}
                        >
                            <Text style={[css.branco, css.textoCentralizado]}>-</Text>
                        </Pressable>
                    </View>
                </View>
                <Text style={[css.textoCentralizado]}>Total de itens: {totalItens}</Text>
                <Text style={[css.textoCentralizado]}>Preço total: R$ {totalPreco}</Text>
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
    item:{
        backgroundColor:'white',
        padding:5,
        borderRadius:10,
        marginVertical:10,
    }
})