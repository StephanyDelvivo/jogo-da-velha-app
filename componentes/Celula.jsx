import React from 'react'
import { TouchableOpacity, StyleSheet, useWindowDimensions, Text } from 'react-native'


const Celula = (props) => {
	const { height, width } = useWindowDimensions();
	const retrato = height > width
    const larguraCelula =  retrato ? (width / 4) : (width / 8)
	return(
		<TouchableOpacity onPress={props.click}
            style={[styles.celula, {height: larguraCelula, width: larguraCelula} ]}>
            <Text style={{fontSize: larguraCelula / 2 }}>{props.valor}</Text>
        </TouchableOpacity>
	)	
}
export default Celula

const styles = StyleSheet.create({
	celula: {
		borderWidth: 2,
		borderColor: '#000',
		borderStyle: 'solid',
		backgroundColor: '#fff',
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	}
})