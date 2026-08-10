import {View, StyleSheet, TextInput, Button, Alert, Text, Pressable, Image} from "react-native";
import {useState} from "react";

export default function App(){
    const [distancia, setDistancia] = useState('');
    const [consumo, setConsumo] = useState('');
    const [preco, setPreco] = useState('');
    const [custoTotal,setCustoTotal] = useState('');
    const [custo100Km, setCusto100Km] = useState('');
    const [litros, setLitros] = useState('');
    return(
        <View style={css.fundo}>
            <View style={css.div}>
                <Image source={require('./assets/aviao.png')} style={css.imagem} />
                <TextInput style={css.input} placeholder={"Digite a distância da viagem"} onChangeText={setDistancia} value={distancia}/>
                <TextInput style={css.input} placeholder={"Digite o consumo médio km/L"} onChangeText={setConsumo} value={consumo}/>
                <TextInput style={css.input} placeholder={"Digite o preço do combustível"} onChangeText={setPreco} value={preco}/>
                <Pressable
                    style={css.botao}
                    onPress={() => {
                        var custoT = Number(distancia)/Number(consumo)*Number(preco);
                        setCustoTotal(custoT);
                        var custo100 = 100/Number(consumo)*Number(preco);
                        setCusto100Km(custo100);
                        var litro = Number(distancia)/Number(consumo);
                        setLitros(litro)
                    }}
                >
                    <Text style={[css.branco, css.textoCentralizado]}>Calcular</Text>
                </Pressable>
                {custoTotal && (
                    <>
                        <Text style={[css.branco, css.textoCentralizado]}>Custo Total: R$ {Number(custoTotal)}</Text>
                        <Text style={[css.branco, css.textoCentralizado]}>Litros: {Number(litros)}L</Text>
                        <Text style={[css.branco, css.textoCentralizado]}>Custo para cada 100 Km: {custo100Km}</Text>
                    </>
                )}
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    fundo:{
        backgroundColor:'#F2A154',
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
        backgroundColor:'#2A4B7C',
        width:'90%',
        padding: 20,
        borderRadius:10,
    },
    input:{
        borderWidth: 2,
        borderColor:'white',
        borderRadius: 10,
        marginVertical: 10,
        paddingLeft: 10,
        color: 'white',
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