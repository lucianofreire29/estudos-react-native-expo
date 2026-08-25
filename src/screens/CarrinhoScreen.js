import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useCart } from '../contexts/CartContext';

export default function CarrinhoScreen({ navigation }) {
  const { itens, remover } = useCart();

  if (itens.length === 0) {
    return (
      <View style={styles.vazio}>
        <Text style={styles.vazioTexto}>O carrinho está vazio.</Text>
        <Button
          title="Voltar para filmes"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho</Text>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.infoFilme}>
              <Text style={styles.nomeFilme}>{item.titulo}</Text>
              <Text>{item.genero}</Text>
              <Text>{item.ano}</Text>
            </View>

            <Button title="Remover" onPress={() => remover(item.id)} />
          </View>
        )}
      />

      <Button
        title="Voltar para filmes"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoFilme: {
    flex: 1,
  },
  nomeFilme: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  vazio: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  vazioTexto: {
    fontSize: 18,
  },
});
