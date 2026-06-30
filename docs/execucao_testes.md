# Execução dos Testes Unitários

## Objetivo dos Testes

Validar o comportamento das funcionalidades implementadas no sistema Black Cat & Coffee, garantindo que as regras de negócio do back-end e a interface do front-end funcionem conforme os requisitos definidos, identificando falhas antes da entrega ao cliente.

## Escopo

Os testes abrangem as seguintes funcionalidades:

**Back-end (Jest + Supertest):**

- Cadastro e autenticação de usuários (RF-01, RF-02)
- Validação de dados de registro: nome, e-mail, senha e telefone (RF-01)

**Front-end (Playwright):**

- Renderização e navegação do cardápio por categorias (RF-13)
- Seção de destaques do cardápio (RF-13)
- Acessibilidade dos elementos do cardápio (RF-13)
- Renderização e navegação da navbar (RF-14)
- Links ativos e estado de navegação (RF-14)

Estão **fora do escopo** desta entrega: testes de solicitação de adoção via front-end (RF-04), gerenciamento de perfil (RF-05), tela de login via Playwright (RF-08, RF-09) e testes de integração entre sistemas externos.

## Tipos de Teste Aplicados

| Tipo                   | Descrição                                                                      | Aplicado em                 |
| ---------------------- | ------------------------------------------------------------------------------ | --------------------------- |
| Teste Unitário         | Validação isolada de regras de negócio e rotas da API com mock de dependências | Back-end (Jest + Supertest) |
| Teste End-to-End (E2E) | Simulação do fluxo real do usuário no navegador                                | Front-end (Playwright)      |

## Ambiente de Testes

| Item                | Descrição              |
| ------------------- | ---------------------- |
| Ambiente            | Desenvolvimento local  |
| Sistema Operacional | Windows 11             |
| Servidor de Teste   | Node.js                |
| Banco de Dados      | MySQL 8.0 (via Docker) |
| Browser             | Chromium (Playwright)  |
| URL Front-end       | http://localhost:5173  |

## Ferramentas Utilizadas

| Ferramenta         | Finalidade                                            |
| ------------------ | ----------------------------------------------------- |
| Jest               | Execução dos testes unitários no back-end             |
| Supertest          | Simulação de requisições HTTP nas rotas da API        |
| jest-html-reporter | Geração de relatório HTML dos testes de back-end      |
| Playwright         | Execução dos testes E2E no front-end                  |
| Node.js            | Ambiente de execução do back-end                      |
| MySQL 8.0          | Banco de dados utilizado nos testes                   |
| Docker             | Provisionamento do banco de dados em ambiente isolado |

---

# Relatório de Execução e Validação dos Testes

## Registro dos Resultados Obtidos

### Back-end — Jest

**Execução iniciada em:** 29/06/2026 às 21:53:39

| Suítes | Testes | Aprovados | Reprovados | Pendentes |
| ------ | ------ | --------- | ---------- | --------- |
| 2      | 28     | 28        | 0          | 0         |

**register.test.js**

| Descrição                                           | Resultado | Tempo  |
| --------------------------------------------------- | --------- | ------ |
| Validação usuário criado com sucesso                | Passed    | 0.003s |
| Validação de nome com números (tipo number)         | Passed    | 0.001s |
| Validação de nome com números dentro de string      | Passed    | —      |
| Validação de nome com string vazia                  | Passed    | —      |
| Validação de nome com caracteres especiais          | Passed    | 0.001s |
| Validação de email sem @                            | Passed    | 0.001s |
| Sem caracteres especiais inválidos no email         | Passed    | —      |
| Validação de email vazio                            | Passed    | —      |
| Validação de espaços no email                       | Passed    | 0.001s |
| Password deve ser string                            | Passed    | 0.001s |
| Password não pode ser vazia                         | Passed    | 0.001s |
| Password não pode ser menor que 8 caracteres        | Passed    | 0.001s |
| Password não pode ser maior que 255 caracteres      | Passed    | —      |
| Password deve conter pelo menos uma letra maiúscula | Passed    | —      |
| Password deve conter pelo menos uma letra minúscula | Passed    | 0.001s |
| Password deve conter pelo menos um número           | Passed    | —      |
| Password válida deve ser aceita                     | Passed    | —      |
| Phone deve ser string                               | Passed    | —      |
| Phone não pode ter letras                           | Passed    | —      |
| Phone não pode ser vazio                            | Passed    | 0.001s |
| Phone não pode ter caracteres especiais             | Passed    | —      |
| Phone não pode ter espaços                          | Passed    | 0.001s |
| Phone não pode ter mais de 20 caracteres            | Passed    | 0.001s |

**login.test.js**

| Descrição                                    | Resultado | Tempo  |
| -------------------------------------------- | --------- | ------ |
| Login com credenciais válidas retorna tokens | Passed    | 0.081s |
| Login com senha incorreta retorna 401        | Passed    | 0.057s |
| Login com email inexistente retorna 401      | Passed    | 0.004s |
| Login sem body retorna erro                  | Passed    | 0.004s |
| Logout retorna sucesso                       | Passed    | 0.003s |

**Resultado geral: 28/28 testes aprovados (100%)**

---

### Front-end — Playwright

**Execução iniciada em:** 29/06/2026

| Suítes | Testes | Aprovados | Reprovados | Pendentes |
| ------ | ------ | --------- | ---------- | --------- |
| 2      | 27     | 27        | 0          | 0         |

**cardapio.spec.js**

