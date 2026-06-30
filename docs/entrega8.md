# ENTREGA 8 — Descritivo de Casos de Teste de Software

## 8.1 Casos de Teste

### Back-end (Jest + Supertest)

| ID Caso de Teste | ID Requisito Funcional | Descrição do Caso de Teste                 | Pré-condições                                                             | Passos para Execução                                                                                              | Resultado Esperado                                                      |
| ---------------- | ---------------------- | ------------------------------------------ | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| CT-01            | RF-01                  | Cadastrar usuário com dados válidos        | Banco de dados disponível e tabela `users` sem conflito de email/telefone | 1. Enviar POST `/auth/register` com `name`, `email`, `password` e `phone` válidos<br>2. Verificar resposta da API | Retorna status 201 com `success: true` e `data.email` do usuário criado |
| CT-02            | RF-01                  | Tentar cadastrar com e-mail já existente   | Usuário com o mesmo e-mail já cadastrado no banco                         | 1. Enviar POST `/auth/register` com e-mail duplicado                                                              | Retorna status 400 com `message`: "Email já cadastrado no sistema"      |
| CT-03            | RF-01                  | Tentar cadastrar com telefone já existente | Usuário com o mesmo telefone já cadastrado no banco                       | 1. Enviar POST `/auth/register` com telefone duplicado                                                            | Retorna status 400 com `message`: "Telefone já cadastrado no sistema"   |
| CT-04            | RF-01                  | Cadastrar com nome contendo números        | Banco de dados disponível                                                 | 1. Enviar POST `/auth/register` com `name`: "Emily1"                                                              | Retorna status 400 com `success: false` e `message`: "Dados inválidos"  |
| CT-05            | RF-01                  | Cadastrar com e-mail sem @                 | Banco de dados disponível                                                 | 1. Enviar POST `/auth/register` com `email` sem "@"                                                               | Retorna status 400 com `success: false` e `message`: "Dados inválidos"  |
| CT-06            | RF-01                  | Cadastrar com senha menor que 8 caracteres | Banco de dados disponível                                                 | 1. Enviar POST `/auth/register` com `password` de 6 caracteres                                                    | Retorna status 400 com `success: false` e `message`: "Dados inválidos"  |
| CT-07            | RF-01                  | Cadastrar com senha sem letra maiúscula    | Banco de dados disponível                                                 | 1. Enviar POST `/auth/register` com `password`: "gato12345"                                                       | Retorna status 400 com `success: false` e `message`: "Dados inválidos"  |
| CT-08            | RF-01                  | Cadastrar com telefone contendo letras     | Banco de dados disponível                                                 | 1. Enviar POST `/auth/register` com `phone`: "1191234a678"                                                        | Retorna status 400 com `success: false` e `message`: "Dados inválidos"  |
| CT-09            | RF-02                  | Login com e-mail e senha corretos          | Usuário `admin@catcafe.com` já cadastrado no banco                        | 1. Enviar POST `/auth/login` com `email` e `password` corretos                                                    | Retorna status 200 com `success: true`, `accessToken` e `refreshToken`  |
| CT-10            | RF-02                  | Login com senha incorreta                  | Usuário `admin@catcafe.com` já cadastrado no banco                        | 1. Enviar POST `/auth/login` com `email` correto e `password` errado                                              | Retorna status 401 com `message`: "Credenciais inválidas"               |
| CT-11            | RF-02                  | Login com e-mail não cadastrado            | Banco de dados disponível                                                 | 1. Enviar POST `/auth/login` com `email` inexistente                                                              | Retorna status 401 com `message`: "Credenciais inválidas"               |
| CT-12            | RF-02                  | Login sem body retorna erro                | Banco de dados disponível                                                 | 1. Enviar POST `/auth/login` com body vazio `{}`                                                                  | Retorna status 401 com `success: false`                                 |
| CT-13            | RF-02                  | Logout retorna sucesso                     | Nenhuma pré-condição                                                      | 1. Enviar POST `/auth/logout`                                                                                     | Retorna status 200 com `success: true`                                  |
| CT-14            | RF-03                  | Listar gatos disponíveis para adoção       | Tabela `cats` com registros cadastrados                                   | 1. Enviar GET `/adocao/gatos`                                                                                     | Retorna status 200 com array de gatos                                   |
| CT-15            | RF-03                  | Buscar gato por ID existente               | Gato com ID informado cadastrado no banco                                 | 1. Enviar GET `/adocao/gatos/:id` com ID válido                                                                   | Retorna status 200 com dados do gato                                    |
| CT-16            | RF-04                  | Solicitar adoção autenticado               | Usuário autenticado e gato disponível                                     | 1. Enviar POST `/adocao/gatos/:id/solicitar` com token válido                                                     | Retorna status 201 com solicitação de adoção criada                     |
| CT-17            | RF-04                  | Solicitar adoção sem autenticação          | Nenhuma pré-condição                                                      | 1. Enviar POST `/adocao/gatos/:id/solicitar` sem token                                                            | Retorna status 401 ou 403                                               |

