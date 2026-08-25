import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const filmes = [
  {
    id: '1',
    titulo: 'Interestelar',
    genero: 'Ficção Científica',
    ano: 2014,
    nota: 8.7,
    descricao:
      'Uma equipe de astronautas viaja pelo espaço em busca de um novo lar para a humanidade.',
  },
  {
    id: '2',
    titulo: 'O Poderoso Chefão',
    genero: 'Drama / Crime',
    ano: 1972,
    nota: 9.2,
    descricao:
      'A história da família Corleone e sua influência no mundo do crime organizado.',
  },
  {
    id: '3',
    titulo: 'Matrix',
    genero: 'Ficção Científica',
    ano: 1999,
    nota: 8.7,
    descricao:
      'Um programador descobre que a realidade em que vive pode não ser o que parece.',
  },
  {
    id: '4',
    titulo: 'Gladiador',
    genero: 'Ação / Drama',
    ano: 2000,
    nota: 8.5,
    descricao:
      'Um general romano busca vingança após perder sua família e sua posição.',
  },
  {
    id: '5',
    titulo: 'Parasita',
    genero: 'Drama / Suspense',
    ano: 2019,
    nota: 8.5,
    descricao:
      'Uma família encontra uma oportunidade inesperada ao se aproximar de uma família rica.',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Lista de filmes</Text>

        <TouchableOpacity
          style={styles.botaoCarrinho}
          onPress={() => navigation.navigate('Carrinho')}
        >
          <Text style={styles.textoBotaoCarrinho}>Carrinho</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detalhe', { filme: item })}
          >
            <Text style={styles.nomeFilme}>{item.titulo}</Text>
            <Text style={styles.info}>{item.genero}</Text>
            <Text style={styles.info}>{item.ano}</Text>
          </TouchableOpacity>
        )}
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
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  botaoCarrinho: {
    backgroundColor: '#1f6feb',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  textoBotaoCarrinho: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
  },
  nomeFilme: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  info: {
    fontSize: 14,
    marginBottom: 2,
  },
});
