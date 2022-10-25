const prompt = require('prompt');

prompt.start();

console.log("Igrese un numeros");

prompt.get(["numero"], function(error, resultado) {
    

    let numero = +resultado.numero
if (numero % 2 === 0 ){
    console.log("Es divisible por 2");
    }
    else {
        console.log("No es divisible por 2")
    }
});