import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import DetalheScreen from './src/screens/DetalheScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
