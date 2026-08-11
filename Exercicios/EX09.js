import {View, StyleSheet, TextInput, Button, Alert, Text, Pressable, Image} from "react-native";
import {useState} from "react";

export default function App(){
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [profissao, setProfissao] = useState('');
    return(
        <View style={css.fundo}>
            <View style={css.div}>
                <TextInput style={css.input}
                           placeholder={'Digite seu nome'}
                           value={nome}
                           onChangeText={setNome}
                />
                <TextInput style={css.input}
                           placeholder={'Digite sua idade'}
                           value={idade}
                           onChangeText={setIdade}
                           keyboardType="numeric"
                />
                <TextInput style={css.input}
                           placeholder={'Digite sua profissão'}
                           value={profissao}
                           onChangeText={setProfissao}
                />
                {nome && idade && profissao && (
                    <>
                        <Text style={css.textoCentralizado}>Ficha pessoal:</Text>
                        <Text>Nome: {nome}</Text>
                        <Text>Idade: {idade} ({idade<18 ? ('Menor de idade') : idade >= 18 && idade < 60 ? ('Maior de idade') : idade >= 60 ? ('Idade Lais') : ('Idade inexistente')})</Text>
                        <Text>Profissão: {profissao}</Text>
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
        justifyContent:'space-evenly',
        marginTop:10,
        width:'100%',
    },
})