# App de Filmes — React Native + Expo

Projeto desenvolvido como exercício do curso utilizando **React Native**, **Expo**, **React Navigation** e **Context API**.

## Atividade 1 — Navegação entre telas

O objetivo desta atividade é praticar navegação entre telas utilizando Stack Navigator e passagem de dados entre telas.

### Funcionalidades

- Lista com 5 filmes;
- Exibição de título, gênero e ano na tela inicial;
- Navegação para a tela de detalhes ao tocar em um filme;
- Passagem do filme selecionado através de `route.params`;
- Exibição de título, gênero, ano, nota e descrição na tela de detalhes;
- Retorno para a lista de filmes pelo Stack Navigator.

## Atividade 2 — Carrinho com Context API

A segunda atividade reaproveita o aplicativo de filmes e adiciona um estado global para o carrinho utilizando a Context API do React.

### Funcionalidades

- `CartContext` para compartilhar o estado do carrinho entre as telas;
- Adição de filmes ao carrinho pela tela de detalhes;
- Tela própria para visualizar o carrinho;
- Remoção de filmes do carrinho;
- Acesso direto ao carrinho pela tela inicial;
- Mensagem quando o carrinho está vazio;
- Botão **Voltar para filmes** na tela do carrinho.

## Estrutura principal

```text
App.js
src/
├── contexts/
│   └── CartContext.js
└── screens/
    ├── HomeScreen.js
    ├── DetalheScreen.js
    └── CarrinhoScreen.js
```

## Tecnologias utilizadas

- React Native
- Expo
- React Navigation
- Native Stack Navigator
- Context API

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
Lista de filmes
      ↓
Selecionar filme
      ↓
navigation.navigate('Detalhe', { filme: item })
      ↓
Tela de detalhes
      ↓
const { filme } = route.params
```

### Atividade 2

```text
Lista de filmes
      ↓
Detalhes do filme
      ↓
Adicionar ao carrinho
      ↓
CartContext
      ↓
Carrinho
      ↓
Remover filme ou voltar para filmes
```

A aplicação foi testada em dispositivo Android utilizando Expo Go.
