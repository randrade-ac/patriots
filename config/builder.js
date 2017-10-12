let webdriver = require('selenium-webdriver')
let chrome = require('selenium-webdriver/chrome')
let firefox = require('selenium-webdriver/firefox')
 
function init() {

// let driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .setFirefoxOptions( /* … */)
//     .setChromeOptions( /* … */)
//     .build();

let driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.firefox())
    .build();

let Eyes = require('eyes.selenium').Eyes
let eyes = new Eyes()
eyes.setApiKey('97tGXmXsmRIHq7XiC0ndagRck19Ws2y2lFaKVLBiCEMI110')

eyes.open(driver, 'Avenue Code', 'Title check', {width: 1600, height: 900})

}

// module.exports = init
exports //j6
