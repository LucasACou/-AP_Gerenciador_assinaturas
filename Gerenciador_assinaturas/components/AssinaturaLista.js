import React from "react";
import { FlatList, Text } from "react-native";
import AssinaturaItem from "./AssinaturaItem";

export default function AssinaturaLista({ dados, onItemPress }) {
    return (
        <FlatList
            data={dados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <AssinaturaItem item={item} onPress={onItemPress} />
            )}
            ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhuma assinatura encontrada.</Text>}
        />
    );
}