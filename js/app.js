//declaração de variáveis
var a = 100
var b = 2

//declarando contas
//adição
var total = 0
var total = a + b
console.log("Total: "+ total)

//subtração
var total = 0
var total = a - b
console.log("Total: "+ total)

//multiplicação
var total = 0
var total = a * b
console.log("Total: "+ total)

//divisão
var total = 0
var total = a / b
console.log("Total: "+ total)


//laços condicionais:
if (a <= 10) {
    console.log("Variável A é menor que 10")
}
else{
    console.log("Variável A maior que 10")
}

//buscando uma função de um outros arquivos
var soma = require('./soma.js')
console.log(soma(10,10))

var sub = require('./sub.js')
console.log(sub(10,10))

var div = require('./div.js')
console.log(div(10,10))

var mult = require('./mult.js')
console.log(mult(10,10))

//usando servidores web com JS

var http = require("http")

http.createServer(function(req, res){
    res.end("Mensagem direcionada")
}).listen(8081)

console.log("Servidor Ativo!")



