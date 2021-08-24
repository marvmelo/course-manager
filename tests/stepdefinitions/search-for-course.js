const { Given, When,Then } = require("@cucumber/cucumber")
const { browser, $, element, ExpectedConditions } = require("protractor")
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;
//var aux = require("../aux");

deleteCourses = async function(){

    delButtons = element.all(by.name("removeButton"));

    await delButtons.count().then(async function(count){
        
        while(count > 0){
            await delButtons.first().click();
            count --;
        }
        
    })

}


addCourse = async function(curso){
    await $("input[name = 'titleBox']").sendKeys(curso);
    await element(by.name('addButton')).click();
}




Given('Os cursos {string}, {string}, {string} e {string} estão cadastrados no sistema',
async function(curso1,curso2,curso3,curso4){
    await browser.get("localhost:4200/gerenciar-cursos");
    await expect(browser.getTitle()).to.eventually.equal("CourseManager"); 
    //await browser.wait(ExpectedConditions.presenceOf($("input[name='titleBox']")), 10000);
    //await browser.wait(ExpectedConditions.elementToBeClickable(element(by.name('addButton'))));

    await deleteCourses();
    await addCourse(curso1);
    await addCourse(curso2);
    await addCourse(curso3);
    await addCourse(curso4);


} );


Given('Eu estou na aba {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.name('cursosLink'))));
    await element(by.name('cursosLink')).click();
   // return 'pending';
});

When('Eu pesquiso por {string}', async function (curso) {
    // Write code here that turns the phrase above into concrete actions
    
    await browser.wait(ExpectedConditions.presenceOf($("input[name='searchBox']")), 10000);
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.name('searchButton'))));

    await $("input[name = 'searchBox']").sendKeys(curso);
    await element(by.name('searchButton')).click();
    await element(by.name('searchButton')).click();
});

Then('Apenas o curso {string} aparece como resultado', async function (curso) {
    allCourses = element.all(by.name("titlelist"));
    sameCourses = allCourses.filter(value => value.getText().then(t => t ==curso));
    //await allCourses.then(v => v.getText().then(w => console.log(w)))
    await allCourses.then(cursos => expect(Promise.resolve(cursos.length)).to.eventually.equal(1));
    await sameCourses.then(cursos => expect(Promise.resolve(cursos.length)).to.eventually.equal(1));
   
});