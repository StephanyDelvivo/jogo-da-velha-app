import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import Celula from './Celula'

const Jogo = () => {
    const [vezJogador, setVezJogador] = useState('x')
    const [estadoTabuleiro, setEstadoTabuleiro] = useState(Array(9).fill(null))
    const [historicoJogadas, setHistoricoJogadas] = useState([])

    function fimJogo(tab) {
        if (tab[0] && tab[0] == tab[1] && tab[0] == tab[2]) return tab[0]
        if (tab[3] && tab[3] == tab[4] && tab[3] == tab[5]) return tab[3]
        if (tab[6] && tab[6] == tab[7] && tab[6] == tab[8]) return tab[6]
        if (tab[0] && tab[0] == tab[3] && tab[0] == tab[6]) return tab[0]
        if (tab[1] && tab[1] == tab[4] && tab[1] == tab[7]) return tab[1]
        if (tab[2] && tab[2] == tab[5] && tab[2] == tab[8]) return tab[2]
        if (tab[0] && tab[0] == tab[4] && tab[0] == tab[8]) return tab[0]
        if (tab[2] && tab[2] == tab[4] && tab[2] == tab[6]) return tab[2]

        if (tab[0] != null && tab[1] != null && tab[2] != null &&
            tab[3] != null && tab[4] != null && tab[5] != null &&
            tab[6] != null && tab[7] != null && tab[8] != null) {
            return 'velha'
        }

        if (!tab.includes(null)) return 'velha'

        return null
    }
    const reiniciar = () => {
        setVezJogador('x');
        setEstadoTabuleiro(Array(9).fill(null))
        setHistoricoJogadas([])
    }

    function handleClickCelula(i) {
        if (!estadoTabuleiro[i] && !fimJogo(estadoTabuleiro)) {
            let vez = vezJogador
            let jogada = [...estadoTabuleiro]
            jogada[i] = vez
            vez === 'x' ? vez = 'o' : vez = 'x'

            const vencedor = fimJogo(jogada)
            if (vencedor) alert(`O jogo acabou tendo como vencedor ${vencedor}`)

            let historico = [...historicoJogadas]
            historico.push(jogada)
            setVezJogador(vez)
            setEstadoTabuleiro(jogada)
            setHistoricoJogadas(historico)
        }
    }

    const voltarJogada = (ind) => {
        //Se eu estou voltando para uma jogada par
        if (ind % 2 == 0) {
            setVezJogador('o')
        } else {
            setVezJogador('x')
        }

        const tab = [...historicoJogadas[ind]]
        setEstadoTabuleiro(tab)

        const historico = historicoJogadas.slice(0, ind + 1)
        setHistoricoJogadas(historico)
    }

    return (
        <View style={styles.jogo}>
            <Cabecalho vez={vezJogador} />
            <View style={styles.tabuleiro}>
                <View style={styles.linhaTabuleiro}>
                    <Celula valor={estadoTabuleiro[0]}
                        click={() => handleClickCelula(0)} />
                    <Celula valor={estadoTabuleiro[1]}
                        click={() => handleClickCelula(1)} />
                    <Celula valor={estadoTabuleiro[2]}
                        click={() => handleClickCelula(2)} />
                </View>
                <View style={styles.linhaTabuleiro}>
                    <Celula valor={estadoTabuleiro[3]}
                        click={() => handleClickCelula(3)} />
                    <Celula valor={estadoTabuleiro[4]}
                        click={() => handleClickCelula(4)} />
                    <Celula valor={estadoTabuleiro[5]}
                        click={() => handleClickCelula(5)} />
                </View>
                <View style={styles.linhaTabuleiro}>
                    <Celula valor={estadoTabuleiro[6]}
                        click={() => handleClickCelula(6)} />
                    <Celula valor={estadoTabuleiro[7]}
                        click={() => handleClickCelula(7)} />
                    <Celula valor={estadoTabuleiro[8]}
                        click={() => handleClickCelula(8)} />
                </View>
                <TouchableOpacity style={styles.btnReinicar} onPress={reiniciar}>
                    <Text>Reiniciar</Text>
                </TouchableOpacity>
            </View>
            <Rodape jogadas={historicoJogadas} voltarJogada={voltarJogada} />
        </View>
    )
}
export default Jogo

const styles = StyleSheet.create({
    jogo: {
        margin: 2,
        padding: 10,
        flex: 1,
        backgroundColor: '#ccc',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#000',
        borderRadius: 20,
    },
    tabuleiro: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linhaTabuleiro: {
        flexDirection: 'row',
    },
    btnReiniciar: {
        borderRadius: 10,
        backgroundColor: '#eee',
        padding: 10,
        marginTop: 10,
    }
});