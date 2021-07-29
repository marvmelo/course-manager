
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
    var newUser = new user.User();
    newUser.set_user_data(req.body.nome, req.body.email, req.body.hashepwd);
    if (userDict.has(newUser.email)) {
        res.sendStatus(400);
    }
    else {
        userDict.set(newUser.email, newUser);
        res.sendStatus(200);
    }
    console.log(userDict);
})

var server = app.listen(3000, function () {
    console.log('App listening on port 3000!')
  })