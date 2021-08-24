
var express = require('express'); // Usamos a biblioteca express do nodejs
var user = require("./user");
var material = require("./material")
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

var materialDict = new Map();

var cursos = [];

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

app.post("/login", function (req, res) {
    var newUser = new user.User();
    console.log(req.body);
    newUser.set_user_data(req.body.nome, req.body.email, req.body.hashedpsw);
    if (userDict.has(newUser.email) && userDict.get(newUser.email).hashedpsw==newUser.hashedpsw) {
        res.status(200).send("Confirmado");
    }
    else {
        res.status(400).send("Inexistente");
    }
    console.log(userDict); // É como um print
})

// Essa função é chamada quando o server recebe uma requisição POST enviada para /adMaterial
// Ela verifica se o link já está cadastro em materialDict e cadastra, se não estiver.
// Os paramêtros dela são endereço atribuido a ela e uma função cujos os paramêtros são a requisição e a resposta
// Essa segunda função que processa a requisição e manda uma resposta
app.post("/adMaterial", function (req, res) {

    var newMaterial = new material.Material();
   
    newMaterial.set_material_data(req.body.nome, req.body.tipo, req.body.link);
    if (materialDict.has(newMaterial.link)) {
        res.status(400).send("Existing Material");
    }
    else {
        materialDict.set(newMaterial.link, newMaterial);
        res.status(200).send("Done");
    }
    console.log(materialDict); // É como um print

    })


app.post('/cursos', function(req,res){
    
    var newCurso = new curso.Curso();
    console.log(req.body);


    newCurso.set(req.body.id,req.body.title,req.body.content);
    let titles = cursos.filter(value => value.title == newCurso.title);

    if(titles.length == 0){
        cursos.push(newCurso);
        res.status(200).send("Done");
        //console.log(cursos);
    }
    
    else{
        res.status(400).send("Existing Course");
        console.log("Existing Course");
    }
})

app.get('/cursos',function(req,res){
    res.send(JSON.stringify(cursos));
    })


    // Isso faz o servidor ficar olhando para a porta 3000 e esperando requisição
    var server = app.listen(3000, function () {
    console.log('App listening on port 3000!')
    })


app.delete('/cursos/:id', function(req,res){
    console.log(req.params.id);
    newCursos = cursos.filter( value => value.id!=req.params.id);
    cursos = newCursos;
    res.status(200).send("Course Deleted");
});
