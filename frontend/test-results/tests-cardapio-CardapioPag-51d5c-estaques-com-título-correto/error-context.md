# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\cardapio.spec.js >> CardapioPage >> Destaques do Cardápio >> deve exibir a seção de destaques com título correto
- Location: tests\cardapio.spec.js:70:3

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/cardapio", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | const ABAS = [
  4   | 	{ key: 'cafes', label: 'CAFÉS' },
  5   | 	{ key: 'bebidas', label: 'BEBIDAS' },
  6   | 	{ key: 'salgados', label: 'SALGADOS' },
  7   | 	{ key: 'doces', label: 'DOCES' },
  8   | 	{ key: 'veganos', label: 'VEGANOS' },
  9   | ];
  10  | 
  11  | const DESTAQUES = [
  12  | 	{ nome: 'Brownie com Nozes', preco: 'R$ 16,00' },
  13  | 	{ nome: 'Pão de Queijo Recheado', preco: 'R$ 14,00' },
  14  | 	{ nome: 'Cheesecake de Frutas', preco: 'R$ 18,00' },
  15  | 	{ nome: 'Açaí com Frutas', preco: 'R$ 16,00' },
  16  | ];
  17  | 
  18  | test.describe('CardapioPage', () => {
  19  | 	test.beforeEach(async ({ page }) => {
> 20  | 		await page.goto('/cardapio');
      |              ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  21  | 	});
  22  | 
  23  | 	// Renderização
  24  | 
  25  | 	test.describe('Renderização', () => {
  26  | 		test('deve exibir o banner hero com alt text correto', async ({ page }) => {
  27  | 			const banner = page.getByAltText('Cardápio — Black Cat & Coffee');
  28  | 			await expect(banner).toBeVisible();
  29  | 		});
  30  | 
  31  | 		test('deve renderizar todas as abas de navegação', async ({ page }) => {
  32  | 			for (const { label } of ABAS) {
  33  | 				await expect(page.getByRole('button', { name: label })).toBeVisible();
  34  | 			}
  35  | 		});
  36  | 
  37  | 		test('aba "CAFÉS" deve estar ativa por padrão', async ({ page }) => {
  38  | 			const abasCafes = page.getByRole('button', { name: 'CAFÉS' });
  39  | 			await expect(abasCafes).toHaveClass(/abaAtiva/);
  40  | 		});
  41  | 
  42  | 		test('deve exibir título e descrição da categoria ativa (Cafés)', async ({
  43  | 			page,
  44  | 		}) => {
  45  | 			await expect(page.getByRole('heading', { name: 'Cafés' })).toBeVisible();
  46  | 			await expect(
  47  | 				page.getByText('Grãos selecionados e preparos especiais'),
  48  | 			).toBeVisible();
  49  | 		});
  50  | 
  51  | 		test('deve renderizar pelo menos um card na categoria ativa', async ({
  52  | 			page,
  53  | 		}) => {
  54  | 			await expect(page.getByText('Espresso').first()).toBeVisible();
  55  | 			await expect(page.getByText('R$ 8,00').first()).toBeVisible();
  56  | 		});
  57  | 
  58  | 		test('cards devem exibir nome, preço e descrição', async ({ page }) => {
  59  | 			await expect(page.getByText('Cappuccino')).toBeVisible();
  60  | 			await expect(page.getByText('R$ 12,00')).toBeVisible();
  61  | 			await expect(
  62  | 				page.getByText('Leve e cremoso, com espresso'),
  63  | 			).toBeVisible();
  64  | 		});
  65  | 	});
  66  | 
  67  | 	// Destaques
  68  | 
  69  | 	test.describe('Destaques do Cardápio', () => {
  70  | 		test('deve exibir a seção de destaques com título correto', async ({
  71  | 			page,
  72  | 		}) => {
  73  | 			await expect(
  74  | 				page.getByRole('heading', { name: 'Destaques do Cardápio' }),
  75  | 			).toBeVisible();
  76  | 			await expect(
  77  | 				page.getByText('Combinações perfeitas para acompanhar seu café.'),
  78  | 			).toBeVisible();
  79  | 		});
  80  | 
  81  | 		test('deve exibir todos os itens de destaque com nome e preço', async ({
  82  | 			page,
  83  | 		}) => {
  84  | 			for (const { nome, preco } of DESTAQUES) {
  85  | 				await expect(page.getByText(nome).last()).toBeVisible();
  86  | 				// .last() porque Brownie e Açaí também aparecem em suas categorias
  87  | 				await expect(page.getByText(preco).last()).toBeVisible();
  88  | 			}
  89  | 		});
  90  | 
  91  | 		test('destaques devem ter imagens com alt text', async ({ page }) => {
  92  | 			const altTexts = DESTAQUES.map((d) => d.nome);
  93  | 			for (const alt of altTexts) {
  94  | 				// pega a última ocorrência (na seção de destaques)
  95  | 				const imgs = page.getByAltText(alt);
  96  | 				await expect(imgs.last()).toBeVisible();
  97  | 			}
  98  | 		});
  99  | 	});
  100 | 
  101 | 	// Acessibilidade
  102 | 
  103 | 	test.describe('Acessibilidade', () => {
  104 | 		test('todas as imagens com conteúdo devem ter alt text não vazio', async ({
  105 | 			page,
  106 | 		}) => {
  107 | 			const imgs = page.locator('img');
  108 | 			const count = await imgs.count();
  109 | 
  110 | 			for (let i = 0; i < count; i++) {
  111 | 				const alt = await imgs.nth(i).getAttribute('alt');
  112 | 				// alt pode ser vazio ("") apenas para imagens decorativas — aqui todas têm conteúdo
  113 | 				expect(alt).not.toBeNull();
  114 | 				expect(alt?.trim().length).toBeGreaterThan(0);
  115 | 			}
  116 | 		});
  117 | 
  118 | 		test('todas as abas devem ser focáveis via teclado', async ({ page }) => {
  119 | 			for (const { label } of ABAS) {
  120 | 				const btn = page.getByRole('button', { name: label });
```