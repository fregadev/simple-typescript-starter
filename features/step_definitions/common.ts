import { AfterAll, Given, Then, When } from 'cucumber';

import { Builder, By, Capabilities, Key } from 'selenium-webdriver';

import { expect } from 'chai';

import 'chromedriver';

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { w3c: false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('I am on the Google search page', async function() {
  await driver.get('https://www.google.com');
});
