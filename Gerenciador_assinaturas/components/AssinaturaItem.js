import React from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AssinaturaConteudo from "./AssinaturaConteudo";
import { db } from '../src/firebaseConnection';
import { doc, deleteDoc } from 'firebase/firestore';

export default function AssinaturaItem({ item, onPress, onLongPress }) {
  const excluiAssinatura = () => {
    Alert.alert('Excluir', 'Deseja excluir esta assinatura?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          await deleteDoc(doc(db, 'assinaturas', item.id));
        },
      },
    ]);
  };

  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => onPress(item)} 
      onLongPress={() => {
        if (onLongPress) {
          onLongPress(item)
        } else {
          excluiAssinatura()
        }
      }}
    >
      <AssinaturaConteudo
        nome={item.nome}
        valor={item.valor}
        dataRenovacao={item.dataRenovacao}
        categoria={item.categoria}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eaeaea',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});