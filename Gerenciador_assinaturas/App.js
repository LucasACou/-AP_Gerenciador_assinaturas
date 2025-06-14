import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './screens/TelaInicial';
import AdicionarAssinatura from './screens/AdicionarAssinatura';
import ListaCompletaAssinatura from './screens/ListaCompletaAssinatura';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="Inicial" component={TelaInicial} />
        <Stack.Screen name="Adicionar" component={AdicionarAssinatura} />
        <Stack.Screen name="Assinaturas" component={ListaCompletaAssinatura} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}