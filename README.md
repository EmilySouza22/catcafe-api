# Black Cat & Coffee — Sistema de Cat Café

**Atividade Avaliativa – Testes de Sistemas (SENAI/SC)**  
**Aluna:** Emily Souza  
**Objetivo:** Planejar, executar e documentar testes unitários em um sistema web contemplando front-end e back-end, utilizando Jest e Playwright, estruturando um levantamento de requisitos, um descritivo de casos de teste, um relatório de execução de testes e a validação dos resultados, conforme normas, métodos e técnicas de testes de software adotadas pela indústria.

## Contexto

Sistema web de Cat Café com funcionalidades de cadastro e login de usuários, listagem e adoção de gatos, cardápio com categorias e painel de contato. O projeto contempla front-end (React + Vite) e back-end (Express + Node.js + MySQL), com testes unitários implementados via Jest no back-end e testes E2E via Playwright no front-end.

## Stack

| Camada          | Tecnologia         |
| --------------- | ------------------ |
| Frontend        | React + Vite       |
| Backend         | Node.js + Express  |
| Banco de Dados  | MySQL 8.0 (Docker) |
| Testes Backend  | Jest + Supertest   |
| Testes Frontend | Playwright         |

## Estrutura do Repositório

```
catcafe-api/
├── api/                        # Back-end
│   ├── src/
│   │   ├── components/
│   │   │   ├── user.js
│   │   │   └── validator.js
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── adocao.js
│   │   │   ├── auth.js
│   │   │   ├── cardapio.js
│   │   │   ├── contato.js
│   │   │   └── user.js
│   │   ├── middlewares/
│   │   │   ├── admin.js
│   │   │   ├── auth.js
│   │   │   └── user.js
│   │   ├── repositories/
│   │   │   ├── adocao.js
│   │   │   └── user.js
│   │   ├── routes/
│   │   │   ├── adocao.js
│   │   │   ├── auth.js
│   │   │   ├── cardapio.js
│   │   │   ├── contato.js
│   │   │   └── user.js
│   │   ├── services/
│   │   │   ├── adocao.js
│   │   │   ├── auth.js
│   │   │   └── user.js
│   │   └── utils/
│   │       ├── createHash.js
│   │       ├── jwt.js
│   │       └── validator.js
│   ├── tests/
│   │   ├── login.test.js
│   │   └── register.test.js
│   ├── app.js
│   ├── server.js
│   ├── database.sql
│   ├── docker-compose.yml
│   └── package.json
├── frontend/                   # Front-end
│   ├── src/
│   │   ├── components/
│   │   │   └── layouts/
│   │   ├── pages/
│   │   │   ├── adoption/
│   │   │   ├── auth/
│   │   │   ├── cardapio/
│   │   │   ├── contact/
│   │   │   ├── gatos/
│   │   │   ├── home/
│   │   │   └── sobre/
│   │   ├── styles/
│   │   │   └── global.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tests/
│   │   ├── cardapio.spec.js
│   │   └── navbar.spec.js
│   └── package.json
├── docs/                       # Documentação
│   ├── evidences/
│   │   ├── evidencia_teste_jest_login.jpeg
│   │   ├── evidencia_teste_jest_register.jpeg
│   │   ├── evidencias_playwright.jpeg
│   │   ├── evidencias_playwright1.jpeg
│   │   ├── evidencias_testes_playwright_cardapio.jpeg
│   │   └── evidencias_testes_playwright_navbar.jpeg
│   ├── entrega8.md
│   └── execucao_testes.md
├── playwright.config.js
└── package.json
```

## Requisitos Funcionais

### Usuários

| ID    | Requisito               | Descrição                                                                                                            |
| ----- | ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| RF-01 | Cadastro de Usuário     | O sistema deve permitir cadastrar usuários com nome, e-mail, senha e telefone, validando os dados antes de persistir |
| RF-02 | Login e Logout          | O sistema deve autenticar usuários com e-mail e senha, retornando tokens de acesso e refresh, e permitir logout      |
| RF-03 | Gerenciamento de Perfil | O sistema deve permitir que o usuário visualize, atualize e exclua sua própria conta                                 |

### Gatos e Adoção

| ID    | Requisito             | Descrição                                                                       |
| ----- | --------------------- | ------------------------------------------------------------------------------- |
| RF-04 | Listagem de Gatos     | O sistema deve listar todos os gatos disponíveis para adoção                    |
| RF-05 | Solicitação de Adoção | O sistema deve permitir que usuários autenticados solicitem a adoção de um gato |

### Cardápio

| ID    | Requisito            | Descrição                                                                                         |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------- |
| RF-06 | Listagem de Produtos | O sistema deve listar produtos do cardápio organizados por categoria                              |
| RF-07 | Filtro por Categoria | O sistema deve permitir filtrar produtos por categoria (cafés, bebidas, salgados, doces, veganos) |

### Front-end

| ID    | Requisito                     | Descrição                                                                                 |
| ----- | ----------------------------- | ----------------------------------------------------------------------------------------- |
| RF-08 | Tela de Login                 | O sistema deve exibir formulário de login com campos de e-mail e senha                    |
| RF-09 | Tela de Cadastro              | O sistema deve exibir formulário de cadastro com campos de nome, e-mail, telefone e senha |
| RF-10 | Feedback de erro no cadastro  | O sistema deve exibir mensagem de erro quando o cadastro falhar                           |
| RF-11 | Feedback de erro no login     | O sistema deve exibir mensagem de erro quando o login falhar                              |
| RF-12 | Redirecionamento pós-login    | O sistema deve redirecionar o usuário para `/home` após login bem-sucedido                |
| RF-13 | Cardápio por categorias       | O sistema deve exibir o cardápio em abas por categoria com seção de destaques             |
| RF-14 | Navegação entre páginas       | O sistema deve exibir navbar com links funcionais e estado ativo para a rota atual        |
| RF-15 | Listagem de gatos no frontend | O sistema deve exibir cards dos gatos com botão de redirecionamento para adoção           |

## Executar os Testes

```bash
# Back-end
cd api
npm install
docker compose up -d   # sobe o banco MySQL
npm test

# Front-end (Playwright) — rodar da raiz do projeto
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

## Documentação

A documentação completa está na pasta `docs/`:

- `entrega8.md` — Descritivo de casos de teste (CT-01 a CT-30)
- `execucao_testes.md` — Relatório de execução e validação dos testes
- `evidences/` — Prints dos relatórios Jest e Playwright
