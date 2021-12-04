const { Builder, By, Key, until } = require('selenium-webdriver');
const { Options } = require("selenium-webdriver/chrome");

async function search(searchWord) {
    const options = new Options();
    options.options_["debuggerAddress"] = "127.0.0.1:9222";

    const driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('http://www.google.com');
        const input = driver.findElement(By.name('q'));
        await input.sendKeys(searchWord);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { search };