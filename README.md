# 🎬 Movies Info App

<div align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Zustand-FF6B6B?style=for-the-badge&logo=react&logoColor=white" alt="Zustand" />
</div>

<br/>

Um aplicativo para descobrir, explorar e acompanhar filmes populares. Desenvolvido com **React Native**, **Expo** e **TypeScript**.

## ✨ Funcionalidades

- 🔍 **Busca de Filmes** - Pesquise por seus filmes favoritos
- 🎯 **Filmes Populares** - Explore os filmes em alta do momento
- 📄 **Detalhes Completos** - Veja informações detalhadas de cada filme
- ⭐ **Sistema de Acompanhamento** - Marque filmes como "Assistido" ou "Assistirei"
- 🔄 **Sincronização Local** - Dados salvos localmente com JSON Server

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **React Native** | Framework para desenvolvimento mobile |
| **Expo** | Plataforma para desenvolvimento React Native |
| **TypeScript** | Superset do JavaScript com tipagem estática |
| **Expo Router** | Sistema de navegação file-based |
| **TailwindCSS** | Framework CSS utilitário |
| **NativeWind** | TailwindCSS para React Native |
| **Zustand** | Gerenciamento de estado leve e moderno |
| **Axios** | Cliente HTTP para requisições |
| **JSON Server** | Mock API para desenvolvimento |
| **date-fns** | Biblioteca para manipulação de datas |

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 22 ou superior)
- npm ou yarn
- Expo CLI
- Dispositivo móvel ou emulador

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/DouglasSuzukiDS/movies-infos.git
cd movies-infos
```

### 2️⃣ Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3️⃣ Configure as variáveis de ambiente

> ⚠️ **IMPORTANTE**: Este projeto utiliza a API externa do **The Movie Database (TMDB)**

1. Acesse [The Movie Database (TMDB)](https://www.themoviedb.org/)
2. Crie uma conta gratuita
3. Vá para **Configurações** → **API** 
4. Gere sua **API Key** e **Access Token**
5. Copie o arquivo `.envExample` para `.env`:

```bash
cp .envExample .env
```

6. Edite o arquivo `.env` com suas credenciais:

```env
EXPO_PUBLIC_TMDB_API_TOKEN="seu_access_token_aqui"
EXPO_PUBLIC_TMDB_API_KEY="sua_api_key_aqui"
EXPO_PUBLIC_SERVER_URL="http://SEU_IP:3001"
```

> 💡 **Dica**: Substitua `SEU_IP` pelo IP da sua máquina (ex: `192.168.1.100`)

### 4️⃣ Inicie o servidor local (JSON Server)

```bash
npm run server
# ou
yarn server
```

O servidor local será executado em `http://localhost:3001`

### 5️⃣ Execute o aplicativo

```bash
npm start
# ou
yarn start
```

Escaneie o QR Code com o aplicativo **Expo Go** no seu dispositivo móvel.

## 📡 API Externa - TMDB

### 🔑 Como obter as credenciais da API

1. **Acesse**: https://www.themoviedb.org/
2. **Cadastre-se** com uma conta gratuita
3. **Vá para Settings**: Clique no seu avatar → Settings
4. **Acesse API**: Na sidebar esquerda, clique em "API"
5. **Copie suas credenciais**:
   - **API Key (v3 auth)**: Use como `EXPO_PUBLIC_TMDB_API_KEY`
   - **API Read Access Token (v4 auth)**: Use como `EXPO_PUBLIC_TMDB_API_TOKEN`

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas (Expo Router)
│   ├── index.tsx          # Página inicial
│   ├── movie/             # Páginas de filmes
│   └── _layout.tsx        # Layout global
├── components/            # Componentes reutilizáveis
│   ├── movie/            # Componentes específicos de filmes
│   └── input-search.tsx  # Componente de busca
├── store/                # Gerenciamento de estado (Zustand)
│   └── movies-store.tsx  # Store principal dos filmes
├── types/                # Definições de tipos TypeScript
├── utils/                # Utilitários e configurações
│   ├── api.ts           # Configuração da API TMDB
│   └── server.ts        # Configuração do servidor local
└── assets/              # Recursos estáticos
```

## 🎯 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm start` | Inicia o servidor de desenvolvimento Expo |
| `npm run android` | Executa no emulador Android |
| `npm run server` | Inicia o JSON Server na porta 3001 |

## 🔧 Configurações Importantes

### JSON Server

O projeto utiliza um servidor local para simular uma API e salvar dados de filmes assistidos:

- **Porta**: 3001
- **Arquivo**: `db.json`
- **Base URL**: Definida na variável `EXPO_PUBLIC_SERVER_URL`

### Gerenciamento de Estado

Utiliza **Zustand** para gerenciar:
- Lista de filmes populares
- Status de filmes assistidos
- Cache de detalhes dos filmes

---

<div align="center">
  <p>🎬 Feito com ❤️ para os amantes do cinema</p>
</div>