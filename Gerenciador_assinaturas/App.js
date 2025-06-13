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
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="AdicionarAssinatura" component={AdicionarAssinatura} />
        <Stack.Screen name="ListaCompletaAssinatura" component={ListaCompletaAssinatura} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}