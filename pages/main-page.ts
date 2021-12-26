import { expect, Locator, Page } from '@playwright/test';
import { urls } from '../scr/urls';

export class MainPage {
    readonly page: Page;
    readonly signInButton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.signInButton = page.locator('button[id^="sign"]:visible');
    }

    async goto() {
        await this.page.goto(urls.mainPage);
        //await expect(this.coreConceptsLink).toBeVisible();
    }

    async openSignUpForm() {
        await this.signInButton.click();
        //await expect(this.coreConceptsLink).toBeVisible();
    }

    async openSignInForm() {
        await this.openSignUpForm();
        await this.page.click('');
        await expect(this.page.locator('#input').locator('#input')).toBeVisible();
      }
} 