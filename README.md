# App de Filmes — React Native + Expo

Projeto desenvolvido como exercício do curso utilizando **React Native**, **Expo**, **React Navigation**, **Context API**, consumo de **API REST** e integração com banco de dados PostgreSQL no **Neon**.

## Atividade 1 — Navegação entre telas

O objetivo desta atividade é praticar navegação entre telas utilizando Stack Navigator e passagem de dados entre telas.

### Funcionalidades

- Lista com 5 filmes;
- Navegação para a tela de detalhes;
- Passagem do item selecionado através de `route.params`;
- Exibição das informações do item na tela de detalhes.

## Atividade 2 — Carrinho com Context API

A segunda atividade adiciona estado global para o carrinho utilizando a Context API do React.

### Funcionalidades

- `CartContext` para compartilhar o carrinho entre as telas;
- Adição de itens pela tela de detalhes;
- Tela própria para visualizar o carrinho;
- Remoção de itens;
- Acesso direto ao carrinho pela tela inicial;
- Estado de carrinho vazio;
- Botão **Voltar para filmes**.

## Atividade 3 — Consumindo uma API pública

A terceira atividade substituiu os dados fixos da tela inicial por dados reais obtidos de uma API pública através de `fetch`.

Foi utilizada a **TVmaze API**, que disponibiliza dados públicos de séries e produções sem exigir autenticação.

### Funcionalidades

- Requisição HTTP utilizando `fetch`;
- Dados reais carregados da TVmaze API;
- Estado de **carregamento** com `ActivityIndicator`;
- Tratamento de **erro** na requisição;
- Estado de **sucesso** exibindo os dados recebidos;
- Botão **Recarregar** para executar a requisição novamente;
- Navegação para os detalhes do item retornado pela API;
- Integração mantida com o carrinho da Atividade 2.

## Atividade 4 — Backend próprio com Neon

A quarta atividade adiciona um backend próprio em **Node.js + Express**, conectado a um banco **PostgreSQL hospedado no Neon**. A API foi publicada no **Render** e passou a ser consumida pelo aplicativo Expo.

### URL pública da API

`https://estudos-react-native-expo.onrender.com`

### Endpoints

- `GET /filmes` — lista os filmes cadastrados;
- `POST /filmes` — cadastra um novo filme;
- `PUT /filmes/:id` — atualiza um filme existente;
- `DELETE /filmes/:id` — remove um filme.

### Funcionalidades no aplicativo

- Listagem dos registros salvos no Neon;
- Cadastro de filme pelo aplicativo;
- Edição de filme;
- Exclusão com confirmação antes de apagar;
- Recarregamento da lista após alterações;
- Tratamento de carregamento e erro de comunicação com a API;
- Integração mantida com navegação e carrinho das atividades anteriores.

### Fluxo da Atividade 4

```text
Expo Go
   ↓
fetch
   ↓
API Node.js + Express
   ↓
Render
   ↓
PostgreSQL no Neon
```

O aplicativo não possui credenciais do banco de dados. A variável `DATABASE_URL` fica somente no ambiente do backend e não é versionada no GitHub.

## Estrutura principal

```text
App.js
backend/
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
src/
├── contexts/
│   └── CartContext.js
├── screens/
│   ├── HomeScreen.js
│   ├── DetalheScreen.js
│   ├── CarrinhoScreen.js
│   ├── CadastroFilmeScreen.js
│   └── EditarFilmeScreen.js
└── services/
    ├── api.js
    └── tvmaze.js
```

## Tecnologias utilizadas

- React Native
- Expo
- React Navigation
- Native Stack Navigator
- Context API
- Fetch API
- TVmaze API
- Node.js
- Express
- PostgreSQL
- Neon
- Render

## Como executar o aplicativo

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npx expo start
```

Depois, abra o aplicativo pelo **Expo Go** e leia o QR Code exibido no terminal.

## Como executar o backend localmente

Entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` dentro de `backend` com sua própria conexão do Neon:

```text
DATABASE_URL=sua_connection_string_do_neon
PORT=3000
```

O arquivo `.env` está ignorado pelo Git e não deve ser enviado ao repositório.

Inicie o servidor:

```bash
node index.js
```

## Fluxo das atividades

### Atividade 1

```text
Lista
  ↓
Selecionar item
  ↓
route.params
  ↓
Detalhes
```

### Atividade 2

```text
Detalhes
  ↓
Adicionar
  ↓
CartContext
  ↓
Carrinho
  ↓
Remover
```

### Atividade 3

```text
HomeScreen
    ↓
fetch
    ↓
TVmaze API
    ↓
carregando / erro / sucesso
    ↓
Lista com dados reais
```

### Atividade 4

```text
Home / Cadastro / Edição / Exclusão
              ↓
             fetch
              ↓
        API no Render
              ↓
       Express + Node.js
              ↓
       PostgreSQL Neon
```

As quatro atividades foram testadas com sucesso em dispositivo Android utilizando Expo Go.
