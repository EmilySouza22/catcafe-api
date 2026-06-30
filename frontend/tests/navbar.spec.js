import { test, expect } from '@playwright/test';

const NAV_LINKS = [
	{ label: 'SOBRE', path: '/sobre' },
	{ label: 'ADOÇÃO', path: '/adocao' },
	{ label: 'CARDÁPIO', path: '/cardapio' },
	{ label: 'CONTATO', path: '/contato' },
];

test.describe('Navbar', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/home');
	});

	test('deve renderizar o header e a nav', async ({ page }) => {
		await expect(page.locator('header')).toBeVisible();
		await expect(page.locator('nav')).toBeVisible();
	});

	test('deve exibir o logo com alt text correto', async ({ page }) => {
		const logo = page.locator('nav').getByAltText('Logo do Black Cat & Coffee');
		await expect(logo).toBeVisible();
	});

	test('logo deve ser um link para /home', async ({ page }) => {
		const logoLink = page.locator('nav a[href="/home"]');
		await expect(logoLink).toBeVisible();
	});

	test('deve renderizar todos os links de navegação', async ({ page }) => {
		for (const { label } of NAV_LINKS) {
			await expect(
				page.locator('nav').getByRole('link', { name: label, exact: true }),
			).toBeVisible();
		}
	});

	for (const { label, path } of NAV_LINKS) {
		test(`link "${label}" deve navegar para ${path}`, async ({ page }) => {
			await page
				.locator('nav')
				.getByRole('link', { name: label, exact: true })
				.click();
			await expect(page).toHaveURL(new RegExp(path));
		});
	}

	for (const { label, path } of NAV_LINKS) {
		test(`link "${label}" deve ter classe ativa quando na rota ${path}`, async ({
			page,
		}) => {
			await page.goto(path);
			const link = page
				.locator('nav')
				.getByRole('link', { name: label, exact: true });
			await expect(link).toHaveClass(/linkActive/);
		});
	}

	test('link ativo não deve ser aplicado a links de outras rotas', async ({
		page,
	}) => {
		await page.goto('/sobre');
		const outrosLinks = NAV_LINKS.filter((l) => l.path !== '/sobre');
		for (const { label } of outrosLinks) {
			const link = page
				.locator('nav')
				.getByRole('link', { name: label, exact: true });
			await expect(link).not.toHaveClass(/linkActive/);
		}
	});

	test('todos os links devem ser focáveis via teclado', async ({ page }) => {
		for (const { label } of NAV_LINKS) {
			const link = page
				.locator('nav')
				.getByRole('link', { name: label, exact: true });
			await link.focus();
			await expect(link).toBeFocused();
		}
	});
});
