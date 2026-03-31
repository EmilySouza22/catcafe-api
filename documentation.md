# PARTE 1: Trabalhando com toThrow e try/catch

## Título da Atividade
Criação de API REST com Node.js, Express e Arquitetura em Camadas (ESM)

## Objetivo
Criar uma API simples em Node.js utilizando o framework Express, aplicando separação 
de responsabilidades e utilizando ECMAScript Modules (ESM).

---

## Instruções da Entrega

### 1. Configuração Inicial

```bash
npm init -y
npm install express
```

No package.json:

```json
"type": "module",
"start": "node src/server.js"
```

---

### 2. Estrutura do Projeto

```
meu-projeto/
├── package.json
└── src/
    ├── app.js
    ├── server.js
    └── userService.js
```

---

### 3. Regra de Negócio (userService.js)

Função exportada: createUser(userData)

Validações obrigatórias:

Se não existir propriedade name:
throw new Error("O nome do usuário é obrigatório.")

Se age < 18:
throw new Error("O usuário deve ser maior de idade.")

Retorno esperado:

{
  id: gerado_aleatoriamente,
  name: string,
  age: number,
  isActive: true,
  roles: ['user']
}

---

### 4. Express (app.js)

- app.use(express.json())
- Criar rota POST /users
- Retornar 201 em sucesso
- Retornar 400 em erro com:
{ "error": error.message }

---

### 5. Servidor (server.js)

Servidor rodando na porta 3000.

---

# PARTE 2: Documentação

## ENTREGA 01 — Requisitos Funcionais

| ID     | Requisito           | Descrição                                                                 |
|---------|--------------------|---------------------------------------------------------------------------|
| RF-01  | Cadastro de usuários | O sistema deve permitir o cadastro de um novo usuário via POST /users com os campos name, age e isActive. |
| RF-02  | Validação de nome obrigatório | O sistema deve lançar erro caso o campo name não seja informado na requisição. |
| RF-03  | Validação de maioridade | O sistema deve lançar erro caso o campo age seja inferior a 18 anos. |

---

# ENTREGA 08 — Descritivo de Casos de Teste

## 8.1 Casos de Teste

| ID Caso | ID Requisito | Descrição                                              | Precondição                  | Passos                                                                 | Resultado Esperado                                                                 |
|---------|-------------|--------------------------------------------------------|------------------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| CT-01   | RF-01      |   Criar usuário com dados válidos  | Nenhuma | 1. Chamar createUser com name: "João Silva" e age: 25. 2. Verificar os campos retornados. | Objeto com name, age, isActive: true, roles: ['user'] e id definido. |
| CT-02   | RF-02      | Lançar erro ao não informar o nome| Nenhuma | 1. Chamar createUser sem o campo name. 2. Esperar que uma exceção seja lançada. | Erro com mensagem "O nome do usuário é obrigatório." |
| CT-03   | RF-03      | Lançar erro ao informar que a idade é menor que 18 | Nenhuma |  1. Chamar createUser com age: 16`. 2. Esperar que uma exceção seja lançada. | Erro com mensagem "O usuário deve ser maior de idade." | 

---

## 8.2 Ferramentas e Ambiente

Ferramentas de teste:
- Jest
- Navegador (DevTools)
- Postman

Ambiente de teste:
- Node.js
- VS Code
- Google Chrome

---
