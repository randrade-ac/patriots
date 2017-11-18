const assert = require('assert');
const Eyes = require('eyes.selenium').Eyes;
const ConsoleLogHandler = require('eyes.selenium').ConsoleLogHandler


// const {Browser, By, Key, until} = require('..');
const {Builder, By, Key, until} = require('selenium-webdriver');

// const {ignore, suite} = require('../testing');

describe('Google Search', function() {
  
  let driver = new Builder();
  let eyes;
  // jest.setTimeout(1000);
  

  beforeAll(async function() {
    // env.builder() returns a Builder instance preconfigured for the
    // envrionment's target browser (you may still define browser specific
    // options if necessary (i.e. firefox.Options or chrome.Options)).
    driver = await driver.forBrowser('firefox').build();
    eyes = await new Eyes();
    window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 300000;
    await eyes.setApiKey('97tGXmXsmRIHq7XiC0ndagRck19Ws2y2lFaKVLBiCEMI110');
    await eyes.setLogHandler(new ConsoleLogHandler(true))    
    // done();
  });

  it('demo', async function() {
    await eyes.open(driver, 'Hello World!', 'My first Javascript test!',{width: 1200,height:977});
    await driver.get('https://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    await eyes.checkWindow('Main Page');
    await eyes.close();
    // done();
  });

  // The ignore function returns wrappers around describe & it that will
  // suppress tests if the provided predicate returns true. You may provide
  // any synchronous predicate. The env.browsers(...) function generates a
  // predicate that will suppress tests if the  env targets one of the
  // specified browsers.
  //
  // This example is always configured to skip Chrome.
  // ignore(env.browsers(Browser.CHROME)).it('demo 2', async function() {
  //   await driver.get('http://www.google.com/ncr');
  //   let url = await driver.getCurrentUrl();
  //   assert.equal(url, 'https://www.google.com/');
  // });

  afterAll(function() {
    driver && driver.quit(); 
    // done();
  });
});