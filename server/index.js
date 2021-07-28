
var express = require('express');
var fs = require('fs');

var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.use(express.json());

app.post("/createAccount", function (req, res) {
    fs.appendFile("users.json", req.body);
    res.sendStatus(200);
})