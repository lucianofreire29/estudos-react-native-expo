# App de Filmes — React Native + Expo

Projeto desenvolvido como exercício do curso utilizando **React Native**, **Expo** e **React Navigation**.

## Atividade 1 — Navegação entre telas

O objetivo desta atividade é praticar navegação entre telas utilizando Stack Navigator e passagem de dados entre telas.

### Funcionalidades

- Lista com 5 filmes;
- Exibição de título, gênero e ano na tela inicial;
- Navegação para a tela de detalhes ao tocar em um filme;
- Passagem do filme selecionado através de `route.params`;
- Exibição de título, gênero, ano, nota e descrição na tela de detalhes;
- Retorno para a lista de filmes pelo Stack Navigator.

## Estrutura principal

```text
App.js
src/
└── screens/
    ├── HomeScreen.js
    └── DetalheScreen.js
```

## Tecnologias utilizadas

- React Native
- Expo
- React Navigation
- Native Stack Navigator

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

## Fluxo da Atividade 1

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

A aplicação foi testada em dispositivo Android utilizando Expo Go.
