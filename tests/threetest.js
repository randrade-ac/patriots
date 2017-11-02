// import { init, setEyes , closeEyes} from '../config/builder'
// import { By, until} from 'selenium-webdriver'
import {Eyes} from 'eyes.selenium'


const assert = require('assert')
const {Builder, By, Key, promise, until} = require('selenium-webdriver')

// async/await do not work well when the promise manager is enabled.
// See https://github.com/SeleniumHQ/selenium/issues/3037
//
// 3037 does not impact these specific examples, but it is still recommended
// that you disable the promise manager when using async/await.
promise.USE_PROMISE_MANAGER = false;
let driver

describe('Google Search', function() {
  

  beforeEach(async function() {
    // const driver = await init()
    driver = await new Builder().forBrowser('firefox').build()
  });

  afterEach(async function() {
    await driver.quit()
  });

  it('example', async function() {
    await driver.get('https://www.google.com/ncr')

    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)

    await driver.wait(until.titleIs('webdriver - Google Search'), 1000)

    let url = await driver.getCurrentUrl()
    // assert.ok(
    //     url.startsWith('https://www.google.com/search'),
    //     'unexpected url: ' + url)



    let eyes = await new Eyes()
    await eyes.setApiKey('97tGXmXsmRIHq7XiC0ndagRck19Ws2y2lFaKVLBiCEMI110')
      
    let ConsoleLogHandler = await require('eyes.selenium').ConsoleLogHandler
    await  eyes.setLogHandler(new ConsoleLogHandler(true))
      
    // both are used to take entire screenshots
    await eyes.setForceFullPageScreenshot(true)
    await eyes.setStitchMode(Eyes.StitchMode.CSS)

    await eyes.open(driver, 'Avenue Code', 'Title check', {width: 1600, height: 900})

    //await eyes.close()
    
  })
})