import { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useAuth } from "../contexts/AuthContext";

export default function LoginScreen({ navigation }) {
  const { entrar } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);

  async function handleEntrar() {
    if (!email.trim() || !senha) {
      setErro("Preencha e-mail e senha.");
      return;
    }

    try {
      setCarregando(true);
      setErro(null);
      await entrar(email.trim(), senha);
    } catch (e) {
      setErro("E-mail ou senha inválidos.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Entrar</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      <TouchableOpacity
        style={[styles.botao, carregando && styles.botaoDesabilitado]}
        onPress={handleEntrar}
        disabled={carregando}
      >
        {carregando ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text style={styles.textoBotao}>Entrar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate("CadastroUsuario")}
      >
        <Text style={styles.textoLink}>Ainda não tem conta? Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#ffffff",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  erro: {
    marginBottom: 12,
    textAlign: "center",
  },
  botao: {
    backgroundColor: "#1f6feb",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoDesabilitado: {
    opacity: 0.6,
  },
  textoBotao: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  link: {
    marginTop: 18,
    alignItems: "center",
  },
  textoLink: {
    fontSize: 15,
  },
});
