const prompt = require('prompt');

prompt.start();

console.log("Igrese 2 numeros");

prompt.get(["numero1", "numero2"], function(error, resultado) {
    

    let numero1 = +resultado.numero1 
    let numero2 = +resultado.numero2 

    if (numero1 > numero2) {
        console.log("variable 'numero1' es mayor que variable 'numero2'")
    } 
    if (numero1 < numero2) {
        console.log("variable 'numero2' es mayor que variable 'numero1'")
    }
    if (numero1 == numero2) {
        console.log("variable 'numero1' es igual que variable 'numero2'")
    } else {
        console.log("No es igual")
    }
});