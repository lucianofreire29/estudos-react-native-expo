# App de Filmes — React Native + Expo

Projeto desenvolvido como exercício do curso utilizando **React Native**, **Expo**, **React Navigation**, **Context API**, consumo de **API REST**, integração com banco de dados PostgreSQL no **Neon**, persistência em tempo real com **Firebase Firestore** e autenticação com **Firebase Authentication**.

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

## Atividade 5 — Firestore em tempo real

A quinta atividade substitui o acesso aos dados do Neon pelo **Firebase Firestore**. O aplicativo passa a acessar o banco diretamente utilizando o SDK do Firebase para JavaScript.

### Funcionalidades

- Listagem de filmes armazenados no Firestore;
- Cadastro de novos filmes;
- Edição de filmes existentes;
- Exclusão de filmes;
- Atualização automática da lista utilizando `onSnapshot`;
- Tratamento de carregamento e erro;
- Configuração do Firebase através de variáveis de ambiente;
- Integração mantida com navegação e carrinho das atividades anteriores.

### Fluxo da Atividade 5

```text
Expo Go
   ↓
Firebase SDK
   ↓
Cloud Firestore
   ↓
onSnapshot
   ↓
Atualização em tempo real
```

### Comparação: Neon x Firestore

Na Atividade 4, utilizando o Neon, foi necessário criar uma API própria com Node.js e Express para fazer a comunicação entre o aplicativo e o banco PostgreSQL. No Firestore, o aplicativo consegue acessar o banco diretamente através do SDK do Firebase, tornando a implementação mais simples. Outra diferença percebida foi a atualização em tempo real com `onSnapshot`, pois as alterações feitas no Firestore aparecem automaticamente no aplicativo, enquanto na API com Neon era necessário realizar uma nova requisição para atualizar os dados.

## Atividade 6 — App completo com login

A sexta atividade integra **Firebase Authentication**, controle de sessão com **AuthContext** e persistência dos filmes associada ao usuário autenticado.

### Funcionalidades

- Cadastro de usuário com e-mail e senha;
- Retorno ao Login após a criação da conta;
- Login com Firebase Authentication;
- Controle do usuário autenticado através do `AuthContext`;
- Proteção das telas principais para usuários autenticados;
- Logout através do botão **Sair**;
- Cada filme é salvo com o `uid` do usuário autenticado;
- A listagem utiliza o `uid` para mostrar somente os filmes pertencentes ao usuário logado;
- Atualização em tempo real mantida com `onSnapshot`;
- Regras de segurança do Firestore limitando leitura, criação, edição e exclusão aos próprios dados.

### Fluxo da Atividade 6

```text
Cadastro
   ↓
Firebase Authentication
   ↓
Login
   ↓
AuthContext
   ↓
Usuário autenticado
   ↓
Firestore + uid
   ↓
Filmes do próprio usuário
```

### Segurança do Firestore

As regras utilizadas exigem autenticação e conferem se o `uid` salvo no documento pertence ao usuário autenticado. O arquivo `firestore.rules` registra essas regras no repositório para consulta.

O funcionamento foi validado com duas contas diferentes: cada usuário visualizou apenas os próprios filmes, e as operações de cadastro, edição e exclusão continuaram funcionando após a publicação das regras.

## Estrutura principal

```text
App.js
firestore.rules
backend/
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
src/
├── config/
│   └── firebaseConfig.js
├── contexts/
│   ├── AuthContext.js
│   └── CartContext.js
├── screens/
│   ├── LoginScreen.js
│   ├── CadastroUsuarioScreen.js
│   ├── HomeScreen.js
│   ├── DetalheScreen.js
│   ├── CarrinhoScreen.js
│   ├── CadastroFilmeScreen.js
│   └── EditarFilmeScreen.js
└── services/
    ├── api.js
    ├── firestore.js
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
- Firebase
- Firebase Authentication
- Cloud Firestore

## Como executar o aplicativo

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env.local` a partir do exemplo `.env.example` e preencha os valores da configuração Web do seu projeto Firebase.

```text
EXPO_PUBLIC_FIREBASE_API_KEY=
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=
EXPO_PUBLIC_FIREBASE_PROJECT_ID=
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
EXPO_PUBLIC_FIREBASE_APP_ID=
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

### Atividade 5

```text
Home / Cadastro / Edição / Exclusão
              ↓
         Firebase SDK
              ↓
       Cloud Firestore
              ↓
          onSnapshot
              ↓
    atualização em tempo real
```

### Atividade 6

```text
Cadastro / Login
       ↓
Firebase Authentication
       ↓
   AuthContext
       ↓
usuário autenticado
       ↓
Firestore filtrado por uid
       ↓
CRUD dos próprios filmes
```

As seis atividades foram testadas com sucesso em dispositivo Android utilizando Expo Go.
