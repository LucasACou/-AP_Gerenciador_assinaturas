import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function AssinaturaConteudo({ nome, valor, dataRenovacao, categoria }) {
  const dataFormatada = new Date(dataRenovacao.seconds * 1000).toLocaleDateString();

  return (
    <View>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.texto}>Valor: R$ {valor.toFixed(2)}</Text>
      <Text style={styles.texto}>Renovação: {dataFormatada}</Text>
      <Text style={styles.texto}>Categoria: {categoria}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  texto: {
    fontSize: 14,
    color: '#444',
  },
});