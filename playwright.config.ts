import { PlaywrightTestConfig, devices } from '@playwright/test';
import { testConfig } from './testConfig';
// const ENV = process.env.ENV;

// if (!ENV || ![`auto`, `dev`, `devanother`, `localhost`].includes(ENV)) {
//   console.log(`Please provide a correct environment value like "npx cross-env ENV=auto|dev|devanother|localhost"`);
//   process.exit();
// }

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {

  testDir: './web-tests',

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,

  expect: {

    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  //Global Setup to run before all tests
  //globalSetup: `./global-setup`,   //todo

  //Global Teardown to run after all tests
  //globalTeardown: `./global-teardown`,  //todo  /allure generate ./allure-results --clean && allure open ./allure-report  ???

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 10 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['junit', { outputFile: 'junit.xml' }],
    // ['html', { open: 'never' }],
    ['allure-playwright'],
    ['list']
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: `https://${process.env.URL}.subdomen.com`,

    /* Collect trace. See https://playwright.dev/docs/trace-viewer */
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'firefox',
    //   /* Project-specific settings. */
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    {
      name: 'Chrome',
      use: {
        channel: 'chrome',
      },
    },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/web',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};
export default config;
