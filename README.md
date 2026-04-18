# Sistema de Cat Café

**Atividade Avaliativa – Testes de Sistemas (SENAI/SC)**  

**Aluna:** Emily Souza    

**Objetivo:** Planejar, executar e documentar testes unitários em um sistema web contemplando front-end e back-end, utilizando a ferramenta Jest, estruturando um levantamento de requisitos, um descritivo de casos de teste, um relatório de execução de testes e a validação dos resultados, conforme normas, métodos e técnicas de testes de software adotadas pela indústria.

## Contexto
Sistema web de Cat Café com funcionalidades de cadastro/login de usuários, listagem e adoção de gatos, cardápio com pedidos e painel administrativo. O projeto contempla front-end (React + Vite) e back-end (Express + Node.js + MySQL), com testes unitários implementados via Jest em ambas as camadas.

## Stack
| Camada | Tecnologia |
|--------|-----------|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Banco de Dados | MySQL |
| Testes | Jest |

## Estrutura do Repositório
>

---

## Requisitos Funcionais

### Usuários
| ID | Requisito | Descrição |
|----|-----------|-----------|
| RF001 | Cadastro | O sistema deve permitir que o usuário realize cadastro informando nome, email e senha |
| RF002 | Login | O sistema deve permitir que o usuário faça login com email e senha |
| RF003 | Edição | O sistema deve permitir que o usuário edite nome e telefone |

### Gatos
| ID | Requisito | Descrição |
|----|-----------|-----------|
| RF004 | Listar Gatos | O sistema deve listar todos os gatos cadastrados |
| RF005 | Infos Gatos | O sistema deve mostrar foto, nome, idade, sexo e descrição do gato |
| RF006 | Filtro Gatos | O sistema deve permitir filtrar gatos por idade, sexo e status de adoção |

### Cardápio
| ID | Requisito | Descrição |
|----|-----------|-----------|
| RF007 | Listar Produtos | O sistema deve listar produtos do cardápio (nome, preço, descrição, imagem) |
| RF008 | Filtrar Produtos | O sistema deve permitir filtrar por categoria (cafés, doces, salgados) |
| RF009 | Comanda | O sistema deve permitir que o usuário crie uma comanda/pedido |
| RF010 | Pedido | O sistema deve permitir adicionar produtos na comanda |
| RF011 | Pagamento | O sistema deve gerar o valor total da comanda para pagamento |

### Adoção
| ID | Requisito | Descrição |
|----|-----------|-----------|
| RF012 | Formulário de Adoção | O sistema deve permitir que o usuário envie um formulário de adoção |
| RF013 | Status de Adoção | O sistema deve permitir que o usuário acompanhe o status da adoção |

### Administração
| ID | Requisito | Descrição |
|----|-----------|-----------|
| RF014 | Cadastro de Gatos | O administrador deve poder cadastrar gatos |
| RF015 | Cadastro de Produtos | O administrador deve poder cadastrar produtos do cardápio |
| RF016 | Dashboard | O administrador deve visualizar relatórios de adoções e vendas de produtos |

---

## Ferramentas e Ambiente de Teste

| Item | Descrição |
|------|-----------|
| Ferramenta de Teste | Jest |
| Ambiente | Desenvolvimento/local |
| Servidor | Node.js |
| Banco de Dados | MySQL |
| Browser | Chrome (para testes frontend) |

---

## Executar os Testes
```bash
# Backend
cd backend
npm install
npm test

# Frontend
cd frontend
npm install
npm test
```
