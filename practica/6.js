const prompt = require('prompt');

prompt.start();

console.log("Igrese 3 numeros");
// Obtener valores de la consola
prompt.get(["numero1", "numero2", "numero3" ], function(error, resultado) {
    // Inicio de operaciones

    let numero1 = +resultado.numero1 // Obtener valores pedidos al usuario
    let numero2 = +resultado.numero2 // Obtener valores pedidos al usuario
    let numero3 = +resultado.numero3 // Obtener valores pedidos al usuario
    
    if (numero1 > numero2){
        console.log("Variable'numero1' es mayor que 'numero2'")
    }
    if (numero1 < numero2) {
        console.log("Variable'numero2' es mayor que 'numero1")
    }
    if (numero1 > numero3) {
        console.log("Variable'numero1' es mayor que 'numero3")
    }
    if (numero1 < numero3) {
        console.log("Variable'numero3' es mayor que 'numero1")
    }
    if (numero1 == numero2) {
        console.log("variable 'numero1' es igual que variable 'numero2'")
    } else {
        console.log("Los numeros son diferentes")
    }
  
});