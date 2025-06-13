import { View, Text, StyleSheet } from 'react-native';

function AssinaturaPrecoTotal({despesas, periodo}){
    const somaAssinaturas = despesas.reduce((total, despesa) => {
        return total + despesa.valor;
    }, 0);


    return (
    
        <View style={styles}>
            <View>Resumo Financeiro</View>
            <Text style={styles}>{periodo}</Text>
            <Text style={styles}>R$ {somaAssinaturas.toFixed(2)}</Text>
        </View>
    );
}

export default AssinaturaPrecoTotal;

const styles = StyleSheet.create({
    
})