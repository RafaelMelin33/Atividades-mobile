import {View, StyleSheet, TextInput, Button, Alert, Text, Pressable, Image} from "react-native";
import {useState} from "react";

export default function App(){
    const [salario, setSalario] = useState('');
    const [horasExtras, setHorasExtras] = useState('');
    const [precoHoraExtra, setPrecoHoraExtra] = useState('');
    const [salarioFinal, setSalarioFinal] = useState('');
    const [desconto,setDesconto] = useState('');
    return(
        <View style={css.fundo}>
            <View style={css.div}>
                <Image source={require('./assets/dinheiro.png')} style={css.imagem} />
                <TextInput style={css.input} placeholder={"Digite seu salário"} keyboardType="decimal-pad" onChangeText={setSalario} value={salario}/>
                <TextInput style={css.input} placeholder={"Digite suas horas extras"} keyboardType="decimal-pad" onChangeText={setHorasExtras} value={horasExtras}/>
                <TextInput style={css.input} placeholder={"Digite o preço da hora extra"} keyboardType="decimal-pad" onChangeText={setPrecoHoraExtra} value={precoHoraExtra}/>
                <Pressable
                    style={css.botao}
                    onPress={() => {
                        var salarioF = Number(salario)+(Number(horasExtras)*Number(precoHoraExtra));
                        if(salarioF > 5000){
                            var desconto = salarioF*0.1
                            setDesconto(desconto)
                            salarioF = salarioF-desconto
                        }
                        setSalarioFinal(salarioF);
                    }}
                >
                    <Text style={[css.branco, css.textoCentralizado]}>Calcular</Text>
                </Pressable>
                {salarioFinal && (
                    <>
                        <Text style={[css.textoCentralizado]}>Salário total: R$ {(salarioFinal)}</Text>
                        <Text style={[css.textoCentralizado]}>Desconto de 10%: R$ {(desconto)}</Text>
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