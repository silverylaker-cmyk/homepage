import { expect, test } from "@playwright/test";

test("body explorer selects regions and opens the matching care page", async ({ page }) => {
  await page.goto("/");
  const panel = page.locator("#region-panel");
  await expect(panel.getByRole("heading", { name: /궁금한 부위를/ })).toBeVisible();
  await page.getByRole("button", { name: "귀 선택" }).click();
  await expect(panel.getByRole("heading", { name: "귀 진료" })).toBeVisible();
  await expect(panel.getByRole("link", { name: /난청·이명 자세히 보기/ })).toHaveAttribute("href", "/care/hearing-tinnitus/");
  await page.getByRole("group", { name: "부위 이름으로 선택" }).getByRole("button", { name: "코" }).click();
  await expect(panel.getByRole("heading", { name: "코 진료" })).toBeVisible();
  await page.getByRole("button", { name: "입 선택" }).click();
  await expect(panel.getByRole("link", { name: /암 자세히 보기/ })).toHaveAttribute("href", "/care/head-neck-cancer/");
  await page.getByRole("button", { name: "목 선택" }).focus();
  await page.keyboard.press("Enter");
  await expect(panel.getByRole("heading", { name: "목 부위 진료" })).toBeVisible();
  await page.getByRole("button", { name: /선택 초기화/ }).click();
  await expect(panel.getByRole("heading", { name: /궁금한 부위를/ })).toBeVisible();
  await page.getByRole("button", { name: "코 선택" }).focus();
  await page.keyboard.press("Space");
  await expect(panel.getByRole("heading", { name: "코 진료" })).toBeVisible();
  await panel.getByRole("link", { name: /만성·알레르기 비염 자세히 보기/ }).click();
  await expect(page).toHaveURL(/\/care\/rhinitis\/?$/);
});

test("mobile menu, FAQ, and fees controls work", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.locator(".menu-toggle");
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  await page.goto("/faq");
  await page.getByText("암과 두경부 종양은 같은 뜻인가요?").click();
  await expect(page.getByText(/양성과 악성 종양이 모두 포함/)).toBeVisible();
  await page.goto("/fees");
  await page.getByRole("searchbox", { name: "항목명 또는 코드 검색" }).fill("없는 항목");
  await expect(page.getByRole("status")).toHaveText("검색 결과 0건");
});

for (const width of [360, 390, 768, 1440]) {
  test(`homepage has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
    await page.screenshot({ path: `artifacts/home-${width}.png`, fullPage: true });
  });
}

test("care links remain available with JavaScript disabled", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3000/");
  await expect(page.getByRole("link", { name: /암/ }).first()).toBeVisible();
  await context.close();
});

test("main information pages render without overflow on mobile and desktop", async ({ page }) => {
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ["/about", "/care", "/care/head-neck-cancer", "/examinations", "/visit", "/faq", "/notices", "/health", "/fees", "/privacy"]) {
      await page.goto(path);
      await expect(page.locator("h1")).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth), `${path} at ${width}px`).toBeLessThanOrEqual(1);
    }
  }
});
