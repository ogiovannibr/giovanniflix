# GiovanniFlix

**GiovanniFlix** é um projeto desenvolvido com fins de estudo, com o objetivo de praticar o **consumo de APIs REST**, manipulação de **dados locais com LocalStorage** e gerenciamento de componentes no **React**.

A API utilizada foi a do [The Movie Database (TMDB)](https://www.themoviedb.org/), permitindo listar, salvar e excluir filmes diretamente do navegador.

---

## Tecnologias Utilizadas

* **React.js**
* **React Router DOM**
* **Axios**
* **TMDB API**
* **LocalStorage**
* **Hooks (useState, useEffect)**

---

## Conceitos Estudados

* Requisições HTTP com `Axios`
* Uso de parâmetros (`params`) para paginação da API
* Armazenamento de dados no navegador com `localStorage`
* Manipulação e exclusão de itens com chaves únicas (`id`)
* Renderização condicional e mapeamento de listas (`map`)
* Organização de rotas e componentes no React
* Formatação de dados (ex: nota dos filmes com `.toFixed(1)`)

---

## Funcionalidades

 Listar filmes diretamente da API do TMDB
 Exibir informações básicas como título, imagem e avaliação
 Salvar filmes favoritos no LocalStorage
 Excluir filmes salvos por ID (token/hook identificador)
 Navegação entre páginas e visualização individual de filmes

---

## Interface

O layout segue um estilo simples e intuitivo, destacando os filmes com seus pôsteres e notas.
Ao salvar um filme, ele aparece na página **“Meus Filmes”**, e pode ser removido com apenas um clique.

---

## ⚙️ Como Executar o Projeto

```bash
# Clonar o repositório
git clone https://github.com/ogiovannibr/giovanniflix.git

# Entrar na pasta
cd giovanniflix

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm start
```

Após iniciar, o projeto estará disponível em:
 **[http://localhost:3000](http://localhost:3000)**

---

## API Key

Para consumir a API do TMDB, é necessário ter uma **API Key**:

1. Crie uma conta gratuita em [https://www.themoviedb.org](https://www.themoviedb.org)
2. Vá até **Configurações > API**
3. Copie sua chave e substitua no arquivo de configuração da API:

---

## Autor

Desenvolvido por **Giovanni**
Projeto criado com o propósito de **aprender, testar e evoluir** no uso de APIs e React.

---

## Licença

Este projeto é apenas para **fins educacionais** e não possui fins comerciais.
Todos os direitos de imagens e informações pertencem ao **The Movie Database (TMDB)**.
