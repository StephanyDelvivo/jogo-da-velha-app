import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'


const Jogada = (props) => {
    const jogada = props.jogada
    return (
        <TouchableOpacity style={styles.jogada} onPress={() => props.voltarJogada(props.indice)}>
            <Text>{jogada[0] || '_'} | {jogada[1] || '_'} | {jogada[2] || '_'}</Text>
            <Text>{jogada[3] || '_'} | {jogada[4] || '_'} | {jogada[5] || '_'}</Text>
            <Text>{jogada[6] || '_'} | {jogada[7] || '_'} | {jogada[8] || '_'}</Text>
        </TouchableOpacity>
    )
}
export default Jogada

const styles = StyleSheet.create({
    jogada: {
        borderWidth: 1,
        borderColor: '#fff',
        borderStyle: 'solid',
        padding: 1,
    }
});