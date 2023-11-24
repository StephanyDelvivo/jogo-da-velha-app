import React from 'react'
import { View, ScrollView, Text, StyleSheet, useWindowDimensions } from 'react-native'

import Jogada from './Jogada'

const Rodape = (props) => {
    const { height, width } = useWindowDimensions();
    const retrato = height > width
    const jogadas = props.jogadas.map(
        (jog, ind) =>
            <Jogada jogada={jog}
                indice={ind}
                voltarJogada={props.voltarJogada}
            />
    )
    return (
        <View style={retrato ? stylesRetrato.rodape : stylesPaisagem.rodape}>
            <Text style={retrato ? stylesRetrato.titulo : stylesPaisagem.titulo}>Histórico de jogadas:</Text>
            <ScrollView contentContainerStyle={retrato ? stylesRetrato.jogadas : stylesPaisagem.jogadas} horizontal={true}>
                {jogadas}
            </ScrollView>
        </View>
    )
}
export default Rodape

const stylesPaisagem = StyleSheet.create({
    rodape: {
        borderLeftWidth: 2,
        borderLeftColor: '#000',
        borderLeftStyle: 'solid',
        flex: 0.3,
    },
    titulo: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 15,
        marginLeft: 5
    },
    jogadas: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 10,
        marginLeft: 5
    }
});

const stylesRetrato = StyleSheet.create({
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