const BasePage = require('./BasePage');

class ProductsPage extends BasePage {
  get title() {
    return this.driver.$('~test-PRODUCTS');
  }

  get addToCartButton() {
    return this.driver.$('~test-ADD TO CART');
  }

  get cartButton() {
    return this.driver.$('~test-Cart');
  }

  async waitForPage() {
    await this.waitFor(this.title);
  }

  async addItemToCart() {
    await (await this.addToCartButton).click();
  }

  async goToCart() {
    await (await this.cartButton).click();
  }
}

module.exports = new ProductsPage();
