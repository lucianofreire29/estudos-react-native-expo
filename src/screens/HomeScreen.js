import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { listarFilmes } from '../services/api';

export default function HomeScreen({ navigation }) {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  async function carregarFilmes() {
    try {
      setCarregando(true);
      setErro(null);

      const dados = await listarFilmes();
      setFilmes(dados);
    } catch (e) {
      setErro(e.message || 'Ocorreu um erro ao buscar os filmes.');
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', carregarFilmes);
    return unsubscribe;
  }, [navigation]);

  if (carregando) {
    return (
      <View style={styles.estadoCentralizado}>
        <ActivityIndicator size="large" />
        <Text style={styles.mensagemEstado}>Carregando filmes...</Text>
      </View>
    );
  }

  if (erro) {
    return (
      <View style={styles.estadoCentralizado}>
        <Text style={styles.erro}>Erro: {erro}</Text>
        <TouchableOpacity style={styles.botaoRecarregar} onPress={carregarFilmes}>
          <Text style={styles.textoBotao}>Recarregar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <View>
          <Text style={styles.titulo}>Lista de filmes</Text>
          <Text style={styles.fonte}>Dados do PostgreSQL no Neon</Text>
        </View>

        <TouchableOpacity
          style={styles.botaoCarrinho}
          onPress={() => navigation.navigate('Carrinho')}
        >
          <Text style={styles.textoBotao}>Carrinho</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botaoRecarregarTopo} onPress={carregarFilmes}>
        <Text style={styles.textoBotao}>Recarregar</Text>
      </TouchableOpacity>

      {filmes.length === 0 ? (
        <View style={styles.estadoCentralizado}>
          <Text style={styles.mensagemEstado}>Nenhum filme cadastrado.</Text>
        </View>
      ) : (
        <FlatList
          data={filmes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Detalhe', { filme: item })}
            >
              <Text style={styles.nomeFilme}>{item.titulo}</Text>
              <Text style={styles.info}>{item.genero}</Text>
              <Text style={styles.info}>{item.ano}</Text>
              <Text style={styles.info}>Nota: {item.nota}</Text>
            </TouchableOpacity>
          )}
        />
      )}
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
    marginBottom: 12,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  fonte: {
    fontSize: 12,
    marginTop: 4,
  },
  botaoCarrinho: {
    backgroundColor: '#1f6feb',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  botaoRecarregarTopo: {
    alignSelf: 'flex-start',
    backgroundColor: '#1f6feb',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginBottom: 14,
  },
  botaoRecarregar: {
    backgroundColor: '#1f6feb',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  textoBotao: {
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
  estadoCentralizado: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  mensagemEstado: {
    marginTop: 12,
    fontSize: 16,
  },
  erro: {
    fontSize: 16,
    textAlign: 'center',
  },
});
