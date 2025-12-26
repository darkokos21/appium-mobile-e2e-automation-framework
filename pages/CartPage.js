const BasePage = require('./BasePage');

class CartPage extends BasePage {
  get cartTitle() {
    return this.driver.$('~test-Cart Content');
  }

  async verifyCartIsDisplayed() {
    await this.waitFor(this.cartTitle);
  }
}

module.exports = new CartPage();
