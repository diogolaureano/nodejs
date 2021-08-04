//Importação - Variavel recebendo o modulo da função 
//var calculadora = require("./calculadora")

//Para multiplas funções, nome da variavel "." função escolhida
//console.log(calculadora.soma(2, 2))


//Modulo HTTP ja vem instalado no node
//Recebendo o modulo http em uma variavel
var http = require("http")

//Servidor http criado
//Criando função de req e res, para apresentar no navegador
http.createServer(function(requisicao, resposta) {
        resposta.end("Bem vindo ao meu site!")
    }).listen(8181) //Acesso no navegador (localhost:8181) 

console.log("Meu servidor esta rodando!")