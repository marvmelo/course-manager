const { Given } = require("@cucumber/cucumber")
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;

Given('Eu estou na página {string}', function (string) {
    browser.get("http://localhost:4200/");
});

