import {View, StyleSheet, TextInput, Button, Alert, Text, DevMenu} from "react-native";
import {useState} from "react";

export default function App(){
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState('');
    return (
        <View style={css.centraliza}>
            <TextInput placeholder={'Digite um número'}
                       value={num1}
                       onChangeText={setNum1}
            />
            <TextInput placeholder={'Digite outro número'}
                       value={num2}
                       onChangeText={setNum2}
            />
            <Button title="Somar"
                onPress={() => {
                var total = Number(num1) + Number(num2);
                setResultado(`O resultado da soma é ` + total.toString());
            }}/>
            <Text>{resultado}</Text>
        </View>
    )
}

const css = StyleSheet.create({
    centraliza:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})