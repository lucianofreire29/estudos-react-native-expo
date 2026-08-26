import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useCart } from '../contexts/CartContext';
import { removerFilme } from '../services/api';

export default function DetalheScreen({ route, navigation }) {
  const { filme } = route.params;
  const { adicionar } = useCart();

  function handleAdicionar() {
    adicionar(filme);
    navigation.navigate('Carrinho');
  }

  function handleExcluir() {
    Alert.alert(
      'Excluir filme',
      `Tem certeza que deseja excluir "${filme.titulo}"?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              await removerFilme(filme.id);
              navigation.navigate('Home');
            } catch (erro) {
              Alert.alert(
                'Erro',
                erro.message || 'Não foi possível excluir o filme.'
              );
            }
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{filme.titulo}</Text>
      <Text style={styles.info}>Gênero: {filme.genero}</Text>
      <Text style={styles.info}>Ano: {filme.ano}</Text>
      <Text style={styles.info}>Nota: {filme.nota}</Text>
      <Text style={styles.descricao}>{filme.descricao}</Text>

      <View style={styles.botao}>
        <Button title="Adicionar" onPress={handleAdicionar} />
      </View>

      <View style={styles.botao}>
        <Button
          title="Editar filme"
          onPress={() => navigation.navigate('EditarFilme', { filme })}
        />
      </View>

      <View style={styles.botao}>
        <Button title="Excluir filme" color="#b42318" onPress={handleExcluir} />
      </View>
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
  botao: {
    marginTop: 16,
  },
});
