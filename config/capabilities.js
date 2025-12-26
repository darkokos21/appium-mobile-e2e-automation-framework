exports.androidCapabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android Emulator',
  'appium:platformVersion': '13',
  'appium:app': `${process.cwd()}/apps/sauce-demo.apk`,
  'appium:autoGrantPermissions': true,
  'appium:appPackage': 'com.swaglabsmobileapp',        // check this
  'appium:appActivity': 'com.swaglabsmobileapp.MainActivity', // or SplashActivity if correct
  'appium:newCommandTimeout': 300, // prevent session timeout
};
