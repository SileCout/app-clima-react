# 🌤️ App de Clima

Aplicação de previsão do tempo construída com React, consumindo a API pública Open-Meteo, com painel temático dinâmico e previsão dos próximos 7 dias.

🔗 **Ver projeto no ar:** _em breve_

## 📌 Funcionalidades

- 🔍 Busca de clima atual por nome de cidade
- 🌡️ Temperatura, umidade e velocidade do vento em tempo real
- 🎨 Painel temático que muda conforme a condição climática (calor, chuva, frio)
- 📅 Previsão dos próximos 7 dias com rolagem horizontal
- 💎 Interface com efeito de vidro (glassmorphism) e animações suaves

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Open-Meteo API](https://open-meteo.com/) (geocoding e previsão do tempo)
- CSS puro (glassmorphism, gradientes, animações)

## 📚 Conceitos aplicados

- **useState** — gerenciamento de múltiplos estados (busca, dados, carregando, erro)
- **Consumo de API assíncrono** — `fetch` + `async/await` encadeando duas chamadas (geocoding → forecast)
- **Tratamento de carregamento e erro** — feedback visual em cada estado da busca
- **Componentização** — separação em `FormularioBusca`, `ResultadoClima`, `PainelTematico` e `PrevisaoSemana`
- **Lógica de negócio isolada** — funções utilitárias (`src/utils/clima.js`) reutilizadas por múltiplos componentes
- **Renderização condicional e de listas** — exibição da previsão dos 7 dias com `map`

## 🚀 Como rodar o projeto

\`\`\`bash

# Clone o repositório

git clone https://github.com/SileCout/app-clima-react.git

# Entre na pasta

cd app-clima-react

# Instale as dependências

npm install

# Rode o projeto

npm run dev
\`\`\`

O projeto estará disponível em `http://localhost:5173`.

## 📌 Próximos passos

Este projeto faz parte de um roteiro de estudos em React. Os próximos passos incluem:

- Roteamento com React Router
- Gerenciamento de estado global com Context API
- Aplicação desses conceitos no catálogo de produtos **Zilê**

## 👩‍💻 Autora

Desenvolvido por Josilene S. R. Coutinho, em transição de carreira para a área de TI, cursando Análise e Desenvolvimento de Sistemas.

[LinkedIn](https://www.linkedin.com/in/josilene-sobreira-r-coutinho-578218310/) · [GitHub](https://github.com/SileCout)
