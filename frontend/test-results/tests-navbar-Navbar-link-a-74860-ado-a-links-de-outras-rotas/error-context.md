# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\navbar.spec.js >> Navbar >> link ativo não deve ser aplicado a links de outras rotas
- Location: tests\navbar.spec.js:60:2

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/home", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const NAV_LINKS = [
  4  | 	{ label: 'SOBRE', path: '/sobre' },
  5  | 	{ label: 'ADOÇÃO', path: '/adocao' },
  6  | 	{ label: 'CARDÁPIO', path: '/cardapio' },
  7  | 	{ label: 'CONTATO', path: '/contato' },
  8  | ];
  9  | 
  10 | test.describe('Navbar', () => {
  11 | 	test.beforeEach(async ({ page }) => {
> 12 | 		await page.goto('/home');
     |              ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  13 | 	});
  14 | 
  15 | 	test('deve renderizar o header e a nav', async ({ page }) => {
  16 | 		await expect(page.locator('header')).toBeVisible();
  17 | 		await expect(page.locator('nav')).toBeVisible();
  18 | 	});
  19 | 
  20 | 	test('deve exibir o logo com alt text correto', async ({ page }) => {
  21 | 		const logo = page.locator('nav').getByAltText('Logo do Black Cat & Coffee');
  22 | 		await expect(logo).toBeVisible();
  23 | 	});
  24 | 
  25 | 	test('logo deve ser um link para /home', async ({ page }) => {
  26 | 		const logoLink = page.locator('nav a[href="/home"]');
  27 | 		await expect(logoLink).toBeVisible();
  28 | 	});
  29 | 
  30 | 	test('deve renderizar todos os links de navegação', async ({ page }) => {
  31 | 		for (const { label } of NAV_LINKS) {
  32 | 			await expect(
  33 | 				page.locator('nav').getByRole('link', { name: label, exact: true }),
  34 | 			).toBeVisible();
  35 | 		}
  36 | 	});
  37 | 
  38 | 	for (const { label, path } of NAV_LINKS) {
  39 | 		test(`link "${label}" deve navegar para ${path}`, async ({ page }) => {
  40 | 			await page
  41 | 				.locator('nav')
  42 | 				.getByRole('link', { name: label, exact: true })
  43 | 				.click();
  44 | 			await expect(page).toHaveURL(new RegExp(path));
  45 | 		});
  46 | 	}
  47 | 
  48 | 	for (const { label, path } of NAV_LINKS) {
  49 | 		test(`link "${label}" deve ter classe ativa quando na rota ${path}`, async ({
  50 | 			page,
  51 | 		}) => {
  52 | 			await page.goto(path);
  53 | 			const link = page
  54 | 				.locator('nav')
  55 | 				.getByRole('link', { name: label, exact: true });
  56 | 			await expect(link).toHaveClass(/linkActive/);
  57 | 		});
  58 | 	}
  59 | 
  60 | 	test('link ativo não deve ser aplicado a links de outras rotas', async ({
  61 | 		page,
  62 | 	}) => {
  63 | 		await page.goto('/sobre');
  64 | 		const outrosLinks = NAV_LINKS.filter((l) => l.path !== '/sobre');
  65 | 		for (const { label } of outrosLinks) {
  66 | 			const link = page
  67 | 				.locator('nav')
  68 | 				.getByRole('link', { name: label, exact: true });
  69 | 			await expect(link).not.toHaveClass(/linkActive/);
  70 | 		}
  71 | 	});
  72 | 
  73 | 	test('todos os links devem ser focáveis via teclado', async ({ page }) => {
  74 | 		for (const { label } of NAV_LINKS) {
  75 | 			const link = page
  76 | 				.locator('nav')
  77 | 				.getByRole('link', { name: label, exact: true });
  78 | 			await link.focus();
  79 | 			await expect(link).toBeFocused();
  80 | 		}
  81 | 	});
  82 | });
  83 | 
```