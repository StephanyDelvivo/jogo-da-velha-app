import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'

import Jogada from './Jogada'

const Rodape = (props) => {
    const jogadas = props.jogadas.map(
        (jog, ind) =>
            <Jogada jogada={jog}
                indice={ind}
                voltarJogada={props.voltarJogada}
            />
    )
    return (
        <View style={styles.rodape}>
            <Text style={styles.titulo}>Histórico de jogadas:</Text>
            <ScrollView contentContainerStyle={styles.jogadas} horizontal={true}>
                {jogadas}
            </ScrollView>
        </View>
    )
}
export default Rodape

const styles = StyleSheet.create({
    rodape: {
        borderTopWidth: 2,
        borderTopColor: '#000',
        borderTopStyle: 'solid',
        flex: 0.25,
    },
    titulo: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 15,
    },
    jogadas: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    }
});