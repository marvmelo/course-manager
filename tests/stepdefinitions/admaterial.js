const { Given, When, Then } = require("@cucumber/cucumber")
const { browser, $, element, ExpectedConditions } = require("protractor")
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;

addMaterial = async function(nome, tipo, link){
    await $("input[name = 'namebox']").sendKeys(nome);
    await $("input[name = 'tipobox']").sendKeys(tipo);
    await $("input[name = 'linkbox']").sendKeys(link);
    
}

//Primeiro Cenário

Given('Eu estou na página de Adicionar Material', async function() {
    
    await browser.get("localhost:4200/adicionar-material");
    
});

Given("Nenhum curso foi cadastrado", async function(){

});

When("Eu adiciono o material com o nome: {string}, o tipo: {string} e o link: {string}", async function(nome, tipo, link){
    await addMaterial(nome, tipo, link);

});

When("Eu confirmo", async function() {
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.name("materialbutton"))));
    await element(by.name("materialbutton")).click();
});

Then("Aparecerá uma janela com o seguinte aviso: {string}", async function(mensagem){
    await browser.wait(ExpectedConditions.alertIsPresent(), 1000);
    var aviso = browser.switchTo().alert();
    await expect(aviso.getText()).to.eventually.equal(mensagem);
    await aviso.accept();
    await browser.sleep(1000);
});

//Segundo cenário

Given("O curso {string} foi selecionado na parte SelectCurso", async function(nomeCurso){
    await browser.get("localhost:4200/gerenciar-cursos");
    await $("input[name = 'titleBox']").sendKeys(nomeCurso);
    await element(by.name('addButton')).click();

})

//Terceiro Cenário

Given("Um curso foi selecionado na parte SelectCurso", async function(){

})

When("Eu deixo um campo não preenchido e coloco apenas nome: {string} e link: {string}", async function(nome, link){
    await $("input[name = 'namebox']").sendKeys(nome);
    await $("input[name = 'linkbox']").sendKeys(link);
});

Given('O material com o nome: {string}, o tipo: {string} e o link: {string} já estão cadastrados no sistema', function (nome, tipo, link) {
    
  });

When("Curso não existe", async function(){
    allCourses = element.all(by.name("cascataOptions"));
    await allCourses.then(cursos => expect(Promise.resolve(cursos.length)).to.eventually.equal(0));
})