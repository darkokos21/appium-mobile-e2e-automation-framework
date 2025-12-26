const { startDriver, stopDriver } = require('../config/driver');
const addToCartFlow = require('../flows/addToCart.flow');
const { allure } = require('allure-mocha/runtime');

let driver;

describe('Add to cart flow', function () {
  this.timeout(30000);

  before(async function () {
    driver = await startDriver();
  });

  after(async function () {
    await stopDriver();
  });

  it('should add item to cart successfully', async function () {
    allure.feature('Cart');                   // ✅ NEW
    allure.story('Add product to cart');      // ✅ NEW
    await addToCartFlow();
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
