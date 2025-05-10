# Projeto Fórmula 1 - Visualizador de Dados via API

> Este projeto foi desenvolvido para a disciplina de FullStack com o objetivo de consumir e exibir dados da API pública da Fórmula 1 (https://api.jolpi.ca//ergast/f1/). A aplicação é construída com React e JavaScript, e utiliza o React Router DOM para a navegação SPA (Single Page Application). A recuperação de dados é feita por meio do hook useReducer, oferecendo uma abordagem mais robusta e organizada em relação ao useState.

🔗 **Acesse o projeto online:** [Projeto Fórmula 1](https://jotasoftware.github.io/Projeto-Formula-1/)

## 🚀 Tecnologias Utilizadas

- React.js
- JavaScript (ES6+)
- React Router DOM
- useReducer (para controle de estado global da API)
- HTML5 e CSS3
- Create React App (CRA)

> ℹ️ O projeto foi iniciado com o Create React App por solicitação da disciplina, como forma de atender aos requisitos relacionados ao uso do Webpack de forma simplificada e configurada automaticamente.

## 📦 Como Usar

1. Acesse o site através do link acima.
2. Utilize o menu de navegação para escolher entre:
   - Pilotos e suas classificações por temporada.
   - Equipes e suas posições no campeonato.
   - Circuitos e informações detalhadas por ano.
3. Explore os dados atualizados diretamente da API da Fórmula 1.

## 🛠️ Funcionalidades

- ✅ Listagem de todos os pilotos por temporada e suas respectivas posições no campeonato.
- ✅ Exibição da classificação de equipes (construtores) por ano.
- ✅ Visualização dos circuitos utilizados na temporada com detalhes de localização.
- ✅ SPA completa utilizando React Router DOM.
- ✅ Componente de carregamento (Loading) exibido enquanto os dados ainda estão sendo buscados.
- ✅ Consumo da API com useReducer, facilitando o gerenciamento de múltiplos estados de carregamento e resposta de forma centralizada.

## 💡 Vantagens do useReducer

- 🔄 Melhor controle de estados complexos vindos da API.
- 📦 Centralização da lógica de atualização de estado, facilitando manutenção e testes.
- 🚀 Performance otimizada em comparação ao uso excessivo de múltiplos useStates.
