import { View, Text, StyleSheet } from 'react-native'


const Cabecalho = (props) => {
    return (
        <View style={styles.cabecalho}>
            <Text style={styles.titulo}>Jogo da Velha</Text>
            <Text style={styles.descricao}>Vez de Jogador: {props.vez}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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