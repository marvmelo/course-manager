
var express = require('express'); // Usamos a biblioteca express do nodejs
var user = require("./user");
var curso = require("./curso");
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
    newUser.set_user_data(req.body.nome, req.body.email, req.body.hashedpsw);
    if (userDict.has(newUser.email)) {
        res.status(400).send("Existing Email");
    }
    else {
        userDict.set(newUser.email, newUser);
        res.status(200).send("Done");
    }
    console.log(userDict); // É como um print
})


var cursos = [];

app.post('/cursos', function(req,res){

    var newCurso = new curso.Curso();
    newCurso.set(req.body.id,req.body.title,req.body.content);
    res.status(200).send("Done");
    cursos.push(newCurso);
    console.log(cursos);

})

app.get('/cursos',function(req,res){
    res.send(JSON.stringify(cursos));
})


// Isso faz o servidor ficar olhando para a porta 3000 e esperando requisição
var server = app.listen(3000, function () {
    console.log('App listening on port 3000!')
  })