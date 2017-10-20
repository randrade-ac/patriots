import { init, setEyes , closeEyes} from '../config/builder'
const { By, until} = require('selenium-webdriver')

const driver = init()
jasmine.DEFAULT_TIMEOUT_INTERVAL = 12000
const eyes = setEyes(driver)
        

describe('first', function() {

    beforeAll((done) => {
        
        driver.navigate().to('http://www.google.com/')
            .then(() => done())
        
        // essa arrow function tbm pode ser escrita assim:
        /*
        driver.then( ()=>{
            done()
        })
        */

        //poderia ser assim tbm, tanto faz nesse caso,
        //o arrow function soh eh "interessante" qdo
        //queremos dentro dele chamar o this como se fosse
        //do escopo pai (te explico isso no slack)
        /*
        driver.then( function(){
            done()
        })
        */
        
    })

    afterAll((done) => {
        driver.quit()
            .then(() => done())
    })

    beforeEach(() => {
        //eyes.open(driver, 'Avenue Code', 'Title check', {width: 1600, height: 900})
    })

    it('returns the width', (done) => {
        
        driver.findElement(By.name('q')).sendKeys('paul macartnei')
        driver.findElement(By.name('btnG')).click()                      // (3)
        driver.wait(until.titleIs('webdriver - Google Search'), 1000)
        done()

    })
})