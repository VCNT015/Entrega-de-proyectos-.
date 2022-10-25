const prompt = require('prompt');

prompt.start();

console.log("Ingrese su nombre");
prompt.get(["Nombre"], function(error, resultado){
    let Nombre = +resultado;
    console.log("Hola" +" "+ resultado.Nombre);
});