# APPIUM-E2E-MOBILE-AUTOMATION-FRAMEWORK

Welcome to the **Appium E2E Mobile Automation Framework** project! This framework is designed to provide a robust, reusable, and scalable mobile testing solution for Android applications using Appium and WebDriverIO.

---

## 🗂 Project Structure

```
APPIUM-E2E-MOBILE-AUTOMATION-FRAMEWORK/
├── .github/
│   └── workflows/
│       └── ci.yml
├── allure-report/
├── apps/
│   └── sauce-demo.apk
├── config/
│   ├── capabilities.js
│   └── driver.js
├── flows/
│   ├── addToCart.flow.js
│   └── login.flow.js
├── node_modules/
├── pages/
│   ├── BasePage.js
│   ├── CartPage.js
│   ├── LoginPage.js
│   └── ProductsPage.js
├── tests/
│   ├── addToCart.test.js
│   └── login.test.js
├── .gitignore
├── package-lock.json
└── package.json
```

---

## 🚀 Features

✨ **End-to-End Flows**: Supports key user flows such as login and add-to-cart.

📱 **Mobile Testing**: Fully automated tests on Android using Appium.

🔄 **Reusable Page Objects**: Page Object Model (POM) implemented for maintainability.

⏱ **Reliable Waits**: Avoids static waits and uses dynamic waits to make tests robust.

💻 **CI Integration**: Ready for GitHub Actions for automated testing pipelines.

---

## 📝 How to Run the Tests

1. **Install dependencies:**
```bash
npm install
```

2. **Start the Appium server:**
```bash
appium
```

3. **Run the tests:**
```bash
npm test
```

> ⚠️ **Note:** The full end-to-end tests require a local Android emulator or device. In CI/CD (GitHub Actions), the pipeline demonstrates setup of Node.js, dependencies, and Appium server, but the tests are intended to run **locally** where a device or emulator is available.

4. **View the results:**
- Test logs are printed in the terminal.
- Screenshots on failure (if configured) will be captured.

---

## 🎯 Why This Project Stands Out

🌟 **Clean Architecture:** Follows the Page Object Model for scalable test automation.

💡 **Easy to Extend:** Adding new flows or pages is straightforward.

⚡ **Real-World App Testing:** Tested against a live APK (`sauce-demo.apk`) demonstrating realistic user interactions.

🤖 **CI/CD Ready:** Includes GitHub Actions workflow to integrate automated testing.

📂 **Organized Structure:** Clear separation between `pages`, `flows`, `tests`, and `config`.

🎉 **Fun and Visual:** Supports screenshots and potential reporting tools to track test results visually.

---

## 📦 Dependencies

- [Appium](https://appium.io/) - Mobile automation framework.
- [WebDriverIO](https://webdriver.io/) - Node.js automation framework.
- [Mocha](https://mochajs.org/) - Test runner.

---

## ⚙️ Configuration

- `config/capabilities.js` - Defines the Android device/app capabilities.
- `config/driver.js` - Handles the driver setup and teardown.

---

## 🛠 Flows

- `flows/login.flow.js` - Automates login steps.
- `flows/addToCart.flow.js` - Automates add-to-cart flow.

---

## 🧪 Tests

- `tests/login.test.js` - Runs login flow.
- `tests/addToCart.test.js` - Runs add-to-cart flow.

---

## 📄 Pages

- `pages/BasePage.js` - Base class with common methods.
- `pages/LoginPage.js` - Login page elements and actions.
- `pages/ProductsPage.js` - Products page elements and actions.
- `pages/CartPage.js` - Cart page elements and actions.

---

## 💾 APK

- `apps/sauce-demo.apk` - Demo APK for testing.

---

## 📂 GitHub Actions

- `.github/workflows/ci.yml` - CI workflow to run tests on push.

---

Enjoy automating your mobile tests with this framework! 🎉

