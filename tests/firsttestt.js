import { init, setEyes , closeEyes} from '../config/builder'

describe('Home', function home() {

    beforeEach(() => {
        console.log('inside timeout')
        // jest.setTimeout(1000)
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000
    })

    it ('check title', function title() {

        let driver = init()

        driver.get('http://www.google.com')
		driver.findElement(By.name('q')).sendKeys('webdriver')
		driver.findElement(By.name('btnG')).click()                      // (3)
        driver.wait(until.titleIs('webdriver - Google Search'), 1000)
        
        driver.quit()


    })

})