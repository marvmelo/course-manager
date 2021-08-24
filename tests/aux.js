const { Given, When,Then } = require("@cucumber/cucumber")
const { browser, $, element, ExpectedConditions } = require("protractor")
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;




async function createCourses(courses){
    await $("input[name = 'titleBox']").sendKeys(courses);
    await element(by.name('addButton')).click();
    
}
