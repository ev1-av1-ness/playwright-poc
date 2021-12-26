import { expect, Locator, Page } from '@playwright/test';
import { urls } from '../scr/urls';


export class CartPage {
    readonly page: Page;
    //readonly signInButton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        //this.signInButton = page.locator('vui-button[id^="qa_header"]:visible');
    }

    async goto() {
        await this.page.goto(urls.cartPage);
        //await expect(this.coreConceptsLink).toBeVisible();
    }

    async openSignUpForm() {
        //await this.signInButton.click();
        //await expect(this.coreConceptsLink).toBeVisible();
    }

    async openSignInForm() {
        // await this.openSignUpForm();
        // await this.page.click('[class*=tabs_scrollbar] > vui-tab-button:nth-child(2)');
        // await expect(this.page.locator('#qa_auth_LoginEmailInput input').locator('#qa_auth_LoginPasswordInput input')).toBeVisible();
      }
} 