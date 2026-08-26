import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CartProvider } from './src/contexts/CartContext';
import HomeScreen from './src/screens/HomeScreen';
import DetalheScreen from './src/screens/DetalheScreen';
import CarrinhoScreen from './src/screens/CarrinhoScreen';
import CadastroFilmeScreen from './src/screens/CadastroFilmeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Filmes' }}
          />
          <Stack.Screen
            name="Detalhe"
            component={DetalheScreen}
            options={{ title: 'Detalhes do filme' }}
          />
          <Stack.Screen
            name="Carrinho"
            component={CarrinhoScreen}
            options={{ title: 'Carrinho' }}
          />
          <Stack.Screen
            name="CadastroFilme"
            component={CadastroFilmeScreen}
            options={{ title: 'Cadastrar filme' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
