import { init, setEyes , closeEyes} from '../config/builder'
const { By, until} = require('selenium-webdriver')



describe('first', function first() {
// 		beforeEach(() => {
// 			driver = builder.init()
// 			builder.openEyes(driver)
// 		})

	it('returns the width', function returns() {

		let driver = init()
		
        // driver.get('http://webdriver.io')
		let eyes = setEyes(driver)
		//eyes.open(driver, 'Avenue Code', 'Title check', {width: 1600, height: 900})
        driver.get('http://www.google.com')
        driver.findElement(By.name('q')).sendKeys('webdriver')
        driver.findElement(By.name('btnG')).click()                      // (3)
        driver.wait(until.titleIs('webdriver - Google Search'), 1000)
        
        eyes.checkWindow('Home Page')

		closeEyes(eyes)
        
		// //         // Close the browser.
		driver.quit()




		// let driver = new webdriver.Builder()
		//     		.withCapabilities(webdriver.Capabilities.firefox())
		//     		.build()
                    
		//     	driver.get('http://webdriver.io')
	})
})