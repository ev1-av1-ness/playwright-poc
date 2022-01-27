import { test, expect, Page } from '@playwright/test';
import * as assert from "assert";
import { MainPage } from '../pages/main-page';

//test.describe.serial('use the same page', () => { // Это Feature

test.describe.parallel('Authorization', () => { //Это Feature

  /** Scenario:
   *
   * @tag Feature Auth
   */

  //Хороший вопрос, как сюда пробросить подобные аннотации аллюра?
  //@Test
  
  
  //@AllureId("")
  //@DisplayName("")
  
  //allure-js//
  
  
  //@Step("") - но в обычный аллюр репорт прокидывается обычный шаг из test.step(`Открыть главную страницу`, async () 


  //адекватные ли beforeAll/beforeEach/afterEach/afterAll ?


  // test.beforeEach(async ({ context, browser }, testInfo) => {
  //   context = await browser.newContext();
  //   console.log(Running ${testInfo.title});
  // });

  // test.afterEach(async ({ page, context }, testInfo) => {
  //   await context.close();
  //   console.log(Finished ${testInfo.title} with status ${testInfo.status});

  //   if (testInfo.status !== testInfo.expectedStatus)
  //     console.log(Did not run as expected, ended up at ${page.url()});
  // });


  let page: Page;

  test.beforeAll(async ({ browser }) => {
    console.log('Page opened before tests');
    page = await browser.newPage();
  }); //лишнее

  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
  });

  test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

    if (testInfo.status !== testInfo.expectedStatus)
      console.log(`Did not run as expected, ended up at ${page.url()}`);
  });

  test.afterAll(async () => {
    console.log('Page closed after tests');
    await page.close();
  });

  test('Test for format caption in registration on main page', async ({ page }) => { // Это Scenario
    
    /**
     * @severity critical
     */

    const mainPage = new MainPage(page);

    await test.step(`Открыть главную страницу`, async () => {
      await mainPage.goto();
    });
    await test.step(`Открыть форму регистрации и логина`, async () => {
      await mainPage.openSignUpForm();
    });
    await test.step(`На странице есть предупреждение о формате почты и пароля`, async () => {
      const locator = page.locator('');
      await expect(locator).toContainText('')
    });
  });

  // болванки

  // test('Core Concepts table of contents', async ({ page }) => {
  //   const playwrightDev = new PlaywrightDevPage(page);
  //   await playwrightDev.goto();
  //   await playwrightDev.coreConcepts();
  //   await expect(playwrightDev.tocList.first()).toHaveText('Browser');
  // });


  // test("T5 Check that intitle functionality works", async () => {
  //   startPage.initiateSearch("intitle:panda");
  //   await page.waitForNavigation();
  //   const results = await page.evaluate(() =>
  //     Array.from(
  //       document.querySelectorAll("h2.result__title.js-result-title"),
  //       (element) => element.textContent
  //     )
  //   );
  //   results.forEach((result) => {
  //     expect(result.toLowerCase()).toContain("panda");
  //   });
  // });

  // test("Checking that page and logo loads", async () => {
  //   const isLogoVisible = await page.isVisible("#logo_homepage_link");
  //   expect(isLogoVisible).toBe(true);
  // });
});
