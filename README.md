# API de Tarefas · Backend (Node.js + Express + MongoDB)

API REST para gerenciamento de tarefas com título, descrição, status,
data de criação e deadline.

## Tecnologias utilizadas

-   Node.js
-   Express
-   Mongoose
-   TypeScript
-   Cors

## Funcionalidades

-   Criar tarefa
-   Editar tarefa
-   Excluir tarefa
-   Buscar tarefa por texto
-   Marcar como concluída
-   Campos: title, description, done, createdAt, deadline

## Rotas

GET /tasks POST /tasks PUT /tasks/:id DELETE /tasks/:id GET
/tasks/search?query=texto

## Instalação

npm install

## Configuração

Crie .env com: MONGO_URL=sua_string PORT=3000

## Executar

npm run dev
