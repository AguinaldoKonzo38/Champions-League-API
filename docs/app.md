# Champions League API ⚽

Uma API REST desenvolvida com Node.js e Express.js para gerenciamento de dados da UEFA Champions League, utilizando a arquitetura N-Layers para melhor organização, escalabilidade e manutenção do código.

## 🚀 Tecnologias Utilizadas

* Node.js
* Express.js
* JavaScript

## 🏗️ Arquitetura

O projeto foi estruturado utilizando a arquitetura N-Layers, separando as responsabilidades da aplicação em diferentes camadas, tornando o código mais limpo, reutilizável e fácil de manter.

## 📌 Funcionalidades

* Listar todos os jogadores
* Buscar jogador por ID
* Editar informações de jogadores
* Deletar jogadores
* Listar todos os clubes

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos de desenvolvimento backend, criação de APIs REST, operações CRUD e aplicação da arquitetura em camadas utilizando Node.js e Express.

## 📂 Estrutura da API

A aplicação foi organizada em camadas para separar responsabilidades como:

* Rotas
* Controllers
* Services
* Repositories
* Data

Essa abordagem melhora a escalabilidade e facilita futuras manutenções e implementações.

## 🔧 Como Executar

1. Clone o repositório
2. Instale as dependências:

```bash
npm i
```

3. Execute o servidor:

```bash
npm run start
```

## 📡 Endpoints Principais

### Jogadores

* `GET /players` → Lista todos os jogadores
* `POST /players` → Cadastrar um jogador
* `GET /players/:id` → Busca jogador por ID
* `PUT /players/:id` → Edita jogador
* `DELETE /players/:id` → Remove jogador

* `http://localhost:3000/api/players` → Exemplo do formato da endpoits                                                                                                                                                                                                                                              

### Clubes

* `GET /clubs` → Lista todos os clubes

## 📖 Aprendizados

Durante o desenvolvimento deste projeto foram aplicados conceitos como:

* Arquitetura N-Layers
* CRUD
* APIs REST
* Organização de rotas
* Separação de responsabilidades
* Estruturação de backend com Node.js
* Desenvolvimento com Express.js
