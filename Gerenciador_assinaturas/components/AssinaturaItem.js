import { View, Text, StyleSheet } from "react-native";

function AssinaturaItem({ item }) {
  return (
    <View>
      <View style={styles.itemContainer}>
        <View style={styles.itemText}>
          <Text>{item.nome}</Text>
        </View>
        <View style={styles.itemText}>
          <Text>
            {data.getDate() +
              "/" +
              (data.getMonth() + 1) +
              "/" +
              data.getFullYear()}
          </Text>
        </View>
        <View style={styles.itemText}>
          <Text>R$ {item.valor}</Text>
        </View>
      </View>
    </View>
  );
}

export default AssinaturaItem;

const styles = StyleSheet.create({});
