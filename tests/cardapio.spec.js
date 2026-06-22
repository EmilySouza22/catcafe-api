import { test, expect } from '@playwright/test';

const ABAS = [
  { key: 'cafes',    label: 'CAFÉS' },
  { key: 'bebidas',  label: 'BEBIDAS' },
  { key: 'salgados', label: 'SALGADOS' },
  { key: 'doces',    label: 'DOCES' },
  { key: 'veganos',  label: 'VEGANOS' },
];

const DESTAQUES = [
  { nome: 'Brownie com Nozes',      preco: 'R$ 16,00' },
  { nome: 'Pão de Queijo Recheado', preco: 'R$ 14,00' },
  { nome: 'Cheesecake de Frutas',   preco: 'R$ 18,00' },
  { nome: 'Açaí com Frutas',        preco: 'R$ 16,00' },
];

test.describe('CardapioPage', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/cardapio');
  });

  // ─── Renderização ────────────────────────────────────────────────────────────

  test.describe('Renderização', () => {

    test('deve exibir o banner hero com alt text correto', async ({ page }) => {
      const banner = page.getByAltText('Cardápio — Black Cat & Coffee');
      await expect(banner).toBeVisible();
    });

    test('deve renderizar todas as abas de navegação', async ({ page }) => {
      for (const { label } of ABAS) {
        await expect(page.getByRole('button', { name: label })).toBeVisible();
      }
    });

    test('aba "CAFÉS" deve estar ativa por padrão', async ({ page }) => {
      const abasCafes = page.getByRole('button', { name: 'CAFÉS' });
      await expect(abasCafes).toHaveClass(/abaAtiva/);
    });

    test('deve exibir título e descrição da categoria ativa (Cafés)', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Cafés' })).toBeVisible();
      await expect(page.getByText('Grãos selecionados e preparos especiais')).toBeVisible();
    });

    test('deve renderizar pelo menos um card na categoria ativa', async ({ page }) => {
      // Espresso é o primeiro item de cafes
      await expect(page.getByText('Espresso')).toBeVisible();
      await expect(page.getByText('R$ 8,00').first()).toBeVisible();
    });

    test('cards devem exibir nome, preço e descrição', async ({ page }) => {
      await expect(page.getByText('Cappuccino')).toBeVisible();
      await expect(page.getByText('R$ 12,00')).toBeVisible();
      await expect(page.getByText('Leve e cremoso, com espresso')).toBeVisible();
    });

  });

  // ─── Destaques ───────────────────────────────────────────────────────────────

  test.describe('Destaques do Cardápio', () => {

    test('deve exibir a seção de destaques com título correto', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Destaques do Cardápio' })).toBeVisible();
      await expect(page.getByText('Combinações perfeitas para acompanhar seu café.')).toBeVisible();
    });

    test('deve exibir todos os itens de destaque com nome e preço', async ({ page }) => {
      for (const { nome, preco } of DESTAQUES) {
        await expect(page.getByText(nome).last()).toBeVisible();
        // .last() porque Brownie e Açaí também aparecem em suas categorias
        await expect(page.getByText(preco).last()).toBeVisible();
      }
    });

    test('destaques devem ter imagens com alt text', async ({ page }) => {
      const altTexts = DESTAQUES.map(d => d.nome);
      for (const alt of altTexts) {
        // pega a última ocorrência (na seção de destaques)
        const imgs = page.getByAltText(alt);
        await expect(imgs.last()).toBeVisible();
      }
    });

  });

  // ─── Acessibilidade ──────────────────────────────────────────────────────────

  test.describe('Acessibilidade', () => {

    test('todas as imagens com conteúdo devem ter alt text não vazio', async ({ page }) => {
      const imgs = page.locator('img');
      const count = await imgs.count();

      for (let i = 0; i < count; i++) {
        const alt = await imgs.nth(i).getAttribute('alt');
        // alt pode ser vazio ("") apenas para imagens decorativas — aqui todas têm conteúdo
        expect(alt).not.toBeNull();
        expect(alt?.trim().length).toBeGreaterThan(0);
      }
    });

    test('todas as abas devem ser focáveis via teclado', async ({ page }) => {
      for (const { label } of ABAS) {
        const btn = page.getByRole('button', { name: label });
        await btn.focus();
        await expect(btn).toBeFocused();
      }
    });

    test('abas devem ser ativáveis via tecla Enter', async ({ page }) => {
      const abaBebidas = page.getByRole('button', { name: 'BEBIDAS' });
      await abaBebidas.focus();
      await abaBebidas.press('Enter');
      await expect(abaBebidas).toHaveClass(/abaAtiva/);
      await expect(page.getByRole('heading', { name: 'Bebidas' })).toBeVisible();
    });

    test('hero banner deve ter alt text descritivo', async ({ page }) => {
      const banner = page.locator('img').first();
      const alt = await banner.getAttribute('alt');
      expect(alt?.trim().length).toBeGreaterThan(0);
    });

  });

});