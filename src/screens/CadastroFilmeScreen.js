import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { criarFilme } from "../services/firestore";

export default function CadastroFilmeScreen({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [ano, setAno] = useState("");
  const [nota, setNota] = useState("");
  const [descricao, setDescricao] = useState("");
  const [salvando, setSalvando] = useState(false);

  async function handleSalvar() {
    if (!titulo.trim()) {
      Alert.alert("Atenção", "Informe o título do filme.");
      return;
    }

    try {
      setSalvando(true);

      await criarFilme({
        titulo: titulo.trim(),
        genero: genero.trim(),
        ano: ano ? Number(ano) : null,
        nota: nota ? Number(nota.replace(",", ".")) : null,
        descricao: descricao.trim(),
      });

      Alert.alert("Sucesso", "Filme cadastrado com sucesso.");
      navigation.navigate("Home");
    } catch (erro) {
      Alert.alert(
        "Erro",
        erro.message || "Não foi possível cadastrar o filme.",
      );
    } finally {
      setSalvando(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Título *</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Ex: Interestelar"
      />

      <Text style={styles.label}>Gênero</Text>
      <TextInput
        style={styles.input}
        value={genero}
        onChangeText={setGenero}
        placeholder="Ex: Ficção científica"
      />

      <Text style={styles.label}>Ano</Text>
      <TextInput
        style={styles.input}
        value={ano}
        onChangeText={setAno}
        placeholder="Ex: 2014"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Nota</Text>
      <TextInput
        style={styles.input}
        value={nota}
        onChangeText={setNota}
        placeholder="Ex: 8.7"
        keyboardType="decimal-pad"
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Descrição do filme"
        multiline
        textAlignVertical="top"
      />

      <TouchableOpacity
        style={[styles.botao, salvando && styles.botaoDesabilitado]}
        onPress={handleSalvar}
        disabled={salvando}
      >
        <Text style={styles.textoBotao}>
          {salvando ? "Salvando..." : "Cadastrar filme"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  textArea: {
    minHeight: 110,
  },
  botao: {
    backgroundColor: "#1f6feb",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 4,
  },
  botaoDesabilitado: {
    opacity: 0.6,
  },
  textoBotao: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
