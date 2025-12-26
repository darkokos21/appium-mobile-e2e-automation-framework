const { getDriver } = require('../config/driver');

class BasePage {
  get driver() {
    return getDriver();
  }

  async waitFor(element, timeout = 10000) {
    await element.waitForDisplayed({ timeout });
  }
}

module.exports = BasePage;
