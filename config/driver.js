const { remote } = require('webdriverio');
const { androidCapabilities } = require('./capabilities');

let driver;

async function startDriver() {
  if (!driver) {
    driver = await remote({
      path: '/',
      port: 4723,
      capabilities: androidCapabilities,
    });
  }
  return driver;
}

async function stopDriver() {
  if (driver) {
    await driver.deleteSession();
    driver = null;
  }
}

function getDriver() {
  if (!driver) throw new Error('Driver not started. Call startDriver() first.');
  return driver;
}

module.exports = { startDriver, stopDriver, getDriver };
