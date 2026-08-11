import {View, StyleSheet, TextInput, Button, Alert, Text, Pressable, Image} from "react-native";
import {useState} from "react";

export default function App(){
    const [peso, setPeso] = useState('');
    const [aguaDia, setAguaDia] = useState('');
    const [copos, setCopos] = useState(0);
    const [aguaConsumida, setAguaConsumida] = useState('');
    const [quantoFalta, setQuantoFalta] = useState('');
    return(
        <View style={css.fundo}>
            <View style={css.div}>
                <Image source={require('./assets/agua.png')} style={css.imagem} />
                <TextInput style={css.input}
                           placeholder={"Digite seu peso em KG"}
                           keyboardType="decimal-pad"
                           onChangeText={setPeso}
                           value={peso}/>
                <Text style={[css.textoCentralizado]}>Número de copos de água tomados: {copos}</Text>
                <Pressable
                    style={[css.adicionar, css.botao]}
                    onPress={() => {
                        setCopos(Number(copos)+1)
                        setAguaConsumida(Number(copos)*250)
                        if (aguaDia){
                            if (peso >= 1000) var aguaD = Number(peso)*.035
                            else var aguaD = Number(peso)*35
                        }
                        if (quantoFalta){
                            var aguaC = Number(copos)*250
                            if (aguaD >= aguaC) setQuantoFalta(aguaD-aguaC)
                            else setQuantoFalta(0)
                        }
                    }}
                >
                    <Text style={[css.branco, css.textoCentralizado]}>Adicionar copo</Text>
                </Pressable>
                <Pressable
                    style={css.botao}
                    onPress={() => {
                        var aguaC = aguaConsumida
                        if (peso >= 1000){
                            var aguaD = Number(peso)*.035
                            setAguaDia(aguaD)
                        } else{
                            var aguaD = Number(peso)*35
                            setAguaDia(aguaD)
                        }
                        if (aguaD >= aguaC){
                            setQuantoFalta(aguaD-aguaC)
                        } else{
                            setQuantoFalta(0)
                        }
                    }}
                >
                    <Text style={[css.branco, css.textoCentralizado]}>Calcular</Text>
                </Pressable>

                {quantoFalta >= 0 && aguaDia && (
                    <>
                        <Text style={[css.textoCentralizado]}>Meta de água por dia: {aguaDia.toString()} ml</Text>
                        <Text style={[css.textoCentralizado]}>Água consumida: {aguaConsumida.toString()} ml</Text>
                        <Text style={[css.textoCentralizado]}>Quanto falta para a meta: {quantoFalta.toString()} ml</Text>
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
    adicionar:{
        marginBottom: 10,
    }
})