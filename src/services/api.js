const API_URL = 'https://estudos-react-native-expo.onrender.com';

async function tratarResposta(response) {
  if (!response.ok) {
    const dados = await response.json().catch(() => ({}));
    throw new Error(dados.erro || 'Erro ao comunicar com a API.');
  }

  return response.json();
}

export async function listarFilmes() {
  const response = await fetch(`${API_URL}/filmes`);
  return tratarResposta(response);
}

export async function criarFilme(filme) {
  const response = await fetch(`${API_URL}/filmes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(filme),
  });

  return tratarResposta(response);
}

export async function atualizarFilme(id, filme) {
  const response = await fetch(`${API_URL}/filmes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(filme),
  });

  return tratarResposta(response);
}

export async function removerFilme(id) {
  const response = await fetch(`${API_URL}/filmes/${id}`, {
    method: 'DELETE',
  });

  return tratarResposta(response);
}
