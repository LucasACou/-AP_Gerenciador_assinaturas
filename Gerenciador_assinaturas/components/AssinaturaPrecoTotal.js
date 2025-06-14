import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AssinaturaPrecoTotal({ dados }) {
  const total = dados.reduce((sum, item) => sum + parseFloat(item.valor || 0), 0).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Total Estimado: R$ {total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#dbeafe',
    borderRadius: 8,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
});