import { test, expect } from '@playwright/test'

test.describe('Testar tela de login', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/")
    })

    test("Testar o login de usuário com sucesso", async ({ page }) => {
        await page.fill('#username', 'admin')
        await page.fill('#password', 'admin')

        await page.click('button[type=submit]')

        await expect(page.locator('#welcome-title')).toContainText('Bem-vindo, Admin!')
    })

    test("Testar o login com credenciais inválidas", async ({ page }) => {
        await page.fill('#username', 'admin')
        await page.fill('#password', 'senha_errada')

        await page.click('button[type=submit]')

        await expect(page.locator('#error-message')).toContainText('Usuário ou senha inválidos')
    })

    test("Testar login e logout", async ({ page }) => {
        await page.fill('#username', 'admin')
        await page.fill('#password', 'admin')

        await page.click('button[type=submit]')

        await expect(page.locator('#welcome-title')).toContainText('Bem-vindo, Admin!')

        await page.click('button#logout')

        await expect(page).toHaveURL('/')
    })
})