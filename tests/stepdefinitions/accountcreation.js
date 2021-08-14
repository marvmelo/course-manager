const { Given, When,Then } = require("@cucumber/cucumber")
const { browser } = require("protractor")
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;

Given('eu estou deslogado', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

Given('eu estou na página {string}', function (string) {
    browser.get("http://localhost:4200/");
});

Given('não há conta com nome, email e senha {string}, {string} e {string}', function (string, string2, string3) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given('há conta com nome, email e senha {string}, {string}, {string}', function (string, string2, string3) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('eu insiro as informações de nome, email e senha {string}, {string} e {string}', function (string, string2, string3) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('eu aperto em {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('eu vejo uma mensagem {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
