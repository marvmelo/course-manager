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



//Primeiro Cenário








Given('Os cursos {string}, {string}, {string} e {string} estão cadastrados no sistema',
async function(curso1,curso2,curso3,curso4){
    await browser.get("localhost:4200/gerenciar-cursos");
    await expect(browser.getTitle()).to.eventually.equal("CourseManager"); 
    await browser.wait(ExpectedConditions.presenceOf($("input[name='titleBox']")), 10000);
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.name('addButton'))));

    await deleteCourses();
    await addCourse(curso1);
    await addCourse(curso2);
    await addCourse(curso3);
    await addCourse(curso4);


} );


Given('Eu estou na aba {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    browser.get("localhost:4200/cursos");
    //await browser.wait(ExpectedConditions.elementToBeClickable(element(by.name('cursosLink'))));
    //await element(by.name('cursosLink')).click();
   // return 'pending';
});

When('Eu pesquiso por {string}', async function (curso) {
    // Write code here that turns the phrase above into concrete actions
    
    await browser.wait(ExpectedConditions.presenceOf($("input[name='searchBox']")), 10000);
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.name('searchButton'))));

    await $("input[name = 'searchBox']").sendKeys(curso);
    await element(by.name('searchButton')).click();
    //await element(by.name('searchButton')).click();
});

Then('Apenas o curso {string} aparece como resultado', async function (curso) {
    allCourses = element.all(by.name("titlelist"));
    sameCourses = allCourses.filter(value => value.getText().then(t => t ==curso));
    //await allCourses.then(v => v.getText().then(w => console.log(w)))
    await allCourses.then(cursos => expect(Promise.resolve(cursos.length)).to.eventually.equal(1));
    await sameCourses.then(cursos => expect(Promise.resolve(cursos.length)).to.eventually.equal(1));
   
});



//Segundo Cenário


Then('Os cursos {string}, {string} e {string}  aparecem como resultado', async function (curso1, curso2, curso3) {
    allCourses = element.all(by.name("titlelist"));
    sameCourses = allCourses.filter(value => value.getText().then(t => t ==curso1 || t == curso2 || t == curso3));
    await allCourses.then(cursos => expect(Promise.resolve(cursos.length)).to.eventually.equal(3));
    await sameCourses.then(cursos => expect(Promise.resolve(cursos.length)).to.eventually.equal(3));
    await sameCourses.map(elements => {return elements.getText()}).then(cursos => expect(cursos.includes(curso1) && cursos.includes(curso2) && cursos.includes(curso3)).to.be.equal(true));


});


//Terceiro Cenário

Then('Nenhum resultado é encontrado', async function () {
    allCourses = element.all(by.name("titlelist"));
    await allCourses.then(cursos => expect(Promise.resolve(cursos.length)).to.eventually.equal(0));
});

Given('Não há curso registrado no sistema', async function () {
    // Write code here that turns the phrase above into concrete actions
    await browser.get("localhost:4200/gerenciar-cursos");
    await expect(browser.getTitle()).to.eventually.equal("CourseManager"); 
    await deleteCourses();
});

//Quarto Cenário

When('Eu deixo a caixa de pesquisa em branco e faço uma pesquisa', async function () {
    await element(by.name('searchButton')).click();
});


//Quinto Cenário



Then('Os cursos {string}, {string}, {string}, {string}  aparecem como resultado', async function (curso1, curso2, curso3, curso4) {
    allCourses = element.all(by.name("titlelist"));
    sameCourses = allCourses.filter(value => value.getText().then(t => t ==curso1 || t == curso2 || t == curso3 || t == curso4));
    await allCourses.then(cursos => expect(Promise.resolve(cursos.length)).to.eventually.equal(4));
    await sameCourses.then(cursos => expect(Promise.resolve(cursos.length)).to.eventually.equal(4));
    await sameCourses.map(elements => {return elements.getText()}).then(cursos => expect(cursos.includes(curso1) && cursos.includes(curso2) && cursos.includes(curso3) && cursos.includes(curso4)).to.be.equal(true));
});