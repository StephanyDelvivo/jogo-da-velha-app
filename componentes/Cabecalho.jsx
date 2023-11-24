import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'


const Cabecalho = (props) => {
    const { height, width } = useWindowDimensions();
    const retrato = height > width
    return (
        <View style={retrato ? stylesRetrato.cabecalho : stylesPaisagem.cabecalho}>
            <Text style={retrato ? stylesRetrato.titulo : stylesPaisagem.titulo}>Jogo da Velha</Text>
            <Text style={retrato ? stylesRetrato.descricao : stylesPaisagem.descricao}>Vez de Jogador: {props.vez}</Text>
        </View>
    )
}

const stylesPaisagem = StyleSheet.create({
    cabecalho: {
        borderRightWidth: 2,
        borderRightColor: '#000',
        borderRightStyle: 'solid',
        flex: 0.25
    },
    titulo: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    descricao: {
        fontSize: 16,
    }
})

const stylesRetrato = StyleSheet.create({
    cabecalho: {
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        borderBottomStyle: 'solid',
        flex: 0.15,
    },
    titulo: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    descricao: {
        fontSize: 16,
    }
})

export default Cabecalho