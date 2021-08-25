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
Given("Eu estou logado", async function(nome, email, senha){
    await browser.get("localhost:4200/cadastro");
    await browser.wait(ExpectedConditions.presenceOf(element(by.name("namebox"))), 1000);
    await element(by.name("namebox")).sendKeys(nome);
    await browser.wait(ExpectedConditions.presenceOf($("input[name='emailbox']")), 1000);
    await $("input[name='emailbox']").clear().sendKeys(email);
    await browser.wait(ExpectedConditions.presenceOf($("input[name='passwordbox']")), 1000);
    await $("input[name='passwordbox']").clear().sendKeys(senha);
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.name('accountbutton'))));
    await element(by.name('accountbutton')).click();
});

Given('Eu estou na página de {string}', async function(string) {
    
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.name("adMLink"))));
    await element(by.name("adMLink")).click();
    //Entrará no main do site e clicará para mudar a página para Adicionar Material
});

When("Eu adiciono o material com o nome: {string}, o tipo: {string} e o link: {string}", async function(nome, tipo, link){
    await browser.wait(ExpectedConditions.presenceOf(element(by.name("namebox"))), 300);
    await browser.wait(ExpectedConditions.presenceOf($("input[nome = 'tipobox']")), 300);
    await browser.wait(ExpectedConditions.presenceOf($("input[nome = 'linkbox']")), 300);
    await addMaterial(nome, tipo, link);

});

When("Eu confirmo", async function() {
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.name("materialbutton"))));
    await element(by.name("materialbutton")).click();
})

Then("Aparecerá uma janela com o seguinte aviso: {string}", async function(mensagem){
    await browser.wait(ExpectedConditions.alertIsPresent(), 1000);
    var aviso = browser.switchTo().alert();
    await expect(aviso.getText()).to.eventually.equal(mensagem);
    await aviso.accept();
    await browser.sleep(2000);
});

//localhost:4200/adicionar-material

//await element(by.name('addButton')).click();