import { testConfig } from '../testConfig';

export const urls = {
    mainPage: `/`,
    authPage: '/auth',
    itemsPage: `${testConfig[process.env.ENV]}/items`,
    cartPage: `${testConfig[process.env.ENV]}/cart`
}