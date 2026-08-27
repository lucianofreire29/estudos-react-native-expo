import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import { CartProvider } from "./src/contexts/CartContext";
import HomeScreen from "./src/screens/HomeScreen";
import DetalheScreen from "./src/screens/DetalheScreen";
import CarrinhoScreen from "./src/screens/CarrinhoScreen";
import CadastroFilmeScreen from "./src/screens/CadastroFilmeScreen";
import EditarFilmeScreen from "./src/screens/EditarFilmeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import CadastroUsuarioScreen from "./src/screens/CadastroUsuarioScreen";

const Stack = createNativeStackNavigator();

function Rotas() {
  const { usuario, carregando } = useAuth();

  if (carregando) {
    return (
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!usuario) {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="CadastroUsuario"
          component={CadastroUsuarioScreen}
          options={{ title: "Criar conta" }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Filmes" }}
      />
      <Stack.Screen
        name="Detalhe"
        component={DetalheScreen}
        options={{ title: "Detalhes do filme" }}
      />
      <Stack.Screen
        name="Carrinho"
        component={CarrinhoScreen}
        options={{ title: "Carrinho" }}
      />
      <Stack.Screen
        name="CadastroFilme"
        component={CadastroFilmeScreen}
        options={{ title: "Cadastrar filme" }}
      />
      <Stack.Screen
        name="EditarFilme"
        component={EditarFilmeScreen}
        options={{ title: "Editar filme" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <Rotas />
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
}
