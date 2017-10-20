import { init, setEyes , closeEyes} from '../config/builder'
const { By, until} = require('selenium-webdriver')
//import Eyes from 'eyes.selenium'



describe('first', function first() {
    
	beforeEach(() => {
        console.log('inside timeout')
        // jest.setTimeout(1000)
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000
    })

    afterEach(() => {
		closeEyes(eyes)
    })
    
    let eyes

	it('returns the width', function (done) {
        console.log('inside it')
		let driver = init()
        
        console.log(jasmine.DEFAULT_TIMEOUT_INTERVAL)
		// driver.get('http://webdriver.io')
		//let eyes = new Eyes()
		driver.get('http://www.google.com')
		driver.findElement(By.name('q')).sendKeys('webdriver')
		driver.findElement(By.name('btnG')).click()                      // (3)
		//driver.wait(until.titleIs('webdriver - Google Search'), 1000)
		// setEyes(driver, done)
		//eyes.open(driver, 'Avenue Code', 'Title check', {width: 1600, height: 900})
		
        eyes = setEyes(driver, done)
        //eyes.open(driver, 'Avenue Code', 'Title check', {width: 1600, height: 900})
		// eyes.checkWindow('Home Page')
		// eyes.close()

		// closeEyes(eyes)
        
		// //         // Close the browser.
		driver.quit()
        // done()



		// let driver = new webdriver.Builder()
		//     		.withCapabilities(webdriver.Capabilities.firefox())
		//     		.build()
                    
		//     	driver.get('http://webdriver.io')
	})
    
	
})