
var express = require('express'); // Usamos a biblioteca express do nodejs
var user = require("./user");

var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain); // Isso permite o nosso frontend fazer requisições sem estar acoplado ao server
app.use(express.json());  // O server espera receber arquivos json (Eu acho)

var userDict = new Map();

// Essa função é chamada quando o server recebe uma requisição POST enviada para /createAccount
// Ela verifica se o email já está cadastro em userDict e cadastra, se não estiver.
// Os paramêtros dela são endereço atribuido a ela e uma função cujos os paramêtros são a requisição e a resposta
// Essa segunda função que processa a requisição e manda uma resposta
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
    console.log(userDict); // É como um print
})

// Isso faz o servidor ficar olhando para a porta 3000 e esperando requisição
var server = app.listen(3000, function () {
    console.log('App listening on port 3000!')
  })