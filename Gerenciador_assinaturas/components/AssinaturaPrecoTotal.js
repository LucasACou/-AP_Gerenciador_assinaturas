import { View, Text, StyleSheet } from "react-native";

function AssinaturaPrecoTotal({ assinaturas, periodo }) {
  const somaAssinaturas = assinaturas.reduce((total, assinaturas) => {
    return total + assinaturas.valor;
  }, 0);

  return (
    <View style={styles}>
      <Text>Resumo Financeiro</Text>
      <Text style={styles}>{periodo}</Text>
      <Text style={styles}>R$ {somaAssinaturas.toFixed(2)}</Text>
    </View>
  );
}

export default AssinaturaPrecoTotal;

const styles = StyleSheet.create({});
