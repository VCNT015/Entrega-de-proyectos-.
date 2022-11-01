// Escribir un programa que escriba en pantalla los divisores de un número dado.

prompt = require('prompt');

prompt.start();
console.log('Ingrese un numero');
prompt.get(['numero'],function(error,resultado){
    let numero = resultado.numero;
    let numeroD;
    
    for(numeroD = 0; numeroD <= numero ; numeroD++ ) {
        if (numero % numeroD === 0){
            console.log("El numero "+numero+ " es divisible por: " +numeroD);
        }
        
    }
    
})