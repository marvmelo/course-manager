const { Given, When, Then } = require("@cucumber/cucumber")
const { browser, $, element, ExpectedConditions } = require("protractor")
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;

Given('Eu estou na página de {string}', async function() {
    await browser.get("localhost:4200");
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.name("adMLink"))));
    await element(by.name("adMLink")).click();
    //Entrará no main do site e clicará para mudar a página para Adicionar Material
});

Given("A lista de materiais não contém o nome: {string}, o tipo: {string} e o link: {string}", function(string, string2, string3){})

When("Eu adiciono o material com o nome: {string}, o tipo: {string} e o link: {string}", async function(nome, tipo, link){
    await browser.wait(ExpectedConditions.presenceOf(element(by.name("namebox"))), 1000);
    await element(by.name("nomebox")).sendKeys(nome);
    await browser.wait(ExpectedConditions.presenceOf($("input[nome = 'tipobox']")), 1000);
    await $("input[name = 'tipobox']").clear().sendKeys(tipo);
    await browser.wait(ExpectedConditions.presenceOf($("input[nome = 'linkbox']")), 1000);
    await $("input[name = 'linkbox']").clear().sendKeys(link);
});

When("Eu clico no botão {string}", async function(botao) {
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