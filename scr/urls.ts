import { testConfig } from '../testConfig';

export const urls = {
    mainPage: `${testConfig[process.env.ENV]}`,
    authPage: `${testConfig[process.env.ENV]}/auth`,
    itemsPage: `${testConfig[process.env.ENV]}/items`,
    cartPage: `${testConfig[process.env.ENV]}/cart`
}