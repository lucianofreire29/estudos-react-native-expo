const API_URL = 'https://api.tvmaze.com/shows?page=0';

function removerHtml(texto) {
  if (!texto) return 'Descrição não disponível.';
  return texto.replace(/<[^>]*>/g, '').trim();
}

export async function listarFilmes() {
  const resposta = await fetch(API_URL);

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os filmes.');
  }

  const dados = await resposta.json();

  return dados.slice(0, 20).map((show) => ({
    id: String(show.id),
    titulo: show.name,
    genero: show.genres?.length ? show.genres.join(' / ') : 'Gênero não informado',
    ano: show.premiered ? new Date(show.premiered).getFullYear() : 'Ano não informado',
    nota: show.rating?.average ?? 'Sem nota',
    descricao: removerHtml(show.summary),
    imagem: show.image?.medium ?? null,
    url: show.url,
  }));
}
