import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { db } from '../src/firebaseConnection';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function AdicionarAssinatura({ navigation }) {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [dataRenovacao, setDataRenovacao] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleAdicionar = async () => {
        if (!nome || !valor || !dataRenovacao || !categoria) {
            Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
            return;
        }

        try {
            await addDoc(collection(db, 'assinaturas'), {
                nome,
                valor: parseFloat(valor),
                dataRenovacao: Timestamp.fromDate(new Date(dataRenovacao)),
                categoria,
                criadoEm: Timestamp.now()
            });

            Alert.alert('Sucesso', 'Assinatura adicionada com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.error('Erro ao adicionar:', error);
            Alert.alert('Erro', 'Não foi possível adicionar a assinatura.');
          }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome da Assinatura *</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} />
            
            <Text style ={styles.label}>Valor Mensal (R$) *</Text>
            <TextInput style={styles.input} value={valor} onChangeText={setValor} keyboardType='numeric' />

            <Text style ={styles.label}>Data da Próxima Renovação (AAAA-MM-DD) *</Text>
            <TextInput style={styles.input} value={dataRenovacao} onChangeText={setDataRenovacao} placeholder='2025-06-30' />

            <Text style ={styles.label}>Categoria *</Text>
            <TextInput style={styles.input} value={categoria} onChangeText={setCategoria} placeholder='Ex: Streaming' />

            <Button title="Adicionar Assinatura" onPress={handleAdicionar} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    label: { fontWeight: 'bold', marginTop: 15 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginTop: 5,
        borderRadius: 5
    }
});