import { test, expect, Page } from '@playwright/test';
import * as assert from "assert";
import { CartPage } from '../pages/cart-page';
import { testConfig } from '../testConfig';

//залогиненность + проверка залогиненности

// test('ui using request', async ({ page }) => {
//     await page.request.post(`https://${testConfig[process.env.ENV]}`, {
//       form:{
//         email: "",
//         password: "",
//       },
//     });
//   await page.goto('');
//   await expect(page.locator('')).toHaveText('');
//   });