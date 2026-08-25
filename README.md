# App de Filmes — React Native + Expo

Projeto desenvolvido como exercício do curso utilizando **React Native**, **Expo**, **React Navigation**, **Context API** e consumo de **API REST**.

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

A terceira atividade substitui os dados fixos da tela inicial por dados reais obtidos de uma API pública através de `fetch`.

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

## Estrutura principal

```text
App.js
src/
├── contexts/
│   └── CartContext.js
├── screens/
│   ├── HomeScreen.js
│   ├── DetalheScreen.js
│   └── CarrinhoScreen.js
└── services/
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

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npx expo start
```

Depois, abra o aplicativo pelo **Expo Go** e leia o QR Code exibido no terminal.

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

A aplicação foi testada com sucesso em dispositivo Android utilizando Expo Go.