| Descrição                                                  | Resultado | Tempo |
| ---------------------------------------------------------- | --------- | ----- |
| deve exibir o banner hero com alt text correto             | Passed    | 1.3s  |
| deve renderizar todas as abas de navegação                 | Passed    | 1.3s  |
| aba "CAFÉS" deve estar ativa por padrão                    | Passed    | 1.6s  |
| deve exibir título e descrição da categoria ativa (Cafés)  | Passed    | 1.4s  |
| deve renderizar pelo menos um card na categoria ativa      | Passed    | 1.3s  |
| cards devem exibir nome, preço e descrição                 | Passed    | 1.3s  |
| deve exibir a seção de destaques com título correto        | Passed    | 754ms |
| deve exibir todos os itens de destaque com nome e preço    | Passed    | 1.0s  |
| destaques devem ter imagens com alt text                   | Passed    | 845ms |
| todas as imagens com conteúdo devem ter alt text não vazio | Passed    | 1.1s  |
| todas as abas devem ser focáveis via teclado               | Passed    | 1.2s  |
| abas devem ser ativáveis via tecla Enter                   | Passed    | 771ms |
| hero banner deve ter alt text descritivo                   | Passed    | 748ms |

**navbar.spec.js**

| Descrição                                                      | Resultado | Tempo |
| -------------------------------------------------------------- | --------- | ----- |
| deve renderizar o header e a nav                               | Passed    | 539ms |
| deve exibir o logo com alt text correto                        | Passed    | 742ms |
| logo deve ser um link para /home                               | Passed    | 880ms |
| deve renderizar todos os links de navegação                    | Passed    | 514ms |
| link "SOBRE" deve navegar para /sobre                          | Passed    | 753ms |
| link "ADOÇÃO" deve navegar para /adocao                        | Passed    | 480ms |
| link "CARDÁPIO" deve navegar para /cardapio                    | Passed    | 472ms |
| link "CONTATO" deve navegar para /contato                      | Passed    | 526ms |
| link "SOBRE" deve ter classe ativa quando na rota /sobre       | Passed    | 819ms |
| link "ADOÇÃO" deve ter classe ativa quando na rota /adocao     | Passed    | 904ms |
| link "CARDÁPIO" deve ter classe ativa quando na rota /cardapio | Passed    | 779ms |
| link "CONTATO" deve ter classe ativa quando na rota /contato   | Passed    | 852ms |
| link ativo não deve ser aplicado a links de outras rotas       | Passed    | 530ms |
| todos os links devem ser focáveis via teclado                  | Passed    | 732ms |

**Resultado geral: 27/27 testes aprovados (100%)**

---

## Evidências da Execução dos Testes

As evidências estão disponíveis na pasta `documents/evidences/` do repositório e incluem:

- `evidencia_teste_jest_register.jpeg` — Relatório HTML gerado pelo jest-html-reporter com os 23 testes de validação de cadastro aprovados
- `evidencia_teste_jest_login.jpeg` — Relatório HTML gerado pelo jest-html-reporter com os 5 testes de login e logout aprovados
- `testes-playwright.png` — Relatório HTML do Playwright com os 27 testes E2E aprovados no front-end

---

## Identificação e Classificação das Falhas Encontradas

Nenhuma falha foi identificada durante a execução dos testes. Todos os 55 casos de teste (28 no back-end e 27 no front-end) foram aprovados com os resultados esperados.

| Total de Casos de Teste | Aprovados | Reprovados | Taxa de Sucesso |
| ----------------------- | --------- | ---------- | --------------- |
| 55                      | 55        | 0          | 100%            |

---

## Análise Crítica dos Resultados

A execução dos testes confirmou que as funcionalidades implementadas estão em conformidade com os requisitos funcionais definidos.

**Pontos positivos:**

- Todas as validações de entrada no back-end (nome, e-mail, senha e telefone) funcionam corretamente, rejeitando dados inválidos conforme as regras definidas.
- A autenticação rejeita corretamente credenciais inválidas com status 401 e retorna tokens de acesso e refresh no login bem-sucedido.
- O cardápio renderiza corretamente todas as categorias, destaques e elementos de acessibilidade.
- A navbar exibe todos os links, aplica corretamente a classe ativa na rota atual e remove a classe nas demais rotas.
- Os testes de back-end utilizam mocks do repositório, garantindo isolamento e independência do banco de dados.

**Pontos de atenção:**

- Os testes E2E de login, cadastro e adoção via front-end (RF-08, RF-09, RF-04) não foram implementados nesta entrega.
- Não há cobertura de testes para as rotas de gerenciamento de perfil (RF-05) e listagem de gatos (RF-03) via Playwright.
- O `playwright.config.js` precisa estar na raiz do projeto e os testes devem ser executados a partir dela para respeitar o `baseURL` configurado.

---

## Proposição de Soluções para Correção das Falhas Identificadas

Como não foram identificadas falhas nos testes executados, as proposições abaixo são preventivas e visam a melhoria contínua:

| Ponto de Atenção                                | Proposta de Melhoria                                                                                                 |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Testes E2E de login e cadastro ausentes         | Criar testes Playwright para `/login` e `/register` cobrindo cenários de sucesso e erro                              |
| Testes E2E de adoção ausentes                   | Criar testes para o fluxo de solicitação de adoção autenticado                                                       |
| Cobertura de back-end limitada a auth           | Adicionar testes Jest + Supertest para as rotas de gatos (`/adocao/gatos`) e perfil de usuário (`/user/profile/:id`) |
| Dependência de frontend rodando para testes E2E | Configurar `webServer` no `playwright.config.js` para iniciar o frontend automaticamente antes dos testes            |
