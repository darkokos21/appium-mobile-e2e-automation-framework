const { startDriver, stopDriver } = require('../config/driver');
const loginFlow = require('../flows/login.flow');
const { allure } = require('allure-mocha/runtime');

let driver;

describe('Login flow', function () {
  this.timeout(30000);

  before(async function () {
    driver = await startDriver();
  });

  after(async function () {
    await stopDriver();
  });

  it('should login successfully', async function () {
    allure.feature('Authentication');        // ✅ NEW
    allure.story('Valid user login');         // ✅ NEW
    await loginFlow();
  });

  afterEach(async function () {
    if (this.currentTest.state === 'failed') {
      const screenshot = await driver.takeScreenshot();
      allure.attachment(
        'Screenshot',
        Buffer.from(screenshot, 'base64'),
        'image/png'
      );
    }
  });
});
