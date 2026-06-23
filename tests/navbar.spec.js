import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

const NAV_LINKS = [
	{ label: 'SOBRE', path: '/sobre' },
	{ label: 'ADOÇÃO', path: '/adocao' },
	{ label: 'CARDÁPIO', path: '/cardapio' },
	{ label: 'CONTATO', path: '/contato' },
];

test.describe('Navbar', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(`${BASE_URL}/home`);
	});

	// Renderização

	test('deve renderizar o header e a nav', async ({ page }) => {
		await expect(page.locator('header')).toBeVisible();
		await expect(page.locator('nav')).toBeVisible();
	});

	test('deve exibir o logo com alt text correto', async ({ page }) => {
		const logo = page.getByAltText('Logo do Black Cat & Coffee');
		await expect(logo).toBeVisible();
	});

	test('logo deve ser um link para /home', async ({ page }) => {
		const logoLink = page.locator('a[href="/home"]');
		await expect(logoLink).toBeVisible();
	});

	test('deve renderizar todos os links de navegação', async ({ page }) => {
		for (const { label } of NAV_LINKS) {
			await expect(page.getByRole('link', { name: label })).toBeVisible();
		}
	});

	test('deve exibir o botão de menu com aria-label', async ({ page }) => {
		const menuBtn = page.getByRole('button', { name: 'Menu' });
		await expect(menuBtn).toBeVisible();
	});

	// Navegação

	for (const { label, path } of NAV_LINKS) {
		test(`link "${label}" deve navegar para ${path}`, async ({ page }) => {
			await page.getByRole('link', { name: label }).click();
			await expect(page).toHaveURL(new RegExp(path));
		});
	}

	// Active state

	for (const { label, path } of NAV_LINKS) {
		test(`link "${label}" deve ter classe ativa quando na rota ${path}`, async ({
			page,
		}) => {
			await page.goto(`${BASE_URL}${path}`);
			const link = page.getByRole('link', { name: label });
			// NavLink adiciona a classe linkActive quando a rota está ativa
			await expect(link).toHaveClass(/linkActive/);
		});
	}

	test('link ativo não deve ser aplicado a links de outras rotas', async ({
		page,
	}) => {
		await page.goto(`${BASE_URL}/sobre`);
		const outrosLinks = NAV_LINKS.filter((l) => l.path !== '/sobre');
		for (const { label } of outrosLinks) {
			const link = page.getByRole('link', { name: label });
			await expect(link).not.toHaveClass(/linkActive/);
		}
	});

	// Acessibilidade

	test('todos os links devem ser focáveis via teclado', async ({ page }) => {
		for (const { label } of NAV_LINKS) {
			const link = page.getByRole('link', { name: label });
			await link.focus();
			await expect(link).toBeFocused();
		}
	});

	test('botão de menu deve ser focável via teclado', async ({ page }) => {
		const menuBtn = page.getByRole('button', { name: 'Menu' });
		await menuBtn.focus();
		await expect(menuBtn).toBeFocused();
	});
});
