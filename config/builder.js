import webdriver from 'selenium-webdriver'

function init() {
	let driver = new webdriver.Builder()
		.withCapabilities(webdriver.Capabilities.firefox())
		.build()
	return driver
}

function setEyes(driver) {
	let Eyes = require('eyes.selenium').Eyes
	let eyes = new Eyes()
	eyes.setApiKey('97tGXmXsmRIHq7XiC0ndagRck19Ws2y2lFaKVLBiCEMI110')    
	eyes.open(driver, 'Avenue Code', 'Title check', {width: 1600, height: 900})
	return eyes
}

function closeEyes(eyes) {
	eyes.close()
}

export { init, setEyes , closeEyes}