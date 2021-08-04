//Importação - Variavel recebendo o modulo da função 
//var calculadora = require("./calculadora")

//Para multiplas funções, nome da variavel "." função escolhida
//console.log(calculadora.soma(2, 2))


//Modulo HTTP ja vem instalado no node
var http = require("http")

//Servidor http criado
http.createServer().listen(8181)
console.log("Meu servidor esta rodando!")

//Instalando Sequelize