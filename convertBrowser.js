const {Builder, By, Key, until, Select} = require ("selenium-webdriver");
const assert = require('assert')
const browsers = ['chrome', 'firefox']

async function verifyDifferentBrowsers(){

//Scenario 3 : test if the convert module can be used on different browsers 
//launch a chosen browser
for (const browser of browsers) {
    let driver = await new Builder().forBrowser(browser).build();

try {
//navigate to XE application
await driver.get('https://www.xe.com/')

//input 100 into the amount field
await driver.findElement(By.id('amount')).sendKeys('100');

//press the convert button
await driver.findElement(By.xpath('//*[@id="__next"]/div[4]/div[2]/section/div[2]/div/main/div/div[2]/button')).click();

    }
finally {
    //close the browser
    await driver.quit();
        }   
    }
}
    verifyDifferentBrowsers()