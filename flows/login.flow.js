const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');

async function loginFlow() {
  await LoginPage.login('standard_user', 'secret_sauce');
  await ProductsPage.waitForPage();
}

module.exports = loginFlow;
