import { init, setEyes , closeEyes} from '../config/builder'
import { By, until} from 'selenium-webdriver'

// async/await do not work well when the promise manager is enabled.
// See https://github.com/SeleniumHQ/selenium/issues/3037
//
// 3037 does not impact these specific examples, but it is still recommended
// that you disable the promise manager when using async/await.
promise.USE_PROMISE_MANAGER = false;

describe('Google Search', function() {
  

  beforeEach(async function() {
    const driver = await init()
    // driver = await new Builder().forBrowser('firefox').build();
  });

  afterEach(async function() {
    await driver.quit();
  });

  it('example', async function() {
    await driver.get('https://www.google.com/ncr');

    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);

    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);

    let url = await driver.getCurrentUrl();
    assert.ok(
        url.startsWith('https://www.google.com/search'),
        'unexpected url: ' + url);
  });
});