---

### Front-end (Playwright)

| ID Caso de Teste | ID Requisito Funcional | Descrição do Caso de Teste                               | Pré-condições                          | Passos para Execução                                                                            | Resultado Esperado                                                                               |
| ---------------- | ---------------------- | -------------------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| CT-18            | RF-08                  | Exibir tela de login com campos visíveis                 | Frontend rodando em `localhost:5173`   | 1. Acessar `/login`<br>2. Verificar presença dos elementos                                      | Campos de e-mail, senha e botão "ENTRAR" estão visíveis                                          |
| CT-19            | RF-09                  | Exibir tela de cadastro ao acessar /register             | Frontend rodando em `localhost:5173`   | 1. Acessar `/register`<br>2. Verificar presença dos elementos                                   | Campos de nome, e-mail, telefone e senha estão visíveis                                          |
| CT-20            | RF-09                  | Link "Entrar" na tela de cadastro redireciona para login | Tela de cadastro aberta                | 1. Acessar `/register`<br>2. Clicar no link "Entrar"                                            | URL muda para `/login`                                                                           |
| CT-21            | RF-10                  | Exibir erro ao tentar cadastro com dados inválidos       | Frontend rodando e API disponível      | 1. Acessar `/register`<br>2. Preencher campos com dados inválidos<br>3. Clicar em "CRIAR CONTA" | Mensagem "Erro ao criar conta." é exibida na tela                                                |
| CT-22            | RF-11                  | Exibir erro ao tentar login com credenciais inválidas    | Frontend rodando e API disponível      | 1. Acessar `/login`<br>2. Preencher e-mail e senha incorretos<br>3. Clicar em "ENTRAR"          | Mensagem de erro é exibida e tela de login permanece visível                                     |
| CT-23            | RF-12                  | Redirecionar para /home após login bem-sucedido          | Usuário cadastrado e API disponível    | 1. Acessar `/login`<br>2. Preencher credenciais corretas<br>3. Clicar em "ENTRAR"               | URL muda para `/home`                                                                            |
| CT-24            | RF-13                  | Renderizar todas as abas do cardápio                     | Usuário na página `/cardapio`          | 1. Acessar `/cardapio`<br>2. Verificar abas CAFÉS, BEBIDAS, SALGADOS, DOCES, VEGANOS            | Todas as cinco abas estão visíveis                                                               |
| CT-25            | RF-13                  | Aba "CAFÉS" ativa por padrão no cardápio                 | Usuário na página `/cardapio`          | 1. Acessar `/cardapio`                                                                          | Aba "CAFÉS" possui classe `abaAtiva` e itens de café são exibidos                                |
| CT-26            | RF-13                  | Exibir seção de destaques com todos os itens             | Usuário na página `/cardapio`          | 1. Acessar `/cardapio`<br>2. Verificar seção "Destaques do Cardápio"                            | Brownie com Nozes, Pão de Queijo Recheado, Cheesecake de Frutas e Açaí com Frutas estão visíveis |
| CT-27            | RF-14                  | Renderizar todos os links da navbar                      | Usuário em qualquer página autenticada | 1. Acessar `/home`<br>2. Verificar links SOBRE, ADOÇÃO, CARDÁPIO, CONTATO                       | Todos os quatro links estão visíveis e funcionais                                                |
| CT-28            | RF-14                  | Logo da navbar é link para /home                         | Usuário em qualquer página             | 1. Acessar `/cardapio`<br>2. Clicar no logo                                                     | URL muda para `/home`                                                                            |
| CT-29            | RF-15                  | Exibir lista de gatos para adoção                        | Usuário na página `/gatos`             | 1. Acessar `/gatos`<br>2. Verificar cards de gatos                                              | Cards de Luna, Salem, Nox, Pandora, Mochi e Bruxo estão visíveis                                 |
| CT-30            | RF-15                  | Botão "Quero adotar" redireciona para /adocao            | Usuário na página `/gatos`             | 1. Acessar `/gatos`<br>2. Clicar em "Quero adotar" em qualquer card                             | URL muda para `/adocao`                                                                          |

