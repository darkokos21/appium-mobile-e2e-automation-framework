const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');

async function addToCartFlow() {
  await LoginPage.login('standard_user', 'secret_sauce');
  await ProductsPage.waitForPage();
  await ProductsPage.addItemToCart();
  await ProductsPage.goToCart();
  await CartPage.verifyCartIsDisplayed();
}

module.exports = addToCartFlow;
