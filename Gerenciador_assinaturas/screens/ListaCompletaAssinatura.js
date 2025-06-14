import React, { useEffect, useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { db } from '../src/firebaseConnection';
import { collection, doc, onSnapshot, deleteDoc } from 'firebase/firestore';
import AssinaturaLista from '../components/AssinaturaLista';

export default function ListaCompletaAssinatura({ navigation }) {
    const [assinaturas, setAssinaturas] = useState([])

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'assinaturas'), (snapshot) => {
            const dados = snapshot.docs.map(doc => ({
                id: doc.id, 
                ...doc.data()
            }));
            setAssinaturas(dados);
        });

        return () => unsubscribe();
    }, []);

    const excluiAssinatura = (id) => {
        Alert.alert('Excluir', 'Tem certeza que deseja excluir esta assinatura?', [
            { text: 'Cancelar', style: 'cancel'},
            {
                text: 'Excluir',
                style: 'destructive',
                onPress: async () => { 
                    await deleteDoc(doc(db, 'assinaturas', id));
                }
            }
        ]);
    };

    return (
        <View style={styles.container}>
            <AssinaturaLista
                dados={assinaturas}
                onItemPress={(item) => navigation.navigate('Adicionar', { assinatura: item })}
                onItemLongPress={(item) => excluiAssinatura(item.id)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 15},
});