const prompt = require('prompt');

prompt.start();

console.log("Igrese un numeros");

prompt.get(["numero"], function(error, resultado) {

    let numero = +resultado.numero 
    let i = 2;
    while (numero % i !==0 && i < numero / 2){
    i++;
    }
    if(numero % i !== 0){
        console.log("El numero es primo");
    }
    else {
        console.log("El numero no es primo");
    }
});