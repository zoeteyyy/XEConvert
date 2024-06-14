const {Builder, By, Key, until, Select} = require ("selenium-webdriver");
const assert = require('assert')


async function convertButton(){

//Scenario 1 : test all currency pair   
//launch the browser (google chrome)
let driver = await new Builder().forBrowser("chrome").build();

//navigate to XE application
await driver.get('https://www.xe.com/')

//input any amount in the amount field
await driver.findElement(By.id('amount')).sendKeys('1');

//press the convert button
await driver.findElement(By.xpath('//*[@id="__next"]/div[4]/div[2]/section/div[2]/div/main/div/div[2]/button')).click();

    //close the browser
    await driver.quit();
    }
    
    convertButton()