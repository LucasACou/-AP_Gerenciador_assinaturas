import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { db } from "../src/firebaseConnection";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import AssinaturaLista from "../components/AssinaturaLista";
import AssinaturaPrecoTotal from "../components/AssinaturaPrecoTotal";

export default function TelaInicial() {
  const [assinaturas, setAssinaturas] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const q = query(collection(db, 'assinaturas'), orderBy('dataRenovacao'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAssinaturas(lista);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <AssinaturaPrecoTotal dados={assinaturas} />

      <Text style={styles.subtitulo}>Próximas Assinaturas:</Text>
      <AssinaturaLista
        dados={assinaturas.slice(0, 5)}
        onItemPress={(item) => navigation.navigate('Adicionar', { assinatura: item})}
      />

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Adicionar')}>
          <Text style={styles.botaoTexto}>+ Nova Assinatura</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoSecundario} onPress={() => navigation.navigate('Assinaturas')}>
          <Text style={styles.botaoTexto}>Ver Todas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  subtitulo: { fontSize: 16, marginBottom: 10 },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  nome: { fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  botoes: { marginTop: 20 },
  botao: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  botaoSecundario: {
    backgroundColor: '#10b981',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold'
  }
});