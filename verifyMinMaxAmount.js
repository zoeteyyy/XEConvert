const {Builder, By, Key, until, Select} = require ("selenium-webdriver");
//const assert = require('assert')


async function verifyMinMaxAmount(){

//Scenario 5 : verify the minimum and maximum of the amount field

//launch the browser (google chrome)
let driver = await new Builder().forBrowser("chrome").build();

//navigate to XE application
await driver.get('https://www.xe.com/')

let amountField = await driver.findElement(By.id('amount'));

//input the minimum amount
await amountField.sendKeys('0.01');
//press the convert button
await driver.findElement(By.xpath('//*[@id="__next"]/div[4]/div[2]/section/div[2]/div/main/div/div[2]/button')).click();

await new Promise(resolve => setTimeout(resolve, 5000));
amountField = await driver.findElement(By.id('amount'));

        // Clear the amount field
        
        await amountField.click();
        await amountField.sendKeys(Key.COMMAND, 'a'); // Select all text
        await amountField.sendKeys(Key.DELETE); // Delete selected text

        // Wait for the field to be cleared
        
// Input the maximum amount
await amountField.sendKeys('1000000000');

 

    //close the browser
    await driver.quit();
        
}
    
    verifyMinMaxAmount()