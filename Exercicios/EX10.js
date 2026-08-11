import {View, StyleSheet, TextInput, Button, Alert, Text, Pressable, Image} from "react-native";
import {useState} from "react";

export default function App(){
    const [email, setEmail] = useState('admin@gmail.com');
    const [emailDigitado, setEmailDigitado] = useState('');
    const [senha, setSenha] = useState('Rafael@1');
    const [senhaDigitado, setSenhaDigitado] = useState('');
    const [tentativas, setTentativas] = useState(0);
    return(
        <View style={css.fundo}>
            <View style={css.div}>
                <TextInput style={css.input}
                           placeholder={'Digite o email'}
                           value={emailDigitado}
                           onChangeText={setEmailDigitado}
                />
                <TextInput style={css.input}
                           placeholder={'Digite a senha'}
                           value={senhaDigitado}
                           onChangeText={setSenhaDigitado}
                />
                <Pressable style={[css.botao]}
                           onPress={() => {
                               if(tentativas >= 3){
                                   Alert.alert('Tangão errou 3 vezes')
                                   setTentativas(0);
                               } else {
                                   (emailDigitado === email && senhaDigitado === senha) ? Alert.alert('Logou')
                                       : setTentativas(tentativas+1); Alert.alert('Algo errado')
                               }
                           }}
                >
                    <Text style={[css.branco, css.textoCentralizado]}>Logar</Text>
                </Pressable>
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