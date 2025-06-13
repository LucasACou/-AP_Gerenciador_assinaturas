import { View } from "react-native";
import AssinaturaLista from "./AssinaturaLista";
import AssinaturaPrecoTotal from "./AssinaturaPrecoTotal";

function AssinaturaConteudo({ assinaturas, periodo }) {
  return (
    <View>
      <AssinaturaPrecoTotal assinaturas={assinaturas} periodo={periodo} />
      <AssinaturaLista assinaturas={assinaturas} />
    </View>
  );
}

export default AssinaturaConteudo;
