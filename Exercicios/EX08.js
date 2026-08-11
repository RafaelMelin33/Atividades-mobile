import {View, StyleSheet, TextInput, Button, Alert, Text, Pressable, Image} from "react-native";
import {useState} from "react";

export default function App(){
    const [time1, setTime1] = useState('');
    const [pontos1, setPontos1] = useState(0);
    const [time2, setTime2] = useState('');
    const [pontos2, setPontos2] = useState(0);
    const [cartoesAmarelo1, setCartoesAmarelo1] = useState(0);
    const [cartoesAmarelo2, setCartoesAmarelo2] = useState(0);
    const [cartoesVermelho1, setCartoesVermelho1] = useState(0);
    const [cartoesVermelho2, setCartoesVermelho2] = useState(0);
    return(
        <View style={css.fundo}>
            <View style={css.div}>
                <View style={css.campo}>
                    <View style={css.lateraisCampo}>
                        <View style={css.meioCampo}>
                            <View style={[css.area, css.area1]}></View>
                            <View style={css.linha}></View>
                            <View style={css.bola}></View>
                            <View style={[css.area, css.area2]}></View>
                        </View>
                    </View>
                </View>
                <TextInput placeholder={'Digite o nome do time 1'}
                           value={time1}
                           onChangeText={setTime1}
                />
                <TextInput placeholder={'Digite o nome do time 2'}
                           value={time2}
                           onChangeText={setTime2}
                />
                <View style={css.placar}>
                    <View style={css.times}>
                        <Text style={[css.textoCentralizado, css.tamanho]}>{time1}</Text>
                        <Text style={css.textoCentralizado}>{pontos1}</Text>
                        <View style={[css.botoes]}>
                            <Pressable
                                style={[css.botaoAdd]}
                                onPress={() => {
                                    setPontos1(Number(pontos1)+1);
                                }}
                            >
                                <Text style={[css.branco, css.textoCentralizado]}>+</Text>
                            </Pressable>
                            <Pressable
                                style={[css.botaoSub]}
                                onPress={() => {
                                    if (pontos1 <= 0) {
                                        return
                                    }
                                    setPontos1(Number(pontos1)-1);
                                }}
                            >
                                <Text style={[css.branco, css.textoCentralizado]}>-</Text>
                            </Pressable>
                        </View>
                        <View style={css.cartoes}>

                            <Pressable
                                onPress={() => {
                                    if (cartoesAmarelo1 >= 1) {
                                        setCartoesVermelho1(cartoesVermelho1+1);
                                        setCartoesAmarelo1(0);
                                        if (cartoesVermelho1 >= 4) {
                                            Alert.alert(`Jogo encerrado por expulssões`)
                                        }
                                    } else setCartoesAmarelo1(cartoesAmarelo1+1);
                                }}
                            >
                                <View style={css.cartaoA}>
                                    <Text>{cartoesAmarelo1.toString()}</Text>
                                </View>
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    if (cartoesVermelho1 >= 4) {
                                        Alert.alert('Jogo encerrado por expulssões')
                                    } else setCartoesVermelho1(cartoesVermelho1+1);
                                }}
                            >
                                <View style={css.cartaoV}>
                                    <Text style={css.branco}>{cartoesVermelho1.toString()}</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={css.times}>
                        <Text style={[css.textoCentralizado, css.tamanho]}>{time2}</Text>
                        <Text style={css.textoCentralizado}>{pontos2}</Text>
                        <View style={[css.botoes]}>
                            <Pressable
                                style={[css.botaoAdd]}
                                onPress={() => {
                                    setPontos2(Number(pontos2)+1);
                                }}
                            >
                                <Text style={[css.branco, css.textoCentralizado]}>+</Text>
                            </Pressable>
                            <Pressable
                                style={[css.botaoSub]}
                                onPress={() => {
                                    if (pontos2 <= 0) {
                                        return
                                    }
                                    setPontos2(Number(pontos2)-1);
                                }}
                            >
                                <Text style={[css.branco, css.textoCentralizado]}>-</Text>
                            </Pressable>
                        </View>
                        <View style={css.cartoes}>

                            <Pressable
                                onPress={() => {
                                    if (cartoesAmarelo2 >= 1) {
                                        setCartoesVermelho2(cartoesVermelho2+1);
                                        setCartoesAmarelo2(0);
                                        if (cartoesVermelho2 >= 4) {
                                            Alert.alert(`Jogo encerrado por expulssões`)
                                        }
                                    } else setCartoesAmarelo2(cartoesAmarelo2+1);
                                }}
                            >
                                <View style={css.cartaoA}>
                                    <Text>{cartoesAmarelo2.toString()}</Text>
                                </View>
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    if (cartoesVermelho2 >= 4) {
                                        Alert.alert('Jogo encerrado por expulssões')
                                    } else setCartoesVermelho2(cartoesVermelho2+1);
                                }}
                            >
                                <View style={css.cartaoV}>
                                    <Text style={css.branco}>{cartoesVermelho2.toString()}</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <Text style={css.textoCentralizado}>
                    {pontos1 > pontos2 ? (`Time ${time1} está ganhando`):pontos2 > pontos1 ? (`Time ${time2} está ganhando`):('Jogo está empatado')}
                </Text>

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
    campo: {
        marginTop: 30,
        width: 200,
        height: 150,
        backgroundColor: "darkgreen",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    lateraisCampo: {
        width: 190,
        height: 140,
        backgroundColor: "white",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    meioCampo: {
        width: 180,
        height: 130,
        backgroundColor: "darkgreen",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    bola: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        // backgroundColor: "white",
        width: 50,
        height: 50,
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 5,
    },
    area: {
        width: 20,
        height: 80,
        borderColor: "white",
        borderWidth: 5,
    },
    area1: {
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translate(0, -50%)",
        borderLeftWidth: 0,
    },
    area2:{
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translate(0, -50%)",
        borderRightWidth: 0,
    },
    linha: {
        position: "absolute",
        left: "50%",
        top: 0,
        transform: "translate(-50%, 0)",
        width: 5,
        height:"100%",
        backgroundColor: "white",
    },
    placar:{
        flexDirection:'row',
        backgroundColor:'#fffffa',
        paddingVertical:20,
        borderRadius:20,
    },
    times:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    tamanho:{
        width:'100%',
    },
    cartoes:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-evenly',
        marginTop:20,
    },
    cartaoA:{
        width:40,
        height:60,
        backgroundColor:"#e8e800",
        justifyContent: 'center',
        alignItems:'center',
    },
    cartaoV:{
        width:40,
        height:60,
        backgroundColor:"red",
        justifyContent: 'center',
        alignItems:'center',
    },
})