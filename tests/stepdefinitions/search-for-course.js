const { Given, When,Then } = require("@cucumber/cucumber")
const { browser, $, element, ExpectedConditions } = require("protractor")
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;
//var aux = require("../aux");

function createCourses(cursos){

    //await $("input[name = 'titleBox']").sendKeys(cursos[0])
}


Given('Os cursos {string}, {string}, {string} e {string} estão cadastrados no sistema',
async function(curso1,curso2,curso3,curso4){
    await browser.get("localhost:4200/gerenciar-cursos");
    await expect(browser.getTitle()).to.eventually.equal("CourseManager"); 
    await createCourses([curso1,curso2,curso3,curso4]);
   // await $("input[name = 'titleBox']").sendKeys(curso1)
} )
