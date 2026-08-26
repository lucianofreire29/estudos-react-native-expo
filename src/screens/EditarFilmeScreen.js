import { useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { atualizarFilme } from "../services/firestore";

export default function EditarFilmeScreen({ route, navigation }) {
  const { filme } = route.params;

  const [titulo, setTitulo] = useState(filme.titulo ?? "");
  const [genero, setGenero] = useState(filme.genero ?? "");
  const [ano, setAno] = useState(String(filme.ano ?? ""));
  const [nota, setNota] = useState(String(filme.nota ?? ""));
  const [descricao, setDescricao] = useState(filme.descricao ?? "");
  const [salvando, setSalvando] = useState(false);

  async function handleSalvar() {
    if (!titulo.trim()) {
      Alert.alert("Atenção", "Informe o título do filme.");
      return;
    }

    try {
      setSalvando(true);

      await atualizarFilme(filme.id, {
        titulo: titulo.trim(),
        genero: genero.trim(),
        ano: ano ? Number(ano) : null,
        nota: nota ? Number(nota.replace(",", ".")) : null,
        descricao: descricao.trim(),
      });

      Alert.alert("Sucesso", "Filme atualizado com sucesso.");
      navigation.navigate("Home");
    } catch (erro) {
      Alert.alert(
        "Erro",
        erro.message || "Não foi possível atualizar o filme.",
      );
    } finally {
      setSalvando(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} />

      <Text style={styles.label}>Gênero</Text>
      <TextInput style={styles.input} value={genero} onChangeText={setGenero} />

      <Text style={styles.label}>Ano</Text>
      <TextInput
        style={styles.input}
        value={ano}
        onChangeText={setAno}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Nota</Text>
      <TextInput
        style={styles.input}
        value={nota}
        onChangeText={setNota}
        keyboardType="decimal-pad"
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.descricao]}
        value={descricao}
        onChangeText={setDescricao}
        multiline
        textAlignVertical="top"
      />

      <View style={styles.botao}>
        <Button
          title={salvando ? "Salvando..." : "Salvar alterações"}
          onPress={handleSalvar}
          disabled={salvando}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  label: {
    fontSize: 16,
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
  descricao: {
    minHeight: 120,
  },
  botao: {
    marginTop: 4,
  },
});