---

## 8.2 Ferramentas e Ambientes de Teste

### Ferramentas de Teste

| Ferramenta           | Finalidade                                          |
| -------------------- | --------------------------------------------------- |
| Jest                 | Execução dos testes unitários no back-end           |
| Supertest            | Simulação de requisições HTTP nas rotas do back-end |
| Playwright           | Execução dos testes end-to-end no front-end         |
| Postman              | Testes manuais e validação das rotas da API         |
| Console do navegador | Inspeção de logs e comportamento do front-end       |

### Ambiente de Teste

| Item                | Descrição                     |
| ------------------- | ----------------------------- |
| Ambiente            | Desenvolvimento local         |
| Servidor de Teste   | Node.js                       |
| Banco de Dados      | MySQL 8.0 (via Docker)        |
| Browser             | Google Chrome (última versão) |
| Sistema Operacional | Windows 11                    |

---

## 8.3 Requisitos Funcionais

### Back-end

| ID    | Requisito                 | Descrição                                                                                                            |
| ----- | ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| RF-01 | Cadastro de Usuário       | O sistema deve permitir cadastrar usuários com nome, e-mail, senha e telefone, validando os dados antes de persistir |
| RF-02 | Login e Logout de Usuário | O sistema deve autenticar usuários com e-mail e senha, retornando tokens de acesso e refresh, e permitir logout      |
| RF-03 | Listagem de Gatos         | O sistema deve listar todos os gatos disponíveis para adoção e permitir busca por ID                                 |
| RF-04 | Solicitação de Adoção     | O sistema deve permitir que usuários autenticados solicitem a adoção de um gato disponível                           |
| RF-05 | Gerenciamento de Perfil   | O sistema deve permitir que o usuário visualize, atualize e exclua sua própria conta                                 |

### Front-end

| ID    | Requisito                    | Descrição                                                                                                   |
| ----- | ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| RF-08 | Tela de Login                | O sistema deve exibir um formulário de login com campos de e-mail e senha                                   |
| RF-09 | Tela de Cadastro             | O sistema deve exibir um formulário de cadastro com campos de nome, e-mail, telefone e senha                |
| RF-10 | Feedback de erro no cadastro | O sistema deve exibir mensagem de erro quando o cadastro falhar                                             |
| RF-11 | Feedback de erro no login    | O sistema deve exibir mensagem de erro quando o login falhar                                                |
| RF-12 | Redirecionamento pós-login   | O sistema deve redirecionar o usuário para `/home` após login bem-sucedido                                  |
| RF-13 | Cardápio por categorias      | O sistema deve exibir o cardápio organizado em abas por categoria, com seção de destaques                   |
| RF-14 | Navegação entre páginas      | O sistema deve exibir navbar com links funcionais para todas as seções do site                              |
| RF-15 | Listagem e adoção de gatos   | O sistema deve exibir cards dos gatos disponíveis com botão de redirecionamento para o formulário de adoção |
