const { Given, When,Then } = require("@cucumber/cucumber")
const { browser, $, element, ExpectedConditions } = require("protractor")
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;




function createCourses(courses) {

    for(i = 0; i< courses.length; i++){
        await $("input[name = 'titleBox']").sendKeys(courses[i]);
        await element(by.name('addButton')).click();
    }
}