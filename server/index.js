
var express = require('express');
var user = require("./user");

var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.use(express.json());

var userDict = new Map();

app.post("/createAccount", function (req, res) {
    console.log(req.body.name);
    res.sendStatus(200);
})

var server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })