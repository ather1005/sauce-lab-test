const {Builder, By, Key, until} = require('selenium-webdriver')
const utils = require('./utils')

const SAUCE_USERNAME = 'ather1005';
const SAUCE_ACCESS_KEY = 'cde7a871-6068-46a9-add4-68fa83223e22';
//const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.saucelabs.com:443/wd/hub`;
// NOTE: Use the URL below if using our EU datacenter (e.g. logged in to app.eu-central-1.saucelabs.com)
 const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.eu-central-1.saucelabs.com:443/wd/hub`;


/**
* Run this test before working on the problem.
* When you view the results on your dashboard, you'll see that the test "Failed".
* Your job is to figure out why the test failed and make the changes necessary to make the test pass.
*
* Bonus: Once you get the test working, update the code so that when the test runs, it 
* can reach the Sauce Labs homepage 
* hover over 'Resources' and then clicks the 'Documentation' link
*/

describe('Broken Sauce', function () {
    it('should go to Google and click Sauce', async function () {
        let driver = await new Builder().withCapabilities(utils.brokenCapabilities)
                    .usingServer(ONDEMAND_URL).build();

        await driver.get("https://www.google.com");
        
driver.findElement(By.xpath("//input[@type='submit' and @value='OK']")).click();
        let search = await driver.findElement(By.name("q"));
        await search.sendKeys("Sauce Labs");
        
        driver.findElement(By.name("btnK")).sendKeys(Key.RETURN);
        

        // let page = await driver.findElement(By.partialLinkText("sauce"));

        await driver.quit();
    });
});
