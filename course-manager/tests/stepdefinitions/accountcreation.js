const { Given, When,Then } = require("@cucumber/cucumber")
const { browser, $, element, ExpectedConditions } = require("protractor")
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;

Given('eu estou deslogado', function () {

});

Given('eu estou na página {string}', async function (string) {
  await browser.get("localhost:4200/");
  await expect(browser.getTitle()).to.eventually.equal("CourseManager");
});

Given('não há conta com nome, email e senha {string}, {string} e {string}', function (string, string2, string3) {

});

Given('há conta com nome, email e senha {string}, {string}, {string}', function (string, string2, string3) {

});

When('eu insiro as informações de nome, email e senha {string}, {string} e {string}', async function (nome, email, psd) {
  await browser.wait(ExpectedConditions.presenceOf(element(by.name("namebox"))), 10000);
  await element(by.name("namebox")).sendKeys(nome);
  await browser.wait(ExpectedConditions.presenceOf($("input[name='emailbox']")), 10000);
  await $("input[name='emailbox']").clear().sendKeys(email);
  await browser.wait(ExpectedConditions.presenceOf($("input[name='namebox']")), 10000);
  await $("input[name='passwordbox']").clear().sendKeys(psd);
});

When('eu aperto em {string}', async function (string) {
  await browser.wait(ExpectedConditions.elementToBeClickable(element(by.name('accountbutton'))));
  await element(by.name('accountbutton')).click();
});

Then('eu vejo uma mensagem {string}', async function (mensagem) {
  await browser.wait(ExpectedConditions.alertIsPresent(), 1000);
  var alet_box =  browser.switchTo().alert();
  await expect(alet_box.getText()).to.eventually.equal(mensagem);
  await alet_box.accept();
  await browser.sleep(2000);
});