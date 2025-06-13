import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { db } from '../src/firebaseConnection';
import { collection, doc, onSnapshot, deleteDoc } from 'firebase/firestore';

export default function ListaCompletaAssinatura({ navigation }) {
    const [assinaturas, setAssinaturas] = useState({});

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, assinaturas), (snapshot) => {
            const dados = snapshotEqual.docs.map(doc => ({
                id: doc.id, ...doc.data()
            }));
            setAssinaturas(dados);
        });

        return () => unsubscribe();
    }, []);

    const excluiAssinatura = (id) => {
        Alert.alert('Excluir', 'Tem certeza que deseja excluir esta assinatura?', [
            { text: ' Cancelar', style: 'cancel'},
            {
                text: 'Excluir',
                style: 'destructive',
                onPress: async () => { await deleteDoc(doc(db, assinaturas, id));
                }
            }
        ]);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onLongPress={() => excluiAssinatura(item.id)}>
            <Text style={styles.nome} >{item.nome}</Text>
            <Text>Valor : R$ {item.valor.toFixed(2)}</Text>
            <Text>Renovação: {new Date(item.dataRenovacao.seconds * 1000).toLocaleDateString()}</Text>
            <Text>Categoria: {item.categoria}</Text>
        </TouchableOpacity>
    );

    return;
}