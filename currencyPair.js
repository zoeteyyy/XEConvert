const {Builder, By, Key, until, Select} = require ("selenium-webdriver");
const assert = require('assert')


async function currencyPairTest(){

try {
//Scenario 1 : test all currency pair   
//launch the browser (google chrome)
let driver = await new Builder().forBrowser("chrome").build();

//navigate to XE application
await driver.get('https://www.xe.com/')

//input any amount in the amount field
await driver.findElement(By.id('amount')).sendKeys('100');

//Choose from currency
const fromCurrencyDropdown = await driver.findElement(By.xpath('//*[@id="midmarketFromCurrency"]/div[2]/div/input'));
    await fromCurrencyDropdown.click();
    await fromCurrencyDropdown.sendKeys('EUR');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await fromCurrencyDropdown.sendKeys(Key.RETURN);
 
//Choose to currency
const toCurrencyDropdown = await driver.findElement(By.xpath('//*[@id="midmarketToCurrency"]/div[2]/div/input'));
    await toCurrencyDropdown.click();
    await toCurrencyDropdown.sendKeys('GBP');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await toCurrencyDropdown.sendKeys(Key.RETURN);  
    

//press the convert button
await driver.findElement(By.xpath('//*[@id="__next"]/div[4]/div[2]/section/div[2]/div/main/div/div[2]/button')).click();
 
}
finally {
    //close the browser
    //await driver.quit();
    }
 }
    
    currencyPairTest()