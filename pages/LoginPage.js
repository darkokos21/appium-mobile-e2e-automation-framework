const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  get username() {
    return this.driver.$('~test-Username');
  }

  get password() {
    return this.driver.$('~test-Password');
  }

  get loginButton() {
    return this.driver.$('~test-LOGIN');
  }

  async login(username, password) {
    await this.waitFor(this.username);
    await (await this.username).setValue(username);
    await (await this.password).setValue(password);
    await (await this.loginButton).click();
  }
}

module.exports = new LoginPage();
