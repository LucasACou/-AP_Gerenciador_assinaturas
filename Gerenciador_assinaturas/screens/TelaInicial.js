import { useState, useContext, useEffect } from 'react'
import { Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AssinaturaItem from '../components/AssinaturaItem';
import AssinaturaPrecoTotal from '../components/AssinaturaPrecoTotal';

function TelaInicial() {

    const navigation = useNavigation();

    const { uid } = useContext(AuthContext)
    const [assinaturas, setAssinaturas] = useState([]);

    function adicionarPressHandler() {
        navigation.navigate('AdicionarAssinatura')
    }

    function listaPressHandler() {
        navigation.navigate('ListaCompletaAssinatura')
    }

    function filtrarVencimento(assinaturas) {
        const hoje = new Date();
        hoje.setDate(hoje.getDate());

        return assinaturas.filter(assinatura => {
            return assinatura.data >= hoje
        })
    }

    return (
        <View>
            <AssinaturaPrecoTotal  despesas={despesas} periodo={periodo}/>
            <Pressable onPress={listaPressHandler}></Pressable>
            <Pressable onPress={adicionarPressHandler}></Pressable>
        </View>

    )
}

export default TelaInicial;