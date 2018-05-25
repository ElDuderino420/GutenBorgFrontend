const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://167.99.237.199/');
    

    let mongo = await driver.findElement(By.id('mongo'))
    mongo.click()

    await driver.wait(until.elementIsSelected(mongo), 1000);
    await driver.findElement(By.id("1")).click()
    await driver.findElement(By.id("city")).sendKeys('webdriver', "Copenhagen");
    await driver.findElement(By.id("run")).click()
  } finally {
    await driver.quit();
  }
})();