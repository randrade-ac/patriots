let assert = require('assert')
let builder = require('./config/builder')

describe('webdriver.io page', function() {
    before(function(){
        
        builder.init();
    
    });
 
    after(function(){
 
        // do something after test suite execution is finished
        // no matter if there are failed cases
        
    });
    
    beforeEach(function(){
        
        // do something before test case execution
        // no matter if there are failed cases
    
    });
 
    afterEach(function(){
 
        // do something after test case execution is finished
        // no matter if there are failed cases
 
    });

    it('test 1', function () {
        browser.url('http://webdriver.io');
        let title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });

    it('test 2', function () {
        browser.url('http://webdriver.io');
        let title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
});