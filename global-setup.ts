import { request } from '@playwright/test';
import * as faker from 'faker';
const ENV = process.env.ENV;

//to fix
//не знаю, как лучше разместить две вещи в проекте для использования в разных тестах - регистрацию и авторизацию пользователя

async function globalSetup() {
  const requestContext = await request.newContext();
  await requestContext.post(`https://api.${ENV}.subdomen.com/sign-up`, {
    form: {
        "email": faker.internet.exampleEmail(),
        "password": faker.internet.password()
    },
    headers: {
      "Content-Type": "",
      "Accept": "",
      "Cache-Control": ""
    },
    ignoreHTTPSErrors: true,
  });
  // Save signed-in state to 'userStorageState.json'.
  await requestContext.storageState({ path: 'userStorageAuthorizedState.json' });
  await requestContext.dispose();
}

//здесь всякие нужные юзеры

async function signIn() {
    const requestContext = await request.newContext();
    await requestContext.post(`https://api.${ENV}.subdomen.com/sign-in`, {
      form: {
          "email": "",
          "password": ""
      },
      headers: {
          "Content-Type": "",
          "Accept": "",
          "Cache-Control": ""
      },
      ignoreHTTPSErrors: true,
    });
    // Save signed-in state to 'userStorageState.json'.
    await requestContext.storageState({ path: 'userStorageNewAuthorizedState.json' });
    await requestContext.dispose();
  }

export default globalSetup;

/* reusing: 

import { test } from '@playwright/test';

test.use({ storageState: 'adminStorageState.json' });

test('admin test', async ({ page }) => {
  // page is signed in as admin.
});

test.describe(() => {
  test.use({ storageState: 'userStorageState.json' });

  test('user test', async ({ page }) => {
    // page is signed in as a user.
  });
});

*/