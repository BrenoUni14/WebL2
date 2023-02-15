

var tabuada = function(n1){
    var resultado = ""
    for (var index = 0; index <= 10; index++) {
        resultado += n1 + " X " + index + " = " + n1*index + "\n"
        
    }
    return resultado

    
}

module.exports = tabuada