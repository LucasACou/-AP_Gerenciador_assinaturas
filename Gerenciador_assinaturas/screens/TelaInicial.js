import { useState, useContext, useEffect } from "react";
import { Button, View, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AssinaturaConteudo from "../components/AssinaturaConteudo";
import { AuthContext } from "../src/auth-context";

function TelaInicial() {
  const navigation = useNavigation();

  const { uid } = useContext(AuthContext);
  const [assinaturas, setAssinaturas] = useState([]);

  function adicionarPressHandler() {
    navigation.navigate("AdicionarAssinatura");
  }

  function listaPressHandler() {
    navigation.navigate("ListaCompletaAssinatura");
  }

  function filtrarVencimento(assinaturas) {
    const hoje = new Date();
    hoje.setDate(hoje.getDate());

    return assinaturas.filter((assinatura) => {
      return assinatura.data >= hoje;
    });
  }

  return (
    <View>
      <AssinaturaConteudo assinaturas={assinaturas} periodo={"Total"} />
      <Button title="Lista de Assinaturas" onPress={listaPressHandler}></Button>
      <Button
        title="Gerenciamento de Assinaturas"
        onPress={adicionarPressHandler}
      ></Button>
    </View>
  );
}

export default TelaInicial;

const styles = StyleSheet.create({});
