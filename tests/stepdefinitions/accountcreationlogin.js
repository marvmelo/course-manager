const { Given, When,Then } = require("@cucumber/cucumber")
const { browser, $, element, ExpectedConditions } = require("protractor")
const { request } = require("request")
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;

Given('eu estou deslogado', function () {
  await browser.get("localhost:4200");
  await expect(browser.getTitle()).to.eventually.equal("CourseManager");
});

Given('eu estou na página {string}', async function (pagina) {
  if (pagina=="Fazer login") {
    await browser.getCurrentUrl().to.eventually.equal("localhost:4200/cadastro").then( e => {console.log(e)});
  }
  else if (pagina=="Main") {
    await browser.getCurrentUrl().to.eventually.equal("localhost:4200/main");
  }
});

Given('não há conta com nome, email e senha {string}, {string} e {string}', function (string, string2, string3) {
  request.delete("localhost:3000/createAccount")
});

Given('há conta com nome, email e senha {string}, {string} e {string}', function (nome, email, senha) {
  request.delete("localhost:3000/createAccount")
  request.post("localhost:3000/createAccount", form(
    {
      'content-type' : 'application/json',
      body: {'nome': nome, 'email': email, 'hashedpsw': senha} 
    }
  ));
});

When('eu insiro as informações de email e senha {string} e {string}', async function(email, senha){
  await browser.wait(ExpectedConditions.presenceOf($("input[name='emailbox']")), 1000);
  await $("input[name='emailbox']").clear().sendKeys(email);
  await browser.wait(ExpectedConditions.presenceOf($("input[name='passwordbox']")), 1000);
  await $("input[name='passwordbox']").clear().sendKeys(senha);
});

When('eu insiro as informações de nome, email e senha {string}, {string} e {string}', async function (nome, email, senha) {
  await browser.wait(ExpectedConditions.presenceOf(element(by.name("namebox"))), 1000);
  await element(by.name("namebox")).sendKeys(nome);
  await browser.wait(ExpectedConditions.presenceOf($("input[name='emailbox']")), 1000);
  await $("input[name='emailbox']").clear().sendKeys(email);
  await browser.wait(ExpectedConditions.presenceOf($("input[name='passwordbox']")), 1000);
  await $("input[name='passwordbox']").clear().sendKeys(senha);
});

When('eu aperto em {string}', async function (botao) {
  if (botao=="Criar conta"){
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.name('accountbutton'))));
    await element(by.name('accountbutton')).click();
  }
  else if (botao=="Acessar Conta") {
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.name('loginbutton'))));
    await element(by.name('loginbutton')).click();
  }
});

Then('eu vejo uma mensagem {string}', async function (mensagem) {
  await browser.wait(ExpectedConditions.alertIsPresent(), 1000);
  var alet_box =  browser.switchTo().alert();
  await expect(alet_box.getText()).to.eventually.equal(mensagem);
  await alet_box.accept();
  await browser.sleep(2000);
});

Then('eu vou para página {string}', async function (pagina) {
  if (pagina=="Fazer login") {
    await browser.wait(ExpectedConditions.elementToBeClickable(element(by.name('loginredirect'))));
    await element(by.name('loginredirect')).click();
  }
});