// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a.

const prompt = require('prompt');

prompt.start()

console.log("Escribir un texto")

prompt.get(["valor"], function (error, resultado) {
    let conteoLetra_A = 0;
    const valor = resultado.valor;
    
    for (let step = 0; step < valor.length; step = step + 1) {
        if (valor[step] === "a") {
            conteoLetra_A = conteoLetra_A + 1;
        }
    }

    console.log("La letra 'a' aparece " + conteoLetra_A + " de veces")
});