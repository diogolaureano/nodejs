//Importando o express como um modulo
const express = require("express");

//(Inicializando)Carrega o Express dentro da variavel app
const app = express();

app.get("/", function(req, res) {
    //req => Dados enviados pelo usuario.
    //res => Dados enviados para o usuario
    res.send("Bem vindo ao site!")
});

app.get("/blog/:artigo?", function(req, res) {
    var artigo = req.params.artigo;
    if (artigo) {
        res.send("Novo site")
    } else {

        res.send("Bem vindo ao meu blog!: www.sitedosousa.com");
    }
});

app.get("/site/:nome/:empresa", function(req, res) {
    var nome = req.params.nome;
    var empresa = req.params.empresa;

    res.send("Oi " + nome + " " + empresa)
});

app.get("/canal/youtube", function(req, res) {
    var canal = req.query["canal"]
    if (canal) {
        res.send(canal);
    } else {
        res.send("Nenhum canal fornecido")
    }
})

app.listen(8181, function(erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
})