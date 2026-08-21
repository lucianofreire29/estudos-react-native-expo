import { StyleSheet, Text, View } from 'react-native';

export default function DetalheScreen({ route }) {
  const { filme } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{filme.titulo}</Text>
      <Text style={styles.info}>Gênero: {filme.genero}</Text>
      <Text style={styles.info}>Ano: {filme.ano}</Text>
      <Text style={styles.info}>Nota: {filme.nota}</Text>
      <Text style={styles.descricao}>{filme.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 16,
  },
});
