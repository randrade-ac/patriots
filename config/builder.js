import webdriver from 'selenium-webdriver'
import {Eyes} from 'eyes.selenium'

function init() {
	let driver = new webdriver.Builder()
		.withCapabilities(webdriver.Capabilities.firefox())
		.build()
	return driver
}

function setEyes(driver) {
	console.log('inside setEyes')

	// let Eyes = require('eyes.selenium').Eyes
	let eyes = new Eyes()
	eyes.setApiKey('97tGXmXsmRIHq7XiC0ndagRck19Ws2y2lFaKVLBiCEMI110')
    
	let ConsoleLogHandler = require('eyes.selenium').ConsoleLogHandler
	eyes.setLogHandler(new ConsoleLogHandler(true))
    
	// both are used to take entire screenshots
	eyes.setForceFullPageScreenshot(true)
	eyes.setStitchMode(Eyes.StitchMode.CSS)

	//eyes.setMatchLevel('<Level>');
	/*
    Level - The match level of the test (For Ruby and Python use u
    Exact - Pixel to pixel comparison, for demonstration purposes and debugging, will fail a test if a pixel is not in place. (not lace. (not recommended)
    Strict - strict is the default match level, it mimics human eyes so only significant visual changes will be spotted, while small changes that are not visible to a human eye will be ignored.
    Content - ignores style and anti-aliasing differences, while spotting content changes. (the content level can be useful if your website includes different styles which are not relevant for your tests).
    Layout - ignores content changes, and detects only layout changes. (useful for pages with dynamic content and localized pages)
    Note: Overriding the match level is only effective if set before initialization.
    */

    eyes.open(driver, 'Avenue Code', 'Title check', {width: 1600, height: 900})

    // eyes.open(driver, 'Hello World!', 'My first Javascript test!',
    // {width: 800, height: 600})

    
		// console.log('after open')
		// eyes.checkWindow('Home Page')
		// // // eyes.close()
		//done()
	
	
	//eyes.checkElementBy(By.id("ID"), null, "tag");
	//eyes.checkRegionBy(selector, "window_name", matchTimeout);
	//eyes.checkFrame(frameElement, null, "tag");
	//eyes.checkRegionInFrame("Frame_Name", By.id("ID"), null, "tag", true);


	return eyes
}

function closeEyes(eyes) {
    
	eyes.close()
	// eyes.close(false).then(function(testResults) {
	/*
        testResults - Test results details, contains attributes about the test and the failure, such as:
        URL - String containing the URL to the report of the test in Applitools dashboard.
        Steps - Total steps count
        Matches - Total matches count
        Mismatches - Total mismatches count
        Missing - How many missing steps found
        ExactMatches - Amount of matches compared in exact match level
        StrictMatches - Amount of matches compared in strict match level
        ContentMatches - Amount of matches compared in content match level
        LayoutMatches - Amount of matches compared in layour match level
        isNew - Boolean value indicates whether the test classified as a new test.
        */
	// })
}

export { init, setEyes , closeEyes}


// done function
// timeout do jest
