import { init, setEyes , closeEyes} from '../config/builder'
import { By, until} from 'selenium-webdriver'

describe('First', function() {

    beforeEach((done) => {
        setTimeout( function(){ done() }, 3000)
    })

    afterEach( (done) => {
        setTimeout( function(){ done() }, 3000)
    })

    it('returns the width1', (done) => {
        setTimeout( function(){ done() }, 3000)
    })

    it('returns the width2', (done) => {
        setTimeout( function(){ done() }, 3000)
    })

    it('returns the width3', (done) => {
        setTimeout( function(){ done() }, 3000)
    })

})