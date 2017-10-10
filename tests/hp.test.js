function main() {
    
        var webdriver = require('selenium-webdriver');
        //var path = require('chromedriver').path;
    
        // Open a Chrome browser.
        var driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.firefox())
            .build();
    
        // Initialize the eyes SDK and set your private API key.
        var Eyes = require('eyes.selenium').Eyes;
        var eyes = new Eyes();
        eyes.setApiKey('97tGXmXsmRIHq7XiC0ndagRck19Ws2y2lFaKVLBiCEMI110');
        //97tGXmXsmRIHq7XiC0ndagRck19Ws2y2lFaKVLBiCEMI110
    
        // Start the test and set the browser's viewport size to 360x640 - mobile size.
        eyes.open(driver, 'Avenue Code', 'Title check', {width: 1600, height: 900});

        // Navigate the browser to the "hello world!" web-site.
        driver.get('http://localhost:3000/');

        // Visual checkpoint #1.
        eyes.checkWindow('Home Page');

        // Click the "Carrers" icon.
        driver.findElement(webdriver.By.linkText('Careers')).click();

        // Visual checkpoint #2.
        eyes.checkWindow('Carrers');

        // End the test.
        eyes.close();

        // Close the browser.
        driver.quit();
    
        // If the test was aborted before eyes.close was called ends the test as aborted.
        eyes.abortIfNotClosed();
    
    }
    
    main();